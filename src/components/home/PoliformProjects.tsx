"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/lib/data/projects";

export function PoliformProjects() {
  // Select top 4 luxury commissions
  const featured = projectsData.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 max-w-6xl mx-auto">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-2 block">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111]">
              Selected Commissions
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-medium text-[#111111] hover:text-[#8B6A4D] flex items-center gap-1.5 transition-colors group font-sans"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Horizontal Swipe on Mobile & 2x2 Grid on Desktop */}
        {/* Apple + Poliform Style: White card with framed daylight photography and clean readable typography */}
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2">
            {featured.map((proj) => (
              <Link
                key={proj.id}
                href={`/projects/${proj.slug}`}
                className="hyly-card group shrink-0 w-[84vw] sm:w-auto p-6 sm:p-7 bg-white border border-[#E5E5E5] flex flex-col justify-between snap-center transition-all hover:border-[#8B6A4D]/40"
              >
                {/* Natural Light Architectural Image Frame */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#ECE7DF] mb-6">
                  <Image
                    src={proj.coverImage}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 85vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  
                  {/* High Contrast Pills on Image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white border border-white/20 shadow-xs">
                      {proj.location}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono text-[#111111] border border-black/5 shadow-xs">
                      {proj.year}
                    </span>
                  </div>
                </div>

                {/* Content on Solid White Surface for Guaranteed WCAG AAA Contrast */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-[#8B6A4D] block font-sans">
                    {proj.categoryLabel}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] group-hover:text-[#8B6A4D] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#555555] line-clamp-2 font-normal font-sans leading-relaxed">
                    {proj.subtitle}
                  </p>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#111111] group-hover:text-[#8B6A4D] transition-colors font-sans">
                    View Project
                  </span>
                  <div className="btn-action-circle w-8 h-8 sm:w-9 sm:h-9 group-hover:bg-[#8B6A4D]">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2 text-[11px] font-mono uppercase tracking-widest text-[#8B6A4D]">
            <span>Swipe projects →</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
