export const contact = {
  email: "info@impartagency.co.za",
  phone: "+27 (0) 10 000 0000",
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "27100000000",
    defaultMessage: "Hi Impart Agency, I'd like to discuss a project.",
  },
  address: {
    line1: "",
    line2: "",
    city: "Johannesburg",
    province: "Gauteng",
    country: "South Africa",
    postalCode: "",
    googleMapsUrl: "",
    googleMapsEmbed: "",
  },
  officeHours: {
    weekdays: "Monday – Friday: 08:00 – 17:00",
    weekends: "Closed",
    note: "We typically respond to enquiries within 2 business hours.",
  },
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
};

export const contactReasons = [
  "New Website",
  "Ecommerce Store",
  "Laravel / Web App",
  "App Development",
  "AI Services",
  "SEO",
  "Google Ads / PPC",
  "Article Writing / Content",
  "Branding & Design",
  "Website Maintenance",
  "General Enquiry",
];
