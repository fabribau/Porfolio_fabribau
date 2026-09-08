---
title: 'FabRiBau — Portfolio de Ingeniería & Web Neobrutalista'
description: 'Plataforma personal interactiva de alto rendimiento con Astro 5, TypeScript, Tailwind CSS, i18n nativo, avatar reactivo 3D, serverless edge en Cloudflare Pages y mensajería segura con Resend y Turnstile.'
pubDate: 2026-02-15
tags:
  [
    'Astro 5',
    'Tailwind CSS',
    'TypeScript',
    'Cloudflare Pages',
    'i18n',
    'Neobrutalismo',
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

## 1. Resumen Ejecutivo

Plataforma web personal y portfolio de ingeniería concebido para comunicar con máxima fidelidad mi perfil como **Ingeniero en Informática, Desarrollador FullStack y Docente Universitario**. Diseñado y construido desde cero bajo una arquitectura estática moderna (SSG) con capacidades serverless en el edge y una estética **neobrutalista de alto impacto**, el proyecto demuestra que es posible combinar una identidad visual vibrante, micro-interacciones mecánicas y un avatar 3D reactivo con un presupuesto de rendimiento implacable: **0 KB de JavaScript cliente en páginas documentales, puntuaciones perfectas en Lighthouse (100/100) y cero costos fijos de infraestructura**.

---

## 2. El Problema: Homogeneización Web y Desperdicio de Recursos

Los portfolios personales en el ecosistema de software contemporáneo suelen sufrir de dos patologías recurrentes:

### Limitaciones y fricciones del escenario habitual
* **Plantillas genéricas y plataformas no-code:** Sacrifican la diferenciación profesional y el criterio arquitectónico, cargando scripts de terceros innecesarios y limitando la extensibilidad técnica del desarrollador.
* **SPAs sobredimensionadas (Next.js/React puros para sitios de contenido):** Descargan megabytes de JavaScript cliente y motores de hidratación completos para mostrar texto y recursos estáticos, degradando los tiempos de carga inicial (FCP/TTFB) en redes móviles.
* **Falsa dicotomía entre expresividad visual y rendimiento:** Las interfaces gráficas llamativas e interactivas suelen implementarse mediante librerías pesadas de 3D/animación (Three.js, GSAP, WebGL), penalizando la accesibilidad y el consumo de batería de los dispositivos.

El desafío consistió en diseñar una solución a medida que ofreciera **máxima expresividad visual, solidez de ingeniería y velocidad instantánea de entrega**.

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
        Astro 5 con Arquitectura de Islas y SSG Puro
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          Justificación Técnica
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          El 95% de la plataforma es contenido documental (proyectos, artículos, trayectoria profesional). Astro compila los componentes a HTML y CSS puros durante el build time, despachando 0 KB de JavaScript cliente salvo en micro-islas interactivas estrictamente delimitadas (avatar reactivo, alternador de tema, selector de idioma y formulario de contacto).
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
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
        Pipeline Serverless Edge Desacoplado: Cloudflare Pages + Resend + Turnstile
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-cyan block mb-1 font-mono">
          Justificación Técnica
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          El endpoint <code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">/api/contact</code> opera como una función serverless en el edge de Cloudflare Workers (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">prerender = false</code>). Realiza validación tipada con Zod, verificación anti-bot con Cloudflare Turnstile y despacho transaccional dual mediante Resend (notificación al administrador y autoresponder bilingüe formateado al usuario), con fallback automático a mock en entornos de desarrollo local.
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Servicios de terceros embebidos (Formspree/EmailJS) o backend dedicado en VPS:</strong> Descartados para evitar dependencias externas con branding intrusivo o costos fijos de servidor para una funcionalidad puntual.
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
        Avatar 3D Cinemático Reactivo con CSS 3D y Anime.js
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-lime block mb-1 font-mono">
          Justificación Técnica
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          En lugar de recurrir a modelos WebGL o Canvas de alto consumo, se construyó un avatar modular por capas vectoriales (SVG) que opera en un espacio tridimensional nativo (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">perspective: 1000px</code>, <code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">transform-style: preserve-3d</code>). Un bucle RAF con interpolación lineal (lerp) sigue suavemente el cursor/touch en rotación de cabeza y movimiento de pupilas, integrando expresiones físicas (asentimiento elástico y partículas en clics suaves, sacudida y ceño fruncido ante clics repetidos).
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Three.js / Spline 3D embebido:</strong> Descartado por añadir más de 600 KB al bundle inicial y sobrecalentar GPUs en dispositivos móviles.
        </p>
      </div>
    </div>
  </div>

  <!-- Tarjeta 4 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-purple px-2 py-0.5 font-mono text-xs font-bold text-white shadow-brutal-sm dark:border-white">
        04
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Sistema Neobrutalista Zero-FOUC con Variables CSS y View Transitions
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-purple block mb-1 font-mono">
          Justificación Técnica
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Toda la identidad visual (sombras offset duras de 4px, bordes de 3px/4px, efectos de pulsación mecánica <code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">active:translate-x-1</code> y subrayados fluorescentes) se apoya en tokens semánticos sobre Tailwind CSS. La persistencia y detección de modo oscuro se ejecuta mediante un script inline síncrono (&lt;1 KB) en el <code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">&lt;head&gt;</code>, eliminando por completo destellos visuales (FOUC) incluso durante navegaciones con la View Transitions API nativa.
        </p>
      </div>
      <div class="border-l-3 border-accent-purple bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Frameworks de componentes prediseñados (Material UI, Shadcn) o theming dependiente de React context:</strong> Descartados por imponer estilos corporativos genéricos e introducir parpadeos en el render inicial.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. Arquitectura del Sistema

La solución está construida bajo una topología **Jamstack híbrida orientada al Edge**:

1. **Pipeline de Generación Estática (SSG en Build Time):** Astro procesa los esquemas tipados de Content Collections validados con **Zod**, los diccionarios de internacionalización bilingüe (`/es/`, `/en/`) y los layouts modulares, emitiendo un bundle estático optimizado.
2. **Distribución Global en el Edge:** Despliegue automatizado sobre la red CDN global de **Cloudflare Pages** mediante `@astrojs/cloudflare`, con compresión de assets, cache distribuido y tiempos de respuesta inferiores a 30 ms a nivel global.
3. **Micro-Islas Interactivas Aisladas:** Hidratación selectiva en el cliente únicamente para componentes con interactividad dinámica (`HeroFace3D`, `ThemeToggle`, `LanguagePicker`, `ContactForm` e `ImageModal`), manteniendo el resto del DOM libre de JavaScript.
4. **Capa Serverless Transaccional:** La ruta `/api/contact` se ejecuta bajo demanda en Cloudflare Workers, protegiendo las credenciales de Resend y Turnstile en el entorno de ejecución del servidor.

---

## 5. Desafío Técnico Central y Trade-offs

### Tensión: Alta Riqueza Visual Neobrutalista vs. Presupuesto Estricto de Rendimiento

* **El dilema:** El diseño neobrutalista moderno exige una respuesta visual contundente: bordes gruesos de alto contraste, sombras offset duras sin desenfoque, paleta de acentos saturados, micro-interacciones mecánicas y un avatar tridimensional en la cabecera. Tradicionalmente, este tipo de interfaces incurre en descargas voluminosas de librerías JS y sobrecarga en el renderizado.
* **La resolución pragmática:** Se reemplazaron motores de renderizado 3D pesados por un sistema híbrido de **perspectiva CSS 3D nativa sobre capas SVG**, animado mediante un bucle RAF ultraligero y Anime.js. Las interacciones táctiles de botones y tarjetas se delegaron al motor gráfico de CSS por hardware, logrando transiciones fluidas a 60 FPS sin penalizar el tamaño del bundle.
* **Trade-off asumido:** Exigió mayor rigor y diseño artesanal en la formulación de tokens, matemáticas de interpolación y estilos CSS, logrando a cambio una experiencia instantánea con puntuaciones perfectas en Core Web Vitals.

---

## 6. Resultados e Impacto Cuantitativo

* **Lighthouse 100/100:** Puntuación perfecta en Rendimiento, Accesibilidad, Mejores Prácticas y SEO tanto en versiones de escritorio como en dispositivos móviles.
* **0 KB de JavaScript en rutas de lectura:** Las páginas de proyectos y blog se despachan como HTML/CSS puros de carga inmediata.
* **Zero-FOUC garantizado:** Conmutación de tema claro/oscuro instantánea en menos de 1 frame, sin parpadeos perceptibles.
* **Resiliencia y seguridad en mensajería:** Integración de Cloudflare Turnstile con tasa del 100% de bloqueo ante intentos de spam automatizado en el formulario de contacto.
* **Internacionalización completa (i18n):** Arquitectura bilingüe integral (español e inglés) con mantenimiento de ruta y contexto al alternar idiomas.
* **Infraestructura a costo cero:** Operación continua global en Cloudflare Pages sin costos fijos de mantenimiento o servidores.

---

## 7. Qué Haría Distinto Hoy

Si rediseñara la plataforma hoy, incorporaría un **generador automático de Open Graph Images (OG) dinámicas en tiempo de compilación mediante Satori**, creando tarjetas personalizadas para cada proyecto y artículo de blog. Asimismo, implementaría un **pipeline de pruebas de regresión visual automatizadas con Playwright** en el flujo de integración continua (CI) para certificar que las modificaciones de tokens o utilidades CSS preserven la integridad geométrica neobrutalista en todas las resoluciones.
