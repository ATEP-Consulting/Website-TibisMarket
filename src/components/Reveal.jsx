import React, { useRef } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}) {
  const ref = useRef(null);
  const shown = useReveal(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 1s cubic-bezier(.22,.61,.36,1) ${delay}ms, transform 1s cubic-bezier(.22,.61,.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
