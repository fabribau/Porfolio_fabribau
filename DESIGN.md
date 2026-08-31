# Guía de Estilo y Sistema de Diseño — fabribau.tech
**Autor:** Fabrizio José Riera Bauer  
**Estilo:** Neobrutalismo Moderno / High-Impact Tech  
**Fuente de verdad visual:** `DESIGN.md`

---

## 1. Filosofía de Diseño

El sistema visual de `fabribau.tech` fusiona la robustez y honestidad estructural del **Neobrutalismo** con la precisión de la **Ingeniería en Informática** y la energía de la innovación en **Inteligencia Artificial**.

Se aleja de los gradientes sutiles y las sombras etéreas del minimalismo corporativo genérico, apostando por:
- Bordes gruesos y geométricos (`3px` y `4px`).
- Sombras offset "duras" (sin desenfoque gaussiano, color `#0D0D0D` en light y `#000000` en dark).
- Paleta de colores vivos y saturados (Amarillo, Magenta, Verde Lima, Cyan) sobre fondos de alto contraste.
- Micro-interacciones mecánicas y táctiles (efecto de pulsación física al hacer clic).
- Tipografía de impacto con personalidad técnica y jerarquías agresivas.

---

## 2. Elementos Diferenciadores Propios

Para trascender el arquetipo de plantilla neobrutalista común, el diseño incorpora 4 firmas visuales distintivas:

1. **Efecto de Pulsación Táctil ("Physical Button Press")**:
   - En reposo: `box-shadow: 4px 4px 0px 0px var(--shadow-color)`.
   - Hover: `transform: translate(-1px, -1px); box-shadow: 6px 6px 0px 0px var(--shadow-color)`.
   - Active (Click): `transform: translate(4px, 4px); box-shadow: 0px 0px 0px 0px var(--shadow-color)`.
   - Simula presionar un botón mecánico real.

2. **Subrayado Resaltador ("Highlighter Marker Effect")**:
   - Palabras clave y títulos destacados usan un fondo tipo rotulador/resaltador fluorescente (`#FFE400`, `#FF3D8A`, `#B4FF39`, `#00F0FF`) con inclinación sutil (`-1deg` a `1deg`) y bordes rectos.

3. **Micro-Tilt Reactivo en Tarjetas ("Dynamic Brutal Tilt")**:
   - Al pasar el cursor por tarjetas interactivas de proyectos o artículos, la tarjeta rota levemente (`rotate-1` o `-rotate-1`), transmitiendo dinamismo sin perder legibilidad.

4. **Badges con Radar/Pulso Técnico ("Live Status Dot")**:
   - Las etiquetas de estado (ej. "En desarrollo", "Disponible para nuevos proyectos") incorporan un punto de luz con animación de onda expansiva tipo pulso de radar.

---

## 3. Paleta Cromática

### Modo Claro (Light Mode)
- **Fondo Base (`--bg-primary`):** Crema cálido `#F5F0E8` (más orgánico y legible que el blanco puro `#FFFFFF`).
- **Superficie de Tarjetas (`--bg-surface`):** Blanco `#FFFFFF`.
- **Texto Principal (`--text-primary`):** Negro carbón `#0D0D0D`.
- **Texto Secundario (`--text-muted`):** Gris oscuro `#4B5563`.
- **Bordes y Sombras (`--border-color`, `--shadow-color`):** `#0D0D0D`.

### Modo Oscuro (Dark Mode — Inspiración Gumroad/Cyber)
- **Fondo Base (`--bg-primary`):** Negro profundo `#0D0D0D`.
- **Superficie de Tarjetas (`--bg-surface`):** Carbón `#181818` / `#1F1F1F`.
- **Texto Principal (`--text-primary`):** Crema claro `#F5F0E8`.
- **Texto Secundario (`--text-muted`):** Gris medio `#9CA3AF`.
- **Bordes (`--border-color`):** Crema / Blanco `#F5F0E8`.
- **Sombras (`--shadow-color`):** Negro absoluto `#000000`.

