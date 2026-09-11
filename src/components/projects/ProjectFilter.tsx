"use client";

import React from "react";
import { ProjectCategory } from "@/types";

interface ProjectFilterProps {
  activeCategory: ProjectCategory;
  onCategoryChange: (category: ProjectCategory) => void;
}

export function ProjectFilter({
  activeCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  const categories: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: "All Works" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "kitchens", label: "Kitchens" },
    { id: "wardrobes", label: "Wardrobes" },
    { id: "decorative-works", label: "Decorative Works" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12 sm:mb-16 border-b border-white/[0.08] pb-6">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-4 sm:px-5 py-2 text-xs font-mono uppercase tracking-[0.14em] transition-all cursor-pointer border ${
              isActive
                ? "bg-[#c5a880] text-[#090a0c] font-semibold border-[#c5a880] shadow-[0_4px_20px_rgba(197,168,128,0.2)]"
                : "bg-[#121418] text-[#9ea3b0] border-white/[0.08] hover:border-white/[0.2] hover:text-[#f6f4f0]"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
