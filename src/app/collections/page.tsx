"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { collectionsData } from "@/lib/data/collections";
import { PoliformCTA } from "@/components/home/PoliformCTA";
import { ArrowUpRight, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CollectionsPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#F7F5F2] min-h-screen">
      <Container size="wide">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14 pb-16">
          {/* Header matching Reference 3 */}
          <div className="space-y-3 pt-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Integrated Systems
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111]">
              HYLY Collections
            </h1>
            <p className="text-sm sm:text-base text-[#6B6B6B] max-w-xl font-normal">
              Innovative and elegant architectural material assemblies curated for contemporary luxury residences.
            </p>
          </div>

          {/* Top 3-Image Preview Cluster Card matching Reference 3 */}
          <div className="poliform-card group p-5 sm:p-8 bg-white border border-[#E5E5E5] space-y-5">
            {/* 3-Image Cluster */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 rounded-[20px] overflow-hidden">
              <div className="relative aspect-[3/4] sm:aspect-[4/3] bg-[#EAE7E1]">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=600&auto=format&fit=crop"
                  alt="HYLY Collection Preview 1"
                  fill
                  sizes="33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[3/4] sm:aspect-[4/3] bg-[#EAE7E1]">
                <Image
                  src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=600&auto=format&fit=crop"
                  alt="HYLY Collection Preview 2"
                  fill
                  sizes="33vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[3/4] sm:aspect-[4/3] bg-[#EAE7E1]">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=600&auto=format&fit=crop"
                  alt="HYLY Collection Preview 3"
                  fill
                  sizes="33vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs sm:text-sm text-[#6B6B6B] font-light max-w-md">
                Explore HYLY's innovative and elegant designs for every room in your home.
              </p>
              <a
                href="#natural-veneers"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#8B6A4D] transition-colors self-start sm:self-auto"
              >
                <span>View More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Structured Collections List matching Reference 3 */}
          <div className="space-y-12 sm:space-y-16">
            {collectionsData.map((col, idx) => (
              <div
                key={col.id}
                id={col.id}
                className="poliform-card group p-6 sm:p-10 bg-white border border-[#E5E5E5] space-y-6"
              >
                {/* Header with Title and Year Pill */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block mb-1">
                      {col.category}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                      {col.title}
                    </h2>
                  </div>
                  <span className="text-xs sm:text-sm font-mono text-[#111111] bg-[#F7F5F2] px-3 py-1 rounded-full border border-[#E5E5E5]">
                    {col.year}
                  </span>
                </div>

                {/* Large Hero Imagery Card with Corner Arrow Button */}
                <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-[#EAE7E1] shadow-inner">
                  <Image
                    src={col.heroImage}
                    alt={col.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 80vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div className="absolute bottom-5 right-5 z-10">
                    <Link
                      href="/contact"
                      aria-label={`Inquire about ${col.title}`}
                      className="btn-circle-arrow shadow-lg"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>

                {/* Description & Technical Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
                  <div className="md:col-span-6 space-y-3">
                    <p className="text-sm sm:text-base text-[#111111] font-medium leading-relaxed">
                      {col.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-light">
                      {col.description}
                    </p>
                  </div>

                  <div className="md:col-span-6 space-y-4">
                    {/* Materials Used */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B6A4D] mb-2">
                        Materials Specified
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {col.materialsUsed.map((mat) => (
                          <span
                            key={mat}
                            className="px-3 py-1 rounded-full bg-[#F7F5F2] border border-[#E5E5E5] text-xs text-[#111111]"
                          >
                            {mat}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#8B6A4D] mb-2">
                        Applications
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {col.applications.map((app) => (
                          <span
                            key={app}
                            className="px-3 py-1 rounded-full bg-[#111111] text-white text-[11px] font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Micro Gallery Grid */}
                <div className="pt-4 border-t border-[#E5E5E5]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#6B6B6B] mb-3">
                    Detail Views
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {col.gallery.map((img, gIdx) => (
                      <div
                        key={gIdx}
                        className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#EAE7E1]"
                      >
                        <Image
                          src={img}
                          alt={`${col.title} detail view ${gIdx + 1}`}
                          fill
                          sizes="30vw"
                          className="object-cover object-center transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Poliform Large Black CTA Section */}
      <PoliformCTA />
    </div>
  );
}
