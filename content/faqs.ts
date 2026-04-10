export type Faq = {
  question: string;
  answer: string;
  category?: string;
};

export const generalFaqs: Faq[] = [
  {
    question: "Where is Impart Agency based?",
    answer:
      "We are based in Johannesburg, South Africa, and work with clients across the country — including Johannesburg, Cape Town, Durban, Pretoria, and beyond. We also work with international clients.",
    category: "general",
  },
  {
    question: "How do I get started?",
    answer:
      "The easiest way is to complete our contact form or send us a WhatsApp message. We'll schedule a free discovery call to understand your needs and provide a clear proposal within 48 hours.",
    category: "general",
  },
  {
    question: "Do you work with small businesses or only large companies?",
    answer:
      "Both. We work with startups, SMEs, and larger organisations. Our approach scales to your budget and ambitions. We'll always be upfront about whether we're the right fit.",
    category: "general",
  },
  {
    question: "What industries do you specialise in?",
    answer:
      "We've delivered projects across property, finance, legal, healthcare, retail, hospitality, logistics, professional services, and technology. Strong strategy and clean execution work in any industry.",
    category: "general",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "For project-based work, we typically structure payment in milestones — a deposit to begin, a milestone payment at design approval, and a final payment on launch. We can discuss flexible arrangements for the right projects.",
    category: "general",
  },
  {
    question: "Will I have a dedicated point of contact?",
    answer:
      "Yes. Every client has a dedicated account manager who is your primary point of contact throughout the project and beyond. No getting bounced between departments.",
    category: "general",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Absolutely. We offer maintenance retainers, ongoing development retainers, and ad-hoc hourly support. Most clients opt for some level of ongoing relationship after their initial project.",
    category: "general",
  },
  {
    question: "How do you handle project revisions?",
    answer:
      "Our standard project engagements include defined revision rounds at each stage. We communicate clearly at the start of every project what's included so there are no surprises.",
    category: "general",
  },
];

export const homepageFaqs: Faq[] = generalFaqs.slice(0, 5);
