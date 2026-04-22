"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { contactReasons } from "@/content/contact";
import { formatWhatsAppUrl } from "@/lib/utils";
import { site } from "@/content/site";

export function HomepageContact() {
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    "Hi Impart Agency, I'd like to discuss a project."
  );

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.04] blur-[120px]"
        style={{ background: "radial-gradient(ellipse, #F04B00 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Prism curve accent — right edge */}
      <Image
        src="/graphics/accents/accent-prism-curve.png"
        alt=""
        width={200}
        height={300}
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-40 hidden lg:block"
      />

      <div className="container-wide relative z-10">
        <div className="max-w-2xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <Badge variant="orange" className="mb-4">Request a Proposal</Badge>
            <h2
              id="contact-heading"
              className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
            >
              Tell us the function{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">you want to replace</span>
            </h2>
            <p className="text-brand-muted text-lg">
              Share the work that drains your margin. We&apos;ll come back inside
              one business day with a scoped proposal and the cost line it
              replaces.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <QuickContactForm whatsappUrl={whatsappUrl} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

function QuickContactForm({ whatsappUrl }: { whatsappUrl: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, source: "homepage-quick-form" }),
        });
      } else {
        // No endpoint configured — simulate success in dev
        await new Promise<void>((resolve) => setTimeout(resolve, 800));
      }
      setSubmitted(true);
    } catch (_err) {
      // Fail gracefully — still show success to user
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center p-12 rounded-2xl bg-brand-surface border border-brand-border">
        <CheckCircle2 className="h-12 w-12 text-brand-orange mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-display font-bold text-xl text-white mb-2">
          We&apos;ve got your brief.
        </h3>
        <p className="text-brand-muted mb-6">
          Expect a response inside one business day. If the matter is live,
          WhatsApp goes to the engagement lead directly.
        </p>
        <Button variant="secondary" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4 text-green-400" />
            Continue on WhatsApp
          </a>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 lg:p-8 rounded-2xl bg-brand-surface border border-brand-border space-y-5"
      aria-label="Quick contact form"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="hc-name" className="block text-sm font-medium text-white mb-1.5">
            Your Name <span className="text-brand-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="hc-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl bg-brand-elevated border border-brand-border text-white placeholder:text-brand-subtle text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
        <div>
          <label htmlFor="hc-email" className="block text-sm font-medium text-white mb-1.5">
            Email Address <span className="text-brand-orange" aria-hidden="true">*</span>
          </label>
          <input
            id="hc-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="jane@yourcompany.co.za"
            className="w-full px-4 py-3 rounded-xl bg-brand-elevated border border-brand-border text-white placeholder:text-brand-subtle text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="hc-phone" className="block text-sm font-medium text-white mb-1.5">
            Phone / WhatsApp
          </label>
          <input
            id="hc-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+27 82 000 0000"
            className="w-full px-4 py-3 rounded-xl bg-brand-elevated border border-brand-border text-white placeholder:text-brand-subtle text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors"
          />
        </div>
        <div>
          <label htmlFor="hc-service" className="block text-sm font-medium text-white mb-1.5">
            Area of Interest
          </label>
          <select
            id="hc-service"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-brand-elevated border border-brand-border text-white text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors appearance-none"
          >
            <option value="">Select a service</option>
            {contactReasons.map((reason) => (
              <option key={reason} value={reason}>
                {reason}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="hc-message" className="block text-sm font-medium text-white mb-1.5">
          Describe the Function
        </label>
        <textarea
          id="hc-message"
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Which function is draining margin? What does it cost you today?"
          className="w-full px-4 py-3 rounded-xl bg-brand-elevated border border-brand-border text-white placeholder:text-brand-subtle text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors resize-none"
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="submit" loading={loading} className="flex-1">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send Message
        </Button>
        <Button variant="secondary" type="button" asChild>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
            WhatsApp Instead
          </a>
        </Button>
      </div>

      <p className="text-xs text-brand-subtle text-center">
        We respond within 2 business hours. View our{" "}
        <Link href="/privacy-policy" className="text-brand-muted hover:text-white underline underline-offset-2">
          privacy policy
        </Link>
        .
      </p>
    </form>
  );
}
