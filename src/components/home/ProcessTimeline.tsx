"use client";

import React from "react";
import { Container } from "@/components/shared/Container";

export function ProcessTimeline() {
  const steps = [
    {
      step: "01",
      title: "Consultation",
      duration: "Discovery",
      description:
        "Initial schematic alignment with architects, interior designers, or private clients to establish spatial parameters, timber species preferences, and functional performance criteria.",
    },
    {
      step: "02",
      title: "Material Selection",
      duration: "Curation",
      description:
        "Curating consecutive veneer flitches, acoustic battens, and hardware finishes directly from our physical archive. 1:1 tactile swatches dispatched for approval.",
    },
    {
      step: "03",
      title: "Design Planning",
      duration: "Engineering",
      description:
        "Detailed joinery shop drawings, grain mapping, 5-axis CNC programming, and stress testing for environmental equilibrium and seamless reveals.",
    },
    {
      step: "04",
      title: "Execution",
      duration: "Atelier Craft",
      description:
        "Precision multi-axis milling, vacuum-membrane thermoforming, and multi-stage artisanal hand-rubbed organic oil finishing by master craftspeople.",
    },
    {
      step: "05",
      title: "Completion",
      duration: "Integration",
      description:
        "White-glove on-site technical coordination, flawless assembly inspection, reveal calibration, and comprehensive lifetime warranty certification.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#F7F5F2] border-t border-[#E5E5E5]">
      <Container size="wide">
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
            The Journey
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight mb-6">
            Our Working Process
          </h2>
          <p className="text-base text-[#6B6B6B] max-w-lg mx-auto">
            A methodical five-stage methodology engineered to eliminate ambiguity and deliver flawless architectural materiality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {steps.map((item) => (
            <div
              key={item.step}
              className="relative p-8 rounded-[28px] bg-[#FFFFFF] border border-[#E5E5E5] flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.06)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E5E5]">
                  <span className="font-serif-editorial text-3xl font-light text-[#8B6A4D]">
                    {item.step}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6B6B6B] bg-[#F7F5F2] px-2.5 py-1 rounded-full border border-[#E5E5E5]">
                    {item.duration}
                  </span>
                </div>

                <h3 className="font-serif-editorial text-2xl font-normal text-[#171717] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm font-normal text-[#6B6B6B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
