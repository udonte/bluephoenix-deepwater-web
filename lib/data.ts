export type ServiceCategory =
  | "underwater"
  | "offshore"
  | "shipping"
  | "other";

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  image: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle?: string;
  category: ServiceCategory;
  categoryLabel: string;
  heroImage: string;
  cardImage: string;
  homeCardImage?: string;
  summary: string;
  sections: ContentSection[];
}

export interface EquipmentSpec {
  label: string;
  value: string;
}

export interface EquipmentItem {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  summary: string;
  paragraphs: string[];
  specs: EquipmentSpec[];
  images: string[];
  prevSlug: string;
  nextSlug: string;
}

export interface LocationPin {
  id: string;
  name: string;
  country: string;
  role: string;
  xPercent: number;
  yPercent: number;
  image: string;
  mapImage?: string;
  address: string[];
  phones?: string[];
  emails?: string[];
  description: string;
}

export const COMPANY_INFO = {
  name: "Blue Phoenix Marine",
  legalName: "Blue Phoenix Deepwater Limited",
  tagline: "Superior Underwater Surface and Marine Solutions",
  subTagline: "We specialise in a wide spectrum of marine services.",
  phone: "+44 (0) 20 3647 1441",
  phoneHref: "tel:+442036471441",
  dpoPhone: "+44 (0) 20 3617 1441",
  email: "info@bluephoenixmarine.com",
  ukEmail: "uk@bluephoenixmarine.com",
  nigeriaEmail: "nigeria@bluephoenixmarine.com",
  ghanaEmail: "ghana@bluephoenixmarine.com",
  dpoEmail: "tunji.ladele@bluephoenixmarine.com",
  headquarters: "201 Maple House, High Street, Potters Bar, Hertfordshire, EN6 5BS, United Kingdom",
  headquartersShort: "Hertfordshire | United Kingdom",
  pillars: [
    "Underwater",
    "Onshore",
    "Shipping & Marine Vessel Supply",
    "Offshore",
  ],
  heroRotatingPhrases: [
    "We believe in hard work",
    "We believe in innovation",
    "We believe in partnerships",
  ],
};

export const SERVICE_CATEGORIES: {
  id: ServiceCategory | "all";
  label: string;
  shortLabel: string;
  accentColor: string;
  badgeClass: string;
}[] = [
  {
    id: "all",
    label: "All Services",
    shortLabel: "All",
    accentColor: "#3273a5",
    badgeClass: "bg-sky-500/15 text-sky-300 border-sky-500/30",
  },
  {
    id: "underwater",
    label: "Underwater Services",
    shortLabel: "Underwater",
    accentColor: "#0ea5e9",
    badgeClass: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
  },
  {
    id: "offshore",
    label: "Offshore",
    shortLabel: "Offshore",
    accentColor: "#f59e0b",
    badgeClass: "bg-amber-500/15 text-amber-300 border-amber-500/30",
  },
  {
    id: "shipping",
    label: "Shipping & Marine Support",
    shortLabel: "Shipping & Marine Support",
    accentColor: "#10b981",
    badgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "other",
    label: "Other Services",
    shortLabel: "Other Services",
    accentColor: "#f43f5e",
    badgeClass: "bg-rose-500/15 text-rose-300 border-rose-500/30",
  },
];

export const WHY_CHOOSE_US_HOME = [
  {
    title: "Underwater",
    description:
      "We provide unlimited underwater offshore solutions to ensure we meet our clients every requirement from cleaning to replacement.",
    icon: "droplets",
  },
  {
    title: "Offshore Marine Logistics",
    description:
      "Our offshore marine logistics range from oil & gas evacuation protocols to berthing & loading services.",
    icon: "anchor",
  },
  {
    title: "Shipping & Marine Vessel Supply",
    description:
      "We supply only the best operational support vessels in the market to ensure the highest standard of quality and efficiency.",
    icon: "ship",
  },
  {
    title: "Specialised Marine Services",
    description:
      "Whether it is cofferdam repairs or marine construction, here at Blue Phoenix Marine, we have you covered.",
    icon: "wrench",
  },
  {
    title: "Our Partners",
    description:
      "Working with an international client base requires a network of reliable and trustworthy partners.",
    icon: "handshake",
  },
  {
    title: "Our Locations",
    description:
      "Strategically located to deliver world class shipping and marine services.",
    icon: "globe",
  },
];

export const ABOUT_TABS = [
  {
    id: "history",
    number: "01",
    label: "A bit of history",
    heading:
      "Over 10 years of combined operations in Underwater and Marine services",
    subheading:
      "We carry out complex and bespoke Underwater Inspection Repair & Maintenance and Marine Logistics Services.",
    paragraphs: [
      "As a leading provider of subsea services across West Africa, Blue Phoenix Deepwater is in a class of its own. Using diverse, full-service surface and saturation diving vessel platforms & equipment, our highly experienced personnel safely perform everything from the complete installation of subsea structures using DSV platforms to ongoing inspection, maintenance and repair below the water surface.",
      "With capabilities spanning subsea marine engineering, construction, survey and inspection of subsea pipeline systems and platforms, ships and marine vessels and waterfront civil structures, we ensure each project goes off without a hitch. Even better, thanks to an exemplary quality and safety control process, you can count on reliable execution from beginning to end.",
    ],
  },
  {
    id: "where-we-operate",
    number: "02",
    label: "Where we operate",
    heading: "Global Support, West African Operational Excellence",
    subheading: "Strategically positioned across key maritime corridors.",
    paragraphs: [
      "Blue Phoenix Deepwater Limited is a company registered under the laws of the Federal Republic of Nigeria, operating via offices in Apapa, Lagos with an Administrative presence in Abuja, FCT. Elsewhere in West Africa, our offices are located in Labone, Accra with operations coordinated out of Takoradi. We also have field operational facilities in Lome, Togo and Cotonou in the Republic of Benin.",
      "Administrative and International Operations Support are coordinated via our office in Potters Bar, Hertfordshire, United Kingdom.",
    ],
  },
  {
    id: "what-we-do",
    number: "03",
    label: "What we do",
    heading: "End-to-End Marine, Subsea & Offshore Engineering",
    subheading: "Delivering mission-critical solutions above and below the waterline.",
    paragraphs: [
      "Our core activities include Underwater Services, Marginal Field Crude Cargo Evacuation via specialized Shuttle Tankers, Marine Logistics, Terminal Operations, Offshore Support and Supply, and specialized Ship Management & Chartering Services.",
      "Our Management Team is composed of Seasoned Professionals with a hands-on business and client-oriented disposition, with cumulative industry participation well over 60 years.",
      "Via tested and valuable technical alliances with global industry majors in underwater technologies, terminal operations, dredging, offshore supply and deepsea towage and salvage, Blue Phoenix is positioned to provide optimal solutions to both straightforward and complex shipping and marine operational challenges safely and cost-effectively.",
    ],
  },
  {
    id: "mission",
    number: "04",
    label: "Our Mission",
    heading: "Safety, Innovation & Cost-Effective Execution",
    subheading: "Our commitment to every client, vessel, and offshore asset.",
    paragraphs: [
      "Blue Phoenix's mission is to provide first-rate, innovative, safety-first and cost-effective underwater, offshore and marine services using skilled manpower and the best technology.",
      "We strive to create value for our customers and sustain reasonable returns to all our stakeholders.",
    ],
  },
  {
    id: "vision",
    number: "05",
    label: "Our Vision",
    heading: "Setting the Benchmark in Maritime & Subsea Services",
    subheading: "First choice for ship owners, operators, and offshore energy majors.",
    paragraphs: [
      "Our vision is to be the first choice in underwater, shipping and marine operations for customers and principals, and to maintain leadership on safety, employee satisfaction and socio-economic responsiveness in the regions where we operate.",
    ],
  },
  {
    id: "values",
    number: "06",
    label: "Core Values",
    heading: "Integrity, Safety, Teamwork & Excellence",
    subheading: "The principles that guide our divers, engineers, and management.",
    paragraphs: [
      "Safety First: Zero compromise on human life, vessel integrity, and environmental protection across all diving and marine operations.",
      "Technical Excellence: Deploying Class-Approved procedures, IMCA-compliant equipment, and CSWIP-certified diver-welders.",
      "Partnership & Reliability: Building enduring alliances with international principals and regional stakeholders through transparent, round-the-clock execution.",
    ],
  },
];

