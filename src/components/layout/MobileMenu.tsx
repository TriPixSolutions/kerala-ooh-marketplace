"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight, Phone, Mail, MessageCircle } from "lucide-react";
import { companyData } from "@/lib/data/company";
import { Button } from "@/components/shared/Button";
import gsap from "gsap";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSampleModal: () => void;
}

export function MobileMenu({
  isOpen,
  onClose,
  onOpenSampleModal,
}: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current && linksRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
      );
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About HYLY", href: "/about" },
    { label: "Services & Disciplines", href: "/services" },
    { label: "Selected Projects", href: "/projects" },
    { label: "Tactile Materials", href: "/services#veneers" },
    { label: "Contact & Studios", href: "/contact" },
  ];

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-[#F7F5F2] flex flex-col justify-between p-6 sm:p-12 overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-6">
        <Link
          href="/"
          onClick={onClose}
          className="font-serif-editorial text-3xl italic text-[#171717]"
        >
          HYLY
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[#171717] hover:opacity-60 transition-opacity cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="my-auto py-10">
        <ul ref={linksRef} className="space-y-6">
          {navLinks.map((link, idx) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between font-serif-editorial text-3xl sm:text-4xl text-[#171717] hover:text-[#8B6A4D] transition-colors"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#8B6A4D]" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Actions & Contacts */}
      <div className="pt-6 border-t border-[#E5E5E5] space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            href="/contact"
            variant="pill-dark"
            size="md"
            className="w-full text-center"
            onClick={onClose}
          >
            Get Consultation
          </Button>
          <Button
            href={companyData.contact.whatsappLink}
            external
            variant="pill-outline"
            size="md"
            className="w-full"
          >
            <MessageCircle className="w-4 h-4 mr-2 inline" />
            WhatsApp Studio
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-[#6B6B6B] pt-2">
          <span>{companyData.contact.phone}</span>
          <span>{companyData.contact.email}</span>
        </div>
      </div>
    </div>
  );
}
