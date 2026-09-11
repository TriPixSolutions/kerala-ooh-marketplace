"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight, MessageCircle } from "lucide-react";
import { companyData } from "@/lib/data/company";
import { headerNavLinks } from "@/lib/data/navigation";
import gsap from "gsap";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSample: () => void;
}

export function MobileMenu({ isOpen, onClose, onOpenSample }: MobileMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen && containerRef.current && linksRef.current) {
      document.body.style.overflow = "hidden";
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power3.out" }
      );
      gsap.fromTo(
        linksRef.current.children,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.45, stagger: 0.06, ease: "power2.out" }
      );
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-[#F7F5F2] flex flex-col justify-between p-6 sm:p-10 md:p-12 overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-[#E5E5E5] pb-5">
        <Link
          href="/"
          onClick={onClose}
          className="font-bold text-2xl tracking-tight text-[#111111]"
        >
          HYLY
        </Link>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[#111111] hover:opacity-60 transition-opacity cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links with Bold Inter Typography */}
      <nav className="my-auto py-8">
        <ul ref={linksRef} className="space-y-4 sm:space-y-6">
          {headerNavLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] hover:text-[#8B6A4D] transition-colors py-1"
              >
                <span>{link.label}</span>
                <div className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Actions & Contacts */}
      <div className="pt-6 border-t border-[#E5E5E5] space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link
            href="/contact"
            onClick={onClose}
            className="w-full py-3.5 px-6 rounded-full bg-[#111111] text-white font-medium text-sm text-center hover:bg-[#262626] transition-colors"
          >
            Get Consultation
          </Link>
          <button
            onClick={() => {
              onClose();
              onOpenSample();
            }}
            className="w-full py-3.5 px-6 rounded-full border border-[#111111] text-[#111111] font-medium text-sm text-center hover:bg-[#111111] hover:text-white transition-colors cursor-pointer"
          >
            Request Swatch Kit
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-[#6B6B6B] pt-2">
          <span>{companyData.contact.phone}</span>
          <span>{companyData.contact.email}</span>
          <span className="text-[#8B6A4D] font-medium">Kochi • Bangalore • Dubai</span>
        </div>
      </div>
    </div>
  );
}
