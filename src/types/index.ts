export type ProjectCategory =
  | "all"
  | "residential"
  | "commercial"
  | "kitchens"
  | "wardrobes"
  | "decorative-works";

export interface MaterialSpec {
  name: string;
  category: string;
  origin?: string;
  finish?: string;
  thickness?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  shortDescription: string;
  fullDescription: string;
  heroImage: string;
  gallery: string[];
  benefits: {
    title: string;
    description: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  materialPairings: string[];
  idealApplications: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  year: string;
  clientType: string;
  architect?: string;
  scope: string;
  overview: string;
  coverImage: string;
  gallery: string[];
  materialsUsed: {
    name: string;
    serviceSlug: string;
    description: string;
  }[];
  highlights: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface TactileMaterial {
  id: string;
  name: string;
  category: "Veneers" | "Decorative" | "Hardware" | "Plywood" | "Craftsmanship";
  code: string;
  textureImage: string;
  description: string;
  grain: string;
  sheen: string;
  certification: string;
  bestPairedWith: string;
}

export interface StudioLocation {
  city: string;
  type: string;
  address: string;
  area: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  mapUrl: string;
}

export interface CoreValue {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface TechnicalCapability {
  title: string;
  metric: string;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: "residential" | "commercial" | "architect-spec" | "hospitality" | "other";
  materialsInterested: string[];
  timeline: string;
  budgetRange?: string;
  message: string;
}
