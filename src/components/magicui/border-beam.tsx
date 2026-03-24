"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type BorderBeamProps = {
  children: ReactNode;
  className?: string;
  glow?: "strong" | "medium";
};

export function BorderBeam({
  children,
  className,
  glow = "strong",
}: BorderBeamProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative inline-flex rounded-full p-[2px]",
        glow === "strong" &&
          "shadow-[0_0_28px_rgba(34,211,238,0.4),0_0_56px_rgba(232,121,249,0.22)]",
        glow === "medium" && "shadow-[0_0_18px_rgba(34,211,238,0.28)]",
        className,
      )}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      whileTap={reduce ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
    >
      {!reduce && (
        <>
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
            <motion.div
              className="absolute left-1/2 top-1/2 h-[220%] w-[220%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, #22d3ee, #e879f9, #a855f7, #06b6d4, #22d3ee)",
              }}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          <motion.div
            className="pointer-events-none absolute inset-[-6px] rounded-full"
            animate={{
              boxShadow: [
                "0 0 24px rgba(34,211,238,0.55), 0 0 48px rgba(232,121,249,0.35)",
                "0 0 48px rgba(232,121,249,0.75), 0 0 88px rgba(34,211,238,0.45)",
                "0 0 24px rgba(34,211,238,0.55), 0 0 48px rgba(232,121,249,0.35)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
      {reduce && (
        <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-cyan-400/60" />
      )}
      <div className="relative z-10 flex rounded-full bg-zinc-950 [&>button]:relative [&>button]:border-0 [&>button]:bg-zinc-950">
        {children}
      </div>
    </motion.div>
  );
}
