import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import { jsonLd, site, siteUrl } from "@/lib/site";
import "./globals.css";

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#F6F0E6",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Óptica Mía | San Miguel",
    template: "%s | Óptica Mía",
  },
  description:
    "Óptica Mía en San Miguel. Anteojos de receta, lentes de sol, contacto y ajustes. Julio A. Roca 720. Cambia tu forma de ver.",
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: site.name,
    title: "Óptica Mía | Cambia tu forma de ver",
    description:
      "Anteojos de receta, de sol y ajustes en Julio A. Roca 720, San Miguel.",
    images: [
      {
        url: "/fachada.webp",
        width: 709,
        height: 780,
        alt: "Fachada de Óptica Mía en San Miguel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Óptica Mía | Cambia tu forma de ver",
    description:
      "Anteojos de receta, de sol y ajustes en Julio A. Roca 720, San Miguel.",
    images: ["/fachada.webp"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${jost.className} h-full`}>
      <body className="min-h-full antialiased">
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
