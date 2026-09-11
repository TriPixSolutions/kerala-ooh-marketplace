import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "brass";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      withArrow = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "relative inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-none group select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#c5a880]";

    const variantStyles = {
      primary:
        "bg-[#c5a880] text-[#090a0c] hover:bg-[#d9c3a5] active:bg-[#b39369] shadow-[0_4px_20px_rgba(197,168,128,0.2)] hover:shadow-[0_8px_30px_rgba(197,168,128,0.35)]",
      brass:
        "bg-gradient-to-r from-[#d9c3a5] via-[#c5a880] to-[#b39369] text-[#090a0c] font-semibold hover:brightness-110 shadow-[0_4px_25px_rgba(197,168,128,0.3)]",
      secondary:
        "bg-[#16191f] text-[#f6f4f0] border border-[rgba(255,255,255,0.1)] hover:border-[#c5a880]/50 hover:bg-[#1f232b]",
      outline:
        "bg-transparent text-[#f6f4f0] border border-[rgba(255,255,255,0.2)] hover:border-[#c5a880] hover:text-[#c5a880]",
      ghost:
        "bg-transparent text-[#9ea3b0] hover:text-[#f6f4f0] hover:bg-white/[0.04]",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-xs sm:text-sm px-6 py-3.5 gap-2 uppercase tracking-[0.12em]",
      lg: "text-sm sm:text-base px-8 py-4 gap-2.5 uppercase tracking-[0.14em]",
    };

    const content = (
      <>
        <span>{children}</span>
        {withArrow && (
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
          >
            {content}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
