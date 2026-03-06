"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

export function WorkHero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".work-hero-reveal",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="border-b border-white/10 bg-black pt-32 pb-16 md:pt-40 md:pb-20"
    >
      <div className="container-luxury">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="work-hero-reveal section-label mb-5">Archive</p>

            <div className="overflow-hidden">
              <h1 className="work-hero-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[8rem]">
                SELECTED
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="work-hero-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-zinc-500 md:text-[8rem]">
                WORK
              </h1>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-10">
            <p className="work-hero-reveal max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              A curated archive of photography, film, fashion, portrait, and
              promotional projects shaped with a cinematic and editorial eye.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
