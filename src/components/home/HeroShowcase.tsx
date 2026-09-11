"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HeroShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const veneerCoverRef = useRef<HTMLDivElement>(null);
  const interiorImageRef = useRef<HTMLDivElement>(null);
  const interiorVignetteRef = useRef<HTMLDivElement>(null);
  const contentOverlayRef = useRef<HTMLDivElement>(null);
  const scrollPromptRef = useRef<HTMLDivElement>(null);
  const specimenTagRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth < 768;
      // Tailored scroll distance: shorter on mobile (650px) for snappy control, 850px on desktop
      const scrollDistance = isMobile ? 650 : 850;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollDistance}`,
          pin: pinRef.current,
          scrub: isMobile ? 0.4 : 0.7,
          anticipatePin: 1,
        },
      });

      // 1. Swatch cover smoothly slides upward like lifting a luxury veneer catalog sample
      tl.to(
        veneerCoverRef.current,
        {
          yPercent: -105,
          ease: "power2.inOut",
        },
        0
      );

      // 2. Specimen tag & prompt fade out quickly as scroll begins
      tl.to(
        [specimenTagRef.current, scrollPromptRef.current],
        {
          opacity: 0,
          y: -20,
          ease: "power1.out",
        },
        0
      );

      // 3. Interior visual transitions from slightly muted/tinted to full crystalline brilliance
      tl.fromTo(
        interiorImageRef.current,
        { scale: 1.06 },
        {
          scale: 1,
          ease: "power2.out",
        },
        0
      );

      // 4. Subtle dark gradient overlay fades in gently to ensure text contrast once revealed
      tl.fromTo(
        interiorVignetteRef.current,
        { opacity: 0.35 },
        {
          opacity: 0.75,
          ease: "power1.inOut",
        },
        0.2
      );

      // 5. Editorial headline, subtext, and CTA buttons fade in progressively as the interior is uncovered
      tl.fromTo(
        contentOverlayRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
        },
        0.3
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handlePromptClick = () => {
    if (typeof window !== "undefined") {
      window.scrollBy({ top: 650, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#171717] w-full text-white"
    >
      {/* Sticky Pinned Viewport Container */}
      <div
        ref={pinRef}
        className="relative w-full h-screen min-h-[640px] max-h-[1080px] overflow-hidden flex flex-col justify-between"
      >
        {/* ========================================================= */}
        {/* BASE LAYER: The Finished Luxury Interior (Sitting Behind) */}
        {/* ========================================================= */}
        <div className="absolute inset-0 z-0 bg-[#171717]">
          <div ref={interiorImageRef} className="relative w-full h-full">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2000&auto=format&fit=crop"
              alt="HYLY Architectural Living Space with Custom American Walnut Paneling"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Dynamic Contrast Vignette */}
          <div
            ref={interiorVignetteRef}
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none"
          />

          {/* Initial Peek Label on the exposed bottom 44% */}
          <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#D6D3CD]/80 uppercase pointer-events-none">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8B6A4D] animate-ping" />
              Completed Living Residence
            </span>
            <span className="hidden sm:inline">Crafted by HYLY Wood Lab</span>
          </div>
        </div>

        {/* ========================================================= */}
        {/* OVERLYING LAYER: Premium Veneer Swatch Cover (Top 56%)   */}
        {/* ========================================================= */}
        <div
          ref={veneerCoverRef}
          className="absolute top-0 left-0 right-0 h-[56%] sm:h-[58%] z-20 bg-[#171717] shadow-[0_25px_60px_rgba(0,0,0,0.7)] border-b-2 border-[#8B6A4D]/60 overflow-hidden flex flex-col justify-between p-6 sm:p-10"
        >
          {/* Authentic High-Resolution Quarter-Cut Wood Veneer Texture */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-85"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1600&auto=format&fit=crop')`,
              filter: "contrast(130%) brightness(85%)",
            }}
          />
          {/* Subtle tactile grain bevel / sheen overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />

          {/* Top Swatch Presentation Header */}
          <div
            ref={specimenTagRef}
            className="relative z-10 flex items-center justify-between w-full max-w-6xl mx-auto pt-16 sm:pt-20"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#8B6A4D]/50 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              <Sparkles className="w-3 h-3 text-[#D4AF37]" />
              HYLY Material Specimen // Archive 01
            </div>

            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D6D3CD]/90 hidden xs:inline">
              Quarter-Cut American Walnut
            </span>
          </div>

          {/* Center Material Identity Label (Like a luxury sample binder) */}
          <div className="relative z-10 text-center my-auto max-w-2xl mx-auto px-4">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37]/90 block mb-2">
              Raw Botanical Provenance
            </span>
            <h2 className="font-serif-editorial text-2xl sm:text-4xl md:text-5xl italic font-normal text-white tracking-tight drop-shadow-md">
              Natural Timber Veneer
            </h2>
            <p className="text-xs sm:text-sm font-light text-[#E5E5E5]/80 max-w-md mx-auto mt-2 hidden sm:block">
              Consecutive flitch matching, zero-gap press tolerances, and sustainably forested hardwood.
            </p>
          </div>

          {/* Bottom Lip: Interactive Scroll Prompt Tag */}
          <div
            ref={scrollPromptRef}
            onClick={handlePromptClick}
            className="relative z-10 flex items-center justify-center w-full pb-1 cursor-pointer group"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] font-mono uppercase tracking-widest text-white group-hover:border-[#8B6A4D] group-hover:text-[#D4AF37] transition-all shadow-lg">
              <span>Scroll to open material sample</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-[#8B6A4D]" />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* FOREGROUND STORYTELLING: Editorial Headline & Actions     */}
        {/* ========================================================= */}
        <div
          ref={contentOverlayRef}
          className="relative z-30 my-auto w-full max-w-5xl mx-auto px-6 sm:px-8 text-center pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#D4AF37] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            From Raw Grain to Living Sanctuary
          </div>

          <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal leading-[1.08] text-[#F7F5F2] tracking-[-0.03em] mb-6 sm:mb-8 drop-shadow-xl">
            Crafting spaces. <br className="hidden sm:inline" />
            Elevating <span className="italic font-light text-[#D4AF37]">interiors.</span> <br />
            Through <span className="italic font-light">premium materials.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl font-normal text-[#D6D3CD] leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10 drop-shadow-md">
            HYLY delivers architectural veneers, tactile decorative surfaces, concealed precision hardware, and bespoke living craftsmanship.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              href="/services"
              variant="pill-dark"
              size="lg"
              className="!bg-[#8B6A4D] hover:!bg-[#70533a] !text-white shadow-xl"
            >
              Explore Services
            </Button>
            <Button
              href="/projects"
              variant="pill-outline"
              size="lg"
              className="!border-white/40 !text-white hover:!bg-white hover:!text-[#171717]"
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
