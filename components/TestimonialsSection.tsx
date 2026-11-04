"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { TESTIMONIALS, CERTIFICATIONS_BAR } from "@/lib/data";

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS[activeIdx];

  return (
    <>
      {/* Editorial Centered Testimonial Slider (Replicating .testimonial-style2 on home.html) */}
      <section className="relative py-28 overflow-hidden bg-black select-none">
        <Image
          src="/images/bpm-images/testimonial-bg.png"
          alt="Blue Phoenix Marine Testimonials"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#252525]/75" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex justify-center mb-8">
            <Image
              src="/images/bpm-images/testimonial-icon.png"
              alt="Quote"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>

          <div className="min-h-[150px] flex flex-col items-center justify-center">
            <p
              key={current.company}
              className="text-base sm:text-lg md:text-xl text-white leading-relaxed font-normal animate-[fadeIn_0.5s_ease-out]"
            >
              {current.quote}
            </p>

            <div className="mt-8">
              <span className="block text-base font-display font-bold uppercase tracking-[0.22em] text-white">
                {current.company}
              </span>
              <div className="w-8 h-[2px] bg-[#e6af2a] mx-auto mt-2.5" />
            </div>
          </div>

          {/* Square Pagination Controls */}
          <div className="mt-10 flex items-center justify-center gap-3">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.company}
                type="button"
                aria-label={`Show testimonial from ${item.company}`}
                onClick={() => setActiveIdx(idx)}
                className={`w-3 h-3 border transition-all cursor-pointer ${
                  idx === activeIdx
                    ? "bg-white border-white"
                    : "bg-transparent border-white/50 hover:border-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Partner Logos Bar (Replicating #approach on home.html) */}
      <section className="bg-black py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
            {CERTIFICATIONS_BAR.map((badge, idx) => (
              <div
                key={badge.image + idx}
                className="flex flex-col items-center justify-center text-center group"
              >
                <div className="relative h-20 w-36 mb-4 transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src={badge.image}
                    alt={badge.label}
                    fill
                    quality={90}
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
                <h5 className="text-xs font-display font-bold uppercase tracking-[0.25em] text-white">
                  {badge.label}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
