# Especificación de Portfolio Web — fabribau.tech
**Autor:** Fabrizio José Riera Bauer
**Stack base:** Astro + Tailwind CSS + Content Collections + Cloudflare Pages
**Idiomas:** ES / EN (rutas `/es/` `/en/`)
**Estilo:** Neobrutalismo (paleta vivos + variante oscura), tipografía audaz, animaciones y transiciones de vista

> Este documento se divide en **Etapas**, cada una con **Spec_T** (tareas) numeradas de forma global. Cada tarea tiene: Objetivo, Entregable y Criterio de validación — así podés pasarle una tarea a la vez al agente y validar antes de seguir.

---

## ETAPA 0 — Setup y fundaciones técnicas

### Spec_T1: Inicializar proyecto Astro
- **Objetivo:** Crear el proyecto base con Astro, TypeScript estricto, ESLint y Prettier configurados.
- **Entregable:** Repo funcional, `astro dev` corriendo, estructura de carpetas inicial (`src/pages`, `src/components`, `src/layouts`, `src/content`, `src/i18n`, `src/styles`).
- **Validación:** El proyecto compila y levanta en local sin errores ni warnings.

### Spec_T2: Crear AGENTS.md
- **Objetivo:** Documentar en la raíz del repo el archivo `AGENTS.md` con toda la información que un agente de codificación necesita para trabajar de forma consistente en las siguientes etapas: contexto del proyecto (portfolio de Fabrizio Riera Bauer), stack (Astro + Tailwind + Content Collections + Cloudflare), convenciones de código (naming, estructura de carpetas, estilo de commits), reglas de i18n (dónde van las traducciones, cómo se agregan nuevas claves), reglas de theming (cómo se usan los tokens de color, no hardcodear colores), y un resumen de las Etapas de esta spec con su estado actual.
- **Entregable:** `AGENTS.md` en la raíz, con secciones: Contexto, Stack, Estructura de carpetas, Convenciones, i18n, Theming, Estado de las etapas (checklist).
- **Validación:** El archivo existe, es correcto respecto al setup real de Spec_T1, y sirve como referencia autosuficiente sin tener que releer toda esta spec.
- **Nota:** Este archivo se debe **actualizar al cierre de cada etapa siguiente** (agregar convenciones nuevas que vayan surgiendo, marcar el checklist de estado), para que siga siendo la fuente de verdad para el agente.

### Spec_T3: Integrar Tailwind CSS y design tokens
- **Objetivo:** Instalar Tailwind, definir tokens de diseño (colores, tipografías, espaciados, sombras "duras" típicas del neobrutalismo) en `tailwind.config`.
- **Entregable:** Configuración de Tailwind extendida con paleta light/dark y variables reutilizables.
- **Validación:** Una página de prueba renderiza los colores y tipografías definidos correctamente en ambos temas.

### Spec_T4: Configurar i18n (ES/EN)
- **Objetivo:** Configurar el sistema de i18n nativo de Astro con prefijo de ruta (`/es/`, `/en/`), idioma por defecto y fallback.
- **Entregable:** Routing funcional para ambos idiomas, selector de idioma básico (sin estilo final aún), diccionarios de traducción base (`es.json` / `en.json`).
- **Validación:** Navegar entre `/es/` y `/en/` mantiene la misma página, cambiando el idioma correctamente.

### Spec_T5: Configurar Content Collections
- **Objetivo:** Definir schemas (Zod) para `proyectos` y `blog`, soportando contenido bilingüe (por archivo separado o por campo, a decidir en la tarea).
- **Entregable:** Colecciones configuradas en `src/content/config.ts`, con 1 entrada de ejemplo (placeholder) por colección en cada idioma.
- **Validación:** `astro check` valida los schemas sin errores; el contenido de ejemplo es accesible desde código.

### Spec_T6: Theming claro/oscuro
- **Objetivo:** Sistema de tema con persistencia (localStorage), respeto a `prefers-color-scheme`, y toggle sin flash de contenido incorrecto (FOUC).
- **Entregable:** Script de theming + toggle funcional (aunque sin diseño final).
- **Validación:** Recargar la página mantiene el tema elegido; no hay parpadeo del tema incorrecto al cargar.

### Spec_T7: Setup de despliegue en Cloudflare Pages
- **Objetivo:** Configurar el adapter `@astrojs/cloudflare`, conectar el repo a Cloudflare Pages, apuntar el dominio `fabribau.tech` (reemplazando el proyecto anterior desplegado).
- **Entregable:** Pipeline de deploy funcionando en cada push, sitio placeholder visible en `fabribau.tech`.
- **Validación:** El dominio sirve el proyecto nuevo, no queda rastro del proyecto anterior.

---

