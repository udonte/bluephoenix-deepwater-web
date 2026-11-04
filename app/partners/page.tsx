import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { PARTNERS_DATA, CERTIFICATIONS_BAR } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Partners | UMC International & Subtech Group",
  description:
    "Blue Phoenix Marine partners with global leaders UMC International and Subtech Group to deliver class-approved underwater engineering and marine construction across West Africa.",
};

export default function PartnersPage() {
  return (
    <div className="bg-white text-black">
      <PageHero
        title="Our Partners"
        subtitle="BLUE PHOENIX MARINE"
        backgroundImage="/images/bpm-images/main-header-ship.png"
        breadcrumbs={[{ label: "Partners" }]}
      />

      {/* Intro Section */}
      <section className="py-24 bg-white border-b border-neutral-200">
        <Reveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex justify-center mb-4">
            <Image
              src="/images/icon-logo-1.png"
              alt="Blue Phoenix Marine"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-[0.1em] text-black">
            Strategic Technical Alliances
          </h2>
          <div className="w-16 h-[3px] bg-[#3273a5] mx-auto my-6" />
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Working with an international client base requires a network of
            reliable and trustworthy partners. Through tested technical
            alliances with global industry majors in underwater technologies,
            terminal operations, offshore supply, and salvage, Blue Phoenix
            Marine delivers world-class execution across every project.
          </p>
        </Reveal>
      </section>

      {/* Partner Profiles (UMC International & Subtech Group) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {PARTNERS_DATA.map((partner, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <Reveal
              key={partner.id}
              direction={isEven ? "left" : "right"}
              className="grid grid-cols-1 lg:grid-cols-12 border border-neutral-200 bg-white shadow-xl"
            >
              {/* Partner Logo Showcase */}
              <div
                className={`relative min-h-[300px] sm:min-h-[380px] lg:col-span-5 bg-neutral-50 border-b lg:border-b-0 ${
                  isEven
                    ? "lg:order-1 lg:border-r border-neutral-200"
                    : "lg:order-2 lg:border-l border-neutral-200"
                } flex items-center justify-center p-10`}
              >
                <div className="relative w-full h-56 sm:h-64">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    quality={95}
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain object-center"
                  />
                </div>
              </div>

              {/* Partner Details */}
              <div
                className={`lg:col-span-7 p-8 sm:p-14 flex flex-col justify-center ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#3273a5]">
                  0{idx + 1} // ALLIANCE PARTNER
                </span>
                <h3 className="mt-2 text-3xl sm:text-4xl font-display font-bold uppercase tracking-[0.08em] text-black">
                  {partner.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-display font-semibold uppercase tracking-[0.16em] text-neutral-500">
                  {partner.subtitle}
                </p>
                <div className="w-12 h-[3px] bg-[#e6af2a] my-5" />

                <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed text-justify">
                  {partner.paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <ul className="mt-8 pt-6 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {partner.highlights.map((hl, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800"
                    >
                      <span className="w-1.5 h-1.5 bg-[#ff513b] mt-2 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </section>

      {/* Certifications & Accreditations Strip (#approach) */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
            {CERTIFICATIONS_BAR.map((badge, idx) => (
              <div
                key={badge.image + idx}
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="relative h-20 w-36 mb-4">
                  <Image
                    src={badge.image}
                    alt={badge.label}
                    fill
                    quality={90}
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
                <span className="text-xs font-display font-bold uppercase tracking-[0.25em] text-white">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Enquiry CTA */}
      <section className="py-20 bg-white text-black text-center border-t border-neutral-200">
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
