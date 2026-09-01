# Guía de Comandos & Flujo de Trabajo — fabribau.tech

Guía rápida de comandos para desarrollo, verificación, tests, formateo y compilación del portfolio.

---

## 1. Instalación de Dependencias

Instalar todas las dependencias del proyecto:

```bash
npm install
```

---

## 2. Servidor de Desarrollo (Dev Mode)

Inicia el servidor de desarrollo local con recarga en caliente (HMR) y acceso habilitado para red local (`--host`):

```bash
npm run dev
```

- **URL local:** `http://localhost:4321/` (o `http://localhost:4321/es/`)
- **Acceso en red local:** Se mostrará en la terminal la IP asignada (ej. `http://192.168.x.x:4321/`).

---

## 3. Verificación de Tipos & Diagnósticos

Verificar la integridad estricta de TypeScript y las Content Collections con Astro Check:

```bash
npm run check
```

---

## 4. Tests Automatizados (Vitest)

Ejecutar la suite de pruebas unitarias (validación de formularios, esquemas Zod, sanitización de emails y traducciones):

```bash
# Ejecutar todas las pruebas una vez
npm run test

# Modo interactivo / observador (watch mode) durante el desarrollo
npm run test:watch
```

---

## 5. Formateo y Calidad de Código (Linter & Prettier)

Revisar y formatear automáticamente el código con las reglas del proyecto:

```bash
# Formatear todos los archivos (.astro, .ts, .mjs, .css, .md)
npm run format

# Ejecutar el linter (ESLint)
npm run lint
```

---

## 6. Compilación para Producción (Build)

Genera el build estático optimizado, crea el sitemap XML, procesa imágenes y prepara las funciones de Cloudflare Pages en la carpeta `dist/`:

```bash
npm run build
```

---

## 7. Previsualización del Build de Producción (Preview)

Inicia el emulador local de Cloudflare Pages (`wrangler`) para probar el build tal como funcionará en producción (incluyendo las Cloudflare Functions y endpoints API):

```bash
# 1. Asegurarse de tener el build generado previamente
npm run build

# 2. Levantar el preview local con Wrangler
npm run preview
```

- **URL por defecto de Wrangler:** `http://localhost:8788/` o `http://127.0.0.1:8788/`

---

## 8. Variables de Entorno (Local)

Para probar localmente el endpoint de contacto (`/api/contact`), crea un archivo `.env` en la raíz del proyecto con las siguientes claves:

```env
# Resend API Key (https://resend.com/api-keys)
RESEND_API_KEY=re_tu_api_key_aqui

# Casilla de correo personal de destino
CONTACT_EMAIL_TO=tu_email@ejemplo.com

# Cloudflare Turnstile (Site Key & Secret Key)
PUBLIC_TURNSTILE_SITE_KEY=tu_site_key_turnstile
TURNSTILE_SECRET_KEY=tu_secret_key_turnstile
```
