#!/usr/bin/env node
/**
 * Genera variantes pequeñas (webp) de las imágenes de producto para servir
 * en la hero circular de /n/:slug (mostrada a 180×180 px, hasta 360 px en retina).
 *
 * Lee productos.js, y para cada `imagen` definida:
 *   public/images/<foo>.webp  →  public/images/<foo>-360.webp  (~30-50 KB)
 *
 * Idempotente: si la variante ya existe y es más reciente que el original, no se regenera.
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");

async function loadProductos() {
  const mod = await import(
    pathToFileURL(path.join(ROOT, "src/data/productos.js")).href
  );
  return mod.PRODUCTOS;
}

function variantPath(originalRelPath) {
  const ext = path.extname(originalRelPath);
  const base = originalRelPath.slice(0, -ext.length);
  return `${base}-360.webp`;
}

async function fileMtime(p) {
  try {
    const s = await fs.stat(p);
    return s.mtimeMs;
  } catch {
    return null;
  }
}

async function main() {
  const productos = await loadProductos();
  const results = [];

  for (const p of productos) {
    if (!p.imagen) continue;
    const relSrc = p.imagen.replace(/^\//, "");
    const relDst = variantPath(p.imagen).replace(/^\//, "");
    const src = path.join(PUBLIC_DIR, relSrc);
    const dst = path.join(PUBLIC_DIR, relDst);

    const srcExists = await fs.access(src).then(() => true).catch(() => false);
    if (!srcExists) {
      console.warn(`[img] FALTA original: ${src}`);
      continue;
    }
    const [srcM, dstM] = await Promise.all([fileMtime(src), fileMtime(dst)]);
    if (dstM && srcM && dstM >= srcM) {
      results.push({ slug: p.slug, status: "cached", dst: relDst });
      continue;
    }
    await sharp(src)
      .resize(360, 360, { fit: "cover", position: "center" })
      .webp({ quality: 78, effort: 5 })
      .toFile(dst);
    const newSize = (await fs.stat(dst)).size;
    results.push({
      slug: p.slug,
      status: "built",
      dst: relDst,
      size: `${(newSize / 1024).toFixed(1)} KB`,
    });
  }

  console.log(`\n[img] ${results.length} variantes procesadas:\n`);
  for (const r of results) {
    const tag =
      r.status === "built" ? `[built ${r.size}]` : "[cached]";
    console.log(`  ${tag.padEnd(18)} ${r.slug.padEnd(28)} → /${r.dst}`);
  }
  console.log("");
}

main().catch((err) => {
  console.error("[img] Error:", err);
  process.exit(1);
});
