import type { Metadata } from "next";
import { SiteShell } from "@/components/site-shell";
import { Visit } from "@/components/visit";
import { fullAddress, site, siteUrl } from "@/lib/site";

const title = "Visitanos en San Miguel";
const description = `${site.name} en ${fullAddress}. Lunes a viernes por la tarde, jueves y sábados también a la mañana.`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/visitanos/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/visitanos/",
    siteName: site.name,
    title,
    description,
    images: [{ url: "/fachada.webp", alt: "Fachada de Óptica Mía en San Miguel" }],
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Visitanos", item: `${siteUrl}/visitanos/` },
  ],
};

export default function VisitanosPage() {
  return (
    <SiteShell>
      <main id="contenido">
        <Visit heading="h1" />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </SiteShell>
  );
}
