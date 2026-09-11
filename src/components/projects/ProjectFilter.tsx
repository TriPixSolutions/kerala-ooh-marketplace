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
    { id: "decorative-works", label: "Custom Interiors" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-5 py-2.5 text-xs tracking-normal rounded-full transition-all cursor-pointer ${
              isActive
                ? "bg-[#171717] text-white font-medium shadow-[0_4px_16px_rgba(23,23,23,0.15)]"
                : "bg-white text-[#6B6B6B] border border-[#E5E5E5] hover:border-[#171717] hover:text-[#171717]"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
