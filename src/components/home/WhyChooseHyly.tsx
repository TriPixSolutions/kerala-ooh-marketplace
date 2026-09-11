import React from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { companyData } from "@/lib/data/company";
import { ShieldCheck, Cpu, Leaf, Compass } from "lucide-react";

export function WhyChooseHyly() {
  const icons = [ShieldCheck, Cpu, Leaf, Compass];

  return (
    <section className="py-24 sm:py-32 bg-[#090a0c] border-t border-white/[0.08]">
      <Container>
        <SectionHeading
          eyebrow="The HYLY Standard"
          title={
            <>
              Engineered for Architecture.{" "}
              <span className="italic font-serif text-[#c5a880]">Calibrated</span> for Time.
            </>
          }
          subtitle="We reject compromise. Every leaf of veneer, mechanical slide, and structural board reflects four non-negotiable architectural tenets."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.coreValues.map((value, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={value.number}
                className="relative p-8 bg-[#101216] border border-white/[0.08] hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-[#c5a880]">
                      {value.number}
                    </span>
                    <Icon className="w-5 h-5 text-[#9ea3b0] group-hover:text-[#c5a880] transition-colors" />
                  </div>

                  <h3 className="text-xl font-light text-[#f6f4f0] mb-2 group-hover:text-[#c5a880] transition-colors">
                    {value.title}
                  </h3>

                  <div className="text-xs font-mono text-[#c5a880]/80 mb-4 tracking-wide">
                    {value.tagline}
                  </div>

                  <p className="text-xs sm:text-sm font-light text-[#9ea3b0] leading-relaxed">
                    {value.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-neutral-500">
                  <span>Certified Standard</span>
                  <span className="text-[#c5a880]">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metric proof bar */}
        <div className="mt-16 p-8 sm:p-10 bg-[#12151b] border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {companyData.technicalCapabilities.map((cap) => (
            <div key={cap.title} className="border-l-2 border-[#c5a880] pl-6">
              <span className="block text-2xl sm:text-3xl font-light text-[#f6f4f0] mb-1 font-mono">
                {cap.metric}
              </span>
              <span className="block text-xs font-mono uppercase tracking-wider text-[#c5a880] mb-2">
                {cap.title}
              </span>
              <p className="text-xs text-[#9ea3b0] leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
