"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { FocusHeading } from "@/components/focus-heading";
import { steps } from "@/lib/site";

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 72%", "end 55%"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 0.4], [6, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <section id="proceso" className="bg-cream py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow">Cómo trabajamos</p>
        <FocusHeading
          className="display-2 mt-5 max-w-[12ch]"
          title="De la consulta al retiro"
          accent="retiro"
        />
        <div ref={trackRef} className="process-track mt-16 md:mt-20">
          <div className="process-line" aria-hidden="true" />
          <motion.span
            className="process-lens focus-target"
            style={
              reduce
                ? { ["--p" as string]: 1, filter: "none" }
                : { ["--p" as string]: progress, filter }
            }
            aria-hidden="true"
          />
          <ol className="process-steps">
            {steps.map((step) => (
              <li key={step.number} className="flex items-start gap-5 md:flex-col md:pr-10">
                <span className="step-dot mt-0.5" />
                <div>
                  <p className="eyebrow">{step.number}</p>
                  <h3 className="mt-3 text-[clamp(1.6rem,2.5vw,2.15rem)] font-light leading-tight">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-[28ch]">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
