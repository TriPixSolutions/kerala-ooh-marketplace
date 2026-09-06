"use client";

import { useState } from "react";

function loadRazorpay() {
  return new Promise<boolean>((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if ((window as any).Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export function InvoiceActions({ invoiceId, invoiceNumber, canPay, balance }: { invoiceId: string; invoiceNumber: string; canPay: boolean; balance: number }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const pay = async () => {
    setLoading(true);
    setMessage("");
    try {
      const loaded = await loadRazorpay();
      if (!loaded) throw new Error("Unable to load secure payment checkout");
      const response = await fetch("/api/payments/create-order", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ invoiceId }) });
      const order = await response.json();
      if (!response.ok) throw new Error(order.error || "Unable to create payment order");
      const Razorpay = (window as any).Razorpay;
      const checkout = new Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        name: "Your Ad Space",
        description: invoiceNumber,
        order_id: order.orderId,
        prefill: {},
        theme: { color: "#111318" },
        handler: async (result: any) => {
          const verify = await fetch("/api/payments/verify", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ paymentId: order.paymentId, razorpay_order_id: result.razorpay_order_id, razorpay_payment_id: result.razorpay_payment_id, razorpay_signature: result.razorpay_signature }) });
          const verified = await verify.json();
          if (!verify.ok) throw new Error(verified.error || "Payment verification failed");
          window.location.reload();
        },
        modal: { ondismiss: () => setLoading(false) },
      });
      checkout.open();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Payment failed");
      setLoading(false);
    }
  };

  return <div className="flex items-center gap-3 print:hidden">
    <button type="button" onClick={() => window.print()} className="text-sm font-medium underline underline-offset-4">Print / Save PDF</button>
    {canPay && balance > 0 && <button type="button" onClick={pay} disabled={loading} className="rounded-lg bg-[#111318] px-4 py-2 text-sm font-medium text-white disabled:opacity-50">{loading ? "Opening…" : `Pay ${new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(balance)}`}</button>}
    {message && <span className="text-sm text-red-600">{message}</span>}
  </div>;
}
