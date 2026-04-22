import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/content/caseStudies";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Our Work",
  description:
    "AI systems built and deployed for South African businesses. Real projects, real outcomes.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <main className="pt-24 pb-32">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
            Our Work
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            AI Systems Built for Real Businesses
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed">
            Every engagement below shipped into production and is measured on a
            business metric — not a model metric.
          </p>
        </div>

        {caseStudies.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/work/${cs.slug}`}
                className="group block rounded-2xl border border-brand-border bg-brand-surface p-6 hover:border-brand-orange/40 transition-colors duration-200"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-3">
                  {cs.industry}
                </p>
                <h2 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-orange transition-colors duration-200">
                  {cs.client}
                </h2>
                <p className="text-sm text-brand-muted mb-6 line-clamp-3">
                  {cs.challenge}
                </p>
                {cs.outcome[0] && (
                  <div className="border-t border-brand-border pt-4">
                    <p className="text-xl font-bold text-brand-orange">
                      {cs.outcome[0].value}
                    </p>
                    <p className="text-xs text-brand-muted mt-0.5">
                      {cs.outcome[0].metric}
                    </p>
                  </div>
                )}
                <div className="flex items-center gap-1.5 mt-4 text-sm font-medium text-brand-orange">
                  Read case study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-brand-border bg-brand-surface px-8 py-16 text-center max-w-xl mx-auto">
            <p className="text-2xl font-bold text-white mb-3">
              Case studies coming soon
            </p>
            <p className="text-brand-muted mb-8">
              We&apos;re documenting our recent AI deployments. In the meantime,
              get in touch and we&apos;ll walk you through relevant work
              directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors duration-200"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
