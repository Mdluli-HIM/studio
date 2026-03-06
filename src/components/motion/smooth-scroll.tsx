"use client";

import { ReactLenis } from "lenis/react";

type SmoothScrollProps = {
  children: React.ReactNode;
};

export function SmoothScroll({ children }: SmoothScrollProps) {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.1 }}>
      {children}
    </ReactLenis>
  );
}
