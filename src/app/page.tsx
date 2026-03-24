import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="relative flex min-h-screen flex-col overflow-hidden bg-zinc-950 font-sans text-right"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_45%)]" />

      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-12 px-6 py-10 md:py-16">
        <HeroSection />
        <GallerySection />
      </div>
    </main>
  );
}
