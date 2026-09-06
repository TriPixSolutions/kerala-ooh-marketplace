import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminListingsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");
  const { data: profile } = await supabase.from("profiles").select("role,status").eq("id", user.id).single();
  if (!profile || profile.role !== "SUPER_ADMIN" || profile.status !== "ACTIVE") redirect("/dashboard");

  const { data: listings } = await supabase
    .from("ad_listings")
    .select("id,title,slug,status,ad_type,created_at,profiles!ad_listings_owner_id_fkey(full_name,company_name),locations!ad_listings_location_id_fkey(cities!locations_city_id_fkey(name),districts!locations_district_id_fkey(name))")
    .order("created_at", { ascending: false });

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"><Link href="/admin" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link><Link href="/admin" className="text-sm text-[var(--slate)]">Back to admin</Link></div></header><div className="mx-auto max-w-7xl px-5 py-10 lg:px-8"><p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Marketplace review</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Listings.</h1><p className="mt-3 text-sm text-[var(--slate)]">Review every submitted advertising space before publication.</p><div className="mt-10 overflow-x-auto rounded-2xl border border-[var(--border)] bg-white"><table className="w-full min-w-[850px] text-left text-sm"><thead className="border-b border-[var(--border)] bg-[var(--surface)]"><tr><th className="px-5 py-4 font-semibold">Space</th><th className="px-5 py-4 font-semibold">Owner</th><th className="px-5 py-4 font-semibold">Location</th><th className="px-5 py-4 font-semibold">Type</th><th className="px-5 py-4 font-semibold">Status</th><th className="px-5 py-4 font-semibold">Created</th></tr></thead><tbody>{(listings ?? []).map((listing) => { const owner = Array.isArray(listing.profiles) ? listing.profiles[0] : listing.profiles; const loc = Array.isArray(listing.locations) ? listing.locations[0] : listing.locations; const city = loc && (Array.isArray(loc.cities) ? loc.cities[0]?.name : loc.cities?.name); const district = loc && (Array.isArray(loc.districts) ? loc.districts[0]?.name : loc.districts?.name); return <tr key={listing.id} className="border-b border-[var(--border)] last:border-0"><td className="px-5 py-4"><p className="font-semibold">{listing.title}</p><p className="mt-1 text-xs text-[var(--muted)]">{listing.slug}</p></td><td className="px-5 py-4">{owner?.company_name || owner?.full_name || "—"}</td><td className="px-5 py-4">{[city,district].filter(Boolean).join(", ") || "—"}</td><td className="px-5 py-4">{listing.ad_type.replaceAll("_", " ")}</td><td className="px-5 py-4"><span className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-semibold">{listing.status.replaceAll("_", " ")}</span></td><td className="px-5 py-4 text-[var(--muted)]">{new Date(listing.created_at).toLocaleDateString("en-IN")}</td></tr> })}</tbody></table>{(!listings || listings.length === 0) && <div className="px-6 py-16 text-center text-sm text-[var(--muted)]">No listings have been submitted yet.</div>}</div></div></main>;
}
