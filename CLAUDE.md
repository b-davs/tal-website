# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start dev server (http://localhost:3000, uses Turbopack)
- `npm run build` - Production build
- `npm start` - Serve production build
- `npm run lint` - Run ESLint (no --fix, report only)

No test framework is configured yet.

## Architecture

Next.js 16 App Router project with `src/` directory structure. All routes live under `src/app/`.

- **React 19** with TypeScript (strict mode)
- **Tailwind CSS v4** via `@tailwindcss/postcss` — uses `@import "tailwindcss"` and `@theme inline` in `globals.css`, not a `tailwind.config` file
- **ESLint 9** flat config with `next/core-web-vitals` and `next/typescript` rulesets
- **Path alias**: `@/*` maps to `src/*`
- **Fonts**: Geist Sans and Geist Mono loaded via `next/font/google` in root layout, exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`

---

## Business Context

- **Company**: The Apparel Lab (TAL)
- **Type**: B2B custom apparel decoration — screen printing, embroidery, DTF, DTG, promotional items
- **Target audience**: US B2B buyers (ops managers, HR, marketing) ordering uniforms, event gear, onboarding kits, trade show swag
- **Logo**: `logo.png` in project root — bold red wordmark
- **Strategy doc**: `deep-research-report.md` contains full SEO, IA, conversion, and keyword strategy

---

## Build Plan

We are building this site in **slices** — ship a working site fast, then layer on complexity. Do NOT try to build everything from the deep-research-report at once.

### Design System & Brand

- **Primary red**: `#ED1C24` (from logo)
- **Dark**: `#171717` (near-black for text/headers)
- **Light backgrounds**: `#FAFAFA` / `#F5F5F5` (warm grays)
- **Accent**: TBD (will derive as needed — likely a dark charcoal or slate)
- **Typography**: Geist Sans (already loaded). Bold weights for headings, regular for body.
- **Tone**: Bold, confident, practical. No hype. No fluff. Speak like experts.
- **No dark mode for v1** — B2B audience, keep it simple. Remove `prefers-color-scheme` media query.

### Component Conventions

- Components live in `src/components/` — shared UI components
- Page-specific sections can be inline or in `src/components/sections/` if they get large
- Use semantic HTML (nav, main, section, article, footer)
- Images in `public/` — use `next/image` for all images
- Logo file: `public/logo.png` (move from project root)

### URL Structure (from deep-research-report.md)

```
/                           → Home
/services/                  → Services hub
/services/screen-printing/  → Screen Printing
/services/embroidery/       → Embroidery
/services/dtf-printing/     → DTF Printing
/services/dtg-printing/     → DTG Printing
/services/promotional-items/→ Promotional Items
/about/                     → About + Capabilities
/contact/                   → Contact + Quote Request
/portfolio/                 → Portfolio + Case Studies (slice 2)
/pricing/                   → Pricing page (slice 2)
/industries/                → Industries hub (slice 3)
/resources/                 → Resources hub (slice 3)
/faqs/                      → FAQ center (slice 2)
```

### Slice 1 — Foundation (DONE)

**Goal**: Get a real, professional site live with core pages and navigation.

Status key: `[ ]` = not started, `[~]` = in progress, `[x]` = done

- [x] **Project setup**: Move logo to `public/`, set up brand colors in `globals.css`, remove dark mode, update metadata in layout
- [x] **Global layout**: Header (logo + nav + CTA button), Footer (links, contact info, copyright)
- [x] **Home page**: Hero section, services overview cards, "how it works" steps, trust signals, CTA
- [x] **Services hub** (`/services/`): Overview page with cards linking to each service
- [x] **Service pages** (5 pages): Screen printing, Embroidery, DTF, DTG, Promotional items — each with: hero, best-for/not-ideal, process, product recommendations, FAQs, CTA
- [x] **About page** (`/about/`): Company story, capabilities, equipment, team (placeholder)
- [x] **Contact page** (`/contact/`): Quote request form with fields: name, email, phone, company, service needed, quantity, timeline, message, logo upload
- [x] **SEO baseline**: Proper title tags, meta descriptions, Open Graph tags per page, JSON-LD for Organization + BreadcrumbList

### Slice 2 — Conversion & Trust (DONE)

- [x] Pricing page with transparent price-driver explanations
- [x] Portfolio/gallery page with filterable project showcase
- [x] FAQ center (categorized, expandable)
- [x] 1-2 case study pages
- [x] JSON-LD for Service, FAQPage schemas
- [x] Sample kit request flow

### Slice 3 — Growth (DONE)

- [x] Industry vertical pages (6: construction, healthcare, hospitality, education, nonprofits, corporate)
- [x] Resources/guides hub (4 guides: artwork, turnaround, logo placement, care & durability)
- [x] Method comparison tool (interactive, responsive table/cards)
- [x] Blog infrastructure (data-driven, listing + detail pages under /resources/blog/)
- [x] Analytics integration (GA4 env-var gated, lead tracking on forms)
- [x] Header restructured (Resources dropdown with sub-items)
- [x] Footer updated (Resources link column)
- [x] Home page updated (Industries We Serve section)
- [x] JSON-LD for Article, Blog schemas

### NOT in v1 (explicitly deferred)

These are mentioned in deep-research-report.md but are **phase 2+ features**. Do not build these yet:
- Interactive pricing estimator/calculator
- Company store / group ordering workflow
- File checker / "printability score" tool
- Onboarding kit builder
- A/B testing infrastructure
- CRM integration
- Lead magnets with PDF generation

### Build Guardrails

- **Ship fast over ship perfect** — placeholder copy is fine, get the structure right
- **No scaled content abuse** — each page must have distinct, useful content (not thin/duplicate)
- **Every page reduces buyer uncertainty** — even with placeholder copy, structure sections for: pricing drivers, minimums, turnaround, artwork requirements, proofing steps
- **SEO by default** — semantic HTML, proper heading hierarchy, internal linking between related pages, breadcrumbs
- **Performance first** — optimize images, minimal JS, target LCP < 2.5s
- **Mobile-first** — design for mobile, enhance for desktop
