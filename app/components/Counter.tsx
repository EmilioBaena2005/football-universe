"use client";

import { useEffect, useRef, useState } from "react";

// Contador que sube de 0 al valor final cuando el elemento entra en pantalla.
// Respeta prefers-reduced-motion: en ese caso muestra el valor directamente.
export default function Counter({ value, duration = 1200 }: { value: number; duration?: number }) {
  const [display, setDisplay] = useState(value);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !ref.current) return;

    setDisplay(0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          setDisplay(Math.round(value * t));
          if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{display.toLocaleString("es-ES")}</span>;
}
