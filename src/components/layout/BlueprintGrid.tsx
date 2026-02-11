"use client";

import { motion } from "framer-motion";

export function BlueprintGrid() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 0.6 }}
      className="blueprint-grid pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
