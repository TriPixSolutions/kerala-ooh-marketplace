import Link from "next/link";
import { redirect } from "next/navigation";
import NotificationList from "@/components/notification-list";
import { createClient } from "@/lib/supabase/server";

export default async function NotificationsPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth/login?next=/notifications");

  const { data: notifications } = await supabase.from("notifications").select("id,type,title,body,read_at,created_at").eq("user_id", user.id).order("created_at", { ascending: false }).limit(100);

  return <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]"><header className="border-b border-[var(--border)] bg-white"><div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-5 lg:px-8"><Link href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</Link><Link href="/dashboard" className="text-sm text-[var(--slate)]">Dashboard</Link></div></header><div className="mx-auto max-w-4xl px-5 py-10 lg:px-8"><p className="text-xs uppercase tracking-[0.16em] text-[var(--muted)]">Updates</p><h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">Notifications</h1><p className="mt-3 text-sm text-[var(--slate)]">Enquiries, messages and important marketplace updates in one place.</p><div className="mt-8"><NotificationList initialNotifications={(notifications ?? []) as any} userId={user.id} /></div></div></main>;
}
