import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/content/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return buildMetadata({
    title: cs.seo.title,
    description: cs.seo.description,
    path: `/work/${cs.slug}`,
    ogImage: cs.heroImage,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) notFound();

  return (
    <main className="pt-24 pb-32">
      <div className="container-wide">
        {/* Back link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors duration-200 mb-12"
        >
          <ArrowLeft className="h-4 w-4" />
          All work
        </Link>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
            {cs.industry}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            {cs.client}
          </h1>
          <p className="text-sm text-brand-muted">
            Delivered in {cs.duration}
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
                The Challenge
              </h2>
              <p className="text-brand-muted leading-relaxed">{cs.challenge}</p>
            </section>

            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
                What We Built
              </h2>
              <p className="text-brand-muted leading-relaxed">{cs.solution}</p>
            </section>
          </div>

          {/* Outcomes sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-6">
                Outcomes
              </h2>
              <div className="space-y-6">
                {cs.outcome.map((o, i) => (
                  <div key={i}>
                    <p className="text-2xl font-bold text-white">{o.value}</p>
                    <p className="text-sm text-brand-muted mt-1">{o.metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {cs.stack.length > 0 && (
              <div className="rounded-2xl border border-brand-border bg-brand-surface p-6">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
                  Stack
                </h2>
                <div className="flex flex-wrap gap-2">
                  {cs.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full text-xs font-medium border border-brand-border text-brand-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-12 border-t border-brand-border">
          <p className="text-white font-semibold mb-4">
            Want to see what we could build for you?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors duration-200"
          >
            Get in touch
            <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </div>
    </main>
  );
}
