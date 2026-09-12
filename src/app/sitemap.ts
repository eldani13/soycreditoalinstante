import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = getSiteUrl();
  const lastModified = new Date();

  return [
    {
      url,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${url}/store`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${url}/puntoVenta`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${url}/solicitudCredito`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
