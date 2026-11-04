import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { EQUIPMENT_ITEMS, getEquipmentBySlug } from "@/lib/data";

export function generateStaticParams() {
  return EQUIPMENT_ITEMS.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/equipment/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = getEquipmentBySlug(slug);
  if (!item) {
    return { title: "Equipment Not Found" };
  }
  return {
    title: `${item.title} | Technical Specifications`,
    description: item.summary,
  };
}

function EquipmentDetailSkeleton() {
  return (
    <div className="bg-white text-black">
      <div className="h-[440px] sm:h-[490px] lg:h-[540px] w-full bg-neutral-900 animate-pulse" />
      <div className="py-16 bg-white text-center">
        <div className="mx-auto h-10 w-72 bg-neutral-200 animate-pulse" />
      </div>
    </div>
  );
}

async function CachedEquipmentContent({ slug }: { slug: string }) {
  "use cache";
  const item = getEquipmentBySlug(slug);

  if (!item) {
    notFound();
  }

  const prevItem = getEquipmentBySlug(item.prevSlug) || EQUIPMENT_ITEMS[0];
  const nextItem = getEquipmentBySlug(item.nextSlug) || EQUIPMENT_ITEMS[0];

  return (
    <div className="bg-white text-black">
      <PageHero
        title={item.title}
        subtitle={item.subtitle}
        backgroundImage={item.heroImage}
        breadcrumbs={[
          { label: "Equipment", href: "/equipment" },
          { label: item.title },
        ]}
      />

      {/* Section Title Emblem Header */}
      <section className="pt-16 pb-6 bg-white text-center">
        <Reveal className="max-w-4xl mx-auto px-4">
          <div className="inline-flex justify-center mb-3">
            <Image
              src="/images/bpm-images/icon-logo.png"
              alt="Blue Phoenix Marine"
              width={52}
              height={52}
              className="object-contain"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold uppercase tracking-[0.1em] text-black">
            {item.title}
          </h2>
        </Reveal>
      </section>

      {/* Main Equipment Detail & Specifications (Replicating original split layout) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
          {/* Left Column: Narrative & Specifications Table */}
          <Reveal direction="left" className="lg:col-span-6 space-y-8">
            <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed text-justify">
              {item.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Sharp Technical Specifications Table */}
            <div className="border border-neutral-300 bg-neutral-50">
              <div className="px-6 py-4 bg-[#252525] text-white flex items-center justify-between">
                <h3 className="text-sm font-display font-bold uppercase tracking-[0.22em]">
                  Specifications
                </h3>
                <span className="text-[11px] font-mono text-[#e6af2a]">
                  IMCA / CLASS APPROVED
                </span>
              </div>
              <dl className="divide-y divide-neutral-200">
                {item.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="px-6 py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 text-xs sm:text-sm"
                  >
                    <dt className="sm:col-span-5 font-mono uppercase tracking-wider text-neutral-500">
                      {spec.label}
                    </dt>
                    <dd className="sm:col-span-7 text-black font-semibold">
                      {spec.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-sharp-black px-8 py-3.5 text-xs font-display font-bold uppercase tracking-[0.22em]"
              >
                Enquire About This Equipment
              </Link>
            </div>
          </Reveal>

          {/* Right Column: High-Resolution Equipment Photography Gallery */}
          <Reveal direction="right" className="lg:col-span-6 space-y-6">
            {item.images.map((imgSrc, idx) => (
              <div
                key={imgSrc}
                className="relative bg-neutral-900 border border-neutral-200 shadow-lg aspect-[4/3] overflow-hidden"
              >
                <Image
                  src={imgSrc}
                  alt={`${item.title} - View ${idx + 1}`}
                  fill
                  quality={95}
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute bottom-0 right-0 px-3.5 py-1.5 bg-black/80 text-[10px] font-mono uppercase tracking-[0.2em] text-white">
                  {item.title}{" "}
                  {item.images.length > 1
                    ? `[0${idx + 1}/0${item.images.length}]`
                    : ""}
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Prev / Home / Next Navigation Bar (.next-previous-project-style2) */}
      <div className="grid grid-cols-3 bg-black text-white font-display font-bold uppercase tracking-[0.22em] text-xs border-t border-white/15">
        <Link
          href={`/equipment/${prevItem.slug}`}
          className="py-7 px-4 flex items-center justify-center gap-3 hover:bg-[#3273a5] transition-colors border-r border-white/15 text-center"
        >
          <span>&larr;</span>
          <span>Prev Equipment</span>
        </Link>

        <Link
          href="/equipment"
          className="py-7 px-4 flex items-center justify-center gap-3 hover:bg-[#3273a5] transition-colors border-r border-white/15 text-center"
        >
          <span>All Equipment</span>
        </Link>

        <Link
          href={`/equipment/${nextItem.slug}`}
          className="py-7 px-4 flex items-center justify-center gap-3 hover:bg-[#3273a5] transition-colors text-center"
        >
          <span>Next Equipment</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

async function EquipmentDetailResolver({
  params,
}: Pick<PageProps<"/equipment/[slug]">, "params">) {
  const { slug } = await params;
  return <CachedEquipmentContent slug={slug} />;
}

export default function EquipmentDetailPage(
  props: PageProps<"/equipment/[slug]">
) {
  return (
    <Suspense fallback={<EquipmentDetailSkeleton />}>
      <EquipmentDetailResolver params={props.params} />
    </Suspense>
  );
}
