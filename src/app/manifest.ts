import type { MetadataRoute } from "next";
import { defaultDescription, siteName } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteName,
    short_name: "Crédito al Instante",
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#1E3A8A",
    theme_color: "#1E3A8A",
    lang: "es-CO",
    icons: [
      {
        src: "/logo.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
