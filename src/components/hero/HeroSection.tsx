"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Sparkles, ChevronDown, Compass } from "lucide-react";
import { companyData } from "@/lib/data/company";

export function HeroSection({
  onOpenSampleModal,
}: {
  onOpenSampleModal?: () => void;
}) {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-40 pb-12 sm:pb-16 overflow-hidden bg-[#090a0c]"
    >
      {/* Background Imagery with layered architectural gradients */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2600&auto=format&fit=crop"
          alt="HYLY Luxury Architectural Craftsmanship & Interior Materials"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.38] contrast-[1.08] scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Subtle vignette and gradient masks */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-[#090a0c]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090a0c] via-transparent to-[#090a0c]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,10,12,0.6)_100%)]" />
      </div>

      {/* Main Content */}
      <Container className="relative z-10 my-auto">
        <div className="max-w-4xl">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 mb-6 border border-[#c5a880]/30 bg-[#111317]/80 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#e4d5be]">
              Architectural Materials & Atelier Joinery
            </span>
          </div>

          {/* Luxury Editorial Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] text-[#f6f4f0] leading-[1.04] mb-8">
            The Poetry of Wood.{" "}
            <span className="italic font-serif text-[#c5a880] block sm:inline">
              The Precision
            </span>{" "}
            of Architecture.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl md:text-2xl font-light text-[#a8adba] leading-relaxed max-w-2xl mb-12">
            HYLY curates rare architectural veneers, acoustic surfaces, concealed precision hardware, and bespoke living systems for the world’s most discerning environments.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <Button href="/services" variant="brass" size="lg" withArrow>
              Explore Disciplines
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={onOpenSampleModal}
            >
              <Compass className="w-4 h-4 text-[#c5a880] mr-2 inline" />
              Request Sample Swatches
            </Button>
          </div>
        </div>
      </Container>

      {/* Bottom Proof Metrics Bar */}
      <Container className="relative z-10 mt-12 pt-8 border-t border-white/[0.1]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <div className="text-2xl sm:text-3xl font-light text-[#f6f4f0]">
              {companyData.yearsOfExcellence} <span className="text-sm font-mono text-[#c5a880]">Years</span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#9ea3b0] mt-1">
              Architectural Mastery
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-light text-[#f6f4f0]">
              {companyData.completedProjectsCount}+ <span className="text-sm font-mono text-[#c5a880]">Commissions</span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#9ea3b0] mt-1">
              Residences & Flagships
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-light text-[#f6f4f0]">
              {companyData.fscCertifiedRatio} <span className="text-sm font-mono text-[#c5a880]">FSC®</span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#9ea3b0] mt-1">
              Ethical Forest Stewardship
            </div>
          </div>

          <div>
            <div className="text-2xl sm:text-3xl font-light text-[#f6f4f0]">
              ±0.05 <span className="text-sm font-mono text-[#c5a880]">mm</span>
            </div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#9ea3b0] mt-1">
              5-Axis CNC Precision
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
