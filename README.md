# Impart Agency Website

Production-ready Next.js website for Impart Agency — the results-driven digital agency in South Africa.

---

## Tech Stack

| Tool | Version |
|------|---------|
| Next.js | 15.2.4 (App Router) |
| React | 19 |
| TypeScript | 5 |
| Tailwind CSS | 3.4 |
| Framer Motion | 11 |
| Radix UI | Various |
| Lucide React | 0.474 |

---

## Quick Start

### Prerequisites
- Node.js 18.17+
- npm / yarn / pnpm

### Install
```bash
npm install
```

### Environment Variables
```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in the required values (see `.env.example` for all variables).

### Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build
```bash
npm run build
```

### Production Start
```bash
npm run start
```

---

## Project Structure

```
├── app/                         # Next.js App Router pages
│   ├── layout.tsx               # Root layout (fonts, Header, Footer, schema)
│   ├── page.tsx                 # Homepage
│   ├── get-to-know-us/          # About page
│   ├── pricing/                 # Pricing page
│   ├── contact/                 # Contact page
│   ├── services/                # Service pages (9 pages)
│   ├── privacy-policy/
│   ├── terms-and-conditions/
│   ├── sitemap.ts               # Auto-generated sitemap
│   └── robots.ts                # robots.txt
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Sticky header with dropdown nav
│   │   └── Footer.tsx           # Full footer with links and CTAs
│   ├── sections/                # Homepage sections
│   │   ├── Hero.tsx
│   │   ├── LogoStrip.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── Process.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   ├── WhyImpart.tsx
│   │   ├── Support.tsx
│   │   └── HomepageContact.tsx
│   ├── shared/
│   │   ├── ServicePageTemplate.tsx  # Reusable service page layout
│   │   ├── PricingCard.tsx          # Pricing block component
│   │   └── LocalBusinessSchema.tsx  # JSON-LD schema
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       ├── Card.tsx
│       ├── Accordion.tsx
│       └── AnimatedSection.tsx
│
├── content/                     # ALL editable content lives here
│   ├── site.ts                  # Site-wide settings, contact details
│   ├── navigation.ts            # Nav menu structure
│   ├── services.ts              # All 9 service definitions
│   ├── pricing.ts               # All pricing tiers
│   ├── faqs.ts                  # FAQ content
│   ├── testimonials.ts          # Client testimonials
│   ├── stats.ts                 # Agency stats
│   └── contact.ts               # Contact details and form options
│
└── lib/
    ├── utils.ts                 # cn(), formatWhatsAppUrl(), etc.
    └── metadata.ts              # Reusable metadata builder
