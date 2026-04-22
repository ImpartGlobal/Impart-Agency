import Image from "next/image";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";

const steps = [
  {
    number: "01",
    title: "Scope",
    description:
      "Week one. We define the single function or cost line the engagement replaces. Specific and measurable, with a baseline number we work against.",
    color: "from-orange-500/20 to-orange-600/5",
  },
  {
    number: "02",
    title: "Audit",
    description:
      "Weeks two and three. We run the operations audit against that function. Data readiness, current cost, integration surface, POPIA posture, build versus buy.",
    color: "from-amber-500/20 to-amber-600/5",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Week four. We specify the system. Model choice, data flow, integration points, handover rules, governance, audit logging. Signed before a line of code gets written.",
    color: "from-red-500/20 to-red-600/5",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Weeks five through nine. We build inside your environment. Daily progress, weekly reviews, no month-six pivots. KPIs tracked from day one.",
    color: "from-blue-500/20 to-blue-600/5",
  },
  {
    number: "05",
    title: "Handover",
    description:
      "Week ten. Your team takes the dashboards and the decisions. We document everything, train your operators, and stay on through the first thirty days of production.",
    color: "from-violet-500/20 to-violet-600/5",
  },
  {
    number: "06",
    title: "Run",
    description:
      "Month two onwards. Continuous improvement against the KPIs we locked at scope. Monthly retainer if you want us on, clean exit if you do not. Guarantee window closes at day ninety.",
    color: "from-emerald-500/20 to-emerald-600/5",
  },
];

export function Process() {
  return (
    <section
      className="relative py-24 lg:py-32 bg-brand-surface overflow-hidden"
      aria-labelledby="process-heading"
    >
      {/* Horizon-waves-orange ambient — progression visual */}
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        <Image
          src="/graphics/backgrounds/bg-horizon-waves-orange.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-20"
          style={{ mixBlendMode: "lighten" }}
        />
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="orange" className="mb-4">How We Engage</Badge>
          <h2
            id="process-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            From function to system{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              in under ninety days
            </span>
          </h2>
          <p className="text-brand-muted text-lg">
            Every engagement is fixed-scope and time-boxed against the cost line
            it replaces. Ten weeks from scope to handover, thirty days of managed
            production, ninety-day guarantee on the outcome.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, index) => (
            <StaggerItem key={step.number}>
              <div className="relative p-6 rounded-2xl bg-brand-elevated border border-brand-border h-full overflow-hidden group hover:border-brand-orange/30 transition-all duration-300">
                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  aria-hidden="true"
                />

                {/* Step number — text-brand-elevated reads as subtle embossing */}
                <div className="relative">
                  <span className="font-display text-5xl font-bold text-brand-elevated select-none">
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

                {/* Connector line — warm gradient hints at flow */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-5 h-px hidden lg:block"
                    style={{
                      background:
                        "linear-gradient(to right, #27273A, #33251F)",
                    }}
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
