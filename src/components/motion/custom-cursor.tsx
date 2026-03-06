"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

type CursorState = {
  label: string;
  active: boolean;
};

export function CustomCursor() {
  const root = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    label: "",
    active: false,
  });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useGSAP(
    () => {
      if (!enabled || !dotRef.current || !ringRef.current) return;

      const { gsap } = getGsap();

      const xDot = gsap.quickTo(dotRef.current, "x", {
        duration: 0.12,
        ease: "power3.out",
      });
      const yDot = gsap.quickTo(dotRef.current, "y", {
        duration: 0.12,
        ease: "power3.out",
      });

      const xRing = gsap.quickTo(ringRef.current, "x", {
        duration: 0.28,
        ease: "power3.out",
      });
      const yRing = gsap.quickTo(ringRef.current, "y", {
        duration: 0.28,
        ease: "power3.out",
      });

      const handleMove = (event: MouseEvent) => {
        xDot(event.clientX);
        yDot(event.clientY);
        xRing(event.clientX);
        yRing(event.clientY);

        const target = event.target as HTMLElement | null;
        const cursorTarget = target?.closest?.(
          "[data-cursor]"
        ) as HTMLElement | null;

        if (cursorTarget) {
          setCursorState({
            label: cursorTarget.dataset.cursor ?? "",
            active: true,
          });
        } else {
          setCursorState({
            label: "",
            active: false,
          });
        }
      };

      const handleLeave = () => {
        setCursorState({
          label: "",
          active: false,
        });
      };

      window.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseleave", handleLeave);

      return () => {
        window.removeEventListener("mousemove", handleMove);
        document.removeEventListener("mouseleave", handleLeave);
      };
    },
    { dependencies: [enabled] }
  );

  if (!enabled) return null;

  return (
    <div
      ref={root}
      className="pointer-events-none fixed inset-0 z-[110] hidden md:block"
      aria-hidden="true"
    >
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${cursorState.active ? "is-active" : ""}`}
      >
        <span className="custom-cursor-label">{cursorState.label}</span>
      </div>

      <div ref={dotRef} className="custom-cursor-dot" />
    </div>
  );
}
