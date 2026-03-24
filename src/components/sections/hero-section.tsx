"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

import { BorderBeam } from "@/components/magicui/border-beam";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_80%_0%,rgba(168,85,247,0.22),transparent_42%),radial-gradient(circle_at_0%_100%,rgba(34,211,238,0.16),transparent_45%),linear-gradient(180deg,rgba(24,24,27,0.96),rgba(9,9,11,0.99))] p-8 shadow-2xl md:p-12">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]"
        aria-hidden
      >
        <Particles count={56} />
        <Meteors count={32} />
      </div>
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(255,255,255,0.07)_0.55px,transparent_0.55px)] [background-size:14px_14px]" />
      <div className="absolute -left-20 -top-24 h-56 w-56 rounded-full bg-fuchsia-500/25 blur-3xl" />
      <div className="absolute -bottom-24 -right-16 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 space-y-6 text-right"
      >
        <motion.span
          variants={itemVariants}
          whileHover={{ scale: 1.02, borderColor: "rgba(232,121,249,0.5)" }}
          className="inline-flex cursor-default items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs tracking-[0.15em] text-zinc-200 shadow-[0_0_24px_rgba(168,85,247,0.15)] transition-colors"
        >
          <motion.span
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles className="h-3.5 w-3.5 text-fuchsia-300" />
          </motion.span>
          חוויית פרימיום לאירועים
        </motion.span>

        <motion.h1
          variants={itemVariants}
          className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl"
        >
          <SparklesText text="אסי וג'וני Photo Booth AI - חוויית צילום AI שעוד לא הכרתם" />
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg"
        >
          עמדות צילום חכמות ומגנטים באיכות פרימיום לאירועים
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-end gap-4"
        >
          <BorderBeam glow="strong">
            <Button
              size="lg"
              className="h-11 rounded-full border-0 bg-gradient-to-l from-cyan-600 via-fuchsia-600 to-violet-600 px-8 text-base font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]"
            >
              <motion.span
                className="flex items-center"
                whileHover={{ x: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <Camera className="ml-2 h-4 w-4" />
                להזמנת אסי וג&apos;וני Photo Booth AI
              </motion.span>
            </Button>
          </BorderBeam>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              size="lg"
              className="h-11 rounded-full border-cyan-400/35 bg-white/5 px-8 text-base text-white shadow-[0_0_0_1px_rgba(34,211,238,0.15)] backdrop-blur-sm transition-[box-shadow,background-color] hover:border-fuchsia-400/50 hover:bg-white/10 hover:shadow-[0_0_32px_rgba(34,211,238,0.25)]"
            >
              צפייה בחבילות
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
