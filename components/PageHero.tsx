"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  badge?: string;
  backgroundImage: string;
  secondaryImages?: string[];
  breadcrumbs?: { label: string; href?: string }[];
}

export function PageHero({
  title,
  subtitle = "BLUE PHOENIX MARINE",
  badge = "WORLD CLASS SERVICES",
  backgroundImage,
  secondaryImages = ["/images/bpm-images/main-headers-logo.png"],
  breadcrumbs,
}: PageHeroProps) {
  const allSlides = [backgroundImage, ...secondaryImages].filter(
    (v, i, a) => Boolean(v) && a.indexOf(v) === i
  );
  const [activeSlide, setActiveSlide] = useState(0);

  // Automatic subtle slide crossfade like the original Owl corporate slider
  useEffect(() => {
    if (allSlides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % allSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [allSlides.length]);

  return (
    <section className="relative h-[440px] sm:h-[490px] lg:h-[540px] w-full overflow-hidden bg-black select-none">
      {/* Background Slides using Next.js Image */}
      {allSlides.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            idx === activeSlide
              ? "opacity-100 scale-100 z-0"
              : "opacity-0 scale-105 -z-10"
          }`}
        >
          <Image
            src={src}
            alt={title}
            fill
            priority={idx === 0}
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-12">
        {badge && (
          <span className="inline-block px-4 py-1.5 mb-5 bg-[#e75e50] text-white text-[11px] font-display font-bold uppercase tracking-[0.42em]">
            {badge}
          </span>
        )}

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-[0.06em] text-white max-w-5xl leading-[1.04]">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-xs sm:text-sm font-mono uppercase tracking-[0.28em] text-neutral-300">
            {subtitle}
          </p>
        )}

        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="mt-6 flex items-center flex-wrap justify-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-neutral-400"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={crumb.label + idx}>
                <span className="text-neutral-600">/</span>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}
      </div>

      {/* Original Square Pagination Indicators */}
      {allSlides.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {allSlides.map((slide, idx) => (
            <button
              key={slide}
              type="button"
              aria-label={`Show banner slide ${idx + 1}`}
              onClick={() => setActiveSlide(idx)}
              className={`w-2.5 h-2.5 border transition-all duration-300 cursor-pointer ${
                idx === activeSlide
                  ? "bg-white border-white scale-110"
                  : "bg-transparent border-white/60 hover:border-white"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
