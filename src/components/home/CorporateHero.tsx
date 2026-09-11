"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import gsap from "gsap";
import { ChevronDown } from "lucide-react";

export function CorporateHero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 1.1, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-[#111111] overflow-hidden flex items-center justify-center">
      {/* Single Full-Screen Natural Daylight Luxury Interior */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2400&auto=format&fit=crop"
          alt="HYLY Premium Materials For Exceptional Spaces"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Calibrated 35%-40% Scrim Gradient for WCAG AAA Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/50" />
      </div>

      {/* Large Centered Editorial Content */}
      <Container size="wide" className="relative z-10 w-full">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center px-4 space-y-6 sm:space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-xs font-mono tracking-widest !text-white uppercase shadow-sm">
            Architectural Materiality & Precision
          </span>

          <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[90px] font-normal tracking-tight !text-white leading-[1.05] drop-shadow-md">
            Premium Materials <br />
            For Exceptional Spaces
          </h1>

          <p className="font-sans text-base sm:text-xl font-normal !text-white tracking-wide max-w-xl mx-auto drop-shadow-sm">
            Veneers, Decorative Surfaces, Plywood & Hardware
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/materials"
              className="pill-btn-light shadow-lg font-medium"
            >
              Explore Materials
            </Link>
            <Link
              href="/projects"
              className="pill-btn-outline !text-white !border-white/60 hover:!bg-white hover:!text-[#111111] shadow-lg font-medium"
            >
              View Projects
            </Link>
          </div>
        </div>
      </Container>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase pointer-events-none drop-shadow-sm">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
