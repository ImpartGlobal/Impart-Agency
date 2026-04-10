import type { ElementType } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import {
  Globe, ShoppingCart, Code2, Smartphone, Sparkles,
  TrendingUp, BarChart3, FileText, Palette,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";
import { type Service, getRelatedServices } from "@/content/services";
import { formatWhatsAppUrl } from "@/lib/utils";
import { site } from "@/content/site";

const iconMap: Record<string, ElementType> = {
  Globe, ShoppingCart, Code2, Smartphone, Sparkles,
  TrendingUp, BarChart3, FileText, Palette,
};

interface ServicePageTemplateProps {
  service: Service;
}

export function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const Icon = iconMap[service.icon] ?? Globe;
  const relatedServices = getRelatedServices(service.relatedSlugs);
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    `Hi Impart Agency, I'd like to discuss ${service.title}.`
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Service hero">
        <div className="absolute inset-0 bg-brand-bg" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: "radial-gradient(circle, #F04B00 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="container-wide relative z-10">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm text-brand-subtle">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ArrowRight className="h-3 w-3" /></li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li aria-hidden="true"><ArrowRight className="h-3 w-3" /></li>
              <li className="text-white" aria-current="page">
                {service.shortTitle}
              </li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                <Icon className="h-6 w-6 text-brand-orange" aria-hidden="true" />
              </div>
              <Badge variant="orange">{service.shortTitle}</Badge>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              {service.hero.headline}
            </h1>
            <p className="text-lg text-brand-muted leading-relaxed mb-8 max-w-2xl">
              {service.hero.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href={`/contact?service=${service.slug}`}>
                  {service.hero.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-brand-surface" aria-labelledby="overview-heading">
        <div className="container-wide">
          <div className="max-w-3xl">
            <AnimatedSection>
              <Badge variant="subtle" className="mb-4">Overview</Badge>
              <h2
                id="overview-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-white mb-5"
              >
                What We Deliver
              </h2>
              <p className="text-brand-muted text-lg leading-relaxed">
                {service.overview}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" aria-labelledby="benefits-heading">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <Badge variant="orange" className="mb-4">What You Get</Badge>
            <h2
              id="benefits-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-white"
            >
              Everything Included
            </h2>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-orange/25 transition-all duration-300 h-full">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2
                      className="h-5 w-5 text-brand-orange shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <h3 className="font-semibold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-brand-muted text-sm leading-relaxed pl-8">
                    {benefit.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-brand-surface" aria-labelledby="outcomes-heading">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <AnimatedSection>
              <Badge variant="orange" className="mb-4">Results</Badge>
              <h2
                id="outcomes-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-white mb-4"
              >
                What Success Looks Like
              </h2>
              <p className="text-brand-muted leading-relaxed">
                Every engagement is defined by the outcomes we commit to — not just the work we do.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <ul className="space-y-3" role="list">
                {service.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2
                      className="h-5 w-5 text-brand-orange shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-white">{outcome}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" aria-labelledby="process-heading">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <Badge variant="orange" className="mb-4">How It Works</Badge>
            <h2
              id="process-heading"
              className="font-display text-3xl lg:text-4xl font-bold text-white"
            >
              Our Process
            </h2>
          </AnimatedSection>

          <div className="relative">
            {/* Connecting line */}
            <div
              className="absolute left-5 top-6 bottom-6 w-px bg-brand-border hidden md:block"
              aria-hidden="true"
            />

            <StaggerContainer className="space-y-4">
              {service.process.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="flex gap-6 items-start md:pl-14 relative">
                    {/* Step indicator */}
                    <div
                      className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-white text-sm font-bold shrink-0 hidden md:flex"
                      aria-hidden="true"
                    >
                      {step.step}
                    </div>

                    {/* Mobile step number */}
                    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-orange text-white text-sm font-bold shrink-0 md:hidden">
                      {step.step}
                    </div>

                    <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border flex-1 hover:border-brand-orange/20 transition-colors">
                      <h3 className="font-semibold text-white mb-1">{step.title}</h3>
                      <p className="text-sm text-brand-muted">{step.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.process.length > 0 && (
        <section className="py-20 bg-brand-surface" aria-labelledby="faq-heading">
          <div className="container-narrow">
            <AnimatedSection className="mb-10">
              <Badge variant="orange" className="mb-4">FAQ</Badge>
              <h2
                id="faq-heading"
                className="font-display text-3xl lg:text-4xl font-bold text-white"
              >
                Common Questions
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="rounded-2xl bg-brand-elevated border border-brand-border overflow-hidden px-6">
                <Accordion type="single" collapsible>
                  {/* We'll use the pricing FAQs if available, otherwise generic ones */}
                  {[
                    {
                      question: `How much does ${service.title.toLowerCase()} cost?`,
                      answer: `Every project is scoped individually based on your specific requirements. Get in touch for a free, no-obligation quote tailored to your needs.`,
                    },
                    {
                      question: "How long will my project take?",
                      answer:
                        "Timeline depends on scope and complexity. We'll give you a clear timeline estimate as part of your proposal — and we stick to it.",
                    },
                    {
                      question: "Will I have a single point of contact?",
                      answer:
                        "Yes — every client gets a dedicated account manager who is your main point of contact throughout the project and beyond.",
                    },
                    {
                      question: "What do you need from me to get started?",
                      answer:
                        "A brief outline of your goals, your audience, and any existing brand materials is a great start. We'll guide you through the rest in our discovery session.",
                    },
                    {
                      question: "Do you offer ongoing support after completion?",
                      answer:
                        "Absolutely. We offer maintenance retainers, ongoing development support, and ad-hoc hourly work. Most clients prefer a continuing relationship.",
                    },
                  ].map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* CTA Band */}
      <section className="py-20 relative overflow-hidden" aria-label="Call to action">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 via-brand-bg to-brand-bg"
          aria-hidden="true"
        />
        <div className="container-wide relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-brand-muted text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s talk about your project. We&apos;ll give you a free, no-obligation proposal within 48 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={`/contact?service=${service.slug}`}>
                  {service.hero.cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-brand-surface" aria-labelledby="related-heading">
          <div className="container-wide">
            <AnimatedSection className="mb-10">
              <h2
                id="related-heading"
                className="font-display text-2xl font-bold text-white"
              >
                Related Services
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedServices.map((related) => {
                const RelatedIcon = iconMap[related.icon] ?? Globe;
                return (
                  <Link
                    key={related.slug}
                    href={`/services/${related.slug}`}
                    className="group flex items-start gap-4 p-5 rounded-2xl bg-brand-elevated border border-brand-border hover:border-brand-orange/25 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                      <RelatedIcon className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-sm group-hover:text-brand-orange transition-colors mb-1">
                        {related.title}
                      </div>
                      <div className="text-xs text-brand-muted">
                        {related.tagline}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
