import { NextResponse } from "next/server";
import { getRazorpay } from "@/lib/razorpay";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const invoiceId = String(body.invoiceId || "");
    if (!invoiceId) return NextResponse.json({ error: "invoiceId is required" }, { status: 400 });

    const { data: invoice, error: invoiceError } = await supabase
      .from("invoices")
      .select("id,invoice_number,total_amount,amount_paid,currency,status,advertiser_id")
      .eq("id", invoiceId)
      .single();

    if (invoiceError || !invoice) return NextResponse.json({ error: "Invoice not found" }, { status: 404 });
    if (invoice.advertiser_id !== user.id) return NextResponse.json({ error: "Not authorized" }, { status: 403 });
    if (!["ISSUED", "PARTIALLY_PAID", "OVERDUE"].includes(invoice.status)) return NextResponse.json({ error: "Invoice is not payable" }, { status: 400 });

    const amount = Number((Number(invoice.total_amount) - Number(invoice.amount_paid)).toFixed(2));
    if (!Number.isFinite(amount) || amount <= 0) return NextResponse.json({ error: "No outstanding balance" }, { status: 400 });

    const razorpay = getRazorpay();
    const order = await razorpay.orders.create({
      amount: Math.round(amount * 100),
      currency: invoice.currency || "INR",
      receipt: invoice.invoice_number,
      notes: { invoice_id: invoice.id, user_id: user.id },
    });

    const { data: paymentId, error: recordError } = await supabase.rpc("record_payment_order", {
      p_invoice_id: invoice.id,
      p_provider_order_id: order.id,
      p_amount: amount,
      p_currency: invoice.currency || "INR",
    });

    if (recordError || !paymentId) {
      return NextResponse.json({ error: "Unable to record payment order" }, { status: 500 });
    }

    return NextResponse.json({
      paymentId,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      invoiceNumber: invoice.invoice_number,
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("create-order", error);
    return NextResponse.json({ error: "Unable to create payment order" }, { status: 500 });
  }
}
