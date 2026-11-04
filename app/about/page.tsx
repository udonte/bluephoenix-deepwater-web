import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { AboutTabs } from "@/components/AboutTabs";
import { Reveal } from "@/components/Reveal";
import { ABOUT_WHY_CHOOSE, COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Over 10 years of combined operations in Underwater Inspection, Repair & Maintenance (IRM) and Marine Logistics across the UK and West Africa.",
};

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      <PageHero
        title="About Us"
        subtitle="BLUE PHOENIX MARINE"
        backgroundImage="/images/bpm-images/about-header.png"
        secondaryImages={[
          "/images/bpm-images/about-header1.png",
          "/images/bpm-images/about-header2.png",
          "/images/bpm-images/about-header3.png",
          "/images/bpm-images/about-header8.png",
        ]}
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Video Showcase + Interactive 6-Tab Company Profile */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <Reveal direction="left" className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-3">
              <Image
                src="/images/icon-logo-1.png"
                alt="Blue Phoenix Marine"
                width={44}
                height={44}
                className="object-contain"
              />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#3273a5]">
                BLUE PHOENIX DEEPWATER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-[0.06em] text-black leading-tight">
              Over 10 Years of Combined Operations in Underwater &amp; Marine
              Services
            </h2>
            <div className="w-16 h-[3px] bg-[#3273a5]" />
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify">
              We carry out complex and bespoke Underwater Inspection, Repair
              &amp; Maintenance (IRM) and Marine Logistics Services across West
              Africa, backed by international operations support from the United
              Kingdom.
            </p>
          </Reveal>

          {/* Propeller Polish Subsea Video Showcase (from about.html) */}
          <Reveal direction="right" className="lg:col-span-6">
            <div className="relative overflow-hidden bg-black aspect-video border border-neutral-200 shadow-xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                poster="/images/bpm-images/propeller3.png"
                className="w-full h-full object-cover"
              >
                <source src="/video/propeller_polish.mp4" type="video/mp4" />
              </video>
            </div>
          </Reveal>
        </div>

        {/* Interactive 6-Tab Profile */}
        <AboutTabs />
      </section>

      {/* Why Choose Us 4-Column Section (from about.html) */}
      <section className="py-24 bg-[#f6f6f6] text-black border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20">
            <div className="inline-flex justify-center mb-4">
              <Image
                src="/images/icon-logo-1.png"
                alt="Blue Phoenix Marine"
                width={52}
                height={52}
                className="object-contain"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-[0.12em] text-black">
              Why Choose Us
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {ABOUT_WHY_CHOOSE.map((item, idx) => (
              <Reveal key={item.number} delayMs={idx * 90}>
                <div className="bg-white p-8 border-t-4 border-[#3273a5] shadow-xs h-full flex flex-col justify-between">
                  <div>
                    <span className="text-4xl font-display font-light text-neutral-400">
                      {item.number}
                    </span>
                    <h3 className="mt-4 text-xl font-display font-bold uppercase tracking-[0.1em] text-black">
                      {item.title}
                    </h3>
                    <div className="w-10 h-[3px] bg-[#e6af2a] my-4" />
                    <p className="text-sm text-neutral-600 leading-relaxed text-justify">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars Strip */}
      <div className="bg-[#3273a5] py-6 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs sm:text-sm font-display font-semibold uppercase tracking-[0.22em] text-white">
          {COMPANY_INFO.pillars.map((pillar, i) => (
            <React.Fragment key={pillar}>
              <span>{pillar}</span>
              {i < COMPANY_INFO.pillars.length - 1 && (
                <span className="text-white/50">/</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Bottom Enquiry CTA */}
      <section className="py-20 bg-black text-center">
        <Reveal className="max-w-3xl mx-auto px-4">
          <h5 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-[0.18em] text-white">
            What marine services do you need?
          </h5>
          <div className="mt-7">
            <Link
              href="/contact"
              className="btn-sharp-white px-9 py-3.5 text-xs font-display font-bold uppercase tracking-[0.24em]"
            >
              Enquire
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
