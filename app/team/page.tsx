import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { team, teamEnabled } from "@/content/team";
import { ArrowRight, Linkedin } from "lucide-react";

export const metadata: Metadata = buildMetadata({
  title: "Our Team",
  description:
    "Senior AI practitioners on every engagement. Meet the people who design, build, and deploy AI systems for South African businesses.",
  path: "/team",
});

export default function TeamPage() {
  /* Gate: show coming-soon until teamEnabled is flipped to true */
  if (!teamEnabled) {
    return (
      <main className="pt-24 pb-32">
        <div className="container-wide">
          <div className="rounded-2xl border border-brand-border bg-brand-surface px-8 py-20 text-center max-w-xl mx-auto">
            <p className="text-2xl font-bold text-white mb-3">Team page coming soon</p>
            <p className="text-brand-muted mb-8">
              We&apos;re putting this together. In the meantime, get in touch —
              you&apos;ll speak directly with a senior practitioner.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors duration-200"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-32">
      <div className="container-wide">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
            The Team
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Senior Practitioners, Every Engagement
          </h1>
          <p className="text-lg text-brand-muted leading-relaxed">
            No juniors. No account managers reading from a playbook. The people
            you meet in the sales call are the people who build your system.
          </p>
        </div>

        {team.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.id}
                className="rounded-2xl border border-brand-border bg-brand-surface p-6"
              >
                {/* Photo placeholder */}
                <div className="w-16 h-16 rounded-full bg-brand-elevated border border-brand-border mb-5 overflow-hidden">
                  {member.photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h2 className="text-lg font-semibold text-white mb-0.5">
                  {member.name}
                </h2>
                <p className="text-sm text-brand-orange mb-3">{member.role}</p>
                <p className="text-sm text-brand-muted mb-5">
                  {member.positioning}
                </p>
                {member.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-5">
                    {member.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-brand-muted flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-brand-orange shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                {member.linkedIn && (
                  <a
                    href={member.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-brand-muted hover:text-white transition-colors duration-200"
                  >
                    <Linkedin className="h-3.5 w-3.5" />
                    LinkedIn
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-brand-border bg-brand-surface px-8 py-16 text-center max-w-xl mx-auto">
            <p className="text-2xl font-bold text-white mb-3">
              Team profiles coming soon
            </p>
            <p className="text-brand-muted mb-8">
              We&apos;re putting together our team page. In the meantime, get in
              touch and you&apos;ll speak directly with a senior practitioner.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-orange text-white font-semibold text-sm hover:bg-brand-orange-light transition-colors duration-200"
            >
              Get in touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