export const ABOUT_WHY_CHOOSE = [
  {
    number: "01",
    title: "Best In Industry",
    description:
      "We use modern equipment and processes to achieve optimal performance and execution for our clients.",
  },
  {
    number: "02",
    title: "Safety First",
    description:
      "All of our equipment is audited by IMCA and certified by Lloyds or DNV, ensuring the safety of our team and your assets.",
  },
  {
    number: "03",
    title: "Satisfaction Guaranteed",
    description:
      "The quality of our work is guaranteed to put a smile on the faces of our clients.",
  },
  {
    number: "04",
    title: "Trusted Partners",
    description:
      "Working with an international client base requires a network of reliable and trustworthy partners.",
  },
];

export const SERVICES_OVERVIEW = {
  title: "Underwater Ship IRM Services and Support",
  paragraphs: [
    "At Blue Phoenix Marine we are able to perform a range of complex underwater repair and maintenance jobs globally via our network of technical partners.",
    "With our strategic positioning in the West African oil and gas exploration and production industry, as well as the busy commercial shipping hubs on the West Coast of Africa, BPM brings immediate value to vessels trading within this region in terms of afloat repairs, surveys and inspection jobs, in-water hull cleaning and propeller polishing—saving vessel owners huge costs when compared to out-of-dock operations.",
    "At Blue Phoenix Marine we only use equipment audited to the International Marine Contractors Association (IMCA) standards and certified by Lloyd's Register or DNV. Each operational base maintains a containerized dive control post complete with surface supply breathing systems, video & voice communication lines, and a twin-lock Deck Decompression Chamber (DDC) on site during every dive.",
    "Recently we launched the Dive Support Vessel (DSV) Phoenix 1, configured to provide immediate dive support at anchorages and offshore locations.",
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "hull-cleaning",
    title: "Hull Cleaning",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/hull-cleaning.png",
    homeCardImage: "/images/bpm-images/hull-cleaner.png",
    summary:
      "In-water hull cleaning using bespoke Mini-Pamper and brush-kart units to remove marine fouling, restore coating performance, and reduce fuel consumption.",
    sections: [
      {
        heading: "Why Clean?",
        image: "/images/bpm-images/hull-cleaning-1.png",
        paragraphs: [
          "During the operational life of any vessel, its hull is constantly subject to the mercy of the environment that it operates in. As a result of this, the anti-fouling paint systems deplete, or simply fail due to mechanical damage or incompatible operating patterns.",
          "With fuel prices remaining at a significant level, vessels burning excess fuel as a result of fouling cannot operate profitably or effectively. It is therefore extremely beneficial to remove fouling once present and keep the underwater hull vetoed of any onset of fouling, be it a localized area resulting from berth bottom contact or full anti-fouling system failures.",
          "Fouling may also obscure structural defects which would go unseen if the growth were not removed prior to in-water surveys.",
        ],
      },
      {
        heading: "How Do We Clean Underwater?",
        image: "/images/bpm-images/hull-cleaning-2.png",
        paragraphs: [
          "Working together with our technical partners UMC International, we utilise various types of underwater hull cleaning equipment that ranges from small hand-held units for niche areas, up to the large high-output 'Mini-Pamper' vehicle designed for rapid cleaning on flat bottom and vertical ship-sides.",
          "By selecting the exact type of rotary brush or non-abrasive pad for the specific coating type (including sensitive silicone and foul-release coatings) and degree of marine growth, we clean hulls thoroughly without damaging the underlying anti-fouling system.",
        ],
      },
    ],
  },
  {
    slug: "welding",
    title: "Welding Repairs",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/welding.png",
    homeCardImage: "/images/bpm-images/welding-home.png",
    summary:
      "Class-approved underwater wet and habitat welding by certified diver-welders trained to BS EN ISO 15614-12 and AWS D3.6M standards.",
    sections: [
      {
        heading: "Specialised Techniques",
        image: "/images/bpm-images/welding-repair.png",
        paragraphs: [
          "Over the decades our partners have developed a range of class-approved underwater welding procedures that allow our certified diver-welders to carry out temporary or permanent repairs to hull plating, appendages, and subsea structures.",
          "Our diver-welders are dual-certified commercial divers and coded welders who undergo rigorous routine testing in purpose-built dive tanks to maintain peak qualification.",
        ],
      },
      {
        heading: "Underwater Welding Capabilities",
        image: "/images/bpm-images/welding1.png",
        paragraphs: [
          "We deploy both wet welding and dry habitat (cofferdam) welding depending on the structural criticality and classification society requirements:",
        ],
        bullets: [
          "Diver-welders trained and qualified to BS EN ISO 15614-12 & AWS D3.6M",
          "Class-approved temporary and permanent shell plating crack repairs",
          "Bilge keel, rudder, skeg, and rope guard structural welding",
          "Anode replacement and sacrificial corrosion protection installation",
          "Non-Destructive Testing (MPI, UT, Eddy Current) verification pre- and post-weld",
        ],
      },
    ],
  },
  {
    slug: "insert-plate-repairs",
    title: "Insert Plate Repairs",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/insert.png",
    summary:
      "Permanent class-approved afloat replacement of damaged hull plating using custom watertight cofferdams and single-sided welding procedures.",
    sections: [
      {
        heading: "Afloat Repairs to Hull Plating",
        image: "/images/bpm-images/insert-plate-1.png",
        paragraphs: [
          "Our team have developed a fully class-approved process that allows permanent repair and replacement of damaged areas of hull plating using a single-sided welding procedure.",
          "This process can be used for repair of cracks, deformed plate, or even retro-fit of hull-mounted equipment on ships, offshore platforms, or any subsurface structures. This process therefore offers a realistic alternative to dry docking and provides a permanent repair solution.",
        ],
      },
      {
        heading: "The Technology",
        image: "/images/bpm-images/insert-plate-1.png",
        paragraphs: [
          "In order to replace a section of hull plating, the initial action is to carry out a full dive survey to verify the extent of the damage. A cofferdam is then secured in place to provide a watertight enclosure, the area of hull plating is cut out from inside, and a piece of new plate is produced to exactly fit the resultant opening.",
          "A Class Approved single-side weld procedure is then employed to weld the new plate in place. Once welded, the requisite NDT is carried out, and finally the cofferdam is removed from outboard and the hull plating re-coated with underwater paint to preserve the area.",
          "This permanent repair process has successfully been used on numerous occasions in ships and offshore platforms both alongside and on station. Inserts as large as 2.5m x 1m have been carried out on an FPSO offshore, and multiple inserts carried out on a vessel suffering collision damage.",
        ],
      },
    ],
  },
  {
    slug: "stern-seal-servicing",
    title: "Stern Seal Servicing",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/stern-seal.png",
    summary:
      "Afloat underwater stern tube seal replacement and repair inside custom dry hyperbaric habitats, approved by major OEMs.",
    sections: [
      {
        heading: "Dry Habitat Stern Seal Replacement",
        image: "/images/bpm-images/stern-seal2.png",
        paragraphs: [
          "Stern seal wear or damage can lead to oil leakage or water ingress into the stern tube, threatening heavy environmental penalties and unscheduled off-hire.",
          "Working alongside major seal manufacturers and our technical partners, we install bespoke inflatable or rigid dry habitats around the propeller shaft bossing. Once dewatered, technicians work in dry conditions to bond, vulcanize, or replace lip seals and spacer rings without the vessel entering dry dock.",
        ],
        bullets: [
          "Full lip seal bonding and vulcanization in dry underwater habitat",
          "Weardown gauge readings and shaft alignment checks",
          "Rope guard removal, refurbishment, and re-securing",
          "Approved procedures in partnership with leading seal OEMs",
        ],
      },
    ],
  },
  {
    slug: "dry-docking-inspection",
    title: "Inspection In Lieu of Dry Docking",
    shortTitle: "Dry Docking Inspection",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/dry-docking.png",
    homeCardImage: "/images/imgur/K7erTls.png",
    summary:
      "Comprehensive In-Water Surveys (UWILD) approved by all IACS Classification Societies to extend dry-docking intervals safely.",
    sections: [
      {
        heading: "Underwater Inspection In Lieu of Dry-Docking (UWILD)",
        image: "/images/bpm-images/dry-docking1.png",
        paragraphs: [
          "Classification societies permit approved diving contractors to conduct Underwater Inspections in Lieu of Dry-Docking (UWILD) for commercial vessels, FPSOs, and offshore units.",
          "Our dive spreads feature real-time closed-circuit color television (CCTV), two-way voice communications with the attending Class Surveyor, ultrasonic thickness gauging, and ACFM/MPI crack detection.",
        ],
        bullets: [
          "Flat bottom, bilge keel, sea chest, and hull plating visual/CCTV inspection",
          "Rudder pintle and bush clearance measurements",
          "Propeller shaft weardown (poker gauge) readings",
          "Detailed digital video and photographic reporting accepted by ABS, DNV, Lloyd's Register, BV, and ClassNK",
        ],
      },
    ],
  },
  {
    slug: "propeller-cleaning-polishing",
    title: "Propeller Cleaning & Polishing",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/propeller-cleaning.png",
    homeCardImage: "/images/imgur/239Go8a.png",
    summary:
      "Ultra-fine underwater hydro-dynamic propeller polishing down to 0.5µ Ra surface finish (Rubert Scale Grade A) for significant fuel savings.",
    sections: [
      {
        heading: "Why Polish Propellers?",
        image: "/images/bpm-images/propeller3.png",
        paragraphs: [
          "The sole purpose of polishing a propeller underwater is to reduce the surface roughness. The 'bottom line' for the customer depends on the cost of the service deducted from the financial savings resulting from the polish.",
          "Provided the job is done properly, the cost of the underwater polish will only be a small proportion of the fuel savings, and therefore the most important factor to be considered by the customer is the quality of the polishing.",
        ],
      },
      {
        heading: "How Do We Polish Propellers Underwater?",
        image: "/images/bpm-images/propeller2.png",
        paragraphs: [
          "A super-smooth surface is inhospitable to marine organisms as well as being beneficial to the efficiency of the propeller. UMC have constantly improved the standard of their surface finish. A recent enhancement to meet stringent military requirements involved a major redesign to provide a higher power rating combined with exceptionally fine abrasives.",
          "Our equipment provides a suction force of 100kg to the propeller surface but can be manoeuvred over the blade face easily by the diver. We can use abrasive sizes down to 360-grade grit to produce a surface finish of 0.5µ Ra (Rubert Scale A).",
        ],
      },
    ],
  },
  {
    slug: "video-visual-inspection",
    title: "Video & Visual Inspection",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/rov-inspection.png",
    summary:
      "High-definition subsea CCTV, digital photography, and ROV visual inspections for pre-charter, pre-purchase, and structural integrity assessments.",
    sections: [
      {
        heading: "High-Clarity Subsea Visual Diagnostics",
        image: "/images/bpm-images/diver-2.png",
        paragraphs: [
          "Whether verifying hull condition before a vessel sale, checking fouling buildup, or inspecting subsea moorings and risers, our diver-held and ROV-mounted HD camera systems deliver crystal-clear visual evidence.",
          "Live video feeds are streamed directly to the surface control console where the ship's Chief Engineer, Superintendent, or attending Surveyor can direct the inspection in real time.",
        ],
        bullets: [
          "High-definition digital video recording with live topside overlay",
          "Still photography with close-up macro calibration scales",
          "Pre-purchase, on-hire/off-hire, and post-grounding visual audits",
          "Same-day digital report delivery with annotated defect mapping",
        ],
      },
    ],
  },
  {
    slug: "rov-inspection-recording",
    title: "ROV Inspection & Recording",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/rov-inspection.png",
    summary:
      "Observation and light work-class Remotely Operated Vehicle (ROV) deployments for deepwater, hazardous, or rapid hull and riser inspections.",
    sections: [
      {
        heading: "Remotely Operated Vehicle (ROV) Capabilities",
        image: "/images/bpm-images/diver-4.png",
        paragraphs: [
          "In deepwater environments, strong currents, or operational zones where diver intervention is restricted, Blue Phoenix Marine deploys portable observation-class and light work-class ROV systems.",
          "Equipped with high-intensity LED lighting, multi-beam imaging sonar, cathodic protection (CP) probes, and ultrasonic thickness sensors, our ROV fleet provides rapid deployment from vessels of opportunity or offshore installations.",
        ],
        bullets: [
          "Rapid hull, thruster, and sea-chest visual sweeps",
          "FPSO mooring chain, riser, and umbilical touchdown inspections",
          "Pipeline free-span, debris, and scour surveys",
          "Full digital recording and geo-referenced inspection logs",
        ],
      },
    ],
  },
  {
    slug: "thruster-repair-replace",
    title: "In-Water Thruster Repair & Replacement",
    shortTitle: "Thruster Repair & Replace",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/thruster-repair.png",
    homeCardImage: "/images/imgur/2SiLPv2.png",
    summary:
      "Afloat tunnel and azimuth thruster blade replacement, seal servicing, and complete unit exchange without dry docking.",
    sections: [
      {
        heading: "Tunnel & Azimuth Thruster Overhaul Afloat",
        image: "/images/bpm-images/thruster-1.png",
        paragraphs: [
          "Bow and stern thrusters are critical for Dynamic Positioning (DP) vessels, drillships, and commercial tonnage maneuvering in port. When a thruster suffers blade damage, gear failure, or seal leakage, waiting for dry dock is rarely an option.",
          "We design and install custom tunnel blanks to create a dry working environment inside the thruster tunnel, or utilize specialized rigging and buoyancy bags to remove and replace entire azimuth or tunnel thruster units underwater.",
        ],
        bullets: [
          "Individual controllable pitch (CPP) thruster blade replacement",
          "Dry tunnel blanking for complete gearbox and seal overhaul",
          "Complete azimuth pod and demountable thruster underwater exchange",
          "Thruster guard grid fabrication and installation",
        ],
      },
    ],
  },
  {
    slug: "propeller-repair-replace",
    title: "Propeller Repair & Replacement",
    shortTitle: "Propeller Repair & Replace",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/propeller-repair.png",
    homeCardImage: "/images/imgur/sYAYYNV.png",
    summary:
      "Hydrodynamic blade cropping, cold straightening, crack grinding, and CPP blade replacement performed underwater to restore balance and propulsion.",
    sections: [
      {
        heading: "Restoring Propulsion Efficiency Afloat",
        image: "/images/bpm-images/propeller-1.png",
        paragraphs: [
          "Propeller blade impact with submerged debris or ice can cause severe vibration, shaft bearing overload, and forced speed reductions.",
          "Our specialist teams perform dynamic balancing calculations and execute cold straightening of bent blade tips, precision hydrodynamic cropping of opposing blades to restore mass balance, and complete Controllable Pitch Propeller (CPP) blade swaps underwater.",
        ],
        bullets: [
          "Precision blade tip cropping and hydrodynamic edge profiling",
          "Underwater cold straightening of deformed bronze/Ni-Al-Bronze blades",
          "Crack propagation arrest via dye-penetrant/eddy-current NDT and fairing",
          "Complete CPP blade removal and replacement afloat",
        ],
      },
    ],
  },
  {
    slug: "iacs-specialist-surveys",
    title: "IACS Specialist Periodic Surveys",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/iacs.png",
    summary:
      "Accredited in-water surveys and Non-Destructive Testing (NDT) certified by major IACS classification societies.",
    sections: [
      {
        heading: "Class-Accredited In-Water Surveys",
        image: "/images/bpm-images/iacs2.png",
        paragraphs: [
          "Blue Phoenix Marine and our technical partners hold approvals across the International Association of Classification Societies (IACS), enabling us to perform intermediate, special, and damage surveys afloat.",
          "Our inspection teams combine commercial diving expertise with CSWIP 3.1u / 3.2u underwater inspection qualifications to deliver authoritative data to attending surveyors.",
        ],
      },
      {
        heading: "Comprehensive Subsea NDT & Reporting",
        image: "/images/bpm-images/iacs3.png",
        paragraphs: [
          "Every survey is backed by calibrated instrumentation and thorough documentation:",
        ],
        bullets: [
          "Ultrasonic Thickness (UT) gauging through coatings",
          "Magnetic Particle Inspection (MPI) and Alternating Current Field Measurement (ACFM)",
          "Cathodic Protection (CP) potential readings across hull and appendages",
          "Rudder & tailshaft clearance measurements and sea-valve inspections",
        ],
      },
    ],
  },
  {
    slug: "painting-adhesives",
    title: "Painting & Adhesives Application",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/painting.png",
    homeCardImage: "/images/bpm-images/home-painting.png",
    summary:
      "Subsea application of specialist underwater-curing epoxy coatings, anti-corrosion barriers, and structural composite adhesives.",
    sections: [
      {
        heading: "Underwater Protective Coatings & Composites",
        image: "/images/bpm-images/service-painting.png",
        paragraphs: [
          "Mechanical damage from anchors, fenders, tug boats, or underwater weld repairs leaves bare steel exposed to accelerated galvanic and microbial corrosion.",
          "Following thorough hydro-blasting or power-tool surface preparation to bare metal, our divers apply specially formulated hydrophobic epoxies and underwater-curing resins that displace water and bond tenaciously to steel or concrete substrates.",
        ],
        bullets: [
          "Post-weld and post-repair underwater anti-corrosive epoxy coating",
          "Splash-zone and subsea pile wrapping and resin injection",
          "Emergency leak sealing using fast-curing subsea structural adhesives",
          "Sacrificial anode dielectric shield restoration",
        ],
      },
    ],
  },
  {
    slug: "voith-schneider-propeller",
    title: "Voith Schneider Propeller Repair & Replace",
    shortTitle: "Voith Schneider Repair",
    category: "underwater",
    categoryLabel: "Underwater Services",
    heroImage: "/images/bpm-images/underwater-header.png",
    cardImage: "/images/services/voith.png",
    summary:
      "Specialist underwater blade removal, seal replacement, and servicing for cycloidal Voith Schneider Propulsion (VSP) units.",
    sections: [
      {
        heading: "Cycloidal Propulsion Underwater Maintenance",
        image: "/images/bpm-images/voith-2.png",
        paragraphs: [
          "Voith Schneider Propellers (VSP) are widely fitted to tractor tugs, offshore support vessels, and double-ended ferries requiring instantaneous thrust vectoring. Historically, a damaged VSP blade or leaking blade seal meant taking the vessel out of water.",
          "Using specialized tooling and OEM-aligned procedures, our diving teams extract damaged vertical VSP blades, renew lower rotor casing seals, and install replacement blades afloat—returning critical harbor and offshore tugs to service within hours.",
        ],
        bullets: [
          "Underwater extraction and installation of VSP vertical blades",
          "Blade foot seal and rotor casing leak remediation",
          "Protective guard plate straightening and structural reinforcement",
        ],
      },
    ],
  },
  {
    slug: "offshore-terminal-inspection",
    title: "Offshore Terminal Inspection, Remediation & Maintenance",
    shortTitle: "Offshore Terminal Inspection",
    category: "offshore",
    categoryLabel: "Offshore",
    heroImage: "/images/bpm-images/offshore-header.png",
    cardImage: "/images/services/platform.png",
    homeCardImage: "/images/bpm-images/home-terminal.png",
    summary:
      "Turnkey topside and subsea inspection, SBM/CALM buoy maintenance, riser integrity, and mooring servicing for FPSOs and FSOs.",
    sections: [
      {
        heading: "Offshore Terminal Inspection, Remediation & Maintenance",
        image: "/images/bpm-images/terminal1.png",
        paragraphs: [
          "Offshore marine terminals must withstand unforgiving and variable conditions, leading to ongoing and regular topside and underwater maintenance to preserve their structural integrity.",
          "BPM and its partners understand ships—be they free-floating, spread-moored, or weather-vaning as oil production and storage terminals—and offer vast experience in maintaining, repairing, and upgrading offshore terminals and related structures such as risers, berthing, and mooring systems.",
          "We offer topside NDT inspection and maintenance, underwater marine growth inspection and clearance, scour surveys, anti-corrosion protection, underwater hull painting, and SBM inspection, repair, and maintenance, all in a one-stop shop.",
        ],
      },
    ],
  },
  {
    slug: "berthing-master-services",
    title: "Berthing / Loading Master Services",
    category: "offshore",
    categoryLabel: "Offshore",
    heroImage: "/images/bpm-images/offshore-header.png",
    cardImage: "/images/services/berthing.png",
    homeCardImage: "/images/imgur/3utF0Ij.png",
    summary:
      "Experienced Master Mariners, Mooring Masters, and Loading Masters for FPSO/SPM tandem moorings, STS transfers, and terminal export operations.",
    sections: [
      {
        heading: "Expert Mooring & Cargo Export Supervision",
        image: "/images/bpm-images/berthing.png",
        paragraphs: [
          "Safe tandem mooring, Single Point Mooring (SPM) berthing, and Ship-to-Ship (STS) crude or LNG/LPG transfers demand seasoned Master Mariners with intimate knowledge of local West African currents, squalls, and terminal protocols.",
          "Blue Phoenix Marine supplies OCIMF-compliant Berthing and Loading Masters, pilotage support, line-handling tugs, and hose connection crews to safeguard high-value export operations.",
        ],
        bullets: [
          "FPSO/FSO tandem mooring and SPM/CBM buoy berthing operations",
          "Ship-to-Ship (STS) cargo transfer planning and POAC supervision",
          "Floating & submarine hose string testing, flushing, and change-out",
          "24/7 terminal marine control and export documentation management",
        ],
      },
    ],
  },
  {
    slug: "hydrocarbon-evacuation-marine-logistics",
    title: "Hydrocarbon Evacuation & Marine Logistics",
    category: "offshore",
    categoryLabel: "Offshore",
    heroImage: "/images/bpm-images/offshore-header.png",
    cardImage: "/images/services/evacuation.png",
    homeCardImage: "/images/bpm-images/hydrocarbon.png",
    summary:
      "Dedicated coastal shuttle tankers, shallow-draft barging, and integrated marine logistics for marginal oilfield crude evacuation.",
    sections: [
      {
        heading: "Marginal Field Crude Evacuation Solutions",
        image: "/images/bpm-images/hydro1.png",
        paragraphs: [
          "West Africa's marginal and inland basin fields often face pipeline vandalism, high tariff bottlenecks, or lack of export trunkline infrastructure.",
          "Blue Phoenix Deepwater designs and operates bespoke marine crude evacuation corridors—utilizing self-propelled coastal shuttle tankers, dumb/articulated tank barges, and dedicated mooring spreads to move crude oil safely from wellhead barges to FSOs or export terminals.",
        ],
      },
      {
        heading: "End-to-End Marine Logistics",
        image: "/images/bpm-images/hydro3.png",
        paragraphs: [
          "We manage the complete marine logistics chain with rigorous fiscal metering, security liaison, and zero-spill protocols:",
        ],
        bullets: [
          "Shallow-draft shuttle tankers and double-hull crude barges",
          "Creek, estuary, and nearshore towage and escort tug operations",
          "Fiscal custody transfer metering and quality assurance",
          "Full regulatory compliance and maritime security coordination",
        ],
      },
    ],
  },
  {
    slug: "offshore-support-vessel-supply",
    title: "Offshore Support Vessel Supply",
    category: "shipping",
    categoryLabel: "Shipping & Marine Support",
    heroImage: "/images/bpm-images/shipping-header.png",
    cardImage: "/images/services/support.png",
    homeCardImage: "/images/bpm-images/support-vessel.png",
    summary:
      "Chartering, operation, and management of DSVs, DP1/DP2 PSVs, AHTS, Fast Crew Boats, and Security Escort Vessels.",
    sections: [
      {
        heading: "Reliable Fleet Support for Offshore Operations",
        image: "/images/bpm-images/support1.png",
        paragraphs: [
          "Blue Phoenix Marine provides chartering, technical management, and operational crewing for a wide range of Offshore Support Vessels (OSVs) supporting exploration, production, and subsea construction across the Gulf of Guinea.",
          "Including our own Dive Support Vessel (DSV Phoenix 1), we source and operate vessels vetted to rigorous OVID/IMCA and oil-major standards.",
        ],
      },
      {
        heading: "Vessel Categories Supplied",
        image: "/images/bpm-images/supply-vessels1.png",
        paragraphs: [
          "Our fleet network covers short-term spot charters and multi-year field support contracts:",
        ],
        bullets: [
          "Dive Support Vessels (DSV) & ROV Support Vessels",
          "Anchor Handling Tug Supply (AHTS) & Platform Supply Vessels (PSV)",
          "Fast Security Escort Vessels (FSEV) & Crew Transfer Boats",
          "Multicats, flattop cargo barges, and harbor/terminal tugs",
        ],
      },
    ],
  },
  {
    slug: "bulkers-oil-tankers-supply",
    title: "Bulkers, Oil Tankers & LNG/LPG Tanker Supply",
    category: "shipping",
    categoryLabel: "Shipping & Marine Support",
    heroImage: "/images/bpm-images/shipping-header.png",
    cardImage: "/images/services/submersibles.png",
    homeCardImage: "/images/imgur/7rM4Rhk.png",
    summary:
      "Commercial shipbroking, chartering, and technical ship management for wet, dry bulk, and gas carriers.",
    sections: [
      {
        heading: "Commercial Tanker & Bulk Carrier Supply",
        image: "/images/bpm-images/bulker1.png",
        paragraphs: [
          "Leveraging deep relationships with international shipowners and commodity traders, Blue Phoenix Marine delivers competitive chartering and commercial management for crude oil tankers, clean/dirty product tankers, LNG/LPG carriers, and dry bulk vessels.",
          "Our commercial team handles voyage chartering, time chartering, bareboat structures, and coastal cabotage compliance across West African jurisdictions.",
        ],
      },
      {
        heading: "Technical Vetting & Operational Excellence",
        image: "/images/bpm-images/bulker2.png",
        paragraphs: [
          "Every vessel placed on charter undergoes strict technical and SIRE/CDI vetting review to guarantee safe, punctual cargo delivery:",
        ],
        bullets: [
          "Crude & Product Tankers (Coastal, Handysize, MR, LR, Suezmax, VLCC)",
          "Pressurized & Semi-Refrigerated LPG and LNG Carriers",
          "Dry Bulk Carriers for clinker, gypsum, grain, and mineral concentrates",
          "Full port agency, bunkering, and husbandry support in West African ports",
        ],
      },
    ],
  },
  {
    slug: "cofferdam-repairs",
    title: "Cofferdam Repairs",
    category: "other",
    categoryLabel: "Other Services",
    heroImage: "/images/bpm-images/other-header.png",
    cardImage: "/images/services/cofferdam.png",
    homeCardImage: "/images/bpm-images/home-cofferdam1.png",
    summary:
      "Bespoke engineering, fabrication, and installation of open-top and hyperbaric watertight cofferdams for dry afloat hull and sea-chest repairs.",
    sections: [
      {
        heading: "Engineered Watertight Habitats & Blanks",
        image: "/images/bpm-images/cofferdam1.png",
        paragraphs: [
          "When internal shipboard valves, sea chests, transducer trunks, or shell plating require dry access below the waterline, our naval architects and fabrication teams design and build custom steel cofferdams contoured specifically to the vessel's lines plan.",
          "Once rigged and sealed against the hull by divers, the internal space is dewatered—allowing class-approved dry welding, valve replacement, or structural modifications while the vessel continues cargo operations afloat.",
        ],
      },
      {
        heading: "Rapid Fabrication & Deployment",
        image: "/images/bpm-images/cofferdam-1.png",
        paragraphs: [
          "We maintain stock hull aperture blanks and rapid-response steel fabrication workshops in our key operational hubs:",
        ],
        bullets: [
          "Finite Element Analysis (FEA) and Class-approved cofferdam design",
          "Sea-chest, overboard discharge, and scrubber pipework blanking",
          "Dry habitat enclosures for rudder stock, skeg, and thruster tunnels",
          "Minimum safety factor of 4 with full hydrostatic and seal integrity testing",
        ],
      },
    ],
  },
  {
    slug: "marine-construction",
    title: "Marine Construction",
    category: "other",
    categoryLabel: "Other Services",
    heroImage: "/images/bpm-images/other-header.png",
    cardImage: "/images/services/marginal.png",
    summary:
      "Waterfront civil engineering, jetty and quay wall rehabilitation, pile protection, dredging support, and subsea pipeline installation.",
    sections: [
      {
        heading: "Subsea & Waterfront Civil Engineering",
        image: "/images/bpm-images/construction.png",
        paragraphs: [
          "Ports, terminals, jetties, and coastal protection structures require specialist underwater construction and rehabilitation to combat corrosion, scour, and vessel berthing impacts.",
          "Blue Phoenix Marine executes turnkey marine civil projects combining surface-supplied diving spreads, crane barges, and marine engineering teams.",
        ],
        bullets: [
          "Jetty pile inspection,concrete jacketing, and high-build epoxy encapsulation",
          "Sheet-pile quay wall tie-rod installation, cathodic protection, and underwater concreting",
          "Subsea intake/outfall pipeline laying, trenching, and mattress stabilization",
          "Mooring dolphin, fender system, and navigational aid installation",
        ],
      },
    ],
  },
  {
    slug: "ship-salvage-operations",
    title: "Ship Salvage Operations",
    category: "other",
    categoryLabel: "Other Services",
    heroImage: "/images/bpm-images/other-header.png",
    cardImage: "/images/services/salvage.png",
    homeCardImage: "/images/bpm-images/salvage4.png",
    summary:
      "Emergency response, wreck removal, refloating, underwater patching, dewatering, and bunker/pollutant recovery.",
    sections: [
      {
        heading: "Emergency Salvage & Wreck Removal",
        image: "/images/bpm-images/ship-salvage.png",
        paragraphs: [
          "Maritime casualties demand immediate, decisive mobilization to protect life, prevent environmental pollution, and preserve vessel and cargo value.",
          "Working alongside international salvage masters and our strategic partners, Blue Phoenix Marine provides rapid-response diving teams, high-capacity salvage pumps, patching materials, and heavy towage support across West Africa.",
        ],
        bullets: [
          "24/7 emergency casualty dive surveys and hull breach patching",
          "Compartment dewatering, air-lifting, and buoyancy restoration",
          "Subsea hot-tapping and bunker fuel / pollutant extraction",
          "Wreck cutting, parbuckling, heavy lift, and channel clearance",
        ],
      },
    ],
  },
  {
    slug: "in-water-surveys",
    title: "In-Water Damage Repairs & Surveys",
    shortTitle: "In-Water Damage Repairs",
    category: "other",
    categoryLabel: "Other Services",
    heroImage: "/images/bpm-images/other-header.png",
    cardImage: "/images/services/surveys.png",
    summary:
      "Rapid emergency underwater damage assessment and class-approved permanent or temporary afloat repairs following collision or contact.",
    sections: [
      {
        heading: "Rapid Post-Incident Assessment & Remediation",
        image: "/images/bpm-images/repair1.png",
        paragraphs: [
          "Following a collision, allision, or mechanical failure, shipowners, P&I clubs, and hull underwriters require immediate, accurate intelligence on underwater damage together with a practical repair plan to retain Class and resume trading.",
          "Our teams mobilize rapidly to conduct 3D dimensional damage mapping, NDT crack detection, and immediate structural remediation—from crack arrest holes and doubler/insert plates to rudder and bilge keel cropping.",
        ],
        bullets: [
          "Emergency P&I, H&M underwriter, and Class damage surveys",
          "Hull breach sealing, crack arrest, and watertight integrity restoration",
          "Rudder, bilge keel, and kort nozzle structural repairs afloat",
          "Turnkey coordination with attending Class surveyors",
        ],
      },
    ],
  },
  {
    slug: "grounding-inspection",
    title: "Ship Grounding Inspection",
    category: "other",
    categoryLabel: "Other Services",
    heroImage: "/images/bpm-images/other-header.png",
    cardImage: "/images/services/grounding.png",
    summary:
      "Comprehensive flat-bottom, keel, rudder, and propulsion inspections following grounding or touch-bottom incidents.",
    sections: [
      {
        heading: "Post-Grounding Subsea Structural Audit",
        image: "/images/bpm-images/diver-1.png",
        paragraphs: [
          "Even a minor touch-bottom incident at a shallow berth or channel bar can cause set-up of flat bottom plating, fractured internal framing, blocked cooling water intakes, or twisted rudder stocks.",
          "Blue Phoenix Marine conducts systematic grid-by-grid post-grounding inspections using live CCTV, taut-wire deflection measurements, and ultrasonic testing so Class Surveyors can immediately verify seaworthiness.",
        ],
        bullets: [
          "Full flat-bottom plating indention and corrugation mapping",
          "Sea-chest grating clearance and internal mud/debris flushing",
          "Rudder stock alignment, pintle clearance, and skeg integrity checks",
          "Propeller blade tip distortion and shaft seal leak verification",
        ],
      },
    ],
  },
];

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    slug: "mini-pamper",
    title: "Mini Pamper Machine",
    subtitle: "High-Output Underwater Hull Cleaning Vehicle",
    heroImage: "/images/bpm-images/main-headers.png",
    summary:
      "Diver-controlled, twin-brush hydraulic underwater hull cleaning vehicle capable of cleaning up to 2,000 m² per hour without damaging anti-fouling coatings.",
    paragraphs: [
      "The Mini-Pamper is a purpose-built, high-capacity underwater hull cleaning vehicle engineered to clean large flat bottoms and vertical sides of tankers, bulk carriers, container ships, and FPSOs safely and rapidly.",
      "Using an impeller-generated suction downforce of approximately 500 kg, the machine adheres firmly to the hull—including inverted flat bottoms—while the diver effortlessly steers it across the plating. Variable brush pressure ensures thorough removal of slime, weed, and calcareous fouling without stripping intact anti-fouling or foul-release paint systems.",
    ],
    specs: [
      { label: "Length", value: "1,700 mm" },
      { label: "Width", value: "1,100 mm" },
      { label: "Height", value: "500 mm" },
      { label: "Weight in Air", value: "175 kg" },
      { label: "Weight in Sea Water", value: "Neutral / Slightly Positive (Adjustable Buoyancy)" },
      { label: "Cleaning Swath", value: "1,000 mm (Twin contra-rotating brushes)" },
      { label: "Cleaning Rate", value: "Up to 2,000 m² / hour" },
      { label: "Adhesion Force", value: "Approx. 500 kg via central suction impeller" },
      { label: "Power Source", value: "WD80 / LD50 Diesel-Driven Hydraulic Power Pack" },
    ],
    images: ["/images/bpm-images/mini-pamper.png"],
    prevSlug: "hull-aperture-blanks",
    nextSlug: "twin-brush-machine",
  },
  {
    slug: "twin-brush-machine",
    title: "Twin Brush Machine",
    subtitle: "Versatile Medium-Swath Hull Cleaning Unit",
    heroImage: "/images/bpm-images/main-headers.png",
    summary:
      "Compact, diver-operated twin-brush hydraulic cleaner designed for curved hull sections, bulbous bows, and medium-sized vessels.",
    paragraphs: [
      "The Twin Brush Machine bridges the gap between the large Mini-Pamper vehicle and single hand-held units. Its contra-rotating twin brushes create a balanced forward traction force while holding the unit securely against the hull.",
      "Ideal for medium-sized offshore support vessels, tighter curvature around the bow and stern quarters, and rapid spot-cleaning operations.",
    ],
    specs: [
      { label: "Length", value: "950 mm" },
      { label: "Width", value: "820 mm" },
      { label: "Height", value: "380 mm" },
      { label: "Weight in Air", value: "48 kg" },
      { label: "Weight in Sea Water", value: "Neutrally Buoyant" },
      { label: "Cleaning Swath", value: "750 mm (2 x 400 mm brushes)" },
      { label: "Cleaning Rate", value: "Up to 900 m² / hour" },
      { label: "Hydraulic Requirement", value: "40–50 L/min @ 140 bar" },
    ],
    images: [
      "/images/bpm-images/twin-brush.png",
      "/images/bpm-images/twin-brush2.png",
    ],
    prevSlug: "mini-pamper",
    nextSlug: "single-brush-machine",
  },
  {
    slug: "single-brush-machine",
    title: "Single Brush Machine",
    subtitle: "Precision Hand-Held Subsea Cleaning & Polishing Tool",
    heroImage: "/images/bpm-images/main-headers.png",
    summary:
      "Lightweight hydraulic hand-held rotary unit for propeller polishing, sea chests, rudders, thrusters, and intricate hull appendages.",
    paragraphs: [
      "The Single Brush Machine is an indispensable diver-held hydraulic tool used for precision cleaning of niche areas—including sea chest gratings, bilge keels, rudders, rope guards, and thruster tunnels.",
      "When fitted with high-speed polishing heads and multi-stage diamond/3M abrasive discs, it delivers up to 100 kg of hydrodynamic suction to polish ship propellers to a 0.5µ Ra (Rubert Grade A) super-smooth finish.",
    ],
    specs: [
      { label: "Brush / Disc Diameter", value: "300 mm – 400 mm" },
      { label: "Weight in Air", value: "11 kg" },
      { label: "Weight in Sea Water", value: "3.5 kg" },
      { label: "Suction Force", value: "Up to 100 kg on blade/hull surface" },
      { label: "Operating Speed", value: "Variable up to 1,200 RPM" },
      { label: "Safety Trigger", value: "Dead-man hydraulic safety lever" },
      { label: "Applications", value: "Propeller Polishing (to 0.5µ Ra) & Niche Area Cleaning" },
    ],
    images: ["/images/bpm-images/single-brush.png"],
    prevSlug: "twin-brush-machine",
    nextSlug: "brushes-pads",
  },
  {
    slug: "brushes-pads",
    title: "Range of Brushes & Pads",
    subtitle: "Coating-Specific Rotary Brushes & Non-Abrasive Discs",
    heroImage: "/images/bpm-images/main-headers.png",
    summary:
      "Comprehensive range of polypropylene, nylon, wire brushes, and 3M diamond/abrasive pads engineered for every fouling type and hull coating.",
    paragraphs: [
      "Successful underwater hull cleaning and propeller polishing requires matching the exact tool head to the coating type and fouling severity. Using an overly aggressive brush on a soft SPC or silicone foul-release coating can damage the paint, while a pad that is too soft will fail to remove entrenched barnacles.",
      "Blue Phoenix Marine stocks a complete inventory of interchangeable rotary brushes and polishing pads to guarantee safe, effective results on every vessel.",
    ],
    specs: [
      { label: "Soft Nylon / Polypropylene Brushes", value: "For slime and light weed on Silicone & Foul-Release coatings" },
      { label: "Medium Stiffness Poly Brushes", value: "For moderate grass and incipient shell on Self-Polishing Copolymers (SPC)" },
      { label: "Heavy-Duty Tynex / Wire Brushes", value: "For heavy calcareous barnacle and tubeworm growth on hard coatings & bare steel" },
      { label: "Propeller Polishing Discs", value: "Coarse, Medium, and Fine (down to 360-grit / 0.5µ Ra finish)" },
      { label: "Diameter Compatibility", value: "300 mm, 350 mm, 400 mm, and 500 mm standard hubs" },
    ],
    images: [
      "/images/bpm-images/brush1.png",
      "/images/bpm-images/brush2.png",
      "/images/bpm-images/brush3.png",
      "/images/bpm-images/brush4.png",
    ],
    prevSlug: "single-brush-machine",
    nextSlug: "wd80-hydraulic-power-pack",
  },
  {
    slug: "wd80-hydraulic-power-pack",
    title: "WD80 Hydraulic Power Pack",
    subtitle: "Heavy-Duty Dual-Circuit Diesel Hydraulic Power Unit",
    heroImage: "/images/bpm-images/main-headers.png",
    summary:
      "Skid-mounted, DNV/Lloyd's certified offshore diesel hydraulic power pack capable of driving the Mini-Pamper vehicle and auxiliary tools simultaneously.",
    paragraphs: [
      "The WD80 Hydraulic Power Pack is the primary powerhouse for our heavy underwater hull cleaning and subsea tooling spreads. Housed in a rugged, certified lifting frame with integrated drip tray and spark arrestor, it is engineered for continuous operation in tropical marine environments.",
      "Its dual-circuit hydraulic output enables simultaneous operation of a Mini-Pamper hull cleaning vehicle and a Single/Twin Brush unit.",
    ],
    specs: [
      { label: "Length", value: "2,000 mm" },
      { label: "Width", value: "1,050 mm" },
      { label: "Height", value: "1,350 mm" },
      { label: "Gross Weight", value: "1,450 kg (Wet)" },
      { label: "Prime Mover", value: "4-Cylinder Water-Cooled Diesel Engine (80 HP)" },
      { label: "Hydraulic Output", value: "Dual Circuit: 90 L/min + 45 L/min @ 160 bar" },
      { label: "Safety Features", value: "Chalwyn Valve, Spark Arrestor, Bunded Drip Tray, Emergency Stop" },
      { label: "Lifting Certification", value: "IMCA / Lloyd's / DNV Certified Lifting Skid & Slings" },
    ],
    images: ["/images/bpm-images/wd80.png"],
    prevSlug: "brushes-pads",
    nextSlug: "ld50-hydraulic-power-pack",
  },
  {
    slug: "ld50-hydraulic-power-pack",
    title: "LD50 Hydraulic Power Pack",
    subtitle: "Compact Mobile Diesel Hydraulic Power Unit",
    heroImage: "/images/bpm-images/main-headers.png",
    summary:
      "Compact, rapid-mobilization hydraulic power unit ideal for propeller polishing, twin-brush cleaning, and subsea hydraulic hand tools.",
    paragraphs: [
      "The LD50 Hydraulic Power Pack is designed for rapid mobilization onto smaller workboats, barges, or restricted vessel decks. Despite its compact footprint, it delivers reliable hydraulic flow and pressure to drive Twin Brush machines, Single Brush propeller polishers, and underwater grinders, saws, and impact wrenches.",
    ],
    specs: [
      { label: "Length", value: "1,550 mm" },
      { label: "Width", value: "900 mm" },
      { label: "Height", value: "1,150 mm" },
      { label: "Gross Weight", value: "880 kg (Wet)" },
      { label: "Prime Mover", value: "Industrial Diesel Engine (50 HP)" },
      { label: "Hydraulic Output", value: "65 L/min @ 150 bar" },
      { label: "Safety & Frame", value: "Roll-cage skid with certified lifting eyes & bunded base" },
    ],
    images: ["/images/bpm-images/ld50.png"],
    prevSlug: "wd80-hydraulic-power-pack",
    nextSlug: "hull-aperture-blanks",
  },
  {
    slug: "hull-aperture-blanks",
    title: "Hull Aperture Blanks",
    subtitle: "Class-Approved Subsea Sea-Chest & Overboard Blanks",
    heroImage: "/images/bpm-images/main-headers.png",
    summary:
      "Engineered external watertight blanks with a minimum safety factor of 4, enabling internal sea-valve overhaul and pipework repairs afloat.",
    paragraphs: [
      "Being able to blank off sea inlets and overboard discharges safely and quickly underwater is essential if costly delays or even unscheduled dockings are to be avoided. Our blanks are supplied to ships in service and new builds. Their designs are also suitable for semi-submersible oil rigs and other offshore structures that cannot easily be brought to the surface. FPSOs that are sometimes on station for 10–25 years rely on this kind of technology to enable them to remain on station.",
      "Thousands of our blanks have been supplied to hundreds of vessels, and individual blanks have been fitted and refitted many times without a single recorded failure. The design incorporates a minimum safety factor of 4, and all blanks may be inspected for Class approval on request. All our hull blanks are quality-checked to the highest standards.",
    ],
    specs: [
      { label: "Design Safety Factor", value: "Minimum Safety Factor of 4" },
      { label: "Class Approval", value: "Approved by major IACS Classification Societies (Lloyd's, DNV, ABS, BV)" },
      { label: "Applications", value: "Sea Chests, Overboard Discharges, Scrubber Outlets, FPSO Hull Apertures" },
      { label: "Sealing System", value: "High-compression marine neoprene perimeter seal with internal/external securing dogs" },
      { label: "Availability", value: "Custom-engineered per vessel drawings or emergency rapid-stock deployment" },
    ],
    images: ["/images/bpm-images/service-bg.png"],
    prevSlug: "ld50-hydraulic-power-pack",
    nextSlug: "mini-pamper",
  },
];

