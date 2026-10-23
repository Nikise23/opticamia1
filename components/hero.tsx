"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArcPair } from "@/components/arcs";
import { SocialModal } from "@/components/social-modal";
import { focusEase } from "@/lib/motion";
import { site } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();
  const focus = {
    initial: reduce
      ? { filter: "blur(0px)", opacity: 1 }
      : { filter: "blur(8px)", opacity: 0.55 },
    animate: { filter: "blur(0px)", opacity: 1 },
    transition: { duration: reduce ? 0 : 0.9, ease: focusEase },
  };

  return (
    <section
      id="inicio"
      className="relative flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden"
    >
      <motion.div
        className="focus-target pointer-events-none absolute inset-0"
        aria-hidden="true"
        {...focus}
      >
        <ArcPair corner="top-right" />
        <ArcPair corner="bottom-left" />
      </motion.div>

      <div className="wrap relative z-10 flex flex-1 flex-col justify-end pb-8 pt-10 md:justify-center md:py-20">
        <p className="eyebrow">{site.cityLine}</p>
        <motion.h1 className="focus-target display mt-6 max-w-[12ch]" {...focus}>
          Cambia tu
          <br />
          forma de <span className="keyword">ver</span>
        </motion.h1>
        <p className="mt-8 max-w-[34ch] text-lg leading-snug md:text-xl">
          Anteojos de receta, de sol y ajustes. En Julio A. Roca 720, San Miguel.
        </p>
        <div className="mt-10">
          <SocialModal />
        </div>
      </div>

      <HeroGlasses />
    </section>
  );
}

function HeroGlasses() {
  return (
    <svg
      viewBox="0 0 680 300"
      className="pointer-events-none relative z-0 mt-6 w-full max-w-[460px] self-end md:absolute md:right-[4%] md:bottom-[10%] md:mt-0 md:w-[min(40vw,480px)]"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="176" cy="150" r="92" stroke="var(--navy)" strokeWidth="2" />
      <circle cx="384" cy="150" r="92" stroke="var(--navy)" strokeWidth="2" />
      <path
        d="M268 136c8 34 16 34 24 0"
        stroke="var(--navy)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M84 150H28" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M476 150h176" stroke="var(--navy)" strokeWidth="2" strokeLinecap="round" />
      <path d="M84 138v24M476 138v24" stroke="var(--navy)" strokeWidth="2" />
      <path
        d="M422 45a112 112 0 0 1 67 143"
        stroke="var(--orange)"
        strokeWidth="1.5"
      />
    </svg>
  );
}
