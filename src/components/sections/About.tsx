"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FoundationLine } from "@/components/atoms/FoundationLine";
import { SplitButton } from "@/components/atoms/SplitButton";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function About() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <SectionContainer id="ueber-uns" background="white">
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="04" label="ÜBER UNS" />
          <div className="mt-3 w-20">
            <FoundationLine animate={false} />
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative aspect-[4/5] overflow-hidden rounded-hmd"
          >
            {/* Team / Handwerker bei der Arbeit */}
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              alt="HMD GmbH Team bei der Arbeit"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Diagonal Overlay (Split-Effekt) */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(187,38,36,0.15) 0%, rgba(187,38,36,0.15) 50%, transparent 50%)",
              }}
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          >
            <h2 className="font-display text-display-md font-800 text-surface-dark">
              Handwerk mit Anspruch.
            </h2>

            <div className="mt-6 space-y-4 font-body text-body-md text-hmd-grey">
              <p>
                Seit über 15 Jahren steht HMD GmbH für Präzision und Qualität im Innenausbau.
                Unser Team aus erfahrenen Fachkräften realisiert anspruchsvolle Projekte in
                Schneeberg und der gesamten Region Erzgebirge.
              </p>
              <p>
                Ob Neubau, Sanierung oder Umbau — wir verstehen uns als Partner, der Ihre
                Vision mit höchster Handwerkskunst umsetzt. Dabei verbinden wir traditionelles
                Know-how mit modernen Techniken und Materialien.
              </p>
              <p>
                Unsere Philosophie: Jedes Projekt ist einzigartig. Deshalb setzen wir auf
                individuelle Beratung, maßgeschneiderte Lösungen und eine Ausführung, die
                höchsten Ansprüchen gerecht wird.
              </p>
            </div>

            <div className="mt-8">
              <SplitButton href="#kontakt" size="md">
                Mehr erfahren
              </SplitButton>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionContainer>
  );
}
