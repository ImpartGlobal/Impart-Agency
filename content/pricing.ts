export type PricingFaq = {
  question: string;
  answer: string;
};

export type PricingTier = {
  id: string;
  title: string;
  tagline: string;
  averageProjectValue: string;
  rateType: "project" | "monthly" | "hourly";
  hourlyRate?: string;
  description: string;
  includes: string[];
  faqs: PricingFaq[];
  cta: string;
  ctaHref: string;
  highlighted?: boolean;
};

export const pricingTiers: PricingTier[] = [
  {
    id: "wordpress",
    title: "WordPress Websites",
    tagline: "Custom-built websites that perform",
    averageProjectValue: "R15,000 – R65,000",
    rateType: "project",
    hourlyRate: "R750/hr",
    description:
      "Bespoke WordPress websites designed and built around your brand and goals. Includes design, development, on-page SEO setup, and a training handover.",
    includes: [
      "Custom design (no page builder templates)",
      "Up to 10 pages (additional pages quoted)",
      "On-page SEO foundation",
      "Contact and lead capture forms",
      "Mobile-first, responsive build",
      "Speed and performance optimisation",
      "Google Analytics 4 setup",
      "30-day post-launch support",
    ],
    faqs: [
      {
        question: "How long does a WordPress build take?",
        answer:
          "A standard WordPress website typically takes 4–8 weeks from approved design to launch. Larger projects or those requiring complex integrations may take longer.",
      },
      {
        question: "Do I need to buy hosting separately?",
        answer:
          "Yes — we recommend and help you set up quality managed WordPress hosting. We can manage this on your behalf as part of our maintenance retainer.",
      },
      {
        question: "Can I update the website myself after launch?",
        answer:
          "Absolutely. We build with an intuitive admin interface and provide a training session so your team can manage content without a developer.",
      },
      {
        question: "What if I need changes after launch?",
        answer:
          "We offer a 30-day post-launch period for minor adjustments. Beyond that, we offer ad-hoc hourly support or ongoing maintenance retainers.",
      },
    ],
    cta: "Get a Free Quote",
    ctaHref: "/contact?service=wordpress-websites",
  },
  {
    id: "ecommerce",
    title: "Ecommerce Websites",
    tagline: "Online stores built to convert",
    averageProjectValue: "R25,000 – R95,000",
    rateType: "project",
    hourlyRate: "R750/hr",
    description:
      "WooCommerce and custom ecommerce stores with local payment gateway integration, conversion-optimised UX, and full product catalogue setup.",
    includes: [
      "WooCommerce or custom ecommerce platform",
      "PayFast, Peach Payments, or Yoco integration",
      "Product catalogue setup (up to 50 products)",
      "Checkout flow optimisation",
      "Order management backend",
      "Product SEO structure",
      "Mobile-first design",
      "Shipping and tax configuration (SA)",
    ],
    faqs: [
      {
        question: "Which payment gateways do you support?",
        answer:
          "We integrate with all major South African payment gateways including PayFast, Peach Payments, Yoco, and PayGate. We can also integrate with Stripe for international transactions.",
      },
      {
        question: "Can you migrate my existing store?",
        answer:
          "Yes — we handle product catalogue migrations from Shopify, WooCommerce, and other platforms. Data migration is quoted based on volume.",
      },
      {
        question: "Do you help with product photography or descriptions?",
        answer:
          "We offer product description copywriting as an add-on service. For photography, we can recommend trusted partners.",
      },
    ],
    cta: "Start Selling Online",
    ctaHref: "/contact?service=ecommerce-websites",
    highlighted: true,
  },
  {
    id: "laravel",
    title: "Laravel Portals",
    tagline: "Enterprise web applications, built to spec",
    averageProjectValue: "R45,000 – R250,000+",
    rateType: "project",
    hourlyRate: "R850/hr",
    description:
      "Bespoke Laravel web applications for complex business requirements — CRMs, portals, dashboards, booking systems, and more. Scoped individually.",
    includes: [
      "Full requirements discovery and scoping",
      "Database architecture and API design",
      "Custom admin dashboard",
      "Role-based access control",
      "Third-party API integrations",
      "Automated test suite",
      "Production deployment",
      "Full code documentation and handover",
    ],
    faqs: [
      {
        question: "How do you scope a Laravel project?",
        answer:
          "We start with a paid discovery engagement to document all requirements, data models, and integrations. This produces a detailed scope and fixed-price or time-and-materials quote.",
      },
      {
        question: "Do you offer ongoing development after launch?",
        answer:
          "Yes — we offer monthly retainer arrangements for ongoing feature development, maintenance, and support.",
      },
      {
        question: "Who owns the code?",
        answer:
          "You do. Full source code is handed over upon final payment, with no licensing restrictions.",
      },
    ],
    cta: "Discuss Your Project",
    ctaHref: "/contact?service=laravel-websites",
  },
  {
    id: "app-development",
    title: "App Development",
    tagline: "Mobile apps for iOS & Android",
    averageProjectValue: "R65,000 – R350,000+",
    rateType: "project",
    hourlyRate: "R950/hr",
    description:
      "React Native and native mobile app development. From MVP to full production release — UX-first, performance-obsessed, and built for real user needs.",
    includes: [
      "UX research and prototype",
      "React Native cross-platform build",
      "iOS and Android deployment",
      "Backend API (Laravel or Node.js)",
      "Push notification system",
      "App Store & Google Play submission",
      "App Store Optimisation",
      "3 months post-launch support",
    ],
    faqs: [
      {
        question: "How long does an MVP app take to build?",
        answer:
          "A focused MVP with core features typically takes 10–16 weeks. Complex apps with many integrations will take longer.",
      },
      {
        question: "React Native vs native — which is right for me?",
        answer:
          "React Native suits most business apps — it delivers a great experience at roughly half the cost of two native apps. We recommend native only when you need maximum device hardware access or extreme performance.",
      },
      {
        question: "Do you handle App Store submission?",
        answer:
          "Yes — we manage the full submission process for both the Apple App Store and Google Play Store, including store listing optimisation.",
      },
    ],
    cta: "Build Your App",
    ctaHref: "/contact?service=app-development",
  },
  {
    id: "digital-advertising",
    title: "Digital Advertising",
    tagline: "Paid campaigns managed for ROI",
    averageProjectValue: "From R5,500/month",
    rateType: "monthly",
    description:
      "Google Ads, Meta Ads, and multi-channel PPC management. We take over underperforming accounts or build from scratch — obsessively focused on cost-per-lead.",
    includes: [
      "Google Search campaign setup and management",
      "Google Display and YouTube (where relevant)",
      "Meta Ads (Facebook and Instagram)",
      "Monthly keyword and bid optimisation",
      "Conversion tracking setup (GA4 + GTM)",
      "A/B ad copy testing",
      "Landing page optimisation recommendations",
      "Monthly performance report",
    ],
    faqs: [
      {
        question: "Is the management fee separate from the ad spend?",
        answer:
          "Yes — our management fee is charged separately from your ad spend budget, which goes directly to Google or Meta. We're transparent about both.",
      },
      {
        question: "What is the minimum ad spend recommended?",
        answer:
          "We recommend a minimum of R5,000/month in ad spend for Google Search. Below this, there's insufficient data to optimise effectively. Meta Ads can perform well from R3,000/month.",
      },
      {
        question: "How quickly will I see results?",
        answer:
          "Google Search can generate leads from day one. Typically month 2–3 is when campaigns are fully optimised and cost-per-lead stabilises.",
      },
    ],
    cta: "Get a Campaign Audit",
    ctaHref: "/contact?service=ppc",
  },
  {
    id: "seo",
    title: "SEO Services",
    tagline: "Organic growth that compounds",
    averageProjectValue: "R4,500 – R18,000/month",
    rateType: "monthly",
    description:
      "Full-service SEO including technical auditing, on-page optimisation, content strategy, and link building. Monthly retainer with clear deliverables and reporting.",
    includes: [
      "Full technical SEO audit (month 1)",
      "Keyword research and mapping",
      "On-page optimisation (priority pages)",
      "Google Business Profile management",
      "Monthly content recommendations",
      "Link building outreach",
      "Monthly ranking and traffic report",
      "Strategy call each month",
    ],
    faqs: [
      {
        question: "How long before I see SEO results?",
        answer:
          "Meaningful ranking improvements typically appear between months 3–6. SEO is a compounding channel — the longer you invest, the better the return. We set realistic expectations from the start.",
      },
      {
        question: "Do you write the content or do I?",
        answer:
          "We offer content writing as an add-on to SEO retainers. We can produce all content, work with your team, or a hybrid approach.",
      },
      {
        question: "What do you report on each month?",
        answer:
          "We report on keyword rankings, organic traffic, new and lost links, technical health, and goal completions. You get a clear dashboard, not a wall of meaningless data.",
      },
    ],
    cta: "Get a Free SEO Audit",
    ctaHref: "/contact?service=seo",
  },
  {
    id: "branding",
    title: "Branding Solutions",
    tagline: "Identities that command respect",
    averageProjectValue: "R12,000 – R65,000",
    rateType: "project",
    description:
      "Complete brand identity systems for startups and rebrands. Logo design, visual identity, brand guidelines, and marketing collateral — everything in one engagement.",
    includes: [
      "Brand strategy and positioning session",
      "Logo suite (primary, secondary, icon)",
      "Colour palette and typography system",
      "Brand guidelines document",
      "Business card design",
      "Email signature design",
      "Social media profile assets",
      "All source files (AI, EPS, SVG, PNG, PDF)",
    ],
    faqs: [
      {
        question: "What if I only need a logo?",
        answer:
          "We offer logo-only packages starting from R5,500. However, a logo without a consistent identity system often leads to brand inconsistency. We'll advise what's right for your stage.",
      },
      {
        question: "How many logo concepts do I get?",
        answer:
          "We present two to three distinct directions in the initial round, then refine the chosen direction through two revision rounds.",
      },
      {
        question: "Do I own the final designs?",
        answer:
          "Yes — upon final payment you receive full ownership of all design assets and source files.",
      },
    ],
    cta: "Start Your Brand Project",
    ctaHref: "/contact?service=branding-graphic-design",
  },
  {
    id: "content",
    title: "Content Creation",
    tagline: "Words that rank and convert",
    averageProjectValue: "R3,500 – R18,000/month",
    rateType: "monthly",
    description:
      "Monthly SEO content packages — blog articles, web copy, product descriptions, and social copy written by professionals who understand your market.",
    includes: [
      "Monthly content strategy and topic plan",
      "SEO-optimised blog articles",
      "Web page copy (as required)",
      "Product description writing",
      "Meta title and description copywriting",
      "Internal linking strategy",
      "Content calendar management",
      "Monthly content performance report",
    ],
    faqs: [
      {
        question: "How many articles per month?",
        answer:
          "Packages range from 2 to 8 articles per month depending on your budget and goals. We recommend a minimum of 4 per month for meaningful SEO impact.",
      },
      {
        question: "Do you specialise in any industries?",
        answer:
          "We've written for finance, legal, property, healthcare, ecommerce, hospitality, and technology sectors. We conduct deep research for any new industry.",
      },
      {
        question: "Can you match our existing brand voice?",
        answer:
          "Yes — we start with a brand voice session to capture your tone, style, and any existing content examples before writing a word.",
      },
    ],
    cta: "Get a Content Plan",
    ctaHref: "/contact?service=article-writing",
  },
];
