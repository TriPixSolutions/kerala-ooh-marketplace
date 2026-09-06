"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import MessageComposer from "@/components/message-composer";

type Message = { id: string; conversation_id: string; sender_id: string; body: string; created_at: string; read_at: string | null };

export default function MessageThread({ conversationId, userId, initialMessages }: { conversationId: string; userId: string; initialMessages: Message[] }) {
  const [messages, setMessages] = useState(initialMessages);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const supabase = createClient();
    const channel = supabase.channel(`conversation:${conversationId}`).on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `conversation_id=eq.${conversationId}` }, (payload) => {
      setMessages((current) => current.some((item) => item.id === payload.new.id) ? current : [...current, payload.new as Message]);
    }).subscribe();
    return () => { void supabase.removeChannel(channel); };
  }, [conversationId]);

  useEffect(() => { bottom.current?.scrollIntoView({ behavior: "smooth" }); }, [messages.length]);

  return <div className="flex min-h-[70vh] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)]"><div className="flex-1 space-y-3 overflow-y-auto p-5 sm:p-7">{messages.length === 0 ? <div className="flex h-full min-h-[420px] items-center justify-center text-center"><div><p className="text-sm font-semibold">Start the conversation</p><p className="mt-1 text-sm text-[var(--slate)]">Ask about dates, pricing, reach or campaign requirements.</p></div></div> : messages.map((message) => <div key={message.id} className={`flex ${message.sender_id === userId ? "justify-end" : "justify-start"}`}><div className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.sender_id === userId ? "bg-[var(--ink)] text-white" : "border border-[var(--border)] bg-white text-[var(--ink)]"}`}><p className="whitespace-pre-wrap">{message.body}</p><p className={`mt-1 text-[10px] ${message.sender_id === userId ? "text-white/60" : "text-[var(--muted)]"}`}>{new Date(message.created_at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</p></div></div>)}<div ref={bottom} /></div><MessageComposer conversationId={conversationId} /></div>;
}
