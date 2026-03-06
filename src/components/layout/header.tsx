"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import { getGsap } from "@/lib/gsap/gsap";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function getRouteCue(pathname: string) {
  if (pathname.startsWith("/work/")) {
    return {
      label: "Project",
      title: "CASE STUDY",
    };
  }

  if (pathname.startsWith("/work")) {
    return {
      label: "Archive",
      title: "SELECTED WORK",
    };
  }

  if (pathname.startsWith("/about")) {
    return {
      label: "Studio",
      title: "ABOUT THE STUDIO",
    };
  }

  if (pathname.startsWith("/services")) {
    return {
      label: "Offerings",
      title: "VISUAL SERVICES",
    };
  }

  if (pathname.startsWith("/contact")) {
    return {
      label: "Enquiries",
      title: "START A PROJECT",
    };
  }

  return {
    label: "Home",
    title: "HIGH END VISUALS",
  };
}

export function Header() {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const routeCue = useMemo(() => getRouteCue(pathname), [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useGSAP(
    () => {
      if (!menuRef.current) return;
      const { gsap } = getGsap();

      if (isMenuOpen) {
        gsap.set(menuRef.current, {
          pointerEvents: "auto",
          opacity: 1,
        });

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        tl.fromTo(
          ".mobile-menu-panel",
          { opacity: 0 },
          { opacity: 1, duration: 0.35 }
        )
          .fromTo(
            ".mobile-menu-cue",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, stagger: 0.06 },
            "-=0.05"
          )
          .fromTo(
            ".mobile-menu-link",
            { y: 36, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, stagger: 0.08 },
            "-=0.1"
          )
          .fromTo(
            ".mobile-menu-meta",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.55, stagger: 0.08 },
            "-=0.35"
          );
      } else {
        const tl = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          onComplete: () => {
            if (!menuRef.current) return;
            gsap.set(menuRef.current, {
              pointerEvents: "none",
              opacity: 0,
            });
          },
        });

        tl.to(".mobile-menu-meta", {
          y: 10,
          opacity: 0,
          duration: 0.2,
          stagger: 0.04,
        })
          .to(
            ".mobile-menu-link",
            {
              y: 24,
              opacity: 0,
              duration: 0.28,
              stagger: 0.04,
            },
            "-=0.1"
          )
          .to(
            ".mobile-menu-cue",
            {
              y: 12,
              opacity: 0,
              duration: 0.2,
              stagger: 0.04,
            },
            "-=0.18"
          )
          .to(
            ".mobile-menu-panel",
            {
              opacity: 0,
              duration: 0.25,
            },
            "-=0.08"
          );
      }
    },
    { dependencies: [isMenuOpen], scope: menuRef, revertOnUpdate: true }
  );

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isScrolled || isMenuOpen
            ? "border-b border-white/10 bg-black/55 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="container-luxury flex items-center justify-between py-5 md:py-6">
          <Link
            href="/"
            className="text-[10px] uppercase tracking-[0.28em] text-zinc-100 transition hover:text-white md:text-xs"
            data-cursor="Home"
          >
            High End Visuals
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-cursor="Open"
                  className="group relative text-[10px] uppercase tracking-[0.24em] text-zinc-300 transition hover:text-white md:text-xs"
                >
                  <span>{link.label}</span>
                  <span
                    className={clsx(
                      "absolute -bottom-2 left-0 h-px bg-white transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-zinc-200 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
            <span className="relative block h-3 w-4">
              <span
                className={clsx(
                  "absolute left-0 top-0 h-px w-4 bg-white transition-all duration-300",
                  isMenuOpen ? "top-1.5 rotate-45" : ""
                )}
              />
              <span
                className={clsx(
                  "absolute left-0 top-2.5 h-px w-4 bg-white transition-all duration-300",
                  isMenuOpen ? "top-1.5 -rotate-45" : ""
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="pointer-events-none fixed inset-0 z-40 opacity-0 md:hidden"
      >
        <div className="mobile-menu-panel absolute inset-0 bg-black/96" />

        <div className="container-luxury relative flex min-h-screen flex-col justify-between pt-28 pb-8">
          <div className="mb-8 border-b border-white/10 pb-6">
            <p className="mobile-menu-cue mb-3 text-[10px] uppercase tracking-[0.24em] text-zinc-500">
              {routeCue.label}
            </p>

            <div className="overflow-hidden">
              <h2 className="mobile-menu-cue text-3xl leading-[0.95] tracking-[-0.06em] text-zinc-200">
                {routeCue.title}
              </h2>
            </div>
          </div>

          <nav className="flex flex-1 flex-col gap-4">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === link.href
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "mobile-menu-link group flex items-end justify-between border-b border-white/10 pb-4 text-4xl tracking-[-0.06em] transition",
                    isActive ? "text-white" : "text-zinc-400"
                  )}
                >
                  <span>{link.label}</span>

                  <span
                    className={clsx(
                      "text-[10px] uppercase tracking-[0.24em] transition",
                      isActive
                        ? "text-zinc-200"
                        : "text-zinc-600 group-hover:text-zinc-300"
                    )}
                  >
                    {isActive ? "Current" : "Open"}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="grid gap-4 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            <p className="mobile-menu-meta">Photography / Film / Editorial</p>
            <p className="mobile-menu-meta">
              South Africa / Available worldwide
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
