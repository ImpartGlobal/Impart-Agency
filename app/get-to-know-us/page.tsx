import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { buildMetadata } from "@/lib/metadata";
import { formatWhatsAppUrl } from "@/lib/utils";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Get to Know Us",
  description:
    "Impart Agency is a results-driven digital agency based in South Africa. Learn about our approach, capabilities, values, and why our clients stay with us long after the first project.",
  path: "/get-to-know-us",
});

const capabilities = [
  "Custom Website Design & Development",
  "Ecommerce Solutions",
  "Laravel Web Applications",
  "Mobile App Development",
  "AI Services & Automation",
  "Search Engine Optimisation",
  "Google Ads & PPC Management",
  "Content Writing & Strategy",
  "Branding & Graphic Design",
  "Ongoing Digital Strategy",
  "Website Maintenance & Support",
  "Analytics & Reporting",
];

const values = [
  {
    title: "Results Over Everything",
    description:
      "We measure success in business outcomes — leads, sales, retention, revenue. Vanity metrics don't interest us.",
  },
  {
    title: "Radical Transparency",
    description:
      "You know exactly what we're doing, why we're doing it, and what it costs. No hidden agendas, no inflated scopes.",
  },
  {
    title: "Long-Term Thinking",
    description:
      "We build relationships, not transactions. The best client engagements are measured in years, not months.",
  },
  {
    title: "Earned Every Month",
    description:
      "No long-term lock-ins. We operate on month-to-month retainers because we believe you should choose to stay — not be forced to.",
  },
  {
    title: "South African by Heart",
    description:
      "We understand the local market, the local economy, and the local customer. Our strategies are built for this context.",
  },
  {
    title: "Continuous Improvement",
    description:
      "We never declare something 'done'. Digital presence is a living thing. We optimise, adapt, and improve on an ongoing basis.",
  },
];

export default function AboutPage() {
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    "Hi Impart Agency, I'd like to discuss working together."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" aria-label="About hero">
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: "radial-gradient(circle, #F04B00 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <Badge variant="orange" className="mb-6">About Us</Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              We Build Digital That{" "}
              <span className="gradient-text">Moves the Needle</span>
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed mb-8">
              Impart Agency is a results-driven digital agency based in South Africa. We partner with ambitious businesses to build websites, apps, and marketing systems that generate real, measurable growth — not just digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-brand-surface" aria-labelledby="story-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection>
              <Badge variant="subtle" className="mb-4">Our Story</Badge>
              <h2
                id="story-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Built to Close the Gap
              </h2>
              <div className="space-y-4 text-brand-muted leading-relaxed">
                <p>
                  Impart Agency was founded because there was a gap in the South African market: too many agencies selling style over substance, collecting monthly fees while delivering little more than reports full of numbers that didn&apos;t connect to business outcomes.
                </p>
                <p>
                  We set out to build something different. An agency where every decision is tied to a result. Where the team working on your account genuinely understands your business — not just your brief. Where you receive straight, honest advice even when it&apos;s not what you want to hear.
                </p>
                <p>
                  Over the years, that approach has built an agency that most clients stay with long after the first project is done. Our retention rate reflects something simpler: we do what we say we will, and we make the phone ring.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="space-y-5">
                <div className="p-6 rounded-2xl bg-brand-elevated border border-brand-border">
                  <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                    6+ years
                  </div>
                  <div className="text-white font-medium mb-1">In the market</div>
                  <div className="text-brand-muted text-sm">
                    Building, learning, and improving for South African businesses.
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-brand-elevated border border-brand-border">
                  <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                    80+ clients
                  </div>
                  <div className="text-white font-medium mb-1">Across South Africa</div>
                  <div className="text-brand-muted text-sm">
                    From Johannesburg startups to established national brands.
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-brand-elevated border border-brand-border">
                  <div className="font-display text-4xl font-bold text-brand-orange mb-1">
                    98%
                  </div>
                  <div className="text-white font-medium mb-1">Client retention</div>
                  <div className="text-brand-muted text-sm">
                    Most clients stay. That&apos;s the metric we&apos;re proudest of.
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20" aria-labelledby="capabilities-heading">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <Badge variant="orange" className="mb-4">What We Do</Badge>
            <h2
              id="capabilities-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-white mb-4"
            >
              Full-Stack Digital Capabilities
            </h2>
            <p className="text-brand-muted max-w-2xl">
              From strategy to execution — every digital discipline under one roof, so your agency relationship compounds instead of fragmenting across vendors.
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {capabilities.map((cap) => (
              <StaggerItem key={cap}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-brand-surface border border-brand-border">
                  <CheckCircle2
                    className="h-4 w-4 text-brand-orange shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-white">{cap}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-brand-surface" aria-labelledby="values-heading">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <Badge variant="orange" className="mb-4">Our Values</Badge>
            <h2
              id="values-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-white"
            >
              What We Stand For
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-6 rounded-2xl bg-brand-elevated border border-brand-border h-full hover:border-brand-orange/20 transition-all duration-300">
                  <h3 className="font-display font-bold text-lg text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20" aria-labelledby="approach-heading">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <Badge variant="orange" className="mb-4">Our Approach</Badge>
              <h2
                id="approach-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-white mb-6"
              >
                Strategy First. Always.
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed mb-6">
                We don&apos;t open a project file and start designing. Every engagement begins with understanding: your market, your competitors, your customers, and the gap between where you are and where you want to be.
              </p>
              <p className="text-brand-muted leading-relaxed mb-6">
                From that foundation, we build a strategy — and then we execute it with precision. No bloated timelines, no scope creep, no disappearing after the invoice. Just clear work, clear communication, and clear results.
              </p>
              <p className="text-brand-muted leading-relaxed">
                We use our six-step process — Discover, Assess, Eliminate, Maximize, Advise & Implement, Optimize — as the backbone of every project and every ongoing retainer.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 2KO Connection */}
      <section className="py-16 bg-brand-surface" aria-label="Advisory partnership">
        <div className="container-wide">
          <AnimatedSection>
            <div className="p-8 rounded-2xl bg-brand-elevated border border-brand-border max-w-3xl">
              <Badge variant="subtle" className="mb-4">Part of a Bigger Picture</Badge>
              <h3 className="font-display font-bold text-2xl text-white mb-4">
                Affiliated with 2KO Business Advisory Group
              </h3>
              <p className="text-brand-muted leading-relaxed mb-4">
                Impart Agency operates in close affiliation with 2KO Business Advisory Group — giving our clients access to broader business advisory services, financial strategy, and growth consulting where relevant. This relationship means we see the full picture: not just your digital presence, but your business model, your margins, and your long-term trajectory.
              </p>
              <p className="text-brand-muted text-sm">
                Ask us about this relationship if it&apos;s relevant to your needs.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" aria-label="Contact call to action">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-orange/8 via-brand-bg to-brand-bg"
          aria-hidden="true"
        />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Let&apos;s Build Something That Works
            </h2>
            <p className="text-brand-muted text-lg mb-8 max-w-xl mx-auto">
              Ready to talk about your digital goals? We&apos;d love to hear about your business and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/pricing">See Our Pricing</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
