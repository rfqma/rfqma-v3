import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/projects"],
      // disallow: '/private/',
    },
    sitemap: "https://rfqm.xyz/sitemap.xml",
  };
}
