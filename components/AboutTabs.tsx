"use client";

import React, { useState } from "react";
import { ABOUT_TABS } from "@/lib/data";

export function AboutTabs() {
  const [activeTabId, setActiveTabId] = useState(ABOUT_TABS[0].id);
  const currentTab =
    ABOUT_TABS.find((t) => t.id === activeTabId) || ABOUT_TABS[0];

  return (
    <div>
      {/* Authentic Horizontal Architectural Tab Bar (Replicating #animated-tab on about.html) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 border-b border-neutral-200 mb-14">
        {ABOUT_TABS.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`py-5 px-4 text-center border-b-[3px] transition-all cursor-pointer ${
                isActive
                  ? "border-black text-black"
                  : "border-transparent text-neutral-400 hover:text-neutral-800"
              }`}
            >
              <span className="block font-mono text-xs tracking-[0.22em] text-[#3273a5]">
                {tab.number}
              </span>
              <span className="mt-1.5 block text-xs sm:text-sm font-display font-bold uppercase tracking-[0.16em]">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Tab Content Split */}
      <div
        key={currentTab.id}
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start animate-[fadeIn_0.45s_ease-out]"
      >
        <div className="lg:col-span-5">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
            {currentTab.number} // {currentTab.label}
          </span>
          <h3 className="mt-3 text-2xl sm:text-3xl font-display font-bold uppercase tracking-[0.06em] text-black leading-snug">
            &ldquo;{currentTab.heading}&rdquo;
          </h3>
          <div className="w-12 h-[3px] bg-[#3273a5] my-5" />
          <p className="text-sm sm:text-base text-neutral-600 font-medium leading-relaxed">
            {currentTab.subheading}
          </p>
        </div>

        <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-neutral-600 leading-relaxed text-justify">
          {currentTab.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
