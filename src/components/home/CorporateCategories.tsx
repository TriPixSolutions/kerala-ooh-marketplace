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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Product Categories
            </h2>
          </div>
          <Link
            href="/materials"
            className="text-xs sm:text-sm font-medium text-[#111111] hover:text-[#8B6A4D] flex items-center gap-1.5 transition-colors group"
          >
            <span>Explore All Materials</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Categories: Horizontal swipe on mobile, 3-column grid on desktop */}
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {coreCategories.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative shrink-0 w-[78vw] sm:w-auto rounded-[28px] overflow-hidden bg-[#EAE7E1] aspect-[4/4.5] sm:aspect-[4/3.8] flex flex-col justify-between p-6 sm:p-7 snap-center shadow-sm border border-[#E5E5E5] transition-all hover:shadow-lg hover:-translate-y-1"
              >
                {/* Background Photography */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 80vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                    HYLY Archive
                  </span>
                </div>

                {/* Bottom Information & Arrow */}
                <div className="relative z-10 flex items-end justify-between gap-3 text-white">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#ECE7DF] font-light line-clamp-1">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="btn-action-circle w-9 h-9 sm:w-10 sm:h-10 group-hover:bg-[#8B6A4D]">
                    <ArrowUpRight className="w-4 h-4 text-white" />
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
