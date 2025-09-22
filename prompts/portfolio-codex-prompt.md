# ROLE & OBJECTIVE

You are an expert **web designer + PM portfolio specialist**. Your job is to **plan first** and then generate a clean, beginner‑friendly, static portfolio website for a Senior Product Manager targeting **B2B InsurTech, PropTech, and Workflow Optimization** roles.

---

## INPUTS (FACTS TO USE)

**Candidate:** Saudamini Sehgal
**Email:** [saudamini.sehgal@gmail.com](mailto:saudamini.sehgal@gmail.com)
**LinkedIn:** linkedin.com/in/saudaminisehgal

**Goals**

* Highlight 6+ years of PM experience in B2B SaaS, especially PropTech and InsurTech.
* Showcase strategy + execution across large-scale enterprise platforms.
* Reinforce value through **metrics, storytelling, and outcomes**.
* Address perceived gap (no Tier 1 brand) by emphasizing results and scale.

**Key Stats to Feature**

* **\$3B+** transaction volume handled
* **\$200M+** revenue impact
* **22M+** users reached
* **99%** reduction in transaction time

**Case Studies**

1. **ClarityFirst Closing Platform @ First American**

   * Problem: Manual, error‑prone commercial real estate closings.
   * Actions: Led cross‑functional teams; modernized enterprise workflows.
   * Results: \$3B+ volume; \$200M revenue impact; 4.3/5 internal satisfaction; 77% fewer clicks; 67% fewer screens.

2. **OneHome.com @ CoreLogic**

   * Problem: Low engagement in real estate SaaS tool.
   * Actions: User research; MVP in 6 months; Fit Score algorithm; trust‑based UX.
   * Results: Activation **6% → 35%**; **52%** re‑engagement; scaled to **22M** users; **\$7M** revenue from mortgage origination.

3. *(Optional, short card)* **ClaimsConnect** — brief summary to demonstrate breadth.

**About Page**

* Narrative blending consulting, enterprise, and startup experience.
* Timeline of career progression.
* Industries: Real Estate, Insurance, Fintech.
* Aspirations: Mission‑aligned tech in regulated industries.
* Personal: scuba diving with sharks; global travel; stamp collection.

**Contact Page**

* Headshot + tagline: “Let’s build something that scales.”
* Contact form
* Email + LinkedIn
* Resume download
* Optional Calendly embed

**Logos to display**: First American, CoreLogic *(use placeholder SVGs; do **not** embed trademarked images)*.

---

## REQUIREMENTS & CONSTRAINTS

* **Tech:** Plain **HTML + CSS + vanilla JS**. Use Tailwind via CDN for speed. No heavy frameworks.
* **Style:** Minimalist, enterprise‑friendly, data‑driven. Colors: **Deep Blue / Slate Gray / White**. Fonts: Inter/Lato/Open Sans (via Google Fonts).
* **Accessibility:** High contrast; semantic HTML; visible focus states; keyboard navigable; alt text on images; skip‑to‑content link.
* **Performance:** Mobile‑first; responsive; defer non‑critical JS; optimize images; Lighthouse‑friendly.
* **SEO:** Meta title/description, Open Graph tags, canonical link, sitemap.xml, robots.txt.
* **Analytics:** Add a lightweight placeholder hook for analytics (commented).
* **Contact Form:** Use **Formspree** (configurable endpoint) with client‑side validation; include `mailto:` fallback link.
* **No fake claims:** Use provided numbers verbatim; mark any assumptions in comments.

---

## SITE MAP & DELIVERABLES

Create these files exactly (each as its own code block labeled with filename):

* `/index.html` — Landing page with **hero, key stats, expertise tiles, company logos, featured case studies, CTA**.
* `/case-studies/clarityfirst.html` — Detailed narrative with **Problem → Actions → Results**, metrics, images/placeholders, next/prev links.
* `/case-studies/onehome.html` — Same structure.
* `/case-studies/claimsconnect.html` — Shorter, card‑style variant.
* `/about.html` — Story, skills, timeline UI.
* `/contact.html` — Headshot, form, social links, resume download placeholder.
* `/assets/css/styles.css` — Custom CSS (on top of Tailwind).
* `/assets/js/main.js` — Small interactions (mobile nav, smooth scroll, form handling).
* `/assets/img/` — Placeholder SVGs for headshot, logos, and diagrams.
* `/assets/resume/Resume.pdf` — Placeholder reference path.
* `/sitemap.xml`, `/robots.txt`
* `/README.md` — Setup instructions, editing guide, deployment to GitHub Pages.

**Shared components** (via HTML partial pattern or copy‑paste for simplicity): header/nav, footer, card component for case studies, stat tile, timeline item.

---

## CONTENT & UX DETAILS

* **Hero (index):**
  Headline: “Building B2B Products That Deliver **\$200M+** Revenue & Serve **Millions**”
  Subhead: “Senior Product Manager with 6+ years in Real Estate, Insurance, and Workflow SaaS.”
  CTAs: *View Case Studies* (anchor to section) and *Download Resume* (link to `/assets/resume/Resume.pdf`).

* **Key Stats:** Display the 4 metrics above as accessible, responsive tiles; include brief footnotes if needed.

* **Expertise Tiles:**

  * Product Strategy & MVPs
  * B2B SaaS Workflow Optimization
  * Agile + UX + AI‑Enhanced Products
  * Regulated Industries (Real Estate, Insurance)

* **Case Study Template:**

  * Context banner (role, timeframe, company).
  * Problem → Insights → Bets → Execution → Results → Learnings → Next Steps.
  * Pull‑quotes and callouts for metrics.
  * Navigation: prev/next, back to all case studies.

* **About:** Short narrative + timeline (milestones with years, role, outcomes).

* **Contact:** Validating form (name, email, message). Include LinkedIn and direct email link.

---

## PLAN BEFORE CODE (what you must output first)

1. **Architecture plan:** file tree, routing, shared components, color/typography scale.
2. **Wireframe notes:** brief outline of each page section.
3. **Accessibility checklist** to be honored in code.

After showing the plan, generate the code.

---

## OUTPUT FORMAT (IMPORTANT)

* First, output the **Plan** sections in markdown.
* Then output the full site as **separate code blocks per file**, each with the **exact filepath** as the code block title, e.g.:

```html
<!-- /index.html -->
...code...
```

```css
/* /assets/css/styles.css */
...code...
```

```txt
# /robots.txt
...code...
```

* Keep code **well‑commented** and easy to edit for a beginner.
* Include TODO comments where the user should replace placeholders (e.g., Formspree endpoint, resume file).
* Ensure all internal links work and 404s are avoided.

---

## ACCEPTANCE CRITERIA

* Renders correctly on mobile and desktop.
* Lighthouse‑friendly (performance, a11y, SEO).
* All CTAs functional; internal navigation consistent.
* Case studies feature **specific, metric‑driven outcomes** as provided.
* No external build steps required—just open `index.html` locally or host via GitHub Pages.

---

## NICE‑TO‑HAVE (if time allows)

* Simple dark mode via `prefers-color-scheme`.
* Tiny JS module for animated number count‑up (reduced‑motion respected).
* Print‑friendly stylesheet for case studies.


