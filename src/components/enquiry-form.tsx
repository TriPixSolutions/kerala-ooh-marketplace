"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function EnquiryForm({ listingId }: { listingId: string }) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSuccess(false);
    setBusy(true);
    try {
      const response = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId, message }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Could not send enquiry");
      setMessage("");
      setSuccess(true);
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not send enquiry");
    } finally {
      setBusy(false);
    }
  }

  return <form onSubmit={submit} className="mt-7 space-y-3"><label htmlFor="enquiry" className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--muted)]">Tell the owner what you need</label><textarea id="enquiry" value={message} onChange={(event) => setMessage(event.target.value)} minLength={10} rows={5} placeholder="Campaign dates, expected duration, brand category or any questions..." className="w-full resize-y rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none ring-0 placeholder:text-[var(--muted)] focus:border-[var(--ink)]" required /><button disabled={busy} className="w-full rounded-xl bg-[var(--ink)] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60">{busy ? "Sending…" : "Send enquiry"}</button>{success && <p className="text-sm text-[var(--slate)]">Enquiry sent. The listing owner can now respond through the platform.</p>}{error && <p className="text-sm text-red-600">{error}</p>}</form>;
}
