"use client";

import React from "react";
import { Container } from "@/components/shared/Container";

export function CorporateWhyHYLY() {
  const metrics = [
    { number: "500+", label: "Material Options", desc: "Curated botanicals, surfaces & hardware" },
    { number: "100+", label: "Projects Supported", desc: "Private estates & luxury developments" },
    { number: "20+", label: "Industry Partners", desc: "Leading global architectural suppliers" },
    { number: "15+", label: "Years Experience", desc: "Master joinery & material engineering" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#ECE7DF]/50 border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Proven Distinction
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111]">
              Why HYLY
            </h2>
            <p className="text-sm sm:text-base text-[#555555] font-normal">
              Precision engineering, certified chain-of-custody sourcing, and continuous craftsmanship across high-value architecture.
            </p>
          </div>

          {/* 4 Statistics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="hyly-card p-6 sm:p-8 bg-white border border-[#E5E5E5] flex flex-col justify-center text-center shadow-xs transition-all hover:border-[#8B6A4D]/40"
              >
                <div className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#111111] mb-2">
                  {m.number}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#111111] mb-1 font-sans">
                  {m.label}
                </div>
                <div className="text-[11px] sm:text-xs text-[#555555] font-normal leading-snug font-sans">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
