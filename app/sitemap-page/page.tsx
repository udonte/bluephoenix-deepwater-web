import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SERVICES, EQUIPMENT_ITEMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sitemap | Complete Directory of Pages & Services",
  description:
    "Complete directory of Blue Phoenix Marine pages, 23 commercial diving & offshore services, and 7 specialised underwater equipment units.",
};

export default function SitemapPage() {
  const underwater = SERVICES.filter((s) => s.category === "underwater");
  const shipping = SERVICES.filter((s) => s.category === "shipping");
  const offshore = SERVICES.filter((s) => s.category === "offshore");
  const other = SERVICES.filter((s) => s.category === "other");

  return (
    <>
      <PageHero
        title="SITEMAP"
        subtitle="Complete Directory of Pages & Services"
        backgroundImage="/images/bpm-images/main-headers-logo.png"
      />

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Column 1: Main Pages */}
            <div>
              <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-black">
                Corporate Pages
              </p>
              <div className="mt-2 mb-6 h-[3px] w-8 bg-[#ff513b]" />
              <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200 text-sm">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Services Overview", href: "/services" },
                  { label: "Equipment Fleet", href: "/equipment" },
                  { label: "Locations", href: "/locations" },
                  { label: "Partners", href: "/partners" },
                  { label: "Our People", href: "/people" },
                  { label: "Executive Profile — Ade Ladele", href: "/people/ade-ladele" },
                  { label: "HSEQ & ISO 9001:2015", href: "/hseq" },
                  { label: "Contact Us", href: "/contact" },
                  { label: "Legal & Privacy Notice", href: "/legal" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-3 font-medium text-[#626262] transition-colors hover:text-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Equipment + Other Services + Shipping */}
            <div className="space-y-10">
              <div>
                <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-black">
                  Equipment
                </p>
                <div className="mt-2 mb-6 h-[3px] w-8 bg-[#ff513b]" />
                <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200 text-sm">
                  {EQUIPMENT_ITEMS.map((eq) => (
                    <li key={eq.slug}>
                      <Link
                        href={`/equipment/${eq.slug}`}
                        className="block py-3 font-medium text-[#626262] transition-colors hover:text-black"
                      >
                        {eq.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-black">
                  Other Services
                </p>
                <div className="mt-2 mb-6 h-[3px] w-8 bg-[#ff513b]" />
                <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200 text-sm">
                  {other.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block py-3 font-medium text-[#626262] transition-colors hover:text-black"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-black">
                  Shipping &amp; Marine Support
                </p>
                <div className="mt-2 mb-6 h-[3px] w-8 bg-[#ff513b]" />
                <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200 text-sm">
                  {shipping.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block py-3 font-medium text-[#626262] transition-colors hover:text-black"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 3: Underwater Services + Offshore */}
            <div className="space-y-10">
              <div>
                <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-black">
                  Underwater Services
                </p>
                <div className="mt-2 mb-6 h-[3px] w-8 bg-[#ff513b]" />
                <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200 text-sm">
                  {underwater.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block py-3 font-medium text-[#626262] transition-colors hover:text-black"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="font-display text-xl font-bold uppercase tracking-[0.06em] text-black">
                  Offshore
                </p>
                <div className="mt-2 mb-6 h-[3px] w-8 bg-[#ff513b]" />
                <ul className="divide-y divide-neutral-200 border-t border-b border-neutral-200 text-sm">
                  {offshore.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="block py-3 font-medium text-[#626262] transition-colors hover:text-black"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
