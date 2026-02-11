"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FoundationLine } from "@/components/atoms/FoundationLine";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    icon: "solar:home-2-bold-duotone",
    title: "Trockenbau",
    description:
      "Professioneller Trockenbau für Wohn- und Gewerbeimmobilien. Von der Planung bis zur Umsetzung — präzise und termingerecht.",
  },
  {
    icon: "solar:buildings-bold-duotone",
    title: "Innenausbau",
    description:
      "Hochwertiger Innenausbau nach Maß. Wir realisieren Ihre individuellen Wünsche mit höchster Handwerkskunst und Liebe zum Detail.",
  },
  {
    icon: "solar:soundwave-bold-duotone",
    title: "Akustikbau",
    description:
      "Akustische Optimierung von Räumen durch spezialisierte Trockenbau-Systeme. Für besseren Schallschutz und Raumakustik.",
  },
  {
    icon: "solar:shield-bold-duotone",
    title: "Brandschutz",
    description:
      "Zertifizierter Brandschutz im Trockenbau. Wir sorgen für Sicherheit nach den neuesten baulichen und rechtlichen Standards.",
  },
  {
    icon: "solar:refresh-bold-duotone",
    title: "Sanierung",
    description:
      "Fachgerechte Sanierung von Altbauten und Bestandsimmobilien. Mit Erfahrung und moderner Technik hauchen wir alten Räumen neues Leben ein.",
  },
  {
    icon: "solar:window-frame-bold-duotone",
    title: "Fassade",
    description:
      "Fassadenarbeiten vom Fachbetrieb. Ob Neubau oder Renovierung — wir schaffen ansprechende und langlebige Gebäudehüllen.",
  },
] as const;

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1], // Snap-in easing
        delay: index * 0.08,
      }}
      className="group relative overflow-hidden rounded-hmd border border-hmd-grey/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-hmd-light-red/30 hover:shadow-md hover:shadow-hmd-dark-red/5"
    >
      {/* Icon */}
      <Icon
        icon={service.icon}
        className="mb-6 text-[40px]"
        style={{
          color: "#bb2624",
          // @ts-ignore - CSS custom property for iconify duotone
          "--icon-secondary-color": "#e43e22",
        } as React.CSSProperties}
      />

      {/* Title */}
      <h3 className="font-display text-lg font-800 text-surface-dark">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-3 font-body text-body-md text-hmd-grey">
        {service.description}
      </p>

      {/* Foundation Line on Hover */}
      <div
        className={cn(
          "absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-hmd-dark-red to-hmd-light-red transition-transform duration-400 ease-out group-hover:scale-x-100"
        )}
      />
    </motion.div>
  );
}

export function Services() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <SectionContainer id="leistungen" background="surface">
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <SectionLabel number="02" label="LEISTUNGEN" />
          <div className="mt-3 w-20">
            <FoundationLine animate={false} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 font-display text-display-md font-800 text-surface-dark"
        >
          Was wir für Sie bauen.
        </motion.h2>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
