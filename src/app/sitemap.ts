import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = COMPANY_INFO.productionUrl;

  const routes = [
    "",
    "/about",
    "/services",
    "/process",
    "/industries",
    "/contact",
    "/privacy-policy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-30"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
