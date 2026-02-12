"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionLabel } from "@/components/atoms/SectionLabel";
import { FoundationLine } from "@/components/atoms/FoundationLine";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    id: 1,
    title: "Bürokomplex Schneeberg",
    type: "Innenausbau / Trockenbau",
    span: "md:row-span-2", // Nimmt volle Höhe links ein
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Wohnanlage Erzgebirge",
    type: "Trockenbau / Akustik",
    span: "",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Geschäftshaus Aue",
    type: "Brandschutz / Sanierung",
    span: "",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
  },
] as const;

function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
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
        ease: [0.34, 1.56, 0.64, 1],
        delay: index * 0.1,
      }}
      className={cn(
        "group relative overflow-hidden rounded-hmd bg-white",
        project.span,
        project.span ? "min-h-[600px]" : "min-h-[280px]"
      )}
    >
      {/* Projektbild */}
      <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-103">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover saturate-90 transition-all duration-500 group-hover:saturate-100"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Hover Overlay (von unten nach oben) */}
      <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-hmd-dark-red/90 to-transparent p-8 transition-transform duration-400 ease-out group-hover:translate-y-0">
        <div className="absolute left-8 top-6 w-10">
          <FoundationLine animate={false} />
        </div>

        <div className="mt-12 translate-y-2 opacity-0 transition-all duration-300 delay-200 ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="font-display text-lg font-800 text-white">{project.title}</h3>
          <p className="mt-2 font-technical text-label uppercase text-white/70">
            {project.type}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <SectionContainer id="projekte" background="white">
      <div ref={ref as React.RefObject<HTMLDivElement>}>
        {/* Header — zentriert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <SectionLabel number="05" label="PROJEKTE" />
          <div className="mt-3 w-20">
            <FoundationLine animate={false} />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-center font-display text-display-md font-800 text-surface-dark"
        >
          Unsere Referenzen.
        </motion.h2>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
