export interface NavLink {
  label: string;
  href: string;
}

export const headerNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Materials", href: "/materials" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  materials: [
    { label: "Natural Veneers", href: "/materials#veneers" },
    { label: "Decorative Surfaces", href: "/materials#decorative-surfaces" },
    { label: "Plywood & Marine Cores", href: "/materials#plywood" },
    { label: "Architectural Boards", href: "/materials#architectural-boards" },
    { label: "Hardware Solutions", href: "/materials#hardware" },
    { label: "Applications", href: "/materials#applications" },
  ],
  company: [
    { label: "About HYLY", href: "/about" },
    { label: "Selected Commissions", href: "/projects" },
    { label: "Design Studios", href: "/contact" },
    { label: "Material Sampling", href: "/contact" },
    { label: "Careers", href: "/about" },
  ],
  legal: [
    { label: "FSC® Forest Chain of Custody", href: "/about" },
    { label: "CARB II / E0 Compliance", href: "/about" },
    { label: "Terms of Specification", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Pinterest", href: "https://pinterest.com" },
    { name: "ArchDaily", href: "https://archdaily.com" },
  ],
};
