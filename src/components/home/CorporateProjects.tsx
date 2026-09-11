"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/lib/data/projects";

export function CorporateProjects() {
  // 4 Top Flagship Projects
  const showcaseProjects = projectsData.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14 max-w-6xl mx-auto">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-2 block">
              Execution
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Project Showcase
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-xs sm:text-sm font-medium text-[#111111] hover:text-[#8B6A4D] flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Project Cards: Horizontal swipe on mobile, 2-column grid on desktop */}
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2">
            {showcaseProjects.map((proj) => (
              <Link
                key={proj.id}
                href={`/projects/${proj.slug}`}
                className="group relative shrink-0 w-[84vw] sm:w-auto rounded-[28px] overflow-hidden bg-[#EAE7E1] aspect-[4/3] sm:aspect-[16/11] flex flex-col justify-end p-6 sm:p-8 snap-center shadow-sm border border-[#E5E5E5] transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Image */}
                <Image
                  src={proj.coverImage}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 640px) 85vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Location Pill */}
                <div className="absolute top-5 left-5 z-10">
                  <span className="px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white border border-white/10">
                    {proj.location}
                  </span>
                </div>

                {/* Bottom Content & View Project Arrow */}
                <div className="relative z-10 flex items-end justify-between gap-4 text-white">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-[#8B6A4D] block mb-1">
                      {proj.categoryLabel}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-1">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-white/80 line-clamp-1 font-light">
                      {proj.subtitle}
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
            <span>Swipe projects →</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
