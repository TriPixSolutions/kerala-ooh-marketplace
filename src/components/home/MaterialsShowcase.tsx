"use client";

import React, { useState } from "react";
import Image from "next/image";
import { materialsArchive } from "@/lib/data/materials";
import { TactileMaterial } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { Container } from "@/components/shared/Container";
import { Sparkles, CheckCircle2, Layers } from "lucide-react";

export function MaterialsShowcase({
  onOpenSampleModal,
}: {
  onOpenSampleModal?: (materialName: string) => void;
}) {
  const [selectedMaterial, setSelectedMaterial] = useState<TactileMaterial>(
    materialsArchive[0]
  );

  return (
    <section className="py-24 sm:py-32 bg-[#0b0d10] border-t border-white/[0.08] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#c5a880]/5 blur-[120px] rounded-full pointer-events-none" />

      <Container>
        <SectionHeading
          eyebrow="Tactile Archive"
          title={
            <>
              Curated Materials for{" "}
              <span className="italic font-serif text-[#c5a880]">Sensory</span> Depth
            </>
          }
          subtitle="Explore our physical library of natural wood grains, acoustic fluted panels, forged architectural brass, and calibrated substrates. Every surface is engineered for touch and longevity."
        />

        {/* Material Category Tabs / Selector */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
          {materialsArchive.map((mat) => {
            const isSelected = selectedMaterial.id === mat.id;
            return (
              <button
                key={mat.id}
                onClick={() => setSelectedMaterial(mat)}
                className={`px-4 sm:px-6 py-3 text-xs font-mono uppercase tracking-[0.14em] transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-[#c5a880] text-[#090a0c] font-semibold border-[#c5a880]"
                    : "bg-[#121418] text-[#9ea3b0] border-white/[0.08] hover:border-white/[0.2] hover:text-[#f6f4f0]"
                }`}
              >
                <span className="opacity-60 text-[10px] mr-2">
                  [{mat.category}]
                </span>
                {mat.name}
              </button>
            );
          })}
        </div>

        {/* Active Material Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-[#121418] border border-white/[0.08] p-6 sm:p-10 lg:p-12 items-center">
          {/* Left: High-Res Tactile Image with zoom & specimen code */}
          <div className="lg:col-span-6 relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full overflow-hidden bg-[#181b22] border border-white/[0.06]">
            <Image
              src={selectedMaterial.textureImage}
              alt={selectedMaterial.name}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center transition-transform duration-700 hover:scale-110 brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute top-4 left-4">
              <span className="text-xs font-mono tracking-widest text-[#e4d5be] bg-black/70 backdrop-blur-md px-3 py-1.5 border border-white/[0.1]">
                SPECIMEN: {selectedMaterial.code}
              </span>
            </div>

            <div className="absolute bottom-4 right-4">
              <span className="text-[10px] font-mono tracking-wider text-[#9ea3b0] bg-black/70 backdrop-blur-md px-3 py-1">
                Hover to inspect grain detail
              </span>
            </div>
          </div>

          {/* Right: Technical Specification Breakdown */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#c5a880] mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>{selectedMaterial.category} Material Discipline</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-light text-[#f6f4f0] mb-4">
                {selectedMaterial.name}
              </h3>

              <p className="text-sm sm:text-base font-light text-[#9ea3b0] leading-relaxed mb-8">
                {selectedMaterial.description}
              </p>

              <div className="space-y-4 border-y border-white/[0.08] py-6 mb-8 text-xs font-mono">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="text-[#9ea3b0] uppercase tracking-wider">Grain Character:</span>
                  <span className="sm:col-span-2 text-[#f6f4f0] font-sans text-xs">
                    {selectedMaterial.grain}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="text-[#9ea3b0] uppercase tracking-wider">Sheen & Finish:</span>
                  <span className="sm:col-span-2 text-[#f6f4f0] font-sans text-xs">
                    {selectedMaterial.sheen}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="text-[#9ea3b0] uppercase tracking-wider">Certification:</span>
                  <span className="sm:col-span-2 text-[#e4d5be] font-sans text-xs flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#c5a880]" />
                    {selectedMaterial.certification}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <span className="text-[#9ea3b0] uppercase tracking-wider">Architectural Pairing:</span>
                  <span className="sm:col-span-2 text-[#c5a880] font-sans text-xs">
                    {selectedMaterial.bestPairedWith}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="brass"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => onOpenSampleModal?.(selectedMaterial.name)}
              >
                <Sparkles className="w-3.5 h-3.5 mr-2" />
                Request Swatch [{selectedMaterial.code}]
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                View Applications
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
