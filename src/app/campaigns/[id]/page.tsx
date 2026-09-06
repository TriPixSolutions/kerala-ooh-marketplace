import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <main className="mx-auto max-w-5xl p-8">Please sign in to view this campaign.</main>;

  const { data: campaign } = await supabase.from("campaigns").select("*, ad_listings(id,title,ad_type,city_id,location_id)").eq("id", id).maybeSingle();
  if (!campaign || (campaign.advertiser_id !== user.id && campaign.owner_id !== user.id)) notFound();

  const { data: assets } = await supabase.from("campaign_assets").select("id,file_url,asset_type,created_at").eq("campaign_id", id).order("created_at", { ascending: false });

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <div className="mb-8 flex items-center justify-between border-b border-[#E5E7EB] pb-5"><div><p className="text-sm text-[#5F6570]">Campaign</p><h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#111318]">{campaign.name}</h1></div><Link href="/campaigns" className="text-sm font-medium underline underline-offset-4">Back to campaigns</Link></div>
      <section className="grid gap-5 lg:grid-cols-[1fr_320px]">
        <div className="space-y-5">
          <div className="border border-[#E5E7EB] bg-white p-6"><div className="flex items-center justify-between"><h2 className="font-semibold text-[#111318]">Campaign overview</h2><span className="text-xs font-medium uppercase tracking-wide text-[#5F6570]">{campaign.status}</span></div><dl className="mt-6 grid gap-5 sm:grid-cols-2">{[["Objective",campaign.objective||"—"],["Start",campaign.start_date],["End",campaign.end_date],["Listing",campaign.listing_id||"—"]].map(([label,value])=><div key={label}><dt className="text-xs uppercase tracking-wide text-[#8A9099]">{label}</dt><dd className="mt-1 text-sm text-[#111318]">{value}</dd></div>)}</dl>{campaign.notes&&<div className="mt-6 border-t border-[#E5E7EB] pt-5"><p className="text-xs uppercase tracking-wide text-[#8A9099]">Notes</p><p className="mt-2 text-sm leading-6 text-[#5F6570]">{campaign.notes}</p></div>}</div>
          <div className="border border-[#E5E7EB] bg-white p-6"><h2 className="font-semibold text-[#111318]">Campaign assets</h2>{assets?.length?<div className="mt-5 grid gap-3 sm:grid-cols-2">{assets.map((asset)=><a key={asset.id} href={asset.file_url} target="_blank" rel="noreferrer" className="border border-[#E5E7EB] p-4"><p className="text-sm font-medium text-[#111318]">{asset.asset_type||"Asset"}</p><p className="mt-1 truncate text-xs text-[#5F6570]">{asset.file_url}</p></a>)}</div>:<p className="mt-4 text-sm text-[#5F6570]">No assets uploaded yet.</p>}</div>
        </div>
        <aside className="h-fit border border-[#E5E7EB] bg-[#F7F8FA] p-6"><p className="text-xs uppercase tracking-wide text-[#8A9099]">Campaign status</p><p className="mt-2 text-2xl font-semibold text-[#111318]">{campaign.status}</p><div className="mt-6 space-y-4 border-t border-[#E5E7EB] pt-5"><div><p className="text-xs text-[#8A9099]">Campaign ID</p><p className="mt-1 break-all text-sm text-[#111318]">{campaign.id}</p></div>{campaign.invoice_id&&<div><p className="text-xs text-[#8A9099]">Invoice</p><Link href={`/invoices/${campaign.invoice_id}`} className="mt-1 inline-block text-sm font-medium underline underline-offset-4">Open invoice</Link></div>}</div></aside>
      </section>
    </main>
  );
}
