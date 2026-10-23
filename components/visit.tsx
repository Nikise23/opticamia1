import Image from "next/image";
import { FocusHeading } from "@/components/focus-heading";
import { fullAddress, hours, mapsEmbed, mapsUrl, site } from "@/lib/site";

export function Visit({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  return (
    <section id="visitanos" className="bg-cream py-24 md:py-32">
      <div className="wrap grid items-start gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div className="order-2 border border-[var(--line)] bg-cream-2 md:order-1">
          <iframe
            title="Mapa de Óptica Mía en Julio A. Roca 720, San Miguel"
            src={mapsEmbed}
            className="block h-[420px] w-full md:h-[640px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="eyebrow">Visitanos</p>
          <FocusHeading
            as={heading}
            className="display-2 mt-5 max-w-[10ch]"
            title="Pasá por el local"
            accent="local"
          />
          <figure className="mt-10">
            <div className="relative aspect-square w-full overflow-hidden border border-[var(--line)] bg-cream-2">
              <Image
                src="/fachada.webp"
                alt="Fachada de Óptica Mía en Julio A. Roca 720, San Miguel"
                fill
                sizes="(min-width: 768px) 480px, 92vw"
                quality={90}
                className="object-cover object-center"
              />
            </div>
            <figcaption className="eyebrow mt-4">La fachada</figcaption>
          </figure>
          <address className="mt-10 not-italic">
            <p className="text-lg leading-snug">{site.address.street}</p>
            <p>
              {site.address.postalCode} {site.address.locality}
            </p>
            <p>{site.address.region}</p>
          </address>
          <dl className="mt-8 space-y-4">
            {hours.map((slot) => (
              <div key={slot.days}>
                <dt className="eyebrow">{slot.days}</dt>
                <dd className="mt-1">{slot.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8">
            <a className="underline decoration-1 underline-offset-4" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-3">
            <a
              className="underline decoration-1 underline-offset-4"
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram {site.instagramHandle}
            </a>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={site.whatsapp} target="_blank" rel="noreferrer">
              Contactanos
              <span className="sr-only"> por WhatsApp</span>
            </a>
            <a className="btn btn-ghost" href={mapsUrl} target="_blank" rel="noreferrer">
              Abrir en Google Maps
            </a>
          </div>
          <p className="sr-only">{fullAddress}</p>
        </div>
      </div>
    </section>
  );
}
