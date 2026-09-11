"use client";

import React, { Suspense } from "react";
import { Container } from "@/components/shared/Container";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { PoliformCTA } from "@/components/home/PoliformCTA";

export default function ProjectsPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#F7F5F2] min-h-screen">
      <Container size="wide">
        <div className="max-w-5xl mx-auto space-y-8 pb-12 pt-4">
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Commissions Archive
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111]">
              Architectural Commissions
            </h1>
            <p className="text-sm sm:text-base text-[#6B6B6B] max-w-xl font-normal">
              Explore our portfolio of completed private residences, waterfront villas, sculptural kitchens, and walk-in dressing suites.
            </p>
          </div>

          <div className="pt-4">
            <Suspense fallback={<div className="text-center py-20 text-[#6B6B6B]">Loading commissions archive...</div>}>
              <ProjectGrid showFilter={true} />
            </Suspense>
          </div>
        </div>
      </Container>

      <PoliformCTA />
    </div>
  );
}
