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
<div class="my-6 p-4 border-3 border-black bg-bg-surface-light shadow-brutal flex flex-col items-center justify-center text-center dark:border-white dark:bg-bg-surface-dark not-prose">

![Logo Oficial de las Olimpíadas Escolares de Atletismo (OLESA)](../../../assets/proyectos/olimpiadas/logo.png)

<span class="font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark mt-2 block">
  Secretaría de Deportes — Gobierno de la Provincia de San Luis
</span>

</div>

## 1. Resumen Ejecutivo

Sistema integral de gestión de torneos y cómputo atlético desarrollado para la Dirección de Deporte Comunitario de la Secretaría de Deportes de San Luis. Automatizó el ciclo completo de las **Olimpíadas Escolares de Atletismo (OLESA)** —desde la ingesta heterogénea de datos hasta el sorteo algorítmico de series y el cómputo de puntos por colegio—, **reduciendo la duración de la competencia de 3 días a una única jornada de 8 horas** y procesando a más de **5.000 estudiantes de 100+ instituciones** en sus ediciones 2024 y 2025.

---

## 2. El Problema: El Cuello de Botella Operativo

La organización provincial de atletismo escolar abarca tres categorías formativas (U14, U16 y U20) distribuidas en múltiples etapas regionales y una final provincial.

