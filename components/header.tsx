"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-navy" aria-label="Óptica Mía, inicio">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Secciones">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className="inline-flex min-h-11 items-center text-xs tracking-[0.14em] uppercase aria-[current=page]:underline aria-[current=page]:decoration-1 aria-[current=page]:underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
          <a className="btn btn-ghost" href={site.whatsapp} target="_blank" rel="noreferrer">
            Escribinos
          </a>
        </nav>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <X strokeWidth={1.5} aria-hidden="true" />
          ) : (
            <Menu strokeWidth={1.5} aria-hidden="true" />
          )}
          <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
        </button>
      </div>
      <nav
        id="site-menu"
        hidden={!open}
        className="border-t border-[var(--line)] bg-cream md:hidden"
        aria-label="Secciones"
      >
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={pathname === item.href ? "page" : undefined}
            className="flex min-h-11 items-center border-b border-[var(--line)] px-5 text-xs tracking-[0.14em] uppercase aria-[current=page]:underline aria-[current=page]:decoration-1 aria-[current=page]:underline-offset-4"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <a
          className="btn btn-ghost mx-5 my-4"
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Escribinos
        </a>
      </nav>
    </header>
  );
}
