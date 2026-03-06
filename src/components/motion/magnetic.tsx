"use client";

import { ReactNode, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

type MagneticProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export function Magnetic({
  children,
  className = "",
  strength = 0.22,
}: MagneticProps) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const { gsap } = getGsap();

      const media = window.matchMedia("(pointer: fine)");
      if (!media.matches) return;

      const xTo = gsap.quickTo(el, "x", {
        duration: 0.35,
        ease: "power3.out",
      });

      const yTo = gsap.quickTo(el, "y", {
        duration: 0.35,
        ease: "power3.out",
      });

      const handleMove = (event: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;

        xTo(x * strength);
        yTo(y * strength);
      };

      const handleLeave = () => {
        xTo(0);
        yTo(0);
      };

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: root, dependencies: [strength] }
  );

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
