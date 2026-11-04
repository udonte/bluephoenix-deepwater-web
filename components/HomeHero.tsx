"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_INFO } from "@/lib/data";

export function HomeHero() {
  const phrases = COMPANY_INFO.heroRotatingPhrases;
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [videoMode, setVideoMode] = useState<"hull" | "phoenix">("hull");

  // Authentic letter-by-letter typewriter state machine (replicating cd-headline letters type)
  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    const typingSpeed = isDeleting ? 38 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentPhrase) {
        // Pause at full phrase before deleting
        setTimeout(() => setIsDeleting(true), 2100);
        return;
      }

      if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
        return;
      }

      const nextText = isDeleting
        ? currentPhrase.slice(0, displayedText.length - 1)
        : currentPhrase.slice(0, displayedText.length + 1);

      setDisplayedText(nextText);
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, phraseIdx, phrases]);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-black select-none">
      {/* High-Resolution Poster Image for instant LCP */}
      <div className="absolute inset-0 z-0">
        <Image
          src={
            videoMode === "hull"
              ? "/images/imgur/ku20DqM.png"
              : "/images/bpm-images/index-header.png"
          }
          alt="Blue Phoenix Marine Subsea Operations"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Full-Bleed HTML5 Background Video */}
      <video
        key={videoMode}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={
          videoMode === "hull"
            ? "/images/imgur/ku20DqM.png"
            : "/images/bpm-images/index-header.png"
        }
        className="absolute inset-0 z-0 w-full h-full object-cover"
      >
        <source
          src={
            videoMode === "hull"
              ? "/video/hull_cleaning.mp4"
              : "/video/Phoenix_Reveal.mp4"
          }
          type="video/mp4"
        />
      </video>

      {/* Subtle Cinematic Vignette (Keeping video crystal clear like original site) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/25 to-black/50" />

      {/* Architectural Grid Hairlines */}
      <div className="absolute inset-x-0 bottom-20 z-10 h-px bg-white/15 pointer-events-none" />

      {/* Main Typography Layer (Positioned at lower-middle like slider-text-bottom slider-text-middle3) */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-28 sm:pb-32">
        <div className="max-w-4xl">
          {/* Technical Telemetry Bar */}
          <div className="flex flex-wrap items-center gap-4 mb-5 text-[11px] font-mono uppercase tracking-[0.25em] text-white/80">
            <span className="px-2.5 py-1 bg-[#e75e50] text-white font-semibold tracking-[0.3em]">
              IMCA / IACS AUDITED
            </span>
            <span className="hidden sm:inline text-white/40">|</span>
            <span className="hidden sm:inline">
              51.6929&deg; N, 0.1751&deg; W &mdash; 06.4474&deg; N, 3.3903&deg; E
            </span>
          </div>

          {/* Character-by-Character Typewriter Headline */}
          <h1 className="min-h-[64px] sm:min-h-[84px] md:min-h-[104px] flex items-center text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-display font-bold uppercase tracking-[0.04em] text-white leading-none drop-shadow-md">
            <span>{displayedText}</span>
            <span
              aria-hidden="true"
              className="inline-block w-[3px] sm:w-[4px] h-[0.85em] bg-[#ff513b] ml-2 animate-cursor-blink"
            />
          </h1>

          {/* Action Buttons & Reel Switcher */}
          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/20">
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="btn-sharp-white px-7 py-3.5 text-xs font-display font-semibold uppercase tracking-[0.25em]"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-[#3273a5] hover:bg-[#285e89] text-white border-2 border-[#3273a5] text-xs font-display font-semibold uppercase tracking-[0.25em] transition-colors"
              >
                24/7 Operations Desk
              </Link>
            </div>

            {/* Sharp Architectural Reel Toggle */}
            <div className="inline-flex items-center border border-white/25 bg-black/60 backdrop-blur-xs self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setVideoMode("hull")}
                className={`px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.18em] transition-colors cursor-pointer ${
                  videoMode === "hull"
                    ? "bg-white text-black font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                01 // Subsea Reel
              </button>
              <button
                type="button"
                onClick={() => setVideoMode("phoenix")}
                className={`px-4 py-2.5 text-[11px] font-mono uppercase tracking-[0.18em] border-l border-white/25 transition-colors cursor-pointer ${
                  videoMode === "phoenix"
                    ? "bg-white text-black font-semibold"
                    : "text-white/70 hover:text-white"
                }`}
              >
                02 // Phoenix Reveal
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator (Exact match to .scroll-down on home.html) */}
      <a
        href="#welcome"
        aria-label="Scroll down to welcome section"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-10 h-10 flex items-center justify-center text-white/80 hover:text-white transition-colors animate-float-down"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </a>
    </section>
  );
}
