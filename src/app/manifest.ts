import { BRAND_SHORT, COMPANY_NAME, WEBSITE_URL } from "@/constant";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: BRAND_SHORT,
    description:
      "Promis Chain supplies high-quality conveyor chains for palm oil mills and industrial systems in Indonesia.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    lang: "id-ID",
    scope: "/",
    id: WEBSITE_URL,
    icons: [
      {
        src: "/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
