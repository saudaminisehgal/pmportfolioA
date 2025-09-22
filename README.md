# My Portfolio Website
This is my first edit!
# Saudamini Sehgal · Product Manager Portfolio

A lightweight, static portfolio built with semantic HTML, Tailwind via CDN, and a sprinkle of vanilla JavaScript. Designed for quick deployment on GitHub Pages or any static host.

## ✨ Highlights
- Responsive, accessibility-first layout with keyboard-friendly navigation and skip links.
- Case studies optimized for storytelling: Problem → Insights → Bets → Execution → Results → Learnings → Next steps.
- Contact form powered by Formspree (bring-your-own endpoint) with client-side validation and fallback messaging.
- SEO-ready with descriptive meta tags, Open Graph data, sitemap, and robots directives.
- Placeholder assets (SVG logos, headshot, diagrams) for easy swap without licensing concerns.

## 📁 Project structure
```
/
├── index.html                     # Landing page with hero, stats, expertise, case studies
├── about.html                     # Narrative, skills, and timeline
├── contact.html                   # Headshot, contact form, social links, resume download
├── case-studies/
│   ├── clarityfirst.html          # Deep-dive case study template
│   ├── onehome.html               # Deep-dive case study template
│   └── claimsconnect.html         # Compact case study variant
├── assets/
│   ├── css/styles.css             # Custom styles layered on Tailwind
│   ├── js/main.js                 # Mobile nav, smooth scroll, count-up, form helper
│   ├── img/                       # Placeholder SVGs for logos & diagrams
│   └── resume/Resume.pdf          # Placeholder resume (replace with real file)
├── sitemap.xml                    # Search engine index hints
├── robots.txt                     # Basic crawling policy
└── README.md                      # You are here
```

## 🛠️ Editing guide
1. **Clone or download** the repository.
2. Open any HTML file in your preferred editor; no build tools are required.
3. Tailwind utilities load via CDN—add custom styles in `assets/css/styles.css` to keep overrides consistent.
4. Update the placeholder copy, metrics, and SVGs as needed. The SVGs live in `assets/img/` for simple swaps.
5. Replace `assets/resume/Resume.pdf` with the latest resume file (keep the same filename for working links).
6. Tailor the contact form by updating the `action` attribute in `contact.html` with your Formspree endpoint. The script in `assets/js/main.js` displays a reminder until the placeholder is replaced.
7. Hook up analytics by uncommenting the placeholder comment in each `<head>` section and pasting your snippet (e.g., Plausible, Fathom, or Google Analytics).

## 🧪 Local preview
Because this is a static site, you can:
- Open `index.html` directly in a browser, or
- Run a lightweight server (optional) for nicer URLs:
  ```bash
  python3 -m http.server 8080
  ```
  Then visit `http://localhost:8080/`.

## 🌐 Deploying to GitHub Pages
1. Commit your changes and push to the `main` branch of a GitHub repo.
2. In **Settings → Pages**, choose `Deploy from a branch` and select `main` with the `/ (root)` folder.
3. Once published, update the `canonical` URLs in each HTML file plus `sitemap.xml` and `robots.txt` to match your custom domain or GitHub Pages URL.

## ✅ Accessibility & performance tips
- Keep contrast high when adjusting colors; Tailwind’s `bg-slate-*` and `text-slate-*` tokens already meet AA contrast.
- Ensure images have descriptive `alt` text—swap in real headshots or logos as needed.
- If you add rich media, respect `prefers-reduced-motion` as shown in `assets/css/styles.css` and `assets/js/main.js`.
- Run [Lighthouse](https://web.dev/measure/) periodically to confirm performance, accessibility, and SEO scores stay strong.

## 🤝 Contributing
This project is intentionally simple so recruiters and hiring managers can navigate quickly. Keep edits focused on clarity, metrics, and outcomes. PRs are welcome if they enhance storytelling or accessibility.

## 📬 Support
Questions or feedback? Reach out at [saudamini.sehgal@gmail.com](mailto:saudamini.sehgal@gmail.com) or connect on [LinkedIn](https://www.linkedin.com/in/saudaminisehgal).
