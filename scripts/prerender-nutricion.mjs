#!/usr/bin/env node
/**
 * Postbuild prerender para las páginas /n/:slug y /nutricion.
 *
 * Lee dist/index.html (output de Vite), y genera una copia por producto en:
 *   dist/n/<slug>.html     ←  metadatos SEO/OG/JSON-LD inyectados en <head>
 *   dist/nutricion.html    ←  índice
 *
 * Vercel sirve estos archivos estáticos antes de aplicar el rewrite SPA
 * (con cleanUrls: true en vercel.json el sufijo .html es transparente).
 * Para slugs desconocidos cae al SPA y el componente Nutrition muestra "no encontrado".
 *
 * Uso: node scripts/prerender-nutricion.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const TEMPLATE = path.join(DIST, "index.html");
const SITE_URL = "https://www.tibismarket.com";

const DEFAULT_LANG = "es";

async function loadProductos() {
  const modUrl = pathToFileURL(
    path.join(ROOT, "src/data/productos.js"),
  ).href;
  const mod = await import(modUrl);
  return mod.PRODUCTOS;
}

function smallVariant(src) {
  if (!src) return null;
  const dot = src.lastIndexOf(".");
  if (dot < 0) return src;
  return `${src.slice(0, dot)}-360.webp`;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildJsonLd(producto, lang) {
  const nombre = producto.nombre[lang];
  const tagline = producto.tagline[lang];
  const sinceLabel = lang === "es" ? "Desde" : "Since";
  const description = `${tagline}. ${sinceLabel} ${producto.desde}.`;
  const url = `${SITE_URL}/n/${producto.slug}`;
  const image = producto.imagen
    ? `${SITE_URL}${producto.imagen}`
    : `${SITE_URL}/og-image.jpg`;

  const map = {};
  for (const fila of producto.nutricion) {
    const k = fila.en.toLowerCase();
    if (k === "calories") map.calories = fila.val;
    else if (k === "total fat") map.fatContent = fila.val;
    else if (k === "saturated fat") map.saturatedFatContent = fila.val;
    else if (k === "trans fat") map.transFatContent = fila.val;
    else if (k === "cholesterol") map.cholesterolContent = fila.val;
    else if (k === "sodium") map.sodiumContent = fila.val;
    else if (k === "total carbohydrate") map.carbohydrateContent = fila.val;
    else if (k === "dietary fiber") map.fiberContent = fila.val;
    else if (k === "total sugars") map.sugarContent = fila.val;
    else if (k === "protein") map.proteinContent = fila.val;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: nombre,
    description,
    image,
    url,
    brand: { "@type": "Brand", name: "Tibi's Market" },
    category: lang === "es" ? "Arepas artesanales" : "Artisan arepas",
    additionalType: "https://schema.org/MenuItem",
    nutrition: {
      "@type": "NutritionInformation",
      servingSize: producto.porcion,
      ...map,
    },
  };
}

/**
 * Aplica los reemplazos sobre el HTML base.
 * Trabaja con expresiones simples sobre las etiquetas ya conocidas de index.html.
 */
function injectMeta(html, meta) {
  let out = html;

  out = out.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(meta.title)}</title>`);

  const setMetaName = (name, value) => {
    const re = new RegExp(
      `<meta\\s+name=\"${name}\"\\s+content=\"[^\"]*\"\\s*/?>`,
      "i",
    );
    const tag = `<meta name="${name}" content="${escapeHtml(value)}" />`;
    out = re.test(out) ? out.replace(re, tag) : out;
  };
  const setMetaProp = (prop, value) => {
    const re = new RegExp(
      `<meta\\s+property=\"${prop}\"\\s+content=\"[^\"]*\"\\s*/?>`,
      "i",
    );
    const tag = `<meta property="${prop}" content="${escapeHtml(value)}" />`;
    out = re.test(out) ? out.replace(re, tag) : out;
  };
  const setLink = (rel, href, attrs = "") => {
    const re = new RegExp(`<link\\s+rel=\"${rel}\"\\s+[^>]*?>`, "i");
    const tag = `<link rel="${rel}" href="${escapeHtml(href)}"${attrs ? " " + attrs : ""} />`;
    out = re.test(out) ? out.replace(re, tag) : out;
  };

  setMetaName("description", meta.description);
  setMetaName("twitter:title", meta.title);
  setMetaName("twitter:description", meta.description);
  setMetaName("twitter:url", meta.url);
  setMetaName("twitter:image", meta.image);

  setMetaProp("og:title", meta.title);
  setMetaProp("og:description", meta.description);
  setMetaProp("og:url", meta.url);
  setMetaProp("og:image", meta.image);
  setMetaProp("og:type", meta.ogType || "product");
  setMetaProp("og:locale", meta.ogLocale);

  setLink("canonical", meta.url);

  // Strip the default FoodEstablishment JSON-LD on product pages so Schema.org
  // crawlers pick up the Product/NutritionInformation block as the page entity.
  if (meta.jsonLd) {
    out = out.replace(
      /<script\s+type=\"application\/ld\+json\">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`,
    );
  }

  if (meta.hreflang && meta.hreflang.length) {
    const hreflangBlock = meta.hreflang
      .map(
        (h) =>
          `<link rel="alternate" hreflang="${h.lang}" href="${escapeHtml(h.url)}" />`,
      )
      .join("\n    ");
    out = out.replace(
      /<link\s+rel=\"canonical\"\s+[^>]*>/i,
      (m) => `${m}\n    ${hreflangBlock}`,
    );
  }

  // Update <html lang="..."> attribute to match the page's primary language.
  if (meta.htmlLang) {
    out = out.replace(/<html\s+lang=\"[^\"]*\"/i, `<html lang="${meta.htmlLang}"`);
  }

  // Replace the homepage's LCP preload (tibisay.webp) with this page's hero image
  // (or remove it entirely if the product has no image).
  const heroPreloadRe = /<link\s+rel=\"preload\"\s+as=\"image\"[\s\S]*?\/>\s*/i;
  if (meta.heroPreload) {
    const replacement = `<link rel="preload" as="image" href="${escapeHtml(meta.heroPreload)}" fetchpriority="high" />`;
    out = heroPreloadRe.test(out)
      ? out.replace(heroPreloadRe, replacement + "\n    ")
      : out;
  } else {
    out = out.replace(heroPreloadRe, "");
  }

  // Swap the 98 KB JPEG favicon for tiny webp variants. Same image, fraction of
  // the bytes. Only affects prerendered /n/ pages; the main site keeps the JPEG.
  out = out.replace(
    /<link\s+rel="icon"[^>]*>/i,
    '<link rel="icon" type="image/webp" href="/logo-icon-32.webp" />',
  );
  out = out.replace(
    /<link\s+rel="apple-touch-icon"[^>]*>/i,
    '<link rel="apple-touch-icon" href="/logo-icon-180.webp" />',
  );

  // Make the Google Fonts stylesheet non-render-blocking. The main site keeps the
  // blocking version (this transformation only affects prerendered /n/ pages).
  out = out.replace(
    /<link\s+href="https:\/\/fonts\.googleapis\.com\/css2[^"]+"\s+rel="stylesheet"\s*\/?>/i,
    (m) => {
      const hrefMatch = m.match(/href="([^"]+)"/);
      if (!hrefMatch) return m;
      const href = hrefMatch[1];
      return (
        `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'" />\n    ` +
        `<noscript><link rel="stylesheet" href="${href}" /></noscript>`
      );
    },
  );

  return out;
}

