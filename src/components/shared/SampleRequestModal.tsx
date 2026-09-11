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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-[#111317] border border-white/[0.12] p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-5 right-5 text-[#9ea3b0] hover:text-[#f6f4f0] p-1 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <CheckCircle className="w-12 h-12 text-[#c5a880] mx-auto mb-4" />
            <h3 className="text-2xl font-light text-[#f6f4f0] mb-2">
              Sample Box Dispatched
            </h3>
            <p className="text-sm text-[#9ea3b0] leading-relaxed mb-6">
              Thank you, <span className="text-[#f6f4f0]">{fullName}</span>. Our materials atelier has received your specification request. Your curated tactile swatch box will be dispatched via courier within 24 hours.
            </p>
            <Button
              variant="outline"
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
            <div className="flex items-center gap-2.5 mb-2">
              <PackageOpen className="w-5 h-5 text-[#c5a880]" />
              <span className="editorial-tag">Architectural Archive</span>
            </div>

            <h3
              id="sample-modal-title"
              className="text-2xl font-light text-[#f6f4f0] mb-2"
            >
              Request Tactile Material Kit
            </h3>
            <p className="text-xs text-[#9ea3b0] mb-6">
              Complimentary for licensed architects, interior designers, and ongoing commissions.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-1.5">
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Ar. Elena Rossi"
                  className="w-full bg-[#16191f] border border-white/[0.1] px-3.5 py-2.5 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-1.5">
                    Studio / Firm Name
                  </label>
                  <input
                    type="text"
                    value={firmName}
                    onChange={(e) => setFirmName(e.target.value)}
                    placeholder="Studio Morph"
                    className="w-full bg-[#16191f] border border-white/[0.1] px-3.5 py-2.5 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-1.5">
                    Official Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="elena@studiomorph.com"
                    className="w-full bg-[#16191f] border border-white/[0.1] px-3.5 py-2.5 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-2">
                  Select Samples Needed (Select up to 4)
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {sampleOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => toggleItem(opt)}
                      className={`text-left p-2 border transition-all cursor-pointer ${
                        selectedItems.includes(opt)
                          ? "border-[#c5a880] bg-[#c5a880]/15 text-[#e4d5be]"
                          : "border-white/[0.08] bg-[#16191f] text-[#9ea3b0] hover:text-[#f6f4f0]"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9ea3b0] mb-1.5">
                  Courier Delivery Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={shippingAddress}
                  onChange={(e) => setShippingAddress(e.target.value)}
                  placeholder="Studio address with pincode / postal code"
                  className="w-full bg-[#16191f] border border-white/[0.1] px-3.5 py-2.5 text-sm text-[#f6f4f0] focus:border-[#c5a880] focus:outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <Button variant="brass" size="md" className="w-full" type="submit">
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
