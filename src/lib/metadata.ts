import type { Metadata } from "next";

import { siteDescription } from "@/lib/site";

const siteName = "Argenpel";

// A page that sets openGraph replaces the inherited openGraph entirely,
// including the image from src/app/opengraph-image.jpg, so every page builds
// it from this base.
export const baseOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "es_AR",
  siteName,
  images: [{ url: "/opengraph-image.jpg", width: 1200, height: 630 }],
};

type PageMetadataOptions = {
  title?: string;
  description?: string;
  path: string;
};

export function pageMetadata({
  title,
  description = siteDescription,
  path,
}: PageMetadataOptions): Metadata {
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      ...baseOpenGraph,
      title: title ? `${title} | ${siteName}` : siteName,
      description,
      url: path,
    },
  };
}
