// import { MetadataRoute } from "next";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: {
//       userAgent: "*",
//       allow: "/",
//       disallow: ["/api/", "/admin/", "/login/", "/coming-soon/"],
//     },
//     sitemap: "https://flockdesk.com/sitemap.xml",
//     host: "https://flockdesk.com",
//   };
// }

import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/login/", "/coming-soon/"],
    },
    sitemap: [
      "https://flockdesk.com/sitemap.xml",
      "https://blog.flockdesk.com/post-sitemap.xml",
      "https://blog.flockdesk.com/page-sitemap.xml",
      "https://blog.flockdesk.com/category-sitemap.xml",
      "https://blog.flockdesk.com/author-sitemap.xml",
    ],
    host: "https://flockdesk.com",
  };
}
