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
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[640px] max-h-[1080px] bg-[#111111] overflow-hidden flex items-center justify-center">
      {/* Single Full-Screen Premium Image (No sliders, no video, no multiple images) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2400&auto=format&fit=crop"
          alt="HYLY Premium Materials For Exceptional Spaces"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Subtle, elegant dark vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/50" />
      </div>

      {/* Large Centered Editorial Content */}
      <Container size="wide" className="relative z-10 w-full">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center px-4 space-y-6 sm:space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono tracking-widest text-white uppercase">
            Architectural Materiality & Precision
          </span>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-white leading-[1.08] drop-shadow-sm">
            Premium Materials <br />
            For Exceptional Spaces
          </h1>

          <p className="text-base sm:text-xl font-normal text-[#ECE7DF] tracking-wide max-w-xl mx-auto drop-shadow-sm">
            Veneers, Decorative Surfaces, Plywood & Hardware
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/materials"
              className="pill-btn-light shadow-lg"
            >
              Explore Materials
            </Link>
            <Link
              href="/projects"
              className="pill-btn-outline !text-white !border-white/50 hover:!bg-white hover:!text-[#111111] shadow-lg"
            >
              View Projects
            </Link>
          </div>
        </div>
      </Container>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase pointer-events-none">
        <span>Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
