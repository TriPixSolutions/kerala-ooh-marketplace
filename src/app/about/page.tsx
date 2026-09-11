import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/shared/Button";
import { CTABanner } from "@/components/shared/CTA";
import { companyData } from "@/lib/data/company";
import { ShieldCheck, Sparkles, CheckCircle2, Award, TreePine, Cog } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Craft & Philosophy",
  description:
    "Discover the heritage, mission, and technical standards of HYLY. For 25 years, engineering rare architectural veneers, precision hardware, and bespoke craftsmanship.",
  alternates: {
    canonical: "https://hyly.luxury/about",
  },
};

export default function AboutPage() {
  return (
    <div className="pt-28 sm:pt-36 bg-[#090a0c]">
      {/* 1. Hero & Company Story */}
      <section className="pb-20 sm:pb-32 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-4xl mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-[#c5a880]/30 bg-[#111317]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="editorial-tag">Heritage & Legacy</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] text-[#f6f4f0] leading-[1.08] mb-8">
              A Quarter-Century of{" "}
              <span className="italic font-serif text-[#c5a880]">Artisanal</span> Mastery & Architectural Rigor
            </h1>
            <p className="text-lg sm:text-xl font-light text-[#9ea3b0] leading-relaxed">
              {companyData.shortBio}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 relative">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#16191f] border border-white/[0.08]">
                <Image
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=1800&auto=format&fit=crop"
                  alt="HYLY Master Craftsman Inspecting Wood Joinery"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-center brightness-90"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6 text-sm sm:text-base font-light text-[#9ea3b0] leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-light text-[#f6f4f0]">
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
      <section className="py-24 sm:py-32 bg-[#0c0d10] border-b border-white/[0.08]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div className="p-8 sm:p-12 bg-[#121418] border border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-4 block">
                Our Purpose
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-[#f6f4f0] mb-6">
                The Mission
              </h3>
              <p className="text-base sm:text-lg font-light text-[#9ea3b0] leading-relaxed">
                "{companyData.mission}"
              </p>
            </div>

            <div className="p-8 sm:p-12 bg-[#121418] border border-white/[0.08]">
              <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] mb-4 block">
                Our Horizon
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-[#f6f4f0] mb-6">
                The Vision
              </h3>
              <p className="text-base sm:text-lg font-light text-[#9ea3b0] leading-relaxed">
                "{companyData.vision}"
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 sm:py-32 bg-[#090a0c] border-b border-white/[0.08]">
        <Container>
          <SectionHeading
            eyebrow="Ethical Pillars"
            title={
              <>
                Four Tenets Guiding Every{" "}
                <span className="italic font-serif text-[#c5a880]">Commission</span>
              </>
            }
            subtitle="Our standards are rooted in transparent material sourcing, ecological stewardship, and mechanical precision."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {companyData.coreValues.map((val) => (
              <div
                key={val.number}
                className="p-8 sm:p-10 bg-[#111317] border border-white/[0.08] flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono text-[#c5a880] mb-4">
                    Pillar {val.number}
                  </div>
                  <h3 className="text-2xl font-light text-[#f6f4f0] mb-2">
                    {val.title}
                  </h3>
                  <div className="text-xs font-mono text-[#c5a880]/80 mb-4">
                    {val.tagline}
                  </div>
                  <p className="text-sm font-light text-[#9ea3b0] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. Technical Expertise & Engineering Tolerances */}
      <section id="standards" className="py-24 sm:py-32 bg-[#0c0d10] border-b border-white/[0.08]">
        <Container>
          <SectionHeading
            eyebrow="Technical Rigor"
            title={
              <>
                Sub-Millimeter Tolerances &{" "}
                <span className="italic font-serif text-[#c5a880]">Certified</span> Substrates
              </>
            }
            subtitle="The invisible details determine whether a space endures for a season or for a lifetime."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {companyData.technicalCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 sm:p-8 bg-[#121418] border border-white/[0.08]"
              >
                <div className="text-3xl font-light font-mono text-[#c5a880] mb-2">
                  {cap.metric}
                </div>
                <h4 className="text-sm font-mono uppercase tracking-wider text-[#f6f4f0] mb-3">
                  {cap.title}
                </h4>
                <p className="text-xs font-light text-[#9ea3b0] leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-[#111317] border border-white/[0.08]">
              <h4 className="text-xl font-light text-[#f6f4f0] mb-4 flex items-center gap-2">
                <TreePine className="w-5 h-5 text-[#c5a880]" />
                FSC® Sustainable Chain of Custody
              </h4>
              <p className="text-xs sm:text-sm font-light text-[#9ea3b0] leading-relaxed mb-4">
                We reject illegally logged timber and unverified intermediary sources. HYLY holds complete FSC® certification tracing every cubic meter of hardwood and veneer back to regenerative plantations and responsibly managed old-growth concessions.
              </p>
              <span className="text-[11px] font-mono text-[#c5a880] uppercase tracking-wider">
                Full LEED & WELL Building Compliant
              </span>
            </div>

            <div className="p-8 bg-[#111317] border border-white/[0.08]">
              <h4 className="text-xl font-light text-[#f6f4f0] mb-4 flex items-center gap-2">
                <Cog className="w-5 h-5 text-[#c5a880]" />
                Precision Joinery & Hardware Integration
              </h4>
              <p className="text-xs sm:text-sm font-light text-[#9ea3b0] leading-relaxed mb-4">
                Our millwork integrates European concealed hinges tested to 200,000 cycles, heavy-duty soft-closing runners rated up to 120 kg, and custom magnetic latches that eliminate mechanical friction for silent, timeless operation.
              </p>
              <span className="text-[11px] font-mono text-[#c5a880] uppercase tracking-wider">
                DIN 18273 & ANSI/BHMA Grade 1 Mechanisms
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Work Process with Architects */}
      <section className="py-24 sm:py-32 bg-[#090a0c]">
        <Container>
          <div className="max-w-3xl mb-16">
            <span className="editorial-tag mb-4 block">Architectural Synergy</span>
            <h2 className="text-3xl sm:text-5xl font-light text-[#f6f4f0] mb-6 leading-tight">
              Collaborating with the World’s Discerning Design Studios
            </h2>
            <p className="text-base font-light text-[#9ea3b0] leading-relaxed">
              We understand the pressures faced by architectural practitioners. Our dedicated specification desk exists to eliminate guesswork, accelerate sampling, and ensure your spatial visions are fabricated without compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            <div className="p-6 bg-[#111317] border border-white/[0.08]">
              <span className="text-xs font-mono text-[#c5a880] mb-2 block">Step 01</span>
              <h4 className="text-lg font-light text-[#f6f4f0] mb-2">CAD & Detail Review</h4>
              <p className="text-xs text-[#9ea3b0] leading-relaxed">
                Direct peer-to-peer technical consultation on joinery reveals, moisture allowances, and weight capacities.
              </p>
            </div>
            <div className="p-6 bg-[#111317] border border-white/[0.08]">
              <span className="text-xs font-mono text-[#c5a880] mb-2 block">Step 02</span>
              <h4 className="text-lg font-light text-[#f6f4f0] mb-2">1:1 Physical Samples</h4>
              <p className="text-xs text-[#9ea3b0] leading-relaxed">
                Physical bespoke wood and metal swatches dispatched directly to your practice for client presentation.
              </p>
            </div>
            <div className="p-6 bg-[#111317] border border-white/[0.08]">
              <span className="text-xs font-mono text-[#c5a880] mb-2 block">Step 03</span>
              <h4 className="text-lg font-light text-[#f6f4f0] mb-2">Site Supervised Delivery</h4>
              <p className="text-xs text-[#9ea3b0] leading-relaxed">
                Dedicated on-site technical supervisors present during installation to ensure flawless reveals.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button href="/contact" variant="brass" size="md" withArrow>
              Connect with Specifications Desk
            </Button>
            <Button href="/services" variant="outline" size="md">
              Review Material Disciplines
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA Banner */}
      <CTABanner
        title="Elevate Your Next Architectural Commission"
        subtitle="Schedule a private session at our Kochi, Bangalore, or Dubai ateliers to explore full-flitch veneers and working hardware suites."
      />
    </div>
  );
}
