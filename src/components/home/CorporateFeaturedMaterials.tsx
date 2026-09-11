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
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
                Featured Materials
              </h2>
            </div>
            <Link
              href="/materials"
              className="text-xs sm:text-sm font-medium text-[#111111] hover:text-[#8B6A4D] flex items-center gap-1.5 transition-colors group"
            >
              <span>View Catalog</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <p className="text-sm sm:text-base text-[#666666] max-w-lg mt-3 font-normal">
            Hand-inspected natural hardwoods, acoustic reliefs, and calibrated substrates engineered for high-end residential and commercial architecture.
          </p>
        </div>

        {/* 2-Column Grid on Desktop, Clean Vertical Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {featuredMaterials.map((mat) => (
            <div
              key={mat.id}
              className="hyly-card group flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#E5E5E5]"
            >
              {/* Large Image Showcase with Rounded Corners */}
              <div className="relative aspect-[16/10] w-full rounded-[22px] overflow-hidden bg-[#EAE7E1] mb-6">
                <Image
                  src={mat.image}
                  alt={mat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white border border-white/10">
                  {mat.shortLabel}
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="space-y-2 mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                  {mat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed line-clamp-2 font-light">
                  {mat.description}
                </p>
              </div>

              {/* View Details Action */}
              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <Link
                  href={mat.href}
                  className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#8B6A4D] transition-colors"
                >
                  View Details
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
