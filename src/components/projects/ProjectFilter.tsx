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
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "hospitality", label: "Hospitality" },
    { id: "retail", label: "Retail" },
    { id: "custom-projects", label: "Custom Projects" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 sm:gap-3 overflow-x-auto pb-2 no-scrollbar">
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onCategoryChange(cat.id)}
            className={`px-4 py-2 text-xs rounded-full transition-all cursor-pointer font-medium tracking-wide ${
              isActive
                ? "bg-[#111111] text-white shadow-sm"
                : "bg-white text-[#666666] border border-[#E5E5E5] hover:border-[#111111] hover:text-[#111111]"
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}
