export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const headerNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Collections", href: "/collections" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Experience Centres", href: "/contact#studios" },
    { label: "Sustainability", href: "/about#sustainability" },
    { label: "Materials Archive", href: "/products" },
    { label: "Contact Us", href: "/contact" },
  ],
  customerService: [
    { label: "Consultation & Sampling", href: "/contact" },
    { label: "Architectural Specification", href: "/contact" },
    { label: "Delivery & Installation", href: "/about" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  socials: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "Pinterest", href: "https://pinterest.com" },
  ],
};
