"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectMetaSticky({ project }: Props) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".project-sticky-reveal",
        { opacity: 0, y: 28 },
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
      className="border-b border-white/10 bg-black py-16 md:py-24"
    >
      <div className="container-luxury grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <p className="project-sticky-reveal section-label mb-6">Details</p>

            <div className="project-sticky-reveal flex flex-wrap gap-2">
              {project.services.map((item) => (
                <span
                  key={item}
                  className="border border-white/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-zinc-300 md:text-xs"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="project-sticky-reveal mt-8 border-t border-white/10 pt-5">
              <div className="space-y-4 text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
                <div className="flex items-center justify-between gap-4">
                  <span>Year</span>
                  <span className="text-zinc-200">{project.year}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Location</span>
                  <span className="text-zinc-200">{project.location}</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Client</span>
                  <span className="text-zinc-200">{project.client}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="border-t border-white/10">
            {project.credits.map((item) => (
              <div
                key={item.role}
                className="project-sticky-reveal flex items-center justify-between gap-6 border-b border-white/10 py-4"
              >
                <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
                  {item.role}
                </span>
                <span className="text-sm tracking-[-0.02em] text-zinc-200 md:text-base">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
