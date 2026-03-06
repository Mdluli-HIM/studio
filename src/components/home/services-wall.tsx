"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";
import clsx from "clsx";

const services = [
  {
    id: "01",
    name: "Photography",
    eyebrow: "Still imagery",
    description:
      "Editorial, portrait, campaign, event, and high-end visual storytelling shaped with atmosphere, restraint, and precision.",
    meta: ["Editorial", "Portrait", "Campaign", "Events"],
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "02",
    name: "Film",
    eyebrow: "Motion direction",
    description:
      "Cinematic promotional films, branded content, and visual narratives designed to feel immersive, controlled, and emotionally sharp.",
    meta: ["Brand Films", "Promos", "Campaigns", "Motion"],
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "03",
    name: "Fashion",
    eyebrow: "Editorial styling",
    description:
      "Style-driven direction for lookbooks, studio shoots, and fashion concepts with a premium visual language and modern editorial edge.",
    meta: ["Lookbooks", "Studio", "Editorial", "Styling"],
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "04",
    name: "Promotional",
    eyebrow: "Brand visibility",
    description:
      "Premium media assets for launches, campaigns, and brand storytelling across digital, social, and commercial platforms.",
    meta: ["Launches", "Ads", "Social", "Commercial"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
  },
];

export function ServicesWall() {
  const root = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const { gsap } = getGsap();

      gsap.fromTo(
        ".services-heading-reveal",
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
        ".service-row",
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-list",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".services-preview",
        { opacity: 0, y: 34, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-preview",
            start: "top 85%",
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
            <p className="services-heading-reveal section-label mb-5">
              Services
            </p>

            <div className="overflow-hidden">
              <h2 className="services-heading-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-white md:text-[7rem]">
                VISUAL
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="services-heading-reveal text-5xl leading-[0.9] tracking-[-0.07em] text-zinc-500 md:text-[7rem]">
                DISCIPLINES
              </h2>
            </div>
          </div>

          <div className="services-heading-reveal md:col-span-5 md:pl-10">
            <p className="max-w-md text-sm leading-7 text-zinc-400 md:text-base">
              A refined service system built around image, movement, direction,
              and atmosphere, presented with a stronger editorial feel.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-12 md:gap-10">
          <div className="services-list md:col-span-7">
            <div className="border-t border-white/10">
              {services.map((service, index) => {
                const isActive = active === index;

                return (
                  <button
                    key={service.name}
                    type="button"
                    onMouseEnter={() => setActive(index)}
                    onFocus={() => setActive(index)}
                    className={clsx(
                      "service-row group relative flex w-full items-start justify-between gap-6 border-b border-white/10 py-6 text-left transition md:py-7",
                      isActive ? "text-white" : "text-zinc-500"
                    )}
                  >
                    <div className="flex min-w-0 flex-1 items-start gap-4 md:gap-6">
                      <span
                        className={clsx(
                          "mt-2 text-[10px] uppercase tracking-[0.24em] transition md:text-xs",
                          isActive ? "text-zinc-300" : "text-zinc-600"
                        )}
                      >
                        {service.id}
                      </span>

                      <div className="min-w-0">
                        <p
                          className={clsx(
                            "mb-2 text-[10px] uppercase tracking-[0.24em] transition md:text-xs",
                            isActive ? "text-zinc-300" : "text-zinc-600"
                          )}
                        >
                          {service.eyebrow}
                        </p>

                        <h3
                          className={clsx(
                            "text-4xl leading-none tracking-[-0.06em] transition duration-300 md:text-7xl",
                            isActive ? "text-white" : "text-zinc-500"
                          )}
                        >
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <span
                        className={clsx(
                          "inline-block translate-x-0 text-sm transition duration-300",
                          isActive
                            ? "text-white"
                            : "text-zinc-600 group-hover:text-zinc-300"
                        )}
                      >
                        →
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="services-preview sticky top-28">
              <div className="overflow-hidden border border-white/10 bg-zinc-950">
                <div className="relative aspect-[4/5] overflow-hidden">
                  {services.map((service, index) => (
                    <div
                      key={service.name}
                      className={clsx(
                        "absolute inset-0 transition-all duration-700 ease-out",
                        active === index
                          ? "opacity-100 scale-100"
                          : "pointer-events-none opacity-0 scale-[1.04]"
                      )}
                    >
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover grayscale"
                        priority={index === 0}
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.08),rgba(0,0,0,0.18))]" />
                    </div>
                  ))}

                  <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4 md:p-5">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-200">
                      {services[active].eyebrow}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-300">
                      {services[active].id}
                    </span>
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="text-2xl tracking-[-0.05em] text-white md:text-3xl">
                      {services[active].name}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-zinc-300">
                      {services[active].description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {services[active].meta.map((item) => (
                        <span
                          key={item}
                          className="border border-white/15 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-zinc-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 px-4 py-4 md:px-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
                      Direction / Production / Execution
                    </span>
                    <span className="text-sm text-zinc-300">→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 md:mt-14">
          <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
            Photography / motion / fashion / campaigns / premium visual identity
          </p>
        </div>
      </div>
    </section>
  );
}
