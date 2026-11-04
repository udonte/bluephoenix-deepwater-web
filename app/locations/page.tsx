import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { LocationsMap } from "@/components/LocationsMap";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Locations | UK, Nigeria, Ghana & Togo",
  description:
    "Blue Phoenix Marine maintains both local and international presence with our head office in the United Kingdom and regional support offices in Nigeria, Ghana, and Togo.",
};

export default function LocationsPage() {
  return (
    <>
      <PageHero
        title="LOCATIONS"
        subtitle="We have a Global Footprint"
        backgroundImage="/images/bpm-images/locations-header.png"
        badge="WORLD CLASS SERVICES"
      />

      {/* Intro Copy + Interactive World Map */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-[#626262] sm:text-xl">
              We maintain both local and International presence with our head office based in the
              United Kingdom and our regional support offices based in Nigeria and Ghana.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#626262] sm:text-xl">
              Our offices and marine operations bases across the West African region provide us with
              the valuable local knowledge we need to operate with maximum efficiency. This has
              proved especially important when conducting business with foreign ship owners and
              organisations operating in the West African region.
            </p>
          </Reveal>

          <div className="mt-14">
            <LocationsMap />
          </div>
        </div>
      </section>

      {/* Round the Clock Support Section (from locations.html) */}
      <section className="border-t border-neutral-200 bg-[#f6f6f6] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <div className="mx-auto mb-5 flex justify-center">
              <Image
                src="/images/bpm-images/icon-logo.png"
                alt="Blue Phoenix Marine"
                width={48}
                height={48}
                className="h-12 w-auto object-contain"
              />
            </div>
            <h2 className="font-display text-3xl font-bold uppercase tracking-[0.04em] text-black sm:text-4xl">
              Round the Clock Support
            </h2>
            <div className="mx-auto mt-4 mb-8 h-[3px] w-8 bg-[#ff513b]" />
            <p className="text-lg leading-relaxed text-[#626262] sm:text-xl">
              We pride ourselves in our ability to provide 24/7 continuous supply and support
              services. Exploration and production never stops in the offshore industry and neither
              do we. Our management systems enable us to deliver products and services to our
              customers, safely, quickly and seamlessly.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-[#626262] sm:text-xl">
              Our highly responsive management team understand the nature of the dynamic and
              constantly changing offshore industry. Our unconditional commitment to safety, people
              and the environment is the foundation upon which all our operations are based. This is
              reflected in our certification and accreditation and the company safety culture, which
              is applied in everything we do.
            </p>
          </Reveal>
        </div>
      </section>

      <TestimonialsSection />
    </>
  );
}
