"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";
import { featuredMaterials } from "@/lib/data/materials";

export function CorporateFeaturedMaterials() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="max-w-6xl mx-auto mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-2 block">
                Curation
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111]">
                Featured Materials
              </h2>
            </div>
            <Link
              href="/materials"
              className="text-xs sm:text-sm font-medium text-[#111111] hover:text-[#8B6A4D] flex items-center gap-1.5 transition-colors group font-sans"
            >
              <span>View Catalog</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <p className="text-sm sm:text-base text-[#555555] max-w-lg mt-3 font-normal">
            Hand-inspected natural hardwoods, acoustic reliefs, and calibrated substrates engineered for high-end residential and commercial architecture.
          </p>
        </div>

        {/* 2-Column Grid on Desktop, Clean Vertical Stack on Mobile */}
        {/* Apple + Poliform Style: White card with framed daylight photography and clean readable typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {featuredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="hyly-card group flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#E5E5E5] transition-all hover:border-[#8B6A4D]/40"
            >
              {/* Daylight Image Frame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#ECE7DF] mb-6">
                <Image
                  src={mat.image}
                  alt={mat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* High Contrast Pill on Image */}
                <div className="absolute top-4 left-4 px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white border border-white/20 shadow-xs">
                  {mat.shortLabel}
                </div>
              </div>

              {/* Title & Short Description on Crisp White Background */}
              <div className="space-y-2 mb-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#111111] group-hover:text-[#8B6A4D] transition-colors">
                  {mat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] leading-relaxed line-clamp-2 font-normal">
                  {mat.description}
                </p>
              </div>

              {/* View Details Action */}
              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <Link
                  href={mat.href}
                  className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#8B6A4D] transition-colors font-sans"
                >
                  Explore Collection
                </Link>
                <Link
                  href={mat.href}
                  aria-label={`View details for ${mat.title}`}
                  className="btn-action-circle w-8 h-8 sm:w-9 sm:h-9 group-hover:bg-[#8B6A4D]"
                >
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
