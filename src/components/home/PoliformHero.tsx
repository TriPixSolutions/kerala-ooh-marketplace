"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export function PoliformHero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
      );
      gsap.fromTo(
        imageCardRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 1.1, delay: 0.15, ease: "power3.out" }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="pt-24 sm:pt-28 pb-12 sm:pb-16 bg-[#F7F5F2]">
      <Container size="wide">
        <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
          {/* Top Floating Text Card (Poliform Reference 1) */}
          <div
            ref={cardRef}
            className="poliform-card p-6 sm:p-10 md:p-14 bg-white/90 backdrop-blur-sm shadow-[0_15px_35px_rgba(0,0,0,0.03)]"
          >
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F7F5F2] border border-[#E5E5E5] text-[11px] font-medium tracking-wide text-[#111111] uppercase">
                Aesthetic
              </span>
              <span className="text-xs font-mono text-[#8B6A4D] uppercase tracking-wider hidden xs:inline">
                Materials & Craftsmanship
              </span>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-8">
              <span className="text-sm sm:text-base font-bold tracking-tight text-[#8B6A4D] block uppercase">
                HYLY
              </span>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111] leading-[1.12]">
                Crafting spaces through <br className="hidden sm:inline" />
                premium materials.
              </h1>
              <p className="text-sm sm:text-lg text-[#6B6B6B] max-w-xl font-normal leading-relaxed pt-1">
                Luxury veneers, decorative solutions, and precision hardware systems engineered for visionary architectural living.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/products"
                className="px-6 py-3 rounded-full bg-[#111111] text-white text-xs sm:text-sm font-medium hover:bg-[#262626] transition-all shadow-md"
              >
                Explore Materials
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 rounded-full border border-[#111111] text-[#111111] text-xs sm:text-sm font-medium hover:bg-[#111111] hover:text-white transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Single Premium Hero Image Card (One Powerful Image Only) */}
          <div
            ref={imageCardRef}
            className="group relative rounded-[28px] overflow-hidden bg-[#EAE7E1] aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] shadow-[0_20px_45px_rgba(0,0,0,0.06)] border border-[#E5E5E5]/60"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2000&auto=format&fit=crop"
              alt="HYLY Monumental Architectural Living Space Execution"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
            />
            {/* Subtle luxury gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Bottom Storytelling Caption & Circular Arrow Button */}
            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 flex items-end justify-between z-10 text-white">
              <div>
                <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/80 block mb-1">
                  Featured Execution
                </span>
                <p className="text-base sm:text-xl font-medium text-white max-w-md leading-snug">
                  Natural Quarter-Cut Walnut Paneling & Integrated Architectural Lighting
                </p>
              </div>

              <Link
                href="/projects/the-sanctuary-villa"
                aria-label="View Project"
                className="btn-circle-arrow shadow-lg"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
