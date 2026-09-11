"use client";

import React from "react";
import Link from "next/link";
import { companyData } from "@/lib/data/company";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About HYLY", href: "/about" },
    { label: "Disciplines", href: "/services" },
    { label: "Selected Works", href: "/projects" },
    { label: "Contact & Studios", href: "/contact" },
  ];

  const servicesLinks = [
    { label: "Natural Veneers", href: "/services#veneers" },
    { label: "Decorative Materials", href: "/services#decorative-materials" },
    { label: "Hardware Solutions", href: "/services#hardware-solutions" },
    { label: "Plywood & Boards", href: "/services#plywood-boards" },
    { label: "Home Applications", href: "/services#home-applications" },
    { label: "Custom Craftsmanship", href: "/services#custom-craftsmanship" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Pinterest", href: "https://pinterest.com" },
    { name: "ArchDaily", href: "https://archdaily.com" },
  ];

  return (
    <footer className="bg-[#F7F5F2] border-t border-[#E5E5E5] text-[#171717] pt-20 pb-12">
      <Container size="wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#E5E5E5] max-w-6xl mx-auto">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <Link
              href="/"
              className="font-serif-editorial text-3xl italic text-[#171717] block"
            >
              HYLY
            </Link>
            <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-sm">
              Architectural craftsmanship and interior material solutions. Engineering botanical warmth and mechanical precision for visionary spaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block mb-4">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm text-[#6B6B6B]">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#171717] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block mb-4">
              Disciplines
            </span>
            <ul className="space-y-2.5 text-sm text-[#6B6B6B]">
              {servicesLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#171717] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block mb-4">
                Atelier Concierge
              </span>
              <div className="text-sm text-[#6B6B6B] space-y-1">
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="block hover:text-[#171717] transition-colors"
                >
                  {companyData.contact.phone}
                </a>
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="block hover:text-[#171717] transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </div>
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block mb-2">
                Follow
              </span>
              <div className="flex flex-wrap gap-3 text-xs text-[#6B6B6B]">
                {socialLinks.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#171717] inline-flex items-center gap-0.5"
                  >
                    {soc.name} <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B6B6B] max-w-6xl mx-auto">
          <div>
            © {new Date().getFullYear()} HYLY Craftsmanship & Interior Solutions.
          </div>
          <div className="flex items-center gap-6">
            <span>FSC® Certified</span>
            <span>E0 Formaldehyde Safe</span>
            <span>IS:710 Marine Core</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
