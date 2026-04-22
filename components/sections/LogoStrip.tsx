import { AnimatedSection } from "@/components/ui/AnimatedSection";

const industries = [
  "Property",
  "Finance",
  "Legal",
  "Healthcare",
  "Retail",
  "Hospitality",
  "Logistics",
  "Technology",
  "Professional Services",
  "SaaS",
];

export function LogoStrip() {
  return (
    <section
      className="py-12 border-y border-brand-border bg-brand-surface/50"
      aria-label="Industries we serve"
    >
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-subtle mb-8">
            Trusted by businesses across South Africa
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-surface/50 to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-surface/50 to-transparent z-10"
            aria-hidden="true"
          />

          {/* Scrolling strip */}
          <div
            className="flex gap-8 items-center overflow-hidden"
            aria-label="Industries served"
          >
            <div
              className="flex gap-8 items-center whitespace-nowrap"
              style={{
                animation: "logoScroll 28s linear infinite",
                willChange: "transform",
              }}
            >
              {[...industries, ...industries, ...industries].map((industry, i) => (
                <span
                  key={`${industry}-${i}`}
                  className="flex items-center gap-3 text-sm font-medium text-brand-subtle shrink-0"
                  aria-hidden={i >= industries.length ? "true" : undefined}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-brand-orange/50 shrink-0"
                    aria-hidden="true"
                  />
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logoScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-scroll { animation: none; }
        }
      `}</style>
    </section>
  );
}
