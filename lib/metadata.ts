import type { Metadata } from "next";
import { site } from "@/content/site";

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${site.name}`
    : site.seo.defaultTitle;
  const resolvedDescription = description ?? site.seo.defaultDescription;
  const resolvedOgImage = ogImage ?? site.seo.ogImage;
  const canonical = `${site.url}${path}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(site.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url: canonical,
      siteName: site.name,
      locale: site.locale,
      type: "website",
      images: [
        {
          url: resolvedOgImage,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      site: site.seo.twitterHandle,
      images: [resolvedOgImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
