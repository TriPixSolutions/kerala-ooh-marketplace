import React from "react";
import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { StudioLocations } from "@/components/contact/StudioLocations";
import { WhatsAppButton } from "@/components/contact/WhatsAppButton";
import { companyData } from "@/lib/data/company";
import { MapPin, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Atelier & Studios | HYLY",
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
    <div className="pt-36 sm:pt-44 md:pt-48 bg-[#F7F5F2]">
      {/* Header */}
      <section className="pb-16 sm:pb-24 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-4 block">
              Concierge & Inquiries
            </span>
            <h1 className="font-serif-editorial text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.08] text-[#171717] tracking-tight mb-8">
              Initiate an <br />
              <span className="italic font-light">Architectural Dialogue</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl mx-auto">
              Connect with our material consultants, request a curated swatch box, or arrange a private consultation at our experience centres.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Grid: Form + Info */}
      <section className="py-20 sm:py-28 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Sidebar Channels */}
            <div className="lg:col-span-5 space-y-8">
              <WhatsAppButton className="w-full" />

              {/* Concierge Desk Details */}
              <div className="p-8 bg-white rounded-[28px] border border-[#E5E5E5] space-y-6 shadow-[0_10px_25px_rgba(0,0,0,0.02)]">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D] block pb-4 border-b border-[#E5E5E5]">
                  Global Specification Desks
                </span>

                <div className="space-y-4 text-xs font-mono">
                  <div>
                    <span className="text-[#6B6B6B] block mb-1">Architectural Specification:</span>
                    <a
                      href={`mailto:${companyData.contact.architectsDesk}`}
                      className="text-sm font-sans text-[#171717] hover:text-[#8B6A4D] transition-colors"
                    >
                      {companyData.contact.architectsDesk}
                    </a>
                  </div>

                  <div>
                    <span className="text-[#6B6B6B] block mb-1">Private Client Concierge:</span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-sm font-sans text-[#171717] hover:text-[#8B6A4D] transition-colors"
                    >
                      {companyData.contact.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-[#6B6B6B] block mb-1">Central Switchboard:</span>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-sm font-sans text-[#171717] hover:text-[#8B6A4D] transition-colors"
                    >
                      {companyData.contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map Locator Card */}
              <div className="p-8 bg-white rounded-[28px] border border-[#E5E5E5] shadow-[0_10px_25px_rgba(0,0,0,0.02)]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#8B6A4D]">
                    Kochi Flagship Atelier
                  </span>
                  <MapPin className="w-4 h-4 text-[#8B6A4D]" />
                </div>

                <p className="text-xs text-[#6B6B6B] leading-relaxed mb-4">
                  HYLY Pavilion, 42/1800 Panampilly Nagar Avenue, Ernakulam, Kerala 682036
                </p>

                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#EAE7E1] mb-4">
                  <iframe
                    title="HYLY Flagship Studio Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.57597143924!2d76.29080766977539!3d9.965798999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08734293f9c3eb%3A0x6b24d7737fba1438!2sPanampilly%20Nagar%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <a
                  href={companyData.studios[0].mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium uppercase tracking-wider text-[#171717] hover:text-[#8B6A4D] hover:underline block text-center"
                >
                  Open in Google Maps Navigation →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Studios Section */}
      <section id="studios" className="py-24 sm:py-32 border-b border-[#E5E5E5]">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
              Our Locations
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171717] tracking-tight">
              Flagship Experience Ateliers
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <StudioLocations />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32">
        <Container size="wide">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
              Guidance
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171717] tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-[28px] border border-[#E5E5E5] space-y-3"
              >
                <h3 className="text-lg font-medium text-[#171717] flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-[#8B6A4D] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed pl-7">
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
