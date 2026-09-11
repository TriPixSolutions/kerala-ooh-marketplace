"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface StoryStage {
  id: string;
  step: string;
  badge: string;
  title: string;
  description: string;
  spec: string;
  image: string;
  imageAlt: string;
}

const storyStages: StoryStage[] = [
  {
    id: "natural-texture",
    step: "01",
    badge: "Provenance",
    title: "Natural Texture",
    description:
      "Hand-selected crown-cut American Walnut and smoked European Oak flitches, inspected for consecutive grain harmony and botanical character.",
    spec: "Consecutive Log Matching • FSC® Certified Hardwood",
    image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Natural wood veneer texture",
  },
  {
    id: "premium-finish",
    step: "02",
    badge: "Surface Science",
    title: "Premium Finish",
    description:
      "Eco-certified Italian matte hardwax oils applied under climate-calibrated conditions, preserving the organic tactile warmth while repelling moisture.",
    spec: "Zero-VOC • Scratch Resistant Micro-Pores",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Premium timber finish and tactile relief",
  },
  {
    id: "craftsmanship",
    step: "03",
    badge: "Precision",
    title: "Craftsmanship",
    description:
      "Sub-millimeter CNC tolerance calibration and vacuum-membrane pressing ensure seamless shadow reveal lines across 12-foot architectural panels.",
    spec: "±0.05 mm CNC Tolerance • Concealed Joints",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Woodworking craftsmanship and joinery detail",
  },
  {
    id: "completed-space",
    step: "04",
    badge: "Realization",
    title: "Completed Space",
    description:
      "The culmination of material science: an inhabited architectural living room enveloped in timeless warmth, acoustic quietude, and refined luxury.",
    spec: "Living Room Architectural Execution",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1600&auto=format&fit=crop",
    imageAlt: "Completed architectural living space",
  },
];

export function MaterialStorytelling() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1800",
        pin: pinRef.current,
        scrub: 0.6,
        anticipatePin: 1,
        onUpdate: (self) => {
          const idx = Math.min(
            storyStages.length - 1,
            Math.floor(self.progress * storyStages.length)
          );
          setActiveIdx(idx);
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSelectStage = (index: number) => {
    setActiveIdx(index);
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const target = window.scrollY + rect.top + (index / (storyStages.length - 1)) * 1600;
      window.scrollTo({ top: target, behavior: "smooth" });
    }
  };

  const current = storyStages[activeIdx];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#111111] text-white overflow-hidden"
    >
      <div
        ref={pinRef}
        className="w-full min-h-screen flex flex-col justify-between py-12 sm:py-16 md:py-20"
      >
        <Container size="wide" className="w-full flex-1 flex flex-col justify-between">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-white/10 max-w-5xl mx-auto w-full">
            <div>
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#8B6A4D] mb-2 block">
                The Journey of Matter
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                Material Storytelling
              </h2>
            </div>

            {/* Stage Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {storyStages.map((st, i) => (
                <button
                  key={st.id}
                  onClick={() => handleSelectStage(i)}
                  className={`px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                    activeIdx === i
                      ? "bg-[#8B6A4D] text-white shadow-md"
                      : "bg-white/10 text-white/60 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {st.step} {st.badge}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Visual & Content Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-6 sm:py-10 max-w-5xl mx-auto w-full">
            {/* Visual Frame */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#222222] border border-white/10 shadow-2xl">
                {storyStages.map((stage, idx) => (
                  <div
                    key={stage.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      activeIdx === idx
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-105 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={stage.image}
                      alt={stage.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    <div className="absolute top-4 left-4 sm:top-5 sm:left-5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[11px] font-mono tracking-wider text-white border border-white/10">
                      Phase {stage.step} // {stage.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-[#8B6A4D] uppercase tracking-widest block">
                Stage 0{activeIdx + 1} of 04
              </span>
              <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
                {current.title}
              </h3>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light">
                {current.description}
              </p>
              <div className="pt-3 border-t border-white/10">
                <span className="text-xs font-mono text-[#D4AF37]">
                  {current.spec}
                </span>
              </div>

              <div className="pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#111111] text-xs font-medium hover:bg-[#8B6A4D] hover:text-white transition-colors"
                >
                  <span>Explore Specimen Archive</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50 max-w-5xl mx-auto w-full">
            <span>Scroll or tap phases to uncover the living space</span>
            <span className="text-[#8B6A4D] font-bold">0{activeIdx + 1} / 04</span>
          </div>
        </Container>
      </div>
    </section>
  );
}
