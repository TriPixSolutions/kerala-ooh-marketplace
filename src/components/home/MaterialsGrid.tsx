"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowUpRight } from "lucide-react";

export function MaterialsGrid() {
  const materials = [
    {
      title: "Natural Veneers",
      category: "Rare Botanical Grains",
      description:
        "Bookmatched American walnut, smoked European oak, and figured eucalyptus with consecutive sequence numbering.",
      image:
        "https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1200&auto=format&fit=crop",
      href: "/services#veneers",
      spec: "0.55 mm to 2.0 mm Architectural Grade",
    },
    {
      title: "Decorative Panels",
      category: "Acoustic & Tactile Surfaces",
      description:
        "Precision linear fluted timber battens on recycled PET felt backing, tested to NRC 0.85 sound dampening standards.",
      image:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=85&w=1200&auto=format&fit=crop",
      href: "/services#decorative-materials",
      spec: "Class B-s1, d0 Fire Retardant Available",
    },
    {
      title: "Premium Hardware",
      category: "The Silent Movement",
      description:
        "Concealed 3D adjustable pivot hinges, whisper-quiet synchronized drawer slides, and solid patinated brass pulls.",
      image:
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=85&w=1200&auto=format&fit=crop",
      href: "/services#hardware-solutions",
      spec: "200,000 European Mechanical Cycles",
    },
    {
      title: "Plywood & Boards",
      category: "Calibrated Structural Core",
      description:
        "Four-times calibrated BWP marine birch cores bonded with fortified phenolic resins under extreme hydraulic pressure.",
      image:
        "https://images.unsplash.com/photo-1504148455328-c376907d081c?q=85&w=1200&auto=format&fit=crop",
      href: "/services#plywood-boards",
      spec: "IS:710 Marine / CARB II Zero Emission",
    },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#F7F5F2] border-t border-[#E5E5E5]">
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 max-w-6xl mx-auto">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
              Curated Library
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl lg:text-6xl font-normal text-[#171717] tracking-tight">
              Materials Showcase
            </h2>
          </div>
          <p className="text-base text-[#6B6B6B] max-w-md">
            Explore our physical collection of architectural timbers, acoustic reliefs, and engineered hardware.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {materials.map((mat) => (
            <Link
              key={mat.title}
              href={mat.href}
              className="group relative rounded-[28px] overflow-hidden bg-[#EAE7E1] aspect-[16/11] flex flex-col justify-end p-8 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.04)]"
            >
              <Image
                src={mat.image}
                alt={mat.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/85" />

              <div className="relative z-10 text-white">
                <span className="text-xs font-mono uppercase tracking-widest text-[#D9C3A5] mb-2 block">
                  {mat.category}
                </span>

                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif-editorial text-3xl sm:text-4xl font-normal text-white">
                    {mat.title}
                  </h3>
                  <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-[#171717] transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-sm font-light text-white/80 leading-relaxed max-w-md mb-4 line-clamp-2">
                  {mat.description}
                </p>

                <div className="text-[11px] font-mono text-[#D9C3A5] pt-3 border-t border-white/15">
                  {mat.spec}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
