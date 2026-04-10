export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: string;
  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };
  overview: string;
  benefits: { title: string; description: string }[];
  process: { step: number; title: string; description: string }[];
  outcomes: string[];
  relatedSlugs: string[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const services: Service[] = [
  {
    slug: "wordpress-websites",
    title: "WordPress Websites",
    shortTitle: "WordPress",
    tagline: "Fast, scalable websites that convert visitors into customers.",
    description:
      "We design and build bespoke WordPress websites engineered for speed, search visibility, and conversion — so your digital presence works as hard as you do.",
    icon: "Globe",
    hero: {
      headline: "WordPress Websites Built to Perform",
      subheadline:
        "Custom-designed, conversion-focused WordPress sites that load fast, rank higher, and represent your brand at its best.",
      cta: "Get a Free Quote",
    },
    overview:
      "Our WordPress builds go far beyond off-the-shelf themes. Every site is designed from scratch around your brand, built with clean code, optimised for Core Web Vitals, and structured to support your SEO goals from day one. Whether you're a startup needing a professional web presence or an established business looking to modernise, we deliver sites that make the right impression — and drive the right actions.",
    benefits: [
      {
        title: "Built for Speed",
        description:
          "We optimise every layer — hosting, images, scripts, and caching — so your site scores green on Lighthouse and loads in under 2 seconds.",
      },
      {
        title: "Conversion-First Design",
        description:
          "Every layout decision is made with one goal: turning visitors into leads or customers. Clear CTAs, logical flow, and trust-building elements throughout.",
      },
      {
        title: "SEO-Ready from Day One",
        description:
          "Semantic HTML, proper heading structure, schema markup, fast load times, and clean URLs give you a strong SEO foundation before a single blog post is written.",
      },
      {
        title: "Easy to Manage",
        description:
          "We build with user-friendly page builders and clear documentation so your team can update content without a developer.",
      },
      {
        title: "Secure & Maintained",
        description:
          "We apply security hardening, automatic backups, and ongoing plugin management to keep your site safe and stable.",
      },
      {
        title: "Mobile-First",
        description:
          "Over 60% of South African web traffic is mobile. Every site we build is responsive and pixel-perfect on all screen sizes.",
      },
    ],
    process: [
      { step: 1, title: "Discovery", description: "We map your goals, audience, and competitive landscape before writing a line of code." },
      { step: 2, title: "Design", description: "Custom wireframes and high-fidelity mockups reviewed and approved before development begins." },
      { step: 3, title: "Development", description: "Clean, optimised WordPress build with all integrations, forms, and functionality configured." },
      { step: 4, title: "Review & Refine", description: "You test the site on a staging environment and request revisions before go-live." },
      { step: 5, title: "Launch", description: "We deploy, test across devices, and submit your sitemap to search engines." },
      { step: 6, title: "Support", description: "Ongoing maintenance, updates, and optimisation to keep your site performing." },
    ],
    outcomes: [
      "Professional brand presence that builds trust immediately",
      "Measurable improvement in lead generation and enquiries",
      "Reduced bounce rate from fast load times",
      "Higher search rankings over time",
      "A site your team can manage without a developer",
    ],
    relatedSlugs: ["ecommerce-websites", "seo", "branding-graphic-design"],
    seo: {
      title: "WordPress Website Design & Development in South Africa",
      description:
        "Custom WordPress websites designed and built in South Africa. Fast, secure, SEO-ready sites that convert visitors into customers. Get a free quote from Impart Agency.",
      keywords: [
        "wordpress website design south africa",
        "wordpress development johannesburg",
        "custom wordpress website",
        "wordpress agency south africa",
      ],
    },
  },
  {
    slug: "ecommerce-websites",
    title: "Ecommerce Websites",
    shortTitle: "Ecommerce",
    tagline: "Online stores built to sell — day one and beyond.",
    description:
      "We build high-converting ecommerce solutions using WooCommerce and custom platforms, designed around your products, your customers, and the South African market.",
    icon: "ShoppingCart",
    hero: {
      headline: "Ecommerce That Actually Sells",
      subheadline:
        "From WooCommerce storefronts to fully custom checkout flows, we build online stores engineered for revenue — not just aesthetics.",
      cta: "Start Selling Online",
    },
    overview:
      "A beautiful product page means nothing if the checkout leaks customers. We approach ecommerce with a conversion lens at every step — product discovery, cart mechanics, checkout flow, payment integrations, and post-purchase experience. Whether you're launching your first store or rebuilding an underperforming one, we deliver a complete selling machine backed by strategy.",
    benefits: [
      {
        title: "Conversion-Optimised Checkout",
        description: "Frictionless checkout flows that reduce cart abandonment and maximise completed orders.",
      },
      {
        title: "Local Payment Gateways",
        description: "Integration with PayFast, Peach Payments, Yoco, and other South African payment providers.",
      },
      {
        title: "Inventory & Order Management",
        description: "Full WooCommerce or custom back-end so you manage stock, orders, and fulfilment in one place.",
      },
      {
        title: "Product SEO",
        description: "Schema markup, optimised product descriptions, and category structure to rank for commercial search terms.",
      },
      {
        title: "Mobile Commerce Ready",
        description: "Shopping experiences designed mobile-first, because most South African shoppers browse on their phones.",
      },
      {
        title: "Scalable Architecture",
        description: "Built to handle product catalogue growth, traffic spikes, and promotional events without downtime.",
      },
    ],
    process: [
      { step: 1, title: "Store Strategy", description: "Define your product catalogue, customer journey, and revenue goals." },
      { step: 2, title: "UX Design", description: "Wireframe the full shopping experience from browse to post-purchase confirmation." },
      { step: 3, title: "Build & Integrate", description: "Develop the store with your chosen payment gateways, shipping rules, and tax settings." },
      { step: 4, title: "Content & Products", description: "Upload or migrate your product catalogue with SEO-optimised descriptions." },
      { step: 5, title: "Testing", description: "End-to-end order testing across devices and payment scenarios." },
      { step: 6, title: "Launch & Optimise", description: "Go live and monitor conversion metrics to continuously improve performance." },
    ],
    outcomes: [
      "A fully operational online store from day one",
      "Higher average order values through strategic upsell and cross-sell",
      "Reduced cart abandonment",
      "Streamlined order fulfilment and inventory management",
      "Organic traffic from product and category SEO",
    ],
    relatedSlugs: ["wordpress-websites", "seo", "ppc"],
    seo: {
      title: "Ecommerce Website Development in South Africa | Impart Agency",
      description:
        "WooCommerce and custom ecommerce websites built for South African businesses. Local payment gateways, mobile-first design, conversion-optimised checkout. Get a quote.",
      keywords: [
        "ecommerce website south africa",
        "woocommerce development johannesburg",
        "online store south africa",
        "ecommerce agency south africa",
      ],
    },
  },
  {
    slug: "laravel-websites",
    title: "Laravel Websites",
    shortTitle: "Laravel",
    tagline: "Custom web portals and enterprise applications, engineered to last.",
    description:
      "When off-the-shelf software can't do what your business needs, we build bespoke Laravel web applications — scalable, secure, and exactly right for the problem.",
    icon: "Code2",
    hero: {
      headline: "Custom Web Applications Built on Laravel",
      subheadline:
        "Bespoke portals, internal tools, and enterprise web applications engineered for your exact requirements — no compromises.",
      cta: "Discuss Your Project",
    },
    overview:
      "Laravel is the gold standard for robust PHP web applications. We use it to build custom CRMs, client portals, booking systems, HR platforms, B2B dashboards, and more. Our applications are architected for security, scalability, and long-term maintainability — with clean code your team can hand back to any developer.",
    benefits: [
      { title: "Fully Custom Logic", description: "Every business rule, workflow, and data model built exactly to your specification." },
      { title: "Secure by Default", description: "Laravel's built-in security features combined with our hardening practices keep your data safe." },
      { title: "API-First Architecture", description: "Build once, expose via API — integrate with mobile apps, third-party tools, and future systems." },
      { title: "Role-Based Access Control", description: "Granular user permissions so every team member sees exactly what they need." },
      { title: "Real-Time Features", description: "Live dashboards, notifications, and collaborative features using WebSockets where needed." },
      { title: "Maintainable Codebase", description: "Well-documented, tested, and structured code that any Laravel developer can pick up." },
    ],
    process: [
      { step: 1, title: "Requirements Mapping", description: "Deep discovery to document every feature, user role, and integration requirement." },
      { step: 2, title: "Architecture Design", description: "Database schema, API contracts, and system architecture agreed before development." },
      { step: 3, title: "Iterative Development", description: "Agile sprints with regular demos so you see progress and provide feedback continuously." },
      { step: 4, title: "QA & Testing", description: "Automated tests, manual QA, and user acceptance testing before launch." },
      { step: 5, title: "Deployment", description: "Production deployment on your preferred cloud infrastructure." },
      { step: 6, title: "Handover & Support", description: "Full documentation and ongoing support retainer options." },
    ],
    outcomes: [
      "A purpose-built tool that fits your exact workflow",
      "Reduced manual processes and operational overhead",
      "Scalable infrastructure that grows with your business",
      "Clean codebase ready for future development",
      "Integration with your existing systems and data",
    ],
    relatedSlugs: ["app-development", "wordpress-websites", "ai-services"],
    seo: {
      title: "Laravel Web Application Development South Africa | Impart Agency",
      description:
        "Custom Laravel web portals, CRMs, and enterprise applications built in South Africa. Scalable, secure, and purpose-built for your business. Request a quote.",
      keywords: [
        "laravel development south africa",
        "custom web application johannesburg",
        "bespoke web portal south africa",
        "laravel agency south africa",
      ],
    },
  },
  {
    slug: "app-development",
    title: "App Development",
    shortTitle: "App Dev",
    tagline: "Mobile and web apps your customers actually want to use.",
    description:
      "We design and build native and cross-platform mobile applications for iOS and Android — focused on user experience, performance, and business outcomes.",
    icon: "Smartphone",
    hero: {
      headline: "Apps Built Around Your Users",
      subheadline:
        "From MVP to enterprise-grade — we design and develop mobile apps that solve real problems, perform flawlessly, and grow with your business.",
      cta: "Build Your App",
    },
    overview:
      "The difference between a good app and a failed one is almost always strategy and UX — not technology. We start with the problem your users need solved, design the simplest path to solving it, then build with the right technology for your scale and timeline. React Native for cross-platform reach, native Swift/Kotlin for maximum performance.",
    benefits: [
      { title: "Cross-Platform Efficiency", description: "One codebase, two stores — React Native delivers native-quality experiences on iOS and Android." },
      { title: "User-Centred Design", description: "UX research and iterative prototyping ensure your app is intuitive from the first tap." },
      { title: "Offline Capability", description: "Apps that work in South Africa's variable connectivity environment — with offline-first architecture where needed." },
      { title: "Push Notifications & Engagement", description: "Smart notification systems that drive re-engagement without annoying users." },
      { title: "App Store Optimisation", description: "Store listing optimisation to improve discoverability and download rate." },
      { title: "Backend & API Integration", description: "Seamlessly connected to your existing systems, databases, and third-party services." },
    ],
    process: [
      { step: 1, title: "Product Discovery", description: "Define the core problem, target user, and minimum viable feature set." },
      { step: 2, title: "UX Prototyping", description: "Clickable prototypes validated with real users before development begins." },
      { step: 3, title: "Development", description: "Agile build with weekly releases to TestFlight / internal testing." },
      { step: 4, title: "QA & Beta Testing", description: "Device testing, performance profiling, and beta user feedback." },
      { step: 5, title: "Store Submission", description: "App Store and Google Play submission with optimised listings." },
      { step: 6, title: "Post-Launch Iteration", description: "Analyse usage data and ship improvements based on real user behaviour." },
    ],
    outcomes: [
      "A polished app in both major app stores",
      "High user retention from intuitive UX",
      "Scalable backend ready for user growth",
      "Data-driven feature roadmap post-launch",
      "A competitive advantage in your market",
    ],
    relatedSlugs: ["laravel-websites", "ai-services", "branding-graphic-design"],
    seo: {
      title: "Mobile App Development South Africa | Impart Agency",
      description:
        "iOS and Android app development for South African businesses. React Native and native mobile apps built with UX-first methodology. Get a quote from Impart Agency.",
      keywords: [
        "app development south africa",
        "mobile app developer johannesburg",
        "react native development south africa",
        "ios android app south africa",
      ],
    },
  },
  {
    slug: "ai-services",
    title: "AI Services",
    shortTitle: "AI",
    tagline: "Practical AI integrations that save time and create competitive advantage.",
    description:
      "We implement AI-powered automations, chatbots, content tools, and intelligent workflows that give your business a real edge — without the hype.",
    icon: "Sparkles",
    hero: {
      headline: "AI That Works for Your Business",
      subheadline:
        "Practical AI integrations — not experiments. Chatbots, automations, content tools, and intelligent workflows built into your existing systems.",
      cta: "Explore AI for Your Business",
    },
    overview:
      "Most South African businesses are sitting on significant efficiency gains that AI can unlock today. We cut through the noise and identify the specific automations and integrations that will save your team hours, improve customer experience, and create measurable value — then we build and integrate them into your existing tech stack.",
    benefits: [
      { title: "AI-Powered Chatbots", description: "Intelligent customer service bots that handle FAQs, qualify leads, and escalate to humans when needed — 24/7." },
      { title: "Content Automation", description: "AI-assisted content generation pipelines for product descriptions, blog posts, and marketing copy." },
      { title: "Process Automation", description: "Connect your tools and automate repetitive workflows using AI-powered orchestration." },
      { title: "Data Analysis", description: "AI-driven insights from your business data — surfacing patterns a spreadsheet would miss." },
      { title: "Custom GPT Integrations", description: "Custom large language model implementations tailored to your industry knowledge and tone." },
      { title: "API Integrations", description: "Connect leading AI APIs (OpenAI, Anthropic, Google) to your existing systems cleanly and securely." },
    ],
    process: [
      { step: 1, title: "Opportunity Audit", description: "Identify where AI will deliver the highest ROI for your specific business." },
      { step: 2, title: "Solution Design", description: "Map the right AI tools and integration architecture for your needs." },
      { step: 3, title: "Build & Integrate", description: "Develop and connect AI capabilities to your existing platforms." },
      { step: 4, title: "Test & Tune", description: "Rigorous testing and prompt/model tuning before deployment." },
      { step: 5, title: "Deploy & Train", description: "Launch and train your team on the new capabilities." },
      { step: 6, title: "Monitor & Improve", description: "Ongoing performance monitoring and continuous improvement." },
    ],
    outcomes: [
      "Hours saved per week through automation",
      "24/7 customer service capability without headcount",
      "Faster content production at lower cost",
      "Data-driven decisions from AI analytics",
      "Competitive advantage through early AI adoption",
    ],
    relatedSlugs: ["laravel-websites", "app-development", "article-writing"],
    seo: {
      title: "AI Services & Integration for South African Businesses | Impart Agency",
      description:
        "Practical AI integrations for South African businesses — chatbots, automations, content tools, and intelligent workflows. Built by Impart Agency.",
      keywords: [
        "ai services south africa",
        "ai integration johannesburg",
        "business ai automation south africa",
        "chatbot development south africa",
      ],
    },
  },
  {
    slug: "seo",
    title: "SEO",
    shortTitle: "SEO",
    tagline: "Organic search growth that compounds month after month.",
    description:
      "We build and execute SEO strategies that increase your visibility on Google — driving qualified organic traffic that converts into real business.",
    icon: "TrendingUp",
    hero: {
      headline: "SEO That Drives Real Revenue",
      subheadline:
        "Not just rankings — qualified traffic that converts. We build sustainable organic growth strategies for South African businesses.",
      cta: "Get Your Free SEO Audit",
    },
    overview:
      "SEO is the highest-ROI digital marketing channel over the long run — but only when done properly. We combine technical site auditing, content strategy, on-page optimisation, and authoritative link building into a coherent monthly strategy that compounds over time. We work with local SEO, national campaigns, and ecommerce catalogue optimisation.",
    benefits: [
      { title: "Technical SEO Audit", description: "We identify and fix every technical issue preventing your site from ranking — speed, crawlability, structured data, indexation." },
      { title: "Keyword Strategy", description: "Deep research into the search terms your customers actually use, mapped to your business goals." },
      { title: "On-Page Optimisation", description: "Metadata, heading structure, internal linking, and content optimisation across your key pages." },
      { title: "Local SEO", description: "Google Business Profile optimisation and local citation building to dominate local search in your area." },
      { title: "Content Strategy", description: "A blog and content plan built around ranking opportunities that attract your ideal customers." },
      { title: "Link Building", description: "Authoritative backlink acquisition that strengthens your domain's trust and ranking power." },
    ],
    process: [
      { step: 1, title: "Audit", description: "Full technical and content audit to identify your current gaps and opportunities." },
      { step: 2, title: "Strategy", description: "A prioritised keyword map and 6-month content and optimisation roadmap." },
      { step: 3, title: "Technical Fixes", description: "Implement all technical improvements in month one." },
      { step: 4, title: "On-Page", description: "Optimise priority pages for target keywords." },
      { step: 5, title: "Content & Links", description: "Ongoing content production and link acquisition each month." },
      { step: 6, title: "Report & Optimise", description: "Monthly reporting on rankings, traffic, and conversions — with strategy adjustments." },
    ],
    outcomes: [
      "Consistent growth in organic search rankings",
      "More qualified website visitors every month",
      "Reduced dependency on paid advertising",
      "Long-term compounding return on investment",
      "Measurable business leads from organic search",
    ],
    relatedSlugs: ["wordpress-websites", "article-writing", "ppc"],
    seo: {
      title: "SEO Services South Africa | Impart Agency",
      description:
        "Results-driven SEO services for South African businesses. Technical SEO, content strategy, local SEO, and link building. Get a free audit from Impart Agency.",
      keywords: [
        "seo services south africa",
        "seo agency johannesburg",
        "local seo south africa",
        "search engine optimisation south africa",
      ],
    },
  },
  {
    slug: "ppc",
    title: "PPC / Google Ads",
    shortTitle: "PPC",
    tagline: "Paid campaigns that make every rand work harder.",
    description:
      "We manage Google Ads, Meta Ads, and multi-channel paid campaigns with obsessive attention to ROI — maximising leads and sales from every rand spent.",
    icon: "BarChart3",
    hero: {
      headline: "Paid Advertising That Pays Back",
      subheadline:
        "Google Ads, Meta, and programmatic campaigns managed for maximum ROI. No wasted spend — every rand tracked, tested, and optimised.",
      cta: "Get a Campaign Audit",
    },
    overview:
      "Too many South African businesses are paying too much for too few results from their paid advertising. We take over poorly structured or overspending accounts, rebuild them with tight targeting and quality creative, and turn them into reliable lead generation engines. New to paid ads? We'll build your campaigns correctly from the start.",
    benefits: [
      { title: "Google Search Campaigns", description: "Capture high-intent customers searching for exactly what you offer — with tightly controlled budgets and bidding." },
      { title: "Google Display & Remarketing", description: "Keep your brand visible to warm prospects who've already visited your site." },
      { title: "Meta Ads (Facebook & Instagram)", description: "Highly targeted social campaigns for awareness, lead generation, and retargeting." },
      { title: "Landing Page Optimisation", description: "Campaign-specific landing pages designed to convert the traffic you're paying for." },
      { title: "Conversion Tracking", description: "Full Google Analytics 4 and Tag Manager setup so you know exactly what's working." },
      { title: "Monthly Reporting", description: "Clear, jargon-free reports showing spend, leads, cost per lead, and ROAS." },
    ],
    process: [
      { step: 1, title: "Account Audit", description: "Review your existing campaigns (or research competitors if starting fresh)." },
      { step: 2, title: "Strategy & Setup", description: "Campaign structure, keyword lists, audience targeting, and ad copy." },
      { step: 3, title: "Launch", description: "Go live with conservative budgets and close monitoring in week one." },
      { step: 4, title: "Optimise", description: "Continuous bid adjustments, negative keyword additions, and A/B testing." },
      { step: 5, title: "Scale", description: "Increase budgets on winning campaigns and cut losers." },
      { step: 6, title: "Report", description: "Monthly performance review and strategy alignment." },
    ],
    outcomes: [
      "More qualified leads at a predictable cost per acquisition",
      "Elimination of wasted ad spend",
      "Full transparency into campaign performance",
      "Scalable campaigns that grow with your budget",
      "Faster results than organic channels",
    ],
    relatedSlugs: ["seo", "ecommerce-websites", "branding-graphic-design"],
    seo: {
      title: "Google Ads & PPC Management South Africa | Impart Agency",
      description:
        "PPC and Google Ads management for South African businesses. ROI-focused paid advertising that generates qualified leads. Get a free audit from Impart Agency.",
      keywords: [
        "google ads south africa",
        "ppc management south africa",
        "google ads agency johannesburg",
        "paid advertising south africa",
      ],
    },
  },
  {
    slug: "article-writing",
    title: "Article Writing",
    shortTitle: "Content",
    tagline: "Content that ranks, educates, and converts.",
    description:
      "We produce high-quality, SEO-optimised articles and website copy written by professionals who understand both search engines and your audience.",
    icon: "FileText",
    hero: {
      headline: "Content That Does the Work",
      subheadline:
        "SEO-optimised articles, blog posts, and web copy that attract the right visitors, build authority, and convert readers into customers.",
      cta: "Get a Content Plan",
    },
    overview:
      "Most business content fails because it's written to fill space, not to serve a reader or a search engine. Our writers produce strategically planned, thoroughly researched content that targets specific keywords, answers real questions, and guides readers toward a conversion. We handle everything from ideation to publish-ready copy.",
    benefits: [
      { title: "Keyword-Led Strategy", description: "Every piece of content targets a specific search opportunity aligned to your business goals." },
      { title: "Industry Research", description: "Thoroughly researched articles that demonstrate genuine expertise and build reader trust." },
      { title: "SEO Formatting", description: "Proper heading structure, meta descriptions, internal linking, and schema where applicable." },
      { title: "Brand Voice Consistency", description: "We develop and maintain a consistent tone of voice that represents your brand accurately." },
      { title: "Regular Publishing", description: "Consistent monthly content output that signals freshness to search engines." },
      { title: "South African Context", description: "Content written with the South African market, language, and business context in mind." },
    ],
    process: [
      { step: 1, title: "Topic Research", description: "Identify ranking opportunities from keyword research and competitor gaps." },
      { step: 2, title: "Content Brief", description: "Detailed brief with target keyword, structure, word count, and angle." },
      { step: 3, title: "Writing", description: "Research-led writing by experienced content professionals." },
      { step: 4, title: "SEO Optimisation", description: "On-page optimisation, internal links, and metadata." },
      { step: 5, title: "Review", description: "Your team reviews and approves before publishing." },
      { step: 6, title: "Publish & Monitor", description: "Publish and track rankings month by month." },
    ],
    outcomes: [
      "Growing library of high-ranking content assets",
      "Increased organic traffic from long-tail searches",
      "Established topical authority in your niche",
      "More informed and qualified leads",
      "Consistent brand voice across all channels",
    ],
    relatedSlugs: ["seo", "branding-graphic-design", "wordpress-websites"],
    seo: {
      title: "SEO Article Writing & Content Creation South Africa | Impart Agency",
      description:
        "Professional SEO article writing and content creation for South African businesses. Keyword-led, research-backed, conversion-focused copy. Get a quote.",
      keywords: [
        "seo content writing south africa",
        "article writing south africa",
        "blog writing south africa",
        "content creation agency south africa",
      ],
    },
  },
  {
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    shortTitle: "Branding",
    tagline: "Identities that command attention and build lasting recognition.",
    description:
      "We create brand identities that go beyond a logo — a complete visual language that communicates who you are, builds trust, and makes you unmistakable in your market.",
    icon: "Palette",
    hero: {
      headline: "Branding That Makes You Unmistakable",
      subheadline:
        "From logo to full brand identity — we build the visual language that sets you apart, commands premium, and makes every touchpoint unforgettable.",
      cta: "Start Your Brand Project",
    },
    overview:
      "Great branding isn't decoration — it's a strategic asset. A strong visual identity builds instant credibility, justifies premium pricing, and creates the consistency that turns customers into advocates. We work with startups building from zero and established businesses ready to sharpen their image — delivering brand systems that scale from business card to billboard.",
    benefits: [
      { title: "Logo & Identity System", description: "A complete logo suite with usage guidelines that looks right in every context." },
      { title: "Brand Strategy", description: "Positioning, personality, tone of voice, and messaging architecture that differentiates you." },
      { title: "Colour & Typography", description: "A deliberate palette and typeface system that communicates the right mood and values." },
      { title: "Brand Guidelines", description: "A comprehensive style guide your whole team and any future agency can follow consistently." },
      { title: "Marketing Collateral", description: "Business cards, presentation templates, brochures, social media templates — all on-brand." },
      { title: "Digital-First Design", description: "Assets optimised for web, social, and digital advertising as well as print." },
    ],
    process: [
      { step: 1, title: "Brand Discovery", description: "Understand your positioning, competitors, audience, and aspirations." },
      { step: 2, title: "Strategy", description: "Define your brand personality, values, and messaging pillars." },
      { step: 3, title: "Visual Exploration", description: "Mood boards and initial concepts in different directions." },
      { step: 4, title: "Design Development", description: "Refine the chosen direction into a complete identity system." },
      { step: 5, title: "Guidelines & Assets", description: "Deliver brand guidelines and all required asset files." },
      { step: 6, title: "Collateral", description: "Apply the brand to all required marketing and communication materials." },
    ],
    outcomes: [
      "A professional identity that commands premium pricing",
      "Consistency across every customer touchpoint",
      "Instant recognition and trust with your target audience",
      "Assets ready for web, print, and social media",
      "A brand you're proud to put in front of anyone",
    ],
    relatedSlugs: ["wordpress-websites", "article-writing", "ppc"],
    seo: {
      title: "Branding & Graphic Design South Africa | Impart Agency",
      description:
        "Brand identity and graphic design for South African businesses. Logo design, brand strategy, and full identity systems. Get a quote from Impart Agency.",
      keywords: [
        "branding south africa",
        "graphic design johannesburg",
        "logo design south africa",
        "brand identity south africa",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): Service[] {
  return services.filter((s) => slugs.includes(s.slug));
}
