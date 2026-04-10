import { site } from "@/content/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.seo.defaultDescription,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      addressCountry: "ZA",
    },
    areaServed: {
      "@type": "Country",
      name: "South Africa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Agency Services",
      itemListElement: [
        "WordPress Websites",
        "Ecommerce Websites",
        "Laravel Web Applications",
        "Mobile App Development",
        "AI Services",
        "SEO",
        "PPC / Google Ads",
        "Article Writing",
        "Branding & Graphic Design",
      ].map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
      })),
    },
    sameAs: [
      site.social.facebook,
      site.social.instagram,
      site.social.linkedin,
      site.social.twitter,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
