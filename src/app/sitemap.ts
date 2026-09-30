import type { MetadataRoute } from "next";

import { categories } from "@/data/categories";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    ...categories.map((category) => `/productos/${category.slug}`),
    "/empresa",
    "/contacto",
  ];

  return paths.map((path) => ({ url: new URL(path, siteUrl).href }));
}
