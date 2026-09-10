---
title: 'Sistema de Gestión y Cómputo — Olimpíadas de Atletismo'
description: 'Plataforma para torneos provinciales de atletismo: ingesta transaccional masiva, motor algorítmico de series y cómputo de resultados en tiempo real.'
pubDate: 2024-10-31
tags:
  [
    'Java',
    'Spring Boot',
    'MySQL',
    'Next.js',
    'Docker',
    'Material UI',
    'REST API',
  ]
status: 'completado'
featured: true
order: 3
---

<!-- ================================================================= -->
<!-- ASSET 1: LOGO OFICIAL DE LAS OLIMPÍADAS                           -->
<!-- Procesado y optimizado por el servicio de imágenes de Astro       -->
<!-- ================================================================= -->
<div class="my-8 mx-auto w-full max-w-xs sm:max-w-sm p-4 border-3 border-black bg-bg-surface-light shadow-brutal flex flex-col items-center justify-center text-center dark:border-white dark:bg-bg-surface-dark not-prose">

![Logo Oficial de las Olimpíadas Escolares de Atletismo (OLESA)](../../../assets/proyectos/olimpiadas/logo.png)

<span class="font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark mt-3 block">
  Secretaría de Deportes — Gobierno de la Provincia de San Luis
</span>

</div>

## 1. Para qué sirve esto

Hay problemas que existen desde siempre y que nadie resuelve porque "así siempre se hizo". Este fue uno de esos. Desarrollé un sistema integral de gestión y cómputo atlético para la Dirección de Deporte Comunitario de la Secretaría de Deportes de San Luis que automatizó el ciclo completo de las **Olimpíadas Escolares de Atletismo (OLESA)**: desde juntar inscripciones de mil lados distintos hasta el sorteo de series y el cálculo final de puntos por colegio. El resultado concreto: **la competencia pasó de durar 3 días a completarse en una única jornada de 8 horas**, procesando a más de **5.000 estudiantes de 100+ instituciones** en las ediciones 2024 y 2025.

---

## 2. El problema: un cuello de botella que triplicaba todo

La organización de atletismo escolar a nivel provincial abarca tres categorías (U14, U16 y U20) distribuidas en etapas regionales y una final provincial. Suena ordenado en papel. En la práctica, era un caos operativo.

### Cómo funcionaba antes
* **Un día entero perdido antes de que empezara cualquier carrera:** El administrador del torneo se la pasaba transcribiendo inscripciones a mano desde fuentes dispersas, verificando restricciones y confeccionando a mano las planillas de los jueces. Un día completo de trabajo antes de que arrancara un solo atleta.
* **El torneo se dividía en 3 días por pura lentitud logística:** Como el cálculo manual de marcas, clasificaciones y puntos por escuela era tan lento, el torneo se partía por categoría (un día por categoría). Eso significaba triplicar los costos públicos en transporte de delegaciones, viandas y hospedaje. Plata del Estado desperdiciada en un problema que tenía solución.
* **Dos realidades de inscripción que no hablaban entre sí:** Coexistían el sistema web provincial ("Juegos Intercolegiales") que exportaba CSVs, y planillas Excel enviadas por WhatsApp o mail —usadas por escuelas rurales sin conectividad o por docentes que, por lo que sea, no habían podido cargar las inscripciones en la plataforma oficial—. Alguien tenía que unificar ese desastre manualmente.

---

## 3. Decisiones clave de ingeniería

