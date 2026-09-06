import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase.from("profiles").select("full_name, role, status").eq("id", user.id).single();
  if (!profile || profile.status !== "ACTIVE" || profile.role !== "SUPER_ADMIN") redirect("/dashboard");

  const [{ count: users }, { count: owners }, { count: advertisers }, { count: listings }, { count: pendingListings }, { count: enquiries }, { count: openConversations }] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "LISTING_OWNER"),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "ADVERTISER"),
    supabase.from("ad_listings").select("id", { count: "exact", head: true }),
    supabase.from("ad_listings").select("id", { count: "exact", head: true }).eq("status", "PENDING_REVIEW"),
    supabase.from("enquiries").select("id", { count: "exact", head: true }),
    supabase.from("conversations").select("id", { count: "exact", head: true }).eq("status", "OPEN"),
  ]);

  const statCards: [string, number][] = [
    ["Total users", users ?? 0],
    ["Listing owners", owners ?? 0],
    ["Advertisers", advertisers ?? 0],
    ["Total spaces", listings ?? 0],
    ["Pending listings", pendingListings ?? 0],
    ["Total enquiries", enquiries ?? 0],
    ["Open conversations", openConversations ?? 0],
  ];

  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <header className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link>
          <div className="flex items-center gap-5 text-sm text-[var(--slate)]"><Link href="/listings">Marketplace</Link><span>{profile.full_name || "Super Admin"}</span></div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Control center</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Marketplace overview.</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--slate)]">Review users, listings, enquiries and platform activity from one place.</p>
          </div>
          <span className="rounded-full border border-[var(--border)] bg-white px-3 py-2 text-xs font-semibold">SUPER ADMIN</span>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {statCards.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <p className="text-sm text-[var(--muted)]">{label}</p>
              <p className="mt-3 text-3xl font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link href="/admin/users" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">People</p><h2 className="mt-2 text-xl font-semibold">Manage users</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Review accounts, status and roles.</p></Link>
          <Link href="/admin/listings" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Marketplace</p><h2 className="mt-2 text-xl font-semibold">Review listings</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Approve, pause and manage published inventory.</p></Link>
          <Link href="/admin/enquiries" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Operations</p><h2 className="mt-2 text-xl font-semibold">Enquiries</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Track marketplace demand and conversation flow.</p></Link>
          <Link href="/admin/analytics" className="rounded-2xl border border-[var(--border)] bg-white p-6 hover:border-[var(--border-strong)]"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Performance</p><h2 className="mt-2 text-xl font-semibold">Analytics</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Monitor inventory, users and marketplace activity.</p></Link>
        </div>
      </div>
    </main>
  );
}
