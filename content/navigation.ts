export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "WordPress Websites", href: "/services/wordpress-websites" },
      { label: "Ecommerce Websites", href: "/services/ecommerce-websites" },
      { label: "Laravel Websites", href: "/services/laravel-websites" },
      { label: "App Development", href: "/services/app-development" },
      { label: "AI Services", href: "/services/ai-services" },
      { label: "SEO", href: "/services/seo" },
      { label: "PPC / Google Ads", href: "/services/ppc" },
      { label: "Article Writing", href: "/services/article-writing" },
      { label: "Branding & Graphic Design", href: "/services/branding-graphic-design" },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Get to Know Us", href: "/get-to-know-us" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  services: [
    { label: "WordPress Websites", href: "/services/wordpress-websites" },
    { label: "Ecommerce Websites", href: "/services/ecommerce-websites" },
    { label: "Laravel Websites", href: "/services/laravel-websites" },
    { label: "App Development", href: "/services/app-development" },
    { label: "AI Services", href: "/services/ai-services" },
    { label: "SEO", href: "/services/seo" },
    { label: "PPC / Google Ads", href: "/services/ppc" },
    { label: "Article Writing", href: "/services/article-writing" },
    { label: "Branding & Design", href: "/services/branding-graphic-design" },
  ],
  company: [
    { label: "Get to Know Us", href: "/get-to-know-us" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};
