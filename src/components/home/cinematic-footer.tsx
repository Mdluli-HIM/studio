"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import { Magnetic } from "@/components/motion/magnetic";

export function CinematicFooter() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".cinematic-kicker, .cinematic-title-line, .cinematic-copy, .cinematic-meta, .cinematic-cta",
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: root.current,
              start: "top 78%",
            },
          }
        );

        gsap.to(".cinematic-bg-media", {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        gsap.to(".cinematic-overlay", {
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
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
      className="relative overflow-hidden border-t border-white/10 bg-black py-24 md:py-36"
    >
      <div className="absolute inset-0">
        <div className="cinematic-bg-media absolute inset-0 scale-[1.08]">
          <Image
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1800&auto=format&fit=crop"
            alt="Cinematic fashion background"
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale"
          />
        </div>

        <div className="cinematic-overlay absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.58),rgba(0,0,0,0.76),rgba(0,0,0,0.92))] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_42%)]" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="mb-10 md:mb-14">
          <p className="cinematic-kicker section-label mb-6">Start a project</p>

          <div className="overflow-hidden">
            <h2 className="cinematic-title-line text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[7.5rem]">
              LET’S CREATE
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="cinematic-title-line text-5xl leading-[0.9] tracking-[-0.07em] text-zinc-300 md:text-[7.5rem]">
              SOMETHING
            </h2>
          </div>
          <div className="overflow-hidden">
            <h2 className="cinematic-title-line text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[7.5rem]">
              UNFORGETTABLE
            </h2>
          </div>
        </div>

        <div className="grid gap-10 border-t border-white/10 pt-8 md:grid-cols-12 md:pt-10">
          <div className="md:col-span-5">
            <p className="cinematic-copy max-w-md text-sm leading-7 text-zinc-300 md:text-base">
              For campaigns, fashion stories, promotional visuals, and cinematic
              portraiture crafted with precision, atmosphere, and a premium
              editorial sensibility.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="cinematic-copy max-w-md text-sm leading-7 text-zinc-300 md:text-base">
              We collaborate with brands, creatives, artists, and founders who
              care deeply about image, detail, and the emotional impact of
              visual storytelling.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="cinematic-cta flex flex-col items-start gap-4 md:items-end">
              <Magnetic strength={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 border border-orange-500 bg-orange-500 px-6 py-3 text-xs uppercase tracking-[0.22em] text-black transition hover:border-white/20 hover:bg-transparent hover:text-white"
                >
                  <span>Enquire now</span>
                  <span
                    aria-hidden="true"
                    className="not-italic font-light text-[1em] leading-none text-current"
                  >
                    &rarr;
                  </span>
                </Link>
              </Magnetic>

              <Link
                href="/work"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-zinc-300 transition hover:text-white"
              >
                <span>View archive</span>
                <span
                  aria-hidden="true"
                  className="not-italic font-light text-[1em] leading-none text-current"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-white/10 pt-6 md:mt-16 md:grid-cols-12">
          <div className="cinematic-meta md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 md:text-xs">
              Based in South Africa / Available worldwide
            </p>
          </div>

          <div className="cinematic-meta md:col-span-4">
            <div className="flex flex-col gap-3 md:flex-row md:flex-wrap md:items-center md:gap-4">
              <Magnetic strength={0.14}>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between border-b border-white/10 pb-2 text-xs uppercase tracking-[0.22em] text-zinc-200 transition hover:text-white md:justify-start md:gap-3 md:border-b-0 md:pb-0"
                >
                  <span>Instagram</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 not-italic font-light text-[1em] leading-none text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                  >
                    &rarr;
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.14}>
                <a
                  href="https://vimeo.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-between border-b border-white/10 pb-2 text-xs uppercase tracking-[0.22em] text-zinc-200 transition hover:text-white md:justify-start md:gap-3 md:border-b-0 md:pb-0"
                >
                  <span>Vimeo</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 not-italic font-light text-[1em] leading-none text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                  >
                    &rarr;
                  </span>
                </a>
              </Magnetic>

              <Magnetic strength={0.14}>
                <a
                  href="mailto:hello@highendvisuals.com"
                  className="group inline-flex items-center justify-between border-b border-white/10 pb-2 text-xs uppercase tracking-[0.22em] text-zinc-200 transition hover:text-white md:justify-start md:gap-3 md:border-b-0 md:pb-0"
                >
                  <span>Email</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-0 not-italic font-light text-[1em] leading-none text-zinc-500 transition duration-300 group-hover:translate-x-1 group-hover:text-white"
                  >
                    &rarr;
                  </span>
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="cinematic-meta md:col-span-4 md:text-right">
            <p className="text-[10px] uppercase tracking-[0.24em] text-zinc-500 md:text-xs">
              Photography / Film / Editorial / Campaigns
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
