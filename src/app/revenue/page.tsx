import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

const money = (value: number) => new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value || 0);

export default async function RevenuePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <main className="mx-auto max-w-6xl p-8">Please sign in to view revenue.</main>;

  const [{ data: profile }, { data: invoices }, { data: payments }, { data: bookings }, { data: campaigns }] = await Promise.all([
    supabase.from("profiles").select("role").eq("id", user.id).maybeSingle(),
    supabase.from("invoices").select("id,total_amount,amount_paid,status,created_at,invoice_number,title,owner_id,advertiser_id").or(`owner_id.eq.${user.id},advertiser_id.eq.${user.id}`).order("created_at", { ascending: false }),
    supabase.from("payment_transactions").select("id,amount,status,created_at,owner_id,advertiser_id").or(`owner_id.eq.${user.id},advertiser_id.eq.${user.id}`).order("created_at", { ascending: false }),
    supabase.from("booking_requests").select("id,status,created_at,owner_id,advertiser_id").or(`owner_id.eq.${user.id},advertiser_id.eq.${user.id}`).order("created_at", { ascending: false }),
    supabase.from("campaigns").select("id,status,start_date,end_date,owner_id,advertiser_id").or(`owner_id.eq.${user.id},advertiser_id.eq.${user.id}`).order("created_at", { ascending: false }),
  ]);

  const paid = (payments ?? []).filter((p) => p.status === "CAPTURED");
  const collected = paid.reduce((sum, p) => sum + Number(p.amount || 0), 0);
  const invoiced = (invoices ?? []).reduce((sum, i) => sum + Number(i.total_amount || 0), 0);
  const outstanding = Math.max(invoiced - (invoices ?? []).reduce((sum, i) => sum + Number(i.amount_paid || 0), 0), 0);
  const activeBookings = (bookings ?? []).filter((b) => ["REQUESTED", "PENDING_OWNER", "ACCEPTED"].includes(b.status)).length;
  const activeCampaigns = (campaigns ?? []).filter((c) => c.status === "ACTIVE").length;
  const admin = profile?.role === "SUPER_ADMIN";

  return (
    <main className="mx-auto max-w-6xl px-5 py-10">
      <header className="mb-8 flex flex-col gap-3 border-b border-[#E5E7EB] pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm text-[#5F6570]">Your Ad Space</p><h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#111318]">Revenue & performance</h1><p className="mt-2 text-sm text-[#5F6570]">A financial view of invoices, payments, bookings and active campaigns.</p></div><Link href="/dashboard" className="text-sm font-medium underline underline-offset-4">Back to dashboard</Link></header>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[{label:"Collected",value:money(collected)},{label:"Invoiced",value:money(invoiced)},{label:"Outstanding",value:money(outstanding)},{label:"Active bookings",value:activeBookings}].map((item)=><div key={item.label} className="border border-[#E5E7EB] bg-white p-5"><p className="text-sm text-[#5F6570]">{item.label}</p><p className="mt-2 text-2xl font-semibold text-[#111318]">{item.value}</p></div>)}
      </section>
      <section className="mt-8 grid gap-5 lg:grid-cols-[1.3fr_.7fr]">
        <div className="border border-[#E5E7EB] bg-white"><div className="flex items-center justify-between border-b border-[#E5E7EB] px-5 py-4"><h2 className="font-semibold text-[#111318]">Recent payments</h2><span className="text-xs text-[#8A9099]">{paid.length} captured</span></div>{paid.slice(0,8).map((payment)=><div key={payment.id} className="flex items-center justify-between border-b border-[#E5E7EB] px-5 py-4 last:border-b-0"><div><p className="text-sm font-medium text-[#111318]">Payment captured</p><p className="mt-1 text-xs text-[#5F6570]">{new Date(payment.created_at).toLocaleDateString("en-IN")}</p></div><p className="text-sm font-semibold text-[#111318]">{money(Number(payment.amount))}</p></div>)}{!paid.length&&<p className="p-6 text-sm text-[#5F6570]">No captured payments yet.</p>}</div>
        <div className="border border-[#E5E7EB] bg-[#F7F8FA] p-6"><p className="text-xs uppercase tracking-wide text-[#8A9099]">Live operations</p><div className="mt-6 space-y-5"><div><p className="text-xs text-[#8A9099]">Active campaigns</p><p className="mt-1 text-2xl font-semibold text-[#111318]">{activeCampaigns}</p></div><div><p className="text-xs text-[#8A9099]">Open bookings</p><p className="mt-1 text-2xl font-semibold text-[#111318]">{activeBookings}</p></div><div><p className="text-xs text-[#8A9099]">Account role</p><p className="mt-1 text-sm font-medium text-[#111318]">{admin ? "Super Admin" : profile?.role === "LISTING_OWNER" ? "Listing Owner" : "Advertiser"}</p></div></div></div>
      </section>
      <section className="mt-5 border border-[#E5E7EB] bg-white"><div className="border-b border-[#E5E7EB] px-5 py-4"><h2 className="font-semibold text-[#111318]">Recent invoices</h2></div>{(invoices ?? []).slice(0,8).map((invoice)=><div key={invoice.id} className="grid gap-3 border-b border-[#E5E7EB] px-5 py-4 sm:grid-cols-[1fr_120px_140px]"><div><p className="text-sm font-medium text-[#111318]">{invoice.invoice_number}</p><p className="mt-1 text-xs text-[#5F6570]">{invoice.title || "Advertising invoice"}</p></div><span className="text-xs font-medium text-[#111318]">{invoice.status}</span><span className="text-sm font-semibold text-[#111318]">{money(Number(invoice.total_amount))}</span></div>)}{!(invoices ?? []).length&&<p className="p-6 text-sm text-[#5F6570]">No invoices yet.</p>}</section>
    </main>
  );
}
