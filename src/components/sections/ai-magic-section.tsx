"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Camera, ScanFace, Sparkles, WandSparkles, Zap } from "lucide-react";

const orbitItems = [
  { icon: Camera, label: "צילום חכם", delay: 0 },
  { icon: ScanFace, label: "זיהוי דמויות", delay: 0.12 },
  { icon: WandSparkles, label: "מנוע יצירה AI", delay: 0.24 },
  { icon: Sparkles, label: "תוצאה קולנועית", delay: 0.36 },
];

const copyVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.05 },
  },
};

const copyItem = {
  hidden: { opacity: 0, x: 48, filter: "blur(10px)" },
  show: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function AiMagicSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.9", "end 0.1"],
  });

  const headerY = useTransform(scrollYProgress, [0, 0.35], [56, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const sceneScale = useTransform(scrollYProgress, [0, 0.45], [0.88, 1]);
  const glowIntensity = useTransform(scrollYProgress, [0.2, 0.6], [0.45, 1]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18, mass: 0.4 });

  const rotateX = useTransform(springY, [-0.5, 0.5], reduce ? [0, 0] : [16, -16]);
  const rotateY = useTransform(springX, [-0.5, 0.5], reduce ? [0, 0] : [-16, 16]);

  const spotX = useTransform(springX, [-0.5, 0.5], ["18%", "82%"]);
  const spotY = useTransform(springY, [-0.5, 0.5], ["12%", "88%"]);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${spotX} ${spotY}, rgba(232,121,249,0.38), transparent 55%)`;

  const onSceneMove = (e: React.MouseEvent) => {
    if (!sceneRef.current || reduce) return;
    const r = sceneRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };

  const onSceneLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative overflow-hidden rounded-3xl border border-white/10 bg-black px-6 py-14 md:px-10 md:py-20"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background: reduce
            ? "radial-gradient(circle at 30% 20%, rgba(168,85,247,0.2), transparent 40%), radial-gradient(circle at 70% 80%, rgba(34,211,238,0.18), transparent 42%)"
            : spotlight,
        }}
      />
      <motion.div
        className="pointer-events-none absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-fuchsia-600/30 blur-[100px]"
        style={{ opacity: glowIntensity }}
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                x: [0, 24, 0],
                y: [0, -16, 0],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/25 blur-[110px]"
        style={{ opacity: glowIntensity }}
        animate={
          reduce
            ? undefined
            : {
                scale: [1.08, 1, 1.08],
                x: [0, -20, 0],
                y: [0, 20, 0],
              }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <motion.div
          variants={copyVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          style={reduce ? undefined : { y: headerY, opacity: headerOpacity }}
          className="space-y-5 text-right"
        >
          <motion.span
            variants={copyItem}
            whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(232,121,249,0.35)" }}
            className="inline-flex cursor-default items-center gap-2 rounded-full border border-fuchsia-300/35 bg-fuchsia-300/10 px-3 py-1.5 text-xs text-fuchsia-100 transition-shadow"
          >
            <motion.span
              animate={reduce ? undefined : { rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="h-3.5 w-3.5" />
            </motion.span>
            Visual AI Engine
          </motion.span>
          <motion.h2
            variants={copyItem}
            className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
          >
            אסי וג&apos;וני Photo Booth AI
            <br />
            הופכים כל אורח לכל דמות שידמיין
          </motion.h2>
          <motion.p variants={copyItem} className="max-w-xl text-zinc-300">
            המצלמה קולטת את הרגע, המנוע החזותי מעבד בזמן אמת, ובתוך שניות האורחים
            מקבלים תמונות בסגנונות יצירתיים - גיבורי-על, שערי מגזין, פנטזיה ועוד.
          </motion.p>
        </motion.div>

        <motion.div
          ref={sceneRef}
          className="relative mx-auto h-[min(420px,70vh)] w-full max-w-lg"
          style={{
            perspective: 1200,
            scale: reduce ? 1 : sceneScale,
          }}
          onMouseMove={onSceneMove}
          onMouseLeave={onSceneLeave}
        >
          <motion.div
            className="relative h-full w-full"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            whileHover={reduce ? undefined : { translateZ: 12 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.25)]"
              style={{ transform: "translateZ(20px)" }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
              className="absolute inset-10 rounded-full border border-fuchsia-400/45 shadow-[0_0_36px_rgba(232,121,249,0.3)]"
              style={{ transform: "translateZ(40px)" }}
            />

            <motion.div
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -10, 0],
                      rotateZ: [0, 2, -2, 0],
                    }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 grid h-32 w-32 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-3xl border border-white/25 bg-gradient-to-br from-zinc-900/95 to-black shadow-[0_0_60px_rgba(34,211,238,0.45),0_0_100px_rgba(232,121,249,0.25)]"
              style={{ transform: "translateZ(80px)" }}
            >
              <motion.div
                animate={
                  reduce
                    ? undefined
                    : { scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }
                }
                transition={{ duration: 2.2, repeat: Infinity }}
              >
                <Camera className="h-12 w-12 text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
              </motion.div>
            </motion.div>

            {orbitItems.map(({ icon: Icon, label, delay }, index) => {
              const angle = (index / orbitItems.length) * Math.PI * 2;
              const x = Math.cos(angle) * 132;
              const y = Math.sin(angle) * 132;

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.75 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 0 28px rgba(232,121,249,0.55)",
                  }}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    transform: `translate(${x}px, ${y}px) translateZ(60px)`,
                  }}
                >
                  <motion.div
                    animate={
                      reduce
                        ? undefined
                        : { y: [0, -6, 0], opacity: [0.85, 1, 0.85] }
                    }
                    transition={{
                      duration: 3 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center gap-2 rounded-full border border-white/20 bg-zinc-950/90 px-3 py-1.5 text-xs text-zinc-100 shadow-[0_0_22px_rgba(34,211,238,0.25)] backdrop-blur-md"
                  >
                    <Icon className="h-3.5 w-3.5 text-fuchsia-300" />
                    {label}
                  </motion.div>
                </motion.div>
              );
            })}

            <motion.div
              animate={{ opacity: [0.25, 0.95, 0.25] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-1/2 top-1/2 h-56 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-300/0 via-cyan-200 to-cyan-300/0"
              style={{ transform: "translateZ(30px)" }}
            />
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              className="absolute left-1/2 top-1/2 h-px w-56 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-fuchsia-400/0 via-fuchsia-300 to-fuchsia-400/0"
              style={{ transform: "translateZ(30px)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
