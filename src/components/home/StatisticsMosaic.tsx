"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";

export function StatisticsMosaic() {
  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#F7F5F2] border-t border-[#E5E5E5]">
      <Container size="wide">
        {/* Editorial Statement on top matching Screenshot 2 */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <p className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#171717] font-normal leading-[1.3] tracking-[-0.01em]">
            We believe your space should reflect your story. That's why we curate materials that feel deeply personal and beautifully intentional. Each detail is <span className="italic font-light">uniquely yours.</span>
          </p>
        </div>

        {/* 8-Card Asymmetric Bento Mosaic matching Screenshot 2 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {/* Top Row, Col 1: Photography Card (Armchair / Material) */}
          <div className="relative aspect-square sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_10px_25px_rgba(0,0,0,0.03)] group">
            <Image
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=85&w=1000&auto=format&fit=crop"
              alt="HYLY Architectural Detail"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Top Row, Col 2: White Stat Card */}
          <div className="aspect-square sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] bg-[#FFFFFF] border border-[#E5E5E5] p-6 sm:p-8 flex flex-col justify-center shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-transform duration-300 hover:-translate-y-1">
            <div className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171717] mb-2 tracking-tight">
              500<span className="text-[#8B6A4D] font-light">+</span>
            </div>
            <div className="text-xs sm:text-sm font-normal text-[#6B6B6B]">
              Materials Available
            </div>
          </div>

          {/* Top Row, Col 3: Photography Card (Dining / Living) */}
          <div className="relative aspect-square sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_10px_25px_rgba(0,0,0,0.03)] group">
            <Image
              src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=1000&auto=format&fit=crop"
              alt="HYLY Minimalist Dining & Wood Soffit"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Top Row, Col 4: White Stat Card */}
          <div className="aspect-square sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] bg-[#FFFFFF] border border-[#E5E5E5] p-6 sm:p-8 flex flex-col justify-center shadow-[0_10px_25px_rgba(0,0,0,0.02)] transition-transform duration-300 hover:-translate-y-1">
            <div className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#171717] mb-2 tracking-tight">
              100<span className="text-[#8B6A4D] font-light">+</span>
            </div>
            <div className="text-xs sm:text-sm font-normal text-[#6B6B6B]">
              Projects Delivered
            </div>
          </div>

          {/* Bottom Row, Col 1: Dark Obsidian Stat Card */}
          <div className="aspect-square sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] bg-[#171717] p-6 sm:p-8 flex flex-col justify-center text-white shadow-[0_15px_30px_rgba(23,23,23,0.15)] transition-transform duration-300 hover:-translate-y-1">
            <div className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-white mb-2 tracking-tight">
              20<span className="text-[#8B6A4D] font-light">+</span>
            </div>
            <div className="text-xs sm:text-sm font-normal text-[#A3A3A3]">
              Industry Partners
            </div>
          </div>

          {/* Bottom Row, Col 2: Photography Card (Kitchen Island Joinery) */}
          <div className="relative aspect-square sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_10px_25px_rgba(0,0,0,0.03)] group">
            <Image
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=85&w=1000&auto=format&fit=crop"
              alt="HYLY Bespoke Kitchen Island"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>

          {/* Bottom Row, Col 3: Dark Obsidian Stat Card */}
          <div className="aspect-square sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] bg-[#171717] p-6 sm:p-8 flex flex-col justify-center text-white shadow-[0_15px_30px_rgba(23,23,23,0.15)] transition-transform duration-300 hover:-translate-y-1">
            <div className="font-serif-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-white mb-2 tracking-tight">
              100<span className="text-[#8B6A4D] font-light">%</span>
            </div>
            <div className="text-xs sm:text-sm font-normal text-[#A3A3A3]">
              Quality Commitment
            </div>
          </div>

          {/* Bottom Row, Col 4: Photography Card (Master Suite Bedroom Detail) */}
          <div className="relative aspect-square sm:aspect-[4/5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-[#EAE7E1] shadow-[0_10px_25px_rgba(0,0,0,0.03)] group">
            <Image
              src="https://images.unsplash.com/photo-1558882224-dda166733046?q=85&w=1000&auto=format&fit=crop"
              alt="HYLY Master Suite Joinery & Lighting"
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
