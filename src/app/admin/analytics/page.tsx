import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

function Stat({ label, value, detail }: { label: string; value: string | number; detail?: string }) {
  return <div className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">{label}</p><p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">{value}</p>{detail && <p className="mt-2 text-sm text-[var(--slate)]">{detail}</p>}</div>;
}

export default async function AdminAnalyticsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login?next=/admin/analytics");
  const { data: profile } = await supabase.from("profiles").select("role,status").eq("id", user.id).single();
  if (!profile || profile.role !== "SUPER_ADMIN" || profile.status !== "ACTIVE") redirect("/dashboard");

  const [users, owners, advertisers, listings, published, pending, enquiries, openEnquiries, conversations, messages] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "LISTING_OWNER"),
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "ADVERTISER"),
    supabase.from("ad_listings").select("id", { count: "exact", head: true }),
    supabase.from("ad_listings").select("id", { count: "exact", head: true }).eq("status", "PUBLISHED"),
    supabase.from("ad_listings").select("id", { count: "exact", head: true }).eq("status", "PENDING_REVIEW"),
    supabase.from("enquiries").select("id", { count: "exact", head: true }),
    supabase.from("enquiries").select("id", { count: "exact", head: true }).in("status", ["NEW", "IN_PROGRESS"]),
    supabase.from("conversations").select("id", { count: "exact", head: true }).eq("status", "OPEN"),
    supabase.from("messages").select("id", { count: "exact", head: true }),
  ]);

  const { data: topDistrictRows } = await supabase.from("ad_listings").select("locations(districts(name))").eq("status", "PUBLISHED").limit(5000);
  const districtCounts = new Map<string, number>();
  for (const row of topDistrictRows ?? []) {
    const location = Array.isArray(row.locations) ? row.locations[0] : row.locations;
    const district = Array.isArray(location?.districts) ? location.districts[0] : location?.districts;
    if (district?.name) districtCounts.set(district.name, (districtCounts.get(district.name) ?? 0) + 1);
  }
  const topDistricts = [...districtCounts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 8);

  const totalUsers = users.count ?? 0;
  const totalListings = listings.count ?? 0;
  const publishedListings = published.count ?? 0;
  const enquiryCount = enquiries.count ?? 0;
  const conversionProxy = enquiryCount && totalListings ? Math.round((enquiryCount / totalListings) * 100) : 0;

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"><Link href="/admin" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link><Link href="/admin" className="text-sm text-[var(--slate)]">Admin</Link></div></header><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><div><p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Operations</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Marketplace analytics</h1><p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--slate)]">A live view of marketplace supply, users, demand and communication activity.</p></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><Stat label="Total users" value={totalUsers} detail={`${owners.count ?? 0} owners · ${advertisers.count ?? 0} advertisers`} /><Stat label="Listings" value={totalListings} detail={`${publishedListings} published · ${pending.count ?? 0} pending review`} /><Stat label="Enquiries" value={enquiryCount} detail={`${openEnquiries.count ?? 0} currently open`} /><Stat label="Open conversations" value={conversations.count ?? 0} detail={`${messages.count ?? 0} messages recorded`} /></div><div className="mt-6 grid gap-6 lg:grid-cols-[1fr_.75fr]"><section className="rounded-2xl border border-[var(--border)] bg-white p-6"><div className="flex items-end justify-between"><div><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Marketplace health</p><h2 className="mt-2 text-xl font-semibold">Supply and demand</h2></div><p className="text-sm font-semibold">{conversionProxy}%</p></div><div className="mt-6 space-y-5"><div><div className="flex justify-between text-xs"><span className="text-[var(--slate)]">Published supply</span><span className="font-semibold">{publishedListings}/{totalListings}</span></div><div className="mt-2 h-2 rounded-full bg-[var(--surface)]"><div className="h-2 rounded-full bg-[var(--ink)]" style={{ width: `${totalListings ? Math.min(100, (publishedListings / totalListings) * 100) : 0}%` }} /></div></div><div><div className="flex justify-between text-xs"><span className="text-[var(--slate)]">Open enquiry share</span><span className="font-semibold">{enquiryCount ? Math.round(((openEnquiries.count ?? 0) / enquiryCount) * 100) : 0}%</span></div><div className="mt-2 h-2 rounded-full bg-[var(--surface)]"><div className="h-2 rounded-full bg-[var(--ink)]" style={{ width: `${enquiryCount ? Math.min(100, ((openEnquiries.count ?? 0) / enquiryCount) * 100) : 0}%` }} /></div></div></div><p className="mt-6 text-xs text-[var(--muted)]">The enquiry-to-listing figure is a planning signal, not a booking conversion rate.</p></section><section className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Supply by district</p><div className="mt-5 space-y-4">{topDistricts.length ? topDistricts.map(([name, count]) => <div key={name} className="flex items-center justify-between border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"><span className="text-sm font-medium">{name}</span><span className="text-sm text-[var(--slate)]">{count}</span></div>) : <p className="text-sm text-[var(--slate)]">No published listing data yet.</p>}</div></section></div></div></main>;
}
