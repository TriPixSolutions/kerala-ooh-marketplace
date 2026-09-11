"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { productsCatalog, featuredBanners, ProductItem } from "@/lib/data/products";
import { SampleRequestModal } from "@/components/shared/SampleRequestModal";
import { PoliformCTA } from "@/components/home/PoliformCTA";
import { ArrowUpRight, ArrowRight, Check } from "lucide-react";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [activeProductName, setActiveProductName] = useState<string | undefined>(undefined);

  const categories = ["All", "Veneers", "Decorative Panels", "Hardware", "Plywood", "Home Systems"];

  const filteredProducts =
    selectedCategory === "All"
      ? productsCatalog
      : productsCatalog.filter((p) => p.category === selectedCategory);

  const handleRequestSample = (productName: string) => {
    setActiveProductName(productName);
    setSampleModalOpen(true);
  };

  return (
    <div className="pt-24 sm:pt-28 bg-[#F7F5F2] min-h-screen">
      <Container size="wide">
        <div className="max-w-5xl mx-auto space-y-10 sm:space-y-14 pb-16">
          {/* Header Title matching Reference 2 */}
          <div className="space-y-3 pt-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] block">
              Architectural Archive
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#111111]">
              Exploring Harmony Detail Various
            </h1>
            <p className="text-sm sm:text-base text-[#6B6B6B] max-w-xl font-normal">
              A curated physical catalog of botanical veneers, acoustic panels, and concealed kinetic hardware.
            </p>
          </div>

          {/* Top Featured Hero Banner Card matching Reference 2 */}
          <div className="poliform-card group p-5 sm:p-8 bg-white border border-[#E5E5E5] space-y-4">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-[20px] overflow-hidden bg-[#EAE7E1]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=85&w=1600&auto=format&fit=crop"
                alt="HYLY Living Atmosphere"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs sm:text-sm text-[#6B6B6B] font-light max-w-md">
                Amidst the quietness of authentic botanical timber and spontaneous architectural nature.
              </p>
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] text-white text-xs font-semibold hover:bg-[#8B6A4D] transition-colors self-start sm:self-auto"
              >
                <span>View More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* "Our Product" Filter Section matching Reference 2 */}
          <div className="space-y-6">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111]">
                Our Product
              </h2>
            </div>

            {/* Filter Category Pills */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#111111] text-white shadow-sm"
                      : "bg-white border border-[#E5E5E5] text-[#6B6B6B] hover:text-[#111111] hover:border-[#111111]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid (3-column on desktop, 2-column or 3-card on mobile matching Reference 2) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-2">
              {filteredProducts.map((item) => (
                <div
                  key={item.id}
                  className="poliform-card group p-4 sm:p-5 bg-white border border-[#E5E5E5] flex flex-col justify-between"
                >
                  {/* Isolated Material Visual on light neutral pad */}
                  <div className="relative aspect-square w-full rounded-[16px] overflow-hidden bg-[#F7F5F2] mb-3 flex items-center justify-center p-3">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Metadata matching Reference 2 */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-[#111111] truncate">
                        {item.name}
                      </h3>
                      {/* Color Dots */}
                      <div className="flex items-center gap-1 shrink-0">
                        {item.colors.map((c, idx) => (
                          <span
                            key={idx}
                            className="w-2 h-2 rounded-full border border-black/10"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-[11px] font-mono text-[#8B6A4D] truncate">
                      {item.grade}
                    </p>

                    <p className="text-[11px] text-[#6B6B6B] line-clamp-2 leading-snug pt-0.5">
                      {item.description}
                    </p>

                    <div className="pt-2 border-t border-[#E5E5E5] flex items-center justify-between">
                      <span className="text-[10px] font-mono text-[#999999]">
                        {item.code}
                      </span>
                      <button
                        onClick={() => handleRequestSample(item.name)}
                        className="text-[11px] font-semibold text-[#111111] hover:text-[#8B6A4D] transition-colors cursor-pointer"
                      >
                        Sample →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-Width Collection Banners matching Reference 2 (UBE, Koishi, Lexington) */}
          <div className="space-y-6 pt-6">
            {featuredBanners.map((banner) => (
              <div
                key={banner.name}
                className="group relative rounded-[28px] overflow-hidden bg-[#EAE7E1] aspect-[16/9] sm:aspect-[21/9] shadow-md border border-[#E5E5E5]"
              >
                <Image
                  src={banner.image}
                  alt={banner.name}
                  fill
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white z-10">
                  <div>
                    <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white mb-1">
                      {banner.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 font-light max-w-md line-clamp-1">
                      {banner.tagline}
                    </p>
                  </div>

                  <Link
                    href={banner.href}
                    aria-label={`View ${banner.name}`}
                    className="btn-circle-arrow shadow-md"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Poliform Large Black CTA Section */}
      <PoliformCTA />

      {/* Swatch Sample Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
        defaultMaterial={activeProductName}
      />
    </div>
  );
}
