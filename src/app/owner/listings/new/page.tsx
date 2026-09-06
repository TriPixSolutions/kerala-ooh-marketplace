"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

const types = [
  ["BILLBOARD", "Billboard"],
  ["HOARDING", "Hoarding"],
  ["LED_SCREEN", "LED screen"],
  ["RESTAURANT_SCREEN", "Restaurant screen"],
  ["MALL_SCREEN", "Mall screen"],
  ["PUBLIC_DISPLAY", "Public display"],
  ["OTHER", "Other"],
] as const;

export default function NewListingPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("BILLBOARD");
  const [city, setCity] = useState("Kochi");
  const [district, setDistrict] = useState("Ernakulam");
  const [address, setAddress] = useState("");
  const [landmark, setLandmark] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("ft");
  const [dailyViews, setDailyViews] = useState("");
  const [monthlyViews, setMonthlyViews] = useState("");
  const [monthlyPrice, setMonthlyPrice] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true); setError(""); setSuccess("");
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = "/auth/login"; return; }

    const { data: districtRow, error: districtError } = await supabase.from("districts").select("id").eq("slug", district.toLowerCase().replaceAll(" ", "-")).maybeSingle();
    if (districtError || !districtRow) { setError("We could not find that district. Please try again."); setLoading(false); return; }
    const { data: cityRow, error: cityError } = await supabase.from("cities").select("id").eq("name", city).eq("district_id", districtRow.id).maybeSingle();
    if (cityError || !cityRow) { setError("We could not find that city. Please try again."); setLoading(false); return; }

    const slugBase = title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const slug = `${slugBase}-${crypto.randomUUID().slice(0, 8)}`;
    const { data: location, error: locationError } = await supabase.from("locations").insert({ district_id: districtRow.id, city_id: cityRow.id, address_line: address, landmark }).select("id").single();
    if (locationError || !location) { setError(locationError?.message ?? "Could not create location."); setLoading(false); return; }

    const { data: listing, error: listingError } = await supabase.from("ad_listings").insert({ owner_id: user.id, location_id: location.id, title, slug, description, ad_type: type, status: "PENDING_REVIEW", size_width: Number(width) || null, size_height: Number(height) || null, size_unit: unit, estimated_views_daily: Number(dailyViews) || null, estimated_views_monthly: Number(monthlyViews) || null }).select("id").single();
    if (listingError || !listing) { setError(listingError?.message ?? "Could not create listing."); setLoading(false); return; }

    const { error: priceError } = await supabase.from("listing_pricing").insert({ listing_id: listing.id, monthly_price: Number(monthlyPrice) || null, currency: "INR" });
    if (priceError) { setError(priceError.message); setLoading(false); return; }

    setSuccess("Listing submitted for review.");
    setLoading(false);
    setTimeout(() => { window.location.href = "/owner/listings"; }, 700);
  }

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8"><a href="/owner" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</a><a href="/owner/listings" className="text-sm text-[var(--slate)]">Back to spaces</a></div></header><div className="mx-auto max-w-4xl px-5 py-10 lg:px-8"><div><p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">New space</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">List an advertising space.</h1><p className="mt-3 text-sm leading-6 text-[var(--slate)]">Add the essentials first. Your listing will enter review before it can appear publicly.</p></div><form onSubmit={submit} className="mt-10 space-y-6"><section className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8"><h2 className="text-lg font-semibold">Space details</h2><div className="mt-5 grid gap-5 sm:grid-cols-2"><label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium">Title</span><input required value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="MG Road Premium Billboard" className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" /></label><label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium">Description</span><textarea required rows={4} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Describe the placement, traffic context and best use cases." className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" /></label><label><span className="mb-2 block text-sm font-medium">Format</span><select value={type} onChange={(e)=>setType(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] bg-white px-4 py-3">{types.map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label></div></section><section className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8"><h2 className="text-lg font-semibold">Location</h2><div className="mt-5 grid gap-5 sm:grid-cols-2"><label><span className="mb-2 block text-sm font-medium">District</span><input required value={district} onChange={(e)=>setDistrict(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label><label><span className="mb-2 block text-sm font-medium">City</span><input required value={city} onChange={(e)=>setCity(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label><label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium">Address</span><input value={address} onChange={(e)=>setAddress(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label><label className="sm:col-span-2"><span className="mb-2 block text-sm font-medium">Landmark</span><input value={landmark} onChange={(e)=>setLandmark(e.target.value)} placeholder="Near metro, junction, mall, etc." className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label></div></section><section className="rounded-2xl border border-[var(--border)] bg-white p-6 sm:p-8"><h2 className="text-lg font-semibold">Campaign data</h2><div className="mt-5 grid gap-5 sm:grid-cols-2"><label><span className="mb-2 block text-sm font-medium">Width</span><input type="number" min="0" step="0.01" value={width} onChange={(e)=>setWidth(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label><label><span className="mb-2 block text-sm font-medium">Height</span><input type="number" min="0" step="0.01" value={height} onChange={(e)=>setHeight(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label><label><span className="mb-2 block text-sm font-medium">Unit</span><select value={unit} onChange={(e)=>setUnit(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] bg-white px-4 py-3"><option>ft</option><option>m</option><option>inch</option></select></label><label><span className="mb-2 block text-sm font-medium">Estimated daily views</span><input type="number" min="0" value={dailyViews} onChange={(e)=>setDailyViews(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label><label><span className="mb-2 block text-sm font-medium">Estimated monthly views</span><input type="number" min="0" value={monthlyViews} onChange={(e)=>setMonthlyViews(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label><label><span className="mb-2 block text-sm font-medium">Monthly price (₹)</span><input required type="number" min="0" value={monthlyPrice} onChange={(e)=>setMonthlyPrice(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3" /></label></div></section>{error && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}{success && <p role="status" className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{success}</p>}<div className="flex justify-end"><button disabled={loading} className="rounded-xl bg-[var(--ink)] px-6 py-3.5 text-sm font-semibold text-white disabled:opacity-60">{loading ? "Submitting…" : "Submit for review"}</button></div></form></div></main>;
}
