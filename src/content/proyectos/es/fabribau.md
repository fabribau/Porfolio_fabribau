---
title: 'FabRiBau — Portfolio Web Neobrutalista'
description: 'Portfolio personal interactivo construido con Astro 5, Tailwind CSS, TypeScript, i18n nativo, Content Collections validadas con Zod y despliegue serverless en Cloudflare Pages.'
pubDate: 2026-08-31
tags: ['Astro 5', 'Tailwind CSS', 'TypeScript', 'Cloudflare Pages', 'i18n', 'Neobrutalismo', 'Zod']
status: 'en-desarrollo'
featured: true
order: 2
repositoryUrl: 'https://github.com/fabribau/portfolio'
liveUrl: 'https://fabribau.tech'
---

## Sobre el Proyecto

**FabRiBau** (`fabribau.tech`) es este mismo sitio web: un proyecto meta y autorreferencial concebido como carta de presentación integral para mi perfil como **Ingeniero en Informática, Desarrollador FullStack y Docente Universitario**.

Diseñado desde cero sin recurrir a plantillas genéricas, adopta una estética **Neobrutalista moderna** que combina una paleta vibrante de alto contraste, bordes gruesos y sombras offset duras sin difuminado, con micro-interacciones mecánicas y transiciones de vista fluidas.

---

### Pilares de Arquitectura & Decisiones Técnicas

1. **Astro 5 con Arquitectura de Islas:**
   - Generación de Sitio Estático (SSG) de máxima velocidad.
   - Cero JavaScript innecesario enviado al cliente por defecto, alcanzando puntuaciones óptimas de rendimiento y accesibilidad.
   - Transiciones de página sin parpadeos mediante View Transitions API.

2. **Internacionalización (i18n) Nativa:**
   - Soporte bilingüe completo (**Español** `/es/` e **Inglés** `/en/`) con diccionarios de UI fuertemente tipados.
   - Preservación de ruta actual al alternar idiomas.

3. **Content Collections & Validación con Zod:**
   - Tipado estricto en tiempo de compilación para todos los proyectos y artículos.
   - Control granular de estados de proyecto (`en-desarrollo`, `completado`) y metadatos extensibles.

4. **Theming Claro / Oscuro sin FOUC:**
   - Detección síncrona en el `<head>` para evitar destellos de tema incorrecto (Flash of Unstyled Content).
   - Persistencia local y respeto a las preferencias del sistema operativo.

5. **Infraestructura Serverless en Cloudflare Pages:**
   - Despliegue continuo global de baja latencia con el adaptador `@astrojs/cloudflare`.
   - Próxima integración de formulario seguro con **Resend** y validación anti-bot con **Cloudflare Turnstile**.

