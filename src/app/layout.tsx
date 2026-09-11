import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { companyData } from "@/lib/data/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#090a0c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hyly.luxury"),
  title: {
    default: "HYLY | Luxury Architectural Craftsmanship & Interior Materials",
    template: "%s | HYLY Craftsmanship",
  },
  description:
    "HYLY is an architectural material atelier and bespoke craftsmanship company specializing in exotic veneers, acoustic decorative surfaces, concealed precision hardware, calibrated marine plywood, and bespoke living systems.",
  keywords: [
    "architectural veneers",
    "luxury interior materials",
    "smoked oak veneer",
    "acoustic fluted panels",
    "concealed hinges",
    "calibrated marine plywood",
    "bespoke walk in wardrobes",
    "luxury modular kitchens",
    "custom craftsmanship",
    "HYLY interior solutions",
  ],
  authors: [{ name: "HYLY Craftsmanship & Interior Solutions" }],
  creator: "HYLY",
  publisher: "HYLY",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    title: "HYLY | Luxury Architectural Craftsmanship & Interior Materials",
    description:
      "Curators of rare wood veneers, tactile acoustic surfaces, concealed precision hardware, and bespoke living systems for visionary architecture.",
    url: "https://hyly.luxury",
    siteName: "HYLY",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "HYLY Architectural Craftsmanship & Interior Materials",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HYLY | Architectural Craftsmanship & Interior Materials",
    description:
      "The Poetry of Wood, The Precision of Architecture. Explore our material archive and bespoke joinery commissions.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://hyly.luxury",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://hyly.luxury/#organization",
        name: companyData.name,
        legalName: companyData.legalName,
        url: "https://hyly.luxury",
        logo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=300",
        description: companyData.shortBio,
        telephone: companyData.contact.phone,
        email: companyData.contact.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: companyData.studios[0].address,
          addressLocality: "Kochi",
          addressRegion: "Kerala",
          postalCode: "682036",
          addressCountry: "IN",
        },
        sameAs: [
          "https://instagram.com/hyly.luxury",
          "https://linkedin.com/company/hyly",
        ],
      },
      {
        "@type": "HomeAndConstructionBusiness",
        "@id": "https://hyly.luxury/#business",
        name: companyData.name,
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200",
        telephone: companyData.contact.phone,
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: companyData.studios[0].address,
          addressLocality: "Kochi",
          addressRegion: "Kerala",
          postalCode: "682036",
          addressCountry: "IN",
        },
        openingHours: "Mo-Sa 09:30-19:00",
      },
    ],
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#090a0c] text-[#f6f4f0] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
