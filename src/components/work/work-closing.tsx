"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

export function WorkClosing() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".work-closing-reveal",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 82%",
          },
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="border-t border-white/10 bg-black py-20 md:py-28"
    >
      <div className="container-luxury">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="work-closing-reveal section-label mb-5">Continue</p>

            <div className="overflow-hidden">
              <h2 className="work-closing-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[6rem]">
                LET’S BUILD
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="work-closing-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-zinc-400 md:text-[6rem]">
                THE NEXT STORY
              </h2>
            </div>
          </div>

          <div className="md:col-span-4 md:pl-10">
            <p className="work-closing-reveal mb-6 max-w-md text-sm leading-7 text-zinc-400">
              Explore the archive, then reach out when you are ready to shape
              something cinematic, minimal, and unforgettable.
            </p>

            <Link
              href="/contact"
              className="work-closing-reveal inline-flex items-center gap-3 border border-[#2f6b47] bg-[#2f6b47] px-6 py-3 text-xs uppercase tracking-[0.22em] text-white transition hover:border-white/20 hover:bg-transparent hover:text-white"
            >
              <span>Start a project</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
