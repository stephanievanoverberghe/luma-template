# 💎 Luma — Minimal Next.js 16 Landing Template

A clean, fast, and sellable landing template built for **creators, indie founders, and devs** who want to launch and resell professional pages — **without the bloat**.

---

## ✨ Overview

**Luma** is a minimal, premium-grade **Next.js 16** landing page template built with:

-   ⚡ **Next.js App Router**
-   🎨 **Tailwind CSS v4** (with canonical color tokens)
-   🧠 **TypeScript** (typed, maintainable, scalable)
-   🌗 **Light & Dark themes**
-   🧩 Modular structure (Hero, Features, Pricing, FAQ, Testimonials, CTA, etc.)

Clean, responsive, and easily rebrandable in seconds — perfect for **freelancers, studios, or SaaS founders** who want a solid base to ship fast and sell.

---

## 📦 What’s Inside

| Section          | Purpose                                     |
| ---------------- | ------------------------------------------- |
| **Hero**         | Clear headline, CTA, and proof badges       |
| **Logos**        | Social proof with hover animations          |
| **Stats**        | Highlight performance & adoption metrics    |
| **Features**     | Visual feature cards with brand icons       |
| **About**        | Showcase purpose and audience               |
| **Pricing**      | 1–3 plans with badges and clear structure   |
| **FAQ**          | Animated collapsible Q&A                    |
| **Testimonials** | Authentic feedback cards                    |
| **CTA**          | Final call with mesh gradient & reassurance |
| **Footer**       | Legal + copyright                           |

Every block is consistent, reusable, and theme-aware.  
No backend. No CMS. **Deploy anywhere.**

---

## 🪄 Features

-   🧱 **Zero dependencies** beyond Next.js + Tailwind
-   🎨 **Instant theming** via CSS variables (`app/globals.css`)
-   🌗 **Dual light/dark assets** (`only-light` / `only-dark`)
-   🖼️ **Optimized images** (Next.js `<Image>` with blur placeholders)
-   📈 **SEO ready** (`metadata`, OG tags, JSON-LD Product schema)
-   🧩 **Prebuilt sections** → `components/` directory
-   📦 **Packaged for resale** → `scripts/package.mjs`
-   🔒 **One-time license** (use forever)

---

## ⚙️ Quick Start

```bash
# 1. Install dependencies
pnpm install

# 2. Run locally
pnpm dev

# 3. Build for production
pnpm build
```

Your site will be live at:

👉 http://localhost:3000

---

## 🎨 Customization

All configuration is centralized in:

`site.config.ts`

Edit your name, links, pricing, and text copy here.

`app/globals.css`

Change brand colors, neutrals, or themes via CSS variables:

```bash
:root {
  --brand: #196df5;
  --bg: #f7fbff;
  --fg: #0b2436;
}
[data-theme='dark'] {
  --brand: #60a5fa;
  --bg: #0b0f14;
  --fg: #e5eef5;
}
```

---

## 🖼️ Assets

All visuals live in /public.

-   `hero-light.png` / `hero-dark.png` → main hero
-   `features-light.png` / `features-dark.png` → features section
-   `cta-mock-light.png` / `cta-mock-dark.png` → CTA background
-   `og/og-cover.jpg` → Open Graph preview

💡 Use the provided Midjourney prompts to regenerate your own visuals.

---

## 💰 Pricing & Licensing

### 🧩 Starter License — €39

-   1 end-product (your startup or client)
-   Commercial use allowed
-   No resale or redistribution

### 🧠 Pro License — €89

-   Unlimited end-products
-   Commercial + resale allowed (e.g. marketplaces)
-   Credit appreciated but not required

### 💼 Agency License — €199

-   Unlimited commercial projects
-   Resell templates, modify, bundle, or rebrand freely

---

## 📦 Packaging for Sale

Package your clean build with:

```bash
pnpm package
```

This script creates a ready-to-ship `.zip` inside `/dist/luma-next-template.zip.`

Perfect for Gumroad, Lemon Squeezy, or your own store.

---

## 🚀 Deploy Anywhere

-   **Vercel** (recommended): instant preview & deployment
-   **Netlify / Cloudflare Pages**: 100% compatible
-   **Static export**: works with `next export` if needed

---

## 🧠 SEO & Performance

Luma scores **95+ Lighthouse** out of the box:

-   ✅ Semantic HTML + ARIA
-   ✅ Responsive + accessible
-   ✅ JSON-LD Product schema
-   ✅ Meta + OG auto-generated
-   ✅ Lazy loading for images
-   ✅ Lightweight: < 40 KB CSS

---

## 🧩 Folder Structure

```bash
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Pricing.tsx
│   ├── ...
├── public/
│   ├── hero-light.png
│   ├── features-light.png
│   └── ...
├── site.config.ts
├── tailwind.config.ts
├── package.json
└── scripts/package.mjs
```

---

## 🧩 Build Your Own Templates

Want to make your own templates from Luma?

1. Duplicate `/components`
2. Update text and images
3. Zip via `pnpm package`
4. Sell it — keep 100%

---

## 🌍 Deploy Example

Live demo:
➡️ https://luma-template-five.vercel.app

<!-- Buy template:
➡️ https://yourstore.gumroad.com/l/luma-template -->

---

## 🧾 License Summary

```bash
© 2025 Alchimiste Créations.
You can use this template commercially under the purchased license.
Do not redistribute without permission.
```

---

## ❤️ Credits

-   Framework: Next.js 16
-   Styling: Tailwind CSS v4
-   Design & code by **Stéph / Alchimiste Créations**

---

<!-- ## 🔗 Follow & Support

- 🧭 Website: https://alchimistecreations.com
- 🌙 Gumroad: https://alchimiste.gumroad.com
- 💬 Contact: contact@alchimistecreations.com -->

---

## 🧘‍♀️ Luma — _launch fast, stay light._

Minimal by design. Scalable by intention.
