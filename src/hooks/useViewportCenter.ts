"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE_BREAKPOINT = 768;

/**
 * Gibt true zurück, solange die imaginäre Mittellinie des Viewports (horizontale
 * Linie bei 50 % Bildschirmhöhe) auf dem Element liegt. Highlight die gesamte
 * Zeit, während die Linie den Container schneidet. Nur aktiv unterhalb MOBILE_BREAKPOINT.
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
      const viewportCenterY = window.innerHeight / 2;
      // Mittellinie liegt auf dem Container, wenn sie zwischen Ober- und Unterkante ist
      const lineIsOnContainer =
        viewportCenterY >= rect.top && viewportCenterY <= rect.bottom;
      setIsAtCenter(lineIsOnContainer);
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