## ETAPA 1 — Sistema de diseño (UI Kit neobrutalista)

### Spec_T8: Guía de estilo — Propuesta de dirección visual
- **Objetivo:** Documentar (como referencia, no como código) la dirección visual: paleta de colores vivos, tipografía audaz, bordes gruesos, sombras duras (offset shadows), sin degradados, con acentos de color saturado sobre fondos neutros.
- **Propuesta inicial** (a validar con vos antes de codear):
  - **Modo oscuro** (tu referencia tipo Gumroad): fondo casi negro (`#0D0D0D` / `#111111`), acentos en 2-3 colores vivos saturados (ej. amarillo `#FFE400`, magenta `#FF3D8A`, verde lima `#B4FF39`), bordes blancos/crema gruesos (3-4px).
  - **Modo claro:** fondo crema/off-white (`#F5F0E8`) en vez de blanco puro (más distintivo), mismos acentos vivos, bordes negros gruesos.
  - **Diferenciador vs. neobrutalismo genérico:** en vez de solo bordes negros + sombra offset (el look "typeface template"), usar 1 elemento propio recurrente — por ejemplo, marcos que rotan levemente al hover, subrayados tipo "marcador" en títulos, o un cursor custom. Esto se define en detalle en esta tarea.
  - **Tipografía:** una display bold/condensada para títulos (ej. estilo Space Grotesk, Archivo Black, o similar variable font) + una mono o sans neutra para texto de lectura.
- **Entregable:** Documento corto (`DESIGN.md`) con paleta final, tipografías elegidas, y el "elemento diferenciador" definido.
- **Herramienta sugerida:** Antes de codear el UI Kit (Spec_T9), crear un proyecto llamado **"FabRiBau"** en **Stitch (MCP)** para explorar y generar los diseños de pantallas clave (Home, About, Proyecto detalle) en base a esta guía de estilo. Esto sirve como referencia visual concreta antes de traducir el diseño a componentes Astro/Tailwind.
- **Validación:** Aprobás la dirección visual (y los diseños generados en Stitch, si se usan) antes de pasar a construir componentes.

### Spec_T9: Componentes base (UI Kit)
- **Objetivo:** Construir Button, Card, Badge, Navbar, Footer, Tag siguiendo la guía de estilo de T8, con estados hover/focus/active animados.
- **Entregable:** Componentes Astro/React reutilizables, documentados en una página `/style-guide` (interna, no productiva).
- **Validación:** `/style-guide` muestra todos los componentes en ambos temas e idiomas.

### Spec_T10: Sistema de animaciones y transiciones de página
- **Objetivo:** Implementar View Transitions API de Astro para navegación entre páginas, más micro-interacciones (hover, entrada de elementos al scroll).
- **Entregable:** Transiciones funcionando entre al menos 2 páginas placeholder, sin romper el theming ni el i18n.
- **Validación:** Navegar entre páginas se siente fluido, sin parpadeos ni pérdida de estado de tema/idioma.

### Spec_T11: Layout base
- **Objetivo:** Layout general (Navbar + selector de idioma + selector de tema + Footer) aplicado a todas las páginas.
- **Entregable:** `BaseLayout.astro` reutilizable.
- **Validación:** Layout consistente y responsive en las páginas placeholder existentes.

---

## ETAPA 2 — Páginas principales (estructura, sin contenido final)

### Spec_T12: Página Home
- **Objetivo:** Resumen simple de presentación (hero con nombre/rol, línea de pitch, accesos rápidos a Proyectos/CV/Contacto).
- **Validación:** Página completa y responsive con contenido placeholder.

### Spec_T13: Página About Me
- **Objetivo:** Página estilo "CV web" — foto, resumen profesional, experiencia, educación, skills, idiomas (estructura de secciones).
- **Nota:** La foto profesional la provee Fabrizio directamente (ver Spec_T19); hasta entonces, placeholder.
- **Validación:** Estructura completa con datos placeholder, responsive.

### Spec_T14: Página Proyectos
- **Objetivo:** Grid de cards resumen + rutas dinámicas `/proyectos/[slug]` con detalle ampliado.
- **Validación:** Click en card lleva al detalle correcto; funciona en ambos idiomas.

### Spec_T15: Página Blog
- **Objetivo:** Grid de cards (título + descripción) + rutas dinámicas `/blog/[slug]`.
- **Validación:** Igual que T14, aplicado a blog.

### Spec_T16: Página Contacto
- **Objetivo:** Estructura con formulario (sin lógica de envío aún) + cards de redes/medios de contacto (LinkedIn, email, etc.).
- **Validación:** Formulario visualmente completo, cards de contacto con links reales.

---

## ETAPA 3 — Contenido real

