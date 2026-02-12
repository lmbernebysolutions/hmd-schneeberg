"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const CENTER_TOLERANCE_PX = 80; // Wie nah die Elementmitte an der Viewport-Mitte sein darf

/**
 * Gibt true zurück, wenn die vertikale Mitte des Elements die Mittellinie
 * des Viewports erreicht (mit Toleranz). Nur aktiv unterhalb MOBILE_BREAKPOINT.
 * Für scroll-basiertes Highlighting auf Mobile (Leistungen, Referenzen).
 */
export function useViewportCenter() {
  const ref = useRef<HTMLElement>(null);
  const [isAtCenter, setIsAtCenter] = useState(false);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const checkCenter = () => {
      const isMobile = window.innerWidth < MOBILE_BREAKPOINT;
      if (!isMobile) {
        setIsAtCenter(false);
        return;
      }

      const rect = element.getBoundingClientRect();
      const elementCenterY = rect.top + rect.height / 2;
      const viewportCenterY = window.innerHeight / 2;
      const distance = Math.abs(elementCenterY - viewportCenterY);
      setIsAtCenter(distance <= CENTER_TOLERANCE_PX);
    };

    const scheduleCheck = () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        checkCenter();
        rafId.current = null;
      });
    };

    checkCenter();

    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);

    return () => {
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return { ref, isAtCenter };
}
