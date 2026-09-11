import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { CTABanner } from "@/components/shared/CTA";
import { companyData } from "@/lib/data/company";
import { TreePine, Cog, ShieldCheck, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About HYLY | Craftsmanship Heritage & Philosophy",
  description:
    "Discover the heritage, mission, and technical standards of HYLY. For 25 years, engineering rare architectural veneers, precision hardware, and bespoke craftsmanship.",
  alternates: {
    canonical: "https://hyly.luxury/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-36 sm:pt-44 md:pt-48 bg-[#F7F5F2]">
      {/* 1. Hero & Company Story */}
      <section className="pb-20 sm:pb-32 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-24">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-4 block">
              Heritage & Philosophy
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.08] text-[#171717] tracking-tight mb-8">
              A Quarter-Century of <br />
              <span className="italic font-light">Artisanal Mastery</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto">
              {companyData.shortBio}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3.5] w-full rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_20px_45px_rgba(0,0,0,0.06)]">
                <Image
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=1600&auto=format&fit=crop"
                  alt="HYLY Master Craftsman Bench Joinery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 text-base text-[#6B6B6B] leading-relaxed">
              <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#171717]">
                The Origin of HYLY
              </h2>
              <p>{companyData.story.origin}</p>
              <p>{companyData.story.heritage}</p>
              <p>{companyData.story.philosophy}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2 & 3. Mission & Vision */}
      <section className="py-24 sm:py-32 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-8 sm:p-12 bg-white rounded-[28px] border border-[#E5E5E5] shadow-[0_10px_25px_rgba(0,0,0,0.02)]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] mb-4 block">
                Our Purpose
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#171717] mb-6">
                The Mission
              </h3>
              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                "{companyData.mission}"
              </p>
            </div>

            <div className="p-8 sm:p-12 bg-white rounded-[28px] border border-[#E5E5E5] shadow-[0_10px_25px_rgba(0,0,0,0.02)]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] mb-4 block">
                Our Horizon
              </span>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-[#171717] mb-6">
                The Vision
              </h3>
              <p className="text-base sm:text-lg text-[#6B6B6B] leading-relaxed">
                "{companyData.vision}"
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 sm:py-32 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
              Ethical Pillars
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171717] tracking-tight">
              Four Tenets Guiding Every Commission
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {companyData.coreValues.map((val) => (
              <div
                key={val.number}
                className="p-8 sm:p-10 bg-white rounded-[28px] border border-[#E5E5E5] shadow-[0_10px_25px_rgba(0,0,0,0.02)]"
              >
                <div className="font-serif-editorial text-2xl text-[#8B6A4D] mb-4">
                  Pillar {val.number}
                </div>
                <h3 className="font-serif-editorial text-3xl font-normal text-[#171717] mb-2">
                  {val.title}
                </h3>
                <div className="text-xs font-mono text-[#8B6A4D] mb-4">
                  {val.tagline}
                </div>
                <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Technical Standards */}
      <section className="py-24 sm:py-32 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
              Technical Rigor
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171717] tracking-tight">
              Engineering Tolerances & Substrates
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {companyData.technicalCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-8 bg-white rounded-[28px] border border-[#E5E5E5]"
              >
                <div className="font-serif-editorial text-4xl font-normal text-[#8B6A4D] mb-2">
                  {cap.metric}
                </div>
                <h3 className="text-sm font-medium text-[#171717] mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-[#6B6B6B] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="p-8 bg-white rounded-[28px] border border-[#E5E5E5]">
              <h3 className="text-xl font-medium text-[#171717] mb-3 flex items-center gap-2">
                <TreePine className="w-5 h-5 text-[#8B6A4D]" />
                FSC® Sustainable Chain of Custody
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                100% of our timber is harvested from certified sustainable forests, backed by full chain-of-custody documentation for green building and LEED compliance.
              </p>
            </div>

            <div className="p-8 bg-white rounded-[28px] border border-[#E5E5E5]">
              <h3 className="text-xl font-medium text-[#171717] mb-3 flex items-center gap-2">
                <Cog className="w-5 h-5 text-[#8B6A4D]" />
                European Hardware Integration
              </h3>
              <p className="text-sm text-[#6B6B6B] leading-relaxed">
                All cabinetry and architectural doors integrate European concealed 3D hinges, synchronized runners tested to 200,000 cycles, and magnetic strikes for silent movement.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Elevate Your Next Architectural Commission"
        subtitle="Schedule a private consultation at our flagship design labs in Kochi, Bangalore, or Dubai."
      />
    </div>
  );
}
