"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FoundationLine } from "@/components/atoms/FoundationLine";
import { SplitButton } from "@/components/atoms/SplitButton";
import { BlueprintGrid } from "@/components/layout/BlueprintGrid";

/**
 * Hero-Konzept: "Die Foundation Line als Trennlinie — Bild als Beweis-Band"
 *
 * Layout folgt dem Implementation Plan (zentrierte Typografie) und der
 * Blaupause-Ästhetik: Die Foundation Line trennt klar "Claim" (Headline/Text)
 * von "Beweis" (ein breites Referenzfoto-Band). Das Bild ist ein integrierter
 * Streifen in Containerbreite, kein konkurrierender Block — Typografie führt.
 */
export function Hero() {
  return (
    <section className="relative min-h-screen bg-white">
      <BlueprintGrid />

      {/* Einspaltig wie im Plan: gleicher Container, klare Hierarchie */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1280px] flex-col justify-center px-6 py-section md:px-12 lg:px-16">
        <div className="w-full">
          {/* CLAIM: Label → Headline → Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <SectionLabel number="01" label="INNENAUSBAU & TROCKENBAU" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center font-display text-display-xl font-900 leading-[0.95] text-surface-dark"
          >
            Präzision,
            <br />
            die man sieht.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mx-auto mt-6 max-w-[600px] text-center font-body text-body-lg leading-relaxed text-hmd-grey"
          >
            Ihr Spezialist für hochwertigen Innenausbau und Trockenbau in der
            Region Schneeberg.
          </motion.p>

          {/* Foundation Line als Trennstrich zwischen Claim und Bild */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="mx-auto mt-10 flex w-[60%] max-w-[400px] justify-center"
          >
            <FoundationLine width="100%" delay={0.8} />
          </motion.div>

          {/* BEWEIS-BAND: Bild als integrierter Streifen in Containerbreite */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 w-full"
          >
            <div className="relative aspect-[21/9] min-h-[160px] w-full overflow-hidden rounded-hmd sm:min-h-[200px] lg:min-h-0">
              <Image
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
                alt="Professioneller Trockenbau und Innenausbau — HMD GmbH"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              {/* Diagonal Split (Brand-Signatur) — dezenter als bei About */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(187,38,36,0.12) 0%, rgba(187,38,36,0.12) 45%, transparent 55%)",
                }}
              />
              {/* Blaupausen-Feeling: hauchzartes Grid auf dem Bild */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(104,105,104,0.5) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(104,105,104,0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />
            </div>
          </motion.div>

          {/* CTA unter dem Bild */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="mt-10 flex justify-center"
          >
            <SplitButton href="#kontakt" size="lg">
              Jetzt anfragen
            </SplitButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
