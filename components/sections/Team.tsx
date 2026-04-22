import Link from "next/link";
import { ArrowRight, Linkedin } from "lucide-react";
import { team, teamEnabled } from "@/content/team";

/**
 * Homepage team section.
 * Gated by teamEnabled flag (CLAUDE.md decision 4) — renders nothing
 * until real photography and bios exist. When enabled, shows up to 6
 * members with a link to /team.
 */
export function Team() {
  if (!teamEnabled || team.length === 0) return null;

  const featured = team.slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-brand-surface" aria-label="Our Team">
      <div className="container-wide">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-orange mb-4">
              The Team
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Senior Practitioners, Every Engagement
            </h2>
            <p className="mt-4 text-brand-muted">
              The people you meet in the sales call are the people who build
              your system.
            </p>
          </div>
          {team.length > 6 && (
            <Link
              href="/team"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-orange hover:text-brand-orange-light transition-colors duration-200 shrink-0"
            >
              Meet the full team
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-brand-border bg-brand-bg p-6"
            >
              {/* Photo */}
              <div className="w-14 h-14 rounded-full bg-brand-elevated border border-brand-border mb-5 overflow-hidden">
                {member.photo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              <h3 className="text-base font-semibold text-white mb-0.5">
                {member.name}
              </h3>
              <p className="text-sm text-brand-orange mb-3">{member.role}</p>
              <p className="text-sm text-brand-muted mb-5 leading-relaxed">
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
      </div>
    </section>
  );
}
