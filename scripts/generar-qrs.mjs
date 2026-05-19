#!/usr/bin/env node
/**
 * Genera un QR (SVG + PNG @ 300dpi) por cada producto, apuntando a
 *   https://tibismarket.com/n/<slug>
 *
 * - Nivel de corrección de error: H (permite añadir logo encima sin perder lectura)
 * - Foreground: negro, Background: transparente (válido sobre etiquetas de cualquier color)
 * - Tamaño del PNG: ~1000×1000 px efectivos (300 DPI sobre ~3.3" → 1000 px)
 * - Output: qr-output/<slug>.{svg,png}
 *
 * Uso:
 *   npm run qr:generate
 */

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import QRCode from "qrcode";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(ROOT, "qr-output");
const BASE_URL = "https://tibismarket.com";

async function loadProductos() {
  const modUrl = pathToFileURL(
    path.join(ROOT, "src/data/productos.js"),
  ).href;
  const mod = await import(modUrl);
  return mod.PRODUCTOS;
}

async function generateSvg(targetUrl, outFile) {
  const svg = await QRCode.toString(targetUrl, {
    type: "svg",
    errorCorrectionLevel: "H",
    margin: 2,
    width: 1000,
    color: {
      dark: "#000000ff",
      light: "#00000000", // transparente
    },
  });
  await fs.writeFile(outFile, svg, "utf8");
}

async function generatePng(targetUrl, outFile) {
  // 1000 px @ 300dpi → ~3.33 pulgadas. Suficiente para imprenta.
  await QRCode.toFile(outFile, targetUrl, {
    type: "png",
    errorCorrectionLevel: "H",
    margin: 2,
    width: 1000,
    color: {
      dark: "#000000ff",
      light: "#00000000",
    },
  });
}

async function main() {
  // Limpia el directorio para evitar dejar QRs huérfanos con slugs antiguos.
  await fs.rm(OUT_DIR, { recursive: true, force: true });
  await fs.mkdir(OUT_DIR, { recursive: true });
  const productos = await loadProductos();

  const generated = [];
  for (const p of productos) {
    const url = `${BASE_URL}/n/${p.slug}`;
    const svgFile = path.join(OUT_DIR, `${p.slug}.svg`);
    const pngFile = path.join(OUT_DIR, `${p.slug}.png`);
    await generateSvg(url, svgFile);
    await generatePng(url, pngFile);
    generated.push({ slug: p.slug, url, svg: svgFile, png: pngFile });
  }

  console.log(`\n[qr] ${generated.length} códigos generados en ${path.relative(ROOT, OUT_DIR)}/\n`);
  for (const g of generated) {
    console.log(`  • ${g.slug.padEnd(28)}  →  ${g.url}`);
    console.log(`    ${path.relative(ROOT, g.svg)}`);
    console.log(`    ${path.relative(ROOT, g.png)}`);
  }
  console.log(
    "\nNivel de corrección de error: H (admite logo sobreimpreso hasta ~30% del área).",
  );
  console.log("Color foreground: negro · Background: transparente.\n");
}

main().catch((err) => {
  console.error("[qr] Error:", err);
  process.exit(1);
});
