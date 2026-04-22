import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";

/**
 * Homepage case studies section.
 * Shows "Work coming soon" empty state when array is empty (per CLAUDE.md decision 5).
 * Shows up to 3 cards when populated, with a "See all work" link to /work.
 */
export function CaseStudies() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="py-24 lg:py-32 bg-brand-bg" aria-label="Case Studies">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
              Our Work
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              AI Systems in Production
            </h2>
          </div>
          {caseStudies.length > 0 && (
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange hover:text-brand-orange-light transition-colors duration-200 shrink-0"
            >
              See all work
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {caseStudies.length === 0 ? (
          /* Empty state — shown until Liam supplies case study content */
          <div className="rounded-2xl border border-brand-border bg-brand-surface px-8 py-16 text-center max-w-xl mx-auto">
            <p className="text-xl font-bold text-white mb-3">Work coming soon</p>
            <p className="text-brand-muted mb-8">
              We&apos;re documenting our recent AI deployments. In the meantime,
              get in touch and we&apos;ll walk you through relevant work directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors duration-200"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          /* Populated state — up to 3 cards */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group block rounded-2xl border border-brand-border bg-brand-surface p-6 hover:border-brand-orange/40 transition-colors duration-200"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  {cs.industry}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-orange transition-colors duration-200">
                  {cs.client}
                </h3>
                <p className="text-sm text-brand-muted mb-6 line-clamp-3">
                  {cs.challenge}
                </p>
                {cs.outcome[0] && (
                  <div className="border-t border-brand-border pt-4 mb-4">
                    <p className="text-xl font-bold text-brand-orange">
                      {cs.outcome[0].value}
                    </p>
                    <p className="text-xs text-brand-muted mt-0.5">
                      {cs.outcome[0].metric}
                    </p>
                  </div>
                )}
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange">
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
