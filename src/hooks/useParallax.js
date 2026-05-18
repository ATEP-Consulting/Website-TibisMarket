import { useEffect, useState } from "react";

export function useParallax(ref, speed = 0.15) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const node = ref.current;
    const onScroll = () => {
      const r = node.getBoundingClientRect();
      const center = r.top + r.height / 2 - window.innerHeight / 2;
      setOffset(-center * speed);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [ref, speed]);
  return offset;
}
