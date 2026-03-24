"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryItems = [
  {
    title: "Wedding Glam",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Corporate Luxe",
    src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Brand Activations",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
  },
];

export function GallerySection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Signature Gallery
        </h2>
        <p className="text-zinc-300">
          Interactive previews that reflect our polished, premium visual style.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -5, scale: 1.01 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-950"
          >
            <Image
              src={item.src}
              alt={item.title}
              width={900}
              height={1200}
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-sm font-medium tracking-wide text-white">
                {item.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
