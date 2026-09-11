"use client";

import React, { useState } from "react";
import { X, CheckCircle, PackageOpen } from "lucide-react";
import { Button } from "@/components/shared/Button";

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMaterial?: string;
}

export function SampleRequestModal({
  isOpen,
  onClose,
  defaultMaterial,
}: SampleRequestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [firmName, setFirmName] = useState("");
  const [shippingAddress, setShippingAddress] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>(
    defaultMaterial ? [defaultMaterial] : ["Smoked Oak Veneer", "Calibrated Birch Core"]
  );

  if (!isOpen) return null;

  const sampleOptions = [
    "Smoked Oak Veneer",
    "American Walnut Veneer",
    "Acoustic Fluted Slat",
    "Calibrated Birch Marine Core",
    "Champagne Brass Hardware Finish",
    "Cold-Cast Liquid Bronze",
  ];

  const toggleItem = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="sample-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#FFFFFF] rounded-[28px] border border-[#E5E5E5] p-6 sm:p-10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 text-[#6B6B6B] hover:text-[#171717] p-1 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-[#8B6A4D] mx-auto mb-4" />
            <h3 className="font-serif-editorial text-3xl font-normal text-[#171717] mb-2">
              Sample Box Dispatched
            </h3>
            <p className="text-sm text-[#6B6B6B] leading-relaxed mb-6">
              Thank you, <span className="text-[#171717] font-medium">{fullName}</span>. Our materials atelier has received your specification request. Your curated tactile swatch box will be dispatched via courier within 24 hours.
            </p>
            <Button
              variant="pill-dark"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
            >
              Done
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 mb-2">
              <PackageOpen className="w-4 h-4 text-[#8B6A4D]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#8B6A4D]">
                Architectural Archive
              </span>
            </div>

            <h3
              id="sample-modal-title"
              className="font-serif-editorial text-3xl font-normal text-[#171717] mb-2"
            >
              Request Material Kit
            </h3>
            <p className="text-xs text-[#6B6B6B] mb-6">
              Complimentary for licensed architects, interior designers, and ongoing commissions.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ar. Elena Rossi"
                  className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-3.5 py-2.5 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-1.5">
                    Studio / Firm
                  </label>
                  <input
                    type="text"
                    value={firmName}
                    onChange={(e) => setFirmName(e.target.value)}
                    placeholder="Studio Morph"
                    className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-3.5 py-2.5 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-1.5">
                    Email Address *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@studiomorph.com"
                    className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-3.5 py-2.5 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-2">
                  Select Swatches (Up to 4)
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {sampleOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => toggleItem(opt)}
                      className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer ${
                        selectedItems.includes(opt)
                          ? "border-[#171717] bg-[#171717] text-white font-medium"
                          : "border-[#E5E5E5] bg-[#F7F5F2] text-[#6B6B6B] hover:text-[#171717] hover:border-[#171717]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium uppercase tracking-wider text-[#171717] mb-1.5">
                  Courier Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Studio address with postal / pin code"
                  className="w-full bg-[#F7F5F2] border border-[#E5E5E5] rounded-xl px-3.5 py-2.5 text-sm text-[#171717] focus:border-[#171717] focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <Button variant="pill-dark" size="md" className="w-full" type="submit">
                  Dispatch Sample Kit
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
