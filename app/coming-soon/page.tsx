"use client";

import React from "react";

export default function ComingSoonPage() {
  return (
    <section className="fixed inset-0 z-[100] h-screen w-screen overflow-hidden bg-black select-none">
      {/* Full-Screen HTML5 Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      >
        <source src="/video/coming-soon.mp4" type="video/mp4" />
      </video>

      {/* Header & Revamp Notice positioned directly at the bottom of the centered emblem in the GIF */}
      {/* <div className="pointer-events-none absolute inset-x-0 top-[75%] z-20 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-[0.28em] text-[#3b89c9] drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
          BLUEPHOENIX DEEPWATER
        </h1>

        <div className="mt-3 flex items-center gap-3 sm:gap-4">
          <span className="h-[1px] w-6 sm:w-10 bg-[#3b89c9]/60" />
          <p className="font-sans text-xs sm:text-sm md:text-base font-medium tracking-[0.16em] text-neutral-200/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            This website currently undergoing revamp
          </p>
          <span className="h-[1px] w-6 sm:w-10 bg-[#3b89c9]/60" />
        </div>
      </div> */}
    </section>
  );
}
