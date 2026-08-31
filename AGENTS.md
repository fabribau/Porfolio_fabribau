# AGENTS.md — Guía y Contexto para Agentes de Codificación

> **Fuente de verdad para el desarrollo asistido por IA del portfolio `fabribau.tech`**.  
> Este documento debe consultarse antes de generar código y **actualizarse al completar cada etapa**.

---

## 1. Contexto del Proyecto

- **Propietario:** Fabrizio José Riera Bauer
- **Dominio:** `fabribau.tech`
- **Propósito:** Portfolio profesional bilingüe (Español / Inglés) que destaca perfil de Ingeniero en Informática, experiencia en docencia universitaria, desarrollo FullStack, proyectos de IA/RAG e investigación.
- **Estilo Visual:** Neobrutalismo moderno (paleta viva con variante oscura, bordes gruesos, sombras offset duras sin desenfoque, tipografía audaz y micro-interacciones fluidas).

---

## 2. Stack Tecnológico

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation con soporte para endpoints serverless).
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) + CSS Variables personalizadas para tokens neobrutalistas.
- **Contenido:** Astro Content Collections con validación estricta vía **Zod**.
- **Internacionalización (i18n):** Astro i18n nativo con prefijo de ruta (`/es/`, `/en/`) y diccionarios centralizados.
- **Despliegue & Hosting:** [Cloudflare Pages](https://pages.cloudflare.com/) con `@astrojs/cloudflare`.
- **Formulario & Seguridad:** [Resend](https://resend.com/) (envío transaccional) + [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) (anti-bot).
- **Herramientas de Calidad:** TypeScript (strict mode), ESLint 9, Prettier.

---

## 3. Estructura de Carpetas

```text
├── public/                     # Assets estáticos (favicon, robots.txt, fuentes, imágenes directas)
├── src/
│   ├── components/             # Componentes UI reutilizables (Navbar, Footer, Card, Button, etc.)
│   ├── content/                # Contenido Markdown/MDX organizado por colección e idioma
│   │   ├── proyectos/
│   │   │   ├── es/             # Entradas de proyectos en español
│   │   │   └── en/             # Entradas de proyectos en inglés
│   │   └── blog/
│   │       ├── es/             # Artículos de blog en español
│   │       └── en/             # Artículos de blog en inglés
│   ├── content.config.ts       # Definición de schemas Zod para las colecciones
│   ├── i18n/                   # Sistema de internacionalización
│   │   ├── ui.ts               # Diccionarios de interfaz (ES/EN) y helpers tipados
│   │   └── utils.ts            # Utilidades de navegación y formateo de URLs
│   ├── layouts/                # Plantillas y layouts globales (BaseLayout.astro)
│   ├── pages/                  # Rutas del sitio
│   │   ├── es/                 # Páginas en Español (/es/...)
│   │   ├── en/                 # Páginas en Inglés (/en/...)
│   │   ├── api/                # Endpoints del servidor (ej. /api/contact)
│   │   └── index.astro         # Redirección raíz a /es/
│   └── styles/                 # Estilos globales y tokens
│       └── global.css          # Variables CSS, reset y utilidades neobrutalistas
├── astro.config.mjs            # Configuración principal de Astro, i18n y adaptadores
├── tailwind.config.mjs         # Tokens de diseño, sombras duras, paleta y extensiones
├── tsconfig.json               # Configuración estricta de TypeScript y path aliases
└── AGENTS.md                   # Este archivo
```

---

## 4. Convenciones de Código

### Nomenclatura
- **Componentes Astro:** `PascalCase.astro` (ej: `ProjectCard.astro`, `ThemeToggle.astro`).
- **Módulos TypeScript / Utilidades:** `camelCase.ts` (ej: `useTranslations`, `formatDate.ts`).
- **Archivos de Contenido:** `kebab-case.md` (ej: `asistente-apuestas.md`, `fabribau.md`).
- **Path Aliases:** Usar `@components/*`, `@layouts/*`, `@i18n/*`, `@content/*`, `@styles/*`.

### TypeScript
- Modo estricto activado (`strict: true`).
- Tipar siempre las `Props` de los componentes Astro mediante `interface Props { ... }`.
- Evitar el uso de `any`; definir interfaces o tipos explícitos para datos y estados.

### Commits Semánticos
- Formato: `tipo(alcance opcional): descripción en minúsculas`
- Tipos comunes: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `chore`.

---

## 5. Reglas de Internacionalización (i18n)

1. **Rutas:** Todas las páginas públicas deben residir bajo su respectivo idioma (`/es/...` o `/en/...`).
2. **Traducciones de UI:** Se gestionan en `src/i18n/ui.ts`. No hardcodear strings visibles en los componentes.
   ```ts
   import { getLangFromUrl, useTranslations, useTranslatedPath } from '@i18n/utils';
   const lang = getLangFromUrl(Astro.url);
   const t = useTranslations(lang);
   const translatePath = useTranslatedPath(lang);
   ```
3. **Colecciones de contenido:** El contenido bilingüe se separa en subdirectorios `es/` y `en/` dentro de cada colección (`src/content/proyectos/es/` y `src/content/proyectos/en/`).

---

## 6. Reglas de Theming & Neobrutalismo

1. **Tokens Neobrutalistas:**
   - **Modo Claro:** Fondo crema `#F5F0E8`, tarjetas `#FFFFFF`, texto `#0D0D0D`, bordes `#0D0D0D`.
   - **Modo Oscuro:** Fondo `#0D0D0D` / `#121212`, tarjetas `#1A1A1A`, texto `#F5F0E8`, bordes `#F5F0E8` o `#FFFFFF`.
   - **Acentos Vivos:** Amarillo `#FFE400`, Rosa/Magenta `#FF3D8A`, Verde Lima `#B4FF39`, Cyan `#00F0FF`.
2. **Bordes y Sombras:**
   - Usar bordes gruesos: `border-2`, `border-3` o `border-4`.
   - Sombras offset duras (sin difuminado): `shadow-brutal` (`4px 4px 0px var(--shadow-color)`), `shadow-brutal-sm`, `shadow-brutal-lg`.
   - Al hacer hover/active en botones o tarjetas interactivas: simular pulsación trasladando el elemento (`translate-x-[2px] translate-y-[2px] shadow-none` o `shadow-brutal-sm`).
3. **Evitar FOUC:** El script de detección e inicialización de tema debe ejecutarse en el `<head>` de forma síncrona/inline antes del renderizado del body.
4. **No hardcodear colores:** Utilizar siempre las clases semánticas de Tailwind (`bg-bg-primary`, `text-text-primary`, `border-border-color`, `shadow-brutal`, etc.) o variables CSS.

---

## 7. Checklist de Estado de Etapas

- [x] **ETAPA 0 — Setup y fundaciones técnicas**
  - [x] `Spec_T1`: Inicializar proyecto Astro con TypeScript estricto, ESLint y Prettier.
  - [x] `Spec_T2`: Crear `AGENTS.md` como fuente de verdad.
  - [x] `Spec_T3`: Integrar Tailwind CSS y design tokens neobrutalistas.
  - [x] `Spec_T4`: Configurar i18n nativo (ES/EN) con routing y diccionarios.
  - [x] `Spec_T5`: Configurar Content Collections con Zod (`proyectos`, `blog`).
  - [x] `Spec_T6`: Theming claro/oscuro persistente y sin FOUC.
  - [x] `Spec_T7`: Configurar adapter para Cloudflare Pages.
- [ ] **ETAPA 1 — Sistema de diseño (UI Kit neobrutalista)**
  - [ ] `Spec_T8`: Guía de estilo y propuesta visual (`DESIGN.md` / Stitch MCP).
  - [ ] `Spec_T9`: Componentes base (Button, Card, Badge, Tag, Navbar, Footer) y `/style-guide`.
  - [ ] `Spec_T10`: Sistema de animaciones y View Transitions.
  - [ ] `Spec_T11`: `BaseLayout.astro` responsive y completo.
- [ ] **ETAPA 2 — Páginas principales (estructura placeholder)**
  - [ ] `Spec_T12`: Página Home (`/es/` y `/en/`).
  - [ ] `Spec_T13`: Página About Me.
  - [ ] `Spec_T14`: Página Proyectos (grid y `/proyectos/[slug]`).
  - [ ] `Spec_T15`: Página Blog (grid y `/blog/[slug]`).
  - [ ] `Spec_T16`: Página Contacto.
- [ ] **ETAPA 3 — Contenido real**
  - [ ] `Spec_T17`: Contenido de About Me desde CVs.
  - [ ] `Spec_T18`: Contenido de los 3 proyectos (FabRiBau con status "en-desarrollo", Asistente IA Apuestas, Olimpiadas Atletismo).
  - [ ] `Spec_T19`: Foto profesional integrada con estilo neobrutalista.
- [ ] **ETAPA 4 — Formulario de contacto (Resend + Turnstile)**
  - [ ] `Spec_T20`: Endpoint de envío con Resend.
  - [ ] `Spec_T21`: Anti-bot con Cloudflare Turnstile.
  - [ ] `Spec_T22`: Validación y UX de formulario.
- [ ] **ETAPA 5 — Performance, SEO y QA final**
  - [ ] `Spec_T23`: SEO técnico, sitemap, Open Graph, hreflang.
  - [ ] `Spec_T24`: Optimización de performance (Lighthouse > 90).
  - [ ] `Spec_T25`: QA cross-browser y responsive.
  - [ ] `Spec_T26`: Deploy definitivo en `fabribau.tech`.
