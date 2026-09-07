---
title: 'Tournament Engine & Live Scoring — School Athletic Olympics'
description: 'Full-stack platform for provincial track & field tournaments: high-throughput transactional ingest, algorithmic heat allocation, and live score computation.'
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
<!-- ASSET 1: OFFICIAL OLYMPICS LOGO                                   -->
<!-- Processed and optimized by Astro image service                    -->
<!-- ================================================================= -->
<div class="my-6 p-4 border-3 border-black bg-bg-surface-light shadow-brutal flex flex-col items-center justify-center text-center dark:border-white dark:bg-bg-surface-dark not-prose">

![Official Logo — School Athletic Olympics (OLESA)](../../../assets/proyectos/olimpiadas/logo.png)

<span class="font-mono text-xs text-fg-muted-light dark:text-fg-muted-dark mt-2 block">
  Provincial Sports Secretariat — Government of San Luis
</span>

</div>

## 1. Executive Summary

End-to-end sports tournament and score management system engineered for the Community Sports Directorate of San Luis, Argentina. It automated the full provincial championship lifecycle of the **School Athletic Olympics (OLESA)** —from multi-source data ingestion to deterministic heat allocation and institutional score tabulations—, **compressing a 3-day competition into a single 8-hour schedule** and processing over **5,000 student-athletes across 100+ schools** during its 2024 and 2025 editions.

---

## 2. The Operational & Logistical Bottleneck

Provincial track and field events host three age divisions (U14, U16, and U20) across regional qualifiers culminating in a provincial grand final.

### Previous Process Failures
* **Overloaded Pre-Event Days:** Tournament directors had to dedicate an entire 24-hour day prior to competition manually transcribing entries from fragmented sources, auditing eligibility rules, and assembling physical judge sheets by hand.
* **Severe Public Expenditure:** Due to sluggish manual computations for finals qualification and school aggregate scores, the championship was forcibly spread across 3 separate days (one day per category), tripling public expenditures in bus transportation, catering, and lodging.
* **Digital and Operational Divide:** The event required bridging two contrasting registration realities: an automated provincial portal exporting CSV files, and Excel spreadsheets submitted via informal channels — used both by isolated rural schools lacking connectivity and by teachers who, for various reasons, were unable to submit registrations through the provincial web system.

---

## 3. Key Architectural Decisions

<div class="my-6 space-y-4 not-prose">
  <!-- Card 1 -->
  <div class="border-3 border-black bg-bg-surface-light p-5 shadow-brutal dark:border-white dark:bg-bg-surface-dark">
    <div class="flex items-center gap-2.5 mb-3">
      <span class="border-2 border-black bg-accent-yellow px-2 py-0.5 font-mono text-xs font-bold text-black shadow-brutal-sm dark:border-white">
        01
      </span>
      <h3 class="font-display text-base sm:text-lg font-bold text-fg-primary-light dark:text-fg-primary-dark">
        Atomic Multi-Table Transactional Ingest (<code class="font-mono text-xs bg-black/5 dark:bg-white/10 px-1 py-0.5">@Transactional</code>)
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-pink block mb-1 font-mono">
          ✓ Engineering Justification
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Every file record (CSV or Excel) followed an <em>upsert</em> pipeline: check or create athlete entity, link school affiliations, and register event entries against regulation quotas. The entire batch runs within an isolated MySQL ACID transaction to prevent corrupt partial states.
        </p>
      </div>
      <div class="border-l-3 border-accent-pink bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Discarded Alternative & Why
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Client-side parsing or ad-hoc SQL scripts:</strong> Discarded due to lack of referential integrity guarantees and data corruption risks during network drops or format mismatches.
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
        Deterministic Heat & Lane Allocation Engine
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-cyan block mb-1 font-mono">
          ✓ Engineering Justification
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Custom backend engine that calculates <code>N = ceil(athletes / lanes)</code>, partitions by school, and performs snake distribution (<code>S1, S2, ..., Sn</code>) to prevent teammates from racing in the same heat. In finals, lanes are assigned strictly following World Athletics regulations (<code>lanes 4, 5, 3, 6, 2, 7, 1, 8</code> based on qualifying marks).
        </p>
      </div>
      <div class="border-l-3 border-accent-cyan bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Discarded Alternative & Why
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Random drawing or UI-assisted manual picks:</strong> Discarded due to human bias and trackside delays waiting for manual pairings.
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
        Decoupled Document Generation: JSON Payload + Client-Side Rendering
      </h3>
    </div>
    <div class="space-y-3 text-sm leading-relaxed">
      <div>
        <span class="font-bold uppercase tracking-wider text-xs text-accent-lime block mb-1 font-mono">
          ✓ Engineering Justification
        </span>
        <p class="text-fg-muted-light dark:text-fg-muted-dark">
          Spring Boot remained focused on domain validation and database transactions, exposing structured REST payloads. Official PDF score sheets (<code>@react-pdf/renderer</code>) and formal Word tournament reports (<code>docx</code>) were generated in Next.js on the client side.
        </p>
      </div>
      <div class="border-l-3 border-accent-lime bg-black/[0.03] p-3 dark:bg-white/[0.04]">
        <span class="font-bold uppercase tracking-wider text-xs text-fg-muted-light dark:text-fg-muted-dark block mb-1 font-mono">
          ✕ Discarded Alternative & Why
        </span>
        <p class="text-xs sm:text-sm text-fg-muted-light dark:text-fg-muted-dark">
          <strong>Server-side document rendering (JasperReports / heavy Apache POI):</strong> Discarded to preserve CPU and RAM on the single VPS instance during concurrent downloads.
        </p>
      </div>
    </div>
  </div>
