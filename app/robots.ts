import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/login/", "/coming-soon/"],
    },
    sitemap: "https://flockdesk.com/sitemap.xml",
    host: "https://flockdesk.com",
  };
}