### Limitaciones del proceso previo
* **Jornada previa colapsada:** El administrador del torneo debía dedicar un día completo previo a transcribir manualmente inscripciones desde fuentes dispersas, verificar restricciones y confeccionar a mano las planillas de jueces.
* **Sobrecarga logística gubernamental:** Debido a la lentitud del cálculo manual de marcas, clasificaciones y cómputo por escuelas, el torneo se dividía forzosamente en 3 días (un día por categoría), triplicando costos públicos en transporte de delegaciones, viandas y hospedaje.
* **Brecha digital y operativa:** Coexistían dos realidades de inscripción: el sistema web provincial ("Juegos Intercolegiales") que exportaba CSVs, y planillas Excel enviadas por canales informales, utilizadas tanto por escuelas rurales sin conectividad como por profesores que por diversos motivos no pudieron cargar las inscripciones en la plataforma web.

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
        Ingesta masiva transaccional atómica (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">@Transactional</code>)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          ✓ Justificación
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Cada fila del archivo (CSV o Excel) requería un flujo <em>upsert</em>: verificar o crear el atleta, asociar su colegio y registrar la prueba validando topes reglamentarios. Toda la carga se procesa bajo una única unidad transaccional en MySQL para evitar estados corruptos o inscripciones a medias.
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Alternativa Descartada
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Procesamiento cliente o scripts sueltos:</strong> Descartado por falta de integridad referencial y riesgo de inconsistencias ante fallos de conexión o formatos inválidos.
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
          ✓ Justificación
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Se implementó un algoritmo propio en el backend: calcula <code>N = ceil(atletas / andariveles)</code>, agrupa por institución y distribuye en <em>round-robin</em> inverso (<code>S1, S2, ..., Sn</code>) para garantizar que atletas del mismo colegio no compitan entre sí en series. En finales, asigna andariveles según el estándar oficial de World Athletics (carriles <code>4, 5, 3, 6, 2, 7, 1, 8</code> según mejores marcas).
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Alternativa Descartada
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Sorteo aleatorio o asignación manual asistida:</strong> Descartado por introducir sesgo humano y retrasar el inicio de las pruebas en pista.
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
          ✓ Justificación
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          El backend en Spring Boot se mantuvo enfocado exclusivamente en lógica de negocio, validaciones y persistencia ACID. La generación de planillas reglamentarias en PDF (<code>@react-pdf/renderer</code>) y actas finales en Word (<code>docx</code>) se delegó al cliente en Next.js.
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Alternativa Descartada
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Generación de documentos en servidor (JasperReports / Apache POI pesado):</strong> Descartado para no saturar memoria RAM ni CPU en el servidor VPS ante descargas concurrentes.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. Arquitectura del Sistema

El sistema fue diseñado como un backend desacoplado en **Java / Spring Boot** con persistencia en **MySQL**, consumido por una SPA administrativa en **Next.js** y empaquetado con **Docker Compose** en un VPS Linux (Ubuntu), priorizando simplicidad operativa y costos acotados para el sector público.

### Flujo de Datos y Pipeline del Torneo

<div class="my-6 border-3 border-black bg-[#231e17] p-3 shadow-brutal dark:border-white not-prose">

![Diagrama de Arquitectura — Flujo de Datos y Pipeline OLESA](../../../assets/proyectos/olimpiadas/OLESA_1.excalidraw.svg)

<span class="font-mono text-xs text-zinc-400 mt-2 block text-center">
  Figura 1: Arquitectura funcional del pipeline OLESA (Ingesta masiva, procesamiento algorítmico, operación híbrida y cómputo).
</span>

</div>

#### Desglose del flujo en 4 etapas:
1. **Ingesta heterogénea:** Unificación de entradas mediante CSV (sistema provincial) y planillas Excel (escuelas rurales y docentes con dificultades en la plataforma web).
2. **Núcleo transaccional y algorítmico (Spring Boot):** Saneamiento y deduplicación atómica (`@Transactional`), seguido por el motor de dominio que distribuye series en *round-robin* (anti-colisión por colegio) y asigna andariveles.
3. **Modelo operativo híbrido (Resiliencia Offline):** Generación de planillas PDF impresas para jueces en campo (cero dependencia de red en pista) y carga supervisada en la mesa de control mediante la SPA en Next.js.
4. **Cómputo en vivo y resultados:** Clasificación automática a finales provinciales, acumulación de puntos por institución y emisión inmediata de actas oficiales (DOCX/PDF).

---

### Modelado de Dominio: Polimorfismo de Pruebas y Pistas

Para reflejar fielmente las reglas atléticas sin acoplar el sistema a una pista específica, el dominio se estructuró mediante una jerarquía polimórfica que desacopla la disciplina de la infraestructura física:

* **Carreras de pista con andarivel (Velocidad — 80m, 100m):** Requieren partición algorítmica en series, asignación reglamentaria de andariveles según la capacidad de la pista sede (6, 8 o 10 andariveles) y clasificación por tiempos hacia finales.
* **Carreras de pista sin andarivel (Medio fondo y fondo):** Parten en grupo único o salida escalonada en carril libre, sin restricción rígida de andariveles individuales.
* **Pruebas de campo (Lanzamiento de bala, Salto en largo):** No utilizan andariveles; operan mediante rondas de intentos sucesivos (marcas válidas o nulas) donde la clasificación final se determina por la mejor marca individual registrada.

Este diseño orientado al dominio (DDD) permitió reutilizar el mismo motor de cómputo en diferentes sedes provinciales con pistas de 6 u 8 andariveles sin alterar la lógica de negocio ni el esquema de base de datos.

---

## 5. Desafío Técnico Central y Trade-offs

### Tensión: Entorno de pista sin conectividad vs. Centralización de cómputos

* **El dilema:** En las pistas de atletismo provinciales, la conectividad móvil de los jueces en campo era nula o inestable, impidiendo el uso de aplicaciones web concurrentes en la pista.
* **La resolución pragmática:** Se adoptó un **modelo híbrido digital-físico**. El sistema generaba e imprimía de forma automatizada las planillas oficiales de campo en blanco con las series y andariveles ya sorteados. Los jueces registraban marcas y firmas en papel (manteniendo respaldo reglamentario oficial) y una mesa de control centralizada las volcaba en el sistema en tiempo real.
* **Trade-off asumido:** Se aceptó un paso de carga manual en la mesa de control a cambio de **cero dependencia de red en pista y total validez reglamentaria y fiscal** de las actas firmadas.

---

## 6. Resultados e Impacto Cuantitativo

* **De 1 día a menos de 1 hora:** La ingesta y validación de inscripciones, asignación de series y generación de planillas pasó de una jornada entera de trabajo manual a menos de 60 minutos.
* **De 3 días a 1 única jornada:** Las tres categorías (U14, U16 y U20) compitieron en un único día de 8 horas, eliminando demoras en el armado de series y clasificación a finales.
* **Impacto logístico directo:** Reducción drástica del gasto provincial en transporte de delegaciones escolares, viandas y hospedaje.
* **Escala en producción:** Procesó a más de **5.000 estudiantes de 100+ instituciones** educativas en las ediciones oficiales 2024 y 2025.
* **Automatización de finales:** Clasificación automática de los 2 mejores atletas de cada región para conformar los 16 finalistas provinciales y asignación de puntajes a los 8 primeros puestos para premiación por colegios.

---

## 7. Qué Haría Distinto Hoy

Si rediseñara la solución hoy, implementaría una arquitectura **Offline-First (PWA con sincronización en background vía CRDTs o IndexedDB)** para las mesas de jueces de campo. Esto permitiría a los jueces registrar intentos y nulos directamente en tablets en el campo de juego sin conexión, sincronizándose automáticamente con la mesa central en cuanto recuperaran señal, eliminando el paso intermedio de la transcripción manual.