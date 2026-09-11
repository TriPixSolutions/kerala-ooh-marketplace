export interface CollectionItem {
  id: string;
  title: string;
  year: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  gallery: string[];
  materialsUsed: string[];
  applications: string[];
}

export const collectionsData: CollectionItem[] = [
  {
    id: "natural-veneers",
    title: "Natural Veneers Collection",
    year: "2026",
    category: "Botanical Materials",
    tagline: "Hand-curated consecutive crown-cut and quarter-sliced flitches from sustainable European forests.",
    description: "Our 2026 Veneer Collection redefines architectural warmth through sequence-numbered American Black Walnut, Smoked European Oak, and figured Eucalyptus, calibrated down to ±0.05 mm tolerances.",
    heroImage: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=85&w=800&auto=format&fit=crop",
    ],
    materialsUsed: ["American Black Walnut", "Smoked European Oak", "Figured Eucalyptus", "Zero-VOC Matte Hardwax"],
    applications: ["Full-Height Wall Paneling", "Concealed Flush Portals", "Executive Boardroom Credenzas"],
  },
  {
    id: "decorative-surfaces",
    title: "Decorative Surface Collection",
    year: "2026",
    category: "Tactile & Acoustic",
    tagline: "Linear fluted wood reliefs, acoustic PET batten backings, and living metallic patinas.",
    description: "Designed to engage touch and acoustic serenity, featuring precision-milled timber louvers, cold-cast liquid bronzes, and architectural relief geometries.",
    heroImage: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=800&auto=format&fit=crop",
    ],
    materialsUsed: ["Acoustic PET Felt", "Natural Teak & Ash Louvers", "Real Liquid Bronze Coating"],
    applications: ["Auditorium & Home Cinema Walls", "Feature Living Room Accents", "Curved Reception Partitions"],
  },
  {
    id: "premium-hardware",
    title: "Premium Hardware Collection",
    year: "2026",
    category: "Precision Kinematics",
    tagline: "Concealed 3D adjustable pivot systems, synchronized whisper drawer runners, and patinated handles.",
    description: "The invisible architecture behind flawless living spaces. Engineering heavy 160kg architectural doors to float on silent oil-damped pivot points.",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=85&w=800&auto=format&fit=crop",
    ],
    materialsUsed: ["Extruded Champagne Brass", "Hardened Stainless Steel", "Anodized Charcoal Aluminum"],
    applications: ["Heavyweight Pivot Doors", "Handleless Cabinetry", "Concealed Wardrobe Uprights"],
  },
  {
    id: "architectural-boards",
    title: "Architectural Board Collection",
    year: "2026",
    category: "Calibrated Structural Cores",
    tagline: "Four-times calibrated BWP marine birch cores and fire-retardant structural foundations.",
    description: "The uncompromising foundation for enduring architectural millwork. Zero interior voids, extreme hydraulic bonding, and CARB II emission standards.",
    heroImage: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=800&auto=format&fit=crop",
    ],
    materialsUsed: ["100% Northern European Birch", "Phenolic Fortified Resin", "Fire Retardant Mineral Core"],
    applications: ["Kitchen Carcasses", "High-Moisture Wardrobes", "Structural Wall Cladding Substrates"],
  },
  {
    id: "day-systems",
    title: "Day Living Systems",
    year: "2026",
    category: "Integrated Systems",
    tagline: "Fluid, monolithic modular wall paneling and suspended media consoles.",
    description: "Inspired by Poliform Day Systems: seamlessly integrating bookmatched walnut veneers, concealed lighting channels, and floating stone counters.",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=800&auto=format&fit=crop",
    ],
    materialsUsed: ["Quarter-Cut Walnut", "Smoked Bronze Glass", "Natural Travertine"],
    applications: ["Penthouse Living Salons", "Private Library Paneling", "Suspended Credenzas"],
  },
  {
    id: "night-systems",
    title: "Night Wardrobe Systems",
    year: "2026",
    category: "Integrated Systems",
    tagline: "Walk-in dressing chambers with micro-channel illumination and saddle-leather joinery.",
    description: "Bespoke dressing sanctuaries engineered to Poliform tolerances with custom drawer dividers, velvet jewelry trays, and bronze glass display doors.",
    heroImage: "https://images.unsplash.com/photo-1558882224-dda166733046?q=85&w=1400&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1558882224-dda166733046?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=85&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=800&auto=format&fit=crop",
    ],
    materialsUsed: ["Smoked Oak", "Saddle Stitch Leather", "Fluted Glass & Anodized Aluminum"],
    applications: ["Master Dressing Suites", "Walk-In Closets", "Island Accessory Display Units"],
  },
];
