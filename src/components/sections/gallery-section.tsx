"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const galleryItems = [
  {
    title: "חתונת יוקרה",
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "אירוע עסקי",
    src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=85",
  },
  {
    title: "חגיגה פרטית",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=85",
  },
];

const headerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function GallerySection() {
  const reduce = useReducedMotion();

  return (
    <motion.section
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-8 text-right"
    >
      <motion.div
        variants={headerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="space-y-2"
      >
        <motion.h2
          variants={lineVariants}
          className="text-2xl font-semibold tracking-tight text-white md:text-3xl"
        >
          הגלריה שלנו
        </motion.h2>
        <motion.p variants={lineVariants} className="text-zinc-300">
          טעימה מהרגעים הקסומים שאנחנו יוצרים
        </motion.p>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 28, rotateX: reduce ? 0 : 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={
              reduce
                ? undefined
                : {
                    y: -8,
                    scale: 1.02,
                    transition: { type: "spring", stiffness: 320, damping: 22 },
                  }
            }
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            style={{ perspective: 1000, transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            >
              <div className="absolute inset-0 bg-gradient-to-t from-fuchsia-500/25 via-transparent to-cyan-400/20" />
              <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(34,211,238,0.15)]" />
            </motion.div>
            <Image
              src={item.src}
              alt={item.title}
              width={900}
              height={1200}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSIxNjAwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IGZpbGw9IiMxODE4MWIiIHdpZHRoPSIxMjAwIiBoZWlnaHQ9IjE2MDAiLz48L3N2Zz4="
              className="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <motion.div
              className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4"
              initial={false}
              whileHover={{ paddingBottom: "1.35rem" }}
            >
              <h3 className="text-sm font-medium tracking-wide text-white drop-shadow-[0_0_12px_rgba(0,0,0,0.8)]">
                {item.title}
              </h3>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
