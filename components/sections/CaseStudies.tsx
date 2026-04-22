import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies } from "@/content/caseStudies";

/**
 * Homepage case studies section.
 * Shows "Work coming soon" empty state when array is empty (per CLAUDE.md decision 5).
 * Shows up to 3 cards with shadow-card-lift on hover when populated.
 * Empty-state copy per brand-guide §15.
 */
export function CaseStudies() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="relative py-24 lg:py-32 bg-brand-bg overflow-hidden" aria-label="Case Studies">
      {/* Prism beam accent — left-edge, hidden on mobile */}
      <Image
        src="/graphics/accents/accent-prism-beam.png"
        alt=""
        width={200}
        height={300}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/4 opacity-40 hidden lg:block"
      />

      <div className="container-wide relative z-10">
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
          /* Empty state — per brand-guide §15 */
          <div className="rounded-2xl border border-brand-border bg-brand-surface px-8 py-16 text-center max-w-xl mx-auto">
            <p className="text-xl font-bold text-white mb-3">Work coming soon</p>
            <p className="text-brand-muted mb-8">
              The first public write-ups are in final client review. Request a
              proposal and we will share in-flight reference calls during scoping.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors duration-200"
            >
              Request a Proposal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          /* Populated state — up to 3 cards with card-lift hover */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group block rounded-2xl border border-brand-border bg-brand-surface p-6 hover:border-brand-orange/40 hover:shadow-card-lift transition-all duration-300"
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
