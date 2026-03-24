"use client";

import type { ReactNode } from "react";

import { useIsClient } from "@/lib/hooks/use-is-client";

type ClientOnlyProps = {
  children: ReactNode;
  /** Shown during SSR and the hydration pass; avoids layout collapse when not null. */
  fallback?: ReactNode;
};

/**
 * Renders children only after the client is active (same outcome as useEffect mount,
 * implemented via useSyncExternalStore in useIsClient to satisfy ESLint and avoid hydration drift).
 */
export default function ClientOnly({
  children,
  fallback = null,
}: ClientOnlyProps) {
  const isClient = useIsClient();
  if (!isClient) {
    return <>{fallback}</>;
  }
  return <>{children}</>;
}
