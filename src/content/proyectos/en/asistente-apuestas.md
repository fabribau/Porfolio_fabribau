---
title: 'AI Assistant for Online Gambling Prevention'
description: 'Conversational agent powered by RAG architecture for early detection and prevention of online gambling harm in youth: distributed architecture, real-time inference, and clinical privacy by design.'
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

## 1. Executive Summary

Intelligent conversational system powered by RAG architecture developed as our **Informatics Engineering Capstone Project (Thesis)** at Universidad Nacional de San Luis (UNSL), graded with the maximum score **10/10 (Honors)** by the examination board. Designed collaboratively with researchers from the Faculty of Psychology for the *University Problematic Consumption and Addictive Behavior Prevention Program*, it provides a confidential, empathetic, and psychoeducational channel for early risk detection and prevention of digital gambling addiction in adolescents, empirically validated in field tests with 50+ concurrent users.

---

## 2. The Problem: Digital Addiction and the Stigma Barrier

The widespread proliferation of virtual wallets, unauthorized digital casinos, and gamified sports betting platforms has sparked an emergent crisis of gambling addiction and debt among high school and university students.

### Prior Constraints and Operational Frictions
* **Inaccessibility and Institutional Stigma:** Traditional institutional channels (in-person lectures, addiction telephone hotlines) experience high rejection rates from teenagers due to fears of disciplinary action, breach of privacy, or parental scrutiny.
* **Unaddressed Cognitive Biases:** Youths fall prey to cognitive fallacies amplified by gamified interfaces (*illusion of control*, *gambler's fallacy*), lacking accessible digital tools that debunk false probabilistic beliefs in their own language.
* **Lack of Empirical Metrics for Psychological Research:** The multidisciplinary mental health team lacked standardized mechanisms to collect field metrics (dialogue patterns, emotional indicators, and risk levels) without compromising anonymity or violating personal data protection regulations (AAIP / Law 25.326).

---

## 3. Key Engineering Decisions

<div class="my-6 space-y-4 not-prose">
  <!-- Card 1 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-yellow px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        01
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Decoupled Distributed Architecture: Next.js (Vercel) + Dedicated Python Server (UNSL)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          Engineering Rationale
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          The conversational assistant requires sub-second latency and real-time streaming to retain youth engagement on mobile. Heavy NLP Transformer analysis (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">pysentimiento</code>, emotion detection, risk scoring, and Excel reporting) is computationally intensive. Decoupling both workloads prevents heavy batch jobs from blocking the web event loop or inflating serverless compute costs.
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Unified Python Monolith (FastAPI/Streamlit) or Next.js synchronous processing:</strong> Discarded due to severe latency degradation in user chat during concurrent statistical batch calculations.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-cyan px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        02
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Selection of Gemini 2.5 Flash with Native Reasoning
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-cyan block mb-1 font-mono">
          Engineering Rationale
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Grounded in independent benchmarks from <em>Artificial Analysis</em> (August 2025), this model occupied the optimal Pareto frontier: highest output token generation speed to sustain fluent real-time dialogues, an intelligence index score of 58 with integrated reasoning to follow clinical boundaries, and sustainable operational costs for a public university.
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Self-hosted Local LLMs (Llama 3 / Mistral) or Heavy Frontier Models (GPT-4o / Claude Opus):</strong> Local deployment required cost-prohibitive GPU hardware for 50+ concurrent users; frontier models multiplied token costs with negligible benefits for short guidance sessions.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-lime px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        03
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Pre-chunking Markdown Normalization + Adaptive Overlap (600 chars)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-lime block mb-1 font-mono">
          Engineering Rationale
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Clinical psychology manuals and regulatory PDFs feature complex structural elements (multi-columns, tables, repetitive headers) that corrupt embeddings if parsed naively. Normalizing documents to Markdown beforehand preserves structural hierarchy, while 600-character sentence-boundary chunking with overlap prevents severing key diagnostic definitions.
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Raw PDF text extraction or rigid fixed-size token chunking:</strong> Discarded due to semantic false positives and hallucination risks caused by split clinical concepts.
        </p>
      </div>
    </div>
  </div>

  <!-- Card 4 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-purple px-2 py-0.5 font-mono text-xs font-bold text-white shadow-brutal-sm dark:border-white">
        04
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Privacy by Design (AAIP) + At-Rest Encryption (AES-256-GCM)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-purple block mb-1 font-mono">
          Engineering Rationale
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Compliant with Law 25.326 and AAIP Responsible AI guidelines, the system operates with anonymous public access (no registration required) and ephemeral credentials for school interventions. All stored messages and session telemetry are encrypted at rest using AES-256-GCM with segregated keys.
        </p>
      </div>
      <div class="border-l-3 border-accent-purple bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          Discarded Alternative & Trade-off
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Plaintext storage or mandatory registration via email/national ID:</strong> Discarded to adhere strictly to data minimization and prevent teenage apprehension when reporting gambling habits.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. System Architecture

The solution operates as a distributed multi-node topology: a serverless web frontend on **Next.js** deployed on the **Vercel** Edge Network orchestrating conversational state and streaming via the **Vercel AI SDK**, connected to a serverless **PostgreSQL instance with the pgvector extension on NeonDB** co-located in the same region to minimize round-trip times (RTT). An on-premise **Python** backend server hosted within UNSL physical infrastructure performs asynchronous NLP and batch statistical processing.

### Physical Deployment Architecture

<div class="my-8 flex flex-col items-center not-prose">
  <div class="w-full max-w-xl border-3 border-black bg-white p-1 shadow-brutal dark:border-white">

![System Deployment Diagram](../../../assets/proyectos/asistente-apuestas/diagrama-despliegue.png)

  </div>
  <span class="mt-2 block max-w-xl text-center font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark">
    Figure 1: Infrastructure Deployment Diagram (Next.js on Vercel, on-premise Python server at UNSL, PostgreSQL/pgvector on NeonDB, and third-party APIs).
  </span>
</div>

---

### RAG Inference Pipeline & Data Flow

<div class="my-8 flex flex-col items-center not-prose">
  <div class="w-full max-w-xl border-3 border-black bg-white p-1 shadow-brutal dark:border-white">

![Data Flow Diagram — RAG Pipeline](../../../assets/proyectos/asistente-apuestas/flujo-datos-rag.png)

  </div>
  <span class="mt-2 block max-w-xl text-center font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark">
    Figure 2: Conversational assistant data flow (Ingestion, semantic vector retrieval, ethical guardrail injection, and real-time generation).
  </span>
</div>

#### 4-Phase Interaction Lifecycle:
1. **Document Ingestion & Chunking:** Normalization of clinical literature to Markdown, adaptive 600-character chunking with semantic overlap, and high-dimensional embedding generation.
2. **Contextual Retrieval:** Nearest-neighbor similarity search via pgvector to fetch the most relevant clinical fragments matching the student's query.
3. **Guardrail Injection & Assisted Generation:** Dynamic prompt assembly (Ethical System Prompt + Dialogue History + Pre-session Form + Retrieved Chunks) and token streaming generation powered by Gemini 2.5 Flash.
4. **Asynchronous NLP & Audit Trail:** AES-256-GCM symmetric encryption for database persistence and batch classification in the Python server using `pysentimiento` to track polarity, emotions, and risk markers for researchers.

---

## 5. Core Technical Challenge & Trade-offs

### Tension: Conversational Empathy with LLMs vs. Strict "No Clinical Diagnosis" Rule

* **The Dilemma:** Large language models inherently tend to please users and offer unsolicited classifications ("you show symptoms of moderate gambling addiction"), which represented a critical ethical hazard when serving minors in mental health contexts.
* **The Pragmatic Resolution:** Implemented a **context engineering architecture with strict ethical guardrails** within the System Prompt. The model is explicitly prevented from issuing psychiatric diagnoses or prescriptions; its scope is strictly restricted to non-judgmental active listening, probability debunking, and active referral to official healthcare networks and local support centers in San Luis.
* **Accepted Trade-off:** Prioritized **clinical safety and ethical compliance** over unrestricted generation freedom, constraining the output space while ensuring a trusted, psychologist-approved environment.

---

## 6. Quantitative Results & Real-World Impact

* **Academic Distinction (10/10):** Defended with maximum academic marks and special honors at UNSL.
* **Stress-Tested in Production (50+ Concurrent Users):** Validated in real classroom interventions across high schools and university cohorts, handling **92 visitors, 125 sessions, and over 2,300 messages** without downtime or latency spikes.
* **Web Performance Metrics (Vercel Speed Insights):**
  * **Real Experience Score (RES):** 97 out of 100 points.
  * **First Input Delay (FID):** 3 ms average (98% rated excellent).
  * **Time to First Byte (TTFB):** 0.23 seconds average (96% rated excellent).
  * **Interaction to Next Paint (INP):** 96 ms average (92% rated excellent).
* **RAG Fidelity & Groundedness:** **95%** of the assistant's generated responses explicitly incorporated retrieved knowledge from the validated psychological repository.
* **User Acceptance:** Rated **4.8/5 stars** in conceptual feedback and **4.4/5** on the Likert satisfaction scale regarding perceived utility.
* **Scientific Research Transfer:** Publications and poster presentations at the **13th National Congress on Informatics Engineering (CoNaIISI 2025, Córdoba)**, the **Mendoza Mental Health Congress 2025**, and the **3rd University Problematic Consumption Conference (UNSL)**.

---

## 7. What I Would Do Differently Today

If re-architecting the solution today, I would introduce an **automated continuous evaluation pipeline for RAG using frameworks like Ragas or TruLens**, continuously tracking *faithfulness*, *context recall*, and *answer relevancy* on each knowledge base update without manual lexical matching. Additionally, I would deploy an **alternative channel via WhatsApp Cloud API or an Offline-First Progressive Web App (PWA)**, eliminating browser barriers for students in rural schools or with constrained mobile data plans.
