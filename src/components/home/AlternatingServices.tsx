"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { servicesData } from "@/lib/data/services";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function AlternatingServices() {
  // Take first 4 primary services for home alternating showcase
  const featured = servicesData.slice(0, 4);
  const [activeMobileIdx, setActiveMobileIdx] = useState(0);
  const activeService = featured[activeMobileIdx];

  return (
    <section className="py-20 sm:py-28 md:py-36 bg-[#F7F5F2] border-t border-[#E5E5E5]">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
            Integrated Disciplines
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight mb-5">
            Bespoke Services for <br />
            <span className="italic font-light">Architectural Excellence</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#6B6B6B] max-w-xl mx-auto">
            From raw forest selection to final on-site installation, every service is executed under one continuous standard of craftsmanship.
          </p>
        </div>

        {/* MOBILE INTERACTIVE DISCIPLINE SWITCHER (block lg:hidden) */}
        <div className="block lg:hidden max-w-xl mx-auto">
          {/* Discipline Selector Pills */}
          <div className="flex overflow-x-auto gap-2 pb-3 mb-6 scrollbar-none -mx-2 px-2">
            {featured.map((svc, i) => (
              <button
                key={svc.id}
                onClick={() => setActiveMobileIdx(i)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeMobileIdx === i
                    ? "bg-[#171717] text-white shadow-md"
                    : "bg-white border border-[#E5E5E5] text-[#6B6B6B] hover:text-[#171717]"
                }`}
              >
                0{i + 1} {svc.title.split(" ")[0]}
              </button>
            ))}
          </div>

          {/* Active Discipline Card */}
          <div className="bg-white rounded-[28px] border border-[#E5E5E5] p-5 sm:p-7 shadow-[0_15px_30px_rgba(0,0,0,0.03)] space-y-6">
            <div className="relative aspect-[16/10] w-full rounded-[20px] overflow-hidden bg-[#EAE7E1]">
              <Image
                src={activeService.heroImage}
                alt={activeService.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-500"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono uppercase tracking-widest text-white">
                Discipline 0{activeMobileIdx + 1}
              </div>
            </div>

            <div>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#171717] mb-2.5">
                {activeService.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed mb-5">
                {activeService.shortDescription}
              </p>

              <div className="space-y-2 mb-6">
                {activeService.benefits.slice(0, 2).map((benefit, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#8B6A4D] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-medium text-[#171717] block">
                        {benefit.title}
                      </span>
                      <span className="text-[11px] text-[#6B6B6B]">
                        {benefit.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Button
                  href={`/services#${activeService.slug}`}
                  variant="pill-dark"
                  size="sm"
                  className="w-full justify-center"
                >
                  Explore Details
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP ALTERNATING ROWS (hidden lg:block) */}
        <div className="hidden lg:block space-y-24 sm:space-y-32 max-w-6xl mx-auto">
          {featured.map((svc, idx) => {
            const isImageLeft = idx % 2 === 0;

            return (
              <div
                key={svc.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3.2] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_15px_35px_rgba(0,0,0,0.04)] group">
                    <Image
                      src={svc.heroImage}
                      alt={svc.title}
                      fill
                      sizes="50vw"
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? "lg:order-2" : "lg:order-1"
                  } flex flex-col justify-center`}
                >
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] mb-3 block">
                    0{idx + 1} / Discipline
                  </span>

                  <h3 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171717] mb-5 tracking-tight">
                    {svc.title}
                  </h3>

                  <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
                    {svc.shortDescription}
                  </p>

                  {/* 2 Key Benefits */}
                  <div className="space-y-3 mb-8">
                    {svc.benefits.slice(0, 2).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#8B6A4D] shrink-0 mt-1" />
                        <div>
                          <span className="text-sm font-medium text-[#171717] block">
                            {benefit.title}
                          </span>
                          <span className="text-xs text-[#6B6B6B]">
                            {benefit.description}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <Button
                      href={`/services#${svc.slug}`}
                      variant="pill-dark"
                      size="md"
                    >
                      Explore {svc.title}
                    </Button>
                    <Button
                      href="/contact"
                      variant="pill-outline"
                      size="md"
                    >
                      Inquire Specs
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
