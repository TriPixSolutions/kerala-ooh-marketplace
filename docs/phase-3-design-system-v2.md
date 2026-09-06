# Phase 3 — Your Ad Space Senior Product Design System

## Purpose

Define the visual and interaction benchmark before frontend feature implementation. Your Ad Space must feel like mature marketplace software designed and refined by an experienced product team, not a generic AI-generated SaaS template.

## Product character

Premium, calm, editorial, intelligent, useful, trustworthy, location-aware, fast and human.

Avoid generic SaaS styling, excessive rounded cards, heavy gradients, excessive glassmorphism, decorative 3D, oversized glowing CTAs, constant motion and template-like dashboards.

## Core decision rule

Every major marketplace surface should quickly answer:

1. Where is it?
2. What is it?
3. How much does it cost?
4. How much reach is estimated?
5. Can I enquire?

## Brand voice

Clear, confident, practical and human. Avoid inflated startup language.

Preferred: `Find the space that fits your campaign.` / `See what's available in Kochi.` / `82K estimated monthly views` / `Ask about this space`.

## Typography

Primary UI typeface: Inter or equivalent modern grotesk.

Display 64–76px / 600
H1 44–52px / 600
H2 30–36px / 600
H3 20–24px / 600
Body 15–17px / 1.5–1.6 line-height
Metadata 13–14px
Buttons 14–15px / 600

Use typography contrast and spacing to create hierarchy. Do not make every heading huge.

## Colors

Base: Ink `#111318`, Slate `#5F6570`, Muted `#8A9099`, Surface `#F7F8FA`, White `#FFFFFF`, Border `#E5E7EB`, Strong Border `#D1D5DB`.

Use restrained semantic success, warning, danger and information colors. Select one brand accent during visual validation. Do not use rainbow palettes.

## Spacing and shape

Use a 4px rhythm with practical values up to 120px. Use 8–10px radii on small controls, 10–12px on inputs/buttons, 12–16px on cards, and 16–20px on large media. Reserve fully rounded pills for status/filter elements.

Prefer borders and surface contrast over heavy shadows.

## Homepage

Structure:

1. Lightweight header
2. Short hero statement
3. Dominant marketplace search
4. Featured spaces
5. Explore by city/district
6. Map-led discovery preview
7. How it works
8. Why Your Ad Space
9. Listing-owner CTA
10. Footer

Hero direction: `Find the space that fits your campaign.` Supporting copy should explain the value in one or two lines. Search is more important than decorative hero art.

## Header

Wordmark, Spaces, Locations, How it works, For listing owners, Sign in, then contextual account actions after authentication. Keep the header visually light.

## Listing card

Image is dominant. Required information: ad type, availability, location, dimensions when useful, price, estimated views, city/district, save action and view action.

Example order:

`LED Screen` → `Kozhikode Bypass` → `12 × 8 ft` → `₹35,000 / month` → `~82K estimated monthly views` → `Kozhikode, Kerala`.

## Search results

Desktop pattern: persistent search/filter bar, result count, sort control, filters, listing grid/list and optional split-map view. Geographic exploration should enable the map when it adds value, not force it everywhere.

## Map interaction

Map is a first-class discovery tool. Marker selection opens a compact preview containing image, title, price, estimated views and listing link. It should feel integrated into the product, not like an embedded widget.

## Listing detail

This is a conversion page, not a simple directory page.

Above the fold: back/breadcrumb, location/title, descriptor, gallery, price, availability and enquiry CTA.

Decision information: dimensions, estimated views, traffic, audience context, ad type and pricing.

Location intelligence: map, landmark, nearby context and location explanation.

Trust: listing owner, verification state, last updated/availability and real media.

Conversion actions: `Ask about this space`, `Start conversation`, `Save listing`.

## Owner dashboard

Navigation: Overview, Spaces, Availability, Enquiries, Messages, Analytics, Settings.

The overview should prioritize active spaces, new enquiries, availability issues, recent conversations and potential monthly value. `Add a space` must be immediately discoverable.

## Advertiser dashboard

Keep it lightweight: saved spaces, recent searches, open enquiries, messages and recommended spaces. Avoid unnecessary CRM complexity in MVP.

## Super Admin

Use information hierarchy instead of equal-weight widgets.

Marketplace: Listings, Pending approvals, Locations, Categories.
Users: Advertisers, Listing owners.
Communication: Enquiries, Messages, Reports.
Analytics and Settings.

Admin home should answer: What needs attention? What changed? What is growing? What is blocked?

## Status system

Never communicate status by color alone. Use label + color + optional icon. Examples: Published, Pending review, Paused, Rejected, Available, Held, Booked.

## Motion

Motion should explain change, relationship and hierarchy. Target 150–250ms micro interactions, subtle image hover scaling, soft filter transitions, drawers/modals and map selection. Respect reduced-motion preferences. Avoid decorative animation that delays tasks.

## Photography

Real location media is a trust feature. Prefer actual billboards, LED screens, road context, landmarks and viewing angles. Avoid generic stock imagery for marketplace inventory.

## Responsive UX

Mobile is a separate interaction design, not a compressed desktop. Priorities: location/search, image, price, views, availability and enquiry. Filters should use a bottom sheet/drawer. Gallery should swipe. Primary enquiry remains accessible without covering content.

## Accessibility

Use semantic HTML, keyboard navigation, visible focus states, labelled inputs, meaningful alt text, color-independent status communication, adequate contrast and reduced-motion support.

## Performance

Optimize listing photography, use responsive images, lazy-load below-the-fold media, prioritize hero media, and avoid unnecessary client-side JavaScript.

## Component philosophy

Build around product behavior. Core components: SearchBar, FilterBar, ListingCard, ListingGallery, PriceBlock, AvailabilityBadge, LocationSummary, MapPreview, EnquiryButton, ConversationPreview, DashboardMetric, DataTable, EmptyState, ConfirmDialog.

Avoid wrapper-only components with no design or behavior responsibility.

## Quality gate

A screen is finished only when visual hierarchy is strong, spacing is deliberate, primary action is obvious, error/loading/empty states exist, mobile behavior is defined, keyboard accessibility works, types are correct, data states are handled and the console is clean.

## Frontend build order

1. Design tokens
2. Typography and surfaces
3. Buttons and form controls
4. Navigation
5. Core card/surface primitives
6. Search/filter components
7. Listing card
8. Homepage
9. Search results
10. Listing detail
11. Auth shell
12. Owner dashboard
13. Advertiser dashboard
14. Admin shell

## Golden rule

The visible product should look simpler than the system behind it. Complexity belongs in architecture, permissions, data states and interaction design; the user experience should remain calm and understandable.
