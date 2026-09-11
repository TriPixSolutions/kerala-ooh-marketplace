"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { MessageCircle, ArrowRight } from "lucide-react";
import { companyData } from "@/lib/data/company";

export function CorporateCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="max-w-6xl mx-auto rounded-[32px] sm:rounded-[40px] bg-[#111111] text-white p-8 sm:p-14 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Subtle architectural grain vignette */}
          <div
            className="absolute inset-0 opacity-10 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/75" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8B6A4D] block">
              Architectural Collaboration
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Let's Build Something <br className="hidden sm:inline" />
              Exceptional.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#ECE7DF]/80 leading-relaxed font-light">
              Connect with our material consultants for CAD joinery reviews, custom veneer flitch matching, or bespoke interior specifications.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Link
                href="/contact"
                className="pill-btn-light inline-flex items-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn-outline !border-white/40 !text-white hover:!bg-white hover:!text-[#111111] inline-flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
