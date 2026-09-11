import React from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProcessTimeline() {
  const steps = [
    {
      step: "01",
      title: "Architectural Dialogue",
      duration: "Week 1",
      description:
        "We review CAD drawings, 3D renderings, and bill of quantities with your architectural team. We define moisture parameters, ceiling heights, structural weight loads, and aesthetic intent.",
      deliverable: "Material Specification Matrix & Initial Feasibility Assessment",
    },
    {
      step: "02",
      title: "Tactile Curation & Swatches",
      duration: "Weeks 2 – 3",
      description:
        "Our curators pull consecutive veneer flitches, metal profiles, and calibrated cores from our archive. We dispatch 1:1 physical sample boxes directly to your studio for client sign-off.",
      deliverable: "Physical Swatch Box & Sequence-Numbered Flitch Booking",
    },
    {
      step: "03",
      title: "Precision CNC Fabrication",
      duration: "Weeks 4 – 6",
      description:
        "Selected substrates and veneers are calibrated on multi-axis German CNC machines to ±0.05 mm tolerances. Edge details, flush pivot pockets, and flutes are machined with surgical accuracy.",
      deliverable: "Dimensional Tolerance Verification & Pre-Assembly Dry Run",
    },
    {
      step: "04",
      title: "Master Hand-Finishing",
      duration: "Weeks 6 – 7",
      description:
        "Every panel, handle, and cabinet surface is hand-sanded across progressive grit stages. Multiple coats of organic penetrating oils or reactive smoked treatments are hand-rubbed by master carpenters.",
      deliverable: "Micro-Porous Matte Oil or Custom Patina Finish",
    },
    {
      step: "05",
      title: "White-Glove Site Integration",
      duration: "Installation",
      description:
        "Pre-fitted components are delivered in climate-controlled packaging. Our technical supervisors assist your installation contractors on-site to ensure zero-sag reveals and silent operation.",
      deliverable: "25-Year Warranty Certificate & Care Guild Manual",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#0c0d11] border-t border-white/[0.08]">
      <Container>
        <SectionHeading
          eyebrow="The Architectural Journey"
          title={
            <>
              From Blueprint to{" "}
              <span className="italic font-serif text-[#c5a880]">Living</span> Reality
            </>
          }
          subtitle="Our five-stage collaborative methodology guarantees zero surprises, pristine grain continuity, and effortless installation on site."
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-6 bg-[#121418] border border-white/[0.08] hover:border-[#c5a880]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                  <span className="text-2xl font-light font-mono text-[#c5a880]">
                    {item.step}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#9ea3b0] bg-white/[0.04] px-2 py-0.5">
                    {item.duration}
                  </span>
                </div>

                <h3 className="text-lg font-light text-[#f6f4f0] mb-3">
                  {item.title}
                </h3>

                <p className="text-xs font-light text-[#9ea3b0] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <span className="block text-[9px] font-mono uppercase tracking-wider text-[#c5a880] mb-1">
                  Phase Milestone:
                </span>
                <span className="text-[11px] text-[#e4d5be] block leading-snug">
                  {item.deliverable}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
