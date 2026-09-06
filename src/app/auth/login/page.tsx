"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    const supabase = createClient();
    const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }
    window.location.href = "/dashboard";
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--surface)] px-5 py-10 text-[var(--ink)]">
      <div className="w-full max-w-md">
        <a href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</a>
        <div className="mt-8 rounded-3xl border border-[var(--border)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Welcome back</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Sign in</h1>
          <p className="mt-3 text-sm leading-6 text-[var(--slate)]">Access your saved spaces, enquiries and listings.</p>
          <form onSubmit={onSubmit} className="mt-8 space-y-4">
            <label className="block"><span className="mb-2 block text-sm font-medium">Email</span><input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" placeholder="you@example.com" /></label>
            <label className="block"><span className="mb-2 block text-sm font-medium">Password</span><input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-xl border border-[var(--border-strong)] px-4 py-3 outline-none focus:border-[var(--ink)]" placeholder="Your password" /></label>
            {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
            <button disabled={loading} className="w-full rounded-xl bg-[var(--ink)] px-5 py-3.5 text-sm font-semibold text-white disabled:opacity-60">{loading ? "Signing in…" : "Sign in"}</button>
          </form>
          <p className="mt-6 text-sm text-[var(--slate)]">New here? <a className="font-semibold text-[var(--ink)] underline underline-offset-4" href="/auth/signup">Create an account</a></p>
        </div>
      </div>
    </main>
  );
}
