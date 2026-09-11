"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { footerNavigation } from "@/lib/data/navigation";

export function Footer() {
  return (
    <footer className="bg-[#111111] !text-white pt-16 sm:pt-24 pb-12 overflow-hidden border-t border-white/10">
      <Container size="wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 sm:gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Materials */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider !text-white mb-5 font-mono">
              Materials
            </h4>
            <ul className="space-y-3">
              {footerNavigation.materials.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm !text-white/80 hover:!text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider !text-white mb-5 font-mono">
              Company
            </h4>
            <ul className="space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm !text-white/80 hover:!text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Press */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider !text-white mb-5 font-mono">
              Social
            </h4>
            <ul className="space-y-3">
              {footerNavigation.socials.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm !text-white/80 hover:!text-white transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Ateliers */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider !text-white mb-5 font-mono">
              Ateliers
            </h4>
            <div className="space-y-2.5 text-sm !text-white/80">
              <p>Kochi • Panampilly Nagar</p>
              <p>Bangalore • Indiranagar</p>
              <p>Dubai • Design District (d3)</p>
              <div className="pt-3">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[11px] text-[#8B6A4D] font-mono border border-white/10">
                  FSC® Certified & ISO 9001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Giant Brand Wordmark */}
        <div className="pt-12 flex flex-col items-center justify-center text-center">
          <h2 className="text-[20vw] font-bold tracking-tighter !text-white/90 leading-none select-none pointer-events-none">
            HYLY
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-between w-full pt-8 text-xs !text-white/70 gap-4">
            <p>© {new Date().getFullYear()} HYLY Materials & Craftsmanship. All rights reserved.</p>
            <p className="font-mono text-[11px] !text-white/70">Architectural Materials & Precision Joinery</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
