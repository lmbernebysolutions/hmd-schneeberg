import { cn } from "@/lib/utils";

interface Props {
  number: string;
  label: string;
  className?: string;
}

export function SectionLabel({ number, label, className = "" }: Props) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="font-technical text-label text-hmd-light-red">{number}</span>
      <span className="h-px w-6 bg-hmd-grey/30" />
      <span className="font-display text-label font-700 uppercase tracking-[0.2em] text-hmd-grey">
        {label}
      </span>
    </div>
  );
}
