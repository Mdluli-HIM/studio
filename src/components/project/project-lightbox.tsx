"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { ProjectGalleryItem } from "@/data/projects";

type Props = {
  items: ProjectGalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export function ProjectLightbox({
  items,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const isOpen = activeIndex !== null;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !activeItem) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md">
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 md:px-8">
          <p className="text-[10px] uppercase tracking-[0.22em] text-zinc-400 md:text-xs">
            Image {String((activeIndex ?? 0) + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="text-[10px] uppercase tracking-[0.22em] text-zinc-300 transition hover:text-white md:text-xs"
          >
            Close
          </button>
        </div>

        <div className="relative flex flex-1 items-center justify-center px-4 py-6 md:px-10 md:py-10">
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 z-10 hidden border border-white/10 bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white md:block"
          >
            Prev
          </button>

          <div className="relative h-full w-full max-w-6xl">
            <Image
              src={activeItem.src}
              alt={activeItem.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 z-10 hidden border border-white/10 bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white md:block"
          >
            Next
          </button>
        </div>

        <div className="border-t border-white/10 px-4 py-4 md:px-8">
          <p className="text-sm tracking-[-0.02em] text-zinc-300">
            {activeItem.alt}
          </p>
        </div>
      </div>
    </div>
  );
}