"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

type PreloaderProps = {
  onComplete: () => void;
};

export function Preloader({ onComplete }: PreloaderProps) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          onComplete: () => {
            onComplete();
          },
        });

        tl.fromTo(
          ".preloader-kicker",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.6 }
        )
          .fromTo(
            ".preloader-title-line",
            { yPercent: 110 },
            { yPercent: 0, duration: 0.9, stagger: 0.08 },
            "-=0.25"
          )
          .fromTo(
            ".preloader-line",
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 1 },
            "-=0.35"
          )
          .fromTo(
            ".preloader-meta",
            { opacity: 0, y: 16 },
            { opacity: 1, y: 0, duration: 0.55, stagger: 0.08 },
            "-=0.7"
          )
          .to({}, { duration: 0.25 })
          .to(".preloader-inner", {
            yPercent: -100,
            duration: 1.1,
            ease: "power4.inOut",
          })
          .to(
            root.current,
            {
              opacity: 0,
              duration: 0.25,
              pointerEvents: "none",
            },
            "-=0.15"
          );
      }, root);

      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[120] bg-black"
      aria-hidden="true"
    >
      <div className="preloader-inner flex h-full flex-col justify-between bg-black px-6 py-6 md:px-10 md:py-8">
        <div className="preloader-kicker flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-zinc-400 md:text-xs">
          <span>High End Visuals</span>
          <span>Loading</span>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-5xl">
            <div className="overflow-hidden">
              <h1 className="preloader-title-line text-center text-5xl leading-[0.9] tracking-[-0.08em] text-white md:text-[8rem]">
                HIGH END
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="preloader-title-line text-center text-5xl leading-[0.9] tracking-[-0.08em] text-zinc-400 md:text-[8rem]">
                VISUALS
              </h1>
            </div>

            <div className="mt-8 md:mt-10">
              <div className="h-px overflow-hidden bg-white/10">
                <div className="preloader-line h-full w-full bg-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-zinc-500 md:text-xs">
          <span className="preloader-meta">Photography / Film</span>
          <span className="preloader-meta">Editorial / Campaign</span>
          <span className="preloader-meta">South Africa</span>
        </div>
      </div>
    </div>
  );
}
