import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function OwnerDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase.from("profiles").select("full_name, role, status").eq("id", user.id).single();
  if (!profile || profile.status !== "ACTIVE" || profile.role !== "LISTING_OWNER") redirect("/dashboard");

  const [{ count: total }, { count: published }, { count: pending }, { count: enquiries }] = await Promise.all([
    supabase.from("ad_listings").select("id", { count: "exact", head: true }).eq("owner_id", user.id),
    supabase.from("ad_listings").select("id", { count: "exact", head: true }).eq("owner_id", user.id).eq("status", "PUBLISHED"),
    supabase.from("ad_listings").select("id", { count: "exact", head: true }).eq("owner_id", user.id).eq("status", "PENDING_REVIEW"),
    supabase.from("enquiries").select("id", { count: "exact", head: true }).eq("owner_id", user.id).neq("status", "CLOSED"),
  ]);

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"><Link href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link><Link href="/listings" className="text-sm text-[var(--slate)]">Marketplace</Link></div></header><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Listing owner</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Welcome back{profile.full_name ? `, ${profile.full_name}` : ""}.</h1><p className="mt-3 text-sm text-[var(--slate)]">Manage your advertising spaces, enquiries and availability.</p></div><Link href="/owner/listings/new" className="rounded-xl bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-white">Add a space</Link></div><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Total spaces",total ?? 0],["Published",published ?? 0],["Pending review",pending ?? 0],["Open enquiries",enquiries ?? 0]].map(([label,value])=><div key={label as string} className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-sm text-[var(--muted)]">{label}</p><p className="mt-3 text-3xl font-semibold">{value}</p></div>)}</div><div className="mt-10 grid gap-6 lg:grid-cols-3"><Link href="/owner/listings" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Inventory</p><h2 className="mt-2 text-xl font-semibold">Manage spaces</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Edit listings, pricing, media and publication status.</p></Link><Link href="/owner/enquiries" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Pipeline</p><h2 className="mt-2 text-xl font-semibold">Enquiries</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Respond to businesses interested in your spaces.</p></Link><Link href="/owner/messages" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Communication</p><h2 className="mt-2 text-xl font-semibold">Messages</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Continue conversations with advertisers.</p></Link></div></div></main>;
}