### Spec_T17: Contenido de About Me (ES/EN)
- **Objetivo:** Cargar contenido real extraído de tus CVs: perfil, experiencia (UNSL, RunaId, Secretaría de Deportes), educación, becas, congresos, skills e idiomas.
- **Validación:** Revisás el texto final en ambos idiomas antes de mergear.

### Spec_T18: Contenido de los 3 proyectos
- **Objetivo:** Cargar como entradas de Content Collections:
  1. **FabRiBau** — este mismo portfolio. Proyecto meta/autorreferencial: Astro, Tailwind, i18n, Content Collections, diseño neobrutalista, Resend + Cloudflare Turnstile. **Status: "En desarrollo"** (badge visible en la card y en el detalle).
  2. **Asistente Conversacional de IA para Prevención de Apuestas Online** — RAG, LLM, trabajo final de carrera, publicado en CoNaIISI 2025 y Congreso de Salud Mental Mendoza.
  3. **Sistema de Olimpiadas Escolares de Atletismo** — Java, Spring Boot, Next.js, MySQL, para la Secretaría de Deportes de San Luis.
- **Nota técnica:** el schema de la colección `proyectos` (Spec_T5) debe incluir un campo `status` (ej. `"en-desarrollo" | "completado"`) para soportar este badge desde el inicio.
- **Validación:** Cards y páginas de detalle con contenido real, bilingüe. La card de FabRiBau muestra el badge de estado correctamente.

### Spec_T19: Foto profesional para About Me
- **Objetivo:** Integrar la foto profesional (la provee Fabrizio directamente) en la sección de About Me, con el tratamiento visual definido en la guía de estilo (Spec_T8) — por ejemplo, marco/borde grueso, posible filtro de color acorde a la paleta.
- **Validación:** La foto se ve correctamente en ambos temas (claro/oscuro) y tamaños de pantalla.

> **Nota sobre el Blog:** no se cargan posts iniciales en esta etapa. La colección `blog` queda funcional (Spec_T5/T15) pero vacía o con un único post placeholder de prueba, para no bloquear el desarrollo. Los posts reales los escribe Fabrizio más adelante, a medida que surja contenido para compartir (reflexiones técnicas, congresos, docencia, etc.), usando la estructura ya creada.

---

## ETAPA 4 — Formulario de contacto (Resend + anti-bot)

### Spec_T20: Endpoint de envío con Resend
- **Objetivo:** API route (Astro endpoint / Cloudflare Function) que reciba el form y envíe el email vía Resend, usando el dominio ya verificado.
- **Validación:** Envío de prueba llega correctamente a tu casilla.

### Spec_T21: Protección anti-bot con Cloudflare Turnstile
- **Objetivo:** Integrar Turnstile en el formulario, validar el token server-side antes de enviar con Resend.
- **Validación:** Un envío sin pasar el challenge de Turnstile es rechazado.

### Spec_T22: Validación y UX del formulario
- **Objetivo:** Validación client + server side, estados de loading/éxito/error, mensajes claros.
- **Validación:** Probar casos de error (campos vacíos, email inválido, fallo de red) y confirmar feedback correcto.

---

## ETAPA 5 — Performance, SEO y QA final

### Spec_T23: SEO técnico
- **Objetivo:** Meta tags, Open Graph, sitemap.xml, robots.txt, hreflang para ES/EN.
- **Validación:** Sitemap accesible, meta tags correctos por página (revisar con herramienta tipo Meta Tags Checker).

### Spec_T24: Optimización de performance
- **Objetivo:** Auditoría Lighthouse, optimización de imágenes (formatos modernos, lazy loading), carga de fuentes optimizada.
- **Validación:** Lighthouse >90 en Performance, Accessibility, Best Practices y SEO.

### Spec_T25: QA cross-browser y responsive
- **Objetivo:** Verificar el sitio en Chrome/Firefox/Safari y en mobile/tablet/desktop.
- **Validación:** Checklist de QA sin bugs visuales críticos.

### Spec_T26: Deploy final
- **Objetivo:** Deploy de producción definitivo en `fabribau.tech`, verificación end-to-end (formulario incluido).
- **Validación:** Sitio 100% funcional en producción. `AGENTS.md` actualizado con el checklist final de todas las etapas.

---

## Pendientes resueltos
- [x] **FabRiBau** = este portfolio, status "En desarrollo".
- [x] Foto profesional: la provee Fabrizio directamente (Spec_T19).
- [x] Blog: sin posts iniciales, se escriben a demanda más adelante.
- [x] `AGENTS.md`: creado en Spec_T2, se actualiza al cierre de cada etapa.

## Pendientes a resolver antes/durante el proceso
- [ ] Validar la dirección visual de Spec_T8 (y los diseños de Stitch, si se usan) antes de construir componentes.
