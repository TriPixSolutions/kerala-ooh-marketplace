import { NextResponse } from "next/server";
import crypto from "node:crypto";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const body = await request.json();
    const orderId = String(body.razorpay_order_id || "");
    const paymentId = String(body.razorpay_payment_id || "");
    const signature = String(body.razorpay_signature || "");
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!orderId || !paymentId || !signature || !keySecret) return NextResponse.json({ error: "Invalid payment payload" }, { status: 400 });
    const expected = crypto.createHmac("sha256", keySecret).update(`${orderId}|${paymentId}`).digest("hex");
    const valid = expected.length === signature.length && crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
    if (!valid) return NextResponse.json({ error: "Payment signature verification failed" }, { status: 400 });
    const { data: payment, error } = await supabase.from("payment_transactions").select("id,provider_order_id,amount,invoice_id,advertiser_id").eq("provider_order_id", orderId).eq("advertiser_id", user.id).single();
    if (error || !payment) return NextResponse.json({ error: "Payment order not found" }, { status: 404 });
    const { error: captureError } = await supabase.rpc("capture_payment", { p_payment_id: payment.id, p_provider_payment_id: paymentId, p_provider_signature: signature });
    if (captureError) return NextResponse.json({ error: captureError.message }, { status: 400 });
    return NextResponse.json({ success: true, invoiceId: payment.invoice_id });
  } catch (error) {
    console.error("payment verification", error);
    return NextResponse.json({ error: "Unable to verify payment" }, { status: 500 });
  }
}
