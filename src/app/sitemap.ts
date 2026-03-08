import { WEBSITE_URL } from "@/constant";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = WEBSITE_URL;
  return [
    { url: base, lastModified: new Date(), changeFrequency: "yearly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
  ];
}
