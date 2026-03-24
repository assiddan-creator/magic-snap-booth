"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";

import { useIsClient } from "@/lib/hooks/use-is-client";

type Meteor = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  width: number;
};

function seededMeteors(count: number): Meteor[] {
  return Array.from({ length: count }, (_, i) => {
    const s = ((i * 1103515245 + 12345) >>> 0) / 4294967296;
    const s2 = ((i * 2246822519 + i) >>> 0) / 4294967296;
    return {
      id: i,
      left: s * 100,
      delay: s2 * 6,
      duration: 2.5 + s * 4,
      width: 80 + s * 100,
    };
  });
}

/** SSR-safe: defers animated layer until client to avoid hydration mismatches. */
export function Meteors({ count = 28 }: { count?: number }) {
  const isClient = useIsClient();
  const reduce = useReducedMotion();
  const meteors = useMemo(() => seededMeteors(count), [count]);

  if (!isClient) {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden
      />
    );
  }

  if (reduce) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      {meteors.map((m) => (
        <motion.span
          key={m.id}
          className="absolute -top-32 h-[1px] rounded-full bg-gradient-to-l from-transparent via-cyan-200/90 to-fuchsia-200/80 opacity-0 shadow-[0_0_12px_rgba(34,211,238,0.9)]"
          style={{
            left: `${m.left}%`,
            width: m.width,
            rotate: "-35deg",
            transformOrigin: "left center",
          }}
          initial={{ top: "-10%", opacity: 0 }}
          animate={{
            top: ["-10%", "120%"],
            opacity: [0, 1, 1, 0],
            x: [0, -40],
          }}
          transition={{
            duration: m.duration,
            delay: m.delay,
            repeat: Infinity,
            ease: "linear",
            repeatDelay: m.delay * 0.3,
          }}
        />
      ))}
    </div>
  );
}
