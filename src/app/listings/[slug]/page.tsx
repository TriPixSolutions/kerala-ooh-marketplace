import { notFound } from "next/navigation";
import { getListing, listings } from "@/lib/listings";

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export default async function ListingDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const listing = getListing(slug);
  if (!listing) notFound();

  return (
    <main className="min-h-screen bg-[var(--surface)] text-[var(--ink)]">
      <header className="border-b border-[var(--border)] bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="/" className="text-[15px] font-semibold tracking-[0.16em]">YOUR AD SPACE</a>
          <a href="/listings" className="text-sm font-medium text-[var(--slate)] hover:text-[var(--ink)]">Back to spaces</a>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-7 lg:px-8 lg:py-10">
        <div className="mb-5 text-sm text-[var(--slate)]"><a href="/listings" className="hover:text-[var(--ink)]">Spaces</a><span className="mx-2 text-[var(--muted)]">/</span>{listing.city}</div>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white">
            <img src={listing.image} alt={listing.title} className="aspect-[16/10] h-auto w-full object-cover" />
            <div className="grid grid-cols-3 gap-px border-t border-[var(--border)] bg-[var(--border)]">
              <div className="bg-white p-5"><p className="text-xs text-[var(--muted)]">Format</p><p className="mt-1 text-sm font-semibold">{listing.type}</p></div>
              <div className="bg-white p-5"><p className="text-xs text-[var(--muted)]">Dimensions</p><p className="mt-1 text-sm font-semibold">{listing.dimensions}</p></div>
              <div className="bg-white p-5"><p className="text-xs text-[var(--muted)]">Estimated views</p><p className="mt-1 text-sm font-semibold">{listing.views}</p></div>
            </div>
          </div>

          <aside className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] lg:p-8 lg:sticky lg:top-8">
            <span className="inline-flex rounded-full bg-[var(--surface)] px-3 py-1.5 text-xs font-semibold">{listing.availability}</span>
            <h1 className="mt-5 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">{listing.title}</h1>
            <p className="mt-3 text-sm leading-6 text-[var(--slate)]">{listing.city}, {listing.district}</p>
            <p className="mt-7 text-xl font-semibold">{listing.price}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">Pricing shown as a starting point; final campaign pricing can vary by duration and requirements.</p>
            <div className="mt-7 grid gap-3">
              <button className="rounded-xl bg-[var(--ink)] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5">Ask about this space</button>
              <button className="rounded-xl border border-[var(--border-strong)] bg-white px-5 py-3.5 text-sm font-semibold text-[var(--ink)]">Save listing</button>
            </div>
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <h2 className="text-sm font-semibold">Why this space</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--slate)]">{listing.description}</p>
            </div>
          </aside>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Location</p><h2 className="mt-2 text-lg font-semibold">{listing.city}, {listing.district}</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Exact landmark and placement context will be available from the verified listing owner.</p></div>
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Audience</p><h2 className="mt-2 text-lg font-semibold">High-visibility local traffic</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Use estimated daily views as a planning signal and confirm the campaign details with the owner before booking.</p></div>
          <div className="rounded-2xl border border-[var(--border)] bg-white p-6"><p className="text-xs uppercase tracking-[0.14em] text-[var(--muted)]">Availability</p><h2 className="mt-2 text-lg font-semibold">{listing.availability}</h2><p className="mt-2 text-sm leading-6 text-[var(--slate)]">Availability will be connected to owner-managed calendars in the next platform phase.</p></div>
        </section>
      </div>
    </main>
  );
}
