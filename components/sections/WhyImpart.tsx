import { CheckCircle2, XCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

const differentiators = [
  {
    theirs: "Agencies that hand you a 50-page strategy and disappear",
    ours: "We execute — and you see results, not decks",
  },
  {
    theirs: "Cookie-cutter templates dressed up as bespoke",
    ours: "Every build is custom-designed for your brand and goals",
  },
  {
    theirs: "Junior staff working on your account",
    ours: "Senior practitioners on every engagement",
  },
  {
    theirs: "Vanity metrics — impressions, reach, 'brand awareness'",
    ours: "Revenue-linked KPIs — leads, conversions, cost per acquisition",
  },
  {
    theirs: "Black-box reporting you can't interpret",
    ours: "Transparent, plain-language reporting every month",
  },
  {
    theirs: "12-month lock-in contracts with no accountability",
    ours: "Month-to-month retainers — we earn your business every month",
  },
];

export function WhyImpart() {
  return (
    <section
      className="py-24 lg:py-32"
      aria-labelledby="why-impart-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Heading + context */}
          <AnimatedSection>
            <Badge variant="orange" className="mb-4">Why Impart</Badge>
            <h2
              id="why-impart-heading"
              className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              We&apos;re Not the Agency{" "}
              <span className="gradient-text">You&apos;ve Dealt With Before</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              Most agencies oversell and underdeliver. They win your account with a slick pitch and then hand it to an account manager reading from a playbook.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Impart is different. We care about one thing: measurable growth for your business. No fluff, no vanity metrics, no hiding behind jargon. If it doesn&apos;t move the needle, we don&apos;t do it.
            </p>
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border">
              <p className="text-white font-semibold mb-1">
                Results-oriented by design.
              </p>
              <p className="text-brand-muted text-sm">
                We structure every engagement around outcomes. If we&apos;re not delivering value, you shouldn&apos;t be paying us. That&apos;s why we don&apos;t lock you into contracts — we earn your business month after month.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Comparison table */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-brand-border">
              {/* Header */}
              <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-wider">
                <div className="px-5 py-3 bg-brand-elevated text-brand-subtle border-b border-brand-border">
                  Other Agencies
                </div>
                <div className="px-5 py-3 bg-brand-orange/10 text-brand-orange border-b border-brand-orange/20">
                  Impart Agency
                </div>
              </div>

              {/* Rows */}
              {differentiators.map((item, i) => (
                <div
                  key={i}
                  className={`grid grid-cols-2 ${i < differentiators.length - 1 ? "border-b border-brand-border" : ""}`}
                >
                  <div className="flex items-start gap-2.5 px-5 py-4 bg-brand-elevated/50">
                    <XCircle
                      className="h-4 w-4 text-red-500/60 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-brand-subtle leading-relaxed">
                      {item.theirs}
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 px-5 py-4">
                    <CheckCircle2
                      className="h-4 w-4 text-brand-orange shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-xs text-white leading-relaxed">
                      {item.ours}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
