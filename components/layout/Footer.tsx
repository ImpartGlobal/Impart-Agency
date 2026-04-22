import type { ReactNode } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { site } from "@/content/site";
import { footerNav } from "@/content/navigation";
import { formatWhatsAppUrl } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    "Hi Impart Agency, I'd like to discuss a project."
  );

  return (
    <footer className="bg-brand-surface border-t border-brand-border shadow-inset-gleam" aria-label="Site footer">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-display font-bold text-2xl text-white hover:text-brand-orange transition-colors mb-4"
              aria-label="Impart Agency home"
            >
              <span className="text-brand-orange">Impart</span>
              <span>Agency</span>
            </Link>
            <p className="text-brand-muted text-sm leading-relaxed max-w-xs mb-6">
              AI implementation for South African enterprises. Senior practitioners, POPIA-compliant by default, ninety-day guarantee on every engagement.
            </p>

            {/* Contact details */}
            <div className="space-y-2 mb-6">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors group"
              >
                <Mail className="h-4 w-4 text-brand-orange group-hover:text-brand-orange-light shrink-0" aria-hidden="true" />
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition-colors group"
              >
                <Phone className="h-4 w-4 text-brand-orange group-hover:text-brand-orange-light shrink-0" aria-hidden="true" />
                {site.phone}
              </a>
              <span className="flex items-center gap-2 text-sm text-brand-muted">
                <MapPin className="h-4 w-4 text-brand-orange shrink-0" aria-hidden="true" />
                {site.address.city}, {site.address.province}, {site.address.country}
              </span>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {site.social.facebook && (
                <SocialLink href={site.social.facebook} label="Facebook">
                  <Facebook className="h-4 w-4" />
                </SocialLink>
              )}
              {site.social.instagram && (
                <SocialLink href={site.social.instagram} label="Instagram">
                  <Instagram className="h-4 w-4" />
                </SocialLink>
              )}
              {site.social.linkedin && (
                <SocialLink href={site.social.linkedin} label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </SocialLink>
              )}
              {site.social.twitter && (
                <SocialLink href={site.social.twitter} label="Twitter / X">
                  <Twitter className="h-4 w-4" />
                </SocialLink>
              )}
              <SocialLink href={whatsappUrl} label="WhatsApp" external>
                <MessageCircle className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2" role="list">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2" role="list">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 mt-8">
              Legal
            </h3>
            <ul className="space-y-2" role="list">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-muted hover:text-white transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA column */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Start a Project
            </h3>
            <p className="text-sm text-brand-muted leading-relaxed mb-4">
              Tell us the function. We will scope what it would take to run it with AI.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-full px-4 py-3 bg-brand-orange hover:bg-brand-orange-light text-white text-sm font-semibold rounded-xl transition-all duration-200 shadow-glow-sm hover:shadow-glow-orange active:translate-y-px active:shadow-none"
            >
              Request a Proposal
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full gap-2 mt-2 px-4 py-3 bg-brand-elevated hover:bg-brand-border text-white text-sm font-medium rounded-xl transition-all duration-200 border border-brand-border"
            >
              <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-border">
        <div className="container-wide pt-4 pb-2">
          <p className="text-xs text-brand-subtle mb-3">
            POPIA-compliant by default. South African hosting on request. Info officer: {site.email}
          </p>
        </div>
        <div className="container-wide pb-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-brand-subtle">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {site.social.linkedin && (
              <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-subtle hover:text-white transition-colors">LinkedIn</a>
            )}
            {site.social.twitter && (
              <a href={site.social.twitter} target="_blank" rel="noopener noreferrer" className="text-xs text-brand-subtle hover:text-white transition-colors">X</a>
            )}
            <p className="text-xs text-brand-subtle">Built in South Africa.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  external,
  children,
}: {
  href: string;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex items-center justify-center w-8 h-8 rounded-lg bg-brand-elevated border border-brand-border text-brand-muted hover:text-white hover:border-brand-orange/40 hover:bg-brand-orange/10 transition-all duration-200"
    >
      {children}
    </a>
  );
}
