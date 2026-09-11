"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { MessageCircle, ArrowRight } from "lucide-react";
import { companyData } from "@/lib/data/company";

export function PoliformCTA() {
  return (
    <section className="py-16 sm:py-24 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="max-w-5xl mx-auto rounded-[32px] sm:rounded-[40px] bg-[#111111] text-white p-8 sm:p-14 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Subtle warm architectural texture overlay */}
          <div
            className="absolute inset-0 opacity-15 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1200&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60" />

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#8B6A4D] block">
              Architectural Co-Creation
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.1]">
              Engage with Us in <br className="hidden sm:inline" />
              Conversation.
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/70 leading-relaxed font-light">
              Let's create exceptional spaces. Schedule a private consultation at our flagship ateliers in Kochi, Bangalore, or Dubai, or request a curated timber specimen kit.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 rounded-full bg-white text-[#111111] text-sm font-semibold hover:bg-[#8B6A4D] hover:text-white transition-all shadow-lg flex items-center gap-2"
              >
                <span>Get Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={companyData.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white hover:text-[#111111] transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
