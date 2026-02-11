import { useEffect, useRef, useState } from "react";

interface UseScrollRevealOptions {
  threshold?: number; // 0-1, wie viel sichtbar sein muss (default: 0.15)
  triggerOnce?: boolean; // Nur einmal auslösen (default: true)
}

export function useScrollReveal(options?: UseScrollRevealOptions) {
  const { threshold = 0.15, triggerOnce = true } = options || {};
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Wenn reduced motion bevorzugt wird, sofort sichtbar machen
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
}