</div>

---

## 4. System Architecture

The architecture separates concerns into a **Java / Spring Boot** REST backend with **MySQL** persistence, consumed by a responsive **Next.js** administration client. Both services are containerized via **Docker Compose** on an Ubuntu Linux VPS, optimizing cost efficiency and deployment reproducibility for public sector infrastructure.

### Tournament Pipeline & Data Flow
 
<div class="my-6 border-3 border-black bg-[#231e17] p-3 shadow-brutal dark:border-white not-prose">

![Architecture Diagram — OLESA Data Flow & Pipeline](../../../assets/proyectos/olimpiadas/OLESA_1.excalidraw.svg)

<span class="font-mono text-xs text-zinc-400 mt-2 block text-center">
  Figure 1: High-level architectural pipeline (Massive ingestion, algorithmic core, hybrid operation, and live computation).
</span>

</div>

#### 4-Stage Pipeline Breakdown:
1. **Heterogeneous Ingestion:** Reconciles entries across provincial system CSV exports and Excel sheets (accommodating rural schools and offline instructor submissions).
2. **Transactional & Algorithmic Core (Spring Boot):** Atomic validation and deduplication (`@Transactional`), feeding the domain engine for round-robin heat allocation (school anti-collision) and lane assignments.
3. **Hybrid Operating Model (Offline Resilience):** Generates pre-assigned printable PDF scorecards for track referees (zero network reliance trackside) with centralized data entry on the Next.js admin dashboard.
4. **Live Scoring & Tabulations:** Automated provincial finals qualification, school point aggregations (Top 8), and immediate compilation of official DOCX/PDF tournament records.

---

### Domain Modeling: Polymorphic Disciplines and Track Facilities

To accurately reflect official athletic regulations without tightly coupling software to a single stadium layout, the domain layer was architected around a polymorphic hierarchy decoupling sporting rules from physical facility constraints:

* **Lane-Based Track Races (Sprints — 80m, 100m):** Require algorithmic heat partitioning, lane assignments bounded by stadium capacity (6, 8, or 10 lanes), and time-based qualification into finals.
* **Non-Lane Track Races (Middle & Long Distance):** Start in mass packs or single-staggered groups on an open track, where individual lane quotas do not apply.
* **Field Trials (Shot Put, Long Jump):** Operate without running lanes; they track multiple sequential attempt rounds (recording valid distance/height marks vs. scratch fouls), sorting rankings by each athlete's single best valid attempt.

This Domain-Driven Design (DDD) approach decoupled referee scoring rules from physical track dimensions, allowing the engine to adapt dynamically across regional venues with 6 or 8 lanes without database schema adjustments or business logic rewrites.

---

## 5. Core Technical Challenge & Trade-offs

### The Tension: Field Disconnection vs. Real-Time Centralized Scrutiny

* **The Dilemma:** Athletic tracks across regional inland venues suffered from weak or non-existent mobile connectivity, making live referee tablet web apps unreliable in outdoor conditions.
* **The Pragmatic Resolution:** Implemented a **hybrid physical-digital pipeline**. The backend automatically generated and printed standardized referee scorecards with pre-assigned lanes. Field judges recorded marks and physical signatures on paper (preserving regulatory compliance), which were then batched into the web dashboard at the trackside central control desk.
* **Accepted Trade-off:** Accepted a supervised data entry step at the central desk in exchange for **zero network fragility on the track and absolute regulatory and audit integrity** of signed referee records.

---

## 6. Measurable Impact & Business Outcomes

* **From 1 Day to Under 60 Minutes:** Pre-event entry reconciliation, multi-school validation, and scorecard compilation plummeted from a full manual workday to less than one hour.
* **From 3 Days to a Single 8-Hour Session:** Enabled all 3 age divisions (U14, U16, and U20) to run consecutively on the same day without trackside scheduling logjams.
* **Direct Logistics Savings:** Significant budget reduction in regional student transportation buses, meals, and overnight accommodation for the provincial government.
* **Production Scale:** Successfully orchestrated over **5,000 student-athletes across 100+ schools** during the 2024 and 2025 championships.
* **Automated Provincial Qualifiers:** Eliminated human tabulation errors by automatically qualifying the top 2 regional athletes into the 16-competitor provincial final and computing institutional podium points across top-8 finishers.

---

## 7. What I Would Do Differently Today

If re-architecting the system today, I would adopt an **Offline-First PWA utilizing IndexedDB and background sync (via CRDTs or transactional event queues)** for trackside referee tablets. This would allow field judges to log field attempts and scratch fouls directly on devices offline, automatically syncing with the central scoring table when passing within Wi-Fi range and removing the final manual transcription step.

