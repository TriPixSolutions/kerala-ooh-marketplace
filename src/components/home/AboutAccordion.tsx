"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

export function AboutAccordion() {
  const [openId, setOpenId] = useState<string>("veneers");

  const items: AccordionItem[] = [
    {
      id: "veneers",
      title: "Premium Veneers",
      content:
        "Hand-selected natural, smoked, and engineered architectural veneers. Sourced from responsibly managed European and American forests, sequence-matched for uninterrupted spatial continuity.",
    },
    {
      id: "decorative",
      title: "Decorative Materials",
      content:
        "Acoustic fluted slats, liquid metal coatings, and architectural surfaces tested to NRC 0.85 sound absorption, transforming echoey rooms into peaceful sanctuaries.",
    },
    {
      id: "hardware",
      title: "Hardware Solutions",
      content:
        "Concealed 3D adjustable pivot hinges, whisper-quiet soft-closing drawer runners tested to 200,000 cycles, and solid forged architectural brass hardware.",
    },
    {
      id: "craftsmanship",
      title: "Custom Craftsmanship",
      content:
        "Compound curved vacuum thermoforming, 5-axis CNC joinery, and master hand-rubbed plant oil finishes tailored to the most demanding architectural blueprints.",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#F7F5F2] border-t border-[#E5E5E5]">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Rounded Luxury Interior Image (matching Screenshot 1) */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/4.8] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_15px_35px_rgba(0,0,0,0.05)] group">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=85&w=1600&auto=format&fit=crop"
                alt="HYLY Curated Interior Space and Armchair"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right: Editorial Narrative + Minimal Accordion */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-[#171717] mb-6">
              Shape your space with <br />
              <span className="italic font-light">purpose and personality.</span>
            </h2>

            <p className="text-base font-normal text-[#6B6B6B] leading-relaxed mb-10 max-w-lg">
              At HYLY, we transform interior architecture through tactile honesty. With a keen eye for botanical grain and a passion for engineering precision, we craft spaces that reflect your personality while ensuring generational longevity.
            </p>

            {/* Accordion List matching Screenshot 1 */}
            <div className="border-t border-[#E5E5E5] divide-y divide-[#E5E5E5]">
              {items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="py-5 sm:py-6">
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                    >
                      <span className="text-lg sm:text-xl font-medium text-[#171717] group-hover:text-[#8B6A4D] transition-colors">
                        {item.title}
                      </span>
                      <span className="text-[#171717] ml-4 shrink-0 transition-transform duration-200">
                        {isOpen ? (
                          <Minus className="w-5 h-5 text-[#171717]" />
                        ) : (
                          <Plus className="w-5 h-5 text-[#6B6B6B] group-hover:text-[#171717]" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pt-3 pr-6 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-sm font-normal text-[#6B6B6B] leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
