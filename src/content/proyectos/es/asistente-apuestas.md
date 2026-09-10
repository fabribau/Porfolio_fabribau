---
title: 'Asistente IA para Prevención de Apuestas Online'
description: 'Asistente conversacional con arquitectura RAG para la detección temprana y prevención del juego patológico en jóvenes: arquitectura distribuida, inferencia en tiempo real y privacidad clínica por diseño.'
pubDate: 2025-12-12
tags:
  [
    'Next.js',
    'Python',
    'RAG',
    'pgvector',
    'NeonDB',
    'Vercel AI SDK',
  ]
status: 'completado'
featured: true
order: 1
repositoryUrl: 'https://github.com/fabribau/novamas'
liveUrl: 'https://asistenteprevencion.vercel.app/'
thesisUrl: '/docs/Loyola_Riera_InformePI_2025.pdf'
---

## 1. De qué va todo esto

Este proyecto fue mi Trabajo Final de Carrera (Proyecto Integrador) de Ingeniería en Informática en la UNSL, y lo calificaron con **10 (diez)**. Pero más allá de la nota —que no voy a negar que me alegró bastante—, es el proyecto del que más orgulloso estoy por lo que implica. Lo desarrollé junto con investigadores de la Facultad de Psicología para el *Programa Universitario de Prevención de Consumos Problemáticos y Conductas Adictivas*. El resultado: un asistente conversacional con arquitectura RAG que ofrece un canal confidencial, empático y psicoeducativo para la detección temprana de conductas de riesgo frente a la ludopatía digital en adolescentes. Validado en campo con más de 50 usuarios concurrentes simultáneos.

---

## 2. El problema: apuestas, estigma y una generación sin red de contención

El crecimiento explosivo de billeteras virtuales, casinos en línea y plataformas de apuestas deportivas generó una crisis emergente de ludopatía y endeudamiento temprano en estudiantes secundarios y universitarios. No es alarmismo: es lo que documentaron los psicólogos con los que trabajé.

