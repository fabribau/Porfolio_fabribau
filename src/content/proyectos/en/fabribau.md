---
title: 'FabRiBau — High-Performance Neobrutalist Portfolio'
description: 'Interactive personal engineering platform built with Astro 5, TypeScript, Tailwind CSS, native i18n, reactive 3D avatar, Cloudflare Pages serverless edge, and secure messaging with Resend and Turnstile.'
pubDate: 2026-02-15
tags:
  [
    'Astro 5',
    'Tailwind CSS',
    'TypeScript',
    'Cloudflare Pages',
    'i18n',
    'Neobrutalism',
    'Zod',
    'Resend',
    'Turnstile',
    'Anime.js',
  ]
status: 'completado'
featured: true
order: 2
repositoryUrl: 'https://github.com/fabribau/Porfolio_fabribau'
liveUrl: 'https://fabribau.tech'
---

## 1. Executive Summary

Personal engineering platform and professional portfolio conceived to showcase my profile as an **Informatics Engineer, FullStack Software Developer, and University Teacher**. Designed and engineered from the ground up leveraging modern static site generation (SSG) with edge serverless capabilities and a **high-impact Neobrutalist aesthetic**, the project proves that bold visual identity, tactile mechanical micro-interactions, and a reactive 3D avatar can coexist with a relentless performance budget: **0 KB client-side JavaScript on content pages, perfect Lighthouse scores (100/100), and zero fixed infrastructure costs**.

---

## 2. The Problem: Web Homogenization and Resource Waste

Personal portfolios across the modern software landscape frequently fall victim to two recurring pitfalls:

### Prior Constraints and Typical Ecosystem Frictions
* **Generic templates and no-code builders:** Sacrifice individual brand differentiation and architectural discretion, loading bloated third-party tracking scripts while restricting technical customizability.
* **Over-engineered client-side SPAs (Pure Next.js/React for content sites):** Ship megabytes of client JavaScript and heavy hydration runtimes merely to display static text and assets, severely degrading First Contentful Paint (FCP) and Time to First Byte (TTFB) on mobile connections.
* **False dichotomy between visual richness and performance:** Expressive, highly interactive user interfaces are conventionally coupled with heavyweight 3D or animation libraries (Three.js, GSAP, WebGL), penalizing accessibility and device battery life.

The core objective was building a bespoke platform uniting **maximal visual expressiveness, software craftsmanship, and instantaneous load times**.

---

## 3. Key Engineering Decisions

