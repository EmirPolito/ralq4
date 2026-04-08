"use client";

import { useState, useEffect } from "react";

export const REDUCED_MOTION_EVENT = "reducedMotionChange";

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Initial check
    const isReduced = 
      localStorage.getItem("reducedMotion") === "true" || 
      document.documentElement.classList.contains("reduce-motion");
    
    setReducedMotion(isReduced);

    // Handler for custom event from ThemeControls
    const handler = (e: CustomEvent) => {
      setReducedMotion(e.detail.reducedMotion);
    };

    // Listen to custom events
    window.addEventListener(REDUCED_MOTION_EVENT, handler as EventListener);

    // Also watch for class changes on <html> as a backup
    const observer = new MutationObserver(() => {
      const currentClass = document.documentElement.classList.contains("reduce-motion");
      setReducedMotion(currentClass);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      window.removeEventListener(REDUCED_MOTION_EVENT, handler as EventListener);
      observer.disconnect();
    };
  }, []);

  return reducedMotion;
}
