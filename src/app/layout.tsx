import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { companyData } from "@/lib/data/company";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const viewport: Viewport = {
  themeColor: "#F7F5F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hyly.luxury"),
  title: {
    default: "HYLY | Luxury Craftsmanship & Interior Material Solutions",
    template: "%s | HYLY Luxury",
  },
  description:
    "HYLY delivers architectural veneers, decorative surfaces, precision hardware, and bespoke living craftsmanship for luxury residences and commercial spaces.",
  keywords: [
    "HYLY interior materials",
    "luxury veneers",
    "architectural hardware",
    "acoustic panels",
    "bespoke craftsmanship",
    "luxury interior design",
    "custom cabinetry",
    "interior material supply",
  ],
  authors: [{ name: "HYLY Craftsmanship & Interior Solutions" }],
  creator: "HYLY",
  publisher: "HYLY",
  formatDetection: {
    email: true,
    telephone: true,
  },
  openGraph: {
    title: "HYLY | Luxury Craftsmanship & Interior Material Solutions",
    description:
      "Crafting spaces. Elevating interiors. Through premium materials, architectural veneers, and bespoke craftsmanship.",
    url: "https://hyly.luxury",
    siteName: "HYLY",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "HYLY Luxury Interior Craftsmanship",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HYLY | Luxury Craftsmanship & Interior Materials",
    description:
      "Crafting spaces. Elevating interiors. Through premium materials.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop",
    ],
  },
  robots: {
    index: true,
    follow: true,
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
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F7F5F2] text-[#171717] antialiased selection:bg-[#8B6A4D]/20 selection:text-[#171717]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
