"use client";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { useMemo, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { workProjects, type WorkCategory } from "@/data/work-projects";
import { Magnetic } from "@/components/motion/magnetic";

type FilterValue = "All" | WorkCategory;

const filters: FilterValue[] = [
  "All",
  "Photography",
  "Film",
  "Fashion",
  "Promotional",
  "Portrait",
];

const categoryMap: Record<string, FilterValue> = {
  all: "All",
  photography: "Photography",
  film: "Film",
  fashion: "Fashion",
  promotional: "Promotional",
  portrait: "Portrait",
};

function getCategorySlug(filter: FilterValue) {
  return filter.toLowerCase();
}

function getSpan(size: string) {
  if (size === "large") return "md:col-span-7";
  if (size === "medium") return "md:col-span-5";
  return "md:col-span-4";
}

export function WorkArchive() {
  const root = useRef<HTMLElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category")?.toLowerCase() ?? "all";
  const activeFilter = categoryMap[categoryParam] ?? "All";

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return workProjects;
    return workProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  function updateFilter(filter: FilterValue) {
    const params = new URLSearchParams(searchParams.toString());

    if (filter === "All") {
      params.delete("category");
    } else {
      params.set("category", getCategorySlug(filter));
    }

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".work-filter-chip",
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 90%",
          },
        }
      );
    },
    { scope: root }
  );

  useGSAP(
    () => {
      const { gsap } = getGsap();

      if (!gridRef.current) return;

      gsap.fromTo(
        ".work-card",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
        }
      );
    },
    { dependencies: [activeFilter], scope: gridRef, revertOnUpdate: true }
  );

  return (
    <section ref={root} className="bg-black">
      <div className="border-b border-white/10 py-6 md:py-8">
        <div className="container-luxury">
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((filter) => {
              const count =
                filter === "All"
                  ? workProjects.length
                  : workProjects.filter(
                      (project) => project.category === filter
                    ).length;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => updateFilter(filter)}
                  className={clsx(
                    "work-filter-chip inline-flex items-center gap-3 border px-4 py-2 text-[10px] uppercase tracking-[0.22em] transition md:text-xs",
                    activeFilter === filter
                      ? "border-white bg-white text-black"
                      : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                  )}
                >
                  <span>{filter}</span>
                  <span
                    className={clsx(
                      "text-[9px] md:text-[10px]",
                      activeFilter === filter
                        ? "text-black/70"
                        : "text-zinc-600"
                    )}
                  >
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-10 md:py-14">
        <div className="container-luxury">
          <div className="mb-8 flex flex-col gap-3 border-b border-white/10 pb-5 md:flex-row md:items-end md:justify-between">
            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              {activeFilter === "All" ? "All categories" : activeFilter}
            </p>

            <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
              {String(filteredProjects.length).padStart(2, "0")} project
              {filteredProjects.length === 1 ? "" : "s"}
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div ref={gridRef} className="grid gap-6 md:grid-cols-12">
              {filteredProjects.map((project) => (
                <article
                  key={`${activeFilter}-${project.id}`}
                  className={`work-card group ${getSpan(project.size)}`}
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
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover grayscale transition duration-700 ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
                          />

                          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.74),rgba(0,0,0,0.08),rgba(0,0,0,0.18))] opacity-80 transition duration-500 group-hover:opacity-95" />

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
                              <h2 className="max-w-[80%] text-2xl tracking-[-0.05em] text-white md:text-3xl">
                                {project.title}
                              </h2>

                              <span className="translate-y-2 text-3xl tracking-[-0.05em] text-zinc-400 transition duration-500 group-hover:translate-y-0 group-hover:text-white">
                                {project.id}
                              </span>
                            </div>

                            <div className="flex items-center justify-between border-t border-white/15 pt-3">
                              <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 transition duration-500 group-hover:text-zinc-200">
                                View Project
                              </span>
                              <span className="text-sm text-zinc-300 transition duration-500 group-hover:translate-x-1 group-hover:text-white">
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
          ) : (
            <div className="border border-white/10 bg-zinc-950 px-6 py-12 text-center md:px-10 md:py-16">
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
                No projects found
              </p>
              <p className="mt-4 text-lg tracking-[-0.03em] text-zinc-200 md:text-2xl">
                No work is available in this category yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
