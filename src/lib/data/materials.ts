export interface MaterialCategory {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  href: string;
}

export interface FeaturedMaterial {
  id: string;
  title: string;
  shortLabel: string;
  description: string;
  image: string;
  href: string;
}

export interface MaterialCollection {
  id: string;
  name: string;
  category: "Veneers" | "Decorative Surfaces" | "Plywood" | "Architectural Boards" | "Hardware" | "Applications";
  eyebrow: string;
  description: string;
  heroImage: string;
  gallery: string[];
  applications: string[];
  specifications: { label: string; value: string }[];
}

export const coreCategories: MaterialCategory[] = [
  {
    id: "veneers",
    title: "Veneers",
    subtitle: "Quarter-Cut & Crown-Cut Flitches",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1200&auto=format&fit=crop",
    href: "/materials#veneers",
  },
  {
    id: "decorative-surfaces",
    title: "Decorative Surfaces",
    subtitle: "Acoustic Battens & Patinas",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=1200&auto=format&fit=crop",
    href: "/materials#decorative-surfaces",
  },
  {
    id: "plywood",
    title: "Plywood",
    subtitle: "Calibrated Marine Birch Cores",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=1200&auto=format&fit=crop",
    href: "/materials#plywood",
  },
  {
    id: "architectural-boards",
    title: "Architectural Boards",
    subtitle: "Fire-Rated & Acoustic Substrates",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1200&auto=format&fit=crop",
    href: "/materials#architectural-boards",
  },
  {
    id: "hardware",
    title: "Hardware",
    subtitle: "Concealed 3D Pivot Kinematics",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1200&auto=format&fit=crop",
    href: "/materials#hardware",
  },
  {
    id: "applications",
    title: "Applications",
    subtitle: "Living Systems & Millwork",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop",
    href: "/materials#applications",
  },
];

export const featuredMaterials: FeaturedMaterial[] = [
  {
    id: "natural-veneers",
    title: "Natural Veneers",
    shortLabel: "Botanical Hardwoods",
    description: "Hand-curated American walnut and smoked oak with consecutive sequence numbering.",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1400&auto=format&fit=crop",
    href: "/materials#veneers",
  },
  {
    id: "decorative-panels",
    title: "Decorative Panels",
    shortLabel: "Acoustic Architecture",
    description: "Precision fluted timber battens mounted to recycled PET felt dampening cores.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=1400&auto=format&fit=crop",
    href: "/materials#decorative-surfaces",
  },
  {
    id: "luxury-finishes",
    title: "Luxury Finishes",
    shortLabel: "Micro-Pore Treatments",
    description: "Natural Italian hardwax oils and burnished cold-cast liquid bronze patinas.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1400&auto=format&fit=crop",
    href: "/materials#decorative-surfaces",
  },
  {
    id: "architectural-boards",
    title: "Architectural Boards",
    shortLabel: "Structural Substrates",
    description: "Four-times calibrated BWP marine birch cores bonded under extreme hydraulic pressure.",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=1400&auto=format&fit=crop",
    href: "/materials#architectural-boards",
  },
];

