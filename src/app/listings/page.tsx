import { ListingCard } from "@/components/listing-card";
import { listings } from "@/lib/listings";

const types = ["All spaces", "Billboard", "Hoarding", "LED Screen", "Restaurant Screen"];
const districts = ["All Kerala", "Ernakulam", "Kozhikode", "Malappuram", "Thrissur", "Thiruvananthapuram", "Kannur"];

export default function ListingsPage() {
  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-white/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</a>
          <nav className="hidden items-center gap-7 text-sm text-[var(--slate)] md:flex">
            <a href="/listings" className="font-medium text-[var(--ink)]">Spaces</a>
            <a href="/#locations" className="hover:text-[var(--ink)]">Locations</a>
            <a href="/#how-it-works" className="hover:text-[var(--ink)]">How it works</a>
          </nav>
          <button className="rounded-xl bg-[var(--ink)] px-4 py-2.5 text-sm font-semibold text-white">Sign in</button>
        </div>
      </header>

      <section className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Marketplace</p>
          <div className="mt-3 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Advertising spaces across Kerala.</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--slate)]">Compare locations, formats, pricing, dimensions and estimated reach before you start a conversation.</p>
            </div>
            <p className="text-sm text-[var(--slate)]"><span className="font-semibold text-[var(--ink)]">{listings.length}</span> spaces in the prototype</p>
          </div>

          <div className="mt-9 grid gap-3 lg:grid-cols-[1.6fr_1fr_auto]">
            <label className="flex min-h-13 items-center gap-3 rounded-xl border border-[var(--border-strong)] bg-white px-4 shadow-sm">
              <span className="text-lg text-[var(--muted)]">⌕</span>
              <input aria-label="Search spaces" placeholder="Search city, landmark or space" className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]" />
            </label>
            <select aria-label="District" className="min-h-13 rounded-xl border border-[var(--border)] bg-white px-4 text-sm outline-none">
              {districts.map((district) => <option key={district}>{district}</option>)}
            </select>
            <button className="min-h-13 rounded-xl bg-[var(--ink)] px-6 text-sm font-semibold text-white">Search</button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {types.map((type, index) => (
              <button key={type} className={`rounded-full border px-4 py-2 text-sm ${index === 0 ? "border-[var(--ink)] bg-[var(--ink)] text-white" : "border-[var(--border)] bg-white text-[var(--slate)]"}`}>{type}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-[var(--muted)]">Curated inventory</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-[-0.025em]">Featured spaces</h2>
          </div>
          <select aria-label="Sort spaces" className="rounded-xl border border-[var(--border)] bg-white px-3 py-2.5 text-sm outline-none">
            <option>Recommended</option>
            <option>Price: low to high</option>
            <option>Estimated views</option>
          </select>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => <ListingCard key={listing.slug} listing={listing} />)}
        </div>
      </section>
    </main>
  );
}
