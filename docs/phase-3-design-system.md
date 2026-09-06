# Phase 3 — Your Ad Space Design System & UI Architecture

## 1. Purpose

Phase 3 defines the visual language and reusable interface architecture for **Your Ad Space** before feature-heavy frontend implementation begins.

The product must feel like a mature marketplace built by an experienced product design and engineering team: calm, precise, highly usable, responsive, and visually premium without copying Apple's layout patterns.

## 2. Product design principles

1. **Discovery first** — help people find suitable advertising spaces quickly.
2. **Clarity over decoration** — price, location, reach, size, availability, and action should never be hidden.
3. **Trust through detail** — rich media, map context, owner information, listing status, and clear enquiry flows.
4. **Progressive disclosure** — surface the important information first; allow deeper specifications without overwhelming users.
5. **Designed for real operations** — owner and admin screens prioritize speed, accuracy, and repeat tasks.
6. **Responsive by default** — desktop dashboards can be information-dense, but mobile interactions remain intentional and touch-friendly.
7. **Subtle motion** — transitions communicate hierarchy and state; animation never blocks work.

## 3. Visual character

The interface combines editorial-quality media with software precision.

Desired qualities:

- Premium
- Minimal
- Confident
- Quiet
- Contemporary
- Human
- Spatial
- Information-rich without feeling crowded

Avoid:

- Excessive gradients
- Glassmorphism everywhere
- Neon colors
- Huge decorative illustrations
- Generic SaaS gradients
- Over-rounded cartoon-like cards
- Excessive animation
- UI patterns copied from another major brand

## 4. Color system

### Core neutrals

- Ink 950: #111318
- Ink 900: #181A1F
- Ink 700: #3A3F49
- Slate 600: #5F6570
- Slate 500: #7A818C
- Surface 50: #F7F8FA
- Surface 100: #F0F2F5
- Border 200: #E3E6EA
- White: #FFFFFF

### Semantic colors

Use semantic colors sparingly and consistently:

- Success: green family
- Warning: amber family
- Danger: red family
- Info: blue family

The final brand accent should be selected after a visual prototype. The accent must primarily communicate action, selection, links, and highlighted marketplace states.

## 5. Typography

Recommended primary typeface: **Inter** or equivalent modern grotesk.

Type hierarchy:

- Display — high-impact marketing statements
- H1 — page-level title
- H2 — section title
- H3 — card/group title
- Body — primary reading text
- Small — supporting information
- Micro — metadata, labels, status

Typography rules:

- Strong weight contrast, not excessive font-size variation.
- Comfortable line height for body copy.
- Tabular numerals for prices and metrics where supported.
- Avoid all-caps except compact labels and intentional brand lockups.

## 6. Spacing system

Use a consistent 4px base scale.

Common values:

4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 120

Prefer fewer spacing values used consistently over arbitrary values per screen.

## 7. Shape and depth

Border radius should be moderate:

- Inputs: 10–12px
- Buttons: 10–12px
- Cards: 14–20px depending on hierarchy
- Large media containers: 20–28px
- Pills: fully rounded only when semantically useful

Shadows should be soft and rare. Use borders, spacing, and surface contrast before shadow.

## 8. Buttons

Primary:

- Strong contrast
- Clear verb
- 44px minimum touch target
- Hover: slight lift/color transition
- Active: slight compression

Secondary:

- Quiet surface or border treatment
- Used for supporting actions

Tertiary:

- Text/icon action for low-emphasis tasks

Destructive:

- Only for irreversible or clearly destructive actions

Button labels should describe outcomes: `View listing`, `Send enquiry`, `Add listing`, `Save space`.

## 9. Form design

Forms must feel operational rather than decorative.

Rules:

- Explicit labels, never placeholder-only labels.
- Helpful examples for unfamiliar fields.
- Inline validation where possible.
- Preserve user input after recoverable errors.
- Group long listing forms into logical sections.
- Show unit beside measurements.
- Currency must be explicit (`₹` / INR).

## 10. Marketplace listing card

Every listing card should make comparison easy.

Recommended hierarchy:

1. Primary image
2. Media type badge
3. Listing title
4. Location
5. Price
6. Estimated views / reach
7. Size or format
8. Availability signal
9. Save action

Desktop cards should support both visual browsing and fast scanning.

## 11. Listing detail page

The listing detail page is the product's primary conversion surface.

Suggested structure:

### Above the fold

- Media gallery
- Listing title
- Location
- Price
- Availability
- Primary `Send enquiry` action

### Main content

- Overview
- Specifications
- Estimated views
- Audience / traffic context
- Pricing options
- Availability calendar
- Location map
- Photo/video gallery
- Owner information
- Enquiry/chat entry point

### Sticky action

Desktop: sticky enquiry panel.
Mobile: bottom action bar with price context and `Enquire`.

## 12. Search experience

The main marketplace search should support:

- Location
- District
- City
- Advertising type
- Price range
- Estimated views
- Availability
- Size
- Sort

Filters should be understandable in plain language.

## 13. Homepage architecture

The homepage should be a discovery gateway, not a dashboard.

Recommended sequence:

