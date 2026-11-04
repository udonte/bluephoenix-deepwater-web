"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LOCATIONS_DATA } from "@/lib/data";
import { WORLD_MAP_PATHS } from "@/lib/world-map-paths";

// Exact coordinates on the 1000x500 world map vector canvas
const PIN_COORDS: Record<
  string,
  { x: number; y: number; coordsLabel: string; labelOffset: { dx: number; dy: number } }
> = {
  uk: { x: 441, y: 95, coordsLabel: "51.6982° N, 0.1753° W", labelOffset: { dx: 12, dy: -8 } },
  takoradi: {
    x: 438,
    y: 251,
    coordsLabel: "4.8975° N, 1.7554° W",
    labelOffset: { dx: -72, dy: 18 },
  },
  accra: {
    x: 445,
    y: 249,
    coordsLabel: "5.5600° N, 0.2057° W",
    labelOffset: { dx: -52, dy: -14 },
  },
  lome: { x: 451, y: 248, coordsLabel: "6.1375° N, 1.2123° E", labelOffset: { dx: 10, dy: 18 } },
  lagos: { x: 459, y: 247, coordsLabel: "6.4474° N, 3.3903° E", labelOffset: { dx: 12, dy: -8 } },
};

export function LocationsMap() {
  const [activeId, setActiveId] = useState<string>(LOCATIONS_DATA[0].id);
  const [zoomCorridor, setZoomCorridor] = useState<boolean>(false);
  const activeLocation = LOCATIONS_DATA.find((l) => l.id === activeId) ?? LOCATIONS_DATA[0];
  const activeMeta = PIN_COORDS[activeLocation.id] ?? PIN_COORDS.uk;

  return (
    <div className="space-y-12">
      {/* Interactive Vector World Map Container */}
      <div className="border border-neutral-200 bg-white">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-neutral-200 bg-[#f6f6f6] px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 bg-[#ff513b]" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black">
              GLOBAL &amp; WEST AFRICAN MARITIME FOOTPRINT
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomCorridor(false)}
              className={`px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] transition-colors ${
                !zoomCorridor
                  ? "bg-black text-white"
                  : "border border-neutral-300 bg-white text-neutral-600 hover:border-black hover:text-black"
              }`}
            >
              Global View
            </button>
            <button
              type="button"
              onClick={() => setZoomCorridor(true)}
              className={`px-3.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] transition-colors ${
                zoomCorridor
                  ? "bg-[#3273a5] text-white"
                  : "border border-neutral-300 bg-white text-neutral-600 hover:border-black hover:text-black"
              }`}
            >
              Zoom: UK &amp; West Africa Corridor
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* Authentic Vector World Map SVG */}
          <div className="relative overflow-hidden bg-white p-4 sm:p-8 lg:col-span-8 lg:border-r lg:border-neutral-200">
            <svg
              viewBox={zoomCorridor ? "350 55 260 260" : "0 0 1000 500"}
              className="h-auto w-full select-none transition-all duration-700 ease-out"
              aria-label="Blue Phoenix Marine Global Operations Map"
            >
              {/* Subtle Coordinate Grid Lines */}
              <g stroke="#f0f0f0" strokeWidth="0.75">
                <line x1="0" y1="100" x2="1000" y2="100" />
                <line x1="0" y1="200" x2="1000" y2="200" />
                <line x1="0" y1="250" x2="1000" y2="250" strokeDasharray="4 4" stroke="#e5e5e5" />
                <line x1="0" y1="300" x2="1000" y2="300" />
                <line x1="0" y1="400" x2="1000" y2="400" />
                <line x1="200" y1="0" x2="200" y2="500" />
                <line x1="445" y1="0" x2="445" y2="500" strokeDasharray="4 4" stroke="#e5e5e5" />
                <line x1="600" y1="0" x2="600" y2="500" />
                <line x1="800" y1="0" x2="800" y2="500" />
              </g>

              {/* Continents from original locations.html */}
              <g>
                <path
                  d={WORLD_MAP_PATHS.northAmerica}
                  fill="#EBECED"
                  stroke="#CCCCCC"
                  strokeWidth="0.75"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={WORLD_MAP_PATHS.southAmerica}
                  fill="#EBECED"
                  stroke="#CCCCCC"
                  strokeWidth="0.75"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={WORLD_MAP_PATHS.asia}
                  fill="#EBECED"
                  stroke="#CCCCCC"
                  strokeWidth="0.75"
                  vectorEffect="non-scaling-stroke"
                />
                <path
                  d={WORLD_MAP_PATHS.australia}
                  fill="#EBECED"
                  stroke="#CCCCCC"
                  strokeWidth="0.75"
                  vectorEffect="non-scaling-stroke"
                />
                {/* Highlighted Operating Continents: Europe & Africa */}
                <path
                  d={WORLD_MAP_PATHS.europe}
                  fill={activeId === "uk" ? "#dce8f2" : "#e4e7ea"}
                  stroke="#b8c4ce"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  className="transition-colors duration-300"
                />
                <path
                  d={WORLD_MAP_PATHS.africa}
                  fill={activeId !== "uk" ? "#dce8f2" : "#e4e7ea"}
                  stroke="#b8c4ce"
                  strokeWidth="1"
                  vectorEffect="non-scaling-stroke"
                  className="transition-colors duration-300"
                />
              </g>

              {/* Maritime Corridor Line: UK HQ to Gulf of Guinea */}
              <path
                d="M 441 95 C 405 150, 405 215, 438 251"
                fill="none"
                stroke="#3273a5"
                strokeWidth={zoomCorridor ? "1.2" : "1.8"}
                strokeDasharray="4 4"
                opacity="0.75"
              />
              <path
                d="M 438 251 L 445 249 L 451 248 L 459 247"
                fill="none"
                stroke="#ff513b"
                strokeWidth={zoomCorridor ? "1.2" : "1.8"}
                opacity="0.85"
              />

              {/* Interactive Location Pins */}
              {LOCATIONS_DATA.map((loc) => {
                const pt = PIN_COORDS[loc.id] ?? PIN_COORDS.uk;
                const isSelected = loc.id === activeId;
                const pinRadius = zoomCorridor ? (isSelected ? 4.5 : 3) : isSelected ? 7 : 5;
                const pulseRadius = zoomCorridor ? 10 : 16;

                return (
                  <g
                    key={loc.id}
                    className="cursor-pointer"
                    onClick={() => setActiveId(loc.id)}
                    onMouseEnter={() => setActiveId(loc.id)}
                  >
                    {isSelected && (
                      <circle
                        cx={pt.x}
                        cy={pt.y}
                        r={pulseRadius}
                        fill="none"
                        stroke="#ff513b"
                        strokeWidth={zoomCorridor ? "1" : "1.5"}
                        opacity="0.6"
                      >
                        <animate
                          attributeName="r"
                          from={String(pinRadius)}
                          to={String(pulseRadius * 1.4)}
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          from="0.8"
                          to="0"
                          dur="1.8s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={pinRadius}
                      fill={isSelected ? "#ff513b" : "#3273a5"}
                      stroke="#ffffff"
                      strokeWidth={zoomCorridor ? "1" : "1.5"}
                    />

                    {(isSelected || zoomCorridor) && (
                      <text
                        x={pt.x + (zoomCorridor ? pt.labelOffset.dx * 0.45 : pt.labelOffset.dx)}
                        y={pt.y + (zoomCorridor ? pt.labelOffset.dy * 0.45 : pt.labelOffset.dy)}
                        fill="#000000"
                        fontSize={zoomCorridor ? "6.5" : "11"}
                        fontWeight="700"
                        fontFamily="monospace"
                      >
                        {loc.name.toUpperCase()}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Bottom Station Selector Bar */}
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-neutral-200 pt-4">
              {LOCATIONS_DATA.map((loc, idx) => {
                const isSelected = loc.id === activeId;
                return (
                  <button
                    key={loc.id}
                    type="button"
                    onClick={() => setActiveId(loc.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 text-left text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                      isSelected
                        ? "bg-black text-white"
                        : "bg-[#f6f6f6] text-neutral-700 hover:bg-neutral-200 hover:text-black"
                    }`}
                  >
                    <span
                      className={`font-mono text-[10px] ${
                        isSelected ? "text-[#e6af2a]" : "text-neutral-400"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span>{loc.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Inspection Panel */}
          <div className="flex flex-col justify-between bg-[#252525] p-8 text-white lg:col-span-4">
            <div>
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#e6af2a]">
                  {activeLocation.role}
                </span>
                <span className="font-mono text-[10px] text-white/60">
                  {activeMeta.coordsLabel}
                </span>
              </div>

              <h3 className="mt-6 font-display text-3xl font-bold uppercase tracking-[0.04em] text-white">
                {activeLocation.name}
              </h3>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-white/60">
                {activeLocation.country}
              </p>

              <div className="mt-4 h-[3px] w-10 bg-[#ff513b]" />

              <div className="relative mt-6 aspect-[16/10] overflow-hidden border border-white/15 bg-black">
                <Image
                  src={activeLocation.mapImage ?? activeLocation.image}
                  alt={`${activeLocation.name} operations`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover opacity-90"
                />
              </div>

              <p className="mt-5 text-xs leading-relaxed text-white/80">
                {activeLocation.description}
              </p>

              <div className="mt-5 space-y-4 border-t border-white/15 pt-4 text-sm text-white/80">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Address / Facility
                  </p>
                  <div className="mt-1 space-y-0.5 text-xs leading-relaxed text-white">
                    {activeLocation.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>

                {activeLocation.phones && activeLocation.phones.length > 0 && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                      Direct Telephone
                    </p>
                    <a
                      href={`tel:${activeLocation.phones[0].replace(/[^+\d]/g, "")}`}
                      className="mt-0.5 block font-mono text-xs text-[#e6af2a] hover:underline"
                    >
                      {activeLocation.phones[0]}
                    </a>
                  </div>
                )}

                {activeLocation.emails && activeLocation.emails.length > 0 && (
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">
                      Operations Desk
                    </p>
                    <a
                      href={`mailto:${activeLocation.emails[0]}`}
                      className="mt-0.5 block font-mono text-xs text-white hover:text-[#e6af2a]"
                    >
                      {activeLocation.emails[0]}
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6">
              <Link href="/contact" className="btn-sharp-white w-full text-center">
                Contact {activeLocation.name} Desk
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* All 5 Stations Architectural Index Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {LOCATIONS_DATA.map((loc, idx) => {
          const isSelected = loc.id === activeId;
          const pt = PIN_COORDS[loc.id] ?? PIN_COORDS.uk;
          return (
            <button
              key={loc.id}
              type="button"
              onClick={() => setActiveId(loc.id)}
              className={`group flex flex-col justify-between border p-6 text-left transition-all ${
                isSelected
                  ? "border-black bg-black text-white"
                  : "border-neutral-200 bg-white text-black hover:border-black"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isSelected ? "text-[#e6af2a]" : "text-[#3273a5]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <span
                    className={`h-2 w-2 ${
                      isSelected ? "bg-[#ff513b]" : "bg-neutral-300 group-hover:bg-black"
                    }`}
                  />
                </div>
                <h4 className="mt-4 font-display text-xl font-bold uppercase tracking-[0.04em]">
                  {loc.name}
                </h4>
                <p
                  className={`text-xs font-semibold uppercase tracking-[0.14em] ${
                    isSelected ? "text-white/70" : "text-neutral-500"
                  }`}
                >
                  {loc.country}
                </p>
                <div
                  className={`mt-3 h-[2px] w-6 transition-all duration-300 group-hover:w-12 ${
                    isSelected ? "bg-[#ff513b]" : "bg-black"
                  }`}
                />
                <p
                  className={`mt-3 text-xs leading-relaxed ${
                    isSelected ? "text-white/80" : "text-neutral-600"
                  }`}
                >
                  {loc.role}
                </p>
              </div>
              <p
                className={`mt-6 font-mono text-[10px] ${
                  isSelected ? "text-[#e6af2a]" : "text-neutral-400"
                }`}
              >
                {pt.coordsLabel}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
