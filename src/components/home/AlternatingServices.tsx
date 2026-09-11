"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { servicesData } from "@/lib/data/services";
import { CheckCircle2 } from "lucide-react";

export function AlternatingServices() {
  // Take first 4 primary services for home alternating showcase
  const featured = servicesData.slice(0, 4);

  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#F7F5F2] border-t border-[#E5E5E5]">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
            Integrated Disciplines
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight mb-6">
            Bespoke Services for <br />
            <span className="italic font-light">Architectural Excellence</span>
          </h2>
          <p className="text-base sm:text-lg text-[#6B6B6B] max-w-xl mx-auto">
            From raw forest selection to final on-site installation, every service is executed under one continuous standard of craftsmanship.
          </p>
        </div>

        <div className="space-y-24 sm:space-y-32 max-w-6xl mx-auto">
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
                      sizes="(max-width: 1024px) 100vw, 50vw"
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
