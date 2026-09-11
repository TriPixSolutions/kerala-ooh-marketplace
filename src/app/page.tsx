"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/components/hero/HeroSection";
import { ServiceGrid } from "@/components/services/ServiceGrid";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { MaterialsShowcase } from "@/components/home/MaterialsShowcase";
import { WhyChooseHyly } from "@/components/home/WhyChooseHyly";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { CTABanner } from "@/components/shared/CTA";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { companyData } from "@/lib/data/company";
import { SampleRequestModal } from "@/components/shared/SampleRequestModal";
import { ArrowUpRight, Compass, Sparkles, MapPin, CheckCircle } from "lucide-react";

export default function HomePage() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [selectedMaterialSample, setSelectedMaterialSample] = useState<string | undefined>(undefined);

  const handleOpenSampleModal = (materialName?: string) => {
    setSelectedMaterialSample(materialName);
    setSampleModalOpen(true);
  };

  return (
    <div className="bg-[#090a0c]">
      {/* 1. Premium Hero Section */}
      <HeroSection onOpenSampleModal={() => handleOpenSampleModal()} />

      {/* 2. About HYLY Preview */}
      <section className="py-24 sm:py-32 md:py-40 bg-[#0c0d10] border-t border-white/[0.08] relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#16191f] border border-white/[0.08]">
                <Image
                  src="https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=80&w=1600&auto=format&fit=crop"
                  alt="HYLY Master Timber Joinery and Architectural Veneer Craft"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#111317]/90 backdrop-blur-md border border-white/[0.1]">
                  <div className="text-xs font-mono text-[#c5a880] uppercase tracking-wider mb-1">
                    Atelier Standard
                  </div>
                  <div className="text-sm font-light text-[#f6f4f0]">
                    "Materials are not merely surfaces; they dictate how light, sound, and human presence interact within architectural volume."
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="The Philosophy of Craft"
                title={
                  <>
                    Where Botanical Beauty Meets{" "}
                    <span className="italic font-serif text-[#c5a880]">Engineering</span> Rigor
                  </>
                }
                subtitle="For over 25 years, HYLY has operated at the intersection of raw material authenticity and precision architectural manufacturing. We bridge the timeless traditions of master carpentry with modern 5-axis CNC technologies."
                className="mb-8"
              />

              <div className="space-y-4 text-sm sm:text-base font-light text-[#9ea3b0] leading-relaxed mb-10">
                <p>
                  {companyData.story.heritage}
                </p>
                <p>
                  From rare bookmatched walnut flitches that travel from European managed reserves to precision calibrated BWP cores that withstand tropical moisture, every commission is executed with obsessive attention to reveals, acoustic dampening, and hand-rubbed finishes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/[0.08] mb-10">
                <div>
                  <span className="block text-2xl sm:text-3xl font-light text-[#f6f4f0] font-mono">
                    1,200+
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9ea3b0]">
                    Veneer & Surface Archive
                  </span>
                </div>
                <div>
                  <span className="block text-2xl sm:text-3xl font-light text-[#f6f4f0] font-mono">
                    E0 / CARB II
                  </span>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#9ea3b0]">
                    Zero Toxic Formaldehyde
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button href="/about" variant="primary" size="md" withArrow>
                  Read Our Full Story
                </Button>
                <Button href="/projects" variant="outline" size="md">
                  View Architectural Portfolio
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Services Overview */}
      <section className="py-24 sm:py-32 bg-[#090a0c] border-t border-white/[0.08]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="Core Disciplines"
              title={
                <>
                  Six Pillars of{" "}
                  <span className="italic font-serif text-[#c5a880]">Material</span> Excellence
                </>
              }
              subtitle="From raw botanical leaves to fully integrated residential dressing suites, discover our six specialized architectural disciplines."
              className="mb-0"
            />
            <Button href="/services" variant="outline" size="md" withArrow>
              All Disciplines
            </Button>
          </div>

          <ServiceGrid />
        </Container>
      </section>

      {/* 4. Featured Projects */}
      <section className="py-24 sm:py-32 bg-[#0d0f12] border-t border-white/[0.08]">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              eyebrow="Curated Portfolio"
              title={
                <>
                  Landmark Commissions &{" "}
                  <span className="italic font-serif text-[#c5a880]">Private</span> Estates
                </>
              }
              subtitle="A selection of luxury residences, corporate headquarters, and bespoke interior spaces brought to life with HYLY materials."
              className="mb-0"
            />
            <Button href="/projects" variant="primary" size="md" withArrow>
              Explore All Projects
            </Button>
          </div>

          <ProjectGrid limit={4} showFilter={false} />
        </Container>
      </section>

      {/* 5. Materials Showcase */}
      <MaterialsShowcase
        onOpenSampleModal={(materialName) => handleOpenSampleModal(materialName)}
      />

      {/* 6. Why Choose HYLY */}
      <WhyChooseHyly />

      {/* 7. Process Timeline */}
      <ProcessTimeline />

      {/* 8. CTA Banner */}
      <CTABanner />

      {/* 9. Contact Preview & Studio Locator */}
      <section className="py-24 sm:py-32 bg-[#090a0c] border-t border-white/[0.08]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Experience Centres"
                title={
                  <>
                    Visit an Architectural{" "}
                    <span className="italic font-serif text-[#c5a880]">Material</span> Atelier
                  </>
                }
                subtitle="Experience full-scale veneer bookmatches, acoustic installations, and soft-closing hardware displays in person at our flagship studios."
                className="mb-8"
              />

              <div className="space-y-6 mb-10">
                {companyData.studios.map((studio) => (
                  <div
                    key={studio.city}
                    className="p-6 bg-[#111317] border border-white/[0.06] hover:border-[#c5a880]/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="text-xs font-mono uppercase text-[#c5a880] mb-1">
                        {studio.type}
                      </div>
                      <div className="text-xl font-light text-[#f6f4f0]">
                        {studio.city}
                      </div>
                      <div className="text-xs text-[#9ea3b0] mt-1">
                        {studio.address}
                      </div>
                    </div>
                    <Button
                      href={studio.mapUrl}
                      external
                      variant="outline"
                      size="sm"
                      withArrow
                    >
                      Directions
                    </Button>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Button href="/contact" variant="brass" size="md" withArrow>
                  Schedule Studio Appointment
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16191f] border border-white/[0.08]">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
                  alt="HYLY Flagship Experience Centre"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090a0c] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 p-6 bg-[#121418]/90 backdrop-blur-md border border-white/[0.1] flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-[#c5a880]">
                      Architectural Library
                    </span>
                    <span className="text-sm font-light text-[#f6f4f0]">
                      Over 1,200 physical material leaves ready for specification review.
                    </span>
                  </div>
                  <Compass className="w-6 h-6 text-[#c5a880] shrink-0 ml-4" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Global Sample Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        defaultMaterial={selectedMaterialSample}
      />
    </div>
  );
}
