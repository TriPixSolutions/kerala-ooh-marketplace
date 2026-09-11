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
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          {/* Header & The One Short Paragraph */}
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.1]">
              Crafting premium material experiences through innovation, quality and timeless design.
            </h2>
            <div className="pt-2">
              <Link
                href="/about"
                className="pill-btn-dark inline-flex items-center gap-2 font-medium"
              >
                <span>About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* One Large Editorial Architectural Image with Calibrated Overlay */}
          <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#ECE7DF] shadow-md border border-[#E5E5E5]">
            <Image
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=2200&auto=format&fit=crop"
              alt="HYLY Architectural Craftsmanship and Material Integration"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* 30% Scrim Gradient for WCAG Contrast on Bottom Labels */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex items-center justify-between text-white text-xs font-mono uppercase tracking-widest drop-shadow-sm">
              <span>Engineering & Material Rigor</span>
              <span className="hidden sm:inline">Kochi • Bangalore • Dubai</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
