import type { ElementType } from "react";
import Link from "next/link";
import {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Sparkles,
  TrendingUp,
  BarChart3,
  FileText,
  Palette,
  ArrowRight,
} from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { services } from "@/content/services";

const iconMap: Record<string, ElementType> = {
  Globe,
  ShoppingCart,
  Code2,
  Smartphone,
  Sparkles,
  TrendingUp,
  BarChart3,
  FileText,
  Palette,
};

export function ServicesGrid() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32"
      aria-labelledby="services-heading"
    >
      <div className="container-wide">
        {/* Section header */}
        <AnimatedSection className="text-center mb-16">
          <Badge variant="orange" className="mb-4">What We Do</Badge>
          <h2
            id="services-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Everything You Need to{" "}
            <span className="gradient-text">Win Online</span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            From your first website to AI-powered automations — we build and manage the full digital stack that grows your business.
          </p>
        </AnimatedSection>

        {/* Services grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Globe;
            return (
              <StaggerItem key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col h-full p-6 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-orange/30 hover:bg-brand-elevated transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                  aria-label={`Learn more about ${service.title}`}
                >
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                      <Icon
                        className="h-5 w-5 text-brand-orange"
                        aria-hidden="true"
                      />
                    </div>
                    <ArrowRight
                      className="h-4 w-4 text-brand-border group-hover:text-brand-orange group-hover:translate-x-1 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-brand-orange transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-brand-muted text-sm leading-relaxed flex-1">
                    {service.tagline}
                  </p>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
