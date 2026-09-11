import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col bg-[#FFFFFF] rounded-[28px] border border-[#E5E5E5] overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]">
      {/* Cover Image */}
      <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#EAE7E1]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-xs font-normal text-[#171717] bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-black/5">
            {project.categoryLabel}
          </span>
          <span className="text-xs font-mono text-[#6B6B6B] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-black/5">
            {project.year}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-[#8B6A4D] mb-2">
            {project.location}
          </div>

          <h3 className="font-serif-editorial text-2xl sm:text-3xl font-normal text-[#171717] mb-3 group-hover:text-[#8B6A4D] transition-colors">
            {project.title}
          </h3>

          <p className="text-sm font-normal text-[#6B6B6B] leading-relaxed mb-6 line-clamp-2">
            {project.subtitle}
          </p>

          <div className="pt-4 border-t border-[#E5E5E5] mb-6">
            <span className="block text-[11px] font-mono uppercase tracking-wider text-[#9C9C9C] mb-2">
              Materials Specified:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.materialsUsed.slice(0, 3).map((mat) => (
                <span
                  key={mat.name}
                  className="text-xs bg-[#F7F5F2] text-[#171717] px-3 py-1 rounded-full border border-[#E5E5E5]"
                >
                  {mat.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#171717] group-hover:text-[#8B6A4D] transition-colors">
            View Project
          </span>
          <div className="w-8 h-8 rounded-full bg-[#F7F5F2] flex items-center justify-center group-hover:bg-[#171717] group-hover:text-white transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${project.title} project details`}
      />
    </article>
  );
}