### Acentos Saturados (Comunes a ambos modos)
| Nombre | Hex | Propósito Principal |
| :--- | :--- | :--- |
| **Amarillo Eléctrico** | `#FFE400` | Acento principal, CTAs hero, badges de advertencia/destacado |
| **Magenta / Rosa Neón** | `#FF3D8A` | Acento secundario, enlaces activos, badges de blog/investigación |
| **Verde Lima** | `#B4FF39` | Estados activos ("En desarrollo", "Online", disponibilidad) |
| **Cyan Futurista** | `#00F0FF` | Tags de IA/RAG, métricas, botones secundarios |
| **Naranja Vibrante** | `#FF6B00` | Tags especiales, avisos |
| **Púrpura / Violeta** | `#8B5CF6` | Badges académicos y universitarios |

---

## 4. Tipografía

El sistema tipográfico combina una display geométrica audaz con una mono técnica estructurada:

- **Títulos y Display:** `Space Grotesk` (Pesos: 700 Bold, 900 Black).  
  *Uso:* Logotipo, encabezados H1-H3, cifras clave, botones principales.
- **Cuerpo y Lectura:** `Inter` / `system-ui` / `sans-serif` (Pesos: 400 Regular, 500 Medium, 600 SemiBold).  
  *Uso:* Párrafos de proyectos, artículos de blog, descripciones.
- **Datos Técnicos y Metadatos:** `JetBrains Mono` (Pesos: 400 Regular, 700 Bold).  
  *Uso:* Badges, tags `#tech`, fechas, snippets de código, métricas y breadcrumbs.

---

## 5. Escala de Sombras y Bordes

```css
/* Sombras Offset Duras */
--shadow-brutal-sm: 2px 2px 0px 0px var(--shadow-color);
--shadow-brutal: 4px 4px 0px 0px var(--shadow-color);
--shadow-brutal-lg: 6px 6px 0px 0px var(--shadow-color);
--shadow-brutal-xl: 8px 8px 0px 0px var(--shadow-color);

/* Bordes */
--border-standard: 3px solid var(--border-color);
--border-heavy: 4px solid var(--border-color);
```

---

## 6. Catálogo de Componentes UI Base

1. **`Button.astro`**:
   - Variantes: `primary` (amarillo), `pink`, `lime`, `cyan`, `secondary` (superficie), `outline`, `ghost`, `danger`.
   - Tamaños: `sm`, `md`, `lg`.
   - Elemento: `<a>` (cuando tiene `href`) o `<button>` nativo con soporte de tipo (`submit`, `button`, etc.) y estado `disabled`.
   - Slots: `prefix-icon`, `default` (label), `suffix-icon`.

2. **`Card.astro`**:
   - Opciones: `variant` (`default`, `yellow`, `pink`, `lime`, `cyan`, `dark`), `shadow` (`sm`, `md`, `lg`), `hoverTilt` (boolean), `as` (`article`, `div`, `section`, `a`).
   - Slots: `header`, `default`, `footer`.

3. **`Badge.astro`**:
   - Opciones: `color` (`yellow`, `pink`, `lime`, `cyan`, `purple`, `dark`, `white`), `size` (`sm`, `md`), `pulse` (boolean, añade dot con radar).

4. **`Tag.astro`**:
   - Opciones: `interactive` (boolean), `size` (`sm`, `md`), `active` (boolean). Fuente mono, prefijo `#`.

5. **`SectionHeader.astro`**:
   - Título de sección con indicador geométrico, badge numérico de paso (ej. `01`, `02`), título display y subtítulo mono.

6. **`Navbar.astro`**:
   - Barra superior sticky con bordes gruesos, logotipo tipográfico, navegación de enlaces activos, switch de idioma (`LanguagePicker`), switch de tema (`ThemeToggle`) y drawer neobrutalista para dispositivos móviles.

7. **`Footer.astro`**:
   - Pie de página con enlaces a redes (LinkedIn, GitHub, Email), copyright dinámico, badges tecnológicos y acceso a la `/style-guide`.
