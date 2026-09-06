import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import ListingMediaUploader from "@/components/listing-media-uploader";
import { createClient } from "@/lib/supabase/server";

export default async function OwnerListingManagePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login");

  const { data: profile } = await supabase.from("profiles").select("role,status").eq("id", user.id).single();
  if (!profile || profile.role !== "LISTING_OWNER" || profile.status !== "ACTIVE") redirect("/dashboard");

  const { data: listing } = await supabase
    .from("ad_listings")
    .select("id,title,description,status,ad_type,size_width,size_height,size_unit,estimated_views_daily,estimated_views_monthly,locations(address_line,landmark,cities(name),districts(name)),listing_pricing(monthly_price,daily_price,weekly_price,currency),listing_media(id,storage_path,media_type,sort_order,alt_text)")
    .eq("id", id)
    .eq("owner_id", user.id)
    .single();

  if (!listing) notFound();
  const location = Array.isArray(listing.locations) ? listing.locations[0] : listing.locations;
  const pricing = Array.isArray(listing.listing_pricing) ? listing.listing_pricing[0] : listing.listing_pricing;
  const media = [...(listing.listing_media ?? [])].sort((a, b) => a.sort_order - b.sort_order);

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"><Link href="/owner" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link><Link href="/owner/listings" className="text-sm text-[var(--slate)]">Back to spaces</Link></div></header><div className="mx-auto max-w-6xl px-5 py-10 lg:px-8"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Manage space</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">{listing.title}</h1><p className="mt-3 text-sm text-[var(--slate)]">{[location?.cities?.name, location?.districts?.name].filter(Boolean).join(", ") || "Location pending"}</p></div><span className="w-fit rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-xs font-semibold">{listing.status.replaceAll("_", " ")}</span></div><div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_.65fr]"><div className="space-y-6"><ListingMediaUploader listingId={listing.id} initialMedia={media as any} /><section className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Space information</p><div className="mt-5 grid gap-5 sm:grid-cols-2"><div><p className="text-xs text-[var(--muted)]">Format</p><p className="mt-1 text-sm font-semibold">{listing.ad_type.replaceAll("_", " ")}</p></div><div><p className="text-xs text-[var(--muted)]">Dimensions</p><p className="mt-1 text-sm font-semibold">{listing.size_width && listing.size_height ? `${listing.size_width} × ${listing.size_height} ${listing.size_unit}` : "Not set"}</p></div><div><p className="text-xs text-[var(--muted)]">Daily views</p><p className="mt-1 text-sm font-semibold">{listing.estimated_views_daily?.toLocaleString("en-IN") || "Not set"}</p></div><div><p className="text-xs text-[var(--muted)]">Monthly views</p><p className="mt-1 text-sm font-semibold">{listing.estimated_views_monthly?.toLocaleString("en-IN") || "Not set"}</p></div><div className="sm:col-span-2"><p className="text-xs text-[var(--muted)]">Address</p><p className="mt-1 text-sm font-semibold">{location?.address_line || "Not set"}</p><p className="mt-1 text-sm text-[var(--slate)]">{location?.landmark || ""}</p></div></div></section></div><aside className="space-y-6"><section className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Pricing</p><p className="mt-3 text-3xl font-semibold">{pricing?.monthly_price ? `₹${Number(pricing.monthly_price).toLocaleString("en-IN")}` : "Price not set"}</p><p className="mt-1 text-sm text-[var(--slate)]">per month</p></section><section className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Description</p><p className="mt-3 whitespace-pre-line text-sm leading-6 text-[var(--slate)]">{listing.description}</p></section></aside></div></div></main>;
}
