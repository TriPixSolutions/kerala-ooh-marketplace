"use client";

import React from "react";
import { PoliformHero } from "@/components/home/PoliformHero";
import { PoliformCategories } from "@/components/home/PoliformCategories";
import { PoliformCollections } from "@/components/home/PoliformCollections";
import { PoliformAbout } from "@/components/home/PoliformAbout";
import { PoliformProjects } from "@/components/home/PoliformProjects";
import { MaterialStorytelling } from "@/components/home/MaterialStorytelling";
import { PoliformStats } from "@/components/home/PoliformStats";
import { PoliformCTA } from "@/components/home/PoliformCTA";

export default function HomePage() {
  return (
    <div className="bg-[#F7F5F2]">
      {/* SECTION 1: Hero Card Layout (Single Premium Visual + Floating Card) */}
      <PoliformHero />

      {/* SECTION 2: Material Categories (Horizontal Swipe on Mobile) */}
      <PoliformCategories />

      {/* SECTION 3: Featured Collections (Poliform Inspired) */}
      <PoliformCollections />

      {/* SECTION 4: About HYLY (Editorial Layout, Strong Imagery) */}
      <PoliformAbout />

      {/* SECTION 5: Projects Showcase (Horizontal Swipe on Mobile) */}
      <PoliformProjects />

      {/* SECTION 6: Material Storytelling (GSAP 4-Phase Reveal) */}
      <MaterialStorytelling />

      {/* SECTION 7: Statistics Grid */}
      <PoliformStats />

      {/* SECTION 8: Contact CTA (Large Black Section) */}
      <PoliformCTA />
    </div>
  );
}
