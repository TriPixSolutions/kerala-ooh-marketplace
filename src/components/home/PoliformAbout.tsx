"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowRight } from "lucide-react";

export function PoliformAbout() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Editorial Headline & Minimal Text */}
          <div className="max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
              The HYLY Atelier
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
              Transforming spaces into a gallery of elegance.
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6B6B] leading-relaxed font-normal">
              HYLY merges botanical timber purity with millimeter-precision engineering. For over two decades, we have partnered with visionary architects, interior designers, and master craftsmen to realize residences of timeless distinction.
            </p>
          </div>

          {/* Large Editorial Imagery Card with Rounded Corners (matching Reference 1) */}
          <div className="group relative rounded-[28px] overflow-hidden bg-[#EAE7E1] aspect-[16/10] sm:aspect-[21/9] shadow-[0_20px_45px_rgba(0,0,0,0.05)] border border-[#E5E5E5]/70">
            <Image
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=2000&auto=format&fit=crop"
              alt="HYLY Minimalist Modern Style Living Space"
              fill
              sizes="100vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 z-10 text-white">
              <div>
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white/80 block mb-1">
                  Design Ethos
                </span>
                <p className="text-base sm:text-xl font-medium text-white max-w-md">
                  Crafting spaces that harmonize modern aesthetics with enduring tranquility.
                </p>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111111] text-xs font-semibold hover:bg-[#8B6A4D] hover:text-white transition-all shadow-md self-start sm:self-auto"
              >
                <span>About Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
