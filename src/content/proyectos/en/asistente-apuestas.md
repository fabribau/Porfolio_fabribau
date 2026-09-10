---
title: 'AI Assistant for Online Gambling Prevention'
description: 'Conversational assistant with RAG architecture for the early detection and prevention of problem gambling in young people: distributed architecture, real-time inference, and privacy-by-design.'
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

## 1. What this is about

This project was my Final Year Project (Proyecto Integrador) for my Computer Engineering degree at UNSL, and it was graded **10 out of 10**. But beyond the grade — which I won't pretend didn't make me pretty happy — it's the project I'm most proud of for what it actually means. I built it alongside researchers from the Psychology Faculty for the *University Program for the Prevention of Problematic Substance Use and Addictive Behaviors*. The result: a conversational assistant with RAG architecture that provides a confidential, empathetic, and psychoeducational channel for the early detection of risk behaviors related to digital gambling addiction in teenagers. Validated in the field with over 50 simultaneous concurrent users.

---

## 2. The problem: gambling, stigma, and a generation with no safety net

The explosive growth of digital wallets, online casinos, and sports betting platforms triggered an emerging crisis of gambling addiction and early debt among high school and university students. This isn't alarmism — it's what the psychologists I worked with documented firsthand.

### Why the problem was hard to solve with existing tools
* **Traditional channels pushed them away:** Conventional support resources — in-person talks, addiction hotlines — face strong rejection from young people. Fear of school punishment, losing privacy, or being judged by their family means teenagers simply don't use those resources. The problem goes unaddressed.
* **Nobody explained how probability actually works:** Young people fall for logical fallacies reinforced by the gamification of betting (the *illusion of control*, the *gambler's fallacy*). They had no interactive tools that could break down the math in their own language.
* **Researchers had no data:** The mental health team had no standardized way to gather empirical field metrics — conversation patterns, emotional indicators, risk levels — without violating anonymity or the ethical guidelines of Argentina's data protection authority (AAIP). No data, no way to scale the intervention.

---

## 3. Key engineering decisions

<div class="my-6 space-y-4 not-prose">
  <!-- Tarjeta 1 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-yellow px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        01
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Decoupled distributed architecture: Next.js (Vercel) + dedicated Python server (UNSL)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          Why I did it this way
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          The conversational assistant needs minimal latency and smooth streaming to hold a teenager's attention on mobile — if the response takes too long, they're gone. Text analysis with Transformers (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">pysentimiento</code>, emotion detection, irony detection, and analytical Excel exports) is CPU-intensive. Mixing both in the same process meant heavy computations would either block the web event loop or drive up serverless costs. Splitting them was the right call.
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Python monolith (FastAPI/Streamlit) or unified processing in Next.js:</strong> Ruled out due to the risk of chat latency degradation during peaks of concurrent statistical computation.
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
        Choosing Gemini 2.5 Flash with native reasoning
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-cyan block mb-1 font-mono">
          Why I did it this way
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          According to independent benchmarks from <em>Artificial Analysis</em> (August 2025), Gemini 2.5 Flash sat in the optimal quadrant: top output speed (tokens/second) to keep conversations feeling instant, a 58-point intelligence index with built-in reasoning to follow clinical guidelines, and a cost that actually makes sense for a public university. It wasn't the most powerful model on the market, but it was the right one for this problem.
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Local models (Llama 3 / Mistral) or frontier LLMs (GPT-4o / Claude Opus):</strong> Running models locally required GPU hardware well beyond what was feasible for 50+ concurrent users; frontier models drove up token costs without adding meaningful value for short guidance-oriented conversations.
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
        Markdown normalization before semantic chunking (600 chars + overlap)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-lime block mb-1 font-mono">
          Why I did it this way
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Psychology manuals and clinical guidelines in PDF come with complex layouts (two-column text, tables, footnotes) that corrupt the vectorization if ingested raw. Converting them to Markdown first preserves the document's semantic structure, and splitting into natural sentences with overlap prevents key clinical concepts from getting cut in half — which is exactly what you can't afford in a health system.
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Direct plain-text extraction from PDFs or fixed-size chunking:</strong> Ruled out for producing semantic false positives and hallucinations when clinical definitions get split in the middle.
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
        Privacy by design (AAIP) and encryption at rest (AES-256-GCM)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-purple block mb-1 font-mono">
          Why I did it this way
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Under Argentina's Law 25.326 and the AAIP's recommendations for responsible AI, the system operates with anonymous public access — no registration of any kind — and short-lived ephemeral credentials for school-based sessions. All message and metric persistence is encrypted at rest using AES-256-GCM with segregated keys. If a teenager has to create an account with their email and national ID just to ask for help, they simply won't do it. It's that simple.
        </p>
      </div>
      <div class="border-l-3 border-accent-purple bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Plaintext storage or mandatory authentication with email/national ID:</strong> Ruled out to comply with the data minimization principle and avoid mistrust from minors sharing personal gambling situations.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. System Architecture

The system runs on a distributed multi-node topology: a serverless **Next.js** web app deployed on **Vercel**'s edge network, handling the interactive UI and message streaming via the **Vercel AI SDK**, connected to a **PostgreSQL database with the pgvector extension on NeonDB** in the same geographic region to minimize round-trip times. An on-premise **Python** backend server, hosted on UNSL's physical infrastructure, handles background analytical processing.

### Infrastructure and physical deployment

<div class="my-8 flex flex-col items-center not-prose">
  <div class="w-full max-w-xl border-3 border-black bg-white p-1 shadow-brutal dark:border-white">

![System Deployment Diagram](../../../assets/proyectos/asistente-apuestas/diagrama-despliegue.png)

  </div>
  <span class="mt-2 block max-w-xl text-center font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark">
    Figure 1: Infrastructure deployment diagram (Next.js on Vercel, on-premise Python server at UNSL, PostgreSQL/pgvector on NeonDB, and external APIs).
  </span>
</div>

---

### RAG inference pipeline and data flow

<div class="my-8 flex flex-col items-center not-prose">
  <div class="w-full max-w-xl border-3 border-black bg-white p-1 shadow-brutal dark:border-white">

![Data Flow Diagram — RAG Pipeline](../../../assets/proyectos/asistente-apuestas/flujo-datos-rag.png)

  </div>
  <span class="mt-2 block max-w-xl text-center font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark">
    Figure 2: Conversational assistant data flow (ingestion, vector semantic retrieval, ethical guardrail injection, and real-time generation).
  </span>
</div>

#### The full cycle in 4 phases:
1. **Document ingestion and segmentation:** Converting clinical literature to Markdown, adaptive chunking into 600-character segments with overlap, and generating vector embeddings.
2. **Contextual retrieval:** Nearest-neighbor search via pgvector to retrieve the document fragments most semantically similar to the student's query.
3. **Guardrail injection and assisted generation:** Building the unified prompt (ethical System Prompt + conversation history + initial intake form + bibliographic chunks) and streaming the response via Gemini 2.5 Flash.
4. **Asynchronous NLP analysis and auditing:** AES-256-GCM symmetric encryption for secure storage in NeonDB, and evaluation on the Python server with `pysentimiento` to classify polarity, emotions, and risk indicators for the research team.

---

## 5. The challenge that made me think the hardest

### An LLM that wants to diagnose vs. a non-negotiable "no clinical diagnosis" rule

This was the most interesting design problem in the project, and the one that took the most hours to get right.

* **The dilemma:** Language models naturally tend to please the person they're talking to and to make confident, definitive statements. "You show signs of moderate gambling disorder" is exactly the kind of thing an unrestricted LLM might say — and in a system that serves at-risk teenagers, that was a real and critical ethical problem.
* **How I solved it:** I designed a **context engineering architecture with strict guardrails** in the System Prompt. The assistant is fully blocked from making diagnostic statements or prescriptions. Its role is limited to active and non-judgmental listening, clarifying mathematical probability myths, and guiding users toward support networks and official health centers (including geolocated resources in San Luis).
* **Trade-off accepted:** I prioritized **ethical rigor and clinical safety** over the model's expressive freedom — constraining its response boundaries, but guaranteeing a trustworthy environment backed by psychology specialists. An LLM that diagnoses is a legal and human problem. One that listens and refers people to help is a useful tool.

---

## 6. Results: the numbers

* **Perfect grade:** Approved 10/10 by the UNSL evaluation committee.
* **Stress validation (50+ concurrent users):** Held up under simultaneous load tests in school classrooms and university sessions, handling **92 visitors, 125 sessions, and over 2,300 messages** with no downtime or latency degradation.
* **Measured web performance (Vercel Speed Insights):**
  * **Real Experience Score (RES):** 97 out of 100.
  * **First Input Delay (FID):** 3 ms average (98% rated excellent).
  * **Time to First Byte (TTFB):** 0.23 seconds average (96% rated excellent).
  * **Interaction to Next Paint (INP):** 96 ms average (92% rated excellent).
* **RAG fidelity and usage:** **95%** of responses explicitly integrated content retrieved from the bibliographic knowledge base. The model didn't make things up.
* **Acceptance and usability:** Average rating of **4.8/5 stars** in conceptual feedback and **4.4/5** on the Likert scale for perceived utility.
* **Academic dissemination:** Papers and posters presented at the **13th National Congress of Computer Engineering (CoNaIISI 2025, Córdoba)**, the **Mental Health Congress (Mendoza 2025)**, and the **3rd University Conference on Health and Problematic Substance Use (UNSL)**.

---

## 7. What I'd do differently today

If I were redesigning the solution today, I'd add a **continuous automated RAG evaluation pipeline using frameworks like Ragas or TruLens**, computing *faithfulness*, *context recall*, and *answer relevancy* metrics automatically on every content update. I'd also implement an **alternative channel via WhatsApp Cloud API or an offline-capable PWA**, to remove the connectivity barrier for teenagers in rural schools or with limited data plans. Because if the channel doesn't reach where the problem is, none of it matters.
