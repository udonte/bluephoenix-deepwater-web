import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { ServicesGallery } from "@/components/ServicesGallery";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Reveal } from "@/components/Reveal";
import {
  COMPANY_INFO,
  WHY_CHOOSE_US_HOME,
  LOCATIONS_DATA,
  EXECUTIVE_TEAM,
} from "@/lib/data";

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "droplets":
      return (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3.25c-4.5 5.25-7 8.5-7 12a7 7 0 1014 0c0-3.5-2.5-6.75-7-12z"
          />
        </svg>
      );
    case "anchor":
      return (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8V21m0 0c-4.97 0-9-3.582-9-8h3m6 8c4.97 0 9-3.582 9-8h-3m-6-5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-4 3h8"
          />
        </svg>
      );
    case "ship":
      return (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 17l2.5-6h13L21 17M5 11V6a1 1 0 011-1h12a1 1 0 011 1v5M2 20c2 0 3-1 5-1s3 1 5 1 3-1 5-1 3 1 5 1"
          />
        </svg>
      );
    case "wrench":
      return (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    case "handshake":
      return (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      );
    default:
      return (
        <svg
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
  }
}

export default function HomePage() {
  const ade = EXECUTIVE_TEAM[0];
  const orderedLocationIds = ["takoradi", "lagos", "uk", "accra", "lome"];
  const homeLocations = orderedLocationIds
    .map((id) => LOCATIONS_DATA.find((l) => l.id === id))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  return (
    <div className="bg-white">
      {/* 1. Full-Screen Video Hero with Character-by-Character Typewriter */}
      <HomeHero />

      {/* 2. Welcome & Core Pillars Banner (#welcome from home.html) */}
      <section id="welcome" className="pt-24 bg-white text-black">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-16">
          <div className="inline-flex justify-center mb-5">
            <Image
              src="/images/icon-logo-1.png"
              alt="Blue Phoenix Marine"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold uppercase tracking-[0.06em] text-black leading-tight">
            {COMPANY_INFO.tagline}
          </h2>
          <p className="mt-5 text-sm sm:text-base text-neutral-600">
            {COMPANY_INFO.subTagline}
          </p>
        </Reveal>

        {/* Marine Blue Pillar Strip (.bg-dark-blue) */}
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
      </section>

      {/* 3. Why Choose Us? (#features — Open Architectural Layout, No SaaS Boxes) */}
      <section
        id="features"
        className="py-24 bg-white text-black border-b border-neutral-200"
      >
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
              Why Choose Us?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14">
            {WHY_CHOOSE_US_HOME.map((feature, idx) => (
              <Reveal key={feature.title} delayMs={idx * 80}>
                <div className="flex items-start gap-6 group">
                  <div className="text-neutral-800 group-hover:text-[#3273a5] transition-colors shrink-0 pt-1">
                    <FeatureIcon type={feature.icon} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-display font-bold uppercase tracking-[0.12em] text-black">
                      {feature.title}
                    </h5>
                    <div className="w-8 h-[2px] bg-[#3273a5] my-3.5 transition-all duration-300 group-hover:w-16" />
                    <p className="text-sm text-neutral-600 leading-relaxed text-justify">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Services at a Glance (Frameless White Editorial Masonry Grid) */}
      <section className="pt-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <Reveal className="text-center mb-12">
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
              Our Services at a Glance
            </h2>
          </Reveal>

          <ServicesGallery mode="home" />
        </div>

        {/* Can we help with your needs? Marine Blue Strip */}
        <div className="bg-[#3273a5] py-16 px-4 text-center">
          <Reveal className="max-w-4xl mx-auto">
            <span className="block text-2xl sm:text-3xl font-display font-bold uppercase tracking-[0.18em] text-white">
              Can we help with your needs?
            </span>
            <span className="mt-2 block text-xs sm:text-sm font-display uppercase tracking-[0.22em] text-white/90">
              Let&apos;s have a discussion
            </span>
            <div className="mt-7">
              <Link
                href="/contact"
                className="btn-sharp-white px-8 py-3 text-xs font-display font-bold uppercase tracking-[0.24em]"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Our Locations (5-Column Full-Width Masonry with Inner Frame Border from home.html) */}
      <section className="pt-24 bg-white text-black">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
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
            Our Locations
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {homeLocations.map((loc) => (
            <Link
              key={loc.id}
              href="/locations"
              className="group relative h-80 sm:h-96 overflow-hidden block bg-black"
            >
              <Image
                src={loc.image}
                alt={loc.name}
                fill
                quality={90}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Dark overlay that lightens on hover */}
              <div className="absolute inset-0 bg-[#252525]/55 group-hover:bg-[#252525]/30 transition-colors duration-500" />
              {/* Authentic inner transparent border (.img-border-small) */}
              <div className="absolute inset-4 border border-white/30 group-hover:inset-3 group-hover:border-white/80 transition-all duration-500 pointer-events-none" />

              <div className="relative z-10 h-full flex items-center justify-center p-6 text-center">
                <span className="text-lg sm:text-xl font-display font-bold uppercase tracking-[0.42em] text-white">
                  {loc.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 6. Meet The Team (.case-study.bg-gray Full-Width Split from home.html) */}
      <section className="pt-20 bg-[#f6f6f6] text-black">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
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
            Meet The Team
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px] bg-[#f6f6f6] border-t border-neutral-200">
          {/* Left Full-Bleed Image (.fill) */}
          <div className="relative min-h-[360px] lg:min-h-full lg:col-span-6 bg-neutral-900">
            <Image
              src={ade.cardImage}
              alt={ade.name}
              fill
              quality={95}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right Case-Study Details (.case-study-details) */}
          <div className="lg:col-span-6 p-8 sm:p-14 lg:p-20 flex items-center">
            <Reveal
              direction="right"
              className="flex flex-col sm:flex-row items-start gap-6 sm:gap-10 max-w-xl"
            >
              <span className="text-5xl sm:text-6xl font-display font-light text-black tracking-wider sm:border-r sm:border-neutral-300 sm:pr-8 leading-none">
                01
              </span>
              <div>
                <p className="text-xl sm:text-2xl font-display font-bold uppercase tracking-[0.16em] text-black">
                  {ade.name}
                </p>
                <span className="mt-1 block text-xs font-mono uppercase tracking-[0.22em] text-neutral-500">
                  {ade.role}
                </span>
                <p className="mt-6 text-sm text-neutral-600 leading-relaxed text-justify">
                  {ade.shortBio}
                </p>
                <div className="mt-8">
                  <Link
                    href={`/people/${ade.slug}`}
                    className="btn-sharp-black px-6 py-2.5 text-xs font-display font-bold uppercase tracking-[0.22em]"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Testimonials & Certifications Bar */}
      <TestimonialsSection />

      {/* 8. Bottom New-Project Enquiry Section (#new-project from home.html) */}
      <section
        id="new-project"
        className="py-20 bg-white text-black text-center border-t border-neutral-200"
      >
        <Reveal className="max-w-3xl mx-auto px-4">
          <h5 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-[0.18em] text-black">
            What marine services do you need?
          </h5>
          <div className="mt-7">
            <Link
              href="/contact"
              className="btn-sharp-black px-9 py-3.5 text-xs font-display font-bold uppercase tracking-[0.24em]"
            >
              Enquire
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
