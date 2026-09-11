import { CoreValue, StudioLocation, TechnicalCapability } from "@/types";

export const companyData = {
  name: "HYLY",
  legalName: "HYLY Craftsmanship & Interior Solutions Pvt. Ltd.",
  tagline: "The Poetry of Wood, The Precision of Architecture.",
  shortBio:
    "HYLY is an architectural material atelier and bespoke craftsmanship house. We engineer veneers, decorative surfaces, precision hardware, and bespoke interior architectural systems for residences, commercial spaces, and luxury hospitality worldwide.",
  foundedYear: 2001,
  yearsOfExcellence: 25,
  completedProjectsCount: 480,
  countriesServed: 6,
  materialsInArchive: 1200,
  fscCertifiedRatio: "100%",

  story: {
    origin:
      "HYLY was established with a singular conviction: that the natural integrity of timber and architectural materials should be preserved through master craftsmanship, unyielding engineering discipline, and pure aesthetic restraint.",
    heritage:
      "For over two decades, we have collaborated closely with celebrated architects, interior designers, and discerning private patrons. What began as a master veneer workshop has grown into a comprehensive architectural materials house, curating rare wood grains, acoustic surfaces, concealed precision hardware, and tailor-made millwork.",
    philosophy:
      "Inspired by the purism of modern masters and the timeless restraint of Nordic and Japanese joinery, our ethos is built on tactile honesty. We do not disguise materials; we reveal their essence through calibrated tolerances and hand-rubbed finishes.",
  },

  mission:
    "To empower architects and interior designers with world-class materials and bespoke fabrication capabilities that elevate living spaces into timeless environments.",

  vision:
    "To stand as the global benchmark for architectural wood craftsmanship, sustainable material stewardship, and precision interior engineering.",

  coreValues: [
    {
      number: "01",
      title: "Material Purity",
      tagline: "Uncompromised authenticity in every grain.",
      description:
        "Every veneer leaf, timber core, and brass component is hand-selected from certified sustainable forests and ethical foundries. We reject synthetic counterfeits in favor of true natural resonance.",
    },
    {
      number: "02",
      title: "Micron Precision",
      tagline: "Engineering calibrated to tenths of a millimeter.",
      description:
        "By merging 5-axis German CNC milling with generations of artisanal hand-finishing, our tolerances meet the exacting standards demanded by modern architectural details.",
    },
    {
      number: "03",
      title: "Sustainable Stewardship",
      tagline: "Responsible forestry for generations forward.",
      description:
        "100% of our wood products carry FSC (Forest Stewardship Council) certification and emit zero toxic formaldehyde (E0 standard), safeguarding indoor air purity and planet health.",
    },
    {
      number: "04",
      title: "Bespoke Co-Creation",
      tagline: "A dedicated atelier for visionaries.",
      description:
        "We do not offer rigid catalog limits. From custom smoked veneer stains to bespoke solid brass architectural handles, every commission is engineered to the designer's exact intent.",
    },
  ] as CoreValue[],

  technicalCapabilities: [
    {
      title: "CNC Calibration",
      metric: "± 0.05 mm",
      description: "Computer numerical 5-axis routing for seamless flush joints and intricate fluted architectural patterns.",
    },
    {
      title: "Emission Standard",
      metric: "E0 / CARB II",
      description: "Zero-formaldehyde emission adhesives and core boards, ensuring certified safe indoor air quality.",
    },
    {
      title: "Boiling Waterproof",
      metric: "72 Hr Tested",
      description: "Marine-grade IS:710 calibrated plywood withstands intense humidity and extreme climate cycles.",
    },
    {
      title: "Hand-Rubbed Finishes",
      metric: "4-Stage Oil",
      description: "Micro-porous plant oil and wax coatings that breathe with the wood, preserving warmth and tactile grain.",
    },
  ] as TechnicalCapability[],

  studios: [
    {
      city: "Kochi Flagship",
      type: "Flagship Experience Atelier",
      address: "HYLY Pavilion, 42/1800 Panampilly Nagar Avenue",
      area: "Ernakulam, Kerala 682036",
      phone: "+91 484 295 8800",
      email: "kochi@hyly.luxury",
      hours: "Monday – Saturday: 09:30 AM – 07:00 PM",
      coordinates: { lat: 9.9658, lng: 76.2974 },
      mapUrl: "https://maps.google.com/?q=Panampilly+Nagar+Kochi",
    },
    {
      city: "Bangalore Design Lab",
      type: "Architectural Material Lab",
      address: "Suite 304, The Guild, 100 Feet Road, Indiranagar",
      area: "Bengaluru, Karnataka 560038",
      phone: "+91 80 4122 9900",
      email: "bangalore@hyly.luxury",
      hours: "Monday – Saturday: 10:00 AM – 07:30 PM",
      coordinates: { lat: 12.9784, lng: 77.6408 },
      mapUrl: "https://maps.google.com/?q=Indiranagar+Bangalore",
    },
    {
      city: "Dubai Studio",
      type: "Middle East Partner Office",
      address: "Building 04, Dubai Design District (d3)",
      area: "Dubai, United Arab Emirates",
      phone: "+971 4 821 4450",
      email: "dubai@hyly.luxury",
      hours: "Sunday – Thursday: 09:00 AM – 06:00 PM",
      coordinates: { lat: 25.1867, lng: 55.2972 },
      mapUrl: "https://maps.google.com/?q=Dubai+Design+District",
    },
  ] as StudioLocation[],

  certifications: [
    {
      name: "FSC® 100% Certified",
      body: "Forest Stewardship Council",
      description: "Chain of custody verification ensuring timber is harvested from responsibly managed forests.",
    },
    {
      name: "E0 Emission Standard",
      body: "European Norm EN 120 / CARB II",
      description: "Stringent zero-emission benchmark guaranteeing safe indoor air without volatile formaldehyde gases.",
    },
    {
      name: "IS:710 Marine Grade",
      body: "Bureau of Indian Standards",
      description: "Certified boiling waterproof plywood fabricated with un-extended B-stage phenolic resin.",
    },
    {
      name: "ISO 9001:2015",
      body: "Quality Management System",
      description: "Rigorous continuous inspection protocol covering moisture calibration, thickness uniformity, and joint tension.",
    },
  ],

  contact: {
    phone: "+91 484 295 8800",
    email: "concierge@hyly.luxury",
    architectsDesk: "specifications@hyly.luxury",
    pressEmail: "press@hyly.luxury",
    whatsapp: "+91 98460 01234",
    whatsappLink: "https://wa.me/919846001234?text=Hello%20HYLY%2C%20I%20would%20like%20to%20schedule%20an%20architectural%20materials%20consultation.",
  },
};
