import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-razorpay-signature") || "";
  const eventId = request.headers.get("x-razorpay-event-id") || "";
  const secret = process.env.RAZORPAY_WEBHOOK_SECRET;

  if (!secret || !signature || !eventId) return NextResponse.json({ error: "Invalid webhook configuration or headers" }, { status: 400 });

  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  const valid = expected.length === signature.length && crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  if (!valid) return NextResponse.json({ error: "Invalid webhook signature" }, { status: 401 });

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
    if (event === "payment.captured" || event === "order.paid") {
      const paymentEntity = payload?.payload?.payment?.entity;
      const orderEntity = payload?.payload?.order?.entity;
      const orderId = paymentEntity?.order_id || orderEntity?.id;
      const paymentId = paymentEntity?.id;
      if (orderId && paymentId) {
        const { data: transaction } = await admin.from("payment_transactions").select("id").eq("provider_order_id", orderId).maybeSingle();
        if (transaction) {
          await admin.rpc("webhook_capture_payment", {
            p_payment_id: transaction.id,
            p_provider_payment_id: paymentId,
            p_provider_signature: signature,
          });
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
