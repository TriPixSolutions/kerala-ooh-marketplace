const locations = ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Malappuram", "Kannur"];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <header className="border-b border-[var(--border)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</a>
          <nav className="hidden items-center gap-8 text-sm text-[var(--slate)] md:flex">
            <a href="#spaces" className="hover:text-[var(--ink)]">Spaces</a>
            <a href="#locations" className="hover:text-[var(--ink)]">Locations</a>
            <a href="#how-it-works" className="hover:text-[var(--ink)]">How it works</a>
            <a href="#owners" className="hover:text-[var(--ink)]">For listing owners</a>
          </nav>
          <button className="rounded-xl bg-[var(--ink)] px-4 py-2.5 text-sm font-semibold text-white">Sign in</button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--slate)]">Kerala outdoor advertising marketplace</p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">Find the space that fits your campaign.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--slate)] sm:text-lg">Discover billboards, hoardings, LED screens and public displays across Kerala — with location, pricing, estimated reach and availability in one place.</p>
        </div>

        <div className="mt-12 rounded-2xl border border-[var(--border-strong)] bg-white p-3 shadow-[var(--shadow-soft)] sm:p-4">
          <div className="grid gap-3 lg:grid-cols-[1.3fr_1fr_auto]">
            <label className="flex min-h-14 items-center gap-3 rounded-xl bg-[var(--surface)] px-4">
              <span className="text-[var(--muted)]">⌕</span>
              <input aria-label="Search advertising spaces" placeholder="Search by city, landmark or space" className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]" />
            </label>
            <label className="flex min-h-14 items-center gap-3 rounded-xl border border-[var(--border)] bg-white px-4">
              <span className="text-sm text-[var(--slate)]">Type</span>
              <select aria-label="Advertising type" className="w-full bg-transparent text-sm outline-none">
                <option>All spaces</option><option>Billboard</option><option>Hoarding</option><option>LED screen</option><option>Restaurant screen</option>
              </select>
            </label>
            <button className="min-h-14 rounded-xl bg-[var(--ink)] px-7 text-sm font-semibold text-white">Search spaces</button>
          </div>
        </div>

        <div id="spaces" className="mt-16 grid gap-5 md:grid-cols-3">
          {[
            ["Listed spaces", "Kerala-wide", "Browse advertising inventory by location."],
            ["Compare what matters", "Price · Reach", "See the decision-making details before you enquire."],
            ["Start a conversation", "Directly", "Ask the listing owner about availability and campaign fit."],
          ].map(([label, title, copy]) => (
            <div key={title} className="rounded-2xl border border-[var(--border)] bg-white p-6">
              <p className="text-sm text-[var(--slate)]">{label}</p><p className="mt-2 text-3xl font-semibold tracking-tight">{title}</p><p className="mt-2 text-sm text-[var(--muted)]">{copy}</p>
            </div>
          ))}
        </div>

        <section id="locations" className="mt-24 border-t border-[var(--border)] pt-10">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Explore locations</p><h2 className="mt-2 text-3xl font-semibold tracking-[-0.03em]">Start with a city.</h2></div><a href="#locations" className="text-sm font-semibold underline underline-offset-4">View all locations</a></div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{locations.map((location) => <button key={location} className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-white px-5 py-4 text-left text-sm font-medium hover:border-[var(--border-strong)]">{location}<span className="text-[var(--muted)]">→</span></button>)}</div>
        </section>

        <section id="how-it-works" className="mt-24 grid gap-8 border-t border-[var(--border)] pt-12 lg:grid-cols-3">
          {["Search", "Compare", "Enquire"].map((step, index) => <div key={step}><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">0{index + 1}</p><h3 className="mt-4 text-xl font-semibold">{step}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[var(--slate)]">{index === 0 ? "Find spaces by city, advertising type, price and campaign requirements." : index === 1 ? "Understand dimensions, estimated views, availability and location context." : "Send an enquiry and continue the discussion directly with the space owner."}</p></div>)}
        </section>

        <section id="owners" className="mt-24 rounded-3xl bg-[var(--ink)] px-7 py-10 text-white sm:px-10 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">For listing owners</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">Put your advertising spaces where campaigns are looking.</h2><p className="mt-4 max-w-xl text-sm leading-6 text-white/65">Create a listing, manage availability and pricing, and receive enquiries from businesses and agencies.</p></div><button className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[var(--ink)]">List a space</button></div>
        </section>
      </section>

      <footer className="border-t border-[var(--border)] bg-white"><div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-[var(--slate)] sm:flex-row sm:items-center sm:justify-between lg:px-8"><span className="font-semibold text-[var(--ink)]">YOUR AD SPACE</span><span>Find the space. Understand the opportunity. Start the conversation.</span></div></footer>
    </main>
  );
}
