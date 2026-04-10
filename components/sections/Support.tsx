import Link from "next/link";
import { MessageCircle, RefreshCw, Shield, Headphones } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatWhatsAppUrl } from "@/lib/utils";
import { site } from "@/content/site";

const supportFeatures = [
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    description:
      "One person who knows your business, your goals, and your history. No bouncing between departments.",
  },
  {
    icon: RefreshCw,
    title: "Ongoing Optimisation",
    description:
      "We don't launch and leave. Monthly reviews, continuous improvements, and proactive recommendations.",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description:
      "Regular updates, backups, uptime monitoring, and security patching — so you never wake up to a broken site.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp-First Communication",
    description:
      "South Africa runs on WhatsApp. So do we. Fast responses, clear updates, no tickets and no waiting.",
  },
];

export function Support() {
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    "Hi, I'd like to discuss ongoing support."
  );

  return (
    <section
      className="py-24 lg:py-32 bg-brand-surface"
      aria-labelledby="support-heading"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <AnimatedSection>
            <Badge variant="orange" className="mb-4">Ongoing Support</Badge>
            <h2
              id="support-heading"
              className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              We&apos;re There{" "}
              <span className="gradient-text">Long After Launch</span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-6">
              Most agencies disappear once the invoice is paid. We believe the most valuable work happens after launch — the iteration, the optimisation, the gradual compounding of everything we build together.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Our ongoing retainer clients see the best results. Because digital growth isn&apos;t a project — it&apos;s a practice.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="/contact">Discuss a Retainer</Link>
              </Button>
              <Button variant="secondary" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </AnimatedSection>

          {/* Right: Feature list */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {supportFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border hover:border-brand-orange/20 transition-all duration-300">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5 text-brand-orange" aria-hidden="true" />
                    </div>
                    <h3 className="font-semibold text-white text-sm mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-brand-muted text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
