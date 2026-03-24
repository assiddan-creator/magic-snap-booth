/** Static shell for SSR / pre-mount — matches page width and dark theme, no motion. */
export function HomePageSkeleton() {
  return (
    <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col gap-6 px-4 py-8 sm:px-6 md:gap-10 md:py-14">
      <div className="h-[min(28rem,70vh)] animate-pulse rounded-3xl bg-zinc-900/90" />
      <div className="h-20 w-full animate-pulse rounded-full bg-zinc-900/50" />
      <div className="h-[min(24rem,60vh)] animate-pulse rounded-3xl bg-black" />
      <div className="h-20 w-full animate-pulse rounded-full bg-zinc-900/50" />
      <div className="grid gap-4 md:grid-cols-3">
        <div className="h-72 animate-pulse rounded-2xl bg-zinc-900/80" />
        <div className="h-72 animate-pulse rounded-2xl bg-zinc-900/80" />
        <div className="h-72 animate-pulse rounded-2xl bg-zinc-900/80" />
      </div>
    </div>
  );
}
