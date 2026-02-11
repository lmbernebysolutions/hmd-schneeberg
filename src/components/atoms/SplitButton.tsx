"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  children: ReactNode;
  href?: string;
  size?: "md" | "lg";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function SplitButton({
  children,
  href,
  size = "md",
  onClick,
  type = "button",
  className = "",
}: Props) {
  const baseClasses = cn(
    "group relative overflow-hidden rounded-hmd font-display font-700 uppercase tracking-widest text-white transition-all duration-300 ease-out hover:shadow-lg hover:shadow-hmd-dark-red/25 active:scale-[0.98] inline-flex items-center justify-center",
    size === "md" && "h-12 px-8 text-sm leading-none",
    size === "lg" && "h-14 px-10 text-base leading-none",
    className
  );

  const content = (
    <>
      {/* Layer 1: Hintergrund (Light Red) */}
      <span
        className="absolute inset-0 bg-hmd-light-red transition-all duration-300 ease-out"
        aria-hidden="true"
      />

      {/* Layer 2: Split-Overlay (Dark Red) mit clip-path */}
      <span
        className="absolute inset-0 bg-hmd-dark-red transition-all duration-300 ease-out group-hover:[clip-path:polygon(55%_0,100%_0,100%_100%,45%_100%)]"
        style={{
          clipPath: "polygon(0 0, 55% 0, 45% 100%, 0 100%)",
        }}
        aria-hidden="true"
      />

      {/* Text Layer */}
      <span className="relative z-10 flex items-center justify-center gap-2 leading-none">
        <span className="leading-none">{children}</span>
        <span className="inline-block translate-x-0 leading-none opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100">
          →
        </span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
}
