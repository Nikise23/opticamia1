import type { Metadata } from "next";
import { FramesBrowser } from "@/components/frames-browser";
import { FocusHeading } from "@/components/focus-heading";
import { SiteShell } from "@/components/site-shell";
import { models } from "@/lib/models";
import { site, siteUrl } from "@/lib/site";

const title = "Armazones en San Miguel";
const description =
  "Armazones de receta, de sol y con clip en Óptica Mía, San Miguel. Mirá los modelos del local y consultá por WhatsApp.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/armazones/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/armazones/",
    siteName: site.name,
    title,
    description,
    images: [{ url: "/fachada.webp", alt: "Fachada de Óptica Mía en San Miguel" }],
  },
};

const itemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Armazones de Óptica Mía",
  numberOfItems: models.length,
  itemListElement: models.map((model, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: model.name,
    url: `${siteUrl}/armazones/#${model.id}`,
  })),
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Armazones", item: `${siteUrl}/armazones/` },
  ],
};

export default function ArmazonesPage() {
  return (
    <SiteShell>
      <main id="contenido" className="bg-cream py-16 md:py-24">
        <div className="wrap">
          <p className="eyebrow">El local</p>
          <FocusHeading
            as="h1"
            className="display-2 mt-5 max-w-[12ch]"
            title="Armazones para probarse"
            accent="probarse"
          />
          <p className="mt-6 max-w-[40ch]">
            Modelos del local. Buscá por nombre o filtrá por tipo, y consultá el que te guste.
          </p>
          <FramesBrowser />
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </SiteShell>
  );
}
