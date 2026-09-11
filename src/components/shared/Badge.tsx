import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "brass" | "subtle" | "dark" | "outline";
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "subtle",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    brass: "bg-[#c5a880]/15 text-[#e4d5be] border border-[#c5a880]/30",
    subtle: "bg-white/[0.05] text-[#9ea3b0] border border-white/[0.08]",
    dark: "bg-[#111317] text-[#f6f4f0] border border-white/[0.12]",
    outline: "bg-transparent text-[#9ea3b0] border border-white/[0.18]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center text-[10px] sm:text-xs font-mono uppercase tracking-[0.14em] px-3 py-1 rounded-none select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
