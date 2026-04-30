# AutoSelect Sevilla — Demo concesionario premium

[![Stack](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8)](https://tailwindcss.com)
[![Turso](https://img.shields.io/badge/Turso-libSQL-4FF8D2)](https://turso.tech)
[![Drizzle](https://img.shields.io/badge/Drizzle-ORM-c5f74f)](https://orm.drizzle.team)
[![Vercel](https://img.shields.io/badge/Vercel-deploy-black)](https://vercel.com)

Sitio cinematográfico para concesionario de vehículos de segunda mano premium.
Inventario de 13 coches reales del mercado español, hero 3D, comparador,
favoritos, WhatsApp como única vía comercial, financiación informativa y
modo claro/oscuro.

> Diseño objetivo: **Apple × Porsche × Linear**. Sobrio, espacioso, tipográfico.
> Cero look genérico de SaaS.

## Demo

URL de producción: _pendiente · vincula el repo a Vercel y se autodespliega._

## Quickstart

```bash
git clone https://github.com/Andreh33/democoches.git
cd democoches
pnpm install
cp .env.example .env.local
# pega tus credenciales de Turso en .env.local
pnpm db:push        # crea las tablas en Turso
pnpm db:seed        # inserta los 13 coches y los testimonios
pnpm dev            # http://localhost:3000
```

> Si `.env.local` no contiene `TURSO_*`, la web sigue funcionando: detecta la
> ausencia de DB y usa el dataset de seed como fallback en memoria. Útil para
> previsualizar antes de aprovisionar Turso.

## Arquitectura

```
src/
├── app/                  # App Router (RSC por defecto)
│   ├── (legal)/          # /aviso-legal, /privacidad, /cookies
│   ├── api/og/           # OG dinámica con next/og
│   ├── coches/
│   │   ├── page.tsx      # Catálogo
│   │   └── [slug]/       # Ficha con JSON-LD Vehicle
│   ├── contacto/
│   ├── financiacion/
│   ├── sobre-nosotros/
│   ├── vender-tu-coche/
│   ├── layout.tsx        # Theme + Lenis + header/footer/FAB
│   ├── not-found.tsx     # 404 personalizado
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── catalog/          # filtros, cliente, comparador
│   ├── detail/           # galería, tabs, modal financiación
│   ├── ui/               # button, badge (CVA + tailwind-merge)
│   ├── hero-3d.tsx       # Three.js + R3F + drei
│   ├── theme-provider.tsx
│   ├── lenis-provider.tsx
│   ├── whatsapp-fab.tsx
│   ├── favorites-store.tsx
│   ├── compare-store.tsx
│   └── ...
├── db/
│   ├── schema.ts         # Drizzle (cars, testimonials, inquiries)
│   ├── seed-data.ts      # Los 13 coches + 7 testimonios
│   ├── fallback-data.ts  # Idem, en memoria, sin DB
│   ├── queries.ts        # API de lectura (DB con fallback)
│   └── index.ts          # libSQL client
└── lib/
    ├── utils.ts          # cn, formatPrice, formatKm, calculateMonthlyPayment
    ├── whatsapp.ts       # waLink + plantillas (carInquiry, testDrive, ...)
    ├── labels.ts         # diccionarios es_ES (combustible, cambio, carrocería)
    └── types.ts
```

## Variables de entorno

| Nombre | Descripción | Ejemplo |
| --- | --- | --- |
| `TURSO_CONNECTION_URL` | URL libSQL de tu base de datos Turso | `libsql://demo-andreh.aws-eu-west-1.turso.io` |
| `TURSO_AUTH_TOKEN` | Token de autenticación Turso (rotable) | `eyJhbGciOi…` |
| `NEXT_PUBLIC_SITE_URL` | URL pública para metadata, sitemap y OG | `https://autoselect-sevilla.vercel.app` |

> **Nunca** comprometas el token. `.env.local` ya está en `.gitignore`. Si por
> error sube al repo, rota el token inmediatamente y limpia el historial con
> `git filter-repo`.

## Comandos

```bash
pnpm dev          # Next dev (Turbopack)
pnpm build        # Build de producción
pnpm start        # Servir build
pnpm lint         # ESLint (next lint)
pnpm typecheck    # tsc --noEmit
pnpm db:push      # Aplicar schema en Turso
pnpm db:studio    # Drizzle Studio (UI de DB)
pnpm db:seed      # Insertar los 13 coches + testimonios
```

## Stack y por qué

- **Next.js 16 (App Router)** — RSC para datos en servidor, Turbopack en dev,
  `generateStaticParams` para fichas pre-renderizadas.
- **React 19** — concurrent features, transitions estables.
- **TypeScript estricto** — sin `any`. Schemas tipados extremo a extremo.
- **Tailwind CSS v4** — `@theme inline`, tokens OKLCH, sin colores hard-coded.
- **shadcn/ui · Radix · CVA** — primitivos accesibles con variantes tipadas.
- **Motion (Framer Motion)** — transiciones, layout, scroll-driven.
- **GSAP** — disponible para timelines más complejos donde Motion se queda
  corto.
- **Three.js + @react-three/{fiber,drei}** — hero 3D (coche estilizado con
  primitivas, Environment studio, ContactShadows, Float). Suspense + fallback
  SVG y respeto a `prefers-reduced-motion`.
- **Embla Carousel** — galería de ficha y carrusel de testimonios.
- **Lenis** — smooth scroll global, deshabilitado con reduced-motion.
- **Drizzle + libSQL (Turso)** — schema en TS, migraciones reproducibles,
  Drizzle Studio para administración rápida. Fallback automático si la DB no
  está accesible.
- **Zod + react-hook-form** — validación compartida cliente/servidor.
- **next-themes** — claro/oscuro sin flash.
- **lucide-react · @tabler/icons-react** — UI vs decorativos / brand.
- **@vercel/{analytics,speed-insights}** — métricas reales.

## Sistema de diseño

Tokens en `src/app/globals.css` bajo `@theme inline`. Paleta **Obsidian &
Cognac** en OKLCH; sin gradientes morados-rosas.

| Token | Dark | Light |
| --- | --- | --- |
| `--bg` | `oklch(0.14 0.01 260)` | `oklch(0.98 0.005 80)` |
| `--accent` | `oklch(0.72 0.14 55)` (coñac) | `oklch(0.55 0.15 50)` |
| `--text` | `oklch(0.97 0.005 260)` | `oklch(0.18 0.01 260)` |
| `--border` | `oklch(0.28 0.01 260)` | `oklch(0.86 0.01 80)` |

Tipografía: **Geist Sans** (UI), **Geist Mono** (precios/fichas) y **Fraunces**
(display, opsz 144). Self-hosted vía `next/font/google`.

## Cómo añadir un coche

### Opción A — script de seed (regenera todo)
1. Edita `src/db/seed-data.ts` añadiendo el objeto al array `seedCars`.
2. Asegúrate de cubrir todos los campos del schema (mín 15 features, 6 imágenes).
3. `pnpm db:seed` (limpia y reinserta).

### Opción B — Drizzle Studio (sin tocar código)
1. `pnpm db:studio`.
2. En la tabla `cars`, "Insert row" y rellena los campos.
3. Recuerda generar un `slug` único en kebab-case.

### Opción C — manual con el cliente libSQL
```ts
await db.insert(cars).values({
  slug: "marca-modelo-version-anio",
  brand: "Marca", model: "Modelo", version: "Versión",
  year: 2023, price: 25000, km: 45000,
  fuel: "gasolina", transmission: "automatico",
  hp: 150, displacement: 1500, doors: 5, seats: 5,
  bodyType: "compacto", color: "Negro Cosmos",
  previousOwners: 1,
  shortDescription: "...",
  longDescription: "...",
  features: ["...", "..."],
  images: ["https://images.unsplash.com/...", "..."],
  isFeatured: false, isSold: false,
});
```

## Roadmap / Para nuevos propietarios del proyecto

### 🔐 Cómo montar el panel de administración (`/admin`)

Esta demo no incluye `/admin` por decisión de alcance, pero la base está lista:

1. **Auth**. Añade Auth.js v5 con provider de credenciales o magic link
   (Resend). En `src/db/schema.ts` añade una tabla `users` con `email`,
   `passwordHash`, `role` (`"admin" | "editor"`).
2. **Middleware**. Crea `src/middleware.ts` que intercepte `/admin/**` y
   verifique sesión + rol. Usa Routing Middleware de Vercel si quieres aislar
   la lógica del framework.
3. **Páginas a construir**:
   - `/admin` — dashboard (KPIs, últimos coches subidos, últimas consultas).
   - `/admin/coches` — tabla con filtros + acciones (vendido / destacado).
   - `/admin/coches/nuevo` — formulario con react-hook-form + zod, idéntico
     al schema (reutiliza el tipo `CarInsert`).
   - `/admin/coches/[id]/editar` — mismo formulario en modo update.
   - `/admin/inquiries` — lista de consultas WhatsApp (la tabla `inquiries`
     ya está en el schema; conéctala con un endpoint `/api/inquiry` que
     registre el clic antes de redirigir a `wa.me`).
   - `/admin/testimonios` — CRUD del carrusel de testimonios.
4. **Subida de imágenes**. Vercel Blob o UploadThing. Crea un componente
   `ImageUploader` que devuelva URL pública y permita reordenar.
5. **Notificaciones**. Webhook Resend o Twilio para enviar email/SMS al
   comercial cuando llegue una consulta nueva.
6. **Tracking de WhatsApp**. Cambia los `<a href={waLink(...)}>` por un
   handler que haga `POST /api/inquiry` antes de `window.open(...)`.

**Tiempo estimado:** 12–16 h de un dev senior.

### 📈 Otras mejoras razonables para v2
- **Visor 360°** real con secuencia de 36 frames por coche.
- **OG dinámica** con foto del coche (modificar `/api/og` para aceptar `slug`).
- **PWA** con manifest + offline shell.
- **Multi-idioma** (catalán / inglés) con `next-intl`.
- **A/B test** con Vercel Edge Config sobre el copy del hero.
- **Vercel AI Gateway** para un asistente conversacional sobre el inventario.

## Deploy

```bash
# 1) Vincular repo a Vercel
vercel link

# 2) Subir env vars
vercel env add TURSO_CONNECTION_URL
vercel env add TURSO_AUTH_TOKEN
vercel env add NEXT_PUBLIC_SITE_URL

# 3) Deploy
vercel --prod
```

> Activa **Vercel Analytics** y **Speed Insights** desde el dashboard del
> proyecto. Ya están conectados en el código.

## Licencia y créditos

Demo realizada por encargo. Imágenes vía Unsplash bajo su licencia. Marcas y
modelos de coche son propiedad de sus titulares.

## Contacto comercial

WhatsApp: **+34 666 666 666** · `wa.me/34666666666`
