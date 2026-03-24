"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/** True on the client; false during SSR and the first server render snapshot. */
export function useIsClient() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}
