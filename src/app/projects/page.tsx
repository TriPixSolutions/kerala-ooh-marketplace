"use client";

import React, { Suspense } from "react";
import { Container } from "@/components/shared/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CTABanner } from "@/components/shared/CTA";

export default function ProjectsPage() {
  return (
    <div className="pt-36 sm:pt-44 md:pt-48 bg-[#F7F5F2]">
      <section className="pb-16 sm:pb-24 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-4 block">
              Selected Works
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.08] text-[#171717] tracking-tight mb-8">
              Architectural Commissions & <br />
              <span className="italic font-light">Private Sanctuaries</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio of completed commissions across private waterfront villas, luxury penthouse suites, sculptural kitchens, and executive headquarters.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container size="wide">
          <div className="max-w-6xl mx-auto">
            <Suspense fallback={<div className="text-center py-20 text-[#6B6B6B]">Loading portfolio archive...</div>}>
              <ProjectGrid showFilter={true} />
            </Suspense>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Have an Architectural Commission in Design?"
        subtitle="Our joinery specialists review CAD drawings, moisture allowances, and bespoke finishes directly with your design studio."
      />
    </div>
  );
}
