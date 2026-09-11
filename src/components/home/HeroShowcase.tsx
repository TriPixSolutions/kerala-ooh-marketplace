"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import gsap from "gsap";

export function HeroShowcase() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.1 }
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.7"
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          imagesRef.current?.children ? Array.from(imagesRef.current.children) : [],
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.15 },
          "-=0.5"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-36 sm:pt-44 md:pt-48 pb-20 sm:pb-28 bg-[#F7F5F2] overflow-hidden">
      <Container size="wide">
        {/* Editorial Text Center */}
        <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
          <h1
            ref={headlineRef}
            className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-normal leading-[1.08] text-[#171717] tracking-[-0.03em] mb-8"
          >
            Crafting spaces. <br className="hidden sm:inline" />
            Elevating <span className="italic font-light">interiors.</span> <br />
            Through <span className="italic font-light">premium materials.</span>
          </h1>

          <p
            ref={subRef}
            className="text-base sm:text-lg md:text-xl font-normal text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto mb-10"
          >
            HYLY delivers premium veneers, decorative materials, hardware solutions, and custom craftsmanship for visionary living spaces.
          </p>

          <div
            ref={buttonsRef}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button href="/services" variant="pill-dark" size="lg">
              Explore Services
            </Button>
            <Button href="/projects" variant="pill-outline" size="lg">
              View Projects
            </Button>
          </div>
        </div>

        {/* MOBILE HERO: Single Immersive Architectural Visual (block md:hidden) */}
        <div className="block md:hidden max-w-lg mx-auto">
          <div className="relative aspect-[4/5] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_20px_40px_rgba(0,0,0,0.08)] group border border-[#E5E5E5]/60">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1400&auto=format&fit=crop"
              alt="HYLY Architectural Living Space Execution"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Cinematic subtle vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            
            {/* Floating Top Pill Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-[#171717] shadow-sm border border-white/40">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8B6A4D] animate-ping" />
                Featured Residence
              </span>
            </div>

            {/* Bottom Storytelling Caption */}
            <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#D6D3CD]/90 block mb-1">
                Bespoke Joinery & Quarter-Cut Walnut
              </span>
              <p className="font-serif-editorial text-xl text-white font-normal italic leading-snug">
                “Where architectural discipline meets hand-selected timber.”
              </p>
            </div>
          </div>
        </div>

        {/* DESKTOP SHOWCASE: 3 Image Layout (hidden md:grid) */}
        <div
          ref={imagesRef}
          className="hidden md:grid md:grid-cols-12 gap-6 lg:gap-8 items-end max-w-6xl mx-auto"
        >
          {/* Left: Material Close-Up */}
          <div className="md:col-span-3">
            <div className="relative aspect-[3/4.2] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_15px_35px_rgba(0,0,0,0.04)] group">
              <Image
                src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1200&auto=format&fit=crop"
                alt="HYLY Natural Timber Veneer Specimen"
                fill
                priority
                sizes="25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Natural Veneers
              </div>
            </div>
          </div>

          {/* Center: Monumental Luxury Interior (Tallest) */}
          <div className="md:col-span-6">
            <div className="relative aspect-[4/4.8] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_20px_45px_rgba(0,0,0,0.06)] group">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1600&auto=format&fit=crop"
                alt="HYLY Architectural Living Space Execution"
                fill
                priority
                sizes="50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-5 left-5 right-5 text-white text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Custom Architectural Living
              </div>
            </div>
          </div>

          {/* Right: Hardware Detail */}
          <div className="md:col-span-3">
            <div className="relative aspect-[3/4.2] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_15px_35px_rgba(0,0,0,0.04)] group">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1200&auto=format&fit=crop"
                alt="HYLY Architectural Hardware Detail"
                fill
                priority
                sizes="25vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Precision Hardware
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
