"use client";

import React, { Suspense } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { CTABanner } from "@/components/shared/CTA";
import { Sparkles } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#090a0c]">
      <section className="pb-16 sm:pb-24 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-4xl mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-[#c5a880]/30 bg-[#111317]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="editorial-tag">Selected Works Archive</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] text-[#f6f4f0] leading-[1.08] mb-8">
              Architectural Commissions &{" "}
              <span className="italic font-serif text-[#c5a880]">Private</span> Sanctuaries
            </h1>
            <p className="text-lg sm:text-xl font-light text-[#9ea3b0] leading-relaxed max-w-2xl">
              Explore our portfolio of completed projects spanning private residential estates, high-performance executive headquarters, sculptural kitchens, and bespoke dressing rooms.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Suspense fallback={<div className="text-center py-20 text-[#9ea3b0]">Loading portfolio archive...</div>}>
            <ProjectGrid showFilter={true} />
          </Suspense>
        </Container>
      </section>

      <CTABanner
        title="Have a Project in Schematic Design?"
        subtitle="Our architectural specification team assists with joinery detailing, sample mockups, and acoustic compliance from the earliest planning phase."
      />
    </div>
  );
}
