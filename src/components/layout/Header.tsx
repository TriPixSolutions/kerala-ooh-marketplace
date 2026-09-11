"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { headerNavLinks } from "@/lib/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { SampleRequestModal } from "@/components/shared/SampleRequestModal";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const onDarkHero = isHome && !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5F2]/95 backdrop-blur-md border-b border-[#E5E5E5] py-4 shadow-sm"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* HYLY Logo Left */}
          <Link
            href="/"
            className={`font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-200 select-none ${
              onDarkHero ? "text-white" : "text-[#111111]"
            }`}
          >
            HYLY
          </Link>

          {/* Desktop Minimal Menu Right */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {headerNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-normal transition-colors duration-200 ${
                    onDarkHero
                      ? isActive
                        ? "text-white font-semibold"
                        : "text-white/80 hover:text-white"
                      : isActive
                      ? "text-[#111111] font-semibold"
                      : "text-[#666666] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <button
              onClick={() => setSampleModalOpen(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                onDarkHero
                  ? "border border-white/40 text-white hover:bg-white hover:text-[#111111]"
                  : "border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white"
              }`}
            >
              Request Swatch
            </button>
          </nav>

          {/* Mobile Right: Minimal Hamburger Icon */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="group p-2 flex flex-col justify-center items-end gap-1.5 focus:outline-none cursor-pointer"
            >
              <span
                className={`w-6 h-[1.5px] transition-colors duration-200 ${
                  onDarkHero ? "bg-white" : "bg-[#111111]"
                }`}
              />
              <span
                className={`w-4 h-[1.5px] transition-colors duration-200 ${
                  onDarkHero ? "bg-white" : "bg-[#111111]"
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Minimal Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSample={() => setSampleModalOpen(true)}
      />

      {/* Swatch Sample Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />
    </>
  );
}
