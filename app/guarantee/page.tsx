import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Our 90-Day Guarantee",
  description:
    "AI systems that earn their keep in the first 90 days — or we keep working for free until they do. Full terms below.",
  path: "/guarantee",
  // Keep unindexed until legal review is complete and page is linked publicly
  noIndex: true,
});

/**
 * /guarantee — 90-day risk-reversal page.
 *
 * STATUS: Scaffold only. Legal-grade terms to be supplied by Liam.
 * Do NOT link from primary nav or homepage until:
 *   1. Terms are reviewed and confirmed.
 *   2. noIndex is removed from metadata above.
 *   3. Entry point is added to /how-we-engage callout (per CLAUDE.md decision 6).
 */
export default function GuaranteePage() {
  return (
    <main className="pt-24 pb-32">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
            Our Guarantee
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Systems That Earn Their Keep in 90 Days.
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed mb-12">
            Or we keep working for free until they do.
          </p>

          {/* Terms placeholder */}
          <div className="rounded-2xl border border-brand-border bg-brand-surface p-8 mb-12">
            <p className="text-brand-orange font-semibold mb-3">
              ⚠ Terms pending legal review
            </p>
            <p className="text-brand-muted text-sm leading-relaxed">
              The full terms of this guarantee — including qualifying
              conditions, measurement methodology, scope limitations, and
              remedies — are being finalised. This page will be published once
              Liam has confirmed the terms are accurate and legally sound.
            </p>
          </div>

          {/* What the guarantee covers (placeholder sections — Liam to fill) */}
          <div className="space-y-10 text-brand-muted">
            <section>
              <h2 className="text-white font-semibold text-lg mb-3">
                What the guarantee covers
              </h2>
              <p className="text-sm leading-relaxed">
                {/* TODO: Liam to populate with specific qualifying conditions */}
                [Terms to be added]
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-lg mb-3">
                How &ldquo;earns its keep&rdquo; is measured
              </h2>
              <p className="text-sm leading-relaxed">
                {/* TODO: Liam to define measurement methodology */}
                [Terms to be added]
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-lg mb-3">
                What happens if the system doesn&apos;t perform
              </h2>
              <p className="text-sm leading-relaxed">
                {/* TODO: Liam to define remedy and continuation terms */}
                [Terms to be added]
              </p>
            </section>

            <section>
              <h2 className="text-white font-semibold text-lg mb-3">
                Exclusions and limitations
              </h2>
              <p className="text-sm leading-relaxed">
                {/* TODO: Liam to add exclusions after legal review */}
                [Terms to be added]
              </p>
            </section>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-brand-border">
            <p className="text-white font-semibold mb-2">
              Ready to discuss an engagement?
            </p>
            <p className="text-brand-muted text-sm mb-6">
              We&apos;ll walk you through how the guarantee applies to your
              specific use case before you commit to anything.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors duration-200"
            >
              Request a proposal
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
