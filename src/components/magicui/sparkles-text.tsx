"use client";

import { motion, useReducedMotion } from "framer-motion";

import { useIsClient } from "@/lib/hooks/use-is-client";

type SparklesTextProps = {
  text: string;
  className?: string;
};

/** Static headline markup — must match server + hydration first pass (no motion). */
function StaticHeadline({ text, className }: SparklesTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative block bg-gradient-to-l from-cyan-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
        {text}
      </span>
    </span>
  );
}

export function SparklesText({ text, className = "" }: SparklesTextProps) {
  const isClient = useIsClient();
  const reduce = useReducedMotion();

  if (!isClient) {
    return <StaticHeadline text={text} className={className} />;
  }

  if (reduce) {
    return <StaticHeadline text={text} className={className} />;
  }

  return (
    <span className={`relative inline-block ${className}`}>
      <motion.span
        className="relative block bg-gradient-to-l from-cyan-200 via-white to-fuchsia-200 bg-[length:200%_auto] bg-clip-text text-transparent"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {text}
      </motion.span>

      <motion.span
        aria-hidden
        className="absolute -right-5 -top-3 h-2.5 w-2.5 rounded-full bg-fuchsia-300/90 shadow-[0_0_22px_rgba(232,121,249,1),0_0_44px_rgba(34,211,238,0.45)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.2, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute -left-3 top-2 h-2 w-2 rounded-full bg-cyan-300/90 shadow-[0_0_16px_rgba(34,211,238,1)]"
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.75, 1.15, 0.75] }}
        transition={{
          duration: 1.9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.25,
        }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(232,121,249,0.35), transparent 55%)",
        }}
        animate={{ opacity: [0.35, 0.7, 0.35] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </span>
  );
}
