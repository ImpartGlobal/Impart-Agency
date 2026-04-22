import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, ShieldCheck, Bot } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { valuePropositions } from "@/content/values";
import type { LucideIcon } from "lucide-react";

// Map icon names from content to actual Lucide components
const iconMap: Record<string, LucideIcon> = {
  ClipboardCheck,
  ShieldCheck,
  Bot,
};

export function ValuePropositions() {
  return (
    <section
      id="what-we-build"
      className="py-24 lg:py-32"
      aria-labelledby="value-props-heading"
    >
      <div className="container-wide">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="orange" className="mb-4">What We Build</Badge>
          <h2
            id="value-props-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Three ways we{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              replace expensive work
            </span>{" "}
            with AI
          </h2>
          <p className="text-brand-muted text-lg">
            Every engagement starts from a specific cost line inside your
            business and ends with an AI system that runs it for less. Pick the
            shape that fits, or request a proposal and we will recommend one.
          </p>
        </AnimatedSection>

        {/* Proposition cards */}
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {valuePropositions.map((prop) => {
            const Icon = iconMap[prop.iconName];
            return (
              <StaggerItem key={prop.slug}>
                <Link
                  href={`/services/${prop.slug}`}
                  className="group relative flex flex-col h-full p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-orange/40 transition-all duration-300 hover:shadow-card-lift shadow-inset-gleam overflow-hidden"
                  aria-label={`Learn more about ${prop.title}`}
                >
                  {/* Shape PNG — top-right accent */}
                  {prop.accent && (
                    <Image
                      src={prop.accent}
                      alt=""
                      width={320}
                      height={320}
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-8 -right-8 w-52 h-52 opacity-60"
                      style={{ mixBlendMode: "screen" }}
                    />
                  )}

                  {/* Copy block — z-10 so shape never occludes text */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                        <Icon
                          className="h-6 w-6 text-brand-orange"
                          aria-hidden="true"
                        />
                      </div>
                      <ArrowRight
                        className="h-5 w-5 text-brand-border group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-200"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-brand-orange transition-colors duration-200">
                      {prop.title}
                    </h3>

                    {/* Positioning line */}
                    <p className="text-white/90 font-medium leading-relaxed mb-4">
                      {prop.line}
                    </p>

                    {/* Body */}
                    <p className="text-brand-muted text-sm leading-relaxed flex-1 mb-6">
                      {prop.body}
                    </p>

                    {/* Outcome tag — copper per aesthetic-upgrades §2.4 */}
                    <div className="pt-5 mt-auto border-t border-brand-border">
                      <p className="text-xs font-semibold uppercase tracking-wider text-brand-copper">
                        {prop.outcome}
                      </p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA row */}
        <AnimatedSection className="mt-14 text-center">
          <p className="text-brand-muted mb-6">
            Not sure which fits? Tell us the function, we will recommend the shape.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-brand-orange text-white font-semibold hover:bg-brand-orange-light transition-colors"
          >
            Request a Proposal
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
