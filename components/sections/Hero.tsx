"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatWhatsAppUrl } from "@/lib/utils";
import { site } from "@/content/site";

export function Hero() {
  const whatsappUrl = formatWhatsAppUrl(
    site.whatsapp,
    "Hi Impart Agency, I'd like to discuss a project."
  );

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-brand-bg" aria-hidden="true" />

      {/* Orange glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[120px]"
        style={{ background: "radial-gradient(circle, #F04B00 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Pre-headline badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-orange/30 bg-brand-orange/10 text-brand-orange mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
              South Africa&apos;s Results-Driven Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
          >
            The{" "}
            <span className="gradient-text">Results&#8209;Driven</span>
            <br />
            Digital Agency.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-brand-muted max-w-2xl leading-relaxed mb-10"
          >
            We build the digital infrastructure that grows South African businesses.
            Websites, apps, SEO, and paid advertising — engineered to compound into
            real, measurable growth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 text-green-400" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2" aria-hidden="true">
                {["JM", "SR", "TV", "ZD", "BK"].map((initials, i) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-brand-bg flex items-center justify-center text-[10px] font-bold"
                    style={{
                      background: `hsl(${(i * 60 + 20) % 360}, 60%, 40%)`,
                      zIndex: 5 - i,
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="text-sm text-brand-muted">
                <strong className="text-white">80+</strong> happy clients
              </span>
            </div>
            <div className="h-4 w-px bg-brand-border hidden sm:block" aria-hidden="true" />
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-brand-orange fill-current"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-sm text-brand-muted ml-1">
                <strong className="text-white">5.0</strong> client satisfaction
              </span>
            </div>
            <div className="h-4 w-px bg-brand-border hidden sm:block" aria-hidden="true" />
            <span className="text-sm text-brand-muted">
              <strong className="text-white">150+</strong> projects delivered
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-bg to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
