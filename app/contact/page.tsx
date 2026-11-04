import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contact Us | UK, Nigeria & Ghana Offices",
  description:
    "Contact Blue Phoenix Marine's head office in Hertfordshire, United Kingdom, or our regional marine operations offices in Lagos, Nigeria and Takoradi, Ghana.",
};

const REGIONAL_DESKS = [
  {
    title: "UK - Head Office",
    addressLine1: "201 Maple House, High Street",
    addressLine2: "Potters Bar, Hertfordshire, EN6 5BS.",
    phone: "+44(0) 20 3647 1441",
    email: "info@bluephoenixmarine.com",
    mapImage: "/images/bpm-images/uk-map.png",
    mapUrl:
      "https://www.google.com/maps/place/Maple+House,+High+St,+Potters+Bar+EN6+5BS,+UK",
  },
  {
    title: "Nigeria - Operations",
    addressLine1: "Marine Operations Base",
    addressLine2: "Lagos, Nigeria.",
    phone: "+234(0) 809 3933 213",
    email: "nigeria@bluephoenixmarine.com",
    mapImage: "/images/bpm-images/lagos-map.png",
    mapUrl: "https://www.google.com/maps/place/Lagos,+Nigeria",
  },
  {
    title: "Ghana - Operations",
    addressLine1: "Marine Operations Base",
    addressLine2: "Takoradi, Ghana.",
    phone: "+44(0) 20 3647 1441",
    email: "ghana@bluephoenixmarine.com",
    mapImage: "/images/bpm-images/takoradi-map.png",
    mapUrl: "https://www.google.com/maps/place/Takoradi,+Ghana",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="CONTACT US"
        subtitle="We provide 24/7 Services"
        backgroundImage="/images/bpm-images/contact-header.png"
        badge="WORLD CLASS SERVICES"
      />

      {/* 3-Column Office Cards (faithful to contact-us.html) */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {REGIONAL_DESKS.map((office, idx) => (
              <Reveal key={office.title} delayMs={idx * 120} className="group">
                {/* Map Image with overlaid sharp black "View Map" button */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border border-neutral-200 bg-neutral-100">
                  <Image
                    src={office.mapImage}
                    alt={office.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition-colors group-hover:bg-black/30">
                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#ff513b]"
                    >
                      View Map
                    </a>
                  </div>
                </div>

                {/* Office Details */}
                <div className="pt-6">
                  <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-black">
                    {office.title}
                  </p>
                  <div className="my-4 h-[1px] w-full bg-neutral-200" />
                  <p className="text-sm leading-relaxed text-[#626262]">
                    {office.addressLine1}
                    <br />
                    {office.addressLine2}
                  </p>
                  <div className="my-4 h-[1px] w-full bg-neutral-200" />
                  <div className="space-y-1 text-sm text-[#626262]">
                    <p>
                      <strong className="font-bold text-black">T.</strong>{" "}
                      <a
                        href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                        className="text-black transition-colors hover:text-[#3273a5]"
                      >
                        {office.phone}
                      </a>
                    </p>
                    <p>
                      <strong className="font-bold text-black">E.</strong>{" "}
                      <a
                        href={`mailto:${office.email}`}
                        className="text-black underline transition-colors hover:text-[#3273a5]"
                      >
                        {office.email}
                      </a>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form + 24/7 Operations Dispatch Section */}
      <section className="border-t border-neutral-200 bg-[#f6f6f6] py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <Reveal direction="left" className="lg:col-span-5">
              <div className="border border-neutral-200 bg-[#252525] p-8 text-white sm:p-10">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e6af2a]">
                  24/7/365 Emergency Response
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold uppercase tracking-[0.04em] text-white">
                  Rapid Mobilisation Across West Africa
                </h2>
                <div className="mt-4 mb-6 h-[3px] w-8 bg-[#ff513b]" />
                <p className="text-sm leading-relaxed text-white/80">
                  Exploration and production never stops in the offshore industry and neither do we.
                  Our dive teams, berthing masters, and marine logistics coordinators are on standby
                  for rapid deployment across Nigerian, Ghanaian, and Togolese waters.
                </p>

                <div className="mt-8 space-y-5 border-t border-white/15 pt-6 text-sm">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                      UK Head Office
                    </p>
                    <a
                      href="tel:+442036471441"
                      className="mt-1 block font-mono text-base font-bold text-[#e6af2a]"
                    >
                      +44(0) 20 3647 1441
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Nigeria Operations Hotline
                    </p>
                    <a
                      href="tel:+2348093933213"
                      className="mt-1 block font-mono text-base font-bold text-white hover:text-[#e6af2a]"
                    >
                      +234(0) 809 3933 213
                    </a>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                      Global Operations Desk
                    </p>
                    <a
                      href="mailto:info@bluephoenixmarine.com"
                      className="mt-1 block font-mono text-sm text-white underline hover:text-[#e6af2a]"
                    >
                      info@bluephoenixmarine.com
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" className="lg:col-span-7">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
