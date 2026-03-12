import { WEBSITE_URL } from "@/constant";
import type { MetadataRoute } from "next";

const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
    { path: "", priority: 1, changeFrequency: "monthly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/products", priority: 0.95, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${WEBSITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));
}
