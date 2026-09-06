"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Notification = { id: string; type: string; title: string; body: string; read_at: string | null; created_at: string };

export default function NotificationList({ initialNotifications, userId }: { initialNotifications: Notification[]; userId: string }) {
  const [items, setItems] = useState(initialNotifications);
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase.channel(`notifications:${userId}`).on("postgres_changes", { event: "INSERT", schema: "public", table: "notifications", filter: `user_id=eq.${userId}` }, (payload) => {
      setItems((current) => [payload.new as Notification, ...current.filter((item) => item.id !== payload.new.id)]);
    }).subscribe();
    return () => { void supabase.removeChannel(channel); };
  }, [supabase, userId]);

  async function markRead(id: string) {
    const now = new Date().toISOString();
    setItems((current) => current.map((item) => item.id === id ? { ...item, read_at: now } : item));
    await supabase.from("notifications").update({ read_at: now }).eq("id", id).eq("user_id", userId);
  }

  if (!items.length) return <div className="rounded-2xl border border-[var(--border)] bg-white p-12 text-center"><p className="font-semibold">You are all caught up</p><p className="mt-2 text-sm text-[var(--slate)]">New enquiries and messages will appear here.</p></div>;

  return <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white"><div className="divide-y divide-[var(--border)]">{items.map((item) => <button key={item.id} onClick={() => markRead(item.id)} className={`block w-full px-5 py-5 text-left transition hover:bg-[var(--surface)] ${item.read_at ? "" : "bg-[var(--surface)]/70"}`}><div className="flex gap-4"><div className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${item.read_at ? "bg-[var(--border-strong)]" : "bg-[var(--ink)]"}`} /><div className="min-w-0"><p className="text-sm font-semibold">{item.title}</p><p className="mt-1 text-sm leading-6 text-[var(--slate)]">{item.body}</p><p className="mt-2 text-xs text-[var(--muted)]">{new Date(item.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}</p></div></div></button>)}</div></div>;
}
