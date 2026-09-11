"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";

export function PoliformCategories() {
  const categories = [
    {
      title: "Veneers",
      subtitle: "Rare Botanical Grains",
      image: "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=800&auto=format&fit=crop",
      href: "/products?category=Veneers",
      specs: "0.55mm to 2.0mm Architectural Grade",
    },
    {
      title: "Decorative Panels",
      subtitle: "Acoustic & Tactile Reliefs",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=800&auto=format&fit=crop",
      href: "/products?category=Decorative+Panels",
      specs: "Fluted Timber & PET Backing",
    },
    {
      title: "Hardware",
      subtitle: "Concealed Precision Kinematics",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=800&auto=format&fit=crop",
      href: "/products?category=Hardware",
      specs: "Heavy-Duty Pivot & Soft-Close",
    },
    {
      title: "Plywood",
      subtitle: "Calibrated Marine Core",
      image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=800&auto=format&fit=crop",
      href: "/products?category=Plywood",
      specs: "IS:710 Marine 4X Calibrated",
    },
    {
      title: "Home Applications",
      subtitle: "Integrated Wardrobe & Living Systems",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=85&w=800&auto=format&fit=crop",
      href: "/products?category=Home+Systems",
      specs: "Floor-to-Ceiling Millwork",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#F7F5F2] border-t border-[#E5E5E5]/70">
      <Container size="wide">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-12 max-w-5xl mx-auto">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-2 block">
              Core Materials
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              Material Categories
            </h2>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-medium text-[#111111] hover:text-[#8B6A4D] flex items-center gap-1.5 transition-colors group"
          >
            <span>View All Materials</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Horizontal Swipe on Mobile (Snap-scroll track) & Responsive Grid on Desktop */}
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative shrink-0 w-[72vw] sm:w-auto rounded-[24px] overflow-hidden bg-white aspect-[3/4] flex flex-col justify-between p-5 snap-center shadow-sm border border-[#E5E5E5] transition-all hover:shadow-md hover:-translate-y-1"
              >
                {/* Background Image with Zoom on Hover */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 640px) 75vw, 20vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-wider uppercase text-white/80 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    Category
                  </span>
                </div>

                {/* Bottom Title & Circular Arrow Button matching Reference 1 */}
                <div className="relative z-10 flex items-end justify-between gap-3 text-white">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white leading-tight mb-1">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-white/80 line-clamp-1 font-light">
                      {cat.subtitle}
                    </p>
                  </div>

                  <div className="btn-circle-arrow w-8 h-8 group-hover:bg-[#8B6A4D]">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex sm:hidden items-center justify-center gap-1.5 mt-2 text-[11px] font-mono uppercase tracking-widest text-[#8B6A4D]">
            <span>Swipe categories →</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
