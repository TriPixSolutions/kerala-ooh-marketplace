"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"ADVERTISER" | "LISTING_OWNER">("ADVERTISER");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");
    const supabase = createClient();
    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name, company_name: company, phone, role } },
    });
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }
    if (data.session) {
      window.location.href = "/dashboard";
      return;
    }
    setMessage("Account created. Check your email to confirm your account, then sign in.");
    setLoading(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--surface)] px-5 py-10 text-[var(--ink)]">
      <div className="w-full max-w-lg">
        <a href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</a>
        <div className="mt-8 rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Create your account</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Get started</h1>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label><span className="mb-2 block text-sm font-medium">Full name</span><input required value={name} onChange={(e) => setName(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" /></label>
              <label><span className="mb-2 block text-sm font-medium">Phone</span><input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" /></label>
            </div>
            <label className="block"><span className="mb-2 block text-sm font-medium">Company</span><input value={company} onChange={(e) => setCompany(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" /></label>
            <label className="block"><span className="mb-2 block text-sm font-medium">I am joining as</span><select value={role} onChange={(e) => setRole(e.target.value as "ADVERTISER" | "LISTING_OWNER")} className="w-full rounded-xl border border-[var(--border-strong)] bg-white px-4 py-3 outline-none focus:border-[var(--ink)]"><option value="ADVERTISER">Advertiser / Business</option><option value="LISTING_OWNER">Listing owner</option></select></label>
            <label className="block"><span className="mb-2 block text-sm font-medium">Email</span><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" /></label>
            <label className="block"><span className="mb-2 block text-sm font-medium">Password</span><input required minLength={6} type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" /></label>
            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            {message && <p role="status" className="text-sm text-[var(--slate)]">{message}</p>}
            <button disabled={loading} className="w-full rounded-xl bg-[var(--ink)] px-5 py-3.5 text-sm font-semibold text-white disabled:opacity-60">{loading ? "Creating account…" : "Create account"}</button>
          </form>
          <p className="mt-6 text-sm text-[var(--slate)]">Already have an account? <a className="font-semibold text-[var(--ink)] underline underline-offset-4" href="/auth/login">Sign in</a></p>
        </div>
      </div>
    </main>
  );
}
