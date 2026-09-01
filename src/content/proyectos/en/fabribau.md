---
title: 'FabRiBau — Neobrutalist Web Portfolio'
description: 'Interactive personal portfolio engineered with Astro 5, Tailwind CSS, TypeScript, native i18n, Zod-validated Content Collections, and serverless Cloudflare Pages deployment.'
pubDate: 2026-08-31
tags: ['Astro 5', 'Tailwind CSS', 'TypeScript', 'Cloudflare Pages', 'i18n', 'Neobrutalism', 'Zod']
status: 'en-desarrollo'
featured: true
order: 2
repositoryUrl: 'https://github.com/fabribau/portfolio'
liveUrl: 'https://fabribau.tech'
---

## About the Project

**FabRiBau** (`fabribau.tech`) is this very website: an engineered meta-project created as a comprehensive showcase of my profile as an **Informatics Engineer, FullStack Software Developer, and University Lecturer**.

Designed from the ground up without relying on standard cookie-cutter templates, it adopts a **modern Neobrutalist aesthetic** combining high-contrast vibrant color accents, thick borders, and solid offset shadows with tactile mechanical micro-interactions and smooth View Transitions.

---

### Architectural Pillars & Technical Decisions

1. **Astro 5 with Island Architecture:**
   - Ultra-fast Static Site Generation (SSG).
   - Zero unnecessary client-side JavaScript by default, achieving top Lighthouse performance and accessibility scores.
   - Smooth seamless navigation via the native View Transitions API.

2. **Native Internationalization (i18n):**
   - Full bilingual support (**Spanish** `/es/` and **English** `/en/`) backed by strictly typed UI dictionaries.
   - Preserves active route context when toggling languages.

3. **Content Collections & Zod Validation:**
   - Compile-time strict schema typing for all projects, research entries, and articles.
   - Fine-grained control over project lifecycles (`en-desarrollo`, `completado`) and flexible metadata.

4. **Zero-FOUC Dark / Light Theming:**
   - Synchronous inline script in `<head>` preventing Flash of Unstyled Content.
   - Respects system preferences with instant reactive toggle and local persistence.

5. **Serverless Infrastructure on Cloudflare Pages:**
   - Continuous deployment on Cloudflare's global edge network via `@astrojs/cloudflare`.
   - Planned integration with **Resend** transactional emails and **Cloudflare Turnstile** bot protection.
