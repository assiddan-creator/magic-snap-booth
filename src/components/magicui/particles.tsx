"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

type Particle = { id: number; x: number; y: number; size: number; duration: number; delay: number };

function seededParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const s = ((i * 9301 + 49297) % 233280) / 233280;
    const s2 = ((i * 7919 + i * i) % 1000) / 1000;
    return {
      id: i,
      x: (s * 100) % 100,
      y: (s2 * 100) % 100,
      size: 1 + (s * 2.5),
      duration: 8 + s * 12,
      delay: s2 * 8,
    };
  });
}

export function Particles({ count = 48 }: { count?: number }) {
  const reduce = useReducedMotion();
  const particles = useMemo(() => seededParticles(count), [count]);

  if (reduce) {
    return (
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
      />
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 8px rgba(168,85,247,0.6), 0 0 16px rgba(34,211,238,0.35)",
          }}
          animate={{
            opacity: [0.15, 0.85, 0.15],
            scale: [0.6, 1.2, 0.6],
            y: [0, -18, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
