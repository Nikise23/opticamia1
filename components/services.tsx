"use client";

import { useState } from "react";
import { FocusHeading } from "@/components/focus-heading";
import { services } from "@/lib/site";

export function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="servicios" className="bg-cream-2 py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow">Servicios</p>
        <FocusHeading
          className="display-2 mt-5 max-w-[11ch]"
          title="Cinco trabajos, un local"
          accent="local"
        />
        <ol className="mt-16 border-b border-[var(--line)]">
          {services.map((service) => {
            const panelId = `servicio-${service.number}`;
            const isOpen = open === service.number;
            return (
              <li
                key={service.number}
                className={`service border-t border-[var(--line)] ${isOpen ? "is-open" : ""}`}
              >
                <div className="grid grid-cols-[3.25rem_1fr] items-baseline gap-4 md:grid-cols-[4.5rem_1fr]">
                  <span className="text-xl font-light md:text-2xl">{service.number}</span>
                  <h3 className="text-[clamp(1.7rem,3vw,2.7rem)] font-light leading-none">
                    <button
                      type="button"
                      className="min-h-11 w-full py-6 md:py-8"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpen((current) =>
                          current === service.number ? null : service.number,
                        )
                      }
                    >
                      {service.title}
                    </button>
                  </h3>
                </div>
                <div className="service-panel" id={panelId}>
                  <div>
                    <p className="max-w-[42ch] pb-7 pl-[4.25rem] md:pl-[5.5rem]">
                      {service.text}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
