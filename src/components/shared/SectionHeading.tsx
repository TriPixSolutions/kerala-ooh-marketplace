import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  light = false,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div
      className={cn(
        "flex flex-col max-w-3xl mb-12 sm:mb-16 md:mb-20",
        alignmentClasses[align],
        className
      )}
    >
      {eyebrow && (
        <span className="editorial-tag mb-4 inline-flex items-center gap-2">
          <span className="w-6 h-px bg-[#c5a880] inline-block" />
          {eyebrow}
        </span>
      )}

      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[-0.03em] leading-[1.1] mb-6",
          light ? "text-[#090a0c]" : "text-[#f6f4f0]"
        )}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={cn(
            "text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl",
            light ? "text-neutral-700" : "text-[#9ea3b0]"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
