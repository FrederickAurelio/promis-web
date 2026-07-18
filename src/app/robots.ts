import { WEBSITE_URL } from "@/constant";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    host: WEBSITE_URL,
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  };
}
