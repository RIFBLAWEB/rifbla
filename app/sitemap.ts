import type { MetadataRoute } from "next";

const BASE = "https://rifbla.vercel.app"; // update to https://rifbla.org after the domain switch

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/officers",
    "/chapters",
    "/events",
    "/resources",
    "/recognition",
    "/updates",
    "/contact",
    "/privacy",
  ].map((path) => ({
    url: `${BASE}${path}`,
    changeFrequency: path === "" || path === "/updates" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
