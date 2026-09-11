"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";
import { collectionsData } from "@/lib/data/collections";

export function PoliformCollections() {
  // Primary 4 collections matching prompt specification
  const featured = collectionsData.slice(0, 4);

  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="max-w-5xl mx-auto mb-10 sm:mb-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-2 block">
                2026 Archive
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
                Featured Collections
              </h2>
            </div>
            <Link
              href="/collections"
              className="text-xs sm:text-sm font-medium text-[#111111] hover:text-[#8B6A4D] flex items-center gap-1.5 transition-colors group"
            >
              <span>View All Collections</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
          <p className="text-sm sm:text-base text-[#6B6B6B] max-w-xl mt-3 font-normal">
            Inspired by Poliform and Minotti architectural volumes. Each collection is engineered to integrate raw timber purity with sub-millimeter joinery.
          </p>
        </div>

        {/* 2-Column Grid on Desktop, Vertical Stack with Horizontal Cards on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {featured.map((col) => (
            <div
              key={col.id}
              className="poliform-card group flex flex-col justify-between p-6 sm:p-8 bg-white border border-[#E5E5E5]"
            >
              {/* Large Image with Rounded Corners */}
              <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-[#EAE7E1] mb-6 shadow-inner">
                <Image
                  src={col.heroImage}
                  alt={col.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white">
                  {col.year}
                </div>
              </div>

              {/* Text Information */}
              <div className="space-y-2 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8B6A4D] block">
                  {col.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                  {col.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed line-clamp-2">
                  {col.description}
                </p>
              </div>

              {/* View Collection Pill Action with Circular Arrow Button */}
              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <Link
                  href={`/collections#${col.id}`}
                  className="text-xs sm:text-sm font-semibold text-[#111111] group-hover:text-[#8B6A4D] transition-colors"
                >
                  View Collection
                </Link>
                <Link
                  href={`/collections#${col.id}`}
                  aria-label={`View ${col.title}`}
                  className="btn-circle-arrow w-8 h-8 group-hover:bg-[#8B6A4D]"
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
