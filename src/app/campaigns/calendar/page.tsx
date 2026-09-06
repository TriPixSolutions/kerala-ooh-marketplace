import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const firstWeekday = (year: number, month: number) => new Date(year, month, 1).getDay();
const dateKey = (year: number, month: number, day: number) => `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
const statusText = (status: string) => status.replaceAll("_", " ");

export default async function CampaignCalendarPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <main className="mx-auto max-w-6xl p-8">Please sign in to view the campaign calendar.</main>;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const monthStart = dateKey(year, month, 1);
  const nextMonth = new Date(year, month + 1, 1);
  const nextMonthStart = dateKey(nextMonth.getFullYear(), nextMonth.getMonth(), 1);

  const { data: campaigns } = await supabase.from("campaigns").select("id,name,start_date,end_date,status,listing_id").or(`advertiser_id.eq.${user.id},owner_id.eq.${user.id}`).lte("start_date", `${nextMonthStart}`).gte("end_date", monthStart).order("start_date", { ascending: true });

  const byDay = new Map<string, typeof campaigns>();
  for (const campaign of campaigns ?? []) {
    let cursor = new Date(`${campaign.start_date}T00:00:00`);
    const end = new Date(`${campaign.end_date}T00:00:00`);
    while (cursor <= end && cursor < nextMonth) {
      if (cursor >= new Date(`${monthStart}T00:00:00`)) {
        const key = dateKey(cursor.getFullYear(), cursor.getMonth(), cursor.getDate());
        byDay.set(key, [...(byDay.get(key) ?? []), campaign]);
      }
      cursor.setDate(cursor.getDate() + 1);
    }
  }

  const totalCells = Math.ceil((firstWeekday(year, month) + daysInMonth(year, month)) / 7) * 7;
  const monthName = new Intl.DateTimeFormat("en-IN", { month: "long", year: "numeric" }).format(now);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return <main className="mx-auto max-w-7xl px-5 py-10"><header className="mb-8 flex flex-col gap-4 border-b border-[#E5E7EB] pb-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="text-sm text-[#5F6570]">Your Ad Space</p><h1 className="mt-1 text-3xl font-semibold tracking-tight text-[#111318]">Campaign calendar</h1><p className="mt-2 text-sm text-[#5F6570]">See booked campaign periods across your advertising spaces.</p></div><div className="flex gap-4 text-sm"><Link href="/campaigns" className="font-medium underline underline-offset-4">List view</Link><Link href="/dashboard" className="underline underline-offset-4">Dashboard</Link></div></header><section className="mb-5 flex items-end justify-between"><div><p className="text-xs uppercase tracking-wide text-[#8A9099]">Schedule</p><h2 className="mt-1 text-xl font-semibold text-[#111318]">{monthName}</h2></div><p className="text-sm text-[#5F6570]">{campaigns?.length ?? 0} campaign{campaigns?.length === 1 ? "" : "s"}</p></section><section className="overflow-hidden border border-[#E5E7EB] bg-white"><div className="grid grid-cols-7 border-b border-[#E5E7EB]">{weekdays.map((day)=><div key={day} className="px-3 py-3 text-xs font-medium uppercase tracking-wide text-[#8A9099]">{day}</div>)}</div><div className="grid grid-cols-7">{Array.from({length: totalCells}, (_, index) => { const day=index-firstWeekday(year,month)+1; const valid=day>=1&&day<=daysInMonth(year,month); const key=valid?dateKey(year,month,day):`blank-${index}`; const items=valid?(byDay.get(key)??[]):[]; return <div key={key} className={`min-h-32 border-b border-r border-[#E5E7EB] p-2 ${!valid?"bg-[#F7F8FA]":""}`}><div className={`text-xs ${day===now.getDate()?"font-semibold text-[#111318]":"text-[#8A9099]"}`}>{valid?day:""}</div><div className="mt-2 space-y-1">{items.slice(0,3).map(item=><Link key={item.id} href={`/campaigns/${item.id}`} className="block border-l-2 border-[#111318] bg-[#F7F8FA] px-2 py-1.5"><p className="truncate text-[11px] font-medium text-[#111318]">{item.name}</p><p className="truncate text-[10px] text-[#5F6570]">{statusText(item.status)}</p></Link>)}{items.length>3&&<p className="px-2 text-[10px] text-[#8A9099]">+{items.length-3} more</p>}</div></div>; })}</div></section></main>;
}
