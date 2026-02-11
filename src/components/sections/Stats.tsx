"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FoundationLine } from "@/components/atoms/FoundationLine";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const STATS = [
  { value: 200, suffix: "+", label: "Projekte realisiert" },
  { value: 15, suffix: "+", label: "Jahre Erfahrung" },
  { value: 50, suffix: "+", label: "Fachkräfte im Team" },
  { value: 100, suffix: "%", label: "Leidenschaft" },
] as const;

function Counter({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(count, value, {
        duration: 2,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [isVisible, count, rounded, value, delay]);

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <div className="font-technical text-5xl font-bold tabular-nums text-white">
        {displayValue}
        {suffix}
      </div>
      <div className="mt-3 font-body text-body-md text-white/60">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <SectionContainer id="stats" background="dark">
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <SectionLabel number="03" label="ZAHLEN & FAKTEN" className="text-white" />
        </motion.div>

        {/* Foundation Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-8"
        >
          <FoundationLine width="100%" animate={isVisible} />
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, index) => (
            <Counter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
