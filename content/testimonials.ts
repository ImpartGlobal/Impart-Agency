export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Impart rebuilt our website from scratch and the results were immediate. Our enquiry rate tripled within the first two months and we now rank on page one for our main service keywords.",
    author: "Thabo M.",
    role: "Managing Director",
    company: "Property Development Firm, Johannesburg",
    rating: 5,
  },
  {
    quote:
      "We were spending R18,000 a month on Google Ads and getting almost nothing back. Impart restructured our campaigns and within 90 days our cost-per-lead dropped by 60%. We wish we'd found them sooner.",
    author: "Samantha R.",
    role: "Marketing Manager",
    company: "Financial Services Company, Cape Town",
    rating: 5,
  },
  {
    quote:
      "The Laravel portal they built for us replaced three different software subscriptions and gave our team a single system to manage everything. It paid for itself within eight months.",
    author: "Kobus V.",
    role: "Operations Director",
    company: "Logistics Company, Pretoria",
    rating: 5,
  },
  {
    quote:
      "Their branding work was exceptional. They didn't just design a logo — they gave us a complete brand language that we use consistently across everything. Our clients consistently compliment how professional we look.",
    author: "Zanele D.",
    role: "Founder",
    company: "HR Consulting Practice, Sandton",
    rating: 5,
  },
  {
    quote:
      "The ecommerce store Impart built for us has processed over R2 million in orders in its first year. The UX is clean, the checkout is smooth, and the backend is easy for our team to manage.",
    author: "Brandon K.",
    role: "Owner",
    company: "Speciality Retailer, Durban",
    rating: 5,
  },
  {
    quote:
      "We've worked with three other agencies before Impart. The difference is that they actually understand our business and focus on results — not just deliverables. They feel like part of our team.",
    author: "Nadia P.",
    role: "CEO",
    company: "SaaS Startup, Cape Town",
    rating: 5,
  },
];
