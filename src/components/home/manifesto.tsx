"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

export function Manifesto() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap, ScrollTrigger } = getGsap();

      gsap.fromTo(
        ".manifesto-reveal",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: root.current,
            start: "top 75%",
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="border-b border-white/10 bg-black py-20 md:py-32"
    >
      <div className="container-luxury grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <p className="manifesto-reveal section-label">Manifesto</p>
        </div>

        <div className="md:col-span-9">
          <p className="manifesto-reveal max-w-5xl text-3xl leading-[1.05] tracking-[-0.05em] text-zinc-100 md:text-6xl">
            We create image-driven experiences with cinematic restraint,
            editorial sensitivity, and a deep respect for atmosphere.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <p className="manifesto-reveal max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
              Our work is shaped by fashion, film, portraiture, movement, and
              mood. Every frame is directed to feel intentional, tactile, and
              emotionally precise.
            </p>

            <p className="manifesto-reveal max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
              From campaign films to still imagery, we design visual worlds that
              feel modern, minimal, and unmistakably premium.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
