"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, UserRound, ShieldCheck, Building2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      aria-label="Hero"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-brand-bg" aria-hidden="true" />

      {/* Hero chrome background image */}
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        <Image
          src="/graphics/hero/hero-liquid-chrome-copper.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
          style={{ mixBlendMode: "screen" }}
        />
        {/* Vertical gradient brackets — top and bottom fade to bg-brand-bg */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, #0A0A12 0%, transparent 30%, transparent 70%, #0A0A12 100%)",
          }}
        />
      </div>

      {/* Orange radial glow — reduced to 0.04 so chrome carries the warmth */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-[120px]"
        style={{ background: "radial-gradient(circle, #F04B00 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Grid pattern — 90×90 at 0.02 so chrome breathes */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
        aria-hidden="true"
      />

      <div className="container-wide relative z-10 py-28 lg:py-40">
        <div className="max-w-4xl">
          {/* Pre-headline badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border border-brand-orange/30 bg-brand-orange/10 text-brand-orange mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
              AI for the work that drains your margin
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6"
          >
            We Build{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent font-black">
              A.I. Systems
            </span>{" "}
            that Pay for Themselves
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-brand-muted max-w-2xl leading-relaxed mb-10"
          >
            AI agents that take over your highest-volume functions, running
            continuously at a lower cost than the teams they augment. Built for
            regulated industries, covered by our ninety-day guarantee, priced so
            the savings fund the build.
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
                Request a Proposal
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/how-we-engage">
                How We Engage
              </Link>
            </Button>
          </motion.div>

          {/* Qualitative trust badges — lucide icons per aesthetic-upgrades §1.7 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4"
          >
            <div className="flex items-center gap-2">
              <UserRound className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <span className="text-sm text-brand-muted">
                <strong className="text-white">Senior practitioners only</strong>
              </span>
            </div>
            <div className="h-4 w-px bg-brand-border hidden sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <span className="text-sm text-brand-muted">
                <strong className="text-white">POPIA-compliant by default</strong>
              </span>
            </div>
            <div className="h-4 w-px bg-brand-border hidden sm:block" aria-hidden="true" />
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-brand-orange" aria-hidden="true" />
              <span className="text-sm text-brand-muted">
                <strong className="text-white">2KO Business Advisory Group</strong>
              </span>
            </div>
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
