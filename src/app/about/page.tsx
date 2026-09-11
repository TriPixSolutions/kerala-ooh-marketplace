"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { CorporateCTA } from "@/components/home/CorporateCTA";
import { ShieldCheck, Compass, Sparkles, Layers } from "lucide-react";

export default function AboutPage() {
  const timeline = [
    {
      year: "2010",
      title: "Foundation",
      description: "Established as an artisanal veneer sourcing and woodworking studio in South India.",
    },
    {
      year: "2016",
      title: "Precision Engineering",
      description: "Integrated high-precision CNC machining and calibrated architectural substrate standards.",
    },
    {
      year: "2021",
      title: "Surface Materials Division",
      description: "Expanded into architectural surfaces, acoustic panels, and European hardware solutions.",
    },
    {
      year: "2025",
      title: "Global Supply & GCC Presence",
      description: "Supplying premier residential, commercial, and hospitality projects across India and the GCC.",
    },
  ];

  const pillars = [
    {
      icon: Layers,
      title: "Material Science",
      description: "Rigorous grading of moisture equilibrium, grain consistency, and durable acoustic backing.",
    },
    {
      icon: Sparkles,
      title: "Artisanal Craft",
      description: "Sub-millimeter tolerances paired with hand-finished oils and bookmatched veneer leaves.",
    },
    {
      icon: ShieldCheck,
      title: "Uncompromising Integrity",
      description: "Boiling waterproof substrates and eco-certified timber from responsibly managed forests.",
    },
    {
      icon: Compass,
      title: "Architectural Service",
      description: "Collaborating intimately with architects, interior designers, and corporate specifiers.",
    },
  ];

  return (
    <div className="pt-24 sm:pt-28 bg-[#F7F5F2] min-h-screen">
      <Container size="wide">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24 pb-20 pt-4">
          
          {/* Header Section */}
          <div className="space-y-4 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Company Overview
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111]">
              About HYLY
            </h1>
            <p className="text-base sm:text-xl text-[#6B6B6B] leading-relaxed font-normal">
              Crafting premium material experiences through innovation, quality, and timeless design.
            </p>
          </div>

          {/* Hero Editorial Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl overflow-hidden bg-[#ECE7DF]">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=2000&auto=format&fit=crop"
              alt="HYLY Architectural Living"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>

          {/* Mission & Vision Split Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="p-8 sm:p-12 bg-white rounded-2xl border border-[#E5E5E5] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D]">
                Our Mission
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                Elevating spaces through genuine material purity.
              </h2>
              <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed font-normal">
                To bridge world-class raw materials with uncompromising architectural engineering, delivering surfaces, hardware, and timber solutions that stand the test of time.
              </p>
            </div>

            <div className="p-8 sm:p-12 bg-[#111111] text-white rounded-2xl space-y-4 shadow-sm">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D]">
                Our Vision
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                The global benchmark in interior materiality.
              </h2>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed font-normal">
                To be the primary partner for the world’s most demanding architects and designers, recognized for sustainable sourcing, technical precision, and quiet luxury.
              </p>
            </div>
          </div>

          {/* Core Pillars / Expertise */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block mb-2">
                Craftsmanship & Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                Material Expertise
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-8 bg-white rounded-2xl border border-[#E5E5E5] space-y-4 hover:border-[#8B6A4D]/40 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#F7F5F2] flex items-center justify-center text-[#8B6A4D]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-[#111111]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block mb-2">
                Evolution
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#111111]">
                Company Timeline
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="p-8 bg-[#ECE7DF]/50 rounded-2xl border border-[#E5E5E5] space-y-3"
                >
                  <span className="text-2xl font-bold font-mono text-[#8B6A4D] block">
                    {item.year}
                  </span>
                  <h3 className="text-base font-bold text-[#111111]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>

      {/* Dark Footer CTA */}
      <CorporateCTA />
    </div>
  );
}
