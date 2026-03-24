"use client";

import { motion } from "framer-motion";
import { Camera, ScanFace, Sparkles, WandSparkles, Zap } from "lucide-react";

const orbitItems = [
  { icon: Camera, label: "צילום חכם", delay: 0 },
  { icon: ScanFace, label: "זיהוי דמויות", delay: 0.15 },
  { icon: WandSparkles, label: "מנוע יצירה AI", delay: 0.3 },
  { icon: Sparkles, label: "תוצאה קולנועית", delay: 0.45 },
];

export function AiMagicSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-12 md:px-10 md:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.25),transparent_34%),radial-gradient(circle_at_80%_75%,rgba(34,211,238,0.2),transparent_36%)]" />

      <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-right"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-3 py-1 text-xs text-fuchsia-100">
            <Zap className="h-3.5 w-3.5" />
            Visual AI Engine
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            אסי וג&apos;וני Photo Booth AI
            <br />
            הופכים כל אורח לכל דמות שידמיין
          </h2>
          <p className="max-w-xl text-zinc-300">
            המצלמה קולטת את הרגע, המנוע החזותי מעבד בזמן אמת, ובתוך שניות האורחים
            מקבלים תמונות בסגנונות יצירתיים - גיבורי-על, שערי מגזין, פנטזיה ועוד.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="relative mx-auto h-[320px] w-full max-w-md"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="absolute inset-6 rounded-full border border-cyan-400/35"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 16, ease: "linear", repeat: Infinity }}
            className="absolute inset-14 rounded-full border border-fuchsia-400/35"
          />

          <motion.div
            animate={{ scale: [1, 1.04, 1], opacity: [0.75, 1, 0.75] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-white/20 bg-zinc-900/90 shadow-[0_0_40px_rgba(34,211,238,0.35)]"
          >
            <Camera className="h-10 w-10 text-cyan-300" />
          </motion.div>

          {orbitItems.map(({ icon: Icon, label, delay }, index) => {
            const angle = (index / orbitItems.length) * Math.PI * 2;
            const x = Math.cos(angle) * 120;
            const y = Math.sin(angle) * 120;

            return (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay }}
                className="absolute left-1/2 top-1/2"
                style={{ transform: `translate(${x}px, ${y}px)` }}
              >
                <div className="flex items-center gap-2 rounded-full border border-white/15 bg-zinc-900/90 px-3 py-1.5 text-xs text-zinc-200 shadow-[0_0_18px_rgba(232,121,249,0.25)]">
                  <Icon className="h-3.5 w-3.5 text-fuchsia-300" />
                  {label}
                </div>
              </motion.div>
            );
          })}

          <motion.div
            animate={{ opacity: [0.25, 0.95, 0.25] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 h-52 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-300 to-cyan-300/0"
          />
          <motion.div
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
            className="absolute left-1/2 top-1/2 h-px w-52 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-fuchsia-300/0 via-fuchsia-300 to-fuchsia-300/0"
          />
        </motion.div>
      </div>
    </section>
  );
}
