"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";

export function PoliformStats() {
  const stats = [
    { number: "500+", label: "Material Options", desc: "Curated botanicals & finishes" },
    { number: "100+", label: "Projects Delivered", desc: "Luxury private residences" },
    { number: "20+", label: "Industry Partners", desc: "Leading global brands" },
    { number: "100%", label: "Quality Commitment", desc: "Sub-millimeter CNC tolerances" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Title matching Reference 1 */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-2 block">
              Proven Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Modern Style With Timeless Charm
            </h2>
          </div>

          {/* 4 Stats Cards Grid matching Poliform Reference 1 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((st) => (
              <div
                key={st.label}
                className="poliform-card p-6 sm:p-8 bg-white border border-[#E5E5E5] flex flex-col justify-center text-center shadow-sm"
              >
                <div className="text-3xl sm:text-5xl font-bold tracking-tight text-[#111111] mb-2">
                  {st.number}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#111111] mb-1">
                  {st.label}
                </div>
                <div className="text-[11px] text-[#6B6B6B] font-light">
                  {st.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Ambient Living Space Visual */}
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-sm border border-[#E5E5E5]/70">
            <Image
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1800&auto=format&fit=crop"
              alt="HYLY Architectural Living Room Execution"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-[11px] font-mono tracking-widest uppercase">
              <span>Elegance • Timeless Architecture</span>
              <span className="hidden sm:inline">Craftsmanship at Scale</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
