import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import { getServiceBySlug } from "@/content/services";
import { buildMetadata } from "@/lib/metadata";

const service = getServiceBySlug("article-writing");

export const metadata: Metadata = service
  ? buildMetadata({
      title: service.seo.title,
      description: service.seo.description,
      path: `/services/${service.slug}`,
    })
  : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
