"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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

  const leftNavLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
  ];

  const rightNavLinks = [
    { label: "Materials", href: "/services#veneers" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 ${
          isScrolled
            ? "bg-[#FFFFFF]/90 backdrop-blur-md border-b border-[#E5E5E5] py-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
            : "bg-transparent py-6 sm:py-8"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16 flex items-center justify-between">
          {/* Desktop Left Nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10 w-1/3">
            {leftNavLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-normal transition-colors duration-200 ${
                    isActive
                      ? "text-[#171717] font-medium"
                      : "text-[#6B6B6B] hover:text-[#171717]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Center Brand Logo (Velmora style serif) */}
          <div className="flex justify-center flex-1 md:w-1/3">
            <Link
              href="/"
              className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl italic text-[#171717] hover:opacity-85 transition-opacity select-none tracking-tight"
            >
              HYLY
            </Link>
          </div>

          {/* Desktop Right Nav & Consultation Pill Button */}
          <div className="hidden md:flex items-center justify-end gap-8 lg:gap-10 w-1/3">
            <nav className="flex items-center gap-8">
              {rightNavLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-sm tracking-normal transition-colors duration-200 ${
                      isActive
                        ? "text-[#171717] font-medium"
                        : "text-[#6B6B6B] hover:text-[#171717]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Button href="/contact" variant="pill-dark" size="sm">
              Get Consultation
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <Button
              href="/contact"
              variant="pill-dark"
              size="sm"
              className="text-[11px] px-3.5 py-1.5"
            >
              Consult
            </Button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="p-2 text-[#171717] hover:opacity-70 focus:outline-none cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenSampleModal={() => setSampleModalOpen(true)}
      />

      {/* Sample Request Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={() => setSampleModalOpen(false)}
      />
    </>
  );
}
