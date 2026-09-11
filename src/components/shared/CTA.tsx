import React from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { companyData } from "@/lib/data/company";
import { ShieldCheck, Sparkles, MessageCircle } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  title = "Commission Exceptional Materiality For Your Next Architectural Masterpiece",
  subtitle = "Whether specifying bookmatched veneers for a private estate or engineering bespoke acoustic paneling for a commercial landmark, our master atelier collaborates with you from initial sketch to precision site integration.",
  buttonText = "Schedule Consultation",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden border-y border-[rgba(255,255,255,0.08)] bg-[#0c0d10]">
      {/* Ambient background glow & grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#c5a880]/10 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(197,168,128,0.06),transparent_70%)]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 border border-[#c5a880]/30 bg-[#c5a880]/10 text-[#e4d5be] text-[11px] font-mono tracking-[0.2em] uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
            Direct Specification Desk
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] text-[#f6f4f0] leading-[1.15] mb-6">
            {title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-light text-[#9ea3b0] leading-relaxed mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <Button href={buttonHref} variant="brass" size="lg" withArrow>
              {buttonText}
            </Button>
            <Button
              href={companyData.contact.whatsappLink}
              external
              variant="secondary"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 text-[#c5a880] mr-2 inline" />
              WhatsApp Concierge
            </Button>
          </div>

          <div className="pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
            <div>
              <span className="block text-2xl font-light text-[#f6f4f0]">25+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9ea3b0]">Years of Craft</span>
            </div>
            <div>
              <span className="block text-2xl font-light text-[#f6f4f0]">480+</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9ea3b0]">Flagship Spaces</span>
            </div>
            <div>
              <span className="block text-2xl font-light text-[#f6f4f0]">100%</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9ea3b0]">FSC® Chain Certified</span>
            </div>
            <div>
              <span className="block text-2xl font-light text-[#f6f4f0]">±0.05 mm</span>
              <span className="text-xs font-mono uppercase tracking-wider text-[#9ea3b0]">CNC Tolerance</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
