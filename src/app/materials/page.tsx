"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { materialCollections } from "@/lib/data/materials";
import { SampleRequestModal } from "@/components/shared/SampleRequestModal";
import { CorporateCTA } from "@/components/home/CorporateCTA";
import { ArrowRight, Check } from "lucide-react";

export default function MaterialsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedMaterialName, setSelectedMaterialName] = useState<string | undefined>(undefined);

  const filterTabs = [
    "All",
    "Veneers",
    "Decorative Surfaces",
    "Plywood",
    "Architectural Boards",
    "Hardware",
    "Applications",
  ];

  const filteredCollections =
    activeCategory === "All"
      ? materialCollections
      : materialCollections.filter((c) => c.category === activeCategory);

  const handleInquiry = (name: string) => {
    setSelectedMaterialName(name);
    setSampleModalOpen(true);
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#F7F5F2] min-h-screen">
      <Container size="wide">
        <div className="max-w-6xl mx-auto space-y-12 sm:space-y-16 pb-16">
          {/* Header */}
          <div className="space-y-3 pt-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Architectural Library
            </span>
            <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl font-normal tracking-tight text-[#111111]">
              Materials
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#555555] max-w-xl font-normal">
              A curated catalog of botanical hardwoods, tactile surfaces, calibrated cores, and concealed kinematics.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                  activeCategory === tab
                    ? "bg-[#111111] text-white shadow-sm"
                    : "bg-white border border-[#E5E5E5] text-[#555555] hover:text-[#111111] hover:border-[#111111]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Large Material Collections matching specifications */}
          <div className="space-y-16 sm:space-y-20">
            {filteredCollections.map((col) => (
              <div
                key={col.id}
                id={col.id}
                className="hyly-card group p-6 sm:p-10 md:p-12 bg-white border border-[#E5E5E5] space-y-8"
              >
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block mb-1">
                      {col.eyebrow}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-[#111111]">
                      {col.name}
                    </h2>
                  </div>
                  <button
                    onClick={() => handleInquiry(col.name)}
                    className="pill-btn-dark self-start sm:self-auto cursor-pointer"
                  >
                    <span>Request Swatch</span>
                  </button>
                </div>

                {/* Hero Image */}
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#ECE7DF] shadow-inner">
                  <Image
                    src={col.heroImage}
                    alt={col.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 85vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#111111] leading-relaxed max-w-3xl font-normal">
                  {col.description}
                </p>

                {/* Technical Specifications & Applications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4 border-t border-[#E5E5E5]">
                  {/* Specifications */}
                  <div className="md:col-span-6 space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#8B6A4D]">
                      Specifications
                    </h3>
                    <div className="divide-y divide-[#E5E5E5] text-xs sm:text-sm">
                      {col.specifications.map((spec) => (
                        <div key={spec.label} className="py-2 flex justify-between gap-4">
                          <span className="text-[#555555]">{spec.label}</span>
                          <span className="font-medium text-[#111111] text-right">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="md:col-span-6 space-y-3">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#8B6A4D]">
                      Ideal Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {col.applications.map((app) => (
                        <span
                          key={app}
                          className="px-3 py-1.5 rounded-full bg-[#F7F5F2] border border-[#E5E5E5] text-xs text-[#111111]"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Detail Gallery */}
                <div className="pt-4 border-t border-[#E5E5E5]">
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#666666] mb-3">
                    Surface Gallery
                  </h3>
                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    {col.gallery.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#EAE7E1]"
                      >
                        <Image
                          src={img}
                          alt={`${col.name} detail view ${idx + 1}`}
                          fill
                          sizes="30vw"
                          className="object-cover object-center transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Contact CTA */}
      <CorporateCTA />

      {/* Swatch Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        defaultMaterial={selectedMaterialName}
      />
    </div>
  );
}
