"use client";

import { motion } from "framer-motion";

type SparklesTextProps = {
  text: string;
  className?: string;
};

export function SparklesText({ text, className = "" }: SparklesTextProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text text-transparent">
        {text}
      </span>

      <motion.span
        aria-hidden
        className="absolute -right-5 -top-3 h-2.5 w-2.5 rounded-full bg-fuchsia-300/90 shadow-[0_0_18px_rgba(232,121,249,0.9)]"
        animate={{ opacity: [0.25, 1, 0.25], scale: [0.8, 1.15, 0.8] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute -left-3 top-2 h-2 w-2 rounded-full bg-cyan-300/90 shadow-[0_0_14px_rgba(103,232,249,0.9)]"
        animate={{ opacity: [0.2, 1, 0.2], scale: [0.75, 1.1, 0.75] }}
        transition={{ duration: 1.9, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
      />
    </span>
  );
}
