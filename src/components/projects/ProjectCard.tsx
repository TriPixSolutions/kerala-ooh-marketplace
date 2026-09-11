import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProjectItem } from "@/types";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Badge } from "@/components/shared/Badge";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group relative flex flex-col bg-[#0e1014] border border-white/[0.08] hover:border-[#c5a880]/50 transition-all duration-500 overflow-hidden">
      {/* Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#16191f]">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.75] group-hover:brightness-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e1014] via-black/20 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <Badge variant="dark">{project.categoryLabel}</Badge>
          <span className="text-[11px] font-mono text-[#e4d5be] bg-black/60 px-2.5 py-0.5 backdrop-blur-sm border border-white/[0.1]">
            {project.year}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-xs text-[#9ea3b0] mb-2 font-mono">
            <MapPin className="w-3.5 h-3.5 text-[#c5a880]" />
            <span>{project.location}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-light text-[#f6f4f0] mb-3 group-hover:text-[#c5a880] transition-colors">
            {project.title}
          </h3>

          <p className="text-xs sm:text-sm font-light text-[#9ea3b0] leading-relaxed mb-6 line-clamp-2">
            {project.subtitle}
          </p>

          <div className="pt-4 border-t border-white/[0.06] mb-6">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
              Key Materials Specified:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.materialsUsed.slice(0, 3).map((mat) => (
                <span
                  key={mat.name}
                  className="text-[11px] bg-white/[0.04] text-[#e4d5be] px-2.5 py-1 border border-white/[0.06]"
                >
                  {mat.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#c5a880] group-hover:underline">
            View Case Study
          </span>
          <ArrowUpRight className="w-4 h-4 text-[#c5a880] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
