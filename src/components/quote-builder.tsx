"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Item = { description: string; quantity: string; unitPrice: string };

export default function QuoteBuilder({ bookingRequestId }: { bookingRequestId: string }) {
  const router = useRouter();
  const [title, setTitle] = useState("OOH Campaign Quotation");
  const [notes, setNotes] = useState("");
  const [tax, setTax] = useState("18");
  const [validUntil, setValidUntil] = useState("");
  const [items, setItems] = useState<Item[]>([{ description: "Ad space rental", quantity: "1", unitPrice: "0" }]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + (Number(item.quantity) || 0) * (Number(item.unitPrice) || 0), 0), [items]);
  const taxAmount = subtotal * ((Number(tax) || 0) / 100);
  const total = subtotal + taxAmount;

  function updateItem(index: number, key: keyof Item, value: string) {
    setItems((current) => current.map((item, i) => i === index ? { ...item, [key]: value } : item));
  }

  function addItem() { setItems((current) => [...current, { description: "", quantity: "1", unitPrice: "0" }]); }
  function removeItem(index: number) { setItems((current) => current.length === 1 ? current : current.filter((_, i) => i !== index)); }

  async function submit(event: FormEvent) {
    event.preventDefault(); setBusy(true); setError("");
    const payloadItems = items.map((item, index) => ({ description: item.description.trim(), quantity: Number(item.quantity) || 0, unit_price: Number(item.unitPrice) || 0, sort_order: index })).filter((item) => item.description);
    try {
      const response = await fetch("/api/quotes", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ bookingRequestId, title, notes, taxPercent: Number(tax) || 0, validUntil: validUntil || null, items: payloadItems }) });
      const result = await response.json(); if (!response.ok) throw new Error(result.error || "Unable to create quote");
      router.push(`/owner/quotes/${result.quoteId}`);
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to create quote"); } finally { setBusy(false); }
  }

  return <form onSubmit={submit} className="space-y-6"><section className="rounded-2xl border border-[var(--border)] bg-white p-6"><div className="grid gap-5 sm:grid-cols-2"><label className="block sm:col-span-2"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Quote title</span><input value={title} onChange={(e) => setTitle(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]" required /></label><label><span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Tax %</span><input type="number" min="0" step="0.01" value={tax} onChange={(e) => setTax(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm" /></label><label><span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Valid until</span><input type="date" value={validUntil} onChange={(e) => setValidUntil(e.target.value)} className="mt-2 w-full rounded-xl border border-[var(--border)] px-4 py-3 text-sm" /></label></div></section><section className="rounded-2xl border border-[var(--border)] bg-white p-6"><div className="flex items-center justify-between"><div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Line items</p><h2 className="mt-1 text-lg font-semibold">Campaign pricing</h2></div><button type="button" onClick={addItem} className="rounded-xl border border-[var(--border-strong)] px-4 py-2 text-sm font-semibold">Add item</button></div><div className="mt-5 space-y-3">{items.map((item, index) => <div key={index} className="grid gap-3 md:grid-cols-[1fr_110px_150px_auto]"><input value={item.description} onChange={(e) => updateItem(index, "description", e.target.value)} placeholder="Description" className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm" /><input type="number" min="0" step="0.01" value={item.quantity} onChange={(e) => updateItem(index, "quantity", e.target.value)} placeholder="Qty" className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm" /><input type="number" min="0" step="0.01" value={item.unitPrice} onChange={(e) => updateItem(index, "unitPrice", e.target.value)} placeholder="Unit price" className="rounded-xl border border-[var(--border)] px-4 py-3 text-sm" /><button type="button" onClick={() => removeItem(index)} className="rounded-xl border border-[var(--border)] px-3 py-2 text-sm text-[var(--slate)]">Remove</button></div>)}</div></section><section className="grid gap-6 lg:grid-cols-[1fr_320px]"><label className="rounded-2xl border border-[var(--border)] bg-white p-6"><span className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Notes</span><textarea rows={7} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Terms, installation, printing, payment notes…" className="mt-3 w-full resize-y rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]" /></label><div className="rounded-2xl border border-[var(--border)] bg-[var(--ink)] p-6 text-white"><p className="text-xs uppercase tracking-[0.14em] text-white/60">Quote total</p><div className="mt-5 space-y-3 text-sm"><div className="flex justify-between"><span className="text-white/60">Subtotal</span><span>₹{subtotal.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span></div><div className="flex justify-between"><span className="text-white/60">Tax</span><span>₹{taxAmount.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span></div><div className="mt-3 border-t border-white/15 pt-4 text-lg font-semibold"><div className="flex justify-between"><span>Total</span><span>₹{total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</span></div></div></div><button disabled={busy} className="mt-6 w-full rounded-xl bg-white px-4 py-3.5 text-sm font-semibold text-[var(--ink)] disabled:opacity-50">{busy ? "Creating…" : "Create quote"}</button>{error && <p className="mt-3 text-xs text-red-200">{error}</p>}</div></section></form>;
}