async function main() {
  const templateExists = await fs
    .access(TEMPLATE)
    .then(() => true)
    .catch(() => false);
  if (!templateExists) {
    console.error(
      `[prerender] No existe ${TEMPLATE}. Ejecuta 'vite build' primero.`,
    );
    process.exit(1);
  }

  const template = await fs.readFile(TEMPLATE, "utf8");
  const productos = await loadProductos();

  await fs.mkdir(path.join(DIST, "n"), { recursive: true });

  const lang = DEFAULT_LANG;
  const titleSuffix =
    lang === "es"
      ? "Información nutricional · Tibi's Market"
      : "Nutrition information · Tibi's Market";
  const sinceLabel = lang === "es" ? "Desde" : "Since";

  const generated = [];

  for (const p of productos) {
    const nombre = p.nombre[lang];
    const tagline = p.tagline[lang];
    const url = `${SITE_URL}/n/${p.slug}`;
    const image = p.imagen ? `${SITE_URL}${p.imagen}` : `${SITE_URL}/og-image.jpg`;
    const title = `${nombre} · ${titleSuffix}`;
    const description = `${tagline}. ${sinceLabel} ${p.desde}.`;

    const html = injectMeta(template, {
      title,
      description,
      url,
      image,
      htmlLang: lang,
      ogType: "product",
      ogLocale: lang === "es" ? "es_ES" : "en_US",
      heroPreload: smallVariant(p.imagen) || p.imagen || null,
      hreflang: [
        { lang: "es", url },
        { lang: "en", url },
        { lang: "x-default", url },
      ],
      jsonLd: buildJsonLd(p, lang),
    });

    const outFile = path.join(DIST, "n", `${p.slug}.html`);
    await fs.writeFile(outFile, html, "utf8");
    generated.push({ slug: p.slug, url, file: path.relative(ROOT, outFile) });
  }

  // Índice /nutricion
  {
    const url = `${SITE_URL}/nutricion`;
    const title = `${titleSuffix}`;
    const description =
      lang === "es"
        ? "Información nutricional, ingredientes y preparación de las arepas artesanales Tibi's Market. Desde 1943."
        : "Nutrition facts, ingredients and preparation for Tibi's Market artisan arepas. Since 1943.";
    const html = injectMeta(template, {
      title,
      description,
      url,
      image: `${SITE_URL}/og-image.jpg`,
      htmlLang: lang,
      ogType: "website",
      ogLocale: lang === "es" ? "es_ES" : "en_US",
      heroPreload: null,
      hreflang: [
        { lang: "es", url },
        { lang: "en", url },
        { lang: "x-default", url },
      ],
    });
    const outFile = path.join(DIST, "nutricion.html");
    await fs.writeFile(outFile, html, "utf8");
    generated.push({
      slug: "(index)",
      url,
      file: path.relative(ROOT, outFile),
    });
  }

  console.log(`\n[prerender] ${generated.length} páginas generadas:\n`);
  for (const g of generated) {
    console.log(`  • ${g.slug.padEnd(28)}  →  ${g.url}`);
    console.log(`    ${g.file}`);
  }
  console.log("");
}

main().catch((err) => {
  console.error("[prerender] Error:", err);
  process.exit(1);
});
