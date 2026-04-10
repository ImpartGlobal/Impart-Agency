import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We dig deep into your business, your market, and your goals. No assumptions — we understand the problem before we prescribe the solution.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    number: "02",
    title: "Assess",
    description:
      "We audit what you have — your current digital presence, competitors, technical gaps, and opportunities most agencies miss.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    number: "03",
    title: "Eliminate",
    description:
      "We cut the dead weight. Broken pages, wasted ad spend, duplicate content, underperforming channels — we remove what's holding you back.",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    number: "04",
    title: "Maximize",
    description:
      "We double down on what works. Every asset, every channel, every conversion point — optimised to extract maximum value.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    number: "05",
    title: "Advise & Implement",
    description:
      "We present a clear strategy, get your alignment, then execute. You understand every decision — and you approve it before we build.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    number: "06",
    title: "Optimize",
    description:
      "We measure everything and improve continuously. Marketing is never done — it compounds. We treat your growth as an ongoing mission.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
];

export function Process() {
  return (
    <section
      className="py-24 lg:py-32 bg-brand-surface"
      aria-labelledby="process-heading"
    >
      <div className="container-wide">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="orange" className="mb-4">How We Work</Badge>
          <h2
            id="process-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Our Six-Step{" "}
            <span className="gradient-text">Growth Process</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Every engagement follows our proven framework — built to uncover opportunity, eliminate waste, and compound results month after month.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative p-6 rounded-2xl bg-brand-elevated border border-brand-border h-full overflow-hidden group hover:border-brand-orange/30 transition-all duration-300">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden="true"
                />

                {/* Step number */}
                <div className="relative">
                  <span className="font-display text-5xl font-bold text-brand-border select-none">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative mt-3">
                  <h3 className="font-display font-bold text-xl text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line for grid flow */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-5 h-px bg-brand-border hidden lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
