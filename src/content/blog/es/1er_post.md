---
title: '¿Qué es FabRiBau?'
description: 'Primer post para explicar un poco qué es este sitio, por qué fue construido así y las decisiones técnicas detrás de Astro + Cloudflare Pages.'
pubDate: 2026-09-09
tags: ['Astro', 'Cloudflare Pages', 'SSG', 'Neobrutalismo', 'Portfolio']
---

Hola, querido lector. Primero que nada, gracias por estar acá y más que nada por tomarte el tiempo de leer algo de lo que escribo. Este es el primer post del sitio, así que intentaré explicar qué es esto, por qué existe y algunas de las decisiones técnicas que tomé al construirlo.

---

## ¿Qué es FabRiBau?

Si lo definiéramos como Wikipedia, diría que viene del acrónimo de **Fab**rizio **Ri**era **Bau**er y busca ser mi marca personal y profesional como desarrollador. Es el mismo nombre que tengo en GitHub y este sitio cumple el rol de **portfolio**: un lugar donde voy a ir subiendo los proyectos más interesantes en los que trabajo, y donde quizá también voy a compartir algunos de los proyectos que desarrollé durante la carrera universitaria.

Pero más allá de ser un portfolio, busco que sea una forma diferente de presentarme. Una alternativa real a ese frío CV en formato Harvard de una página, optimizado para pasar filtros ATS sin pena ni gloria, y a los típicos formalismos de LinkedIn (a veces se siente como acartonado). Acá hay un poco más de contexto, de criterio y, esperemos, de personalidad.

Quería un espacio propio donde las cosas se sientan diferentes: donde pudiera mostrar no solo el código que escribo, sino las decisiones de ingeniería detrás de cada solución, mis opiniones técnicas y un poco de mi propia personalidad.

---

## ¿Qué hice efectivamente?

