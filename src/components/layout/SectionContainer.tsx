import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  /** Nur zwei Hintergründe: white (mit Blueprint-Grid) und dark (Stats, Footer). */
  background?: "white" | "dark";
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  background = "white",
  children,
  className = "",
}: Props) {
  const backgroundClasses = {
    white: "bg-white relative",
    dark: "bg-surface-dark text-white",
  };

  return (
    <section id={id} className={cn(backgroundClasses[background], className)}>
      {/* Blueprint-Grid auf allen weißen Sektionen (wie im Hero) */}
      {background === "white" && (
        <div
          className="blueprint-grid pointer-events-none absolute inset-0 z-0 opacity-50"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-section md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}
