"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { FocusHeading } from "@/components/focus-heading";
import { ModelPhoto } from "@/components/model-photo";
import { models } from "@/lib/models";
import { modelWhatsapp } from "@/lib/site";

export function Gallery() {
  const trackRef = useRef<HTMLUListElement>(null);
  const indexRef = useRef(0);
  const resumeRef = useRef<number | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();

  const go = useCallback((next: number) => {
    const track = trackRef.current;
    const normalized = (next + models.length) % models.length;
    const item = track?.children[normalized] as HTMLElement | undefined;
    if (!track || !item) return;
    const motionOff = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const left =
      item.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft;
    track.scrollTo({ left, behavior: motionOff ? "auto" : "smooth" });
    indexRef.current = normalized;
    setIndex(normalized);
  }, []);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => {
      go(indexRef.current + 1);
    }, 4000);
    return () => window.clearInterval(id);
  }, [paused, reduce, go]);

  useEffect(() => {
    return () => {
      if (resumeRef.current) window.clearTimeout(resumeRef.current);
    };
  }, []);

  function hold() {
    setPaused(true);
    if (resumeRef.current) window.clearTimeout(resumeRef.current);
  }

  function releaseSoon() {
    if (resumeRef.current) window.clearTimeout(resumeRef.current);
    resumeRef.current = window.setTimeout(() => setPaused(false), 6000);
  }

  function onScroll() {
    const track = trackRef.current;
    if (!track) return;
    const left = track.scrollLeft;
    let nearest = 0;
    let best = Number.POSITIVE_INFINITY;
    Array.from(track.children).forEach((child, childIndex) => {
      const distance = Math.abs((child as HTMLElement).offsetLeft - track.offsetLeft - left);
      if (distance < best) {
        best = distance;
        nearest = childIndex;
      }
    });
    indexRef.current = nearest;
    setIndex(nearest);
  }

  return (
    <section id="armazones" className="overflow-hidden bg-cream-2 py-24 md:py-32">
      <div className="wrap">
        <p className="eyebrow">Armazones</p>
        <FocusHeading
          className="display-2 mt-5 max-w-[11ch]"
          title="Formas para probarse"
          accent="probarse"
        />
        <p className="mt-6 max-w-[36ch]">
          Algunos modelos del local. Si te gusta uno, consultalo. El catálogo completo está en{" "}
          <a className="underline decoration-1 underline-offset-4" href="/armazones">
            Armazones
          </a>
          .
        </p>
        <div
          className="mt-14"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Armazones del local"
        >
          <ul ref={trackRef} className="gallery-track" onScroll={onScroll}>
            {models.map((model) => (
              <li key={model.id}>
                <div
                  className="model-slide"
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") hold();
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType !== "mouse") return;
                    if (resumeRef.current) window.clearTimeout(resumeRef.current);
                    setPaused(false);
                  }}
                >
                  <div className="model-frame">
                    <ModelPhoto
                      model={model}
                      sizes="(min-width: 768px) 280px, 78vw"
                      onCycle={releaseSoon}
                    />
                  </div>
                  <p className="model-name eyebrow mt-4">{model.name}</p>
                  <a
                    className="btn btn-primary model-ask"
                    href={modelWhatsapp(model.name)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Consultar este modelo
                  </a>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex items-center gap-3">
            <button
              type="button"
              className="gallery-control"
              aria-label="Modelo anterior"
              onClick={() => go(index - 1)}
            >
              <ChevronLeft strokeWidth={1.5} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="gallery-control"
              aria-label="Modelo siguiente"
              onClick={() => go(index + 1)}
            >
              <ChevronRight strokeWidth={1.5} aria-hidden="true" />
            </button>
            <p className="eyebrow ml-2">
              {String(index + 1).padStart(2, "0")} / {String(models.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
