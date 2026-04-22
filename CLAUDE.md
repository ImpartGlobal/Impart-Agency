# CLAUDE.md

Shared working document for Claude-based tools operating on this repo.
Both **Cowork** (Liam's desktop app) and **Claude Code** (the CLI) read this
file automatically on startup. Treat it as the single source of truth for
project context and cross-tool coordination.

> **If you are a Claude instance reading this for the first time:** scan the
> whole file, then append any new learnings to the "Shared Working Log" at the
> bottom so the other tool benefits next time.

---

## Project identity

- **Name:** Impart Agency Website
- **Repo:** `Impart-Agency` (local), owner: Liam Pitcher
- **Purpose:** Production Next.js marketing site for Impart Agency, a South
  African digital agency.
- **Live URL:** https://impartagency.co.za
- **Deployment target:** Vercel (see `vercel.json`).

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15.2.4, App Router |
| Language | TypeScript 5 |
| UI | React 19 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Primitives | Radix UI (accordion, dialog, nav menu, slot) |
| Icons | lucide-react |
| Utility | `clsx` + `tailwind-merge` via `cn()` in `lib/utils.ts` |
| Node | >= 18.17 (see `.nvmrc`) |

## Directory map

```
app/              Next.js App Router pages (one folder per route)
components/
  layout/         Header, Footer
  sections/       Homepage sections (Hero, Stats, Testimonials, ...)
  shared/         Reusable page-level blocks (ServicePageTemplate, ...)
  ui/             Leaf UI primitives (Button, Card, Accordion, ...)
content/          ALL editable content — site data, services, pricing, FAQs
lib/              utils.ts, metadata.ts
public/           Static assets (og images, favicons — several still missing)
```

## Hard conventions (do not violate)

1. **Content belongs in `content/`**, never hardcoded in components.
   Pricing, copy, service definitions, FAQs, stats, testimonials — all edits
   happen in `content/*.ts`. Adding a new service = edit `content/services.ts`,
   not the component tree.
2. **Use `cn()` for class names** (`lib/utils.ts`). Never concatenate Tailwind
   classes with `+` or template strings.
3. **Dark theme only.** No light/dark toggle. Use existing palette in
   `tailwind.config.ts`.
4. **No server-side secrets in `NEXT_PUBLIC_*`.** Public env vars are fine for
   analytics IDs and social URLs; anything sensitive needs a server route.
5. **ZAR / South African English.** No Houston/Texas copy, no USD prices.
6. **Framer Motion `once: true`** for scroll animations (animate on first view
   only).
7. **`next.config.js` ignores ESLint and TS errors during build** — do not
   rely on the build to catch type errors. Run `npm run lint` and
   `tsc --noEmit` locally.

## Commands

```bash
npm install              # first-time setup
cp .env.example .env.local   # then fill in values
npm run dev              # local dev at http://localhost:3000
npm run build            # production build
npm run start            # serve production build
npm run lint             # ESLint (next/core-web-vitals)
```

## Environment variables

All are `NEXT_PUBLIC_*` — see `.env.example` for the full list. None are
server-secret today. Key ones:

- `NEXT_PUBLIC_FORM_ENDPOINT` — contact form POST target (Formspree or custom
  `/api/contact` route)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` — international format, no `+`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 ID

If a task adds a new env var, update `.env.example` in the same commit.

## Open work / known gaps

Copied from the README's "Assets still needed" list so both tools see it:

- [ ] Agency logo SVG (currently a text wordmark)
- [ ] `/public/og-default.png` social share image
- [ ] Favicon + apple-touch-icon
- [ ] Real testimonials (currently illustrative)
- [ ] Real stats figures (current numbers are plausible estimates)
- [ ] Confirm 2KO Business Advisory Group affiliation still applies
- [ ] Office address in `content/contact.ts`
- [ ] WhatsApp business number in env
- [ ] Real social profile URLs in env

---

## Who does what: Cowork vs Claude Code

Both tools can read and write these files. Coordinate through this document
and through git commits — there is no live shared context between sessions.

### Cowork (desktop app, runs in a Linux sandbox)

Best for:
- Planning, spec writing, breaking down features
- Reading / analysing the codebase, reviewing Claude Code's diffs
- Producing non-code deliverables: briefs, client-facing docs, spreadsheets,
  PDFs, slide decks
- Web research and pulling in external info
- Drafting or updating content files in `content/*.ts`
- Updating this CLAUDE.md

Limitations here:
- Shell is a Linux sandbox separated from Liam's Windows machine — **cannot**
  run `npm run dev`, `npm run build`, or anything that needs the real
  `node_modules` / browser against the live project.
- No native git operations (no branching / committing / pushing). Liam or
  Claude Code does those.

### Claude Code (CLI, runs natively in the repo)

Best for:
- Implementing code changes that need the build/test loop
- Running `npm run dev` and iterating against a live server
- Running `npm run lint` and `tsc --noEmit` to verify
- Git work: branches, commits, PRs, rebases
- Anything that touches the real local environment (installed tools, real
  Node, real browser)

### Rule of thumb

> **Cowork plans and drafts. Claude Code builds and ships.**
> Either can edit files, but if a change needs verification against a running
> server or a test, route it through Claude Code.

### Avoiding collisions

- **One tool at a time per file.** If Cowork is mid-edit on a section, don't
  have Claude Code working on the same file in parallel.
- **Commit often.** Small, frequent commits from Claude Code make it safe for
  Cowork to pick up from a known-good state.
- **Use the log below** to flag in-progress work so the other tool sees it.

---

## Active strategic brief: AI-agency repositioning (2026-04-21)

**Liam's directive:** Reposition Impart as **the AI agency for South Africa**
(with a path to global). Target quality bar: acquisition.com / Hormozi-level.
Full audit doc at `docs/audit.md` — read it before doing any homepage /
services work.

**Current positioning (must change):** Generalist digital agency.
**New positioning:** AI implementation agency. AI spine, generalist
capabilities subordinated.

### Liam's decisions (locked 2026-04-21 — use these as ground truth)

1. **Hero H1 — Option F, "A.I." clarity revision (locked 2026-04-22, second
   pass, superseding the earlier Option F wording):**
   - Pre-headline: *AI for the work that drains your margin*
   - H1: *We Build A.I. Systems that Pay for Themselves*
   - Sub: *AI agents that take over your highest-volume functions, running
     continuously at a lower cost than the teams they augment. Built for
     regulated industries, covered by our ninety-day guarantee, priced so
     the savings fund the build.*
   - Primary CTA: *Request a Proposal*
   - Secondary CTA: *How We Engage*
   - Notes for Claude Code: H1 uses title case and the punctuated form
     "A.I." (not "AI") to reassure visitors they've landed on an AI-focused
     site. Gradient treatment sits on "A.I. Systems". No trailing full stop
     in the new wording. Subhead still uses "ninety-day" spelled out, not
     "90-day", per brand voice rules.
2. **Pricing — hide it.** Remove `/pricing` from primary nav. Replace with a
   `/how-we-engage` page describing engagement shapes (AI Audit, Scoped POC,
   Implementation Programme, Ongoing AI Ops) without rand figures. Keep
   `content/pricing.ts` in the repo (do not delete) but stop rendering it
   publicly. Every engagement-shape CTA → "Request a proposal".
3. **2KO affiliation — keep and amplify.** Current About-page section stays;
   it's an explicit trust asset for enterprise AI positioning.
4. **Team page — skip at launch.** Do NOT ship `/team` yet, do NOT render a
   Team section on the homepage. Revisit when real photography + bios
   exist. You can still scaffold `content/team.ts` + the `/team` route with
   a "Team page coming soon" state behind a `team.enabled` flag — but it
   must not be linked from nav / homepage.
5. **Case studies — parallel sourcing.** Liam is pursuing both 2KO client
   case studies and internal builds. Claude Code: scaffold `content/caseStudies.ts`,
   `/work`, `/work/[slug]`, and the homepage CaseStudies section with an
   empty-state "Work coming soon" render when the array is empty. When the
   array has entries, render normally. Do not author content.
6. **Guarantee — hard risk-reversal.** Use the line: *"AI systems that earn
   their keep in the first 90 days — or we keep working for free until they
   do."* This needs a matching `/guarantee` page that lays out the terms.
   Claude Code: create the page scaffold; Liam will populate legal-grade
   terms.
7. **Budget ranges on forms — AI-sized.** `content/forms.ts` budget array
   is: Under R50,000 / R50,000–R200,000 / R200,000–R500,000 / R500,000+ /
   Ongoing retainer / Not sure yet.
8. **Social-proof strip — qualitative, not numerical.** Replace the current
   `80+ clients / 5.0 reviews / 150+ projects` stats with three qualitative
   trust badges: *Senior practitioners only* / *POPIA-compliant by default*
   / *2KO Business Advisory Group*. No invented numbers.

### Status after decisions

- **Priority 1 (scaffolding)** — unblocked, start immediately.
- **Priority 2 (homepage surgery)** — unblocked with decisions above.
- **Priority 3 (pricing removal + nav)** — unblocked (decision: hide).
- **Priority 4 (service-page rewrites)** — unblocked; copy from §11 of audit.
- **Priority 5 (imagery slots)** — scaffold-only until Liam pulls Envato
  assets (§10 of audit).

### Hard rules for this pivot

- Do not invent metrics, stats, or case-study content. Leave empty states
  and qualitative proof per decision 8.
- Do not delete `content/pricing.ts` — keep it in the repo, just stop
  rendering it.
- Do not place placeholder team members or ship `/team` publicly yet.
- Each AI service page gets its own form variant (see §6 of audit).
- `content/forms.ts` is the canonical location for all form field
  definitions — do not hardcode field lists in form components.
- Guarantee language is not a marketing line until `/guarantee` exists with
  backing terms. Do not ship the guarantee copy on the homepage until that
  page is live.

---

## Shared Working Log

Append-only log of non-trivial changes, decisions, and handoffs between
tools. Newest entries at the top. Format:

```
### YYYY-MM-DD — [Cowork | Claude Code] — short title
- What changed / was decided
- Any follow-ups for the other tool
```

### 2026-04-22 — Claude Code — Pre-launch polish directive complete (feat/pre-launch-polish)

All P-steps from `docs/claude-code-directive.md` executed in order. Branch
ready to merge and deploy.

**P0 — Housekeeping:** CSS vars synced to Tailwind tokens in `app/globals.css`
(copper, prism, surface-tint, border-warm, ink, ink-soft, orange-deep). Fixed
`.gradient-text` end stop `#FF9500 → #FF6B35`. Ported four AI capability
services into `content/services.ts`. Wired Stats section into `app/page.tsx`.

**P1 — Hero:** `hero-liquid-chrome-copper.jpg` wired via `next/image` with
`mix-blend-mode: screen`, 180deg gradient brackets. Grid pattern: 90px/0.02.
Headline gradient on "A.I. Systems". Trust badges now use lucide icons
(UserRound, ShieldCheck, Building2). Padding increased pt-28/lg:pt-40.

**P2 — ValuePropositions:** Shape PNGs wired (pyramid/spiral/prism) at 52px
opacity-60 screen. Data moved to `content/values.ts`. Hover: card-lift +
inset-gleam. Outcome tag: copper instead of orange.

**P3 — Section graphics:** Ambient images added to WhyImpart
(bg-dispersion-spectrum), Process (bg-horizon-waves-orange), Testimonials
(bg-glass-prism-clean), Support (bg-horizon-waves-copper), CaseStudies
(accent-prism-beam). Token/copy polish per brand guide on each.

**P4 — Components:** Button: copper variant, active state micro-interactions,
Slot/asChild crash fixed (see below). Badge: copper + prism variants. Header:
scroll threshold 20→40, "Request a Proposal" CTAs. Footer: shadow-inset-gleam,
AI-positioning description, POPIA compliance note, "Request a Proposal" CTAs.
HomepageContact: accent-prism-curve wired.

**P5 — Service pages:** ServicePageTemplate extended with optional
`heroBackground` and `contentPattern` props; icon map expanded for AI icons
(Bot, ClipboardCheck, ShieldCheck, Cpu, Map, Database). Three primary VP
service entries added to `content/services.ts` (ai-operations-audit, popia-safe-ai,
ai-revenue-agents) each with 6 benefits, 6 process steps, outcomes, and 5
bespoke FAQs. Three `app/services/*/page.tsx` routes created with matching
asset props per `docs/graphics-map.md`.

**P6 — Scrollbar:** 8px thumb with copper-to-border gradient; Firefox fallback
(`scrollbar-width thin`, `scrollbar-color copper/bg`).

**P7 — Final verification:**
- `tsc --noEmit`: clean.
- `npm run lint`: clean (0 warnings, 0 errors).
- `npm run build`: **26 pages prerendered, 0 errors.**
- Bug fixed: `Button` with `asChild` was passing `[null, children]` to Radix
  `Slot`, which calls `React.Children.only` — crashed prerender on every
  service + pricing page. Fix: when `asChild=true`, render only `{children}`;
  when `asChild=false`, wrap spinner + children in a Fragment. Pre-existing bug;
  this pass was the first time `npm run build` caught it.

**Lighthouse:** not yet run — requires `npm run start` against a running server.
Run `npm run build && npm run start`, then Lighthouse against localhost:3000 and
post LCP/CLS/TBT numbers here.

**Follow-up for Cowork / Liam:**
- Three new AI service pages are live in the build: `/services/ai-operations-audit`,
  `/services/popia-safe-ai`, `/services/ai-revenue-agents`. Nav and sitemap may
  need updating to surface them.
- Graphics asset files referenced in `docs/graphics-map.md` must exist in
  `public/graphics/` for the image components to render (currently scaffold paths;
  Cowork indicated assets are in the repo — verify with a `ls public/graphics/`).
- `feat/pre-launch-polish` branch is ready to push and PR against main.

### 2026-04-22 — Cowork — Pre-launch polish pass complete

While Liam was out of office. Scope was Liam's brief: "make any other
changes you see fit... suggest any and all updates to the overall
aesthetic of the site etc. so it also blends better with the new
graphics... be thorough. be intentional." Five pieces of work landed.

**1. Voice compliance sweep.** Ran the voice rules from
`docs/brand-benchmark.md` §6 across `components/`. Found and fixed three
em dashes plus one "not just the work we do" contrastive construction in
`components/shared/ServicePageTemplate.tsx`. All remaining em dashes in
`components/sections/*` are in developer comments, not user copy. No
banned vocabulary hits in user-visible section code. The services.ts
file still has legacy generic-agency copy with many violations, but this
is blocked on Claude Code porting §15 AI service copy and will resolve
in that pass.

**2. Decision 8 compliance.** `components/sections/Stats.tsx` was
orphaned from `app/page.tsx` but still rendered numerical claims if
imported (150+ Projects, 80+ Clients, 98% Retention). Replaced the
content file with qualitative trust signals (Senior Practitioners Only,
POPIA-Compliant by Default, 2KO Business Advisory Group) per decision 8.
Rewrote the component to match. Legacy `stats` export retained as a
deprecated alias so nothing breaks. Claude Code: the component is still
not wired into the homepage (Hero trust-badge row is the canonical
placement). Decide whether to delete the orphan pair or re-wire. Either
is fine.

**3. Tailwind tokens extended.** Added to `tailwind.config.ts` (strictly
additive, no existing tokens removed):
  - Colours: `brand-surface-tint`, `brand-border-warm`, `brand-orange-deep`,
    `brand-copper` + variants, `brand-prism` + variants, `brand-ink`,
    `brand-ink-soft`.
  - Gradients: `gradient-copper`, `gradient-prism`, `gradient-fade-top`,
    `gradient-fade-bottom`, `gradient-fade-both`.
  - Shadows: `glow-copper`, `glow-prism`, `card-lift`, `inset-gleam`.
  - Blur: added `blur-glow` (120px) and `backdrop-blur-xs` (2px).
  Every token is used somewhere in the aesthetic-upgrades spec so nothing
  is dead code. Claude Code: mirror the most-used of these in
  `app/globals.css` :root per `docs/aesthetic-upgrades.md` §0.2.

**4. `docs/brand-guide.md` v1.0 landed.** Full seventeen-section brand
guide, written against the yardstick structure in
`docs/brand-benchmark.md` §5. Passes its own voice rules (no em dashes,
no banned vocabulary in running copy). Sections cover doctrine,
positioning, voice (four adjectives with do/don't pairs), tone shifts,
naming, logo, colour, typography, layout, motion, imagery, editorial,
case studies, commercial copy, empty states, social, governance. The
guide is opinionated and specific, matching the Linear-Method reference
benchmark. Claude Code and future writers: this is the operating manual.
Read it while working, not after.

**5. `docs/aesthetic-upgrades.md` landed.** Fifteen-section build brief
for Claude Code. Each section names the file to edit, the change, and
the reason. Ordered as a commit sequence from §0 housekeeping through
§14 scrollbar refinement. Nothing in the brief requires inventing copy
or figures. If followed in order, the site comes out of this pass with
the new graphics wired in, new tokens used, and a clear route to a
`npm run build` + Lighthouse numbers post.

**Follow-up for Claude Code (consolidated).**

The critical path is:

1. Port audit §15 copy into `content/services.ts`. Extend the `Service`
   type if new fields are needed (§15 uses `stack` which may be new).
   Run `tsc --noEmit`. This is the single biggest quality-lift remaining
   for the site.
2. Work through `docs/aesthetic-upgrades.md` in order. Each section is
   a commit. §0 housekeeping first (tiny but important), then §1 Hero,
   then §11 Button and §12 Badge so §2 onwards can use the new variants.
3. `docs/graphics-map.md` is the asset work order. Referenced from the
   upgrades brief as needed.
4. `app/globals.css` CSS variables: add the missing ones per upgrades
   brief §0.2.
5. After all the above: run `npm run build`, then `npm run lint`, then
   `tsc --noEmit`. Post Lighthouse LCP/CLS/TBT numbers back here.

**Do not do without confirming with Liam.**

- Do not ship the `/guarantee` page in primary nav or homepage until
  legal-grade terms are confirmed.
- Do not ship `/team` until photography and bios land.
- Do not invent case studies, stats, or client logos.
- Do not delete `content/pricing.ts`.
- Do not add new brand colours or gradients beyond the three named in
  `docs/brand-guide.md` §7.

### 2026-04-22 — Cowork — Asset pipeline landed in `/public/graphics/`

- Extracted all nine Envato packs Liam dropped in `C:\Users\User\Pictures\Impart`
  and curated 16 final assets into `/public/graphics/`, split across
  `hero/`, `backgrounds/`, `shapes/`, `accents/`, `patterns/`.
- Every asset has been resized and optimised (web JPG for backgrounds,
  PNG with alpha preserved for shapes and accents). Total added weight
  ~7.1 MB across 16 files. Per-file sizes documented in
  `docs/graphics-map.md`.
- Placement decisions locked per-asset in `docs/graphics-map.md`. Shape
  language, colour temperature, and section theme line up section by
  section: copper chrome → hero, horizon waves (orange/copper) →
  Process/Support, dispersion spectrum → WhyImpart, glass prism →
  Testimonials, pyramid/spiral/prism → three ValuePropositions cards,
  hex mesh → POPIA page, etc.
- Skipped one pack (`liquid-glass-abstract-backgrounds`) because its
  red/blue/pink stripe palette fights brand-orange. Did not invent
  placements for anything that didn't fit.
- Follow-up for Claude Code: `docs/graphics-map.md` is the work order.
  Checklist at the bottom walks through the commits in order — start with
  the hero background (`hero-liquid-chrome-copper.jpg`) and verify
  contrast against the existing H1 before moving on. Do not swap assets
  across sections without flagging; the mapping is deliberate. If
  `content/values.ts` is the file backing ValuePropositions cards,
  extend the type with an optional `accent?: string` field before paste
  work so asset paths stay data-driven. After all placements land,
  `npm run build` and post Lighthouse LCP/CLS numbers back in this log.

### 2026-04-22 — Cowork — Hero H1 "A.I." clarity revision

- Liam's feedback after seeing Option F live: the H1 needs "A.I." in it so
  visitors confirm they've landed on an AI-focused site. Relying on the
  pre-headline badge alone isn't enough at-a-glance reassurance.
- New H1 (locked, supersedes the sentence-case Option F wording):
  *We Build A.I. Systems that Pay for Themselves*
- Title case, punctuated "A.I." (not "AI"), no trailing full stop. Gradient
  treatment lives on "A.I. Systems" so the clarity anchor also carries the
  brand-orange hit.
- Updated in this pass: `components/sections/Hero.tsx` H1 markup,
  `content/site.ts` tagline and `seo.defaultTitle`, CLAUDE.md decision 1.
- Follow-up for Claude Code: if you're about to run a build, note that
  the gradient span now wraps "A.I. Systems" rather than the old
  "pay for themselves." phrase. Any screenshot reference docs or social
  share copy that quoted the old H1 verbatim needs a sweep.

### 2026-04-22 — Cowork — Hero H1 swapped, value-prop strategy landed

- New file `docs/value-propositions.md`: three lead propositions for the
  site (VP1 AI Operations Audit, VP2 POPIA-Safe AI, VP3 AI Revenue Agents)
  based on local + international research. Ticket ranges, buyer problem,
  proof architecture, path to first revenue all specified. Liam: "VP3 is
  good, let's work with the idea of replacing and saving."
- Hero H1 decision flipped from Option B to Option F. New copy:
  - Pre-headline: *AI for the work that drains your margin*
  - H1: *We build the systems that pay for themselves.*
  - Sub: *AI agents that take over your highest-volume functions, running
    continuously at a lower cost than the teams they augment. Built for
    regulated industries, covered by our ninety-day guarantee, priced so
    the savings fund the build.*
  - Primary CTA: *Request a Proposal*
  - Secondary CTA: *How We Engage*
- CLAUDE.md decision 1 updated in place to match. The 2026-04-21 Option B
  is superseded. Any Claude Code draft that still references the old H1
  should be re-pointed before commit.
- New file `docs/brand-benchmark.md`: yardstick document for the brand
  guide. Seventeen-section structure prescribed, voice rules specified
  (no em dashes, no "not X, but Y", refused vocabulary list).
- Follow-up for Claude Code: Priority 2 homepage surgery uses the new
  hero copy verbatim. The three-tile row below the hero should map to the
  three VPs from `docs/value-propositions.md`: AI Operations Audit /
  POPIA-Safe AI / AI Revenue Agents. Service-page rewrites (Priority 4)
  need to be re-pointed at these three propositions rather than the four
  in audit §11; Cowork will rewrite §11 copy against the new structure
  before Claude Code paste-work starts, so do not begin Priority 4 copy
  work until that rewrite lands.

### 2026-04-22 — Claude Code — Priority 1 scaffolding complete

- Added `content/caseStudies.ts` — `CaseStudy` type + empty array. Do not
  author content; Liam supplies.
- Added `content/team.ts` — `TeamMember` type + empty array + `teamEnabled`
  flag (currently `false`). Flip to `true` when real photos + bios are ready.
- Added `content/forms.ts` — all form variant definitions per audit §6.
  `aiOpportunityOptions`, `budgetRangeOptions`, and per-service `FormVariant`
  configs. Edit here, not in form components.
- Created `app/work/page.tsx` — case study index with empty-state CTA.
- Created `app/work/[slug]/page.tsx` — case study detail with outcomes sidebar
  and stack tags.
- Created `app/team/page.tsx` — gated by `teamEnabled` flag; shows "coming
  soon" page until flag is enabled. NOT linked from nav or homepage (decision 4).
- Created `app/guarantee/page.tsx` — scaffold only, `noIndex: true`. Liam to
  populate legal-grade terms; do NOT link from nav or homepage until terms are
  confirmed and noIndex removed.
- Added `components/sections/CaseStudies.tsx` — shows "Work coming soon"
  empty state; populates with up to 3 cards when `caseStudies` array is filled.
  Wired into `app/page.tsx` between Process and Stats.
- Added `components/sections/Team.tsx` — gated by `teamEnabled`; renders
  nothing until flag is enabled. NOT wired into `app/page.tsx` (decision 4).
- `tsc --noEmit` and `npm run lint` both clean.
- Follow-up for Cowork: Priority 1 done. Unblocked on Priority 2 (homepage
  surgery) — Hero H1 to Option B, WhyImpart refresh, Process rewrite, form
  update, homepage section reorder. Also need §15 service copy to land in
  `content/services.ts` for Priority 4. Guarantee page terms when ready.

### 2026-04-21 — Cowork — Iteration 2 copy landed

- Appended §15 to `docs/audit.md` covering:
  - Full drop-in copy for services 15.1.1–15.1.4 (Custom AI Apps, AI
    Strategy, Data Foundations, AI-Accelerated Growth) — matching the
    shape of service 11.1.
  - `/how-we-engage` page spec (4 engagement shapes + guarantee callout +
    FAQ accordion). Replaces public `/pricing`.
  - `/guarantee` page spec — draft copy for the 90-day risk-reversal
    page. Lawyer review required before public linking.
  - Homepage Problem/Stakes section copy — new position-3 section.
- Claude Code: you're fully unblocked on Priority 4 (service-page
  rewrites) now. If the `Service` type needs a new field for any of
  these (e.g. `stack`), extend the type before pasting; don't invent
  copy to fit a stale shape. For `/guarantee`: build the page but do NOT
  link it from primary nav or the homepage until Liam confirms legal
  review. The `/how-we-engage` callout link is the only entry point.

### 2026-04-21 — Cowork — AI-first repositioning audit

- Delivered `docs/audit.md`: full repositioning brief covering strategic
  pivot, 3 H1 options, section-by-section copy overhaul, new form spec,
  pricing recommendation (hide it), team-profiles recommendation (yes),
  imagery checklist, and a prioritised Claude Code implementation brief.
- Blocked on Liam for: H1 pick, stats numbers, pricing decision, 2KO
  confirmation, case-study content, team headcount, Envato asset pull.
- Follow-up for Claude Code: start Priority 1 scaffolding work from §12
  of the audit immediately — it does not depend on Liam's decisions.
  Do not touch Hero H1, do not delete `content/pricing.ts`, do not ship
  placeholder case studies or team profiles. Commit after each Priority 1
  step so Cowork can pick up cleanly.

### 2026-04-21 — Cowork — Logo strip refactor + shared scaffolding

- Refactored `components/sections/LogoStrip.tsx` from a text-based industries
  strip to an image-based client-logo strip (John Deere, Chevron, Aspen,
  Alstom, ACSA, Rolls-Royce, Pernod Ricard, Engen).
- Added `content/logos.ts` as the canonical list of client brands — edit
  there, not in the component.
- Added `public/logos/README.md` documenting expected filenames, formats,
  and where to source the logos officially. Logo image files are NOT yet
  in the repo — Liam to drop them into `public/logos/` from each brand's
  media kit.
- Follow-up for Claude Code: (a) once logo files land, run `npm run dev`
  and visually check sizing — likely some will need `heightPx` overrides
  in `content/logos.ts`; (b) consider adding `public/logos/*.{svg,png}`
  to `.gitignore` if files are not cleared for git redistribution; (c)
  run `tsc --noEmit` to confirm the new `content/logos.ts` type import
  resolves cleanly.

### 2026-04-21 — Cowork — CLAUDE.md created

- Set up this shared document so both tools have the same project context.
- No code changes.
- Follow-up for Claude Code: when you next run, read this file, confirm the
  conventions above still hold, and append any corrections.
