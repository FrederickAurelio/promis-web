import { getAllBlogPosts } from "@/content/blog/posts";
import { WEBSITE_URL } from "@/constant";
import type { MetadataRoute } from "next";

const LAST_MODIFIED = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: Array<{
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  }> = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/products", priority: 0.95, changeFrequency: "weekly" },
    { path: "/about", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
  ];

  const staticEntries = pages.map(({ path, priority, changeFrequency }) => ({
    url: `${WEBSITE_URL}${path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency,
    priority,
  }));

  const blogEntries = getAllBlogPosts().map((post) => ({
    url: `${WEBSITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
