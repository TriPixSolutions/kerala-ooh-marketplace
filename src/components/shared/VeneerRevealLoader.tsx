"use client";

import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";

export function VeneerRevealLoader() {
  const [shouldRender, setShouldRender] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check localStorage
    const hasSeen = localStorage.getItem("hyly_seen_intro_v1");
    if (!hasSeen) {
      setShouldRender(true);
      // Lock body scroll during intro
      document.body.style.overflow = "hidden";
    }
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    let progressObj = { value: 0 };

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "";
          localStorage.setItem("hyly_seen_intro_v1", "true");
          setShouldRender(false);
        },
      });

      // 1. Counter counts from 0 to 100 over 1.8s
      tl.to(progressObj, {
        value: 100,
        duration: 1.8,
        ease: "power2.inOut",
        onUpdate: () => {
          if (counterRef.current) {
            const val = Math.floor(progressObj.value);
            counterRef.current.innerText = val < 10 ? `0${val}` : `${val}`;
          }
        },
      })
        // 2. Monogram & text fade out slightly before curtains part
        .to(
          contentRef.current,
          {
            opacity: 0,
            y: -15,
            duration: 0.5,
            ease: "power2.in",
          },
          "-=0.2"
        )
        // 3. Parting curtain reveal (Left slide left, Right slide right)
        .to(
          leftCurtainRef.current,
          {
            xPercent: -100,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "-=0.1"
        )
        .to(
          rightCurtainRef.current,
          {
            xPercent: 100,
            duration: 0.8,
            ease: "power3.inOut",
          },
          "<"
        );
    });

    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [shouldRender]);

  const handleSkip = () => {
    document.body.style.overflow = "";
    localStorage.setItem("hyly_seen_intro_v1", "true");
    setShouldRender(false);
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex pointer-events-auto select-none overflow-hidden"
    >
      {/* Left Curtain with Wood Veneer Texture */}
      <div
        ref={leftCurtainRef}
        className="relative w-1/2 h-full bg-[#171717] border-r border-[#8B6A4D]/20 overflow-hidden shadow-2xl"
      >
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1200&auto=format&fit=crop')`,
            filter: "contrast(140%) grayscale(20%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-[#171717]/90 to-black/40" />
      </div>

      {/* Right Curtain with Wood Veneer Texture */}
      <div
        ref={rightCurtainRef}
        className="relative w-1/2 h-full bg-[#171717] border-l border-[#8B6A4D]/20 overflow-hidden shadow-2xl"
      >
        <div
          className="absolute inset-0 opacity-25 bg-cover bg-center scale-x-[-1]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1546484475-7f7bd55792da?q=85&w=1200&auto=format&fit=crop')`,
            filter: "contrast(140%) grayscale(20%)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-[#171717]/90 to-black/40" />
      </div>

      {/* Center Cinematic Content */}
      <div
        ref={contentRef}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
      >
        <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#8B6A4D] mb-4">
          Architectural Materiality
        </span>

        <h1 className="font-serif-editorial text-5xl sm:text-7xl lg:text-8xl italic text-[#F7F5F2] tracking-tight mb-6">
          HYLY
        </h1>

        <p className="text-xs sm:text-sm font-light text-[#D6D3CD] max-w-xs sm:max-w-sm tracking-wide leading-relaxed mb-8">
          The Poetry of Wood. The Precision of Architecture.
        </p>

        {/* Counter & Progress bar */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-32 h-0.5 bg-white/10 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-[#8B6A4D] animate-pulse" />
          </div>
          <span
            ref={counterRef}
            className="text-xs font-mono text-[#8B6A4D] tracking-widest mt-2"
          >
            00
          </span>
        </div>

        {/* Skip button */}
        <button
          onClick={handleSkip}
          className="absolute bottom-8 right-8 text-[11px] font-mono uppercase tracking-widest text-[#D6D3CD]/70 hover:text-white transition-colors cursor-pointer"
        >
          Skip Intro →
        </button>
      </div>
    </div>
  );
}
