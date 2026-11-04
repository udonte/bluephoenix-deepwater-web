import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Montserrat,
  JetBrains_Mono,
} from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Blue Phoenix Marine | Superior Underwater Surface & Marine Solutions",
    template: "%s | Blue Phoenix Marine",
  },
  description:
    "Blue Phoenix Marine (Blue Phoenix Deepwater Limited) provides world-class Underwater Ship IRM, Hull Cleaning, Propeller Polishing, Subsea Welding, Offshore Terminal Maintenance, and Vessel Supply across the UK and West Africa.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlowCondensed.variable} ${montserrat.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-[#3273a5] selection:text-white"
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
