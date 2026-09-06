"use client";

import { FormEvent, useState } from "react";

export default function MessageComposer({ conversationId }: { conversationId: string }) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent) {
    event.preventDefault();
    const body = message.trim();
    if (!body || busy) return;
    setBusy(true);
    try {
      const response = await fetch("/api/messages", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ conversationId, message: body }) });
      if (!response.ok) throw new Error((await response.json()).error || "Unable to send message");
      setMessage("");
    } finally {
      setBusy(false);
    }
  }

  return <form onSubmit={submit} className="flex items-end gap-3 border-t border-[var(--border)] bg-white p-4"><textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={1} maxLength={4000} placeholder="Write a message…" className="min-h-11 flex-1 resize-none rounded-xl border border-[var(--border)] px-4 py-3 text-sm outline-none focus:border-[var(--ink)]" /><button disabled={busy || !message.trim()} className="rounded-xl bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white disabled:opacity-50">{busy ? "Sending…" : "Send"}</button></form>;
}
