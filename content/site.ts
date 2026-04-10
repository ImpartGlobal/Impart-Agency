export const site = {
  name: "Impart Agency",
  tagline: "The Results-Driven Digital Agency",
  description:
    "We build the digital infrastructure that grows South African businesses. Websites, apps, SEO, paid ads — everything you need to win online.",
  url: "https://impartagency.co.za",
  locale: "en-ZA",
  email: "info@impartagency.co.za",
  phone: "+27 (0) 10 000 0000",
  whatsapp: "27100000000",
  address: {
    street: "",
    city: "Johannesburg",
    province: "Gauteng",
    country: "South Africa",
    postalCode: "",
  },
  social: {
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    twitter: process.env.NEXT_PUBLIC_TWITTER_URL ?? "",
  },
  seo: {
    titleTemplate: "%s | Impart Agency",
    defaultTitle: "Impart Agency — The Results-Driven Digital Agency in South Africa",
    defaultDescription:
      "Impart Agency is a results-driven digital agency based in South Africa. We specialise in websites, app development, SEO, PPC, branding, and AI services.",
    ogImage: "/og-default.png",
    twitterHandle: "@impartagency",
  },
  legalName: "Impart Agency",
  vatNumber: "",
  registrationNumber: "",
  relatedEntities: [
    {
      name: "2KO Business Advisory Group",
      relationship: "affiliated advisory partner",
    },
  ],
};
