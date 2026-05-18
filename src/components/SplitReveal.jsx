import React, { useRef } from "react";
import { useReveal } from "../hooks/useReveal";

export default function SplitReveal({ text, delay = 0, className = "" }) {
  const ref = useRef(null);
  const shown = useReveal(ref, 0.25);
  const words = String(text || "").split(" ");

  return (
    <span ref={ref} className={className} style={{ display: "inline-block" }}>
      {words.map((w, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: shown ? "translateY(0%)" : "translateY(110%)",
              opacity: shown ? 1 : 0,
              transition: `transform 1.1s cubic-bezier(.22,.61,.36,1) ${delay + i * 70}ms, opacity 1.1s ${delay + i * 70}ms`,
            }}
          >
            {w}
          </span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </span>
  );
}
