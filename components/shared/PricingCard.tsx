import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { type PricingTier } from "@/content/pricing";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: PricingTier;
}

const rateTypeLabel: Record<PricingTier["rateType"], string> = {
  project: "per project",
  monthly: "per month",
  hourly: "per hour",
};

export function PricingCard({ tier }: PricingCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col rounded-2xl border transition-all duration-300",
        tier.highlighted
          ? "bg-brand-orange/5 border-brand-orange/30 shadow-glow-sm"
          : "bg-brand-surface border-brand-border hover:border-brand-orange/20 hover:shadow-card-hover"
      )}
      aria-label={`${tier.title} pricing`}
    >
      {tier.highlighted && (
        <div className="px-6 pt-4">
          <Badge variant="orange">Most Popular</Badge>
        </div>
      )}

      <div className="p-6 flex-1">
        {/* Header */}
        <div className="mb-5">
          <h3 className="font-display font-bold text-xl text-white mb-1">
            {tier.title}
          </h3>
          <p className="text-brand-muted text-sm">{tier.tagline}</p>
        </div>

        {/* Pricing */}
        <div className="mb-5 pb-5 border-b border-brand-border">
          <div className="font-display font-bold text-3xl text-white">
            {tier.averageProjectValue}
          </div>
          <div className="text-xs text-brand-muted mt-0.5">
            {rateTypeLabel[tier.rateType]}
            {tier.hourlyRate && (
              <span className="ml-2 text-brand-subtle">· {tier.hourlyRate}</span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-brand-muted leading-relaxed mb-5">
          {tier.description}
        </p>

        {/* Includes */}
        <ul className="space-y-2.5 mb-6" role="list" aria-label="What's included">
          {tier.includes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm">
              <Check
                className="h-4 w-4 text-brand-orange shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span className="text-brand-muted">{item}</span>
            </li>
          ))}
        </ul>

        {/* FAQs */}
        {tier.faqs.length > 0 && (
          <div className="rounded-xl bg-brand-elevated border border-brand-border px-4 mb-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-subtle py-3 border-b border-brand-border">
              Common Questions
            </p>
            <Accordion type="single" collapsible>
              {tier.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`${tier.id}-faq-${i}`}>
                  <AccordionTrigger className="text-xs">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-xs">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="p-6 pt-0">
        <Button
          variant={tier.highlighted ? "primary" : "outline"}
          className="w-full"
          asChild
        >
          <Link href={tier.ctaHref}>
            {tier.cta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </div>
    </article>
  );
}
