---
title: 'Track & Field School Olympics Management System'
description: 'Full-scale web platform for athletic tournament management, automated heat generation, score sheet orchestration, and real-time results computation for the Sports Secretariat.'
pubDate: 2024-10-31
tags:
  [
    'Java',
    'Spring Boot',
    'Spring Data JPA',
    'Hibernate',
    'Next.js',
    'Material UI',
    'MySQL',
    'REST API',
  ]
status: 'completado'
featured: true
order: 3
---

## About the System

A custom sports tournament and score management system engineered for the **Community Sports Directorate of the San Luis Provincial Sports Secretariat (Argentina)**.

The platform was successfully deployed and utilized during the **2024 and 2025 provincial editions**, centralizing the competition lifecycle for more than 5,000 competing student-athletes across the province.

---

### Operational Challenges & Domain Problem

Prior to the introduction of this software, school track and field championships relied heavily on manual paperwork and decentralized spreadsheet tracking, causing significant bottlenecks during heat compilation and podium announcements.

The system eliminated these friction points by implementing:

- **Automated Heat & Lane Generation:** Algorithmic seeding and lane allocation based on official athletic federation rules, athlete age categories, and qualifying marks.
- **Rapid Trackside Results Entry:** Streamlined interfaces designed for track judges and timing officials to register marks instantly on trackside tablets.
- **Instant Standing Computations:** Real-time computation of qualifiers for semifinals, finals, and institutional school scoring rankings.
- **Standardized Official Printouts:** Automated generation and export of referee inspection sheets, start lists, and final award records.

---

### Technical Architecture & Engineering

1. **Robust & Scalable Backend:**
   - Engineered in **Java 17** using the **Spring Boot** framework.
   - Persistence layer powered by **Spring Data JPA** and **Hibernate** on a relational **MySQL** database with strict ACID transaction management to handle concurrent race submissions without race conditions.
   - Modular RESTful API delivering structured data and live report feeds.

2. **Reactive Administrative Frontend:**
   - Developed with **Next.js** and **Material UI (MUI)** component architecture.
   - Tailored responsive layouts for field tablets and laptops used by judges under outdoor lighting conditions.
   - Dynamic data grids with instant multi-criteria filtering by category, school, athletic event, and heat status.

---

### Key Responsibilities & Contributions

- **Requirements Engineering & Domain Modeling:** Direct consultation with regional sports directors and certified track and field officials.
- **Relational Schema & Architecture Design:** Entity-relationship modeling supporting complex multi-discipline competitions (sprints, hurdles, middle distance, long jump, shot put).
- **FullStack Engineering:** Full implementation of Spring Boot REST controllers, business services, data repositories, and Next.js frontend pages.
- **Live Event Operations & On-site Systems Administration:** Deployment, infrastructure monitoring, and real-time troubleshooting throughout multi-day provincial tournaments.
