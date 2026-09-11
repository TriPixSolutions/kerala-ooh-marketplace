"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import { headerNavLinks } from "@/lib/data/navigation";
import { Button } from "@/components/shared/Button";
import { MobileMenu } from "./MobileMenu";
import { SampleRequestModal } from "@/components/shared/SampleRequestModal";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-[#090a0c]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl"
            : "bg-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group flex flex-col items-start select-none">
            <span className="text-2xl sm:text-3xl font-light tracking-[0.25em] text-[#f6f4f0] transition-colors group-hover:text-[#c5a880]">
              HYLY
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.32em] uppercase text-[#c5a880]/80">
              Craftsmanship & Materials
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {headerNavLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-xs lg:text-[13px] font-medium tracking-[0.14em] uppercase transition-colors duration-300 py-1 ${
                    isActive
                      ? "text-[#c5a880]"
                      : "text-[#9ea3b0] hover:text-[#f6f4f0]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-[#c5a880] animate-in fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Desk */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setSampleModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#9ea3b0] hover:text-[#e4d5be] px-3 py-2 border border-white/[0.1] hover:border-[#c5a880]/40 transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#c5a880]" />
              Sample Kit
            </button>
            <Button href="/contact" variant="primary" size="sm" withArrow>
              Consult Atelier
            </Button>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setSampleModalOpen(true)}
              className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-[#e4d5be] px-2.5 py-1.5 border border-white/[0.1]"
            >
              <Sparkles className="w-3 h-3 text-[#c5a880]" />
              Samples
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 text-[#9ea3b0] hover:text-[#f6f4f0] focus:outline-none cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Global Sample Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />
    </>
  );
}
