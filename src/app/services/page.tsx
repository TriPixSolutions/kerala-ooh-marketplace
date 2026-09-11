"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { PoliformCTA } from "@/components/home/PoliformCTA";
import { servicesData } from "@/lib/data/services";
import { SampleRequestModal } from "@/components/shared/SampleRequestModal";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [activeSampleTitle, setActiveSampleTitle] = useState<string | undefined>(undefined);

  const handleOpenSample = (serviceTitle: string) => {
    setActiveSampleTitle(serviceTitle);
    setSampleModalOpen(true);
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#F7F5F2]">
      {/* Header */}
      <section className="pb-12 sm:pb-16 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Architectural Disciplines
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111]">
              Material Mastery & Engineered Execution
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#6B6B6B] leading-relaxed max-w-2xl font-normal">
              Explore HYLY’s six specialized disciplines spanning rare botanical veneers, acoustic panels, concealed hardware, calibrated cores, and bespoke living millwork.
            </p>

            {/* Quick Filter Links */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {servicesData.map((svc) => (
                <a
                  key={svc.id}
                  href={`#${svc.slug}`}
                  className="px-4 py-2 bg-white rounded-full border border-[#E5E5E5] text-xs text-[#6B6B6B] hover:text-[#171717] hover:border-[#171717] transition-all"
                >
                  {svc.title}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services Deep Dive Sections */}
      <div className="divide-y divide-[#E5E5E5]">
        {servicesData.map((svc, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <section
              key={svc.id}
              id={svc.slug}
              className="py-24 sm:py-32 scroll-mt-28"
            >
              <Container size="wide">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
                    {/* Image */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative aspect-[4/3.2] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_15px_35px_rgba(0,0,0,0.04)] group mb-4">
                        <Image
                          src={svc.heroImage}
                          alt={svc.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                      {/* 3 Thumbnails */}
                      <div className="grid grid-cols-3 gap-3">
                        {svc.gallery.map((img, gIdx) => (
                          <div
                            key={gIdx}
                            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#EAE7E1] border border-[#E5E5E5]"
                          >
                            <Image
                              src={img}
                              alt={`${svc.title} detail ${gIdx + 1}`}
                              fill
                              sizes="(max-width: 1024px) 33vw, 15vw"
                              className="object-cover object-center"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? "lg:order-2" : "lg:order-1"
                      } flex flex-col justify-center`}
                    >
                      <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] mb-3 block">
                        {svc.eyebrow}
                      </span>

                      <h2 className="font-serif-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#171717] tracking-tight mb-6">
                        {svc.title}
                      </h2>

                      <p className="text-base text-[#6B6B6B] leading-relaxed mb-8">
                        {svc.fullDescription}
                      </p>

                      {/* Technical Specs Card */}
                      <div className="bg-white rounded-[24px] border border-[#E5E5E5] p-6 mb-8 space-y-2.5 shadow-[0_5px_15px_rgba(0,0,0,0.02)]">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#8B6A4D] block mb-2">
                          Engineering Tolerances & Specifications
                        </span>
                        {svc.specifications.map((spec) => (
                          <div
                            key={spec.label}
                            className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs py-1.5 border-b border-[#F7F5F2] last:border-0"
                          >
                            <span className="text-[#6B6B6B] font-mono">
                              {spec.label}:
                            </span>
                            <span className="text-[#171717] font-medium mt-0.5 sm:mt-0">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="flex flex-wrap items-center gap-4">
                        <Button
                          variant="pill-dark"
                          size="md"
                          onClick={() => handleOpenSample(svc.title)}
                        >
                          Request {svc.title} Swatches
                        </Button>
                        <Button
                          href="/contact"
                          variant="pill-outline"
                          size="md"
                        >
                          Consult on {svc.title}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* 4 Benefits Grid */}
                  <div className="pt-8 border-t border-[#E5E5E5]">
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block mb-6">
                      Architectural Advantages
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {svc.benefits.map((benefit, bIdx) => (
                        <div
                          key={bIdx}
                          className="p-6 bg-white rounded-[24px] border border-[#E5E5E5]"
                        >
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle2 className="w-4 h-4 text-[#8B6A4D]" />
                            <h3 className="text-sm font-medium text-[#171717]">
                              {benefit.title}
                            </h3>
                          </div>
                          <p className="text-xs text-[#6B6B6B] leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* Poliform CTA Section */}
      <PoliformCTA />

      {/* Sample Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        defaultMaterial={activeSampleTitle}
      />
    </div>
  );
}
