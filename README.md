# HYLY — Luxury Architectural Craftsmanship & Interior Materials

An enterprise-grade, luxury digital flagship platform engineered for **HYLY**, a premier architectural craftsmanship and interior materials company specializing in:

* **Veneers** — Rare, smoked, thermo-treated, and consecutive sequence-numbered leaves.
* **Decorative Materials** — Certified acoustic fluted slats, textured micro-cements, and metallic surfaces.
* **Hardware Solutions** — 3D concealed hinges, soft-motion architectural slides, and solid brass fittings.
* **Plywood & Boards** — Calibrated BWP marine birch core, fire-retardant substrates, and zero-emission (E0) cores.
* **Home Applications** — Bespoke modular kitchens, walk-in dressing suites, and integrated living millwork.
* **Custom Craftsmanship** — Multi-axis CNC routing, compound curved vacuum thermoforming, and hand-rubbed oil finishes.

---

## Brand Aesthetic & Design Ethos

The platform is designed with the understated restraint and typographic precision inspired by **Apple, Aesop, Poliform, Minotti, and Herman Miller**:

* **Architectural Noir Palette**: Deep obsidian and charcoal bases (`#090A0C`, `#111317`) accented by warm champagne brass (`#C5A880`, `#E4D5BE`) and crisp editorial off-white (`#F6F4F0`).
* **Tactile Material Exploration**: Interactive material specimens with high-resolution grain inspection, technical specifications, and acoustic NRC ratings.
* **Micro-Interactions**: Silky smooth hover reveals, GSAP/Framer Motion animations, and zero jarring layout shifts.
* **Accessibility**: Fully keyboard-navigable, high contrast ratios, semantic HTML5 elements, and `prefers-reduced-motion` compliance.

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15 App Router |
| **Language** | TypeScript (Strict mode) |
| **Styling** | Tailwind CSS v4 & custom glassmorphism design tokens |
| **Animation** | GSAP 3 & Framer Motion |
| **Icons** | Lucide React |
| **Form Handling** | React Hook Form with Zod Schema Validation |
| **SEO & Schema** | Next.js Metadata API, Dynamic XML Sitemap, Robots.txt, JSON-LD (`Organization` & `HomeAndConstructionBusiness`) |
| **Performance** | Next.js Image Optimization with WebP/AVIF format and responsive sizing |
| **Deployment** | Vercel & GitHub Actions ready |

---

## Project Structure

```
├── .env.example                # Sample environment variables
├── .gitignore                  # Gitignore configured for Next.js & Node
├── LICENSE                     # MIT License
├── README.md                   # Complete architectural documentation
├── next.config.ts              # Next.js image domain & security header config
├── package.json                # Project dependencies and scripts
├── postcss.config.mjs          # PostCSS configuration for Tailwind v4
├── tsconfig.json               # TypeScript configuration with @/* alias
├── vercel.json                 # Vercel production deployment & cache headers
│
└── src/
    ├── app/
    │   ├── globals.css         # Luxury dark mode tokens, scrollbars & glass
    │   ├── layout.tsx          # Root shell, Google Fonts, JSON-LD Schema
    │   ├── page.tsx            # Home page with all 9 flagship sections
    │   ├── robots.ts           # Dynamic robots.txt
    │   ├── sitemap.ts          # Dynamic XML sitemap
    │   │
    │   ├── about/
    │   │   └── page.tsx        # Story, Mission, Vision, Values, Standards
    │   ├── services/
    │   │   └── page.tsx        # Deep-dive into all 6 disciplines
    │   ├── projects/
    │   │   ├── page.tsx        # Category-filtered portfolio
    │   │   └── [slug]/
    │   │       └── page.tsx    # Case study detail page with materials & gallery
    │   └── contact/
    │       └── page.tsx        # React Hook Form, Studios, Map & WhatsApp
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx      # Sticky luxury glass header with active tabs
    │   │   ├── MobileMenu.tsx  # Full-screen responsive drawer navigation
    │   │   └── Footer.tsx      # 5-column architectural footer & studios
    │   ├── hero/
    │   │   └── HeroSection.tsx # Headline reveal, proof metrics & dual CTAs
    │   ├── services/
    │   │   ├── ServiceCard.tsx # Interactive discipline card
    │   │   └── ServiceGrid.tsx # Responsive 3-column service layout
    │   ├── projects/
    │   │   ├── ProjectCard.tsx # Case study card with material badges
    │   │   ├── ProjectFilter.tsx # Category tabs (Residential, Commercial, etc.)
    │   │   └── ProjectGrid.tsx # Dynamic filtered portfolio layout
    │   ├── home/
    │   │   ├── MaterialsShowcase.tsx # Interactive tactile material inspector
    │   │   ├── WhyChooseHyly.tsx     # 4 architectural pillars & tolerances
    │   │   └── ProcessTimeline.tsx   # 5-stage architectural journey
    │   ├── contact/
    │   │   ├── ContactForm.tsx       # React Hook Form + Zod validation
    │   │   ├── StudioLocations.tsx   # Kochi, Bangalore, Dubai studios
    │   │   └── WhatsAppButton.tsx    # Direct WhatsApp concierge link
    │   └── shared/
    │       ├── Button.tsx            # Brass, outline, and ghost variants
    │       ├── SectionHeading.tsx    # Editorial eyebrow, title & subtitle
    │       ├── Container.tsx         # Responsive container constraints
    │       ├── Badge.tsx             # Typographic pills & certifications
    │       ├── CTA.tsx               # Full-bleed consultation banner
    │       └── SampleRequestModal.tsx # Interactive physical swatch box modal
    │
    ├── lib/
    │   ├── utils.ts            # clsx & tailwind-merge helper
    │   └── data/               # Centralized data store (No hardcoded strings)
    │       ├── company.ts      # Heritage, studios, certifications, contacts
    │       ├── services.ts     # The 6 core disciplines with specs & galleries
    │       ├── projects.ts     # 8+ complete luxury case studies
    │       ├── materials.ts    # Tactile materials archive & grain codes
    │       └── navigation.ts   # Navigation links, footer columns, socials
    │
    └── types/
        └── index.ts            # Strongly-typed TypeScript interfaces
```

---

## Data Architecture & Extensibility

All content is cleanly separated from UI components inside `src/lib/data/`:
* `services.ts` — Contains detailed architectural descriptions, technical specs, benefits, and recommended pairings.
* `projects.ts` — Detailed projects including year, location, client typology, materials used, multi-image gallery, and client testimonials.
* `materials.ts` — Specimen archive with grain characteristics, certifications, and high-res textures.
* `company.ts` — Single source of truth for phone numbers, emails, studio addresses, and FSC certifications.

### Future CMS Integration
To integrate a headless CMS (e.g. Sanity, Strapi, or Contentful), simply replace the static exports in `src/lib/data/` with fetchers from your CMS API. All components consume typed interfaces from `src/types/index.ts`.

---

## Local Development Setup

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/your-org/hyly.git
cd hyly
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## Vercel Deployment

This project is pre-configured for direct Vercel deployment:

1. Push your repository to GitHub.
2. In the [Vercel Dashboard](https://vercel.com/new), select **Import Git Repository**.
3. Choose Next.js framework (detected automatically via `vercel.json`).
4. Set the build command to `next build` (standard default).
5. Click **Deploy**.

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
