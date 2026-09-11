"use client";

import React from "react";
import { HeroShowcase } from "@/components/home/HeroShowcase";
import { ArchitecturalMetamorphosis } from "@/components/home/ArchitecturalMetamorphosis";
import { AboutAccordion } from "@/components/home/AboutAccordion";
import { StatisticsMosaic } from "@/components/home/StatisticsMosaic";
import { MaterialsGrid } from "@/components/home/MaterialsGrid";
import { AlternatingServices } from "@/components/home/AlternatingServices";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { CTABanner } from "@/components/shared/CTA";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";

export default function HomePage() {
  return (
    <div className="bg-[#F7F5F2]">
      {/* SECTION 1: Hero with Dedicated Mobile Single Visual & Desktop 3-Image Grid */}
      <HeroShowcase />

      {/* SECTION 2: GSAP Architectural Transformation Sequence */}
      <ArchitecturalMetamorphosis />

      {/* SECTION 3: About HYLY with Accordion (Image Left, Content Right) */}
      <AboutAccordion />

      {/* SECTION 4: Statistics Bento Mosaic (Condensed on Mobile) */}
      <StatisticsMosaic />

      {/* SECTION 5: Materials Showcase (Horizontal Snap on Mobile) */}
      <MaterialsGrid />

      {/* SECTION 6: Services (Discipline Switcher on Mobile, Alternating on Desktop) */}
      <AlternatingServices />

      {/* SECTION 6: Projects (Masonry Portfolio with Categories) */}
      <section className="py-24 sm:py-32 md:py-36 bg-[#F7F5F2] border-t border-[#E5E5E5]">
        <Container size="wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 max-w-6xl mx-auto">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
                Portfolio Archive
              </span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight">
                Selected Commissions
              </h2>
            </div>
            <Button href="/projects" variant="pill-outline" size="md">
              View All Works
            </Button>
          </div>

          <div className="max-w-6xl mx-auto">
            <ProjectGrid limit={4} showFilter={true} />
          </div>
        </Container>
      </section>

      {/* SECTION 7: Process Timeline */}
      <ProcessTimeline />

      {/* SECTION 8: Testimonials Slider */}
      <TestimonialSlider />

      {/* SECTION 9: Contact CTA */}
      <CTABanner />
    </div>
  );
}