export const LOCATIONS_DATA: LocationPin[] = [
  {
    id: "uk",
    name: "United Kingdom",
    country: "Hertfordshire, UK",
    role: "International & Administrative Headquarters",
    xPercent: 48.5,
    yPercent: 25.5,
    image: "/images/bpm-images/uk.png",
    mapImage: "/images/bpm-images/uk-map.png",
    address: [
      "201 Maple House, High Street",
      "Potters Bar, Hertfordshire",
      "EN6 5BS, United Kingdom",
    ],
    phones: ["+44 (0) 20 3647 1441", "+44 (0) 7958 587 224"],
    emails: ["uk@bluephoenixmarine.com", "info@bluephoenixmarine.com"],
    description:
      "Administrative and International Operations Support, global partner coordination, procurement, and commercial shipbroking.",
  },
  {
    id: "lagos",
    name: "Lagos",
    country: "Nigeria (Apapa & Abuja)",
    role: "West Africa Operational Hub",
    xPercent: 50.8,
    yPercent: 52.5,
    image: "/images/bpm-images/lagos.png",
    mapImage: "/images/bpm-images/lagos-map.png",
    address: [
      "Operations: 41B Marine Road, Apapa, Lagos, Nigeria",
      "Administrative Office: Abuja, FCT, Nigeria",
    ],
    phones: ["+234 909 532 5443", "+234 818 815 5898"],
    emails: ["nigeria@bluephoenixmarine.com", "info@bluephoenixmarine.com"],
    description:
      "Full containerized IMCA-compliant diving spreads, DSV Phoenix 1 base, cofferdam fabrication, and Nigerian offshore logistics.",
  },
  {
    id: "takoradi",
    name: "Takoradi",
    country: "Ghana",
    role: "Ghana Offshore & Diving Base",
    xPercent: 48.0,
    yPercent: 53.2,
    image: "/images/bpm-images/takoradi.png",
    mapImage: "/images/bpm-images/takoradi-map.png",
    address: [
      "Operations: Takoradi Port Corridor, Takoradi, Ghana",
      "Corporate: 47 Dade Street, Labone, Accra, Ghana",
    ],
    phones: ["+233 30 279 8692"],
    emails: ["ghana@bluephoenixmarine.com", "info@bluephoenixmarine.com"],
    description:
      "Supporting Jubilee/TEN/Sankofa offshore fields and commercial vessels calling at Takoradi and Tema ports.",
  },
  {
    id: "accra",
    name: "Accra",
    country: "Ghana",
    role: "Regional Corporate Office",
    xPercent: 49.0,
    yPercent: 52.8,
    image: "/images/bpm-images/accra.png",
    mapImage: "/images/bpm-images/takoradi-map.png",
    address: ["47 Dade Street, Labone", "Accra, Ghana"],
    phones: ["+233 30 279 8692"],
    emails: ["ghana@bluephoenixmarine.com"],
    description:
      "Regional commercial administration, regulatory liaison, and Tema port maritime support.",
  },
  {
    id: "lome",
    name: "Lomé",
    country: "Togo & Benin Corridor",
    role: "Field Operational Facility",
    xPercent: 49.8,
    yPercent: 52.6,
    image: "/images/bpm-images/lome.png",
    address: [
      "Lomé Port Anchorage Facility, Lomé, Togo",
      "Field Support: Cotonou, Republic of Benin",
    ],
    phones: ["+44 (0) 20 3647 1441", "+234 909 532 5443"],
    emails: ["info@bluephoenixmarine.com"],
    description:
      "Rapid-response underwater hull cleaning, propeller polishing, and in-water surveys at Lomé and Cotonou deepwater anchorages.",
  },
];

