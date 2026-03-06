"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
};

export function ProjectStory({ project }: Props) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".project-story-reveal",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
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
        <div className="md:col-span-3">
          <p className="project-story-reveal section-label">Project Story</p>
        </div>

        <div className="md:col-span-9">
          <p className="project-story-reveal max-w-4xl text-3xl leading-[1.05] tracking-[-0.05em] text-zinc-100 md:text-6xl">
            {project.intro}
          </p>

          <p className="project-story-reveal mt-8 max-w-3xl text-sm leading-8 text-zinc-400 md:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </section>
  );
}