Construí este sitio desde cero con [Astro](https://astro.build/), apuntando a que fuera rápido, liviano y fácil de mantener. Algunas de las cosas concretas que implementé:

- **Mínimo JavaScript enviado al cliente:** gracias a la arquitectura de Astro, las páginas se sirven como HTML estático. El JS solo aparece donde realmente se necesita (el toggle de tema, el picker de idioma, el formulario de contacto).
- **Sistema de i18n bilingüe (ES/EN):** con prefijos de ruta nativos de Astro y diccionarios tipados en TypeScript. Cada página tiene su versión en español e inglés sin duplicar lógica.
- **Arquitectura tipada con TypeScript estricto y Zod:** todo el código corre bajo `strict: true` y cada proyecto o post del blog está validado mediante esquemas Zod en tiempo de build. Si falta una fecha, un tag o cualquier campo obligatorio, la compilación falla en el momento — sin sorpresas en producción.
- **Formulario de contacto con Resend y Cloudflare Turnstile:** el formulario envía los mensajes vía [Resend](https://resend.com/) (transaccional) y tiene protección anti-bot con Turnstile en lugar del clásico reCAPTCHA (sin obligar al usuario a resolver molestos captchas de semáforos o pasos peatonales).
- **Estilo Neobrutalista:** porque luego de una charla que vi en la Platzi conf tenía ganas de hacer algo fuera del denominador común de los sitios actuales. Bordes gruesos, sombras offset duras, paleta viva con variante oscura y tipografía audaz. Quizás no sea el estilo más elegante del mundo, pero definitivamente no pasa desapercibido.

---

## ¿Por qué Astro? ¿Y no NextJS + Vercel?

### SSG vs SSR vs otros

Acá se pone un poco más interesante la cosa. Descubrí **Astro** en marzo de este año y me pareció sumamente interesante la idea de **SSG** (*Static Site Generation*), donde el **HTML** se genera en el momento de la compilación (*build time*) y luego se sirve como archivos estáticos planos hiper-optimizados. Antes de seguir, hagamos una pasada rápida por las alternativas:

- **SSR (Server-Side Rendering):** Si usaron Next.js o similares, ya lo conocen. El servidor genera el HTML en cada petición, el navegador lo muestra de inmediato, y luego el JavaScript "hidrata" la página conectando el HTML con el framework del lado del cliente. Excelente para SEO y carga inicial, pero tiene el costo de la hidratación y del servidor siempre activo computando cada solicitud (lo que introduce costos de infraestructura y latencia por arranques en frío o cold starts en arquitecturas serverless) .
- **CSR (Client-Side Rendering):** Es el clásico de las SPAs en React, Vite o Vue. El servidor manda un HTML mínimo (el famoso `<div id="root"></div>`) más un buen volumen de JavaScript. El navegador descarga, ejecuta el bundle y recién ahí renderiza la UI (¿El problema? Pantallas en blanco con *spinners* de carga). Flexible para SPAs complejas, pero con impacto en el tiempo de First Contentful Paint y SEO si no se maneja bien.
- **PHP clásico:** El método noble que construyó gran parte de la web, porque sí, sigue siendo una opción viable. El servidor ejecuta código PHP, genera HTML al vuelo combinando plantillas con datos de base de datos y lo entrega listo para mostrar. Simple y directo, con el costo de que cada petición ejecuta lógica en el servidor.
- **HTML estático puro:** El clásico de toda la vida, el origen del todo. Subís tus archivos `.html` y `.css` y el servidor los entrega tal cual (épocas arcaicas pero sumamente importantes). Rapidísimo, cero complejidad, pero muy tedioso de mantener a escala y sin ningún tipo de reutilización de componentes. Inmanejable para proyectos reales a escala actualmente.

<div class="my-8 mx-auto w-full max-w-2xl border-3 border-black bg-[#1a1a1a] p-3 shadow-brutal dark:border-white not-prose">

![Comparativa visual de los métodos de renderizado: SSG, SSR y CSR](../../../assets/blogs/SSG_SSR_CSR.webp)

<span class="font-mono text-xs text-zinc-400 mt-2 block text-center">
  Figura 1: Comparativa de estrategias de renderizado — SSG, SSR y CSR — y cómo cada una sirve el HTML al navegador.
</span>

</div>

Vistas las opciones, Astro con SSG sobresale por escándalo en sitios centrados en el contenido. No es casualidad que su slogan sea *"The web framework for content-driven websites"*: portfolios, blogs, e-commerce, landing pages, documentación… todos esos sitios donde el foco no está en la funcionalidad compleja sino en mostrar información de la mejor forma posible. En estos casos el valor está en la información y la rapidez con la que el usuario puede consumirla. ¿Tiene sentido obligar al navegador a descargar 200 KB de *runtime* de React solo para leer un artículo de texto? Claramente no. Y sí, Next.js también puede generar HTML estático con SSG, pero sigue enviando al cliente todo su runtime de React y su maquinaria de hidratación aunque ninguna página sea dinámica. Astro nació pensando en cero JS por defecto; en Next.js el cero-JS es un workaround.

Lo concreto: Astro genera HTML puro en el build y lo sirve desde un CDN global. El resultado es un **Time to First Byte (TTFB) de milisegundos** porque no hay ningún servidor ejecutando código en runtime, solo archivos estáticos siendo entregados desde el edge más cercano al usuario. Además, el bundle de JavaScript que se envía al cliente es mínimo por defecto (la arquitectura de *islands* hidrata solo los componentes interactivos, no toda la página).

No por nada soluciones como **[Starlight](https://astro.build/themes/details/starlight/)** (la plantilla de documentación de Astro) son cada vez más populares, busquen el template y verán que está en todos lados...

Empresas como Google, Microsoft, OpenAI o la propia Cloudflare lo usan. Hablando de Cloudflare...

---

## Despliegue en Cloudflare Pages

En otros proyectos siempre desplegué en Vercel, principalmente porque hacía proyectos en Next.js y la integración entre ambos es excelente (tiene sentido: Vercel creó Next.js). Siendo sincero la plataforma funciona de maravilla, se integra perfecto con el ecosistema y, para qué negarlo, que su CEO (Guillermo Rauch) sea argentino siempre sumaba una dosis extra de simpatía (dato random que no pidieron, una vez estuve en videollamada con él y varios compañeros más de la universidad).

Al cambiar de framework, decidí explorar alternativas.

**Cloudflare Pages** es la plataforma de despliegue de Cloudflare para sitios estáticos y aplicaciones serverless. Funciona sobre la misma red que gestiona más del **20% del tráfico global de Internet** y tiene más de **300 puntos de presencia (PoPs)** distribuidos en el mundo, lo que significa que tus archivos estáticos se sirven desde el nodo más cercano al usuario sin configuración adicional. Para un sitio SSG como este, eso se traduce directamente en latencias bajísimas (cuando alguien visita el sitio desde San Luis, Madrid o Tokio, los datos se sirven desde el servidor físico más cercano con una latencia mínima o TTFB de pocos milisegundos).

Algunas ventajas concretas sobre Vercel para este caso de uso:

- **Ancho de banda ilimitado en el plan gratuito:** Vercel tiene límites en requests y bandwidth en el free tier que pueden ser un problema si el tráfico escala. Cloudflare Pages no los tiene para sitios estáticos.
- **Integración nativa con el ecosistema Cloudflare:** Workers, KV, R2, D1, Turnstile... Si en algún momento el sitio necesita más funcionalidad server-side, el camino de migración es natural. De hecho, ya uso Turnstile para el formulario.
- **Mejor story para sitios SSG:** Vercel tiene muchas optimizaciones pensadas para Next.js (ISR, Edge Middleware, etc.) que no aplican en un sitio completamente estático. Para Astro SSG, Cloudflare Pages es una opción más directa.

Además, a principios de este año Cloudflare compró Astro (no se divulgó el monto), así que en el mediano plazo es probable que aparezcan optimizaciones o integraciones adicionales entre ambas plataformas. No es el único motivo para elegirlo, pero tampoco es algo menor.

---

## Reflexión final

Lo interesante de todo esto es quizás no quedarse siempre en la zona de confort y añadir herramientas nuevas a la caja. Como decía un profesor, *Siempre aprendan algo nuevo, porque el saber no ocupa lugar*. A veces está bueno salir del piloto automático y preguntarse cuál es la herramienta verdaderamente adecuada para cada problema, creo que ahí hay mucho valor, más hoy en día con la inteligencia artificial que puede programar por nosotros.

Gracias por leer! Si te interesa algo de todo esto que dije, la sección de [contacto](/es/contact) siempre está disponible.