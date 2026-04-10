import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PricingCard } from "@/components/shared/PricingCard";
import { pricingTiers } from "@/content/pricing";
import { buildMetadata } from "@/lib/metadata";
import { formatWhatsAppUrl } from "@/lib/utils";
import { site } from "@/content/site";

export const metadata: Metadata = buildMetadata({
  title: "Pricing",
  description:
    "Transparent pricing for South African businesses. WordPress websites, ecommerce stores, app development, SEO, PPC, and branding — see typical project values and hourly rates.",
  path: "/pricing",
});

export default function PricingPage() {
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    "Hi Impart Agency, I'd like to discuss pricing."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" aria-label="Pricing hero">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: "radial-gradient(ellipse, #F04B00 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-narrow relative z-10 text-center">
          <Badge variant="orange" className="mb-5">Pricing</Badge>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
            Transparent Pricing.{" "}
            <span className="gradient-text">No Surprises.</span>
          </h1>
          <p className="text-brand-muted text-lg leading-relaxed mb-6">
            Pricing in South Africa (ZAR). Every project is scoped individually — these are realistic ranges based on typical engagements. Contact us for a tailored quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Custom Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing grid */}
      <section className="py-16 pb-24" aria-label="Pricing tiers">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {pricingTiers.map((tier) => (
              <AnimatedSection key={tier.id}>
                <PricingCard tier={tier} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Currency / Geography note */}
      <section className="pb-16" aria-label="Pricing notes">
        <div className="container-narrow">
          <AnimatedSection>
            <div className="p-6 rounded-2xl bg-brand-surface border border-brand-border">
              <h3 className="font-semibold text-white mb-2">A note on pricing</h3>
              <div className="text-sm text-brand-muted space-y-2">
                <p>
                  All prices are in South African Rand (ZAR) and are exclusive of VAT. Pricing applies to projects delivered for the South African market.
                </p>
                <p>
                  Project pricing reflects complexity, scope, and required integrations. International client projects may be quoted in USD or GBP. Every engagement starts with a free discovery call and a clear, fixed-price proposal — no hidden fees.
                </p>
                <p>
                  <strong className="text-white">Payment terms:</strong> Projects are typically structured as 50% deposit, 25% at design approval, 25% on launch. Monthly retainers are invoiced in advance.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-brand-surface relative overflow-hidden" aria-label="Get a quote">
        <div
          className="absolute inset-0 bg-gradient-to-br from-brand-orange/6 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="container-narrow relative z-10 text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-brand-muted text-lg mb-8">
              Tell us about your business and your goals. We&apos;ll recommend the right combination of services and give you a clear, no-obligation proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Book a Free Discovery Call
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/get-to-know-us">Learn About Us</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
