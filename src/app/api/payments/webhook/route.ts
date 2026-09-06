import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { createAdminClient } from "@/lib/supabase/admin";

function secureEqual(a: string, b: string) {
  if (!a || !b || a.length !== b.length) return false;
  return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
}

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-razorpay-signature") || "";
  const eventId = request.headers.get("x-razorpay-event-id") || "";
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  if (!secret || !signature || !eventId) return NextResponse.json({ error: "Invalid webhook configuration or headers" }, { status: 400 });
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  if (!secureEqual(expected, signature)) return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });

  let payload: any;
  try { payload = JSON.parse(rawBody); } catch { return NextResponse.json({ error: "Invalid JSON" }, { status: 400 }); }

  const admin = createAdminClient();
  const { data: existing } = await admin.from("razorpay_webhook_events").select("id,processed_at").eq("event_id", eventId).maybeSingle();
  if (existing?.processed_at) return NextResponse.json({ received: true, duplicate: true });

  if (!existing) {
    const { error } = await admin.from("razorpay_webhook_events").insert({ event_id: eventId, event_type: payload.event || "unknown", payload });
    if (error && error.code !== "23505") return NextResponse.json({ error: "Unable to record webhook" }, { status: 500 });
  }

  try {
    const event = String(payload.event || "");
    const payment = payload?.payload?.payment?.entity;
    const order = payload?.payload?.order?.entity;
    if (event === "payment.captured" || event === "order.paid") {
      const orderId = payment?.order_id || order?.id;
      const providerPaymentId = payment?.id;
      const providerAmount = Number(payment?.amount ?? order?.amount_paid ?? order?.amount ?? NaN);
      const providerCurrency = String(payment?.currency ?? order?.currency ?? "").toUpperCase();

      if (orderId && providerPaymentId) {
        const { data: tx } = await admin.from("payment_transactions").select("id,provider_order_id,amount,currency,status").eq("provider_order_id", orderId).maybeSingle();
        if (tx) {
          const expectedMinor = Math.round(Number(tx.amount) * 100);
          if (Number.isFinite(providerAmount) && providerAmount !== expectedMinor) throw new Error("Webhook amount does not match recorded payment order");
          if (providerCurrency && providerCurrency !== String(tx.currency || "INR").toUpperCase()) throw new Error("Webhook currency does not match recorded payment order");
          if (tx.status !== "CAPTURED") {
            const { error } = await admin.rpc("webhook_capture_payment", { p_payment_id: tx.id, p_provider_payment_id: providerPaymentId, p_provider_signature: signature });
            if (error) throw new Error(error.message);
          }
        }
      }
    }

    await admin.from("razorpay_webhook_events").update({ processed_at: new Date().toISOString() }).eq("event_id", eventId);
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("razorpay webhook", error);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
