import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "@/components/contact/ContactForm";
import { StudioLocations } from "@/components/contact/StudioLocations";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { companyData } from "@/lib/data/company";
import { Mail, Phone, Clock, MapPin, Sparkles, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Atelier & Studios",
  description:
    "Schedule an architectural consultation or material specification review at HYLY's flagship experience ateliers in Kochi, Bangalore, and Dubai.",
  alternates: {
    canonical: "https://hyly.luxury/contact",
  },
};

export default function ContactPage() {
  const faqs = [
    {
      q: "How quickly can physical material swatch kits be dispatched?",
      a: "Our archive team dispatches standard material sample boxes within 24 hours of architectural verification. Bespoke veneer sequence flitches or custom reactive smoked samples require 3–5 working days.",
    },
    {
      q: "Do you supply raw materials or provide turnkey fabrication?",
      a: "HYLY operates across both dimensions. We supply architectural-grade veneers, calibrated marine cores, and hardware directly to specialist joinery contractors, and we also execute turnkey fabrication of bespoke kitchens, dressing suites, and acoustic wall panels.",
    },
    {
      q: "Can architects visit the flagship studios with their clients?",
      a: "Yes. Our studios in Kochi, Bangalore, and Dubai are specifically designed as tactile design labs where architects can review 1:1 scale door mockups, explore full veneer flitches, and test acoustic panel configurations alongside their clients.",
    },
    {
      q: "What certifications are provided for green building compliance?",
      a: "We provide complete FSC® Chain of Custody documentation, CARB Phase II / European Norm E0 zero-formaldehyde test reports, and BWP IS:710 boiling water resistance test certificates for LEED and WELL projects.",
    },
  ];

  return (
    <div className="pt-28 sm:pt-36 bg-[#090a0c]">
      {/* Header */}
      <section className="pb-16 sm:pb-24 border-b border-white/[0.08]">
        <Container>
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 border border-[#c5a880]/30 bg-[#111317]">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              <span className="editorial-tag">Concierge & Inquiries</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[-0.03em] text-[#f6f4f0] leading-[1.08] mb-8">
              Initiate an{" "}
              <span className="italic font-serif text-[#c5a880]">Architectural</span> Dialogue
            </h1>
            <p className="text-lg sm:text-xl font-light text-[#9ea3b0] leading-relaxed max-w-2xl">
              Connect with our material consultants, request a curated swatch box, or arrange a private consultation at our experience centres.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form + Quick Channels */}
      <section className="py-20 sm:py-28 border-b border-white/[0.08]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right: Company Info & Channels */}
            <div className="lg:col-span-5 space-y-8">
              {/* WhatsApp Direct */}
              <WhatsAppButton className="w-full" />

              {/* Concierge Desk Details */}
              <div className="p-8 bg-[#111317] border border-white/[0.08] space-y-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#c5a880] block pb-4 border-b border-white/[0.06]">
                  Global Specification Desks
                </span>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-[#9ea3b0] block mb-1">Architectural Specification:</span>
                    <a
                      href={`mailto:${companyData.contact.architectsDesk}`}
                      className="text-sm font-sans text-[#f6f4f0] hover:text-[#c5a880] transition-colors"
                    >
                      {companyData.contact.architectsDesk}
                    </a>
                  </div>

                  <div>
                    <span className="text-[#9ea3b0] block mb-1">Private Client Concierge:</span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-sm font-sans text-[#f6f4f0] hover:text-[#c5a880] transition-colors"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[#9ea3b0] block mb-1">Central Switchboard:</span>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-sm font-sans text-[#f6f4f0] hover:text-[#c5a880] transition-colors"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Styled Google Map Locator */}
              <div className="p-8 bg-[#111317] border border-white/[0.08]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#c5a880]">
                    Kochi Flagship Experience Atelier
                  </span>
                  <MapPin className="w-4 h-4 text-[#c5a880]" />
                </div>

                <p className="text-xs text-[#9ea3b0] leading-relaxed mb-4">
                  HYLY Pavilion, 42/1800 Panampilly Nagar Avenue, Ernakulam, Kerala 682036
                </p>

                <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/[0.08] bg-[#16191f] mb-4">
                  <iframe
                    title="HYLY Flagship Studio Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.57597143924!2d76.29080766977539!3d9.965798999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08734293f9c3eb%3A0x6b24d7737fba1438!2sPanampilly%20Nagar%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href={companyData.studios[0].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-wider text-[#c5a880] hover:underline block text-center"
                >
                  Open in Google Maps Navigation →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Studios Section */}
      <section id="studios" className="py-24 sm:py-32 border-b border-white/[0.08] bg-[#0c0d10]">
        <Container>
          <SectionHeading
            eyebrow="Our Locations"
            title={
              <>
                Flagship Ateliers &{" "}
                <span className="italic font-serif text-[#c5a880]">Design</span> Labs
              </>
            }
            subtitle="Visit our dedicated material archives to inspect full flitches and engineered joinery systems in person."
          />

          <StudioLocations />
        </Container>
      </section>

      {/* Consultation FAQ */}
      <section className="py-24 sm:py-32 bg-[#090a0c]">
        <Container>
          <div className="max-w-3xl mb-12">
            <span className="editorial-tag mb-2 block">Specification Guidance</span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#f6f4f0] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-8 bg-[#111317] border border-white/[0.08] space-y-3"
              >
                <h4 className="text-lg font-light text-[#f6f4f0] flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#c5a880] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs sm:text-sm font-light text-[#9ea3b0] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
