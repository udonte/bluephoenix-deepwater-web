import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blue Phoenix Marine | Opener",
  description:
    "Blue Phoenix Marine is a UK based company operating in London and West Africa with regional strength in underwater ship inspection, repair and maintenance services.",
};

export default function IntroPage() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black select-none">
      {/* Fallback Cover Background (matches style="background-image:url('images/bpm-images/index-header.png')" in original index.html) */}
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/bpm-images/index-header.png"
          alt="Blue Phoenix Marine Opener"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div> */}

      {/* Light Black Opacity Layer (matches .opacity-light.bg-black) */}
      <div className="absolute inset-0 z-10 bg-black/20 pointer-events-none" />

      {/* Full-Screen HTML5 Phoenix Reveal Video (matches video/Phoenix_Reveal.mp4 in original index.html) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/imgur/ku20DqM.png"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      >
        <source src="/video/Phoenix_Reveal.mp4" type="video/mp4" />
      </video>

      {/* Subtle Enter Home CTA in Bottom Corner */}
      <div className="absolute bottom-8 right-8 z-20">
        <Link
          href="/"
          className="btn-sharp-white px-6 py-3 text-xs font-display font-bold uppercase tracking-[0.25em] bg-black/50 backdrop-blur-xs"
        >
          Enter Home &rarr;
        </Link>
      </div>
    </section>
  );
}
