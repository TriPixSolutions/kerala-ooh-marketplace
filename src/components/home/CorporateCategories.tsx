"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";
import { coreCategories } from "@/lib/data/materials";

export function CorporateCategories() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2]">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 max-w-6xl mx-auto">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-2 block">
              Core Disciplines
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111]">
              Product Categories
            </h2>
          </div>
          <Link
            href="/materials"
            className="text-xs sm:text-sm font-medium text-[#111111] hover:text-[#8B6A4D] flex items-center gap-1.5 transition-colors group font-sans"
          >
            <span>Explore All Materials</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Categories: Horizontal swipe on mobile, 3-column grid on desktop */}
        {/* Apple + Poliform style: White card with framed daylight photography and clean readable typography */}
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {coreCategories.map((cat, idx) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="hyly-card group shrink-0 w-[78vw] sm:w-auto p-5 sm:p-6 bg-white border border-[#E5E5E5] flex flex-col justify-between snap-center transition-all hover:border-[#8B6A4D]/40"
              >
                {/* Natural Light Photography Frame */}
                <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#ECE7DF] mb-5">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 80vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Contrast Pill on Image */}
                  <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#111111] border border-black/5 shadow-xs">
                    0{idx + 1}
                  </div>
                </div>

                {/* Crisp Text on Solid White Background for 100% WCAG Contrast */}
                <div className="space-y-1.5 mb-5">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#8B6A4D] block">
                    HYLY Discipline
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] group-hover:text-[#8B6A4D] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] font-normal leading-relaxed line-clamp-1">
                    {cat.subtitle}
                  </p>
                </div>

                {/* Bottom Action Footer */}
                <div className="pt-3.5 border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#8B6A4D] transition-colors font-sans">
                    View Materials
                  </span>
                  <div className="btn-action-circle w-8 h-8 sm:w-9 sm:h-9 group-hover:bg-[#8B6A4D]">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2 text-[11px] font-mono uppercase tracking-widest text-[#8B6A4D]">
            <span>Swipe categories →</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
