"use client";

import React from "react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { companyData } from "@/lib/data/company";
import { MessageCircle } from "lucide-react";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  title = "Let's Build Something Exceptional",
  subtitle = "Whether specifying bookmatched veneers for a private estate or curating bespoke architectural hardware, our atelier collaborates with you from blueprint to final reveal.",
  buttonText = "Get Consultation",
  buttonHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-[#F7F5F2] border-t border-[#E5E5E5] relative overflow-hidden">
      <Container size="wide">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-4 block">
            Direct Specification Desk
          </span>

          <h2 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.08] text-[#171717] tracking-[-0.03em] mb-8">
            {title}
          </h2>

          <p className="text-base sm:text-lg md:text-xl font-normal text-[#6B6B6B] leading-relaxed mb-12 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
            <Button href={buttonHref} variant="pill-dark" size="lg">
              {buttonText}
            </Button>
            <Button
              href={companyData.contact.whatsappLink}
              external
              variant="pill-outline"
              size="lg"
            >
              <MessageCircle className="w-4 h-4 text-[#8B6A4D] mr-2 inline" />
              WhatsApp Concierge
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
