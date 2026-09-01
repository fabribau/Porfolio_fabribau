---
title: 'Sistema de Olimpíadas Escolares de Atletismo'
description: 'Plataforma web integral para la administración de torneos, generación de series, gestión de planillas y cómputo de resultados en tiempo real para la Secretaría de Deportes.'
pubDate: 2024-10-31
tags: ['Java', 'Spring Boot', 'Spring Data JPA', 'Hibernate', 'Next.js', 'Material UI', 'MySQL', 'REST API']
status: 'completado'
featured: true
order: 3
---

## Sobre el Sistema

Sistema integral de gestión y cómputo deportivo diseñado y desarrollado a medida para la **Dirección de Deporte Comunitario de la Secretaría de Deportes del Gobierno de la Provincia de San Luis**. 

La plataforma fue utilizada con éxito en las **ediciones provinciales 2024 y 2025**, centralizando la administración de competencias con la participación de más de 5.000 estudiantes y atletas de toda la provincia.

---

### Desafíos y Necesidad Operativa

Previo a la implementación de este sistema, la gestión de las olimpíadas escolares se realizaba mediante planillas impresas y procesamiento manual disperso, lo cual provocaba demoras críticas en el armado de series eliminatorias y la publicación de podios. 

El proyecto resolvió estos cuellos de botella a través de:
- **Automatización de Series y Andariveles:** Generación algorítmica de heats y series según marcas previas, categorías y normativas atléticas oficiales.
- **Carga Ágil de Resultados:** Interfaz optimizada para que jueces de pista y mesa de control registren tiempos y marcas de forma instantánea.
- **Cómputo Inmediato de Posiciones:** Cálculo automatizado de clasificados a semifinales, finales y podios por prueba y por institución escolar.
- **Generación de Planillas Oficiales:** Emisión estandarizada de planillas de control para fiscales de pista y delegados.

---

### Arquitectura Técnica & Componentes

1. **Backend Robusto & Escalable:**
   - Construido con **Java 17** y el framework **Spring Boot**.
   - Capa de persistencia con **Spring Data JPA** e **Hibernate** sobre una base de datos relacional **MySQL** con transacciones ACID para evitar inconsistencias en momentos de alta concurrencia.
   - API RESTful modular para el consumo de datos y reportes.

2. **Frontend Reactivo & Administrativo:**
   - Desarrollado en **Next.js** y componentes de **Material UI (MUI)**.
   - Vistas adaptadas a tablets y laptops de campo para la mesa técnica y jueces en la pista de atletismo.
   - Tablas interactivas con filtrado dinámico por categoría, institución, prueba y estado de la serie.

---

### Rol y Responsabilidades

- **Captura de requerimientos y análisis de dominio:** Trabajo conjunto con coordinadores deportivos y jueces de atletismo de la provincia.
- **Diseño de arquitectura y base de datos:** Modelado entidad-relación para pruebas de pista y campo (carreras, saltos, lanzamientos).
- **Desarrollo FullStack integral:** Implementación de endpoints REST en Spring Boot y vistas interactivas en Next.js.
- **Administración y soporte en vivo durante las jornadas:** Despliegue, monitoreo y resolución de incidencias en tiempo real durante los eventos provinciales.

