# Argenpel

Frontend del sitio institucional y catálogo de productos de Argenpel. El
proyecto no incluye comercio electrónico.

## Stack

Next.js, React, TypeScript y Tailwind CSS. Tests con Vitest.

## Requisitos

- Node.js 24 (ver `.nvmrc`; CI usa la misma versión)

## Desarrollo local

```bash
npm install
npm run dev
```

El sitio queda disponible por defecto en `http://localhost:3000`.

## Verificación

```bash
npm run check
```

Corre lint, typecheck, formato, tests y build. GitHub Actions ejecuta los mismos
pasos en cada push a `main` y en cada pull request.

## Contenido

- Productos y categorías: `src/data/products.ts` y `src/data/categories.ts`
  (ver `docs/catalog.md`).
- Links de catálogo, Instagram y ubicación: `src/data/company.ts`.
- Navegación de header y footer: `src/data/navigation.ts`.
- Imágenes del hero rotativo de la home: `src/data/home.ts` (cambian cada 6 s
  con fundido; conservan el recorte de Figma y el tono se aplica en el hero).
- Fotos en `public/images/`. Subir fotos opacas como JPEG de hasta ~1600 px de
  ancho; PNG solo si necesitan transparencia.

## Despliegue

El sitio se despliega en Vercel desde `main`.

| Variable               | Uso                                                                                                            |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Dominio público final. Define las URLs absolutas (Open Graph, sitemap) y habilita la indexación en buscadores. |

Mientras `NEXT_PUBLIC_SITE_URL` no esté definida, el sitio usa la URL de
producción de Vercel y responde `noindex` con `robots.txt` bloqueando todo. Al
entregar, definirla en Vercel (Production) y volver a desplegar.
