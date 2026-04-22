import Image from "next/image";
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
    title: "Named Engagement Lead",
    description:
      "One senior practitioner who owns your system end to end. They took it through scope, they took it through build, they stay through operations.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Tuning",
    description:
      "Models drift, data moves, volumes spike. We retune prompts, update retrieval sets, and adjust routing rules against your live KPIs every month.",
  },
  {
    icon: Shield,
    title: "Governance and Audit",
    description:
      "Security patching, access controls, audit log review, and POPIA compliance posture checks. Reported monthly in plain language, formal annually.",
  },
  {
    icon: MessageCircle,
    title: "Direct Line to the Team",
    description:
      "WhatsApp and email to the engagement lead, not a ticket queue. Response measured in hours during business days, not business weeks.",
  },
];

export function Support() {
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    "Hi, I'd like to discuss ongoing AI operations support."
  );

  return (
    <section
      className="relative py-28 lg:py-36 bg-brand-surface overflow-hidden"
      aria-labelledby="support-heading"
    >
      {/* Horizon-waves-copper ambient — warm, different temp to Process */}
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        <Image
          src="/graphics/backgrounds/bg-horizon-waves-copper.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.18, mixBlendMode: "lighten" }}
        />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <AnimatedSection>
            <Badge variant="orange" className="mb-4">AI Operations</Badge>
            <h2
              id="support-heading"
              className="font-display text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              We stay on the system{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">
                after it goes live
              </span>
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed mb-6">
              A production AI system is a living thing. The model behaviour
              shifts, the data it runs on evolves, the volume changes. The work
              that matters most happens in the months after handover, tuning the
              system against real outcomes.
            </p>
            <p className="text-brand-muted leading-relaxed mb-8">
              Our retainer clients see the strongest returns because the system
              compounds. Monthly engagement, no minimum term, clean exit whenever
              the value stops matching the fee.
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
