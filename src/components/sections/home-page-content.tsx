"use client";

import { GlowingDivider } from "@/components/magicui/glowing-divider";
import { AiMagicSection } from "@/components/sections/ai-magic-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";

export function HomePageContent() {
  return (
    <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col gap-6 px-4 py-8 sm:px-6 md:gap-10 md:py-14">
      <HeroSection />
      <GlowingDivider />
      <AiMagicSection />
      <GlowingDivider />
      <GallerySection />
    </div>
  );
}