export const PARTNERS_DATA = [
  {
    id: "umc",
    name: "UMC International",
    subtitle: "Global Leader in Afloat Ship Repair & Underwater Engineering",
    logo: "/images/bpm-images/partner-umc.png",
    highlights: [
      "Established in 1972 as Underwater Maintenance Company",
      "Pioneers of the Mini-Pamper hull cleaning vehicle and Rubert Scale propeller polishing",
      "Class-approved underwater welding, insert plate repairs, and stern seal habitats",
      "Accredited to ISO 9001, ISO 14001, and OHSAS 18001 / ISO 45001",
    ],
    paragraphs: [
      "UMC International is the premier provider of afloat repairs and underwater maintenance to the global commercial shipping, defence, and offshore oil & gas industries. Established in 1972, UMC has spent over four decades developing innovative class-approved repair techniques that eliminate the need for unscheduled dry-dockings.",
      "Through our strategic technical alliance, Blue Phoenix Marine brings UMC's specialized equipment, patented procedures, and coded diver-technicians directly to vessels and FPSOs operating across West Africa.",
    ],
  },
  {
    id: "subtech",
    name: "Subtech Group",
    subtitle: "Premier Subsea & Marine Contractor in Sub-Saharan Africa",
    logo: "/images/bpm-images/partner-subtech.png",
    highlights: [
      "Over 25 years of marine construction, salvage, and subsea operations in Africa",
      "IMCA Contractor Member across Diving and Remote Systems (ROV) divisions",
      "Accredited by ABS, Bureau Veritas, DNV, and Lloyd's Register",
      "Extensive fleet of multipurpose barges, tugs, and saturation/air diving spreads",
    ],
    paragraphs: [
      "Subtech Group is a leading marine and subsea contractor in Sub-Saharan Africa, delivering complex offshore construction, SPM/CBM terminal maintenance, pipeline installation, and emergency salvage response.",
      "Our partnership combines Subtech's heavy marine engineering assets and IMCA-accredited subsea infrastructure with Blue Phoenix Deepwater's regional presence, vessel fleet, and West African operational agility.",
    ],
  },
];

