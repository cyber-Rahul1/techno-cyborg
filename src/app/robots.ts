import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/lib/data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${COMPANY_INFO.productionUrl}/sitemap.xml`,
  };
}
