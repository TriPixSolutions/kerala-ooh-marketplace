import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

type ButtonVariant =
  | "pill-dark"
  | "pill-outline"
  | "pill-walnut"
  | "primary"
  | "secondary"
  | "outline"
  | "brass"
  | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
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
      variant = "pill-dark",
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
      "relative inline-flex items-center justify-center font-normal tracking-normal transition-all duration-300 rounded-full group select-none cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171717]";

    const variantStyles: Record<ButtonVariant, string> = {
      "pill-dark":
        "bg-[#171717] text-[#FFFFFF] hover:bg-[#333333] shadow-[0_4px_16px_rgba(23,23,23,0.12)] hover:shadow-[0_8px_24px_rgba(23,23,23,0.2)]",
      primary:
        "bg-[#171717] text-[#FFFFFF] hover:bg-[#333333] shadow-[0_4px_16px_rgba(23,23,23,0.12)] hover:shadow-[0_8px_24px_rgba(23,23,23,0.2)]",
      "pill-outline":
        "bg-transparent text-[#171717] border border-[#171717]/30 hover:border-[#171717] hover:bg-[#171717] hover:text-[#FFFFFF]",
      secondary:
        "bg-transparent text-[#171717] border border-[#171717]/30 hover:border-[#171717] hover:bg-[#171717] hover:text-[#FFFFFF]",
      outline:
        "bg-transparent text-[#171717] border border-[#171717]/30 hover:border-[#171717] hover:bg-[#171717] hover:text-[#FFFFFF]",
      "pill-walnut":
        "bg-[#8B6A4D] text-[#FFFFFF] hover:bg-[#75563D] shadow-[0_4px_16px_rgba(139,106,77,0.2)]",
      brass:
        "bg-[#8B6A4D] text-[#FFFFFF] hover:bg-[#75563D] shadow-[0_4px_16px_rgba(139,106,77,0.2)]",
      ghost:
        "bg-transparent text-[#6B6B6B] hover:text-[#171717] hover:bg-[#171717]/[0.04]",
    };

    const sizeStyles = {
      sm: "text-xs px-4 py-2 gap-1.5",
      md: "text-xs sm:text-sm px-6 py-3 gap-2",
      lg: "text-sm sm:text-base px-8 py-3.5 gap-2.5",
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
