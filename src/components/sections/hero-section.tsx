"use client";

import { motion } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 shadow-2xl backdrop-blur md:p-12">
      <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative space-y-6"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-zinc-200">
          <Sparkles className="h-3.5 w-3.5" />
          Luxury Photo Booth Experiences
        </span>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Magic Snap creates elevated photo moments for unforgettable events.
        </h1>
        <p className="max-w-2xl text-base text-zinc-300 md:text-lg">
          Premium studio lighting, interactive overlays, and instant sharing for
          weddings, corporate activations, and private celebrations.
        </p>

        <div className="flex flex-wrap gap-3">
          <Button size="lg" className="rounded-full px-7">
            <Camera className="mr-2 h-4 w-4" />
            Book Magic Snap
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-white/20 bg-white/5 px-7 text-white hover:bg-white/10"
          >
            View Packages
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
