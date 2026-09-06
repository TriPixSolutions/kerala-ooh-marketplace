import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function CampaignsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <main className="mx-auto max-w-5xl p-8">Please sign in to view campaigns.</main>;

  const { data: campaigns } = await supabase
    .from("campaigns")
    .select("id,name,objective,start_date,end_date,status,listing_id,invoice_id")
    .or(`advertiser_id.eq.${user.id},owner_id.eq.${user.id}`)
    .order("created_at", { ascending: false });

  const active = campaigns?.filter((c) => c.status === "ACTIVE").length ?? 0;
  const upcoming = campaigns?.filter((c) => c.status === "UPCOMING").length ?? 0;

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <header className="mb-8 flex flex-col gap-4 border-b border-[#E5E7EB] pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="text-sm text-[#5F6570]">Your Ad Space</p><h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#111318]">Campaigns</h1><p className="mt-2 text-sm text-[#5F6570]">See active, upcoming and completed campaigns in one place.</p></div>
        <Link href="/dashboard" className="text-sm font-medium text-[#111318] underline underline-offset-4">Back to dashboard</Link>
      </header>
      <section className="mb-8 grid gap-4 sm:grid-cols-3">
        {[{label:"Total campaigns",value:campaigns?.length ?? 0},{label:"Active",value:active},{label:"Upcoming",value:upcoming}].map((item) => <div key={item.label} className="border border-[#E5E7EB] bg-white p-5"><p className="text-sm text-[#5F6570]">{item.label}</p><p className="mt-2 text-2xl font-semibold text-[#111318]">{item.value}</p></div>)}
      </section>
      <section className="border border-[#E5E7EB] bg-white">
        <div className="grid grid-cols-[1fr_120px_180px_110px] gap-4 border-b border-[#E5E7EB] px-5 py-3 text-xs font-medium uppercase tracking-wide text-[#8A9099]"><span>Campaign</span><span>Status</span><span>Schedule</span><span>Details</span></div>
        {campaigns?.length ? campaigns.map((campaign) => <div key={campaign.id} className="grid grid-cols-[1fr_120px_180px_110px] gap-4 border-b border-[#E5E7EB] px-5 py-4 text-sm last:border-b-0"><div><p className="font-medium text-[#111318]">{campaign.name}</p><p className="mt-1 text-[#5F6570]">{campaign.objective || "Campaign"}</p></div><span className="self-start text-xs font-medium text-[#111318]">{campaign.status.replaceAll("_", " ")}</span><span className="text-[#5F6570]">{campaign.start_date} → {campaign.end_date}</span><Link href={`/campaigns/${campaign.id}`} className="font-medium text-[#111318] underline underline-offset-4">View</Link></div>) : <div className="p-8 text-sm text-[#5F6570]">No campaigns yet.</div>}
      </section>
    </main>
  );
}