```

---

## Where to Edit Content

Everything the site owner needs to change lives in `/content/`. **No digging through component files required.**

| What to change | File |
|---|---|
| Company name, email, phone, WhatsApp | `content/site.ts` |
| Navigation menu items | `content/navigation.ts` |
| Service titles, descriptions, benefits, process | `content/services.ts` |
| Pricing values, includes, FAQs | `content/pricing.ts` |
| Homepage testimonials | `content/testimonials.ts` |
| Stats numbers | `content/stats.ts` |
| FAQ questions & answers | `content/faqs.ts` |
| Contact details, office hours | `content/contact.ts` |

### Environment-driven settings (`.env.local`)
| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | Contact form POST endpoint (Formspree, custom API, etc.) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp business number (no + or spaces, e.g. `27820000000`) |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps embed (contact page) |
| `NEXT_PUBLIC_FACEBOOK_URL` | Facebook profile URL |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile URL |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile URL |
| `NEXT_PUBLIC_TWITTER_URL` | Twitter/X profile URL |

---

## Pages

| URL | Description |
|---|---|
| `/` | Homepage — hero, services, process, stats, testimonials, contact |
| `/get-to-know-us` | About page — story, capabilities, values, 2KO connection |
| `/pricing` | Full pricing page — all 8 service pricing tiers |
| `/contact` | Contact page — full form, WhatsApp CTA, contact details |
| `/services/wordpress-websites` | WordPress service page |
| `/services/ecommerce-websites` | Ecommerce service page |
| `/services/laravel-websites` | Laravel service page |
| `/services/app-development` | App development service page |
| `/services/ai-services` | AI services page |
| `/services/seo` | SEO service page |
| `/services/ppc` | PPC/Google Ads service page |
| `/services/article-writing` | Content writing service page |
| `/services/branding-graphic-design` | Branding service page |
| `/privacy-policy` | Privacy policy (POPIA compliant) |
| `/terms-and-conditions` | Terms and conditions |

### Redirects configured
- `/about` → `/get-to-know-us` (301)
- `/about-us` → `/get-to-know-us` (301)

---

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other platforms
Any platform supporting Next.js 15 output (Netlify, Railway, self-hosted with Node.js).

For static export (no server-side features): add `output: 'export'` to `next.config.ts`. Note: sitemap and robots dynamic generation requires server mode.

---

## Contact Form

The contact form POSTs JSON to `NEXT_PUBLIC_FORM_ENDPOINT`. Compatible with:
- **Formspree** — create a form at formspree.io, use the endpoint URL
- **Netlify Forms** — add `netlify` attribute and configure in Netlify dashboard
- **Custom API route** — add `app/api/contact/route.ts` and set endpoint to `/api/contact`

Without an endpoint configured, the form simulates success in development.

---

## Recovery Notes

### Source material status
- **Local files:** None found — workspace was empty at build time
- **Live site:** Returned 403 on all routes (IP/bot blocking) — not crawlable
- **Archive.org:** Blocked for this domain
- **Search index:** Site not indexed (no `site:` results)

### Reconstruction approach
The entire site was reconstructed from:
1. The detailed project brief (service list, page map, process steps, positioning)
2. South African digital agency market knowledge
3. Best practices for conversion-focused agency websites

### Assets still needed (placeholders in use)
- [ ] Agency logo (SVG) — currently text-based wordmark in Header/Footer
- [ ] OG image (`/public/og-default.png`) — required for social sharing previews
- [ ] Favicon (`/public/favicon.ico`, `/public/apple-touch-icon.png`)
- [ ] Client logos / trust logos (if desired for logo strip)
- [ ] Team photos (if About page expansion desired)
- [ ] Real testimonial photos or company logos
- [ ] Office address details (`content/contact.ts` → `address`)
- [ ] WhatsApp business number (`NEXT_PUBLIC_WHATSAPP_NUMBER`)
- [ ] Social media profile URLs (`.env.local`)
- [ ] Google Maps embed URL (`content/contact.ts` → `googleMapsEmbed`)

### Copy notes
- All copy written fresh from brief — **review and personalise before launch**
- Stats (150+ projects, 80+ clients, 6+ years, 98% retention) are plausible estimates — **replace with actual figures**
- Testimonials are illustrative — **replace with real client quotes and attribution**
- Pricing ranges are based on South African market rates for 2025 — **review against your actual pricing**
- 2KO Business Advisory Group affiliation included on About page — **confirm this is still accurate**
- All content is normalised to South Africa (ZAR, South African context) — no Houston/Texas copy

### URLs preserved
All service slugs match the specified URL structure from the brief. The `/about` redirect is in place for backward compatibility.

---

## Assumptions Made During Reconstruction

1. Primary market is South Africa; all pricing in ZAR
2. Johannesburg listed as base city — update if different
3. Framer Motion animations use `once: true` (animate only on first scroll-into-view)
4. Dark theme as primary (no dark/light toggle — dark-only as per brief's premium direction)
5. WhatsApp is a primary communication channel (standard for SA agencies)
6. No blog/news section in initial build — can be added as Phase 2
7. No authentication or client portal in initial build
8. Contact form is client-side with configurable endpoint — no server-side API route included
