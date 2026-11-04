import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EQUIPMENT_ITEMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Subsea Equipment Line | Mini-Pamper, Brush Machines & Power Packs",
  description:
    "Explore Blue Phoenix Marine's specialized IMCA-audited underwater equipment: Mini-Pamper hull cleaning vehicle, Twin & Single Brush machines, WD80 & LD50 Hydraulic Power Packs, and Class-Approved Hull Aperture Blanks.",
};

export default function EquipmentPage() {
  return (
    <div className="bg-white text-black">
      <PageHero
        title="Subsea Equipment Line"
        subtitle="IMCA AUDITED & CLASS CERTIFIED TOOLING"
        backgroundImage="/images/bpm-images/main-headers.png"
        breadcrumbs={[{ label: "Equipment" }]}
      />

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-3xl mx-auto mb-20">
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
            Engineered for High-Output Subsea Performance
          </h2>
          <div className="w-16 h-[3px] bg-[#3273a5] mx-auto my-5" />
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            Every machine and power unit deployed by Blue Phoenix Marine is
            audited to IMCA standards and certified by Lloyd&apos;s Register or
            DNV, guaranteeing safe, non-destructive cleaning, polishing, and
            watertight blanking.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
          {EQUIPMENT_ITEMS.map((item, idx) => (
            <Reveal key={item.slug} delayMs={idx * 70}>
              <Link href={`/equipment/${item.slug}`} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border border-neutral-200">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    quality={90}
                    priority={idx < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 text-white font-mono text-[10px] tracking-widest">
                    0{idx + 1} // UNIT
                  </span>
                </div>

                <div className="pt-5">
                  <p className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#3273a5]">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-1 text-2xl font-display font-bold uppercase tracking-[0.06em] text-black group-hover:text-[#3273a5] transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-3 mb-3 h-[4px] w-14 bg-[#ff513b] transition-all duration-500 group-hover:w-full" />
                  <p className="text-sm text-neutral-600 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
