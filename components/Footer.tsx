"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { COMPANY_INFO } from "@/lib/data";

export function Footer() {
  const pathname = usePathname();
  const [clientPathname, setClientPathname] = useState("");

  useEffect(() => {
    setClientPathname(pathname);
  }, [pathname]);

  const isIntroPage = clientPathname === "/intro";
  const isComingSoon = clientPathname === "/coming-soon";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`relative bg-[#252525] text-neutral-300 ${
        isComingSoon ? "hidden" : ""
      }`}
    >
      {/* Classic White Footer-Top Strip (Hidden on /intro and /coming-soon to match original index.html opener) */}
      <div
        className={`bg-white text-black border-t border-neutral-200 ${
          isIntroPage ? "hidden" : "block"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {/* Phone */}
            <div className="flex flex-col items-center">
              <svg
                className="w-7 h-7 text-black mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <h6 className="text-xs sm:text-sm font-display font-bold uppercase tracking-[0.2em] text-black">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-[#3273a5] transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </h6>
            </div>

            {/* Address */}
            <div className="flex flex-col items-center">
              <svg
                className="w-7 h-7 text-black mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h6 className="text-xs sm:text-sm font-display font-bold uppercase tracking-[0.2em] text-black">
                {COMPANY_INFO.headquartersShort}
              </h6>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center">
              <svg
                className="w-7 h-7 text-black mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.4}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h6 className="text-xs sm:text-sm font-display font-bold uppercase tracking-[0.18em] text-black">
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#3273a5] transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Gray Footer-Bottom Bar (Exact match to .bg-dark-gray.footer-bottom) */}
      <div className="bg-[#252525] py-10 px-4">
        <div className="max-w-7xl mx-auto text-center text-xs tracking-[0.12em] text-neutral-400 leading-relaxed">
          <p>&copy; 2018–2026 Blue Phoenix Marine. All Rights Reserved.</p>
          <p className="mt-1.5 uppercase font-mono text-[11px] tracking-[0.2em]">
            <Link
              href="/sitemap-page"
              className="hover:text-white transition-colors"
            >
              sitemap
            </Link>{" "}
            <span className="mx-2 text-neutral-600">|</span>{" "}
            <Link href="/legal" className="hover:text-white transition-colors">
              legal
            </Link>{" "}
            <span className="mx-2 text-neutral-600">|</span>{" "}
            <Link
              href="/services"
              className="hover:text-white transition-colors"
            >
              services
            </Link>{" "}
            <span className="mx-2 text-neutral-600">|</span>{" "}
            <Link
              href="/contact"
              className="hover:text-white transition-colors"
            >
              contact
            </Link>
          </p>
        </div>
      </div>

      {/* Fixed Scroll-to-Top Square Button (Replicating .scrollToTop) */}
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-9 h-9 bg-black/80 hover:bg-[#3273a5] border border-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </footer>
  );
}
