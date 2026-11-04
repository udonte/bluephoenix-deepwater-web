"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  SERVICES,
  SERVICE_CATEGORIES,
  type ServiceCategory,
} from "@/lib/data";

interface ServicesGalleryProps {
  mode?: "home" | "full";
}

export function ServicesGallery({ mode = "full" }: ServicesGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<
    ServiceCategory | "all"
  >("all");

  const baseServices =
    mode === "home" && selectedCategory === "all"
      ? SERVICES.filter((s) => Boolean(s.homeCardImage))
      : SERVICES;

  const filteredServices =
    selectedCategory === "all"
      ? baseServices
      : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div>
      {/* Authentic Architectural Filter Navigation (replicating .portfolio-filter) */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-14 border-b border-neutral-200 pb-4">
        {SERVICE_CATEGORIES.map((cat) => {
          const active = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`relative pb-3 text-xs sm:text-sm font-display font-bold uppercase tracking-[0.22em] transition-colors cursor-pointer ${
                active
                  ? "text-black"
                  : "text-neutral-400 hover:text-neutral-800"
              }`}
            >
              <span>{cat.shortLabel}</span>
              <span
                className={`absolute left-0 right-0 -bottom-[17px] h-[3px] bg-black transition-transform duration-300 origin-left ${
                  active ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Frameless Editorial Photography Grid (Replicating .photography-services) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {filteredServices.map((service, idx) => {
          const imgSrc =
            mode === "home" && service.homeCardImage
              ? service.homeCardImage
              : service.cardImage;

          return (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-white"
            >
              {/* High-Resolution Photograph with Curtain Hover */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <Image
                  src={imgSrc}
                  alt={service.title}
                  fill
                  quality={90}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={idx < 3}
                  className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-108"
                />
                {/* Subtle Dark Curtain on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-end p-6">
                  <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-white opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Inspect Specification &rarr;
                  </span>
                </div>

                {/* Index Number Tag */}
                <span className="absolute top-3 right-3 px-2 py-0.5 bg-black/75 text-white font-mono text-[10px] tracking-widest">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Authentic Caption Block from home.html / our-services.html */}
              <div className="pt-5 pb-2 text-center sm:text-left">
                <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-neutral-500">
                  {service.categoryLabel}
                </p>
                <h3 className="mt-1.5 text-xl sm:text-2xl font-display font-bold uppercase tracking-[0.06em] text-neutral-950 group-hover:text-[#3273a5] transition-colors leading-tight">
                  {service.title}
                </h3>
                {/* Signature thick fast-orange bar (#ff513b) that expands on hover */}
                <div className="mt-4 h-[4px] w-16 bg-[#ff513b] mx-auto sm:mx-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
