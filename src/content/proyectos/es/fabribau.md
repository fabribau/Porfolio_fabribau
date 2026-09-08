---
title: 'FabRiBau — Portfolio Web Neobrutalista'
description: 'Portfolio personal interactivo construido con Astro 5, Tailwind CSS, TypeScript, i18n nativo, Content Collections validadas con Zod y despliegue serverless en Cloudflare Pages.'
pubDate: 2026-09-09
tags: ['Astro 5', 'Tailwind CSS', 'TypeScript', 'Cloudflare Pages', 'i18n', 'Neobrutalismo', 'Zod']
status: 'en-desarrollo'
featured: true
order: 2
repositoryUrl: 'https://github.com/fabribau/Porfolio_fabribau'
liveUrl: 'https://fabribau.tech'
---

## 1. Resumen Ejecutivo

Portfolio y plataforma de presentación profesional concebido para comunicar mi perfil como **Ingeniero en Informática y Docente Universitario**. Diseñado desde cero bajo principios de arquitectura estática moderna (SSG) y estética **neobrutalista**, prioriza máxima velocidad de carga (0 KB de JavaScript en páginas documentales), tipado estricto e internacionalización nativa sin costos fijos de infraestructura.

---

## 2. El Problema: El Dilema del Portfolio Genérico vs. Sobredimensionado

Los sitios personales de ingeniería suelen polarizarse en dos extremos poco representativos:
* **Plantillas genéricas y plataformas no-code (WordPress/Webflow):** Sacrifican identidad visual propia y no demuestran criterio arquitectónico ni dominio de estándares web.
* **SPAs sobredimensionadas (React/Next.js completos):** Descargan megabytes de JavaScript y motores de hidratación pesados en el cliente para mostrar contenido predominantemente estático, degradando el First Contentful Paint (FCP) en dispositivos móviles.

El objetivo fue construir una plataforma propia que combine **máxima expresividad visual** con **cero sobrecarga técnica**.

---

## 3. Decisiones Clave de Ingeniería

<div class="my-6 space-y-4 not-prose">
  <!-- Tarjeta 1 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-yellow px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        01
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Astro 5 con Arquitectura de Islas y SSG puro
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          ✓ Justificación
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          El 95% del sitio es contenido de lectura (proyectos, bio, artículos). Astro compila a HTML y CSS puros en build time, despachando 0 KB de JavaScript cliente salvo en islas interactivas puntuales (como el selector de tema y validación de formularios).
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Alternativa Descartada
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Single Page Application en Next.js o Vite SPA:</strong> Descartado por trasladar al navegador del usuario el costo de renderizado e hidratación innecesaria para un sitio de contenido.
        </p>
      </div>
    </div>
  </div>

  <!-- Tarjeta 2 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-cyan px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        02
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Content Collections con validación Zod en tiempo de compilación
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-cyan block mb-1 font-mono">
          ✓ Justificación
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          El contenido se gestiona en Markdown/MDX tipado estrictamente. Zod valida fechas, tags, estados y enlaces en tiempo de compilación; cualquier inconsistencia detiene el build inmediatamente antes del despliegue.
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Alternativa Descartada
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Headless CMS (Strapi, Sanity o Supabase):</strong> Descartado para mantener todo el contenido versionado en Git, sin dependencias de red en runtime ni costos de servicio externos.
        </p>
      </div>
    </div>
  </div>

  <!-- Tarjeta 3 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-lime px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        03
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Theming Zero-FOUC y micro-interacciones mediante CSS nativo
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-lime block mb-1 font-mono">
          ✓ Justificación
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Un script síncrono inline (&lt;1 KB) en el <code>&lt;head&gt;</code> evalúa la preferencia del sistema y <code>localStorage</code> antes del primer render, evitando parpadeos de tema incorrecto. Las sombras offset duras y físicas de botones se calculan con variables CSS sin librerías pesadas de animación.
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Alternativa Descartada
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Librerías de animación en JS (Framer Motion / GSAP):</strong> Descartado por inflar el bundle innecesariamente para efectos que el motor gráfico nativo de CSS ejecuta a 60 FPS.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. Arquitectura del Sistema

La arquitectura sigue una estrategia **Jamstack orientada al Edge**:
1. **Pipeline Estático (Build Time):** Astro compila Markdown, componentes e i18n nativo (`/es/`, `/en/`), generando assets estáticos altamente optimizados.
2. **Distribución Global en el Edge:** Despliegue en **Cloudflare Pages** mediante `@astrojs/cloudflare`, garantizando entrega de baja latencia mediante CDN distribuido.
3. **Endpoint Serverless Aislado:** Funciones serverless dedicadas para el formulario de contacto (`/api/contact`), con despacho transaccional vía **Resend** y validación anti-bot con **Cloudflare Turnstile**.

---

## 5. Desafío Técnico Central y Trade-offs

### Tensión: Riqueza visual Neobrutalista vs. Presupuesto estricto de rendimiento

* **El dilema:** El diseño neobrutalista exige una fuerte respuesta visual (bordes gruesos, sombras offset duras, transformaciones en hover/active y modos de color de alto contraste), lo que habitualmente tienta al uso de bibliotecas de componentes prediseñadas o scripts de animación.
* **La resolución pragmática:** Se construyó un sistema de tokens propio sobre **Tailwind CSS** y variables CSS puras. Toda la interacción física (efecto de pulsación mecánica, micro-tilt de tarjetas) opera a través de aceleración por hardware en CSS, integrando la **View Transitions API** nativa para navegación fluida sin necesidad de un router SPA pesado.
* **Trade-off asumido:** Requiere mayor dedicación artesanal en las reglas de CSS y tokens de diseño, logrando a cambio una navegación instantánea con puntuaciones perfectas en Core Web Vitals.

---

## 6. Resultados e Impacto Cuantitativo

* **Lighthouse 95-100:** Puntuaciones óptimas en Rendimiento, Accesibilidad, Mejores Prácticas y SEO.
* **Cero JavaScript innecesario:** Carga inicial ultraligera con JS cliente restringido exclusivamente a micro-islas interactivas.
* **Cero FOUC:** Alternancia instantánea entre modo claro y oscuro sin destellos visuales.
* **Infraestructura con costo cero:** Operación continua global en Cloudflare Pages con tiempos de respuesta en el edge bajo 50 ms.

---

## 7. Qué Haría Distinto Hoy

Si rediseñara la solución hoy, incorporaría un **feed RSS automatizado** para la sección del blog y un **pipeline de optimización automatizada de imágenes de proyectos (generación de formatos WebP/AVIF responsivos)** en el flujo de CI/CD para optimizar aún más el peso de los recursos visuales.
