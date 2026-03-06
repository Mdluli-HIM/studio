"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectHero({ project }: Props) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".project-hero-reveal",
          { opacity: 0, y: 32 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.1,
            ease: "power3.out",
          }
        );

        gsap.to(".project-hero-media", {
          yPercent: 10,
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
      className="relative overflow-hidden border-b border-white/10 bg-black pt-32 pb-16 md:pt-40 md:pb-20"
    >
      <div className="absolute inset-0">
        <div className="project-hero-media absolute inset-0 scale-[1.05]">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.45),rgba(0,0,0,0.78),rgba(0,0,0,0.92))]" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="project-hero-reveal section-label mb-5">
              {project.category}
            </p>

            <div className="overflow-hidden">
              <h1 className="project-hero-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[7rem]">
                {project.title.toUpperCase()}
              </h1>
            </div>

            <p className="project-hero-reveal mt-6 max-w-2xl text-sm leading-7 text-zinc-300 md:text-base">
              {project.intro}
            </p>
          </div>

          <div className="md:col-span-4 md:pl-8">
            <div className="grid gap-4 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.22em] text-zinc-400 md:text-xs">
              <div className="project-hero-reveal flex items-center justify-between gap-4">
                <span>Year</span>
                <span className="text-zinc-200">{project.year}</span>
              </div>
              <div className="project-hero-reveal flex items-center justify-between gap-4">
                <span>Location</span>
                <span className="text-zinc-200">{project.location}</span>
              </div>
              <div className="project-hero-reveal flex items-center justify-between gap-4">
                <span>Client</span>
                <span className="text-zinc-200">{project.client}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
