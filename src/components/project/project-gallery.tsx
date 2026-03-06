"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import type { Project } from "@/data/projects";
import { ProjectLightbox } from "@/components/project/project-lightbox";

type Props = {
  project: Project;
};

function getAspectClass(aspect: "wide" | "portrait" | "landscape") {
  if (aspect === "wide") return "relative aspect-[16/10] overflow-hidden";
  if (aspect === "portrait")
    return "relative aspect-[4/5] overflow-hidden md:w-[72%]";
  return "relative aspect-[3/2] overflow-hidden md:ml-auto md:w-[78%]";
}

export function ProjectGallery({ project }: Props) {
  const root = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".project-gallery-item",
        { opacity: 0, y: 48 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
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
    <>
      <section
        ref={root}
        className="border-b border-white/10 bg-black py-8 md:py-12"
      >
        <div className="container-luxury space-y-6">
          {project.gallery.map((item, index) => (
            <button
              key={`${project.slug}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="project-gallery-item block w-full overflow-hidden border border-white/10 bg-zinc-950 text-left"
            >
              <div className={getAspectClass(item.aspect)}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="object-cover grayscale transition duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/5 transition hover:bg-black/0" />
              </div>
            </button>
          ))}
        </div>
      </section>

      <ProjectLightbox
        items={project.gallery}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() =>
          setActiveIndex((prev) =>
            prev === null
              ? null
              : (prev - 1 + project.gallery.length) % project.gallery.length
          )
        }
        onNext={() =>
          setActiveIndex((prev) =>
            prev === null ? null : (prev + 1) % project.gallery.length
          )
        }
      />
    </>
  );
}
