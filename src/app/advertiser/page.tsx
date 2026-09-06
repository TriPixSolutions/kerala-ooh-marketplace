import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdvertiserDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase.from("profiles").select("full_name, role, status").eq("id", user.id).single();
  if (!profile || profile.status !== "ACTIVE" || profile.role !== "ADVERTISER") redirect("/dashboard");

  const [{ count: saved }, { count: enquiries }, { count: openEnquiries }, { count: messages }] = await Promise.all([
    supabase.from("favorites").select("listing_id", { count: "exact", head: true }).eq("user_id", user.id),
    supabase.from("enquiries").select("id", { count: "exact", head: true }).eq("advertiser_id", user.id),
    supabase.from("enquiries").select("id", { count: "exact", head: true }).eq("advertiser_id", user.id).neq("status", "CLOSED"),
    supabase.from("conversation_members").select("conversation_id", { count: "exact", head: true }).eq("user_id", user.id),
  ]);

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"><Link href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link><Link href="/listings" className="rounded-xl bg-[var(--ink)] px-4 py-2.5 text-sm font-semibold text-white">Browse spaces</Link></div></header><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div><p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Advertiser workspace</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Plan your next campaign{profile.full_name ? `, ${profile.full_name}` : ""}.</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--slate)]">Keep shortlisted spaces, enquiries and conversations together while you compare outdoor opportunities across Kerala.</p></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Saved spaces",saved ?? 0],["Total enquiries",enquiries ?? 0],["Open enquiries",openEnquiries ?? 0],["Conversations",messages ?? 0]].map(([label,value])=><div key={label as string} className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-sm text-[var(--muted)]">{label}</p><p className="mt-3 text-3xl font-semibold">{value}</p></div>)}</div><div className="mt-10 grid gap-6 lg:grid-cols-3"><Link href="/listings" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Discovery</p><h2 className="mt-2 text-xl font-semibold">Find advertising spaces</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Search by location, format, reach, availability and price.</p></Link><Link href="/advertiser/saved" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Shortlist</p><h2 className="mt-2 text-xl font-semibold">Saved spaces</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Return to spaces you are considering for upcoming campaigns.</p></Link><Link href="/advertiser/messages" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Communication</p><h2 className="mt-2 text-xl font-semibold">Enquiries & messages</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Follow up with space owners and move campaign discussions forward.</p></Link></div></div></main>;
}
