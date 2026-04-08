"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Static animations when reduced motion is enabled
  const staticInitial = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 };
  const staticAnimate = reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 };
  const staticTransition = reducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut" };

  return (
    <div
  className="w-full bg-white dark:bg-neutral-950 md:px-10"
  ref={containerRef}
>
  {/* 🔥 TÍTULO PRINCIPAL + PÁRRAFO PRINCIPAL CON EFECTO */}
  <div className="max-w-7xl mx-auto py-40 px-4 md:px-8 lg:px-10 text-center">
    <motion.h1
      initial={staticInitial}
      whileInView={staticAnimate}
      transition={staticTransition}
      viewport={{ once: true }}
      className="text-5xl md:text-6xl font-bold text-foreground mb-5 text-balance"
    >
      Sobre Nosotros
    </motion.h1>

    <motion.p
      initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      whileInView={staticAnimate}
      transition={reducedMotion ? { duration: 0 } : { duration: 0.7, ease: "easeOut", delay: 0.15 }}
      viewport={{ once: true }}
      className="text-lg text-muted-foreground text-balance max-w-1xl mx-auto font-normal"
    >
      Desde 2023, hemos estado desarrollando RALQ, con el objetivo de crear
      experiencias educativas interactivas para estudiantes de química.
    </motion.p>
  </div>
  <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
    {data.map((item, index) => (
      <div
        key={index}
        className="flex justify-start pt-10 md:pt-30 md:gap-10"
      >
        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
          <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
            <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
          </div>
          <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
            {item.title}
          </h3>
        </div>

        <div className="relative pl-20 pr-4 md:pl-4 w-full">
          <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
            {item.title}
          </h3>
          <div className="font-normal">{item.content}</div> {/* Contenido en normal */}
        </div>
      </div>
    ))}
    {/* Línea del timeline */}
    <div
      style={{
        height: height + "px",
      }}
      className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
    >
      {reducedMotion ? (
        <div
          style={{ height: "100%", opacity: 1 }}
          className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
        />
      ) : (
        <motion.div
          style={{
            height: heightTransform,
            opacity: opacityTransform,
          }}
          className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
        />
      )}
    </div>
  </div>
</div>
  );
};
