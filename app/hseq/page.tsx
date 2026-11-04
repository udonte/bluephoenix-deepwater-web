import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { HSEQ_CONTENT } from "@/lib/data";

export const metadata: Metadata = {
  title: "HSEQ & ISO 9001:2015 Quality Policy",
  description:
    "Blue Phoenix Marine's commitment to Health, Safety, Equipment, and Quality (HSEQ) and our ISO 9001:2015 Quality Management System.",
};

export default function HseqPage() {
  return (
    <div className="bg-white text-black">
      <PageHero
        title="HSEQ"
        subtitle="BLUE PHOENIX MARINE"
        backgroundImage="/images/bpm-images/main-header-helmet.png"
        breadcrumbs={[{ label: "HSEQ" }]}
      />

      {/* Section 1: Our Commitment to HSEQ (from hseq.html) */}
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
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-[0.12em] text-black">
            {HSEQ_CONTENT.commitmentTitle}
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#3273a5]">
            {HSEQ_CONTENT.commitmentSubtitle}
          </p>
          <div className="w-16 h-[3px] bg-[#3273a5] mx-auto my-6" />

          <div className="space-y-5 text-sm sm:text-base text-neutral-700 leading-relaxed text-justify">
            {HSEQ_CONTENT.commitmentParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="mt-12 pt-10 border-t border-neutral-200">
            <p className="text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-6">
              We focus on the following aspects to improve our HSEQ performance:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {HSEQ_CONTENT.focusAreas.map((area, i) => (
                <div
                  key={area}
                  className="p-6 bg-[#f6f6f6] border-t-4 border-[#3273a5] text-left"
                >
                  <span className="font-mono text-xs text-neutral-400">
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 text-lg font-display font-bold uppercase tracking-[0.1em] text-black">
                    {area}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Section 2: Quality Policy (ISO 9001:2015 from hseq.html) */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Quality Policy
          </h2>
          <div className="w-16 h-[3px] bg-[#e6af2a] mx-auto my-6" />
        </Reveal>

        <Reveal>
          <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed text-justify mb-10">
            {HSEQ_CONTENT.qualityPolicyParagraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          <div className="border border-neutral-200 bg-[#f6f6f6] p-8 sm:p-12">
            <h3 className="text-xs font-mono uppercase tracking-[0.22em] text-[#3273a5] font-semibold mb-6">
              ISO 9001:2015 Quality Commitments:
            </h3>
            <ul className="space-y-4">
              {HSEQ_CONTENT.qualityCommitments.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 text-sm sm:text-base text-neutral-800"
                >
                  <span className="font-mono text-xs text-[#3273a5] font-bold pt-1 shrink-0">
                    0{idx + 1}.
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
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
