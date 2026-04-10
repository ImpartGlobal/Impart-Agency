"use client";

import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { stats } from "@/content/stats";

function CountUp({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section
      className="py-24 lg:py-28"
      aria-labelledby="stats-heading"
    >
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <h2
            id="stats-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Numbers That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-xl mx-auto">
            Real results, real clients, real South African businesses.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-brand-border rounded-2xl overflow-hidden">
          {stats.map((stat) => {
            const numericValue = parseInt(stat.value.replace(/\D/g, ""), 10);
            const suffix = stat.value.replace(/[\d,]/g, "");

            return (
              <AnimatedSection
                key={stat.label}
                className="bg-brand-surface p-8 lg:p-10 text-center"
              >
                <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-2">
                  <CountUp target={numericValue} suffix={suffix} />
                </div>
                <div className="text-sm font-semibold text-brand-orange uppercase tracking-wide mb-1">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-xs text-brand-subtle leading-relaxed hidden lg:block">
                    {stat.description}
                  </div>
                )}
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
