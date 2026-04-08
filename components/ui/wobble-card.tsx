"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const WobbleCard = ({
  children,
  containerClassName,
  className,
}: {
  children: React.ReactNode;
  containerClassName?: string;
  className?: string;
}) => {
  const reducedMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    if (reducedMotion) return; // Skip tracking when reduced motion
    const { clientX, clientY } = event;
    const rect = event.currentTarget.getBoundingClientRect();

    // movimiento más suave
    const x = (clientX - (rect.left + rect.width / 2)) / 70;
    const y = (clientY - (rect.top + rect.height / 2)) / 70;

    setMousePosition({ x, y });
  };

  // Static version for reduced motion
  if (reducedMotion) {
    return (
      <section
        className={cn(
          "mx-auto w-full relative rounded-2xl overflow-hidden",
          containerClassName
        )}
      >
        <div
          className="relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden"
          style={{
            boxShadow:
              "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.05), 0 4px 6px rgba(34,42,53,0.08), 0 24px 108px rgba(47,48,55,0.10)",
          }}
        >
          <div className={cn("h-full px-4 py-20 sm:px-10", className)}>
            <Noise />
            {children}
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovering
          ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
          : "translate3d(0px, 0px, 0)",
        transition: "transform 0.2s ease-out",
      }}
      className={cn(
        "mx-auto w-full relative rounded-2xl overflow-hidden",
        containerClassName
      )}
    >
      <div
        className="relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0,0,0,0.05), 0 0 0 1px rgba(34,42,53,0.05), 0 4px 6px rgba(34,42,53,0.08), 0 24px 108px rgba(47,48,55,0.10)",
        }}
      >
        <motion.div
          style={{
            transform: isHovering
              ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1.01,1.01,1)`
              : "translate3d(0px,0px,0) scale3d(1,1,1)",
            transition: "transform 0.2s ease-out",
          }}
          className={cn("h-full px-4 py-20 sm:px-10", className)}
        >
          <Noise />
          {children}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Noise = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full scale-[1.2] opacity-10 [mask-image:radial-gradient(#fff,transparent,75%)]"
      style={{
        backgroundImage: "url(/noise.webp)",
        backgroundSize: "30%",
      }}
    />
  );
};
