"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import type { Project } from "@/data/projects";

type Props = {
  previousProject: Project;
  nextProject: Project;
};

export function ProjectPagination({ previousProject, nextProject }: Props) {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".project-pagination-reveal",
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
      <div className="container-luxury grid gap-10 md:grid-cols-2 md:gap-8">
        <Link
          href={`/work/${previousProject.slug}`}
          className="project-pagination-reveal block border border-white/10 p-6 transition hover:border-white/25 md:p-8"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
            Previous Project
          </p>
          <h2 className="text-3xl leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
            {previousProject.title.toUpperCase()}
          </h2>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-400">
            {previousProject.category} / {previousProject.year}
          </p>
        </Link>

        <Link
          href={`/work/${nextProject.slug}`}
          className="project-pagination-reveal block border border-white/10 p-6 transition hover:border-white/25 md:p-8"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-zinc-500 md:text-xs">
            Next Project
          </p>
          <h2 className="text-3xl leading-[0.95] tracking-[-0.06em] text-white md:text-5xl">
            {nextProject.title.toUpperCase()}
          </h2>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-zinc-400">
            {nextProject.category} / {nextProject.year}
          </p>
        </Link>
      </div>
    </section>
  );
}
