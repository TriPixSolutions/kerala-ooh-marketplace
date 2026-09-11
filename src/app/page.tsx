"use client";

import React from "react";
import { CorporateHero } from "@/components/home/CorporateHero";
import { CorporateCategories } from "@/components/home/CorporateCategories";
import { CorporateFeaturedMaterials } from "@/components/home/CorporateFeaturedMaterials";
import { CorporateWhyHYLY } from "@/components/home/CorporateWhyHYLY";
import { CorporateProjects } from "@/components/home/CorporateProjects";
import { CorporateAboutSection } from "@/components/home/CorporateAboutSection";
import { CorporateCTA } from "@/components/home/CorporateCTA";

export default function HomePage() {
  return (
    <div className="bg-[#F7F5F2]">
      {/* SECTION 1: Full-Screen Premium Hero */}
      <CorporateHero />

      {/* SECTION 2: Product Categories (Horizontal swipe on mobile, clean grid on desktop) */}
      <CorporateCategories />

      {/* SECTION 3: Featured Materials (Large showcase cards, minimal text) */}
      <CorporateFeaturedMaterials />

      {/* SECTION 4: Why HYLY (Simple statistics section, large numbers) */}
      <CorporateWhyHYLY />

      {/* SECTION 5: Project Showcase (Large project cards, premium imagery) */}
      <CorporateProjects />

      {/* SECTION 6: About HYLY (Large editorial layout, one image, one short paragraph) */}
      <CorporateAboutSection />

      {/* SECTION 7: Contact CTA (Dark section: "Let's Build Something Exceptional.") */}
      <CorporateCTA />
    </div>
  );
}
