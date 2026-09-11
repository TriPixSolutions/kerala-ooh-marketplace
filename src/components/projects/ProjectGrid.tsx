"use client";

import React, { useState } from "react";
import { ProjectCategory, ProjectItem } from "@/types";
import { projectsData } from "@/lib/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";

interface ProjectGridProps {
  initialCategory?: ProjectCategory;
  limit?: number;
  showFilter?: boolean;
}

export function ProjectGrid({
  initialCategory = "all",
  limit,
  showFilter = true,
}: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>(initialCategory);

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const displayedProjects = limit
    ? filteredProjects.slice(0, limit)
    : filteredProjects;

  return (
    <div>
      {showFilter && (
        <ProjectFilter
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      {displayedProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-[#ECE7DF] border border-[#E5E5E5] rounded-xl">
          <p className="text-sm font-normal text-[#6B6B6B]">
            No projects found in this category currently.
          </p>
        </div>
      )}
    </div>
  );
}
