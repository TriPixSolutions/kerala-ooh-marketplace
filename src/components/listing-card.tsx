import type { Listing } from "@/lib/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[0_6px_24px_rgba(17,19,24,0.04)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(17,19,24,0.08)]">
      <a href={`/listings/${listing.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface)]">
          {/* Remote imagery is used for the prototype; production media will come from Supabase Storage. */}
          <img
            src={listing.image}
            alt={listing.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[var(--ink)] shadow-sm">
            {listing.type}
          </span>
          <span className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-medium text-[var(--slate)] shadow-sm">
            {listing.availability}
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-base font-semibold tracking-[-0.01em] text-[var(--ink)]">
                {listing.title}
              </h3>
              <p className="mt-1 text-sm text-[var(--slate)]">
                {listing.city}, {listing.district}
              </p>
            </div>
            <span className="text-sm font-semibold text-[var(--ink)]">↗</span>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 border-y border-[var(--border)] py-4">
            <div>
              <p className="text-xs text-[var(--muted)]">Estimated views</p>
              <p className="mt-1 text-sm font-medium">{listing.views}</p>
            </div>
            <div>
              <p className="text-xs text-[var(--muted)]">Dimensions</p>
              <p className="mt-1 text-sm font-medium">{listing.dimensions}</p>
            </div>
          </div>
          <div className="mt-4 flex items-end justify-between gap-4">
            <p className="text-sm font-semibold text-[var(--ink)]">{listing.price}</p>
            <span className="text-sm font-semibold text-[var(--ink)] underline underline-offset-4">
              View space
            </span>
          </div>
        </div>
      </a>
    </article>
  );
}
