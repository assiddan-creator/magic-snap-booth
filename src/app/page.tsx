import { AiMagicSection } from "@/components/sections/ai-magic-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="relative isolate flex min-h-[100dvh] w-full flex-col overflow-x-clip overflow-y-visible bg-zinc-950 font-sans text-right"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_45%)]" />

      <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col gap-8 px-4 py-8 sm:px-6 md:gap-12 md:py-14">
        <HeroSection />
        <div className="h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />
        <AiMagicSection />
        <div className="h-px bg-gradient-to-l from-transparent via-cyan-300/30 to-transparent" />
        <GallerySection />
      </div>
    </main>
  );
}
