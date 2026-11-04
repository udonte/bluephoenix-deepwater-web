"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { SERVICES, EQUIPMENT_ITEMS, COMPANY_INFO } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "services" | "equipment" | null
  >(null);
  const [mobileAccordion, setMobileAccordion] = useState<
    "services" | "equipment" | null
  >(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const underwaterServices = SERVICES.filter((s) => s.category === "underwater");
  const offshoreServices = SERVICES.filter((s) => s.category === "offshore");
  const shippingServices = SERVICES.filter((s) => s.category === "shipping");
  const otherServices = SERVICES.filter((s) => s.category === "other");

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/15 py-2.5 shadow-2xl"
          : "bg-black/40 backdrop-blur-[2px] border-b border-white/10 py-4"
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Link
            href="/"
            onClick={() => {
              setMobileOpen(false);
              setActiveDropdown(null);
            }}
            className="relative flex items-center shrink-0"
          >
            <div className="relative h-11 w-44 sm:h-12 sm:w-52">
              <Image
                src="/images/nav-logo.png"
                alt="Blue Phoenix Marine"
                fill
                priority
                quality={95}
                sizes="208px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Architectural Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            <Link
              href="/"
              data-active={isActive("/")}
              onMouseEnter={() => setActiveDropdown(null)}
              className="nav-link-sweep py-1 text-[13px] font-display font-semibold tracking-[0.2em] uppercase text-white transition-colors"
            >
              Home
            </Link>

            <Link
              href="/about"
              data-active={isActive("/about")}
              onMouseEnter={() => setActiveDropdown(null)}
              className="nav-link-sweep py-1 text-[13px] font-display font-semibold tracking-[0.2em] uppercase text-white transition-colors"
            >
              About
            </Link>

            {/* Services Mega-Menu Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
            >
              <Link
                href="/services"
                data-active={
                  isActive("/services") || activeDropdown === "services"
                }
                onClick={() => setActiveDropdown(null)}
                className="nav-link-sweep inline-flex items-center gap-1.5 py-1 text-[13px] font-display font-semibold tracking-[0.2em] uppercase text-white"
              >
                <span>Services</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </div>

            {/* Equipment Dropdown Trigger */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("equipment")}
            >
              <Link
                href="/equipment"
                data-active={
                  isActive("/equipment") || activeDropdown === "equipment"
                }
                onClick={() => setActiveDropdown(null)}
                className="nav-link-sweep inline-flex items-center gap-1.5 py-1 text-[13px] font-display font-semibold tracking-[0.2em] uppercase text-white"
              >
                <span>Equipment</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${
                    activeDropdown === "equipment" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>

              {/* Sharp Architectural Equipment Dropdown */}
              {activeDropdown === "equipment" && (
                <div className="absolute left-0 top-full pt-4 w-72 z-50">
                  <div className="bg-[#141414] border border-white/20 shadow-2xl">
                    <div className="px-5 py-3 bg-[#1f1f1f] border-b border-white/15 flex items-center justify-between">
                      <span className="text-xs font-display uppercase tracking-[0.22em] text-white font-bold">
                        Equipment Line
                      </span>
                      <Link
                        href="/equipment"
                        onClick={() => setActiveDropdown(null)}
                        className="text-[10px] font-mono uppercase tracking-widest text-[#e6af2a] hover:underline"
                      >
                        ALL [07]
                      </Link>
                    </div>
                    <ul className="divide-y divide-white/10">
                      {EQUIPMENT_ITEMS.map((item, idx) => (
                        <li key={item.slug}>
                          <Link
                            href={`/equipment/${item.slug}`}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center justify-between px-5 py-3 text-xs text-neutral-300 hover:text-white hover:bg-[#3273a5] transition-colors group"
                          >
                            <span className="font-medium">{item.title}</span>
                            <span className="font-mono text-[10px] text-neutral-500 group-hover:text-white">
                              0{idx + 1}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/partners"
              data-active={isActive("/partners")}
              onMouseEnter={() => setActiveDropdown(null)}
              className="nav-link-sweep py-1 text-[13px] font-display font-semibold tracking-[0.2em] uppercase text-white transition-colors"
            >
              Partners
            </Link>

            <Link
              href="/people"
              data-active={isActive("/people")}
              onMouseEnter={() => setActiveDropdown(null)}
              className="nav-link-sweep py-1 text-[13px] font-display font-semibold tracking-[0.2em] uppercase text-white transition-colors"
            >
              People
            </Link>

            <Link
              href="/hseq"
              data-active={isActive("/hseq")}
              onMouseEnter={() => setActiveDropdown(null)}
              className="nav-link-sweep py-1 text-[13px] font-display font-semibold tracking-[0.2em] uppercase text-white transition-colors"
            >
              HSEQ
            </Link>

            <Link
              href="/locations"
              data-active={isActive("/locations")}
              onMouseEnter={() => setActiveDropdown(null)}
              className="nav-link-sweep py-1 text-[13px] font-display font-semibold tracking-[0.2em] uppercase text-white transition-colors"
            >
              Locations
            </Link>

            <Link
              href="/contact"
              onMouseEnter={() => setActiveDropdown(null)}
              className="btn-sharp-white px-5 py-2 text-xs font-display font-bold tracking-[0.22em] uppercase"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2.5 border border-white/25 text-white hover:bg-white hover:text-black transition-colors"
          >
            {mobileOpen ? (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Desktop Architectural Mega-Menu for Services (Replicating original 4-column sub-menu with sharp borders) */}
      {activeDropdown === "services" && (
        <div
          className="hidden lg:block w-full pt-4 z-50"
          onMouseEnter={() => setActiveDropdown("services")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#141414] border border-white/20 shadow-2xl">
              <div className="grid grid-cols-4 divide-x divide-white/10">
                {/* Col 1 & 2: Underwater Services */}
                <div className="col-span-2 p-7">
                  <div className="pb-3 mb-4 border-b border-white/15 flex items-center justify-between">
                    <span className="text-sm font-display font-bold uppercase tracking-[0.22em] text-white">
                      Underwater Services
                    </span>
                    <span className="text-[11px] font-mono text-[#3273a5]">
                      [13 UNITS]
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                    {underwaterServices.map((s, idx) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setActiveDropdown(null)}
                        className="py-1.5 text-xs text-neutral-300 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2.5 group"
                      >
                        <span className="font-mono text-[10px] text-neutral-500 group-hover:text-[#ff513b]">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="truncate">
                          {s.shortTitle || s.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Col 3: Offshore + Shipping & Marine Support */}
                <div className="p-7 space-y-6">
                  <div>
                    <div className="pb-3 mb-3 border-b border-white/15 flex items-center justify-between">
                      <span className="text-sm font-display font-bold uppercase tracking-[0.22em] text-white">
                        Offshore
                      </span>
                      <span className="text-[11px] font-mono text-[#e6af2a]">
                        [03]
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {offshoreServices.map((s, idx) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="py-1.5 text-xs text-neutral-300 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2.5 group"
                        >
                          <span className="font-mono text-[10px] text-neutral-500 group-hover:text-[#e6af2a]">
                            0{idx + 1}
                          </span>
                          <span className="truncate">
                            {s.shortTitle || s.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="pb-3 mb-3 border-b border-white/15 flex items-center justify-between">
                      <span className="text-sm font-display font-bold uppercase tracking-[0.22em] text-white">
                        Shipping &amp; Marine Support
                      </span>
                      <span className="text-[11px] font-mono text-[#3273a5]">
                        [02]
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {shippingServices.map((s, idx) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="py-1.5 text-xs text-neutral-300 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2.5 group"
                        >
                          <span className="font-mono text-[10px] text-neutral-500 group-hover:text-[#3273a5]">
                            0{idx + 1}
                          </span>
                          <span className="truncate">
                            {s.shortTitle || s.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Col 4: Other Services + All Services CTA */}
                <div className="p-7 flex flex-col justify-between bg-[#1a1a1a]">
                  <div>
                    <div className="pb-3 mb-3 border-b border-white/15 flex items-center justify-between">
                      <span className="text-sm font-display font-bold uppercase tracking-[0.22em] text-white">
                        Other Services
                      </span>
                      <span className="text-[11px] font-mono text-[#ff513b]">
                        [05]
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      {otherServices.map((s, idx) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          onClick={() => setActiveDropdown(null)}
                          className="py-1.5 text-xs text-neutral-300 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2.5 group"
                        >
                          <span className="font-mono text-[10px] text-neutral-500 group-hover:text-[#ff513b]">
                            0{idx + 1}
                          </span>
                          <span className="truncate">
                            {s.shortTitle || s.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/services"
                    onClick={() => setActiveDropdown(null)}
                    className="mt-6 w-full py-3 bg-[#3273a5] hover:bg-[#285e89] text-center text-xs font-display font-bold uppercase tracking-[0.22em] text-white transition-colors block"
                  >
                    All Services Directory &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0e0e0e] border-b border-white/20 max-h-[82vh] overflow-y-auto">
          <div className="px-4 py-4 divide-y divide-white/10">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
            >
              About
            </Link>

            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 py-3 text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion(
                      mobileAccordion === "services" ? null : "services"
                    )
                  }
                  className="p-3 text-white"
                >
                  {mobileAccordion === "services" ? "−" : "+"}
                </button>
              </div>
              {mobileAccordion === "services" && (
                <div className="pl-4 pb-3 space-y-2 border-l-2 border-[#3273a5]">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs text-neutral-300 hover:text-white"
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <Link
                  href="/equipment"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 py-3 text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
                >
                  Equipment
                </Link>
                <button
                  type="button"
                  onClick={() =>
                    setMobileAccordion(
                      mobileAccordion === "equipment" ? null : "equipment"
                    )
                  }
                  className="p-3 text-white"
                >
                  {mobileAccordion === "equipment" ? "−" : "+"}
                </button>
              </div>
              {mobileAccordion === "equipment" && (
                <div className="pl-4 pb-3 space-y-2 border-l-2 border-[#e6af2a]">
                  {EQUIPMENT_ITEMS.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/equipment/${item.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="block text-xs text-neutral-300 hover:text-white"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/partners"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
            >
              Partners
            </Link>
            <Link
              href="/people"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
            >
              People
            </Link>
            <Link
              href="/hseq"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
            >
              HSEQ
            </Link>
            <Link
              href="/locations"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm font-display font-bold uppercase tracking-[0.2em] text-white"
            >
              Locations
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center py-3 bg-[#3273a5] text-white text-xs font-display font-bold uppercase tracking-[0.22em]"
              >
                Contact Us
              </Link>
              <a
                href={COMPANY_INFO.phoneHref}
                className="w-full text-center py-2.5 border border-white/20 text-neutral-300 font-mono text-xs"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
