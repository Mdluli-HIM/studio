"use client";

import { useEffect, useState } from "react";
import { Preloader } from "@/components/motion/preloader";

const LOADER_KEY = "hev_preloader_seen";

export function SiteLoader() {
  const [shouldShow, setShouldShow] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const hasSeenLoader = sessionStorage.getItem(LOADER_KEY);

    if (!hasSeenLoader) {
      setShouldShow(true);
    }

    setReady(true);
  }, []);

  function handleComplete() {
    sessionStorage.setItem(LOADER_KEY, "true");
    setShouldShow(false);
  }

  if (!ready) return null;
  if (!shouldShow) return null;

  return <Preloader onComplete={handleComplete} />;
}
