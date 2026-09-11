"use client";

import React, { useState } from "react";
import { Container } from "@/components/shared/Container";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  firm: string;
  location: string;
}

export function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      quote:
        "HYLY transformed our architectural drawings into tactile poetry. The sequence consistency of the smoked oak flitches and the whisper-quiet mechanics of the 3-meter pivot doors elevated the residence into an extraordinary realm.",
      author: "Ar. Rahul Varma",
      role: "Principal Architect",
      firm: "Studio Earthbox Architecture",
      location: "Kochi",
    },
    {
      id: "2",
      quote:
        "Specifying materials for high-net-worth clients requires uncompromising trust. HYLY’s 1:1 physical sample mockups and millimeter-precise CNC joinery saved us weeks of on-site coordination.",
      author: "Elena Rossi",
      role: "Design Director",
      firm: "Studio Milo Interior Architecture",
      location: "Bangalore",
    },
    {
      id: "3",
      quote:
        "The monolithic kitchen island and bookmatched walnut pocket cabinetry executed by HYLY is the undisputed centerpiece of our penthouse. Every drawer glides with silent dignity.",
      author: "Vikram Singhania",
      role: "Private Patron",
      firm: "The Sanctuary Waterfront Villa",
      location: "Aluva",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 sm:py-32 md:py-36 bg-[#F7F5F2] border-t border-[#E5E5E5]">
      <Container size="wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#8B6A4D] mb-3 block">
              Architectural Testimonials
            </span>
            <h2 className="font-serif-editorial text-4xl sm:text-5xl font-normal text-[#171717] tracking-tight">
              Words From Our Collaborators
            </h2>
          </div>

          {/* Minimalist Luxury Testimonial Card */}
          <div className="relative bg-[#FFFFFF] rounded-[28px] border border-[#E5E5E5] p-8 sm:p-14 lg:p-16 shadow-[0_15px_35px_rgba(0,0,0,0.03)]">
            <div className="flex items-center gap-1 mb-6 text-[#8B6A4D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            <blockquote className="font-serif-editorial text-2xl sm:text-3xl md:text-4xl text-[#171717] font-normal leading-[1.3] mb-8 sm:mb-12">
              "{current.quote}"
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E5E5E5]">
              <div>
                <div className="text-base sm:text-lg font-medium text-[#171717]">
                  {current.author}
                </div>
                <div className="text-xs sm:text-sm text-[#6B6B6B]">
                  {current.role}, <span className="text-[#171717]">{current.firm}</span> ({current.location})
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-11 h-11 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-[#6B6B6B] px-2">
                  0{currentIndex + 1} / 0{testimonials.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-11 h-11 rounded-full border border-[#E5E5E5] flex items-center justify-center hover:bg-[#171717] hover:text-white hover:border-[#171717] transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
