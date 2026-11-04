import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EXECUTIVE_TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our People | Executive Leadership & Subsea Specialists",
  description:
    "Meet the executive team driving Blue Phoenix Marine's global underwater engineering, shipping, and offshore logistics operations.",
};

export default function PeoplePage() {
  return (
    <div className="bg-white text-black">
      <PageHero
        title="Our People"
        subtitle="BLUE PHOENIX MARINE"
        backgroundImage="/images/bpm-images/main-header-controls.png"
        breadcrumbs={[{ label: "Our People" }]}
      />

      {/* Culture & Workforce Philosophy (from people.html) */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <Reveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Our People
          </h2>
          <div className="w-16 h-[3px] bg-[#3273a5] mx-auto my-6" />
          <div className="space-y-5 text-base sm:text-lg text-neutral-600 leading-relaxed">
            <p>
              We recognise that our people are our most important resource. They
              are at the heart of our ambition to be the most competitive and
              innovative in our sector. Competent employees are a prerequisite
              for the success and quality of our services both ashore and
              offshore.
            </p>
            <p>
              We believe in diversity and inclusion in our workforce. This helps
              us better understand our business partners, clients and everyone
              we work with.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Our Executive Team (Replicating .key-person on people.html) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
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
            Our Executive Team
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
            With extensive knowledge and vast experience, our executive team are
            the driving force that propels this company forward.
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          {EXECUTIVE_TEAM.map((person) => (
            <Reveal
              key={person.slug}
              className="grid grid-cols-1 md:grid-cols-12 border border-neutral-200 bg-white shadow-xl"
            >
              <Link
                href={`/people/${person.slug}`}
                className="relative min-h-[420px] md:col-span-5 bg-neutral-900 block group overflow-hidden"
              >
                <Image
                  src={person.portraitImage}
                  alt={person.name}
                  fill
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </Link>

              <div className="md:col-span-7 p-8 sm:p-14 flex flex-col justify-center">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
                  01 // EXECUTIVE LEADERSHIP
                </span>
                <h3 className="mt-2 text-3xl sm:text-4xl font-display font-bold uppercase tracking-[0.08em] text-black">
                  {person.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#3273a5]">
                  {person.role}
                </p>
                {/* Signature yellow separator line (.separator-line.bg-yellow) */}
                <div className="w-12 h-[3px] bg-[#e6af2a] my-5" />

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed text-justify">
                  {person.shortBio}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href={`/people/${person.slug}`}
                    className="btn-sharp-black px-7 py-3 text-xs font-display font-bold uppercase tracking-[0.22em]"
                  >
                    View Full Profile &rarr;
                  </Link>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 border border-neutral-300 hover:border-black text-xs font-mono uppercase tracking-widest text-neutral-700 hover:text-black transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${person.email}`}
                    className="px-5 py-3 border border-neutral-300 hover:border-black text-xs font-mono uppercase tracking-widest text-neutral-700 hover:text-black transition-colors"
                  >
                    Email
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
