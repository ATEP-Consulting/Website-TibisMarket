import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { T } from "../../data/nutricionStrings";

const ChevronIcon = ({ open }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{
      transition: "transform .2s ease",
      transform: open ? "rotate(180deg)" : "none",
    }}
    aria-hidden
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/**
 * Réplica del FDA Nutrition Facts label.
 *
 * Decisiones visuales para casar con el envase oficial:
 *  - Fondo blanco puro, borde negro 4 px, sin border-radius
 *  - Helvetica/Arial Black para el título, "Calories" grande, y los números
 *    grandes (DM Sans no llega a un weight 900 lo suficientemente "Black")
 *  - `<table>` + `border-collapse: collapse` para que los separadores
 *    verticales sean líneas continuas alineadas entre filas
 *  - Dentro de cada celda numérica: `display:flex; justify-content:
 *    space-between` para que val quede a la izquierda y %DV a la derecha
 *  - Barra negra 12 px tras "Serving size" y barra 10 px entre Proteína
 *    y la fila marcada con `groupBreakAbove: true` (vitaminas/minerales)
 */
const HEAVY_STACK =
  '"Helvetica Neue", "Helvetica", "Arial Black", Arial, sans-serif';
const BLACK = "#000";

const NutritionFacts = ({ porcion, filas }) => {
  const { language } = useLanguage();
  const t = (obj) => obj[language];
  const [open, setOpen] = useState(true);

  const caloriesRow = filas.find((r) => r.bold);
  const otherRows = filas.filter((r) => !r.bold);
  const hasContainer = filas.some((r) => r.valContainer !== undefined);

  // Separa macros (hasta antes de groupBreakAbove) de micros (a partir de él).
  const breakIdx = otherRows.findIndex((r) => r.groupBreakAbove);
  const macroRows = breakIdx === -1 ? otherRows : otherRows.slice(0, breakIdx);
  const microRows = breakIdx === -1 ? [] : otherRows.slice(breakIdx);

  const totalCols = hasContainer ? 3 : 2;

  // ── Estilos base de celda ────────────────────────────────────────────────
  const cellName = (n, isMacro = true) => ({
    padding: "5px 6px 5px 0",
    paddingLeft: n.indent ? 14 : 0,
    fontFamily: HEAVY_STACK,
    fontWeight: isMacro && !n.indent ? 900 : 400,
    fontStyle: n.italic ? "italic" : "normal",
    fontSize: isMacro ? 14 : 13,
    color: BLACK,
    verticalAlign: "baseline",
    lineHeight: 1.25,
  });

  const cellNumeric = (n) => ({
    padding: "5px 4px",
    borderLeft: `1px solid ${BLACK}`,
    verticalAlign: "baseline",
    fontFamily: HEAVY_STACK,
    fontSize: 14,
    color: BLACK,
    fontStyle: n.italic ? "italic" : "normal",
  });

  // Render val/dv dentro de la celda con flex space-between.
  const ValDvBlock = ({ val, dv, italic }) => (
    <span
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: 8,
        fontStyle: italic ? "italic" : "normal",
      }}
    >
      <span style={{ fontWeight: 400 }}>{val || ""}</span>
      <span style={{ fontWeight: 900 }}>{dv || ""}</span>
    </span>
  );

  return (
    <section style={{ padding: "0 24px 28px" }}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="nutrition-panel"
        style={{
          width: "100%",
          padding: "14px 16px",
          background: "transparent",
          border: "1px solid rgba(53,58,64,0.2)",
          borderRadius: 4,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 600,
          color: "#353a40",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          letterSpacing: "0.02em",
        }}
      >
        <span>{open ? t(T.ocultarNutricion) : t(T.verNutricion)}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div
          id="nutrition-panel"
          style={{
            background: "#fff",
            color: BLACK,
            border: `4px solid ${BLACK}`,
            borderRadius: 2,
            marginTop: 12,
            padding: "12px 14px 10px",
          }}
        >
          {/* Header — Nutrition Facts title */}
          <h3
            style={{
              fontFamily: HEAVY_STACK,
              fontSize: "clamp(28px, 10vw, 44px)",
              fontWeight: 900,
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              color: BLACK,
            }}
          >
            {t(T.nutricion)}
          </h3>

          <div
            style={{
              fontFamily: HEAVY_STACK,
              fontSize: 13,
              color: BLACK,
              marginTop: 6,
              fontWeight: 400,
            }}
          >
            {t(T.porcionesVariadas)}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 8,
              fontFamily: HEAVY_STACK,
              fontWeight: 900,
              fontSize: 16,
              color: BLACK,
              padding: "2px 0 6px",
              borderBottom: `1px solid ${BLACK}`,
            }}
          >
            <span>{t(T.porcion)}</span>
            <span>{porcion}</span>
          </div>

          {/* Thick black bar — fills full label width */}
          <div
            aria-hidden
            style={{ height: 12, background: BLACK, margin: "0 -14px" }}
          />

          {/* Main nutrition table */}
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontVariantNumeric: "tabular-nums",
              marginTop: 0,
            }}
          >
            <tbody>
              {/* Per Serving / Per Container small headers */}
              {hasContainer && (
                <tr>
                  <td style={{ padding: "4px 0" }} />
                  <td
                    style={{
                      padding: "4px 4px 2px",
                      borderLeft: `1px solid ${BLACK}`,
                      textAlign: "right",
                      fontFamily: HEAVY_STACK,
                      fontWeight: 900,
                      fontSize: 12,
                      color: BLACK,
                    }}
                  >
                    {t(T.porServing)}
                  </td>
                  <td
                    style={{
                      padding: "4px 4px 2px",
                      borderLeft: `1px solid ${BLACK}`,
                      textAlign: "right",
                      fontFamily: HEAVY_STACK,
                      fontWeight: 900,
                      fontSize: 12,
                      color: BLACK,
                    }}
                  >
                    {t(T.porContainer)}
                  </td>
                </tr>
              )}

              {/* Calories — big row */}
              {caloriesRow && (
                <tr>
                  <td
                    style={{
                      padding: "0 6px 6px 0",
                      fontFamily: HEAVY_STACK,
                      fontSize: "clamp(28px, 9vw, 38px)",
                      fontWeight: 900,
                      lineHeight: 0.95,
                      letterSpacing: "-0.02em",
                      color: BLACK,
                      verticalAlign: "baseline",
                    }}
                  >
                    {caloriesRow[language]}
                  </td>
                  <td
                    style={{
                      padding: "0 4px 6px",
                      borderLeft: `1px solid ${BLACK}`,
                      fontFamily: HEAVY_STACK,
                      fontSize: "clamp(28px, 9vw, 38px)",
                      fontWeight: 900,
                      lineHeight: 0.95,
                      letterSpacing: "-0.02em",
                      color: BLACK,
                      textAlign: "right",
                      verticalAlign: "baseline",
                    }}
                  >
                    {caloriesRow.val}
                  </td>
                  {hasContainer && (
                    <td
                      style={{
                        padding: "0 4px 6px",
                        borderLeft: `1px solid ${BLACK}`,
                        fontFamily: HEAVY_STACK,
                        fontSize: "clamp(28px, 9vw, 38px)",
                        fontWeight: 900,
                        lineHeight: 0.95,
                        letterSpacing: "-0.02em",
                        color: BLACK,
                        textAlign: "right",
                        verticalAlign: "baseline",
                      }}
                    >
                      {caloriesRow.valContainer}
                    </td>
                  )}
                </tr>
              )}

              {/* % Daily Value* header — thick border above */}
              <tr>
                <td
                  style={{
                    padding: "3px 6px 3px 0",
                    borderTop: `4px solid ${BLACK}`,
                  }}
                />
                <td
                  style={{
                    padding: "3px 4px",
                    borderLeft: `1px solid ${BLACK}`,
                    borderTop: `4px solid ${BLACK}`,
                    textAlign: "right",
                    fontFamily: HEAVY_STACK,
                    fontWeight: 900,
                    fontSize: 11,
                    color: BLACK,
                  }}
                >
                  {t(T.vd)}
                </td>
                {hasContainer && (
                  <td
                    style={{
                      padding: "3px 4px",
                      borderLeft: `1px solid ${BLACK}`,
                      borderTop: `4px solid ${BLACK}`,
                      textAlign: "right",
                      fontFamily: HEAVY_STACK,
                      fontWeight: 900,
                      fontSize: 11,
                      color: BLACK,
                    }}
                  >
                    {t(T.vd)}
                  </td>
                )}
              </tr>

              {/* Macro rows */}
              {macroRows.map((n, i) => (
                <tr key={`m-${n.es}-${i}`}>
                  <td
                    style={{ ...cellName(n, true), borderTop: `1px solid ${BLACK}` }}
                  >
                    {n[language]}
                  </td>
                  <td
                    style={{ ...cellNumeric(n), borderTop: `1px solid ${BLACK}` }}
                  >
                    <ValDvBlock val={n.val} dv={n.dv} italic={n.italic} />
                  </td>
                  {hasContainer && (
                    <td
                      style={{ ...cellNumeric(n), borderTop: `1px solid ${BLACK}` }}
                    >
                      <ValDvBlock
                        val={n.valContainer}
                        dv={n.dvContainer}
                        italic={n.italic}
                      />
                    </td>
                  )}
                </tr>
              ))}

              {/* Thick black bar between macros and micros (FDA divider) */}
              {microRows.length > 0 && (
                <tr aria-hidden>
                  <td
                    colSpan={totalCols}
                    style={{
                      padding: 0,
                      height: 10,
                      background: BLACK,
                      borderLeft: "none",
                    }}
                  />
                </tr>
              )}

              {/* Micro rows (vitamins/minerals) */}
              {microRows.map((n, i) => (
                <tr key={`v-${n.es}-${i}`}>
                  <td
                    style={{
                      ...cellName(n, false),
                      borderTop: i === 0 ? "none" : `1px solid ${BLACK}`,
                    }}
                  >
                    {n[language]}
                  </td>
                  <td
                    style={{
                      ...cellNumeric(n),
                      fontSize: 13,
                      borderTop: i === 0 ? "none" : `1px solid ${BLACK}`,
                    }}
                  >
                    <ValDvBlock val={n.val} dv={n.dv} italic={n.italic} />
                  </td>
                  {hasContainer && (
                    <td
                      style={{
                        ...cellNumeric(n),
                        fontSize: 13,
                        borderTop: i === 0 ? "none" : `1px solid ${BLACK}`,
                      }}
                    >
                      <ValDvBlock
                        val={n.valContainer}
                        dv={n.dvContainer}
                        italic={n.italic}
                      />
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>

          {/* Footnote — thin top border */}
          <p
            style={{
              fontFamily: HEAVY_STACK,
              fontSize: 10,
              color: BLACK,
              marginTop: 0,
              marginBottom: 0,
              paddingTop: 6,
              borderTop: `1px solid ${BLACK}`,
              lineHeight: 1.4,
            }}
          >
            {t(T.vdNota)}
          </p>
        </div>
      )}
    </section>
  );
};

export default NutritionFacts;
