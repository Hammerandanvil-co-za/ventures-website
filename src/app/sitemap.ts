import type { MetadataRoute } from "next";
import { SITE_ORIGIN } from "../lib/site";
import { getAllPosts } from "../lib/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_ORIGIN + "/", changeFrequency: "weekly", priority: 1 },
    { url: SITE_ORIGIN + "/about-us", changeFrequency: "weekly", priority: 0.7 },
    { url: SITE_ORIGIN + "/blog", changeFrequency: "weekly", priority: 0.7 },
    { url: SITE_ORIGIN + "/contact-us", changeFrequency: "weekly", priority: 0.7 },
    { url: SITE_ORIGIN + "/our-services", changeFrequency: "weekly", priority: 0.7 },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${SITE_ORIGIN}/${post.year}/${post.month}/${post.day}/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
