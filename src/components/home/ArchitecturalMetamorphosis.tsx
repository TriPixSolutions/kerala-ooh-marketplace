"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Layers, Hammer, CheckCircle2, ChevronRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Stage {
  id: string;
  step: string;
  badge: string;
  title: string;
  subtitle: string;
  details: string[];
  image: string;
  imageAlt: string;
  icon: React.ElementType;
}

const stages: Stage[] = [
  {
    id: "sketch",
    step: "01",
    badge: "Architectural Concept",
    title: "Structural Line & Tolerances",
    subtitle:
      "Every transformation begins with architectural drafts, millwork blueprints, and volumetric proportions engineered down to the millimeter.",
    details: ["Laser site topography", "CAD millwork elevation", "Structural substrate layout"],
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Architectural floor plan sketch and drafting concept",
    icon: Sparkles,
  },
  {
    id: "materials",
    step: "02",
    badge: "Material Selection",
    title: "Curating Rare Flitches",
    subtitle:
      "Hand-inspecting crown-cut American Walnut, smoked eucalyptus, and calibrated acoustic flutes sourced from sustainable forests.",
    details: ["FSC-certified logs", "Consecutive flitch matching", "Acoustic core calibration"],
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Natural timber veneer flitches and material inspection",
    icon: Layers,
  },
  {
    id: "application",
    step: "03",
    badge: "Veneer Application",
    title: "Sub-Millimeter Joinery",
    subtitle:
      "Precision vacuum-membrane pressing, shadow reveal profiling, and continuous grain sequencing across 12-foot architectural panels.",
    details: ["Vacuum-press bonding", "Seamless bookmatched seams", "Concealed micro-hardware"],
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Precision woodworking craftsmanship and veneer paneling",
    icon: Hammer,
  },
  {
    id: "reveal",
    step: "04",
    badge: "Final Interior Reveal",
    title: "The Living Sanctuary",
    subtitle:
      "The culmination of craftsmanship: warmth, acoustic tranquility, and timeless tactile luxury delivered into an inhabited architectural residence.",
    details: ["Zero-gap flush portals", "Acoustically tuned environment", "Lifetime structural warranty"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Completed luxury interior living room with custom architectural veneer wall panelling",
    icon: CheckCircle2,
  },
];

export function ArchitecturalMetamorphosis() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=2200",
        pin: pinRef.current,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const stage = Math.min(
            stages.length - 1,
            Math.floor(progress * stages.length)
          );
          setActiveStageIndex(stage);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleStageSelect = (index: number) => {
    setActiveStageIndex(index);
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY + rect.top;
      const targetScroll = scrollTop + (index / (stages.length - 1)) * 2000;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  const activeStage = stages[activeStageIndex];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#171717] text-[#F7F5F2] overflow-hidden"
    >
      {/* Sticky Pinned Viewport Container */}
      <div
        ref={pinRef}
        className="w-full min-h-screen flex flex-col justify-between py-12 sm:py-16 md:py-20"
      >
        <Container size="wide" className="w-full flex-1 flex flex-col justify-between">
          {/* Top Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B6A4D]/20 border border-[#8B6A4D]/40 text-[10px] sm:text-xs font-mono tracking-widest text-[#D4AF37] uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                Evolution of Craft
              </div>
              <h2 className="font-serif-editorial text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#F7F5F2]">
                Architectural <span className="italic font-light text-[#D4AF37]">Metamorphosis</span>
              </h2>
            </div>

            {/* Stage Selector Pills (Mobile & Desktop interactive tabs) */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {stages.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => handleStageSelect(i)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                    activeStageIndex === i
                      ? "bg-[#8B6A4D] text-white shadow-lg shadow-[#8B6A4D]/20 scale-105"
                      : "bg-white/5 text-[#A3A3A3] hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="opacity-60">{st.step}</span>
                  <span className="hidden xs:inline">{st.badge.split(" ")[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Center Visual Transformation Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-6 sm:py-10">
            {/* Story & Metadata Column */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="transition-all duration-500 transform">
                <div className="flex items-center gap-3 text-xs font-mono text-[#8B6A4D] tracking-widest uppercase mb-3">
                  <span>STAGE {activeStage.step} OF 04</span>
                  <span className="w-8 h-[1px] bg-[#8B6A4D]/50" />
                  <span>{activeStage.badge}</span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-4xl lg:text-5xl font-normal text-white leading-tight mb-4">
                  {activeStage.title}
                </h3>

                <p className="text-sm sm:text-base font-light text-[#A3A3A3] leading-relaxed mb-6 max-w-lg">
                  {activeStage.subtitle}
                </p>

                {/* Micro Details List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-4 border-t border-white/10 mb-6">
                  {activeStage.details.map((detail, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-mono text-[#D6D3CD]/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B6A4D]" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile scroll helper */}
                <div className="flex items-center gap-2 text-[11px] font-mono text-[#8B6A4D]/90 uppercase tracking-widest">
                  <span>Scroll or tap stages to witness evolution</span>
                  <ChevronRight className="w-3.5 h-3.5 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Immersive Image Transition Frame */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-[24px] sm:rounded-[32px] overflow-hidden bg-[#262626] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                {stages.map((stage, idx) => {
                  const isActive = activeStageIndex === idx;
                  return (
                    <div
                      key={stage.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        isActive
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-105 pointer-events-none"
                      }`}
                    >
                      <Image
                        src={stage.image}
                        alt={stage.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className={`object-cover object-center ${
                          idx === 0
                            ? "filter grayscale contrast-125 invert-[0.1]"
                            : idx === 1
                            ? "filter saturate-110"
                            : ""
                        }`}
                      />
                      {/* Vignette Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Stage Pill Overlay */}
                      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider text-white">
                        <span className="w-2 h-2 rounded-full bg-[#8B6A4D]" />
                        <span>STAGE {stage.step} — {stage.badge}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-xs font-mono text-[#A3A3A3]">
              <span className="text-[#8B6A4D] font-bold">0{activeStageIndex + 1}</span>
              <div className="w-32 sm:w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#8B6A4D] transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeStageIndex + 1) / stages.length) * 100}%`,
                  }}
                />
              </div>
              <span>04</span>
            </div>

            <span className="text-[11px] font-mono tracking-widest text-[#A3A3A3] uppercase hidden sm:inline">
              Precision Crafted at HYLY Wood Lab
            </span>
          </div>
        </Container>
      </div>
    </section>
  );
}
