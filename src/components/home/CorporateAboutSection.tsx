"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";

export function CorporateAboutSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-12">
          {/* Header & The One Short Paragraph */}
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12]">
              Crafting premium material experiences through innovation, quality and timeless design.
            </h2>
            <div className="pt-2">
              <Link
                href="/about"
                className="pill-btn-dark inline-flex items-center gap-2"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* One Large Editorial Architectural Image */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#EAE7E1] shadow-md border border-[#E5E5E5]">
            <Image
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=2200&auto=format&fit=crop"
              alt="HYLY Architectural Craftsmanship and Material Integration"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex items-center justify-between text-white text-xs font-mono uppercase tracking-widest">
              <span>Engineering & Material Rigor</span>
              <span className="hidden sm:inline">Kochi • Bangalore • Dubai</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