export const EXECUTIVE_TEAM = [
  {
    slug: "ade-ladele",
    name: "Adetunji Ladele",
    role: "Head of Global Operations",
    email: "ade.ladele@bluephoenixmarine.com",
    linkedin: "https://www.linkedin.com/in/ade-tunji-ladele-a0336734/",
    shortBio:
      "Ade is a multidisciplined International Shipping and Marine Business Development professional with achievements in initiating and building high-yield new business in Shipping, Marine Logistics and the Upstream Marine Services sector.",
    cardImage: "/images/bpm-images/ade-bg.png",
    portraitImage: "/images/bpm-images/profiles-ade.png",
    bannerLeftImage: "/images/bpm-images/ade-header-left.png",
    bannerCenterImage: "/images/bpm-images/ade-header-center.png",
    education: [
      "MBA in Strategic Marketing — University of Lincoln, United Kingdom",
      "BSc. in Biochemistry",
      "Founding Director — Blue Phoenix Marine (Established July 2016)",
    ],
    fullBio: [
      "Ade is a multidisciplined International Shipping and Marine Business Development professional with achievements in initiating and building high-yield new business in Shipping, Marine Logistics and the Upstream Marine Services sector.",
      "Ade is the founding Director of Blue Phoenix Marine and has a BSc. degree in Biochemistry and an MBA in Strategic Marketing from the University of Lincoln, United Kingdom. He began his professional career in Shipping and Trade Operations at Sahara Energy Group where he served for over 5 years.",
      "From Sahara, he moved to the UK where he attended business school, then joined James Fisher and Sons Plc Group where he headed the Marine Business Development, West Africa desk for the Fendercare Marine Services division of the group. Here, he built a portfolio of new business pipelines and contracts in excess of £550 Million in 4 years.",
      "He served there for almost 5 years before he was headhunted to work for a new division of a London-based ship owner — Union Maritime. He served there for almost 2 years before taking up a short engagement with NIDAS Marine, after which he established Blue Phoenix in July 2016.",
    ],
    coreCompetencies: [
      "Subsea IRM & Diving Operations Management",
      "Crude Oil & Gas Carrier Chartering & Commercial Management",
      "Marginal Field Hydrocarbon Evacuation & Marine Logistics",
      "Offshore Support Vessel (OSV / DSV) Acquisition & Operations",
      "International Joint Ventures & Technical Alliances (£550M+ pipeline track record)",
      "HSEQ & IMCA / ISO 9001:2015 Regulatory Compliance",
    ],
  },
];

