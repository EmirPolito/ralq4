"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  once?: boolean;
  amount?: number;
}

const getVariants = (direction: string): Variants => {
  const hidden = {
    opacity: 0,
    ...(direction === "up" && { y: 40 }),
    ...(direction === "down" && { y: -40 }),
    ...(direction === "left" && { x: 40 }),
    ...(direction === "right" && { x: -40 }),
  };

  const visible = {
    opacity: 1,
    x: 0,
    y: 0,
  };

  return { hidden, visible };
};

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
  once = true,
  amount = 0.2,
}: ScrollAnimationProps) {
  const variants = getVariants(direction);
  const reducedMotion = useReducedMotion();

  // If reduced motion is enabled, render without animation
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children animation
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const reducedMotion = useReducedMotion();

  // If reduced motion is enabled, render without animation
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reducedMotion = useReducedMotion();

  // If reduced motion is enabled, render without animation
  if (reducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
