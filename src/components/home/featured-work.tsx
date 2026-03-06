"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import { Magnetic } from "@/components/motion/magnetic";

const projects = [
  {
    id: "01",
    title: "Noir Faces",
    category: "Editorial Portraits",
    year: "2026",
    slug: "noir-faces",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "02",
    title: "Velvet Motion",
    category: "Campaign Film",
    year: "2026",
    slug: "velvet-motion",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "03",
    title: "Afterlight",
    category: "Promotional Visuals",
    year: "2025",
    slug: "afterlight",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop",
  },
];

export function FeaturedWork() {
  const root = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".featured-heading-reveal",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".featured-card",
        { opacity: 0, y: 56 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".featured-grid",
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
      className="border-b border-white/10 bg-black py-20 md:py-32"
    >
      <div className="container-luxury">
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="featured-heading-reveal section-label mb-5">
              Featured Work
            </p>

            <div className="overflow-hidden">
              <h2 className="featured-heading-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[7rem]">
                SELECTED
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="featured-heading-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-zinc-500 md:text-[7rem]">
                PROJECTS
              </h2>
            </div>
          </div>

          <div className="featured-heading-reveal md:col-span-5 md:pl-10">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              A curated selection of fashion, portrait, and promotional work
              presented with a stronger editorial rhythm and cinematic feel.
            </p>
          </div>
        </div>

        <div className="featured-grid grid gap-6 md:grid-cols-12">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`featured-card group ${
                index === 0
                  ? "md:col-span-5"
                  : index === 1
                    ? "md:col-span-4"
                    : "md:col-span-3"
              }`}
            >
              <Magnetic strength={0.12}>
                <Link
                  href={`/work/${project.slug}`}
                  className="block"
                  data-cursor="View"
                >
                  <div className="overflow-hidden border border-white/10 bg-zinc-950">
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.06] group-hover:-translate-y-2 group-hover:grayscale-0"
                      />

                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),rgba(0,0,0,0.08),rgba(0,0,0,0.18))] opacity-70 transition duration-500 group-hover:opacity-90" />

                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-5">
                        <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-200">
                          {project.category}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-300">
                          {project.year}
                        </span>
                      </div>

                      <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                        <div className="mb-3 flex items-end justify-between gap-4">
                          <h3 className="max-w-[80%] text-2xl tracking-[-0.05em] text-white md:text-3xl">
                            {project.title}
                          </h3>

                          <span className="translate-y-2 text-3xl tracking-[-0.05em] text-zinc-400 transition duration-500 group-hover:translate-y-0 group-hover:text-white">
                            {project.id}
                          </span>
                        </div>

                        <div className="flex items-center justify-between border-t border-white/15 pt-3">
                          <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 transition duration-500 group-hover:text-zinc-200">
                            View Project
                          </span>

                          <span className="translate-x-0 text-sm text-zinc-300 transition duration-500 group-hover:translate-x-1 group-hover:text-white">
                            →
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Magnetic>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 md:mt-14 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Direction-led storytelling / photography / film / editorial
          </p>

          <Link
            href="/work"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-zinc-300 transition hover:text-white"
          >
            <span>View all work</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
