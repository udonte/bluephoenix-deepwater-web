import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { EXECUTIVE_TEAM, COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Adetunji Ladele | Head of Global Operations",
  description:
    "Executive profile of Adetunji Ladele, Founding Director and Head of Global Operations at Blue Phoenix Marine.",
};

export default function AdeLadeleProfilePage() {
  const ade = EXECUTIVE_TEAM[0];

  return (
    <div className="bg-white text-black">
      {/* Executive Full-Screen Portrait Header (Replicating ade-ladele.html) */}
      <section className="relative h-[500px] sm:h-[600px] w-full overflow-hidden bg-neutral-900">
        <Image
          src={ade.bannerLeftImage}
          alt={ade.name}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/75 sm:bg-white/65" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center pt-12">
          <span className="w-12 h-12 border-2 border-black text-black font-display font-bold text-xl flex items-center justify-center mb-5">
            1
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold uppercase tracking-[0.08em] text-black">
            {ade.name}
          </h1>
          <p className="mt-3 text-xs sm:text-sm font-mono uppercase tracking-[0.28em] text-black font-semibold">
            {ade.role}
          </p>
        </div>
      </section>

      {/* Main Executive Biography (from ade-ladele.html) */}
      <section className="py-24 bg-white">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="block text-xs font-mono uppercase tracking-[0.28em] text-neutral-500">
            BLUE PHOENIX MARINE
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold uppercase tracking-[0.1em] text-black">
            {ade.name}
          </h2>
          <div className="w-14 h-[3px] bg-[#3273a5] mx-auto my-6" />

          <div className="space-y-6 text-sm sm:text-base text-neutral-700 leading-relaxed text-justify">
            {ade.fullBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
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

      {/* Key People Card Section (from #key-person on ade-ladele.html) */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h3 className="text-3xl font-display font-bold uppercase tracking-[0.12em] text-black">
              Key People
            </h3>
            <p className="mt-4 text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              We are a multi-discipline executive team with an extensive
              network, expertise and vast experience, allowing us to offer the
              perfect solution to respond to your needs.
            </p>
          </Reveal>

          <Reveal className="mt-14 max-w-xs mx-auto">
            <div className="border border-neutral-200 bg-white">
              <div className="relative h-80 w-full bg-neutral-900">
                <Image
                  src={ade.portraitImage}
                  alt={ade.name}
                  fill
                  quality={95}
                  sizes="320px"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 text-center">
                <span className="block text-lg font-display font-bold uppercase tracking-[0.12em] text-black">
                  {ade.name}
                </span>
                <span className="block text-xs font-mono uppercase tracking-[0.18em] text-neutral-500 mt-1">
                  {ade.role}
                </span>
                <div className="w-10 h-[3px] bg-[#e6af2a] mx-auto my-4" />
                <div className="flex items-center justify-center gap-4 text-xs font-mono uppercase">
                  <a
                    href={ade.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-[#3273a5]"
                  >
                    LinkedIn
                  </a>
                  <span className="text-neutral-300">|</span>
                  <a
                    href={`mailto:${ade.email}`}
                    className="text-black hover:text-[#3273a5]"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

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
