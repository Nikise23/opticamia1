import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/armazones/`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/visitanos/`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
