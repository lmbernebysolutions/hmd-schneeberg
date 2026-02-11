"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  width?: string;
  animate?: boolean;
  delay?: number;
  className?: string;
}

export function FoundationLine({
  width = "100%",
  animate = true,
  delay = 0,
  className = "",
}: Props) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  if (!animate) {
    return (
      <div
        className={cn("h-[3px] bg-gradient-to-r from-hmd-dark-red to-hmd-light-red", className)}
        style={{ width }}
      />
    );
  }

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ scaleX: 0 }}
      animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
      className={cn("h-[3px] origin-left bg-gradient-to-r from-hmd-dark-red to-hmd-light-red", className)}
      style={{ width }}
    />
  );
}
