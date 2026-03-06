"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

export function Hero() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          ".hero-kicker",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.8 }
        )
          .fromTo(
            ".hero-frame-main, .hero-frame-left, .hero-frame-right",
            { opacity: 0, scale: 1.08, y: 20 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 1.2,
              stagger: 0.1,
            },
            "-=0.45"
          )
          .fromTo(
            ".hero-title-line",
            { yPercent: 110 },
            { yPercent: 0, duration: 1, stagger: 0.08 },
            "-=0.9"
          )
          .fromTo(
            ".hero-copy",
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 },
            "-=0.55"
          );

        gsap.to(".hero-media-wrap", {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-title-wrap", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-frame-left", {
          yPercent: -10,
          rotate: -10,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-frame-right", {
          yPercent: 12,
          rotate: 9,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-frame-main", {
          scale: 0.94,
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".hero-gradient", {
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }, root);

      return () => ctx.revert();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      className="relative min-h-screen overflow-hidden border-b border-white/10 bg-black"
    >
      <div className="hero-gradient absolute inset-0 opacity-60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_42%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.18),rgba(0,0,0,0.72))]" />
      </div>

      <div className="container-luxury relative flex min-h-screen flex-col justify-between pt-28 pb-6 md:pt-32 md:pb-8">
        <div className="hero-kicker flex items-center justify-between text-[10px] uppercase tracking-[0.24em] text-zinc-300 md:text-xs">
          <span>Studio Noir</span>

          <div className="hidden items-center gap-8 md:flex">
            <span>Fashion</span>
            <span>Promotional</span>
            <span>Photography</span>
            <span>Film</span>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center py-14 md:py-20">
          <div className="hero-media-wrap absolute left-1/2 top-1/2 w-[240px] -translate-x-1/2 -translate-y-1/2 md:w-[340px]">
            <div className="hero-frame-left absolute left-[-14%] top-[8%] aspect-[4/5] w-[78%] rotate-[-8deg] overflow-hidden bg-zinc-900 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
                  alt="Editorial portrait"
                  fill
                  sizes="(max-width: 768px) 180px, 240px"
                  className="object-cover grayscale"
                />
              </div>
            </div>

            <div className="hero-frame-right absolute right-[-12%] top-[14%] aspect-[4/5] w-[76%] rotate-[7deg] overflow-hidden bg-zinc-900 shadow-2xl">
              <div className="relative h-full w-full">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                  alt="Fashion portrait"
                  fill
                  sizes="(max-width: 768px) 175px, 235px"
                  className="object-cover grayscale"
                />
              </div>
            </div>

            <div className="hero-frame-main relative aspect-[4/5] overflow-hidden bg-zinc-950 shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
              <Image
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200&auto=format&fit=crop"
                alt="Hero visual"
                fill
                priority
                sizes="(max-width: 768px) 240px, 340px"
                className="object-cover grayscale"
              />
              <div className="absolute inset-0 bg-black/18" />
            </div>
          </div>

          <div className="hero-title-wrap relative z-10 w-full">
            <div className="overflow-hidden">
              <h1 className="hero-title-line editorial-title text-center">
                VISUAL
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title-line editorial-title text-center">
                WORLDS
              </h1>
            </div>
            <div className="overflow-hidden">
              <h1 className="hero-title-line editorial-title text-center">
                IN MOTION
              </h1>
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.2em] text-zinc-400 md:grid-cols-3">
          <div className="hero-copy">
            <p>High-end photography & film</p>
          </div>

          <div className="hero-copy text-center">
            <p>Editorial / fashion / campaign / portrait</p>
          </div>

          <div className="hero-copy text-left md:text-right">
            <p>Based in South Africa / available worldwide</p>
          </div>
        </div>
      </div>
    </section>
  );
}
