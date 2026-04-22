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
  /** Optional stack callout — used by AI service pages. */
  stack?: string[];
  /** Optional FAQ pairs — used by AI service pages. */
  faqs?: { question: string; answer: string }[];
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
  // ─── AI Services (primary propositions) ────────────────────────────────────

  {
    slug: "custom-ai-applications",
    title: "Custom AI Applications",
    shortTitle: "Custom AI",
    tagline: "The AI product your customers (or your team) actually use.",
    description:
      "Off-the-shelf AI tools are great for typing faster. But the AI that moves numbers is the one built on your data, for your users, in your brand. We design and ship custom AI apps — copilots, RAG systems, internal tools, client-facing products — end to end.",
    icon: "Cpu",
    hero: {
      headline: "Custom AI Applications",
      subheadline:
        "Off-the-shelf AI tools are great for typing faster. But the AI that moves numbers is the one built on your data, for your users, in your brand. We design and ship custom AI apps — copilots, RAG systems, internal tools, client-facing products — end to end.",
      cta: "Request a Proposal",
    },
    overview:
      "A custom AI application is a product, not a chatbot. We design the interface, architect the retrieval and reasoning layer, integrate with your systems, and ship it as a stable piece of software your team or customers rely on every day. Web, mobile, or embedded — in your brand, on your terms.",
    benefits: [
      { title: "Built on your data", description: "Not fine-tuned on the internet. Your knowledge base, your documents, your schemas." },
      { title: "Your brand, your UX", description: "Your logins, your interface — not another SaaS tab your team has to learn." },
      { title: "Model-agnostic", description: "Anthropic, OpenAI, open-source. We pick per use case and explain the tradeoff before we choose." },
      { title: "POPIA-compliant deployment", description: "On-prem, VPC, or Azure South Africa North. Regional hosting from day one." },
      { title: "First production release in 6–10 weeks", description: "Not a pilot. A stable piece of software in the hands of real users." },
      { title: "Full IP ownership", description: "Code, prompts, datasets. All yours. We sign a mutual NDA before we see anything sensitive." },
    ],
    process: [
      { step: 1, title: "Scope", description: "Define the use case, the users, and the measurable outcome the application will drive." },
      { step: 2, title: "Design", description: "Interface prototypes and retrieval architecture agreed before a line of code is written." },
      { step: 3, title: "Data prep", description: "Ingest, clean, and index your source data for the retrieval layer." },
      { step: 4, title: "Build", description: "Application development with weekly releases to internal staging." },
      { step: 5, title: "Beta", description: "Controlled rollout to a subset of real users. Measure, tune, fix." },
      { step: 6, title: "Launch", description: "Production deployment with monitoring, alerting, and a handover pack." },
    ],
    outcomes: [
      "6–10 weeks from kickoff to production.",
      "Example: a professional services firm's internal research copilot cuts analyst prep time per report from six hours to forty-five minutes.",
    ],
    faqs: [
      {
        question: "Who owns the model and the data?",
        answer: "You do. Code, prompts, fine-tuning datasets, and any customer data stay with you. We sign a mutual NDA before we see anything sensitive.",
      },
      {
        question: "Which AI model do you use?",
        answer: "Whichever fits the job. Anthropic for reasoning-heavy work, OpenAI where it's strongest, open-source (Llama, Mistral) where cost or sovereignty demands it. We explain the tradeoff before we pick.",
      },
      {
        question: "What about hallucinations?",
        answer: "We design for it. Retrieval-grounded generation, citation-first UX, confidence thresholds, and human-in-the-loop on anything consequential. We'd rather ship an app that says \"I don't know\" than one that makes things up.",
      },
      {
        question: "Can it be hosted in South Africa?",
        answer: "Yes. Azure South Africa North, AWS Cape Town, or on-prem where needed. POPIA compliance is in the architecture from day one.",
      },
      {
        question: "What happens if we want to take it in-house later?",
        answer: "You can. We document the stack, hand over the repo, and train your engineers. No vendor lock-in.",
      },
    ],
    relatedSlugs: ["ai-strategy-roadmap", "data-foundations", "ai-accelerated-growth"],
    seo: {
      title: "Custom AI Application Development South Africa | Impart Agency",
      description:
        "Custom AI applications — copilots, RAG systems, internal tools — built on your data, in your brand. POPIA-compliant. Production in 6–10 weeks. Impart Agency.",
      keywords: [
        "custom ai application south africa",
        "rag system development",
        "ai copilot development south africa",
        "enterprise ai application",
      ],
    },
  },

  {
    slug: "ai-strategy-roadmap",
    title: "AI Strategy & Roadmap",
    shortTitle: "AI Strategy",
    tagline: "Two-week audit. Ranked opportunities. Real plan.",
    description:
      "Most AI strategy decks rot in a shared drive. Ours don't — because we're the ones who'll build what's in them. In two weeks, we audit your data and systems, shortlist AI opportunities by expected rand value, and hand you a roadmap we're ready to execute against.",
    icon: "Map",
    hero: {
      headline: "AI Strategy & Roadmap",
      subheadline:
        "Most AI strategy decks rot in a shared drive. Ours don't — because we're the ones who'll build what's in them. In two weeks, we audit your data and systems, shortlist AI opportunities by expected rand value, and hand you a roadmap we're ready to execute against.",
      cta: "Request a Proposal",
    },
    overview:
      "A strategy deliverable is only as good as the team that can ship it. Our audit runs in two sprints: week one we map your data, systems, and processes; week two we score candidate opportunities on feasibility, impact, and time-to-value. You walk away with a ranked backlog, a 90-day plan, and — if you want it — a team ready to build.",
    benefits: [
      { title: "Two weeks start to finish", description: "Not six. Every day costs money. We scope to deliver a decision-ready output in ten working days." },
      { title: "Executable by us on day one", description: "If you want it. The plan is built so we can pick it up the morning after handover." },
      { title: "Rand-value scoring", description: "Every opportunity scored on feasibility, impact, and time-to-value. No 'AI potential' without a number." },
      { title: "Data-readiness assessment", description: "We tell you where your data is ready for AI and where it isn't, before you commit to a build." },
      { title: "Board-ready output", description: "A ranked opportunity backlog plus a practical 90-day plan your board and your CIO can act on." },
      { title: "Fixed-fee engagement", description: "No meter running. One fee, two weeks, a complete deliverable." },
    ],
    process: [
      { step: 1, title: "Kick-off", description: "Align on scope, access, and the outcome metric that will determine the plan's success." },
      { step: 2, title: "Discover", description: "Interviews with process owners, audit of data assets, systems inventory." },
      { step: 3, title: "Map", description: "Document the AI opportunity landscape inside your business." },
      { step: 4, title: "Score", description: "Rank every opportunity by ROI, feasibility, data readiness, and regulatory risk." },
      { step: 5, title: "Plan", description: "Build the 90-day implementation plan for the top-ranked opportunity." },
      { step: 6, title: "Handover", description: "Board-ready report, ranked backlog, and an implementation-ready brief." },
    ],
    outcomes: [
      "Ten working days from kickoff to roadmap delivery.",
      "Output: a ranked opportunity backlog, a data-readiness report, and a 90-day implementation plan with effort, cost, and expected return per initiative.",
    ],
    faqs: [
      {
        question: "Do we have to use you to implement?",
        answer: "No. The audit is a standalone deliverable. You're free to shop it around, give it to your internal team, or sit on it. We believe the plan is our best sales pitch — so we ship it that way.",
      },
      {
        question: "What happens if our data isn't ready for AI?",
        answer: "You'll get a data-readiness report that says so, with a plan to fix it. That's often the first engagement — foundations before applications.",
      },
      {
        question: "Who's in the room from your side?",
        answer: "A sponsor (CEO, CIO, or similar), a data lead, and two or three process owners. We keep the footprint small to move fast.",
      },
      {
        question: "Is this the same as a 'digital transformation' engagement?",
        answer: "No. Digital transformation is a 12-month consulting programme. This is a focused AI audit with an executable plan in ten working days.",
      },
      {
        question: "Can you sign NDAs before we share anything?",
        answer: "Yes. Mutual NDA signed before discovery begins.",
      },
    ],
    relatedSlugs: ["custom-ai-applications", "data-foundations", "ai-accelerated-growth"],
    seo: {
      title: "AI Strategy & Roadmap South Africa | Impart Agency",
      description:
        "AI strategy audit in two weeks. Ranked opportunities, data-readiness report, and a 90-day implementation plan. Fixed-fee. Impart Agency, South Africa.",
      keywords: [
        "ai strategy south africa",
        "ai roadmap south africa",
        "ai opportunity audit",
        "ai consulting south africa",
      ],
    },
  },

  {
    slug: "data-foundations",
    title: "Data Foundations for AI",
    shortTitle: "Data",
    tagline: "AI without clean data is a demo. We fix that first.",
    description:
      "Nine out of ten stuck AI projects are stuck because the data isn't ready. We diagnose where the gaps are — pipelines, warehousing, governance, labelling — and we fix them. Not as a standalone consulting project, but as the step that unblocks everything else you want to do with AI.",
    icon: "Database",
    hero: {
      headline: "Data Foundations for AI",
      subheadline:
        "Nine out of ten stuck AI projects are stuck because the data isn't ready. We diagnose where the gaps are — pipelines, warehousing, governance, labelling — and we fix them. Not as a standalone consulting project, but as the step that unblocks everything else you want to do with AI.",
      cta: "Request a Proposal",
    },
    overview:
      "Before AI can do anything useful, your data has to be findable, consistent, governed, and fit for the job. We build the plumbing: ingestion pipelines, warehouses and lakes, feature stores, retrieval indexes, and the governance that makes the whole thing POPIA-compliant. Done once, done properly, so the next ten AI initiatives ship in weeks instead of stalling in discovery.",
    benefits: [
      { title: "Modern tooling", description: "Snowflake, BigQuery, Databricks, Supabase — the right tool for the job, not the most expensive one." },
      { title: "POPIA-compliant by default", description: "Regional hosting options, data classification, access controls, and audit trails from day one." },
      { title: "Governance baked in", description: "Data contracts, lineage, and access controls — so the next team that touches this knows what they're looking at." },
      { title: "Built for AI workloads", description: "Not just dashboards. Vector stores, embedding pipelines, retrieval indexes — ready for the applications that follow." },
      { title: "Incremental delivery", description: "Value in weeks, not a two-year programme. First use case in production, then ten more." },
      { title: "Handover to your team", description: "When you're ready. We document everything and train your engineers to operate it." },
    ],
    process: [
      { step: 1, title: "Audit", description: "Assess your current data assets, pipelines, quality, and governance posture." },
      { step: 2, title: "Architect", description: "Design the data platform for your AI use cases, not a generic warehouse." },
      { step: 3, title: "Pipeline", description: "Build ingestion, transformation, and delivery pipelines for your source systems." },
      { step: 4, title: "Govern", description: "Implement data contracts, lineage, access controls, and POPIA audit trails." },
      { step: 5, title: "Validate", description: "Test data quality, freshness, and retrieval accuracy against the target AI use case." },
      { step: 6, title: "Operate", description: "Hand over to your team or retain us on an AI Ops retainer." },
    ],
    outcomes: [
      "Typical engagement: 8–12 weeks to a production-ready data platform serving one AI use case.",
      "With the plumbing in place to support ten more.",
    ],
    stack: ["Snowflake", "BigQuery", "Databricks", "Supabase", "dbt", "Apache Kafka", "Pinecone", "pgvector"],
    faqs: [
      {
        question: "Do we need a full warehouse to do AI?",
        answer: "Not always. For focused use cases, a lightweight vector store and a few clean tables are enough. We scope to the job, not the vendor pitch.",
      },
      {
        question: "Can you work with our existing stack?",
        answer: "Yes. We'd rather extend what you have than ship a greenfield project that requires a six-month migration.",
      },
      {
        question: "How do you handle POPIA?",
        answer: "Data classification, access controls, regional hosting, and audit trails from day one. Our data engineers work alongside your compliance team, not around them.",
      },
      {
        question: "Do you build pipelines, or just consult on them?",
        answer: "We build. Senior data engineers on every engagement. No offshoring.",
      },
      {
        question: "What if our data is terrible?",
        answer: "That's normal. The first deliverable is a data-quality report that names the problems. The second is the plan to fix them. We don't moralise about state — we ship improvements.",
      },
    ],
    relatedSlugs: ["custom-ai-applications", "ai-strategy-roadmap", "ai-accelerated-growth"],
    seo: {
      title: "Data Foundations for AI South Africa | Impart Agency",
      description:
        "Build the data platform your AI needs. POPIA-compliant pipelines, warehouses, retrieval indexes, and governance. 8–12 weeks to production. Impart Agency.",
      keywords: [
        "data engineering south africa",
        "ai data foundations",
        "data pipeline south africa",
        "popia data compliance south africa",
      ],
    },
  },

  {
    slug: "ai-accelerated-growth",
    title: "AI-Accelerated Growth",
    shortTitle: "Growth",
    tagline: "SEO, paid, content — run at machine speed, with human judgement.",
    description:
      "Your growth stack has been eating AI for eighteen months. We make it count. We run SEO, paid, and content programmes that use AI where it wins — research, first drafts, media buying, performance analysis — and senior operators where it doesn't. Same disciplines, 3–5× faster.",
    icon: "TrendingUp",
    hero: {
      headline: "AI-Accelerated Growth",
      subheadline:
        "Your growth stack has been eating AI for eighteen months. We make it count. We run SEO, paid, and content programmes that use AI where it wins — research, first drafts, media buying, performance analysis — and senior operators where it doesn't. Same disciplines, 3–5× faster.",
      cta: "Request a Proposal",
    },
    overview:
      "AI-accelerated growth isn't \"AI marketing tools\" bolted onto a generalist agency. It's a restructured operating model where every stage of the growth workflow has a human making the call and AI doing the lift. Keyword research at 10× scale. Ad creative tested weekly instead of monthly. Content briefs generated from first-party data. Performance analysis that spots spend leakage in real time.",
    benefits: [
      { title: "Senior operators on every channel", description: "No junior-staffed accounts. No offshored delivery. The person running your Google Ads has done it at scale." },
      { title: "AI-assisted at every stage", description: "Research, drafting, bidding, and analysis workflows rebuilt with AI doing the lift and operators making the call." },
      { title: "Monthly reporting in plain English", description: "What moved, why, what's next. No dashboard dumps. No impressions metrics without a revenue ladder." },
      { title: "Month-to-month retainer", description: "No 12-month lock-in. We earn the next month every month." },
      { title: "Full transparency", description: "You see the accounts, the data, the spend. Nothing is locked inside our tools." },
      { title: "Integrated with your CRM", description: "And your revenue data, not just channel dashboards. We optimise for pipeline, not clicks." },
    ],
    process: [
      { step: 1, title: "Baseline", description: "Audit current performance, spend, and channel health. Establish the revenue-linked KPIs." },
      { step: 2, title: "Plan", description: "Channel mix, content calendar, keyword map, and paid structure for month one." },
      { step: 3, title: "Launch", description: "Go live with conservative spend and close daily monitoring in week one." },
      { step: 4, title: "Measure", description: "Weekly performance review against the KPIs. No waiting until end of month." },
      { step: 5, title: "Iterate", description: "Bid adjustments, creative swaps, content updates — continuous, not quarterly." },
      { step: 6, title: "Scale", description: "Increase spend on winning channels. Cut what doesn't ladder to revenue." },
    ],
    outcomes: [
      "Typical 90-day shape on a mid-market account: first-page coverage on 30–50 priority terms, paid CPA down 20–40%, content velocity up 3–5×.",
      "We'll tell you what's realistic for your brand on the discovery call, not before.",
    ],
    faqs: [
      {
        question: "Isn't this just marketing with ChatGPT in the loop?",
        answer: "No. It's a rebuilt workflow. Our operators use AI to do in an hour what used to take a day. That's structurally faster — and the savings show up in your retainer.",
      },
      {
        question: "Do you replace my marketing team?",
        answer: "No — we augment. Most of our clients have internal marketers. We run the channels they don't want to staff for, or we embed alongside them.",
      },
      {
        question: "What platforms do you work across?",
        answer: "Google Ads, Meta, LinkedIn, TikTok, YouTube, SEO (technical and content), programmatic. If a platform matters to your buyer, we cover it.",
      },
      {
        question: "How do you measure success?",
        answer: "Revenue-linked KPIs: pipeline, CAC, LTV. Not impressions, not reach. If a KPI doesn't ladder to revenue, we don't report on it.",
      },
      {
        question: "What's the minimum spend?",
        answer: "Depends on channel mix. Paid programmes typically start at R50,000 per month in media plus retainer. We'll be straight about it on the first call.",
      },
    ],
    relatedSlugs: ["custom-ai-applications", "ai-strategy-roadmap", "data-foundations"],
    seo: {
      title: "AI-Accelerated Growth — SEO, Paid & Content | Impart Agency",
      description:
        "Growth programmes powered by AI workflows and senior operators. SEO, Google Ads, content at 3–5× the velocity of a traditional agency. Impart Agency, South Africa.",
      keywords: [
        "ai marketing south africa",
        "ai seo south africa",
        "ai accelerated growth agency",
        "growth agency south africa",
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

  // ─── Primary value propositions (homepage → service page direct links) ──────

  {
    slug: "ai-operations-audit",
    title: "The AI Operations Audit",
    shortTitle: "AI Audit",
    tagline: "Find the three AI projects that will pay for themselves in ninety days, and kill the ones that won't.",
    description:
      "A six-week engagement that produces a ranked opportunity list, a ninety-day implementation plan for the top pick, and a board-ready report with ROI modelling and a POPIA compliance register.",
    icon: "ClipboardCheck",
    hero: {
      headline: "The AI Operations Audit",
      subheadline:
        "Find the three AI projects that will pay for themselves in ninety days, and kill the ones that won't. Six weeks. Fixed fee. Board-ready output.",
      cta: "Request a Proposal",
    },
    overview:
      "A six-week engagement that produces three deliverables. First, a ranked list of AI opportunities inside your business, scored by expected ROI, implementation cost, time to value, data readiness, and regulatory risk. Second, a ninety-day implementation plan for the top opportunity, scoped to the point where it can be executed. Third, a board-ready report with financial modelling and a POPIA compliance register for each recommended initiative.",
    benefits: [
      { title: "Ranked opportunity list", description: "Eight to fifteen AI opportunities identified, three to five recommended, each scored by expected ROI and implementation cost." },
      { title: "Ninety-day implementation plan", description: "The top-ranked opportunity scoped end to end — effort, cost, data requirements, and the team needed to deliver it." },
      { title: "Board-ready report", description: "Financial modelling, risk register, and a POPIA compliance assessment for every recommended initiative." },
      { title: "Data-readiness assessment", description: "An honest view of which opportunities your data is ready to support and which ones need foundations work first." },
      { title: "Fixed-fee engagement", description: "No meter running. One fee, six weeks, three deliverables. You own everything we produce." },
      { title: "Executable on day one", description: "If you want us to build what's in the plan, we can start the week after handover. No gap, no rebriefing." },
    ],
    process: [
      { step: 1, title: "Kick-off", description: "Align on scope, access requirements, and the executive sponsor. Mutual NDA signed before discovery begins." },
      { step: 2, title: "Discovery", description: "Interviews with process owners across the business. Systems inventory. Data landscape assessment." },
      { step: 3, title: "Opportunity mapping", description: "Document every AI opportunity identified. Map to cost lines, process owners, and data assets." },
      { step: 4, title: "Scoring", description: "Score each opportunity on ROI, feasibility, data readiness, POPIA posture, and time to value." },
      { step: 5, title: "Plan", description: "Build the ninety-day implementation plan for the top-ranked opportunity. Scope to execution-ready." },
      { step: 6, title: "Handover", description: "Board-ready report presented to the executive sponsor. Full handover pack delivered." },
    ],
    outcomes: [
      "Six weeks from kickoff to board-ready deliverables.",
      "Ranked AI opportunity backlog with ROI projections and data-readiness ratings.",
      "Ninety-day implementation plan for the top opportunity, execution-ready from day one.",
      "POPIA compliance register for every recommended initiative.",
    ],
    faqs: [
      {
        question: "Do we have to use you to build what's in the plan?",
        answer: "No. The audit is a standalone deliverable. You can shop it around, give it to your internal team, or sit on it. We believe the plan is our best sales pitch — so we ship it that way.",
      },
      {
        question: "What happens if our data isn't ready for AI?",
        answer: "You'll get a data-readiness report that names the gaps, with a plan to fix them. That's often the first follow-on engagement — data foundations before applications.",
      },
      {
        question: "Who's in the room from our side?",
        answer: "A sponsor at C-suite or one level below, a data lead, and two or three process owners. We keep the footprint small to move fast.",
      },
      {
        question: "Can you sign NDAs before we share anything?",
        answer: "Yes. Mutual NDA signed before discovery begins. Sensitive business data never leaves your environment unless you explicitly authorise it.",
      },
      {
        question: "What if the board doesn't approve the recommendations?",
        answer: "That happens. The deliverable is the analysis and the plan — what you do with it is your call. We've seen audit outputs used as internal change management tools as much as procurement briefs.",
      },
    ],
    relatedSlugs: ["popia-safe-ai", "ai-revenue-agents", "custom-ai-applications"],
    seo: {
      title: "AI Operations Audit South Africa | Impart Agency",
      description:
        "Six-week AI audit for South African enterprises. Ranked opportunity list, ninety-day plan, board-ready report. Fixed fee. POPIA-compliant. Impart Agency.",
      keywords: [
        "ai operations audit south africa",
        "ai opportunity assessment",
        "ai strategy audit south africa",
        "enterprise ai assessment",
      ],
    },
  },

  {
    slug: "popia-safe-ai",
    title: "POPIA-Safe Enterprise AI",
    shortTitle: "POPIA-Safe AI",
    tagline: "Use AI on your actual client files, without the compliance risk.",
    description:
      "A private AI stack deployed inside your Azure South Africa tenancy or on-premise. Private model endpoints, retrieval-augmented knowledge against your own document libraries, and governed audit logging that satisfies POPIA accountability requirements.",
    icon: "ShieldCheck",
    hero: {
      headline: "POPIA-Safe Enterprise AI",
      subheadline:
        "Use AI on your actual client files, without the compliance risk. Private model endpoints inside your tenancy. South African hosting. Governed audit logging from day one.",
      cta: "Request a Proposal",
    },
    overview:
      "A private AI stack deployed inside your Azure South Africa tenancy or on-premise depending on your regulatory profile. The system typically includes three layers: a private LLM endpoint that processes sensitive documents without leaving your tenancy, a retrieval-augmented knowledge system built against your own document libraries, and a governed user layer with audit logging that satisfies POPIA accountability requirements.",
    benefits: [
      { title: "Private model endpoints", description: "Your data never leaves your tenancy. No third-party processing of privileged or sensitive documents." },
      { title: "South African hosting", description: "Azure South Africa North or AWS Cape Town by default. On-premise where your regulatory profile demands it." },
      { title: "Retrieval-augmented knowledge", description: "AI that knows your policies, contracts, procedures, and case history — built on your documents, not the internet." },
      { title: "POPIA audit logging", description: "Access controls, audit trails, and data lineage from the first sprint. Reportable to your information officer from day one." },
      { title: "Phased rollout", description: "Start with two or three functions (legal, compliance, operations), measure the outcome, then expand. No big-bang deployment." },
      { title: "Ongoing AI Ops", description: "Monthly retainer option for monitoring, drift detection, retraining, and expansion. Clean exit whenever the value stops matching the fee." },
    ],
    process: [
      { step: 1, title: "Discovery", description: "Map your regulatory profile, data landscape, current tooling, and the highest-value use cases for private AI." },
      { step: 2, title: "Architecture", description: "Design the private stack — model selection, hosting configuration, retrieval architecture, access controls." },
      { step: 3, title: "Data prep", description: "Ingest, index, and govern your source documents for the retrieval layer. POPIA classification applied." },
      { step: 4, title: "Build", description: "Deploy the private model endpoint, knowledge system, and user interface inside your environment." },
      { step: 5, title: "Pilot", description: "Controlled rollout to two or three functions. Measure accuracy, adoption, and compliance posture." },
      { step: 6, title: "Operate", description: "Handover to your team or retain us on AI Ops. Ongoing monitoring, retraining, and expansion by function." },
    ],
    outcomes: [
      "A private AI stack inside your own tenancy — no cross-border data transfer.",
      "Staff using AI on actual client files, inside a governed, auditable system.",
      "POPIA compliance posture documented and reportable from day one.",
      "Expansion path across functions without rebuilding the foundation.",
    ],
    faqs: [
      {
        question: "Is this compliant with the April 2025 POPIA amendments?",
        answer: "Yes. The architecture is designed specifically for the Section 72 cross-border transfer restrictions. Data stays in South African jurisdiction unless you explicitly authorise otherwise in writing.",
      },
      {
        question: "Can it work with Microsoft 365 / SharePoint?",
        answer: "Yes. We build the retrieval layer on top of your existing SharePoint, shared drives, and document repositories. Your staff continue using the tools they know.",
      },
      {
        question: "What AI models power it?",
        answer: "We deploy private endpoints — typically Anthropic Claude or Azure OpenAI — configured so your data is processed inside your tenancy. We never use the public API endpoints for client data.",
      },
      {
        question: "How long does a typical implementation take?",
        answer: "Eight to sixteen weeks depending on integration complexity and the number of functions in the pilot. The first function is typically live within ten weeks of kickoff.",
      },
      {
        question: "Do you provide the infrastructure, or do we?",
        answer: "You provide the Azure or AWS tenancy. We provision, configure, and manage everything inside it. You own the infrastructure and the data. We own the engagement deliverable.",
      },
    ],
    relatedSlugs: ["ai-operations-audit", "ai-revenue-agents", "data-foundations"],
    seo: {
      title: "POPIA-Safe AI for Enterprises South Africa | Impart Agency",
      description:
        "Private AI stacks for South African regulated enterprises. POPIA-compliant. Azure South Africa hosting. Private model endpoints. Impart Agency.",
      keywords: [
        "popia safe ai south africa",
        "private ai south africa",
        "enterprise ai compliance south africa",
        "azure south africa ai",
      ],
    },
  },

  {
    slug: "ai-revenue-agents",
    title: "AI Revenue Agents",
    shortTitle: "Revenue Agents",
    tagline: "Replace your most expensive repetitive work with an AI agent that runs twenty-four hours a day.",
    description:
      "Voice, chat, and hybrid agents deployed against the functions that scale poorly with headcount. Inbound sales, customer service, after-hours triage, back-office processing. Multilingual. Integrated with your CRM and telephony.",
    icon: "Bot",
    hero: {
      headline: "AI Revenue Agents",
      subheadline:
        "Replace your most expensive repetitive work with an AI agent that runs twenty-four hours a day. Inbound sales, customer service, after-hours triage. Multilingual. Measurable inside the first month.",
      cta: "Request a Proposal",
    },
    overview:
      "An AI agent deployed against the specific function that is either your highest cost centre or your biggest growth ceiling. Inbound voice agents that handle routine calls with English, Afrikaans, and isiZulu coverage. Outbound qualification agents that book meetings for your sales team. After-hours triage agents that capture and qualify leads around the clock. Every deployment includes a handover layer to human staff for edge cases and a continuous improvement loop against the KPIs agreed at kickoff.",
    benefits: [
      { title: "Multilingual voice agents", description: "English, Afrikaans, and isiZulu coverage out of the box. Additional language support on request." },
      { title: "CRM and telephony integration", description: "Every interaction logged, scored, and routed — no manual data entry, no lost leads." },
      { title: "Measurable in weeks", description: "KPIs agreed at kickoff. We report against them weekly from the first month of production." },
      { title: "Always on", description: "After-hours, weekends, peak events. The agent does not take leave, does not get sick, and does not have a bad day." },
      { title: "Human handover built in", description: "Edge cases route to your team automatically. The agent knows what it can handle and what it cannot." },
      { title: "Continuous improvement loop", description: "Monthly retraining against live interaction data. The agent gets better the longer it runs." },
    ],
    process: [
      { step: 1, title: "Function scoping", description: "Identify the specific function — call type, volume, current cost, and the KPI that defines success." },
      { step: 2, title: "Integration mapping", description: "Map the CRM, telephony, and data systems the agent needs to connect with." },
      { step: 3, title: "Build", description: "Develop the agent logic, conversation flows, escalation rules, and integration layer." },
      { step: 4, title: "Test", description: "Controlled testing against real call types. Tune until accuracy and escalation rates hit the agreed thresholds." },
      { step: 5, title: "Pilot", description: "Live deployment on a subset of traffic. Measure KPIs against baseline. Iterate." },
      { step: 6, title: "Scale", description: "Full deployment once pilot KPIs are hit. Continuous improvement retainer if you want us on the system." },
    ],
    outcomes: [
      "Measurable KPI movement inside the first month of production.",
      "After-hours and peak-period coverage without headcount.",
      "Every interaction logged, scored, and integrated with your CRM.",
      "Continuous improvement — the agent improves every month it runs.",
    ],
    faqs: [
      {
        question: "What functions are best suited to voice agents?",
        answer: "High-volume, predictable interactions. Inbound queries, appointment booking, lead qualification, after-hours triage, basic customer service. If a competent junior staffer handles it in under five minutes, a voice agent can too.",
      },
      {
        question: "How do you handle edge cases and complex queries?",
        answer: "We design the escalation layer at the start of every engagement. Edge cases route to your human team automatically — the agent knows its limits.",
      },
      {
        question: "Is this POPIA-compliant?",
        answer: "Yes. Call recording, data retention, and consent flows are built to the POPIA standard from the first sprint. We document every data flow before we go live.",
      },
      {
        question: "What telephony systems do you integrate with?",
        answer: "Most enterprise telephony stacks — Twilio, Microsoft Teams, Genesys, Avaya, and others. We confirm compatibility in the integration mapping session before scoping.",
      },
      {
        question: "How quickly can we see ROI?",
        answer: "Most deployments show measurable KPI movement inside the first four weeks of production. We agree the baseline and the target at kickoff — you see the number weekly.",
      },
    ],
    relatedSlugs: ["ai-operations-audit", "popia-safe-ai", "custom-ai-applications"],
    seo: {
      title: "AI Revenue Agents South Africa | Impart Agency",
      description:
        "AI voice and chat agents for South African enterprises. Inbound sales, customer service, after-hours triage. Multilingual. Measurable ROI. Impart Agency.",
      keywords: [
        "ai voice agent south africa",
        "ai revenue agent south africa",
        "ai call centre south africa",
        "conversational ai south africa",
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
