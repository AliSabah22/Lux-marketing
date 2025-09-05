import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";
  const staticRoutes = [
    "",
    "about",
    "services",
    "case-studies",
    "insights",
    "contact",
  ];

  const caseStudySlugs = ["aurum", "noir", "verdi"] as const;
  const insightSlugs = [
    "luxury-positioning",
    "creative-systems",
    "site-that-sells",
  ] as const;

  return [
    ...staticRoutes.map((path) => ({
      url: `${baseUrl}/${path}`.replace(/\/$/, "/"),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${baseUrl}/case-studies/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...insightSlugs.map((slug) => ({
      url: `${baseUrl}/insights/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}