export const TESTIMONIALS = [
  {
    company: "UMC International",
    quote:
      "Blue Phoenix Marine provide services that are unrivalled in the marine sector. They are fantastic to work with and offer a range of quality services which are vital to the success of marine shipping.",
    role: "Technical Alliance Partner",
  },
  {
    company: "Fender Care",
    quote:
      "We have worked with both Ade and Tunji on many projects and are happy to say that their professionalism and expertise is second to none. We would happily recommend BPM as the 'go to' service provider for all your marine needs.",
    role: "Offshore & Marine Partner",
  },
  {
    company: "Peters & May",
    quote:
      "We worked with Blue Phoenix on the delivery of DSV Phoenix 1. They were professional, courteous and organised. A well established company with a lot to offer the marine industry.",
    role: "Global Marine Logistics",
  },
];

export const CERTIFICATIONS_BAR = [
  { image: "/images/bpm-images/icon1.png", label: "COMPANY" },
  { image: "/images/bpm-images/icon2.png", label: "CERTIFIED" },
  { image: "/images/bpm-images/icon3.png", label: "CERTIFIED" },
  { image: "/images/bpm-images/icon4.png", label: "PARTNER" },
  { image: "/images/bpm-images/icon5.png", label: "PARTNER" },
  { image: "/images/bpm-images/icon6.png", label: "PARTNER" },
];