1. Header
2. Hero with search
3. Popular locations
4. Featured advertising spaces
5. Browse by media type
6. Map-led discovery
7. How the marketplace works
8. For advertisers
9. For listing owners
10. Trust / platform signals
11. Final CTA
12. Footer

## 14. Public navigation

Primary navigation:

- Explore Spaces
- Locations
- For Advertisers
- For Space Owners

Utility actions:

- Search
- Saved
- Messages (authenticated)
- Account

Primary header CTA for owners: `List your space`.

## 15. Advertiser dashboard

Navigation:

- Overview
- Saved Spaces
- Enquiries
- Messages
- Profile

Overview content:

- Recent enquiries
- Saved spaces
- Recently viewed
- Recommended spaces

The advertiser dashboard should remain lightweight because marketplace discovery is the core task.

## 16. Listing owner dashboard

Navigation:

- Overview
- Listings
- Add Listing
- Availability
- Enquiries
- Messages
- Analytics
- Profile

Overview metrics:

- Active listings
- Pending review
- New enquiries
- Available inventory
- Listing views

Primary action: `Add listing`.

## 17. Super Admin dashboard

Navigation:

- Overview
- Users
- Listings
- Enquiries
- Messages
- Locations
- Categories
- Reports
- Analytics
- Settings

Admin UI must prioritize density, filtering, bulk actions, auditability, and safe destructive operations.

## 18. Component architecture

Shared components:

- Button
- IconButton
- Input
- Select
- Combobox
- DateRangePicker
- Checkbox
- Radio
- Switch
- Badge
- StatusBadge
- Card
- ListingCard
- ListingMedia
- PriceBlock
- MetricCard
- Avatar
- EmptyState
- ErrorState
- Skeleton
- Modal
- Drawer
- Sheet
- Tooltip
- Toast
- Pagination
- DataTable
- SearchBar
- FilterBar
- Breadcrumbs
- Tabs
- MapPanel
- ChatComposer
- ConversationList
- MessageBubble

Domain components:

- ListingGallery
- ListingSpecs
- ListingAvailability
- ListingEnquiryPanel
- OwnerProfile
- ListingForm
- ListingApprovalPanel
- AdminUserTable
- AdminListingReview

## 19. Responsive rules

Breakpoints should be chosen from layout needs, not device names.

Mobile:

- Single-column content
- Sticky primary actions
- Bottom sheets for filters
- Horizontal chips where useful
- Large tap targets
- Condensed metadata

Tablet:

- Two-column listing/detail patterns where space permits
- Collapsible navigation

Desktop:

- Multi-column marketplace grids
- Persistent filters where useful
- Sticky context panels
- Dense tables in admin

## 20. Motion system

Motion must be purposeful.

Default transition range: approximately 150–250ms.

Use:

- Fade/slide for overlays
- Small elevation/transform on interactive cards
- Smooth filter and sorting transitions
- Skeleton shimmer only when useful
- Gallery transitions

Avoid:

- Long cinematic transitions in operational screens
- Scroll-jacking
- Continuous decorative motion
- Animation that delays task completion

## 21. Accessibility

Target WCAG AA-level usability.

Required:

- Keyboard navigation
- Visible focus states
- Semantic headings
- Accessible labels
- Reduced-motion support
- Adequate contrast
- Error messages tied to inputs
- Screen-reader-friendly status updates

## 22. Content rules

The interface should use direct language.

Prefer:

`₹35,000 / month`

`Available from 1 Dec`

`Estimated 45,000 views / day`

`Send enquiry`

Avoid:

`Unlock powerful opportunities today!`

`Discover game-changing advertising solutions!`

## 23. Frontend architecture

Suggested structure:

```text
src/
  app/
    (public)/
    (auth)/
    (advertiser)/
    (owner)/
    (admin)/
    api/
  components/
    ui/
    marketplace/
    dashboard/
    admin/
    chat/
  lib/
    supabase/
    auth/
    validations/
    formatting/
  actions/
  hooks/
  types/
  config/
  styles/
```

Use server components by default. Introduce client components only where browser state or interaction requires them.

## 24. UI implementation sequence

Build in this order:

1. Global styles and design tokens
2. Typography and layout primitives
3. Buttons / inputs / forms
4. Cards / badges / states
5. Header / navigation
6. Listing card and listing grid
7. Search/filter system
8. Listing detail primitives
9. Dashboard shell
10. Data table / admin primitives
11. Chat primitives
12. Page-specific compositions

## 25. Quality gate before Phase 4

Phase 3 is complete only when:

- Design tokens are documented.
- Shared primitives have consistent states.
- Mobile and desktop layouts are defined.
- Public navigation is fixed.
- Dashboard navigation is fixed.
- Listing card hierarchy is fixed.
- Listing detail information hierarchy is fixed.
- Accessibility rules are captured.
- Motion rules are captured.
- Component boundaries are agreed.

## 26. Phase 4 handoff

Phase 4 should implement the first real frontend slice using this system:

**Application scaffold + global design system + public header + homepage + marketplace listing grid + listing detail shell.**

Do not implement unrelated admin functionality during the first UI slice. Keep the design system reusable so owner/admin screens consume the same primitives later.