export const materialCollections: MaterialCollection[] = [
  {
    id: "veneers",
    name: "Natural Architectural Veneers",
    category: "Veneers",
    eyebrow: "Botanical Provenance",
    description: "Rare botanical timber flitches inspected log-by-log from sustainably managed temperate forests. Each flitch is sequence-numbered for seamless full-height architectural elevations.",
    heroImage: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=85&w=800&auto=format&fit=crop",
    ],
    applications: ["Full-Height Wall Paneling", "Concealed Flush Portals", "Executive Boardroom Credenzas", "Custom Cabinetry Fronts"],
    specifications: [
      { label: "Standard Thickness", value: "0.55mm to 2.0mm" },
      { label: "Sheet Dimensions", value: "Up to 3650 x 1350 mm" },
      { label: "Slicing Patterns", value: "Quarter Cut, Crown Cut, Figured Pommele" },
      { label: "Certification", value: "100% FSC® Chain of Custody" },
    ],
  },
  {
    id: "decorative-surfaces",
    name: "Acoustic & Tactile Surfaces",
    category: "Decorative Surfaces",
    eyebrow: "Sensory Architecture",
    description: "Precision linear fluted timber reliefs and real atomized cold-cast metal finishes engineered to absorb reverberant sound while imparting three-dimensional architectural texture.",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=800&auto=format&fit=crop",
    ],
    applications: ["Auditorium & Home Cinema Walls", "Reception Feature Backdrops", "Curved Living Room Partitions", "Ceiling Acoustic Soffits"],
    specifications: [
      { label: "Acoustic Absorption", value: "NRC 0.85 (ASTM C423)" },
      { label: "Substrate", value: "Recycled PET Felt (9mm / 12mm)" },
      { label: "Fire Resistance", value: "Class B-s1, d0 (EN 13501)" },
      { label: "Timber Profiles", value: "White Ash, European Oak, Teak" },
    ],
  },
  {
    id: "plywood",
    name: "Calibrated Marine Birch Cores",
    category: "Plywood",
    eyebrow: "Structural Purity",
    description: "Engineered from 100% Northern European birch veneers bonded under extreme hydraulic pressure with unextended phenolic resins. Four times calibrated for zero surface variation.",
    heroImage: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=800&auto=format&fit=crop",
    ],
    applications: ["Wet-Area Cabinet Carcasses", "Heavy Architectural Doors", "Curved Structural Millwork", "Sub-Floor Levelling"],
    specifications: [
      { label: "Bonding Standard", value: "IS:710 Boiling Water Proof (BWP)" },
      { label: "Emission Standard", value: "CARB Phase II / European Norm E0" },
      { label: "Calibration Tolerance", value: "±0.1 mm four-sided calibration" },
      { label: "Available Thicknesses", value: "6mm, 9mm, 12mm, 16mm, 19mm, 25mm" },
    ],
  },
  {
    id: "architectural-boards",
    name: "Architectural & Fire-Rated Boards",
    category: "Architectural Boards",
    eyebrow: "Safety & Performance",
    description: "High-density mineral cores and fire-retardant structural fiberboards developed specifically for commercial hospitality towers, airport lounges, and institutional auditoriums.",
    heroImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=800&auto=format&fit=crop",
    ],
    applications: ["Hotel Corridor Partitions", "Fire-Rated Portal Substrates", "Acoustic Wall Paneling Substrates", "Commercial Joinery"],
    specifications: [
      { label: "Fire Resistance", value: "Class 1 (BS 476 Part 7) & IS:5509" },
      { label: "Density", value: "780 - 820 kg/m³" },
      { label: "Screw Holding Capacity", value: "> 1700 N on face" },
      { label: "Moisture Swelling", value: "< 4% after 24h immersion" },
    ],
  },
  {
    id: "hardware",
    name: "Concealed Hardware & Kinematics",
    category: "Hardware",
    eyebrow: "The Silent Movement",
    description: "Invisible heavy-duty 3D adjustable pivot bearings, synchronized whisper-quiet undermount slides, and living patinated architectural pulls engineered for 200,000 mechanical cycles.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=85&w=800&auto=format&fit=crop",
    ],
    applications: ["Concealed Pivot Portals", "Handleless Kitchen Drawers", "Frameless Bronze Glass Doors", "Sliding Pocket Partitions"],
    specifications: [
      { label: "Load Capacity", value: "Up to 160 kg per door leaf" },
      { label: "Adjustability", value: "3D tool-less ±2.0mm calibration" },
      { label: "Cycle Testing", value: "200,000 European mechanical cycles" },
      { label: "Finishes", value: "Matte Black, Champagne Brass, Smoked Bronze" },
    ],
  },
  {
    id: "applications",
    name: "Interior Material Applications",
    category: "Applications",
    eyebrow: "Holistic Realization",
    description: "Turnkey architectural integration of materials across bespoke living rooms, walk-in dressing chambers, sculptural kitchen islands, and executive suites.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558882224-dda166733046?q=85&w=800&auto=format&fit=crop",
    ],
    applications: ["Private Waterfront Villas", "Luxury Penthouses", "Executive Boardrooms", "High-End Retail Ateliers"],
    specifications: [
      { label: "Service Scope", value: "Material supply & turnkey engineering" },
      { label: "Engineering Tolerances", value: "±0.05 mm on CNC joints" },
      { label: "Experience Centres", value: "Kochi, Bangalore, Dubai" },
      { label: "Warranty", value: "10-Year Structural Craftsmanship Warranty" },
    ],
  },
];
