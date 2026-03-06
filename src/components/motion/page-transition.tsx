"use client";

import { ReactNode, useRef } from "react";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

type PageTransitionProps = {
  children: ReactNode;
};

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.set(".page-transition-overlay", {
          yPercent: 0,
        })
          .fromTo(
            ".page-transition-content",
            { opacity: 0, y: 28, scale: 0.992 },
            { opacity: 1, y: 0, scale: 1, duration: 0.9 },
            0.15
          )
          .to(
            ".page-transition-overlay",
            {
              yPercent: -100,
              duration: 1,
              ease: "power4.inOut",
            },
            0
          );
      }, root);

      return () => ctx.revert();
    },
    { scope: root, dependencies: [pathname], revertOnUpdate: true }
  );

  return (
    <div ref={root} className="relative">
      <div className="page-transition-overlay pointer-events-none fixed inset-0 z-[90] bg-[linear-gradient(to_bottom,#000000,#050505,#000000)]" />
      <div className="page-transition-content will-change-transform">
        {children}
      </div>
    </div>
  );
}
