"use client";

import { motion, useReducedMotion } from "framer-motion";

export function GlowingDivider() {
  const reduce = useReducedMotion();

  return (
    <div
      className="relative my-2 h-20 w-full overflow-visible"
      aria-hidden
    >
      <motion.div
        className="absolute left-1/2 top-1/2 h-px w-[min(100%,56rem)] -translate-x-1/2 -translate-y-1/2"
        initial={{ scaleX: 0.3, opacity: 0.4 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.15) 15%, rgba(232,121,249,0.9) 50%, rgba(34,211,238,0.15) 85%, transparent 100%)",
          boxShadow:
            "0 0 24px rgba(232,121,249,0.6), 0 0 48px rgba(34,211,238,0.35), 0 0 80px rgba(168,85,247,0.25)",
        }}
      />

      {!reduce && (
        <>
          <motion.div
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400"
            animate={{
              scale: [1, 1.6, 1],
              opacity: [0.7, 1, 0.7],
              boxShadow: [
                "0 0 12px #e879f9, 0 0 28px #22d3ee",
                "0 0 28px #22d3ee, 0 0 48px #e879f9",
                "0 0 12px #e879f9, 0 0 28px #22d3ee",
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute left-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300/90 blur-[1px]"
            animate={{ opacity: [0.3, 1, 0.3], x: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-[18%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-fuchsia-300/90 blur-[1px]"
            animate={{ opacity: [0.3, 1, 0.3], x: [0, -12, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-x-[10%] top-1/2 h-8 -translate-y-1/2 bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent blur-xl"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </>
      )}
    </div>
  );
}
