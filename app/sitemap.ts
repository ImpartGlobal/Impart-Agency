import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const corePages = [
    { url: base, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${base}/get-to-know-us`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${base}/pricing`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${base}/privacy-policy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${base}/terms-and-conditions`, priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const servicePages = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  return [...corePages, ...servicePages].map((page) => ({
    ...page,
    lastModified: now,
  }));
}
