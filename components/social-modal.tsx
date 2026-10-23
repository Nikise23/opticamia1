"use client";

import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { site } from "@/lib/site";

const networks = [
  { href: site.whatsapp, label: "WhatsApp", Mark: WhatsappMark },
  { href: site.instagram, label: "Instagram", Mark: InstagramMark },
  { href: site.tiktok, label: "TikTok", Mark: TiktokMark },
] as const;

export function SocialModal() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const items = Array.from(dialog.querySelectorAll<HTMLElement>("a, button"));
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previous?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        Nuestras redes
      </button>
      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[90] grid place-items-center bg-navy/50 p-6"
              onClick={() => setOpen(false)}
            >
              <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                tabIndex={-1}
                className="w-full max-w-md border border-navy bg-cream p-6 text-navy md:p-8"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 id={titleId} className="text-2xl font-light">
                    Nuestras redes
                  </h2>
                  <button
                    type="button"
                    className="inline-flex min-h-11 min-w-11 items-center justify-center"
                    aria-label="Cerrar"
                    onClick={() => setOpen(false)}
                  >
                    <X strokeWidth={1.5} aria-hidden="true" />
                  </button>
                </div>
                <ul className="mt-8 grid grid-cols-3 gap-3">
                  {networks.map((network) => (
                    <li key={network.label}>
                      <a
                        className="flex min-h-11 flex-col items-center justify-center gap-3 border border-[var(--line)] px-2 py-4 text-xs tracking-[0.12em] uppercase"
                        href={network.href}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <network.Mark />
                        <span>{network.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

function WhatsappMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.41a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.83C21.94 6.4 17.5 2 12.04 2Zm5.76 14.15c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.14-.95-.31-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.28.64-.41 1.02-.41.12 0 .23 0 .33.01.3.01.44.03.64.5.24.58.82 2 .89 2.15.07.14.12.32.02.51-.09.19-.14.31-.28.48-.14.16-.29.37-.42.49-.14.14-.28.28-.12.55.16.27.71 1.17 1.52 1.9 1.05.93 1.93 1.22 2.2 1.36.28.14.44.12.6-.07.16-.19.7-.81.88-1.09.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.46.21.53.32.07.12.07.67-.17 1.35Z"
      />
    </svg>
  );
}

function InstagramMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function TiktokMark() {
  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.2 3h2.3c.2 1.8 1.2 3.3 2.8 4.2 1 .6 2 .9 3.2 1v2.4c-1.3-.1-2.5-.4-3.6-1v6.7c0 3.5-2.8 6.3-6.4 6.3S6.1 19.8 6.1 16.3c0-3.4 2.7-6.2 6.1-6.3v2.5c-2 .1-3.7 1.8-3.7 3.8 0 2.1 1.7 3.8 3.8 3.8s3.8-1.7 3.8-3.8V3Z"
      />
    </svg>
  );
}
