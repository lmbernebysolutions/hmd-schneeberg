"use client";

import { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
}

export function Input({ label, required, className = "", ...props }: Props) {
  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block font-technical text-label uppercase text-hmd-grey">
          {label}
          {required && <span className="ml-1 text-hmd-light-red">*</span>}
        </label>
      )}
      <input
        {...props}
        required={required}
        className={cn(
          "w-full border-0 border-b border-hmd-grey/30 bg-transparent px-0 py-3 font-body text-body-md text-surface-dark outline-none transition-all duration-300 ease-out placeholder:text-hmd-grey/50 focus:border-b-[3px] focus:border-hmd-light-red focus:bg-[linear-gradient(90deg,#bb2624,#e43e22)] focus:bg-[length:100%_3px] focus:bg-bottom focus:bg-no-repeat",
          className
        )}
      />
    </div>
  );
}
