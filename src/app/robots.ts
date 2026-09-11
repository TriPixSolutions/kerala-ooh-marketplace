import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://hyly.luxury/sitemap.xml",
    host: "https://hyly.luxury",
  };
}
