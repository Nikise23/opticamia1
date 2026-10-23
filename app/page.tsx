import type { Metadata } from "next";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { SiteShell } from "@/components/site-shell";
import { Visit } from "@/components/visit";
import { Why } from "@/components/why";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function Page() {
  return (
    <SiteShell>
      <main id="contenido">
        <Hero />
        <Services />
        <Process />
        <Gallery />
        <Why />
        <Visit />
      </main>
    </SiteShell>
  );
}
