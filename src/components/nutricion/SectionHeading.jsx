import React from "react";

/**
 * Heading consistente para las secciones de nutrición.
 * Slate oscuro para legibilidad, naranja sólo en el diamante decorativo.
 */
const SectionHeading = ({ id, children }) => (
  <h2
    id={id}
    style={{
      fontFamily: "var(--font-display)",
      fontSize: 16,
      textTransform: "uppercase",
      letterSpacing: "0.22em",
      fontWeight: 700,
      color: "#353a40",
      margin: "0 0 14px",
      display: "flex",
      alignItems: "center",
      gap: 10,
    }}
  >
    <span aria-hidden style={{ color: "#ff914d", fontSize: 14 }}>
      ◆
    </span>
    {children}
  </h2>
);

export default SectionHeading;