export const HSEQ_CONTENT = {
  commitmentTitle: "Our Commitment to HSEQ",
  commitmentSubtitle: "Health | Safety | Equipment | Quality",
  commitmentParagraphs: [
    "Our Health, Safety and Environment goals are to ensure we minimise any potential danger of injuring people, harming the environment and ensuring no loss or damage to equipment. Our performance of this is structured on our ability to continually improve our staff training methods and the quality of equipment we deploy for our operations.",
    "Team Leaders and Managers on all levels consistently communicate our core values, and through proactive and visible leadership, serve as role models. Safety consciousness is a core value and we are fully committed to this. With us, no job is so urgent that it cannot be done in a safe and environmentally responsible manner. We focus on prevention of incidents and minimising the impact of our operations on the environment. With us, safety will never be compromised.",
  ],
  focusAreas: [
    "Risk Management",
    "Behavioural Safety",
    "Effective Leadership and Commitment",
  ],
  qualityPolicyTitle: "Quality Policy (ISO 9001:2015)",
  qualityPolicyParagraphs: [
    "Blue Phoenix Deepwater Limited (BPDW) strives to provide superior underwater and surface marine solutions to its clients and exceed the clients' expectations. BPDW is committed to establishing, implementing and maintaining a quality management system that complies with the ISO 9001:2015 Quality Standard. We strive to achieve at least 80% client satisfaction and meet the requirements of all interested parties.",
  ],
  qualityCommitments: [
    "Ensure that the Quality Policy is clearly understood at all levels in the company;",
    "Show strong commitment in rendering superior services to its clients and exceeding their expectations;",
    "Comply with all statutory and regulatory requirements at all times;",
    "Maintain its Quality Management System through continuous improvement, best practices and positive change methods;",
    "Provide and maintain a conducive and healthy work environment;",
    "Maintain its corporate reputation by upholding its integrity and discipline in the industry;",
    "Motivate its employees through adequate compensation and empowerment plans;",
    "Ensure credible risk management in all processes.",
  ],
  pillars: [
    {
      title: "IMCA Audited Spreads",
      description:
        "Containerized dive control stations, primary/secondary air supplies, and twin-lock Deck Decompression Chambers on every operation.",
    },
    {
      title: "IACS Class Approved",
      description:
        "Procedures and NDT inspections recognized by Lloyd's Register, DNV, ABS, Bureau Veritas, and ClassNK.",
    },
    {
      title: "ISO 9001:2015 Aligned",
      description:
        "Rigorous quality management, preventive equipment maintenance, and traceable post-operation reporting.",
    },
    {
      title: "Zero-Harm Culture",
      description:
        "Comprehensive Job Safety Analyses (JSA), Permit-to-Work (PTW) adherence, and universal Stop Work Authority.",
    },
  ],
};

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getAdjacentServices(slug: string): {
  prev: ServiceItem;
  next: ServiceItem;
} {
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  if (idx === -1) {
    return { prev: SERVICES[0], next: SERVICES[1] };
  }
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];
  return { prev, next };
}

export function getEquipmentBySlug(slug: string): EquipmentItem | undefined {
  return EQUIPMENT_ITEMS.find((e) => e.slug === slug);
}
