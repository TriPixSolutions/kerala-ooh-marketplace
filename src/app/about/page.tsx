"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PoliformCTA } from "@/components/home/PoliformCTA";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28 bg-[#F7F5F2] min-h-screen">
      <Container size="wide">
        <div className="max-w-5xl mx-auto space-y-12 sm:space-y-16 pb-16">
          {/* Top 2-Image Collage matching Reference 4 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-4">
            <div className="relative aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=800&auto=format&fit=crop"
                alt="HYLY Atelier Architecture"
                fill
                priority
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=800&auto=format&fit=crop"
                alt="HYLY Joinery Atmosphere"
                fill
                priority
                sizes="50vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* About Us Heading & Mission Statement matching Reference 4 */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Identity & Heritage
            </span>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111111]">
              About Us
            </h1>
            <p className="text-base sm:text-xl text-[#6B6B6B] max-w-2xl leading-relaxed font-normal">
              Welcome to HYLY Interior, where luxury materials, botanical timber purity, and architectural functionality converge in every design.
            </p>
          </div>

          {/* "Crafting Timeless Spaces" & Founders / Craftsmen Portrait matching Reference 4 */}
          <div className="poliform-card p-6 sm:p-10 bg-white border border-[#E5E5E5] space-y-6">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#111111]">
              Crafting Timeless Spaces
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-2xl font-light">
              HYLY's talent is its know-how: a capacity that merges architectural culture and material science, which, prior to becoming a physical gesture on site, is an exacting design idea.
            </p>

            <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-[#EAE7E1]">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1400&auto=format&fit=crop"
                alt="HYLY Master Craftsmen and Architectural Leadership"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* "Our History" Dark Obsidian Card matching Reference 4 */}
          <div className="rounded-[28px] sm:rounded-[36px] bg-[#111111] text-white p-8 sm:p-12 space-y-5 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D]">
              Quarter-Century Heritage
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Our History
            </h2>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed font-light max-w-2xl">
              HYLY was founded to transform artisan timber veneer expertise into precision architectural interior solutions. Over decades of collaboration with top architectural practices across South India and the Middle East, our name has come to symbolize flexibility, simplicity, elegance, and future-forward craftsmanship.
            </p>
          </div>

          {/* "Our Knowledge" Card matching Reference 4 */}
          <div className="poliform-card p-6 sm:p-10 bg-white border border-[#E5E5E5] space-y-6">
            <div className="relative aspect-[16/9] w-full rounded-[24px] overflow-hidden bg-[#EAE7E1]">
              <Image
                src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=85&w=1400&auto=format&fit=crop"
                alt="HYLY Joinery Workshop & Material Science Facility"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
              Our Knowledge
            </h2>
            <p className="text-sm sm:text-base text-[#6B6B6B] leading-relaxed max-w-2xl font-light">
              HYLY's strength is its expertise, combining botanical wood culture and sub-millimeter manufacturing knowledge to resolve complex design ideas into seamless architectural realities.
            </p>
          </div>

          {/* "Art of The Day System" & "Art of The Night System" Cards matching Reference 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Day System Card */}
            <div className="group relative rounded-[28px] overflow-hidden bg-[#EAE7E1] aspect-[4/3] p-6 sm:p-8 flex flex-col justify-end shadow-sm border border-[#E5E5E5]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=800&auto=format&fit=crop"
                alt="Art of The Day System"
                fill
                sizes="50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="relative z-10 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] block mb-1">
                    Architectural Living
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Art Of The Day System
                  </h3>
                </div>
                <Link
                  href="/collections#day-systems"
                  aria-label="View Day System"
                  className="btn-circle-arrow shadow-md"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Night System Card */}
            <div className="group relative rounded-[28px] overflow-hidden bg-[#EAE7E1] aspect-[4/3] p-6 sm:p-8 flex flex-col justify-end shadow-sm border border-[#E5E5E5]">
              <Image
                src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=800&auto=format&fit=crop"
                alt="Art of The Night System"
                fill
                sizes="50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="relative z-10 flex items-end justify-between text-white">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] block mb-1">
                    Bespoke Dressing
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                    Art Of The Night System
                  </h3>
                </div>
                <Link
                  href="/collections#night-systems"
                  aria-label="View Night System"
                  className="btn-circle-arrow shadow-md"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Poliform Large Black CTA Section */}
      <PoliformCTA />
    </div>
  );
}
