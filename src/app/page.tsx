import ClientOnly from "@/components/ClientOnly";
import { HomePageContent } from "@/components/sections/home-page-content";
import { HomePageSkeleton } from "@/components/sections/home-page-skeleton";

export default function Home() {
  return (
    <main
      dir="rtl"
      className="relative isolate flex min-h-[100dvh] w-full flex-col overflow-x-clip overflow-y-visible bg-zinc-950 font-sans text-right"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_45%)]" />

      <ClientOnly fallback={<HomePageSkeleton />}>
        <HomePageContent />
      </ClientOnly>
    </main>
  );
}
