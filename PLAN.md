# LeaderABH — static site build plan

Source: Figma `mL8F4yFdXLiMlU1pDkRUi6` (capture of leaderabh.uchet.kz, 1920x5267, desktop only).
Stack: **Vue 3 + Vite**, built to static files (`vite build` → plain HTML/CSS/JS, deployed as a static site — no Node server required at runtime).
Mandate: redesign freely — Figma is the brand and content reference, not a pixel spec.

## 1. File layout

```
index.html                 Vite entry
src/main.js                app bootstrap
src/App.vue                page shell (header/footer + section list)
src/components/
  TheHeader.vue
  HeroSection.vue
  ServicesSection.vue      «под ключ»
  BenefitsSection.vue      blue panel
  CertificatesSection.vue  + Lightbox.vue
  TeamStatsSection.vue
  ContractSection.vue
  ContactFormSection.vue
  TheFooter.vue
src/composables/
  useLeadSubmit.js          WhatsApp/Telegram switch (see §4)
  useCountUp.js             stats animation
src/assets/                 img, svg, fonts (processed by Vite)
src/styles/tokens.css        design tokens as CSS custom properties
public/                     favicon, robots.txt, sitemap.xml
figma-export/                reference only, not deployed
```

Vue Router not needed — single page, in-page anchors only.

## 2. Design tokens (extracted exactly from Figma)

```
--blue      #0140EB   primary
--ink       #051923   text
--white     #FFFFFF
--blue-300  #8AAAFF   accents on blue
--line      #6386E9 @10%   card borders
--tint      #051923 @3%    light section wash
--radius    16px
--container 1560px    (180px side margins at 1920)
```
Type: **Inter** 300/400/500, self-hosted woff2 (no Google Fonts request).
Scale from Figma: 136 / 52 / 36 / 26 / 22 / 20 / 18 / 17 / 16.
Rebuilt fluid with `clamp()` so the 136px hero survives a 375px phone.
Spacing: 8px base scale. Breakpoints: 1600 / 1200 / 900 / 600.

## 3. Sections

| # | Section | Redesign notes |
|---|---|---|
| 0 | Header | Sticky, translucent on scroll. Nav gains anchors to all sections (Figma had only 2). Burger below 900px. Phone becomes a styled CTA. |
| 1 | Hero | Fluid headline. Figma left a large empty gap under the H1 — fill with the subhead, dual CTA (diagnostics + call), and a trust strip (20+ лет · 50 млрд · 40 проверок). |
| 2 | «Под ключ» | 8-item list becomes a 2-col checklist with check icons. 3 service cards get hover lift + real links. |
| 3 | «Экономите время» | Blue panel kept. Add an icon per card; equalise card heights with grid. |
| 4 | Сертификаты | Figma showed zoom icons but no behaviour — build a real lightbox (click to enlarge, Esc/backdrop to close, arrow keys, focus trap). |
| 5 | Команда / stats | Count-up animation on scroll, respecting `prefers-reduced-motion`. Partner logo kept as SVG. |
| 6 | Договор | Kept. `#051923 @3%` wash reproduced. Illustration inlined as SVG so it takes brand colour. |
| 7 | Форма | Real validation, `+7 (___) ___-__-__` phone mask, inline errors in Russian, success state. |
| — | Footer | Fix «конфеденциальности» → «конфиденциальности». © year auto-updates. Privacy link points to a real page. |

## 4. Lead capture

Single config block at the top of `js/main.js`:

```js
const LEAD_CONFIG = { mode: 'whatsapp', phone: '77079020243', proxyUrl: null };
```

- `whatsapp` (default): builds a prefilled message, opens `wa.me`. Fully static, no secrets.
- `telegram`: POSTs to `proxyUrl` — a Cloudflare Worker holding the bot token server-side.
  **A bot token must never sit in client JS; it is publicly readable.**

Switching modes is a one-line edit.

## 5. Cross-cutting

- **A11y**: one `<h1>`, ordered headings, alt text on every image, visible focus rings,
  `aria-expanded` on the burger, labelled form fields, AA contrast checked.
- **SEO**: Russian `<title>`/description, Open Graph + Twitter cards, `lang="ru"`,
  JSON-LD `AccountingService` with the Almaty address, phone and hours. sitemap.xml + robots.txt.
- **Performance**: the three certificate PNGs are 3.5 MB total — convert to WebP with
  ~400px thumbnails (full-res loaded only by the lightbox), lazy-load below the fold.
  Target: < 500 KB initial load, LCP < 1.5s. No external requests at all.
- **Browsers**: modern evergreen + iOS Safari 15+. Graceful degradation without JS
  (form falls back to a `mailto:`/`tel:` link, certs to plain images).

## 6. Build order

1. `npm create vite@latest` (vue template), tokens, fonts, asset optimisation
2. Header + hero components
3. Section components 2–6
4. Form composable + validation + WhatsApp submit
5. Footer + privacy route/page
6. Lightbox component, scroll effects, burger
7. Responsive pass at 1600/1200/900/600/375
8. A11y + SEO + Lighthouse pass
9. `vite build` → verify `dist/` is fully static, deployable to any static host

## 7. Notes on SEO with Vue SPA

A client-rendered Vue app has weaker default SEO than plain HTML (empty initial DOM
until JS runs). Since this is a lead-gen landing page, mitigate with:
- Pre-rendering at build time (`vite-plugin-ssg` or a simple prerender step) so
  crawlers and social-share previews see full HTML, not a blank shell.
- Meta tags (`vueuse/head` or manual) still resolved in the prerendered output.
If pre-rendering is skipped, the page still works and Google generally indexes
modern JS sites, but rich previews (OG/Twitter cards) need static meta tags in
`index.html` regardless.

## 7. Open items for the client

- Confirm the WhatsApp number is the right destination for leads
- Privacy policy text (I will ship a standard KZ template as a placeholder)
- Current year / any 2024–2026 content updates
- A real favicon / brand mark if one exists beyond the wordmark
