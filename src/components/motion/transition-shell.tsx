"use client";

import { ReactNode } from "react";
import { PageTransition } from "@/components/motion/page-transition";

type TransitionShellProps = {
  children: ReactNode;
};

export function TransitionShell({ children }: TransitionShellProps) {
  return <PageTransition>{children}</PageTransition>;
}
