"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  const isOpen = activeIndex !== null;
  const activeItem = activeIndex !== null ? items[activeIndex] : null;

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted || !isOpen || !activeItem) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999] bg-black/95 backdrop-blur-md">
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

        <div className="relative flex flex-1 items-center justify-center px-4 py-4 md:px-10 md:py-10">
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 border border-white/10 bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white md:block"
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
              priority
            />
          </div>

          <button
            type="button"
            onClick={onNext}
            className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 border border-white/10 bg-black/40 px-4 py-3 text-xs uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white md:block"
          >
            Next
          </button>
        </div>

        <div className="border-t border-white/10 px-4 py-4 md:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm tracking-[-0.02em] text-zinc-300">
              {activeItem.alt}
            </p>

            <div className="flex items-center gap-2 md:hidden">
              <button
                type="button"
                onClick={onPrev}
                className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={onNext}
                className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-300 transition hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
