import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { ServicesGallery } from "@/components/ServicesGallery";
import { Reveal } from "@/components/Reveal";
import { SERVICES_OVERVIEW } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Services | Underwater Ship IRM, Offshore & Marine Support",
  description:
    "Explore all 22 specialized marine and subsea services offered by Blue Phoenix Marine, including hull cleaning, propeller polishing, class-approved underwater welding, and offshore terminal maintenance.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-black">
      <PageHero
        title="Our Services"
        subtitle="BLUE PHOENIX MARINE"
        backgroundImage="/images/bpm-images/main-header-diver.png"
        secondaryImages={[
          "/images/bpm-images/underwater-header.png",
          "/images/bpm-images/offshore-header.png",
          "/images/bpm-images/shipping-header.png",
        ]}
        breadcrumbs={[{ label: "Our Services" }]}
      />

      {/* Underwater Ship IRM Services and Support Overview (from our-services.html) */}
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
            {SERVICES_OVERVIEW.title}
          </h2>
          <div className="w-16 h-[3px] bg-[#3273a5] mx-auto my-6" />

          <div className="space-y-5 text-sm sm:text-base text-neutral-600 leading-relaxed text-justify">
            {SERVICES_OVERVIEW.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Complete 22-Service Frameless Editorial Directory */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            All Services
          </h2>
        </Reveal>

        <ServicesGallery mode="full" />
      </section>

      {/* Bottom Enquiry CTA */}
      <section className="py-20 bg-black text-white text-center">
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
