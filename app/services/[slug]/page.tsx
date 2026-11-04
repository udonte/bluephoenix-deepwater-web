import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import {
  SERVICES,
  getServiceBySlug,
  getAdjacentServices,
} from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata(
  props: PageProps<"/services/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Service Not Found" };
  }
  return {
    title: `${service.title} | ${service.categoryLabel}`,
    description: service.summary,
  };
}

function ServiceDetailSkeleton() {
  return (
    <div className="bg-white text-black">
      <div className="h-[440px] sm:h-[490px] lg:h-[540px] w-full bg-neutral-900 animate-pulse" />
      <div className="py-16 bg-white text-center">
        <div className="mx-auto h-10 w-72 bg-neutral-200 animate-pulse" />
      </div>
    </div>
  );
}

async function CachedServiceContent({ slug }: { slug: string }) {
  "use cache";
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const { prev, next } = getAdjacentServices(service.slug);

  return (
    <div className="bg-white text-black">
      <PageHero
        title={service.title}
        subtitle={service.categoryLabel}
        backgroundImage={service.heroImage}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      {/* Section Title Emblem Header (Exact match to original service pages) */}
      <section className="py-16 bg-white text-center">
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
            {service.title}
          </h2>
        </Reveal>
      </section>

      {/* Authentic Full-Bleed Overlapping Split Sections (.portfolio-short-description) */}
      <section className="space-y-12 pb-16">
        {service.sections.map((sec, idx) => {
          const isLeftBox = idx % 2 === 0;
          return (
            <div
              key={sec.heading + idx}
              className="relative w-full min-h-[540px] lg:min-h-[620px] flex items-center overflow-hidden bg-neutral-900"
            >
              {/* Full-Bleed Background Photograph */}
              <Image
                src={sec.image}
                alt={sec.heading}
                fill
                quality={95}
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/25" />

              {/* Overlapping Dark Charcoal Architectural Panel (pull-left / pull-right) */}
              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div
                  className={`w-full lg:w-[54%] ${
                    isLeftBox ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <Reveal direction={isLeftBox ? "left" : "right"}>
                    <figcaption className="bg-[#252525]/95 backdrop-blur-xs p-8 sm:p-12 lg:p-16 text-white shadow-2xl border-t-4 border-[#3273a5]">
                      <div className="mb-6">
                        <Image
                          src="/images/bpm-images/icon-logo.png"
                          alt="Blue Phoenix Marine"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>

                      <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-[0.18em] text-white mb-6">
                        {sec.heading}
                      </h3>

                      <div className="space-y-4 text-sm sm:text-[15px] text-neutral-300 leading-relaxed text-justify">
                        {sec.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>

                      {sec.bullets && sec.bullets.length > 0 && (
                        <ul className="mt-6 space-y-2.5 border-t border-white/15 pt-6">
                          {sec.bullets.map((bullet, bIdx) => (
                            <li
                              key={bIdx}
                              className="flex items-start gap-3 text-xs sm:text-sm text-neutral-200"
                            >
                              <span className="w-1.5 h-1.5 bg-[#ff513b] mt-2 shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-10">
                        <Link
                          href="/contact"
                          className="inline-block px-7 py-3 bg-white text-black hover:bg-[#3273a5] hover:text-white text-xs font-display font-bold uppercase tracking-[0.22em] transition-colors"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </figcaption>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Authentic Prev / Back / Next Service Bar (.next-previous-project-style2) */}
      <div className="grid grid-cols-3 bg-black text-white font-display font-bold uppercase tracking-[0.22em] text-xs border-t border-white/15">
        <Link
          href={`/services/${prev.slug}`}
          className="py-7 px-4 flex items-center justify-center gap-3 hover:bg-[#3273a5] transition-colors border-r border-white/15 text-center"
        >
          <span>&larr;</span>
          <span>Prev Service</span>
        </Link>

        <Link
          href="/services"
          className="py-7 px-4 flex items-center justify-center gap-3 hover:bg-[#3273a5] transition-colors border-r border-white/15 text-center"
        >
          <span>Back</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
          </svg>
        </Link>

        <Link
          href={`/services/${next.slug}`}
          className="py-7 px-4 flex items-center justify-center gap-3 hover:bg-[#3273a5] transition-colors text-center"
        >
          <span>Next Service</span>
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

async function ServiceDetailResolver({
  params,
}: Pick<PageProps<"/services/[slug]">, "params">) {
  const { slug } = await params;
  return <CachedServiceContent slug={slug} />;
}

export default function ServiceDetailPage(
  props: PageProps<"/services/[slug]">
) {
  return (
    <Suspense fallback={<ServiceDetailSkeleton />}>
      <ServiceDetailResolver params={props.params} />
    </Suspense>
  );
}
