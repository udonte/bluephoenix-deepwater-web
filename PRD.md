# Product Requirements Document (PRD)

## Blue Phoenix Marine — Next.js 16 Web Platform

| Metadata                   | Details                                                                                     |
| :------------------------- | :------------------------------------------------------------------------------------------ |
| **Product / Project Name** | Blue Phoenix Marine Corporate & Technical Web Platform (`bluephoenix-deepwater-web`)        |
| **Legal Entity**           | Blue Phoenix Deepwater Limited                                                              |
| **Source Reference**       | Legacy static HTML5/jQuery website (`https://bluephoenixmarine.com/`)                       |
| **Target Stack**           | Next.js 16.4.5 (App Router, `cacheComponents: true`), React 19, TypeScript, Tailwind CSS v4 |
| **Document Status**        | Active / Living Specification                                                               |
| **Last Updated**           | November 2026                                                                               |

---

## 1. Executive Summary & Vision

**Blue Phoenix Marine** (_Blue Phoenix Deepwater Limited_) is an international subsea engineering, underwater ship inspection/repair/maintenance (IRM), offshore terminal maintenance, and marine vessel supply company operating across the **United Kingdom** and **West Africa** (Nigeria, Ghana, Togo, Benin, and Côte d'Ivoire).

### 1.1 Project Objective

Migrate and modernize the legacy multi-page HTML/jQuery website (`https://bluephoenixmarine.com/`) into a high-speed, zero-compromise **Next.js 16** web application that preserves 100% of the original domain content, media assets, and structural DNA while elevating the visual craft to an **industrial maritime & offshore engineering** standard.

### 1.2 Core Pillars

1. **Uncompromising Speed & Instant Navigation**: Leverage Next.js 16 `cacheComponents` (Partial Prerendering / Instant Shell) so static shells render instantaneously and dynamic segments stream without layout shifts or hydration mismatches.
2. **High-Fidelity Visual & Video Rendering**: Serve crisp, uncompressed-look marine photography (`quality={90–95}`, AVIF/WebP formats, responsive `sizes`) and seamless HTML5 background video loops (`Phoenix_Reveal.mp4`, `hull_cleaning.mp4`).
3. **Human-Crafted Industrial Design System**: Replace generic SaaS/AI aesthetics with sharp `0px` architectural corners, `1px` technical hairlines, industrial maritime typography (`Barlow Condensed` + `Montserrat` + `JetBrains Mono`), and custom CSS micro-interactions.

---

## 2. Target Audience & User Personas

| Persona                                        | Role & Goals                                                                                                                                   | Key Site Touchpoints                                                      |
| :--------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ |
| **Fleet Technical Superintendent / Shipowner** | Needs rapid mobilization for UWILD, hull cleaning, propeller polishing, or class-approved underwater hull repairs in West Africa or UK waters. | `/`, `/services`, `/services/[slug]`, `/equipment/[slug]`, `/contact`     |
| **Offshore Asset / FPSO Integrity Manager**    | Evaluates SPM/CBM terminal maintenance, subsea riser/flowline IRM, and HSEQ compliance before vendor pre-qualification.                        | `/services/offshore-terminal-maintenance`, `/hseq`, `/about`, `/partners` |
| **Classification Society & Strategic Partner** | Verifies certifications, joint-venture alliances, regional bases, and governance/data compliance.                                              | `/about`, `/partners`, `/locations`, `/legal`                             |
| **Prospective Maritime Engineer / Diver**      | Explores company culture, safety ethos, and career submission channels.                                                                        | `/people`, `/hseq`, `/contact`                                            |

---

## 3. Brand, Typography & Design System

### 3.1 Typography Pairing

- **Display & Architectural Headlines (`--font-barlow` / `Barlow Condensed`)**:
  - Weights: `400`, `500`, `600`, `700`, `800`
  - Usage: Hero titles, section headers, navigation links, interactive tabs, and technical banners (`uppercase`, wide tracking `0.08em–0.42em`).
- **Editorial Body Copy (`--font-montserrat` / `Montserrat`)**:
  - Weights: `300`, `400`, `500`, `600`, `700`
  - Usage: Long-form technical descriptions, service breakdowns, HSEQ policies, and legal documentation.
- **Technical Metadata & Telemetry (`--font-jetbrains` / `JetBrains Mono`)**:
  - Weights: `400`, `500`, `600`
  - Usage: Unit indices (`[01]`, `[13 UNITS]`), GPS/coordinate readouts, equipment spec tables, and footer utility links.

### 3.2 Color Palette

| Token / Hex           | Role                                 | Usage                                                                       |
| :-------------------- | :----------------------------------- | :-------------------------------------------------------------------------- |
| `#0a0a0a` / `#141414` | Deep Charcoal / Subsea Black         | Primary dark surfaces, mega-menu backgrounds, video containers              |
| `#1c1c1c` / `#252525` | Industrial Slate                     | Secondary dark sections, footer bottom bar                                  |
| `#3273a5`             | Blue Phoenix Primary Ocean Blue      | Primary brand accent, active indicators, CTA fills, map pins                |
| `#4da3e3`             | Metallic Marine Cyan                 | High-contrast text accent over dark ocean video (`Coming Soon`, highlights) |
| `#ff513b`             | International Marine Signal Coral    | Secondary action hover fill, technical callouts                             |
| `#e6af2a`             | Offshore Safety Amber                | Tertiary technical tags, equipment counters                                 |
| `#f7f7f7` / `#ffffff` | Crisp Daylight White / Light Neutral | Alternating content bands, technical tables, white contact strip            |

### 3.3 Micro-Interactions & Motion Architecture

- **Scroll-Triggered Reveal (`components/Reveal.tsx`)**: Custom `IntersectionObserver` wrapper supporting directional entrances (`up`, `down`, `left`, `right`, `none`) with configurable `delay` and `cubic-bezier(0.22, 1, 0.36, 1)` easing.
- **Directional Button Sweep (`.btn-sharp-white`, `.btn-sharp-blue`, `.btn-sharp-dark`)**: `0px` radius buttons with a `scaleX` pseudo-element fill sweep on hover.
- **Image Zoom & Curtain Overlay (`.img-zoom-card`)**: Slow `0.7s` scale transform (`scale(1.08)`) paired with bottom-up dark curtain overlays on portfolio tiles.

---

## 4. Information Architecture & Route Map

- `/intro` — Standalone Phoenix Reveal Opener (`app/intro/page.tsx`)
- `/coming-soon` — Standalone Teaser Screen with Navbar & Footer hidden (`app/coming-soon/page.tsx`)
- `/` — Main Corporate Home (`app/page.tsx`)
- `/about` — Company Overview, Certifications, Clients & Testimonials (`app/about/page.tsx`)
- `/services` — Filterable 23-Service Directory (`app/services/page.tsx`)
- `/services/[slug]` — 23 Individual Service Detail Pages (`app/services/[slug]/page.tsx`)
- `/equipment` — 7-Unit Subsea Equipment Catalog (`app/equipment/page.tsx`)
- `/equipment/[slug]` — 7 Individual Equipment Detail Pages (`app/equipment/[slug]/page.tsx`)
- `/partners` — Strategic Alliances (`app/partners/page.tsx`)
- `/people` — Culture & Careers (`app/people/page.tsx`)
- `/hseq` — Health, Safety, Environment & Quality (`app/hseq/page.tsx`)
- `/locations` — Interactive UK & West Africa Map (`app/locations/page.tsx`)
- `/contact` — Multi-Region Offices & Inquiry Form (`app/contact/page.tsx`)
- `/legal` — Privacy, GDPR & Terms (`app/legal/page.tsx`)
- `/sitemap-page` — Complete Site Directory (`app/sitemap-page/page.tsx`)

---

## 5. Functional Requirements by Route

### 5.1 Opener & Teaser Experiences

1. **Intro Page (`app/intro/page.tsx` — `/intro`)**
   - Replicates the original `index.html` opener as a dedicated route accessible via the first `Intro` link in `Navbar`.
   - Plays `/video/Phoenix_Reveal.mp4` full-screen (`h-screen`) with `/images/Phoenix_Reveal.jpg` fallback and a bottom-centered `"Enter Home"` button (`btn-sharp-white`) linking to `/`.
   - Hides the white 3-column contact strip in `Footer` so only the dark copyright bar sits below the fold.
2. **Coming Soon Teaser (`app/coming-soon/page.tsx` — `/coming-soon`)**
   - Standalone full-viewport teaser (`fixed inset-0 z-[100] h-screen w-screen overflow-hidden bg-black`).
   - Completely hides both `Navbar` and `Footer`.
   - Removes the fallback image and `"Enter Home"` button; loops `/video/Phoenix_Reveal.mp4` continuously.
   - Synchronizes via `onTimeUpdate` (`video.currentTime >= 5.5`) so that right as the video's centered water-drop phoenix emblem and `"BLUE PHOENIX — MARINE —"` lockup finish revealing, **"COMING SOON"** smoothly fades in directly underneath (`top-[76%]`) and resets cleanly on each loop cycle.

### 5.2 Global Navigation & Footer

1. **Architectural Header (`components/Navbar.tsx`)**
   - Top links: `Intro`, `Home`, `About`, `Services` (4-column mega-menu grouped into Underwater `[13]`, Offshore `[03]`, Shipping & Marine Support `[02]`, and Other Services `[05]`), `Equipment` (7-unit dropdown with index numbers), `Partners`, `People`, `HSEQ`, `Locations`, and `Contact` CTA button.
   - Uses deferred `clientPathname` state synced in `useEffect` to guarantee zero hydration mismatch with Next.js 16 `cacheComponents`.
2. **Two-Tier Footer (`components/Footer.tsx`)**
   - **Top Strip**: 3-column white contact bar displaying Phone (`+44 (0) 20 3647 1441`), Headquarters (`Hertfordshire | United Kingdom`), and Email (`info@bluephoenixmarine.com`). Automatically hidden on `/intro` and `/coming-soon`.
   - **Bottom Bar**: Dark `#252525` copyright bar with quick links (`sitemap | legal | services | contact`) and a fixed square scroll-to-top button.

### 5.3 Main Corporate Home (`app/page.tsx` & `components/HomeHero.tsx`)

- **Hero Video Section**: Plays `/video/hull_cleaning.mp4` full-screen with rotating belief headlines (`"We believe in hard work"`, `"We believe in innovation"`, `"We believe in partnerships"`), tagline, and 4 core operational pillars (`Underwater`, `Onshore`, `Shipping & Marine Vessel Supply`, `Offshore`).
- **4-Column Core Pillars Band**: Dark industrial grid highlighting Underwater, Onshore, Shipping, and Offshore capabilities.
- **Filterable Services Showcase (`components/ServicesGallery.tsx`)**: Interactive category tabs (`All`, `Underwater`, `Offshore`, `Shipping & Marine Support`, `Other Services`) with sharp 4-column zoom cards.
- **Client Logos & Testimonials (`components/TestimonialsSection.tsx`)**: 8 major industry client logos (Modec, Chevron, Subsea 7, Bourbon, Boskalis, Euronav, Teekay, etc.) and executive testimonials from Marine Platforms Limited, Bourbon Interoil Nigeria Limited, and Modec Ghana Limited.

### 5.4 Services Directory & 23 Dynamic Service Pages

- **Directory (`app/services/page.tsx`)**: Full 23-service catalog with category filtering and technical cards.
- **Detail Pages (`app/services/[slug]/page.tsx`)**:
  - Statically pre-generated via `generateStaticParams` for all 23 slugs in `lib/data.ts`.
  - Uses Next.js 16 `<Suspense>` + `"use cache"` architecture (`ServiceDetailResolver` + `CachedServiceContent`) to prevent uncached URL param blocking during partial prefetching.
  - Renders alternating two-column technical sections, bulleted specifications, high-resolution imagery, and a sticky sidebar directory.

### 5.5 Equipment Catalog & 7 Dynamic Equipment Pages

- **Directory (`app/equipment/page.tsx`)**: Showcases all 7 specialized subsea hardware systems (`Brush-Kart`, `Searess`, `Pingers & Transponders`, `Subsea Cutting Systems`, `Hydraulic Power Units`, `NDT Inspection Spread`, `HD Subsea Video & CCTV`).
- **Detail Pages (`app/equipment/[slug]/page.tsx`)**:
  - Uses `<Suspense>` + `"use cache"` (`EquipmentDetailResolver` + `CachedEquipmentContent`).
  - Displays telemetry spec tables, multi-image galleries, and `Prev / Next` hardware pagination.

### 5.6 Corporate, HSEQ, Locations & Compliance Pages

- **About (`app/about/page.tsx` & `components/AboutTabs.tsx`)**: Interactive tabbed overview (`Overview`, `Mission & Vision`, `Certifications`, `Major Clients`), IMCA/Class society affiliations (ABS, BV, DNV-GL, Lloyd's Register, NMA, DPR, NIMASA, GPHA), and client testimonials.
- **Partners (`app/partners/page.tsx`)**: Joint-venture and technical alliance framework across West Africa and Europe.
- **People (`app/people/page.tsx`)**: Commercial diving teams, subsea engineers, and careers recruitment callout (`info@bluephoenixmarine.com`).
- **HSEQ (`app/hseq/page.tsx`)**: Zero-incident safety commitment, environmental stewardship, and quality assurance standards.
- **Locations (`app/locations/page.tsx` & `components/LocationsMap.tsx`)**: Interactive dark-mode vector world map (`lib/world-map-paths.ts`) with pulsing pins for **United Kingdom** (Potters Bar HQ), **Nigeria** (Lagos & Port Harcourt), **Ghana** (Takoradi / Accra), **Togo**, **Benin**, and **Côte d'Ivoire**.
- **Contact (`app/contact/page.tsx` & `components/ContactForm.tsx`)**: Regional office cards and interactive technical inquiry form with client-side validation.
- **Legal (`app/legal/page.tsx`) & Sitemap (`app/sitemap-page/page.tsx`)**: Full GDPR/Privacy Policy, Data Protection Officer (DPO) contact details, Website Terms of Use, and complete HTML route directory.

---

## 6. Technical Architecture & Non-Functional Requirements

### 6.1 Next.js 16 Caching & Partial Prefetching Compliance

- **`cacheComponents: true`** enabled in `next.config.ts`.
- Dynamic route parameters (`props.params`) in `app/services/[slug]/page.tsx` and `app/equipment/[slug]/page.tsx` must always be awaited inside a `<Suspense>` child component that delegates rendering to a `"use cache"` component, preventing `instant-shell-url-data` blocking warnings.
- Client hooks that read URL state (`usePathname()`) inside shared layout components (`Navbar`, `Footer`) must defer pathname-dependent attributes (`data-active`, visibility classes) via `useEffect` (`clientPathname`) so server-rendered shells and client hydration match 100%.

### 6.2 Image & Video Optimization

- Configured in `next.config.ts` with `formats: ["image/avif", "image/webp"]` and `qualities: [75, 85, 90, 95, 100]`.
- Above-the-fold hero slides and navbar logos use `priority` and `quality={90–95}`.
- Background HTML5 videos (`Phoenix_Reveal.mp4`, `hull_cleaning.mp4`) use `autoPlay muted loop playsInline preload="auto"`.

### 6.3 Browser Extension & Hydration Resilience

- `suppressHydrationWarning` applied to `<html>` and `<body>` in `app/layout.tsx` to prevent third-party browser extensions (e.g., ColorZilla `cz-shortcut-listen="true"`) from triggering false-positive React hydration warnings.

---

## 7. Future Roadmap & Phase 2 Enhancements

1. **Backend Email & CRM Integration for Contact Form**:
   - Connect `components/ContactForm.tsx` to a Next.js Server Action (`app/actions/contact.ts`) with SMTP / Resend / Microsoft 365 delivery to `info@bluephoenixmarine.com` and regional inboxes (`uk@`, `nigeria@`, `ghana@`).
2. **Environment-Controlled Maintenance / Launch Mode**:
   - Optional middleware/proxy toggle (`NEXT_PUBLIC_COMING_SOON_MODE=true`) to route root traffic (`https://bluephoenixmarine.com/`) directly to `/coming-soon` prior to official relaunch.
3. **Downloadable Technical Datasheets (PDF)**:
   - Attach downloadable PDF capability statements and equipment spec sheets on `/equipment/[slug]` and `/services/[slug]`.
4. **SEO & Structured Data (`JSON-LD` + `sitemap.ts` + `robots.ts`)**:
   - Add programmatic XML sitemap (`app/sitemap.ts`), `app/robots.ts`, and `Organization` / `Service` JSON-LD schema markup for international maritime search visibility.
