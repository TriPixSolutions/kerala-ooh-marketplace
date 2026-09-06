import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import MessageThread from "@/components/message-thread";
import { createClient } from "@/lib/supabase/server";

export default async function ConversationPage({ params }: { params: Promise<{ conversationId: string }> }) {
  const { conversationId } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`/auth/login?next=/messages/${conversationId}`);

  const { data: membership } = await supabase.from("conversation_members").select("user_id").eq("conversation_id", conversationId).eq("user_id", user.id).maybeSingle();
  if (!membership) notFound();

  const { data: conversation } = await supabase.from("conversations").select("id,status,created_at,listing_id,ad_listings(title,slug,ad_type)").eq("id", conversationId).single();
  if (!conversation) notFound();

  const { data: messages } = await supabase.from("messages").select("id,conversation_id,sender_id,body,created_at,read_at").eq("conversation_id", conversationId).order("created_at", { ascending: true });
  const listing = Array.isArray(conversation.ad_listings) ? conversation.ad_listings[0] : conversation.ad_listings;

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8"><Link href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link><Link href="/messages" className="text-sm text-[var(--slate)]">All messages</Link></div></header><div className="mx-auto max-w-5xl px-4 py-6 sm:px-5 lg:px-8"><div className="mb-5 rounded-2xl border border-[var(--border)] bg-white p-5"><div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Conversation</p><h1 className="mt-1 text-xl font-semibold">{listing?.title || "Advertising space"}</h1><p className="mt-1 text-sm text-[var(--slate)]">{listing?.ad_type?.replaceAll("_", " ") || "OOH advertising"}</p></div><span className="w-fit rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold uppercase">{conversation.status}</span></div></div><MessageThread conversationId={conversationId} userId={user.id} initialMessages={(messages ?? []) as any} /></div></main>;
}
