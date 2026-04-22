import Image from "next/image";
import { CheckCircle2, XCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

const differentiators = [
  {
    theirs: "Pilots that sit in a deck for twelve months and never ship",
    ours: "Production systems in under ninety days, covered by our guarantee",
  },
  {
    theirs: "Cross-border data transfer that exposes you under POPIA",
    ours: "Private AI inside your tenancy, in the Azure South Africa region",
  },
  {
    theirs: "Junior consultants reading from an international playbook",
    ours: "Senior practitioners with enterprise AI delivery on record",
  },
  {
    theirs: "Generic frameworks that never touch your real systems",
    ours: "Integration with your CRM, telephony, and document libraries",
  },
  {
    theirs: "Hourly billing with no ceiling and no accountability",
    ours: "Fixed-scope engagements priced against the cost line they replace",
  },
  {
    theirs: "Partners flown in from Dubai or London for the pitch",
    ours: "Local senior team, 2KO Business Advisory Group in the room",
  },
];

export function WhyImpart() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="why-impart-heading"
    >
      {/* Dispersion spectrum ambient background — cold/prism treatment */}
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        <Image
          src="/graphics/backgrounds/bg-dispersion-spectrum.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          style={{ mixBlendMode: "screen" }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Heading + context */}
          <AnimatedSection>
            <Badge variant="orange" className="mb-4">Why Impart</Badge>
            <h2
              id="why-impart-heading"
              className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              AI work that{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                actually ships
              </span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-8">
              Roughly eighty-five percent of enterprise AI initiatives stall before
              they reach production. The reasons are almost never the model. They
              are data foundations, integration complexity, governance, and the
              absence of a delivery partner who has done this before.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Impart is built for the fifteen percent that ship. We engage on
              fixed scope, work against the cost line the system replaces, and
              stand behind the outcome with a ninety-day guarantee. If the system
              is not earning its keep inside ninety days of production, we keep
              working for free until it is.
            </p>
            {/* Commit card — shadow-card-lift + copper-deep top border */}
            <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border border-t-2 border-t-brand-copper-deep shadow-card-lift">
              <p className="text-white font-semibold mb-1">
                Priced against the work we replace.
              </p>
              <p className="text-brand-muted text-sm">
                Every engagement is scoped around a specific function and its
                current cost. Our fee is a defined portion of the saving, paid
                once the system is producing. The build funds itself.
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Comparison table */}
          <AnimatedSection delay={0.15}>
            <div className="rounded-2xl overflow-hidden border border-brand-border">
              {/* Header — prism accent for cold/governance feel per aesthetic-upgrades §3.2 */}
              <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-wider">
                <div className="px-5 py-3 bg-brand-elevated text-brand-subtle border-b border-brand-border">
                  The Industry Default
                </div>
                <div className="px-5 py-3 bg-brand-prism-muted text-brand-prism border-b border-brand-prism/20">
                  Impart Agency
                </div>
              </div>

              {/* Rows — CheckCircle stays brand-orange in content rows */}
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
