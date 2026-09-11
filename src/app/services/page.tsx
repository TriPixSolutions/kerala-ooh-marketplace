"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Badge } from "@/components/shared/Badge";
import { CTABanner } from "@/components/shared/CTA";
import { servicesData } from "@/lib/data/services";
import { SampleRequestModal } from "@/components/shared/SampleRequestModal";
import { Sparkles, CheckCircle2, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";

export default function ServicesPage() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [activeSampleTitle, setActiveSampleTitle] = useState<string | undefined>(undefined);

  const handleOpenSample = (serviceTitle: string) => {
    setActiveSampleTitle(serviceTitle);
    setSampleModalOpen(true);
  };

  return (
    <div className="pt-28 sm:pt-36 bg-[#090a0c]">
      {/* Header */}
      <section className="pb-16 sm:pb-24 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-[#c5a880]/30 bg-[#111317]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="editorial-tag">Architectural Disciplines</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] text-[#f6f4f0] leading-[1.08] mb-8">
              Six Specialized{" "}
              <span className="italic font-serif text-[#c5a880]">Disciplines</span> of Craft & Materiality
            </h1>
            <p className="text-lg sm:text-xl font-light text-[#9ea3b0] leading-relaxed max-w-2xl">
              From hand-selected botanical veneers to turnkey walk-in dressing suites and master hand-rubbed oil finishes, explore HYLY’s complete material architecture.
            </p>
          </div>

          {/* Quick Anchor Navigation */}
          <div className="flex flex-wrap gap-2.5 pt-10 mt-10 border-t border-white/[0.08]">
            {servicesData.map((svc) => (
              <a
                key={svc.id}
                href={`#${svc.slug}`}
                className="px-4 py-2 bg-[#121418] border border-white/[0.08] hover:border-[#c5a880] text-xs font-mono uppercase tracking-wider text-[#9ea3b0] hover:text-[#f6f4f0] transition-colors"
              >
                {svc.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Individual Service Deep-Dive Sections */}
      <div className="divide-y divide-white/[0.08]">
        {servicesData.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.slug}
              className="py-24 sm:py-32 scroll-mt-24 relative overflow-hidden"
            >
              <Container>
                {/* Discipline Header & Number */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-12">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-[#c5a880] tracking-widest">
                      {service.eyebrow}
                    </span>
                    <Badge variant="brass">{service.title}</Badge>
                  </div>
                  <button
                    onClick={() => handleOpenSample(service.title)}
                    className="text-xs font-mono uppercase tracking-wider text-[#e4d5be] hover:underline inline-flex items-center gap-1 cursor-pointer"
                  >
                    Request {service.title} Swatches <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a880]" />
                  </button>
                </div>

                {/* Hero Grid for Service */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
                  {/* Left or Right depending on index */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16191f] border border-white/[0.08] mb-6">
                      <Image
                        src={service.heroImage}
                        alt={`${service.title} - HYLY Architectural Discipline`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-[#e4d5be] bg-black/60 backdrop-blur-md p-3 border border-white/[0.1]">
                        SPECIFICATION STANDARD: ARCHITECTURAL GRADE A+
                      </div>
                    </div>

                    {/* Gallery Thumbnails */}
                    <div className="grid grid-cols-3 gap-3">
                      {service.gallery.map((imgUrl, gIdx) => (
                        <div
                          key={gIdx}
                          className="relative aspect-[4/3] w-full overflow-hidden bg-[#16191f] border border-white/[0.06]"
                        >
                          <Image
                            src={imgUrl}
                            alt={`${service.title} gallery detail ${gIdx + 1}`}
                            fill
                            sizes="(max-width: 1024px) 33vw, 15vw"
                            className="object-cover object-center brightness-85 hover:brightness-100 transition-all hover:scale-110 duration-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text & Specs */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-between`}>
                    <div>
                      <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#f6f4f0] mb-6">
                        {service.title}
                      </h2>

                      <p className="text-base sm:text-lg font-light text-[#a8adba] leading-relaxed mb-8">
                        {service.fullDescription}
                      </p>

                      {/* Technical Specs Table */}
                      <div className="bg-[#121418] border border-white/[0.08] p-6 mb-8 space-y-3">
                        <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] block mb-3">
                          Engineering Specifications
                        </span>
                        {service.specifications.map((spec) => (
                          <div
                            key={spec.label}
                            className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs py-1.5 border-b border-white/[0.04] last:border-0"
                          >
                            <span className="text-[#9ea3b0] font-mono">{spec.label}:</span>
                            <span className="text-[#f6f4f0] font-light mt-0.5 sm:mt-0">{spec.value}</span>
                          </div>
                        ))}
                      </div>

                      {/* Architectural Pairings */}
                      <div className="mb-8">
                        <span className="text-xs font-mono uppercase tracking-wider text-[#9ea3b0] block mb-2">
                          Harmonious Architectural Pairings:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.materialPairings.map((pairing) => (
                            <span
                              key={pairing}
                              className="text-xs bg-white/[0.04] border border-white/[0.08] text-[#e4d5be] px-3 py-1"
                            >
                              {pairing}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.08]">
                      <Button
                        variant="brass"
                        size="md"
                        onClick={() => handleOpenSample(service.title)}
                      >
                        <Sparkles className="w-3.5 h-3.5 mr-2" />
                        Request {service.title} Swatch Box
                      </Button>
                      <Button
                        href="/contact"
                        variant="outline"
                        size="md"
                      >
                        Consult on {service.title}
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Benefits Grid */}
                <div className="pt-8 border-t border-white/[0.08]">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] block mb-6">
                    Key Architectural Advantages & Benefits
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {service.benefits.map((benefit, bIdx) => (
                      <div
                        key={bIdx}
                        className="p-6 bg-[#111317] border border-white/[0.06] hover:border-[#c5a880]/30 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <CheckCircle2 className="w-4 h-4 text-[#c5a880]" />
                          <h4 className="text-sm font-light text-[#f6f4f0]">
                            {benefit.title}
                          </h4>
                        </div>
                        <p className="text-xs font-light text-[#9ea3b0] leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          );
        })}
      </div>

      {/* CTA Banner */}
      <CTABanner
        title="Custom Architectural Material Specs"
        subtitle="Need custom flitch matching, acoustic NRC lab reports, or curved vacuum-formed prototypes? Our engineering studio is at your service."
      />

      {/* Sample Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        defaultMaterial={activeSampleTitle}
      />
    </div>
  );
}
