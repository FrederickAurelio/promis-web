import { COMPANY_NAME, WEBSITE_URL } from "@/constant";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY_NAME,
    short_name: "Promis Chain",
    description:
      "Conveyor chain dan sprocket untuk pabrik kelapa sawit serta kebutuhan industri di Indonesia.",
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