<div class="my-6 space-y-4 not-prose">
  <!-- Tarjeta 1 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-yellow px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        01
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Ingesta masiva transaccional atómica (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">@Transactional</code>)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          Por qué lo hice así
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Cada fila del archivo (CSV o Excel) necesitaba un flujo <em>upsert</em>: verificar o crear el atleta, asociarlo a su colegio y registrar la prueba validando topes reglamentarios. Si algo fallaba a mitad de camino, no podía quedar una inscripción a medias en la base. Toda la carga va bajo una única unidad transaccional en MySQL: o entra todo, o no entra nada.
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Procesamiento en cliente o scripts sueltos:</strong> Descartado. Sin integridad referencial, cualquier corte de conexión o formato inválido dejaba el estado de la base de datos en un lugar indeseable.
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
        Motor algorítmico determinístico de series y andariveles
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-cyan block mb-1 font-mono">
          Por qué lo hice así
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Implementé un algoritmo propio en el backend: calcula <code>N = ceil(atletas / andariveles)</code>, agrupa por institución y distribuye en <em>round-robin</em> inverso (<code>S1, S2, ..., Sn</code>) para garantizar que atletas del mismo colegio no compitan entre sí en la misma serie. En finales, asigna andariveles según el estándar oficial de World Athletics (carriles <code>4, 5, 3, 6, 2, 7, 1, 8</code> según mejores marcas). No hay forma de que esto salga mal por un olvido humano.
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Sorteo aleatorio o asignación manual asistida:</strong> Descartado. Introduce sesgo humano y retrasa el inicio de las pruebas en pista —exactamente el problema que estábamos tratando de eliminar—.
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
        Desacoplamiento documental: JSON estructurado + render en cliente
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-lime block mb-1 font-mono">
          Por qué lo hice así
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Mantuve el backend de Spring Boot enfocado exclusivamente en lo que le corresponde: lógica de negocio, validaciones y persistencia ACID. La generación de planillas reglamentarias en PDF (<code>@react-pdf/renderer</code>) y actas finales en Word (<code>docx</code>) la delegué al cliente en Next.js. El servidor no tiene que saber cómo se ve un documento; solo tiene que saber qué datos hay que poner en él.
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Generación de documentos en servidor (JasperReports / Apache POI pesado):</strong> Descartado para no saturar la RAM ni la CPU del VPS ante descargas concurrentes en el momento de más tráfico —justo cuando está corriendo la competencia—.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. Arquitectura del Sistema

Diseñé el sistema como un backend desacoplado en **Java / Spring Boot** con persistencia en **MySQL**, consumido por una SPA administrativa en **Next.js**, todo empaquetado con **Docker Compose** en un VPS Linux (Ubuntu). La restricción de contexto era clara: sector público, presupuesto acotado, sin tiempo para operar infraestructura compleja. La arquitectura tenía que ser simple de mantener y barata de correr.

### Flujo de datos y pipeline del torneo

<div class="my-8 mx-auto w-full max-w-2xl border-3 border-black bg-[#231e17] p-3 shadow-brutal dark:border-white not-prose">

![Diagrama de Arquitectura — Flujo de Datos y Pipeline OLESA](../../../assets/proyectos/olimpiadas/OLESA_1.excalidraw.svg)

<span class="font-mono text-xs text-zinc-400 mt-2 block text-center">
  Figura 1: Arquitectura funcional del pipeline OLESA (Ingesta masiva, procesamiento algorítmico, operación híbrida y cómputo).
</span>

</div>

#### El flujo completo en 4 etapas:
1. **Ingesta heterogénea:** Unificación de entradas desde CSV (sistema provincial) y planillas Excel (escuelas rurales y docentes que no pudieron cargar en la plataforma web).
2. **Núcleo transaccional y algorítmico (Spring Boot):** Saneamiento y deduplicación atómica (`@Transactional`), seguido por el motor de dominio que distribuye series en *round-robin* (anti-colisión por colegio) y asigna andariveles.
3. **Modelo operativo híbrido (resiliencia offline):** Generación de planillas PDF impresas para los jueces en campo —cero dependencia de red en pista— y carga supervisada desde la mesa de control vía la SPA en Next.js.
4. **Cómputo en vivo y resultados:** Clasificación automática a finales provinciales, acumulación de puntos por institución y emisión inmediata de actas oficiales (DOCX/PDF).

---

### Modelado de dominio: polimorfismo de pruebas y pistas

Para reflejar fielmente las reglas atléticas sin atarle el sistema a una pista específica, estructuré el dominio con una jerarquía polimórfica que desacopla la disciplina de la infraestructura física. En concreto, hay tres tipos de prueba con comportamientos bien distintos:

* **Carreras de pista con andarivel (Velocidad — 80m, 100m):** Requieren partición algorítmica en series, asignación reglamentaria de andariveles según la capacidad de la pista sede (6, 8 o 10 andariveles) y clasificación por tiempos hacia finales.
* **Carreras de pista sin andarivel (Medio fondo y fondo):** Parten en grupo único o salida escalonada en carril libre, sin restricción rígida de andariveles individuales.
* **Pruebas de campo (Lanzamiento de bala, Salto en largo):** No usan andariveles; operan con rondas de intentos sucesivos (marcas válidas o nulas) donde la clasificación final se determina por la mejor marca individual registrada.

Este diseño orientado al dominio (DDD) me permitió reutilizar el mismo motor de cómputo en diferentes sedes provinciales con pistas de 6 u 8 andariveles sin tocar la lógica de negocio ni el esquema de la base de datos.

---

## 5. El desafío que más me hizo pensar

### Sin internet en la pista vs. Cómputo centralizado

Este fue el trade-off más interesante de todo el proyecto. La pista de atletismo no tiene señal móvil. Punto. No hay vuelta que darle.

* **El dilema:** La conectividad de los jueces en campo era nula o inestable, así que usar una app web concurrente en pista directamente era inviable.
* **Cómo lo resolví:** Adopté un **modelo híbrido digital-físico**. El sistema genera e imprime automáticamente las planillas oficiales de campo en blanco, ya con las series y andariveles sorteados. Los jueces registran marcas y firmas en papel —lo que además mantiene el respaldo reglamentario oficial— y una mesa de control centralizada las carga en el sistema en tiempo real.
* **Trade-off asumido:** Acepté un paso de carga manual en la mesa de control a cambio de **cero dependencia de red en pista y total validez reglamentaria y fiscal** de las actas firmadas. Para el contexto, es exactamente el intercambio correcto.

---

## 6. Resultados: números concretos

* **De 1 día a menos de 1 hora:** La ingesta y validación de inscripciones, asignación de series y generación de planillas pasó de una jornada entera de trabajo manual a menos de 60 minutos.
* **De 3 días a 1 única jornada:** Las tres categorías (U14, U16 y U20) compitieron en un único día de 8 horas. Sin demoras en el armado de series ni en la clasificación a finales.
* **Impacto logístico directo:** Reducción drástica del gasto provincial en transporte de delegaciones escolares, viandas y hospedaje. No es menor: eso es plata pública que deja de gastarse.
* **Escala en producción:** Procesó a más de **5.000 estudiantes de 100+ instituciones** educativas en las ediciones oficiales 2024 y 2025.
* **Automatización de finales:** Clasificación automática de los 2 mejores atletas de cada región para conformar los 16 finalistas provinciales y asignación de puntajes a los 8 primeros puestos para premiación por colegios.

---

## 7. Qué haría distinto hoy

Si rediseñara la solución hoy, implementaría una arquitectura **Offline-First (PWA con sincronización en background vía CRDTs o IndexedDB)** para las mesas de jueces de campo. Eso permitiría a los jueces registrar intentos y nulos directamente en tablets sin conexión, sincronizándose automáticamente con la mesa central en cuanto recuperaran señal, eliminando el paso intermedio de la transcripción manual.