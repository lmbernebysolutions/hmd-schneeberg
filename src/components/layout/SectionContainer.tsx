import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id?: string;
  background?: "white" | "surface" | "dark";
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
    white: "bg-white",
    surface: "bg-surface",
    dark: "bg-surface-dark text-white",
  };

  return (
    <section id={id} className={cn(backgroundClasses[background], className)}>
      <div className="mx-auto w-full max-w-[1280px] px-6 py-section md:px-12 lg:px-16">
        {children}
      </div>
    </section>
  );
}
