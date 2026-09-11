"use client";

import React from "react";
import Link from "next/link";
import { X, ArrowUpRight, Phone, Mail, MessageCircle } from "lucide-react";
import { headerNavLinks } from "@/lib/data/navigation";
import { companyData } from "@/lib/data/company";
import { Button } from "@/components/shared/Button";

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
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-[#090a0c]/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-in fade-in duration-200"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-6">
        <div className="flex flex-col">
          <span className="text-2xl font-light tracking-[0.25em] text-[#f6f4f0]">
            HYLY
          </span>
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-[#c5a880]">
            Craftsmanship & Materials
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2 text-[#9ea3b0] hover:text-[#f6f4f0] transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="my-auto py-8">
        <ul className="space-y-6">
          {headerNavLinks.map((link, idx) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="group flex items-center justify-between text-2xl sm:text-3xl font-light text-[#f6f4f0] hover:text-[#c5a880] transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-[#c5a880]/60">
                    0{idx + 1}
                  </span>
                  <span>{link.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-[#c5a880]" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Actions & Contacts */}
      <div className="pt-6 border-t border-white/[0.08] space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Button
            variant="brass"
            size="md"
            className="w-full"
            onClick={() => {
              onClose();
              onOpenSampleModal();
            }}
          >
            Request Sample Kit
          </Button>
          <Button
            href={companyData.contact.whatsappLink}
            external
            variant="secondary"
            size="md"
            className="w-full"
          >
            <MessageCircle className="w-4 h-4 text-[#c5a880] mr-2 inline" />
            WhatsApp Atelier
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-between text-xs text-[#9ea3b0] pt-2">
          <a
            href={`tel:${companyData.contact.phone}`}
            className="hover:text-[#f6f4f0] inline-flex items-center gap-1.5"
          >
            <Phone className="w-3.5 h-3.5 text-[#c5a880]" />
            {companyData.contact.phone}
          </a>
          <a
            href={`mailto:${companyData.contact.email}`}
            className="hover:text-[#f6f4f0] inline-flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
            {companyData.contact.email}
          </a>
        </div>
      </div>
    </div>
  );
}
