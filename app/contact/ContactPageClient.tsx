"use client";

import { useState, type ReactNode, type FormEvent } from "react";
import Link from "next/link";
import {
  Mail, Phone, MapPin, MessageCircle,
  Clock, Send, CheckCircle2,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { contact, contactReasons } from "@/content/contact";
import { formatWhatsAppUrl } from "@/lib/utils";
import { site } from "@/content/site";

export function ContactPageClient() {
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    "Hi Impart Agency, I'd like to discuss a project."
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden" aria-label="Contact hero">
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[100px]"
          style={{ background: "radial-gradient(circle, #F04B00 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-wide relative z-10">
          <div className="max-w-2xl">
            <Badge variant="orange" className="mb-5">Contact Us</Badge>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Let&apos;s Talk About{" "}
              <span className="gradient-text">Your Project</span>
            </h1>
            <p className="text-brand-muted text-lg leading-relaxed">
              Tell us what you&apos;re building and we&apos;ll come back with a clear proposal within 2 business hours. No hard sell. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-8 pb-24" aria-label="Contact form and details">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: Details */}
            <AnimatedSection className="space-y-6">
              <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border">
                <h2 className="font-semibold text-white text-sm mb-4">Get in Touch</h2>
                <div className="space-y-3">
                  <ContactDetail
                    href={`mailto:${contact.email}`}
                    icon={<Mail className="h-4 w-4 text-brand-orange" aria-hidden="true" />}
                    label="Email"
                    value={contact.email}
                  />
                  <ContactDetail
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    icon={<Phone className="h-4 w-4 text-brand-orange" aria-hidden="true" />}
                    label="Phone"
                    value={contact.phone}
                  />
                  <ContactDetail
                    href={formatWhatsAppUrl(contact.whatsapp.number, contact.whatsapp.defaultMessage)}
                    icon={<MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />}
                    label="WhatsApp"
                    value="Chat with us directly"
                    external
                    iconBg="bg-green-500/10 border-green-500/20"
                  />
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center shrink-0">
                      <MapPin className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs text-brand-subtle mb-0.5">Location</div>
                      <div className="text-sm text-brand-muted">
                        {contact.address.city}, {contact.address.province}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-brand-surface border border-brand-border">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-4 w-4 text-brand-orange" aria-hidden="true" />
                  <h3 className="font-semibold text-white text-sm">Office Hours</h3>
                </div>
                <div className="text-sm text-brand-muted space-y-1">
                  <p>{contact.officeHours.weekdays}</p>
                  <p>{contact.officeHours.weekends}</p>
                  <p className="text-xs text-brand-subtle pt-1">{contact.officeHours.note}</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/20">
                <h3 className="font-semibold text-white text-sm mb-2">Prefer WhatsApp?</h3>
                <p className="text-sm text-brand-muted mb-3">
                  Most of our clients reach us on WhatsApp first. It&apos;s the fastest way to get a response.
                </p>
                <Button
                  variant="secondary"
                  className="w-full border-green-500/30 hover:border-green-500/50"
                  asChild
                >
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                    Open WhatsApp Chat
                  </a>
                </Button>
              </div>
            </AnimatedSection>

            {/* Right: Form */}
            <AnimatedSection delay={0.1} className="lg:col-span-2">
              <FullContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactDetail({
  href,
  icon,
  label,
  value,
  external,
  iconBg = "bg-brand-orange/10 border-brand-orange/20",
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
  iconBg?: string;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-3 group"
    >
      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <div>
        <div className="text-xs text-brand-subtle mb-0.5">{label}</div>
        <div className="text-sm text-brand-muted group-hover:text-white transition-colors">{value}</div>
      </div>
    </a>
  );
}

function FullContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "",
  });

  const whatsappUrl = formatWhatsAppUrl(site.whatsapp, "Hi Impart Agency, I'd like to discuss a project.");

  const budgetRanges = [
    "Under R10,000", "R10,000 – R30,000", "R30,000 – R75,000",
    "R75,000 – R150,000", "R150,000+", "Ongoing Monthly Retainer", "Not sure yet",
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    try {
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, source: "contact-page" }),
        });
      } else {
        await new Promise((r) => setTimeout(r, 900));
      }
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center p-12 rounded-2xl bg-brand-surface border border-brand-border text-center min-h-[400px]">
        <div>
          <CheckCircle2 className="h-14 w-14 text-brand-orange mx-auto mb-5" aria-hidden="true" />
          <h2 className="font-display font-bold text-2xl text-white mb-3">Message Received!</h2>
          <p className="text-brand-muted mb-6 max-w-sm">
            We&apos;ll review your requirements and respond within 2 business hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 text-green-400" />
                Continue on WhatsApp
              </a>
            </Button>
            <Button variant="secondary" asChild><Link href="/">Back to Home</Link></Button>
          </div>
        </div>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-brand-elevated border border-brand-border text-white placeholder:text-brand-subtle text-sm focus:outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-colors";

  return (
    <form onSubmit={handleSubmit} className="p-6 lg:p-8 rounded-2xl bg-brand-surface border border-brand-border" aria-label="Contact form">
      <h2 className="font-display font-bold text-xl text-white mb-6">Tell Us About Your Project</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {[
          { id: "c-name", label: "Full Name", key: "name", type: "text", auto: "name", placeholder: "Jane Smith", req: true },
          { id: "c-email", label: "Email Address", key: "email", type: "email", auto: "email", placeholder: "jane@company.co.za", req: true },
          { id: "c-phone", label: "Phone / WhatsApp", key: "phone", type: "tel", auto: "tel", placeholder: "+27 82 000 0000", req: false },
          { id: "c-company", label: "Company Name", key: "company", type: "text", auto: "organization", placeholder: "Your Company", req: false },
        ].map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block text-sm font-medium text-white mb-1.5">
              {f.label} {f.req && <span className="text-brand-orange" aria-hidden="true">*</span>}
            </label>
            <input
              id={f.id}
              type={f.type}
              required={f.req}
              autoComplete={f.auto}
              value={form[f.key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
              placeholder={f.placeholder}
              className={inputClass}
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="c-service" className="block text-sm font-medium text-white mb-1.5">I Need Help With</label>
          <select id="c-service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={`${inputClass} appearance-none`}>
            <option value="">Select a service</option>
            {contactReasons.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label htmlFor="c-budget" className="block text-sm font-medium text-white mb-1.5">Approximate Budget</label>
          <select id="c-budget" value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={`${inputClass} appearance-none`}>
            <option value="">Select a range</option>
            {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="c-message" className="block text-sm font-medium text-white mb-1.5">
          Describe Your Project <span className="text-brand-orange" aria-hidden="true">*</span>
        </label>
        <textarea
          id="c-message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell us about your goals, your audience, what you have now, and what you're trying to achieve..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button type="submit" loading={loading} size="lg" className="flex-1">
          <Send className="h-4 w-4" aria-hidden="true" />
          Send Message
        </Button>
        <Button variant="secondary" size="lg" type="button" asChild>
          <a href={formatWhatsAppUrl(site.whatsapp, "Hi, I'd like to discuss a project.")} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
            WhatsApp
          </a>
        </Button>
      </div>
      <p className="text-xs text-brand-subtle mt-4 text-center">
        We respond within 2 business hours. View our{" "}
        <Link href="/privacy-policy" className="text-brand-muted hover:text-white underline underline-offset-2">privacy policy</Link>.
      </p>
    </form>
  );
}
