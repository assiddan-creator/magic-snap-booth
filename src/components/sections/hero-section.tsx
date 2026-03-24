"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.18),_rgba(9,9,11,0.95)_38%),linear-gradient(180deg,rgba(24,24,27,0.94),rgba(9,9,11,0.98))] p-8 shadow-2xl md:p-12">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(rgba(255,255,255,0.08)_0.6px,transparent_0.6px)] [background-size:14px_14px]" />
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative space-y-6 text-right"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs tracking-[0.15em] text-zinc-200">
          <Sparkles className="h-3.5 w-3.5" />
          חוויית פרימיום לאירועים
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          <SparklesText text="Magic Snap - חוויית צילום AI שעוד לא הכרתם" />
        </h1>
        <p className="max-w-2xl text-base text-zinc-300 md:text-lg">
          עמדות צילום חכמות ומגנטים באיכות פרימיום לאירועים
        </p>

        <div className="flex flex-wrap justify-end gap-3">
          <Button size="lg" className="rounded-full px-7">
            <Camera className="ml-2 h-4 w-4" />
            להזמנת Magic Snap
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10"
          >
            צפייה בחבילות
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
