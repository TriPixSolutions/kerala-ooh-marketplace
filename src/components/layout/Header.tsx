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
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5F2]/95 backdrop-blur-md border-b border-[#E5E5E5] py-4 shadow-[0_2px_15px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-5 sm:py-7"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between">
          {/* HYLY Bold Minimal Logo Left */}
          <Link
            href="/"
            className="font-bold text-xl sm:text-2xl tracking-[-0.03em] text-[#111111] hover:opacity-80 transition-opacity select-none"
          >
            HYLY
          </Link>

          {/* Desktop Minimal Nav Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {headerNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-normal transition-colors duration-200 ${
                    isActive
                      ? "text-[#111111] font-semibold"
                      : "text-[#6B6B6B] hover:text-[#111111]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Desktop Consultation Pill & Poliform Minimal 2-Line Hamburger Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSampleModalOpen(true)}
              className="hidden lg:inline-flex px-4 py-1.5 rounded-full border border-[#111111] text-xs font-medium text-[#111111] hover:bg-[#111111] hover:text-white transition-all cursor-pointer"
            >
              Request Swatch Kit
            </button>

            {/* Poliform Minimal 2-line Hamburger Icon (= with top line longer) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Toggle navigation menu"
              className="group p-2 flex flex-col justify-center items-end gap-1.5 focus:outline-none cursor-pointer"
            >
              <span className="w-6 h-[1.5px] bg-[#111111] group-hover:w-7 transition-all duration-300" />
              <span className="w-4 h-[1.5px] bg-[#111111] group-hover:w-7 transition-all duration-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Luxury Fullscreen/Slide-in Drawer Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSample={() => setSampleModalOpen(true)}
      />

      {/* Swatch Sample Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />
    </>
  );
}
