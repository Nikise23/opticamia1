import { ArcPair } from "@/components/arcs";
import { Logo } from "@/components/logo";
import { copyrightYear, fullAddress, site } from "@/lib/site";


export function Footer() {
  return (
    <footer className="on-navy relative overflow-hidden bg-navy text-cream">
      <ArcPair corner="bottom-left" thick="var(--cream)" />
      <div className="wrap relative flex flex-col gap-8 py-16 pb-28 md:pb-16">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Páginas">
          <a className="inline-flex min-h-11 items-center underline decoration-1 underline-offset-4" href="/armazones">
            Armazones
          </a>
          <a className="inline-flex min-h-11 items-center underline decoration-1 underline-offset-4" href="/visitanos">
            Visitanos
          </a>
        </nav>
        <a
          className="inline-flex min-h-11 items-center underline decoration-1 underline-offset-4"
          href={site.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Instagram {site.instagramHandle}
        </a>
        <p className="max-w-[28ch]">{fullAddress}</p>
        <p className="text-sm tracking-[0.08em]">
          © {copyrightYear} {site.name}
        </p>
      </div>
    </footer>
  );
}