<div class="my-6 space-y-4 not-prose">
  <!-- Card 1 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-yellow px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        01
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Astro 5 with Island Architecture and Pure SSG
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          Engineering Rationale
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Over 95% of the platform consists of editorial content (project deep-dives, blog articles, professional bio). Astro compiles components to clean, static HTML and CSS at build time, shipping 0 KB of client JavaScript except inside strictly isolated interactive micro-islands (reactive avatar, theme toggle, language switcher, and contact form).
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Single Page Application in Next.js or Vite SPA:</strong> Discarded due to shifting rendering overhead and unnecessary hydration penalties to user devices for static content consumption.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-cyan px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        02
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Decoupled Serverless Edge Pipeline: Cloudflare Pages + Resend + Turnstile
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-cyan block mb-1 font-mono">
          Engineering Rationale
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          The <code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">/api/contact</code> endpoint runs on-demand as an isolated serverless function on the Cloudflare Workers edge runtime (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">prerender = false</code>). It executes strict Zod schema validation, invisible bot challenge verification via Cloudflare Turnstile, and dual transactional dispatch with Resend (admin notification plus bilingual HTML autoresponder for visitors), featuring an automatic mock fallback for local development.
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Third-party embedded form services (Formspree/EmailJS) or dedicated VPS backend:</strong> Discarded to avoid vendor branding, external runtime latency, or recurring server costs for an isolated endpoint.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-lime px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        03
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Kinematic 3D Reactive Avatar via Native CSS 3D & Anime.js
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-lime block mb-1 font-mono">
          Engineering Rationale
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Rather than introducing heavyweight WebGL runtimes or 3D canvas renderers, an SVG modular layered avatar operates within a native 3D transformation context (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">perspective: 1000px</code>, <code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">transform-style: preserve-3d</code>). A requestAnimationFrame loop with linear interpolation (lerp) smoothly tracks cursor and touch coordinates for head rotation and pupil gaze, accompanied by physical reaction springs (elastic nodding and "+1" floaters on gentle clicks, lateral recoil and furrowed brows under rapid clicking).
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Three.js / Spline 3D Embeds:</strong> Discarded due to adding 600+ KB to the initial payload and triggering excessive mobile GPU thermal throttling.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-purple px-2 py-0.5 font-mono text-xs font-bold text-white shadow-brutal-sm dark:border-white">
        04
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Zero-FOUC Neobrutalist Design System with CSS Tokens & View Transitions
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-purple block mb-1 font-mono">
          Engineering Rationale
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          The entire visual language (4px hard offset shadows, 3px/4px solid borders, mechanical button press <code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">active:translate-x-1</code>, and highlighter effects) is governed by custom CSS variables on top of Tailwind CSS. Dark/light theme persistence is executed via a synchronous inline script (&lt;1 KB) in the <code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">&lt;head&gt;</code>, completely eliminating Flash of Unstyled Content (FOUC) across page navigations with Astro's native View Transitions API.
        </p>
      </div>
      <div class="border-l-3 border-accent-purple bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Generic Component Libraries (Material UI, Shadcn) or React Context Theming:</strong> Discarded due to homogeneous styling conventions and flashing unstyled content during server-side rendered initial paints.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. System Architecture

The solution is architected as an **Edge-First Hybrid Jamstack topology**:

1. **Static Build Pipeline (SSG at Build Time):** Astro compiles strictly typed Content Collections validated through **Zod**, centralized bilingual i18n dictionaries (`/es/`, `/en/`), and responsive layout components into an optimized static asset bundle.
2. **Global Edge Distribution:** Automated continuous deployment over the **Cloudflare Pages** global CDN via `@astrojs/cloudflare`, delivering edge-cached assets with sub-30ms global round-trip times.
3. **Isolated Interactive Micro-Islands:** Selective client-side hydration restricted solely to components requiring runtime state (`HeroFace3D`, `ThemeToggle`, `LanguagePicker`, `ContactForm`, and `ImageModal`), leaving the remaining DOM tree zero-JS.
4. **Transactional Serverless Layer:** The `/api/contact` route executes on-demand within Cloudflare Workers, keeping Resend and Turnstile secrets safely contained inside the edge execution sandbox.

---

## 5. Core Technical Challenge & Trade-offs

### Tension: High-Impact Neobrutalist Visuals vs. Strict Performance Budget

* **The Dilemma:** Modern Neobrutalism requires aggressive visual feedback: thick high-contrast borders, unblurred solid offset shadows, vibrant accent hues, mechanical click interactions, and a playful 3D hero avatar. Typically, such dynamic styling leads to hefty JavaScript bundles and rendering overhead.
* **The Pragmatic Resolution:** Replaced heavy 3D game engines with a hybrid **CSS 3D perspective system over modular SVG layers**, animated with a micro RAF loop and Anime.js. Mechanical tactile physics and hover-tilts were delegated directly to GPU-accelerated CSS transforms, maintaining butter-smooth 60 FPS transitions without bundle bloat.
* **Accepted Trade-off:** Required meticulous manual craft in token engineering, easing math, and bespoke Astro components, yielding in return an instantaneous, zero-latency browsing experience with flawless Core Web Vitals.

---

## 6. Quantitative Results & Measurable Impact

* **Lighthouse 100/100:** Perfect scores across Performance, Accessibility, Best Practices, and SEO on both Desktop and Mobile viewports.
* **0 KB JavaScript on Content Routes:** Project showcases and blog articles are delivered as ultra-lightweight, instant-loading static HTML/CSS.
* **Guaranteed Zero-FOUC:** Theme switching occurs seamlessly in less than 1 frame without visual flashing or color inversion glitches.
* **Enterprise-Grade Message Delivery & Security:** 100% automated spam deflection via Cloudflare Turnstile combined with reliable dual transactional delivery through Resend.
* **End-to-End Bilingual Internationalization (i18n):** Complete Spanish/English routing preserving navigation context across page transitions.
* **Zero Infrastructure Cost:** Continuous global operation hosted on Cloudflare Pages with zero recurring server maintenance expenses.

---

## 7. What I Would Do Differently Today

If re-architecting the platform today, I would implement an **automated build-time Open Graph (OG) image generation pipeline using Satori**, synthesizing custom branded cards for each project and article on compile. Furthermore, I would integrate a **Playwright visual regression testing suite** into the CI workflow to systematically assert that token updates or CSS utility additions never regress Neobrutalist geometry across various viewport breakpoints.

