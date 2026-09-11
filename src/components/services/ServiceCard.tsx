import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItem } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/shared/Badge";

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article className="group relative bg-[#0f1115] border border-white/[0.08] hover:border-[#c5a880]/40 transition-all duration-500 flex flex-col justify-between overflow-hidden">
      {/* Visual Image container */}
      <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#16191f]">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 brightness-[0.75] group-hover:brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1115] via-transparent to-black/30" />

        <div className="absolute top-4 left-4">
          <Badge variant="brass">{service.eyebrow}</Badge>
        </div>
      </div>

      {/* Text details */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl sm:text-3xl font-light text-[#f6f4f0] mb-3 group-hover:text-[#c5a880] transition-colors">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm font-light text-[#9ea3b0] leading-relaxed mb-6">
            {service.shortDescription}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {service.specifications.slice(0, 2).map((spec) => (
              <span
                key={spec.label}
                className="text-[10px] font-mono uppercase tracking-wider text-[#9ea3b0] bg-white/[0.04] px-2.5 py-1 border border-white/[0.06]"
              >
                {spec.label}: <strong className="text-[#f6f4f0]">{spec.value.split(",")[0]}</strong>
              </span>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-xs font-mono uppercase tracking-[0.14em] text-[#c5a880]">
            Explore Discipline
          </span>
          <div className="w-8 h-8 rounded-full bg-white/[0.04] flex items-center justify-center group-hover:bg-[#c5a880] group-hover:text-[#090a0c] transition-all">
            <ArrowUpRight className="w-4 h-4 text-[#f6f4f0] group-hover:text-[#090a0c] transition-colors" />
          </div>
        </div>
      </div>

      <Link
        href={`/services#${service.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`View ${service.title} details`}
      />
    </article>
  );
}
