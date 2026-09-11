"use client";

import React from "react";
import Link from "next/link";
import { footerNavigation } from "@/lib/data/navigation";
import { companyData } from "@/lib/data/company";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#07080a] border-t border-white/[0.08] text-[#9ea3b0] pt-20 pb-12">
      <Container>
        {/* Top Studio & Atelier Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 border-b border-white/[0.08]">
          {companyData.studios.map((studio) => (
            <div
              key={studio.city}
              className="p-6 bg-[#0f1115] border border-white/[0.06] hover:border-[#c5a880]/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#c5a880]">
                  {studio.type}
                </span>
                <MapPin className="w-4 h-4 text-[#c5a880]" />
              </div>
              <h4 className="text-lg font-light text-[#f6f4f0] mb-2">
                {studio.city}
              </h4>
              <p className="text-xs text-[#9ea3b0] leading-relaxed mb-4">
                {studio.address}, {studio.area}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-white/[0.06] text-xs font-mono">
                <a
                  href={`tel:${studio.phone}`}
                  className="hover:text-[#f6f4f0] transition-colors"
                >
                  {studio.phone}
                </a>
                <a
                  href={studio.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#c5a880] hover:underline"
                >
                  Directions <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Main Footer Columns */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand & Mission */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="text-3xl font-light tracking-[0.25em] text-[#f6f4f0] block">
                HYLY
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#c5a880]">
                Craftsmanship & Interior Materials
              </span>
            </div>

            <p className="text-xs sm:text-sm font-light text-[#9ea3b0] leading-relaxed max-w-md">
              {companyData.tagline} {companyData.shortBio}
            </p>

            <div className="pt-2">
              <span className="block text-[11px] font-mono uppercase tracking-wider text-[#f6f4f0] mb-2">
                Architectural Specifier Dispatch
              </span>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex max-w-sm"
              >
                <input
                  type="email"
                  placeholder="architect@firm.com"
                  className="bg-[#14171d] border border-white/[0.1] px-3.5 py-2.5 text-xs text-[#f6f4f0] focus:outline-none focus:border-[#c5a880] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#c5a880] text-[#090a0c] px-4 text-xs font-mono uppercase tracking-wider font-semibold hover:bg-[#d9c3a5] cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Disciplines */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-[0.16em] text-[#f6f4f0] mb-4">
              Disciplines
            </h5>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.disciplines.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Selected Works */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-[0.16em] text-[#f6f4f0] mb-4">
              Portfolio
            </h5>
            <ul className="space-y-2.5 text-xs">
              {footerNavigation.portfolio.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Socials */}
          <div>
            <h5 className="text-xs font-mono uppercase tracking-[0.16em] text-[#f6f4f0] mb-4">
              Company
            </h5>
            <ul className="space-y-2.5 text-xs mb-6">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-[#c5a880] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h5 className="text-xs font-mono uppercase tracking-[0.16em] text-[#f6f4f0] mb-3">
              Connect
            </h5>
            <ul className="space-y-1.5 text-xs font-mono">
              {footerNavigation.socials.map((soc) => (
                <li key={soc.name}>
                  <a
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#9ea3b0] hover:text-[#c5a880] transition-colors"
                  >
                    {soc.name} <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications Bar */}
        <div className="py-8 border-y border-white/[0.08] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#9ea3b0]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
            <span>FSC® 100% Chain-of-Custody</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
            <span>E0 European Formaldehyde Safe</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
            <span>IS:710 Marine 72-Hr BWP Calibrated</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#c5a880]" />
            <span>ISO 9001:2015 Registered</span>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-neutral-500">
          <div>
            © {new Date().getFullYear()} {companyData.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Engineered for Architects & Visionary Spaces</span>
            <Link href="/contact" className="hover:text-[#f6f4f0] transition-colors">
              Concierge Desk
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
