export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const headerNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  disciplines: [
    { label: "Veneers", href: "/services#veneers" },
    { label: "Decorative Materials", href: "/services#decorative-materials" },
    { label: "Hardware Solutions", href: "/services#hardware-solutions" },
    { label: "Plywood & Boards", href: "/services#plywood-boards" },
    { label: "Home Applications", href: "/services#home-applications" },
    { label: "Custom Craftsmanship", href: "/services#custom-craftsmanship" },
  ],
  company: [
    { label: "Our Story", href: "/about" },
    { label: "Design Philosophy", href: "/about#philosophy" },
    { label: "Technical Standards", href: "/about#standards" },
    { label: "Selected Projects", href: "/projects" },
    { label: "Design Studios", href: "/contact#studios" },
    { label: "Architect Inquiry", href: "/contact" },
  ],
  portfolio: [
    { label: "Residential Estates", href: "/projects?category=residential" },
    { label: "Commercial Headquarters", href: "/projects?category=commercial" },
    { label: "Bespoke Kitchens", href: "/projects?category=kitchens" },
    { label: "Walk-In Dressing Suites", href: "/projects?category=wardrobes" },
    { label: "Decorative & Acoustic Reliefs", href: "/projects?category=decorative-works" },
  ],
  legal: [
    { label: "FSC® Forest Stewardship", href: "/about" },
    { label: "Material Safety Data (E0)", href: "/about" },
    { label: "Architectural Specifier Portal", href: "/contact" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Specification", href: "#" },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com", handle: "@hyly.luxury" },
    { name: "LinkedIn", href: "https://linkedin.com", handle: "HYLY Craftsmanship" },
    { name: "Pinterest", href: "https://pinterest.com", handle: "HYLY Material Archive" },
    { name: "ArchDaily", href: "https://archdaily.com", handle: "HYLY Architectural Library" },
  ],
};
