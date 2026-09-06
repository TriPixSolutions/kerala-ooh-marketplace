import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function MessagesPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: conversations } = await supabase
    .from("conversations")
    .select("id,status,created_at,listing_id,ad_listings(title,slug,owner_id)")
    .order("created_at", { ascending: false });

  const visible = [];
  for (const conversation of conversations ?? []) {
    const { data: member } = await supabase.from("conversation_members").select("user_id").eq("conversation_id", conversation.id).eq("user_id", user.id).maybeSingle();
    if (!member) continue;
    const { data: latest } = await supabase.from("messages").select("body,created_at,sender_id").eq("conversation_id", conversation.id).order("created_at", { ascending: false }).limit(1).maybeSingle();
    visible.push({ ...conversation, latest });
  }

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8"><Link href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link><Link href="/dashboard" className="text-sm text-[var(--slate)]">Dashboard</Link></div></header><div className="mx-auto max-w-4xl px-5 py-10 lg:px-8"><div><p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Communication</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Messages</h1><p className="mt-3 text-sm text-[var(--slate)]">Keep every space enquiry and owner conversation in one place.</p></div><section className="mt-8 overflow-hidden rounded-2xl border border-[var(--border)] bg-white">{visible.length === 0 ? <div className="p-12 text-center"><p className="font-semibold">No conversations yet</p><p className="mt-2 text-sm text-[var(--slate)]">Start an enquiry from a published advertising space.</p><Link href="/listings" className="mt-5 inline-flex rounded-xl bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white">Browse spaces</Link></div> : <div className="divide-y divide-[var(--border)]">{visible.map((conversation) => { const listing = Array.isArray(conversation.ad_listings) ? conversation.ad_listings[0] : conversation.ad_listings; return <Link key={conversation.id} href={`/messages/${conversation.id}`} className="flex items-center justify-between gap-5 px-5 py-5 transition hover:bg-[var(--surface)]"><div className="min-w-0"><p className="truncate text-sm font-semibold">{listing?.title || "Advertising space"}</p><p className="mt-1 truncate text-sm text-[var(--slate)]">{conversation.latest?.body || "No messages yet"}</p></div><div className="shrink-0 text-right"><p className="text-xs text-[var(--muted)]">{conversation.latest ? new Date(conversation.latest.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }) : "New"}</p><span className="mt-2 inline-flex rounded-full border border-[var(--border)] px-2.5 py-1 text-[10px] font-semibold uppercase">{conversation.status}</span></div></Link>; })}</div>}</section></div></main>;
}