### Por qué el problema era difícil de resolver con lo que ya existía
* **El canal institucional los espantaba:** Los canales tradicionales de contención —charlas presenciales, líneas telefónicas de adicciones— sufren un elevado rechazo juvenil. El miedo a la sanción escolar, a perder privacidad o al juicio familiar hace que el adolescente directamente no use esos recursos. El problema queda sin atender.
* **Nadie les explicaba cómo funcionan las probabilidades:** Los jóvenes caen en falsedades lógicas reforzadas por la gamificación de las apuestas (la *ilusión de control*, la *falacia del apostador*). No tenían herramientas interactivas que desmitificaran la matemática en su propio lenguaje.
* **Los investigadores no tenían datos:** El equipo de salud mental no disponía de un método estandarizado para recopilar métricas empíricas de campo —patrones de diálogo, indicadores emocionales, niveles de riesgo— sin vulnerar el anonimato ni las directrices éticas de la AAIP. Sin datos, sin posibilidad de escalar la intervención.

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
        Arquitectura distribuida desacoplada: Next.js (Vercel) + Servidor Python dedicado (UNSL)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          Por qué lo hice así
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          El asistente conversacional necesita latencia mínima y streaming fluido para retener la atención de jóvenes en mobile —si la respuesta tarda, se van—. El análisis de texto con Transformers (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">pysentimiento</code>, detección de emociones, ironía y exportación analítica a Excel) demanda bastante CPU. Mezclar ambas cosas en el mismo proceso hacía que los cálculos pesados bloquearan el event loop web o encarecieran el consumo serverless. Separarlos fue la decisión más sana.
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Monolito en Python (FastAPI/Streamlit) o procesamiento unificado en Next.js:</strong> Descartado por el riesgo de degradación de latencia en el chat durante picos de cálculo estadístico concurrente.
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
        Selección de Gemini 2.5 Flash con razonamiento nativo
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-cyan block mb-1 font-mono">
          Por qué lo hice así
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Según los benchmarks independientes de <em>Artificial Analysis</em> (agosto 2025), Gemini 2.5 Flash estaba en el cuadrante óptimo de equilibrio: máxima velocidad de salida (tokens/segundo) para mantener la inmediatez del diálogo, índice de inteligencia de 58 puntos con razonamiento integrado para acatar directrices clínicas, y un costo operativo viable para una universidad pública. No era el modelo más potente del mercado, pero era el correcto para este problema.
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Modelos locales (Llama 3 / Mistral) o LLMs frontera pesados (GPT-4o / Claude Opus):</strong> La ejecución local requería servidores con hardware GPU prohibitivo para 50+ concurrentes; los modelos frontera encarecían los tokens sin aportar valor diferencial en diálogos breves de orientación.
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
        Normalización a Markdown previa al chunking semántico (600 car. + solapamiento)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-lime block mb-1 font-mono">
          Por qué lo hice así
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Los manuales de psicología y guías clínicas en PDF vienen con estructuras complejas (doble columna, tablas, pies de página) que distorsionan el vectorizado si se ingieren en crudo. Convertirlos primero a Markdown conserva la semántica del documento, y cortar en oraciones naturales con solapamiento evita fracturar conceptos clínicos clave a la mitad —que es exactamente lo que no querés en un sistema de salud—.
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Ingesta directa de texto plano de PDFs o chunking rígido por tamaño fijo:</strong> Descartado por generar falsos positivos semánticos y alucinaciones al partir definiciones clínicas a la mitad.
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
        Privacidad por diseño (AAIP) y cifrado en reposo (AES-256-GCM)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-purple block mb-1 font-mono">
          Por qué lo hice así
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Bajo la Ley 25.326 y las recomendaciones de la AAIP para IA responsable, el sistema opera con acceso público anónimo —sin registro de ningún tipo— y credenciales temporales efímeras para las intervenciones escolares. Toda la persistencia de mensajes y métricas se cifra en reposo con AES-256-GCM con claves segregadas. Si un adolescente tiene que crearse una cuenta con mail y DNI para pedir ayuda, simplemente no lo hace. Así de simple.
        </p>
      </div>
      <div class="border-l-3 border-accent-purple bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Alternativa Descartada & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Almacenamiento en texto plano o autenticación obligatoria con correo/DNI:</strong> Descartado para cumplir con el principio de minimización de datos y evitar desconfianza en menores al relatar situaciones personales de juego.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. Arquitectura del sistema

El sistema opera bajo una topología distribuida multi-nodo: una aplicación web serverless en **Next.js** desplegada sobre el edge de **Vercel** que gestiona la interfaz interactiva y el streaming de mensajes vía el **Vercel AI SDK**, enlazada a una base de datos **PostgreSQL con extensión pgvector en NeonDB** ubicada en la misma región geográfica para asegurar tiempos de ida y vuelta mínimos. Un servidor backend on-premise en **Python**, alojado en la infraestructura física de la UNSL, se ocupa del procesamiento analítico en segundo plano.

### Infraestructura y despliegue físico

<div class="my-8 flex flex-col items-center not-prose">
  <div class="w-full max-w-xl border-3 border-black bg-white p-1 shadow-brutal dark:border-white">

![Diagrama de Despliegue del Sistema](../../../assets/proyectos/asistente-apuestas/diagrama-despliegue.png)

  </div>
  <span class="mt-2 block max-w-xl text-center font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark">
    Figura 1: Diagrama de Despliegue de la infraestructura (Next.js en Vercel, servidor Python on-premise en UNSL, PostgreSQL/pgvector en NeonDB y APIs externas).
  </span>
</div>

---

### Pipeline de inferencia RAG y flujo de datos

<div class="my-8 flex flex-col items-center not-prose">
  <div class="w-full max-w-xl border-3 border-black bg-white p-1 shadow-brutal dark:border-white">

![Diagrama de Flujo de Datos — Pipeline RAG](../../../assets/proyectos/asistente-apuestas/flujo-datos-rag.png)

  </div>
  <span class="mt-2 block max-w-xl text-center font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark">
    Figura 2: Flujo de datos del asistente conversacional (Ingesta, recuperación semántica vectorial, inyección de directrices éticas y generación en tiempo real).
  </span>
</div>

#### El ciclo completo en 4 fases:
1. **Ingesta y segmentación documental:** Conversión de literatura clínica a Markdown, particionado adaptativo en chunks de 600 caracteres con solapamiento y generación de embeddings vectoriales.
2. **Recuperación contextual (Retrieval):** Búsqueda de vecinos más cercanos mediante pgvector para recuperar los fragmentos documentales con mayor similitud semántica respecto a la consulta del estudiante.
3. **Inyección de guardrails y generación asistida:** Construcción del prompt unificado (System Prompt ético + Historial de conversación + Formulario inicial previo + Chunks bibliográficos) y generación de respuesta en streaming vía Gemini 2.5 Flash.
4. **Análisis NLP asíncrono y auditoría:** Cifrado simétrico AES-256-GCM para almacenamiento seguro en NeonDB y evaluación en el servidor Python con `pysentimiento` para clasificar polaridad, emociones e indicadores de riesgo para los investigadores.

---

## 5. El desafío que más me hizo pensar

### Un LLM que quiere diagnosticar vs. una regla innegociable de "no diagnóstico clínico"

Este fue el problema de diseño más interesante y el que más horas me llevó resolver bien.

* **El dilema:** Los modelos de lenguaje tienden naturalmente a agradar al interlocutor y a generar afirmaciones taxativas. "Presentás un cuadro de ludopatía moderada" es exactamente el tipo de cosa que un LLM sin restricciones podría decir —y que en un sistema que atiende a adolescentes en situación de riesgo representaba un problema ético crítico real.
* **Cómo lo resolví:** Diseñé una **arquitectura de ingeniería de contexto con guardrails estrictos** en el System Prompt. El asistente tiene bloqueada cualquier emisión de juicios diagnósticos o prescripciones. Su rol se circunscribe a la escucha activa sin estigma, la clarificación de mentiras de probabilidad matemática y la derivación asistida a redes de contención y centros de salud oficiales (incluyendo geolocalización de dependencias en San Luis).
* **Trade-off asumido:** Prioricé el **rigor ético y la seguridad clínica** por sobre la libertad expresiva del modelo, delimitando las fronteras de respuesta pero garantizando un entorno confiable y respaldado por especialistas en psicología. Un LLM que da diagnósticos es un problema legal y humano. Uno que escucha y deriva, es una herramienta útil.

---

## 6. Resultados: números concretos

* **Calificación perfecta:** Aprobado 10/10 por el tribunal evaluador de la UNSL.
* **Validación bajo estrés (50+ usuarios concurrentes):** Soportó pruebas simultáneas en aulas escolares y comisiones universitarias, procesando **92 visitantes, 125 sesiones y más de 2.300 mensajes** sin caídas ni degradación de latencia.
* **Rendimiento web medido (Vercel Speed Insights):**
  * **Real Experience Score (RES):** 97 sobre 100 puntos.
  * **First Input Delay (FID):** 3 ms promedio (98% calificado como excelente).
  * **Time to First Byte (TTFB):** 0.23 segundos promedio (96% calificado como excelente).
  * **Interaction to Next Paint (INP):** 96 ms promedio (92% calificado como excelente).
* **Fidelidad y uso del RAG:** El **95%** de las respuestas integraron de forma explícita el contenido recuperado de la base de conocimiento bibliográfica. El modelo no se inventó nada.
* **Aceptación y usabilidad:** Calificación media de **4.8/5 estrellas** en el feedback conceptual y **4.4/5** en la escala de Likert sobre la utilidad percibida.
* **Transferencia científica:** Publicación y exposición de papers y pósters en el **13.º Congreso Nacional de Ingeniería Informática (CoNaIISI 2025, Córdoba)**, el **Congreso de Salud Mental (Mendoza 2025)** y las **3.as Jornadas Universitarias de Salud y Consumos Problemáticos (UNSL)**.

---

## 7. Qué haría distinto hoy

Si rediseñara la solución hoy, incorporaría un **pipeline de evaluación continua automatizada de RAG mediante frameworks como Ragas o TruLens**, calculando métricas de *faithfulness*, *context recall* y *answer relevancy* de forma desatendida en cada actualización de contenido. También implementaría un **canal alternativo vía WhatsApp Cloud API o una PWA con sincronización offline**, para derribar la barrera de conectividad para adolescentes de escuelas rurales o con planes de datos restringidos. Porque si el canal no llega adonde está el problema, de poco sirve.
