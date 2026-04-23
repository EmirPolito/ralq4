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
    if (!ref.current) return;

    const updateHeight = () => {
      if (ref.current) {
        setHeight(ref.current.scrollHeight);
      }
    };

    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(ref.current);

    window.addEventListener("load", updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener("load", updateHeight);
    };
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // Static animations when reduced motion is enabled
  const staticInitial = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 30 };

  const staticAnimate = reducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };

  const staticTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: "easeOut" };

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      {/* TÍTULO */}
      <div className="max-w-7xl mx-auto pt-32 pb-12 md:pt-32 md:pb-12 px-4 md:px-8 lg:px-10 text-center">
        <motion.h1
          initial={staticInitial}
          whileInView={staticAnimate}
          transition={staticTransition}
          viewport={{ once: true }}
          className="text-nos-ttl text-4xl md:text-6xl font-semibold mb-3 text-balance"
        >
          Sobre Nosotros
        </motion.h1>

        <motion.p
          initial={reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          whileInView={staticAnimate}
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.7, ease: "easeOut", delay: 0.15 }
          }
          viewport={{ once: true }}
          className="text-nos-desc text-base md:text-lg text-balance max-w-1xl mx-auto font-normal"
        >
          Desde 2023, hemos estado desarrollando RALQ, con el objetivo de crear
          experiencias educativas interactivas para todos.
        </motion.p>
      </div>

      {/* TIMELINE */}
      <div
        ref={ref}
        className="relative max-w-7xl mx-auto pb-4 space-y-16 md:space-y-44"
      >
        {data.map((item, index) => (
          <motion.div
            key={index}
            initial={
              reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            whileInView={
              reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.7, ease: "easeOut", delay: index * 0.05 }
            }
            viewport={{ once: true, margin: "-80px" }}
            className="flex items-start justify-start pt-8 md:pt-12 md:gap-10"
          >
            {/* FECHA */}
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              <h3 className="text-nos-fechas hidden md:block text-xl md:pl-20 md:text-5xl font-semibold">
                {item.title}
              </h3>
            </div>

            {/* CONTENIDO */}
            <div className="relative pl-16 pr-5 md:pl-0 md:pr-0 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-semibold">
                {item.title}
              </h3>

              <div className="font-normal">{item.content}</div>
            </div>
          </motion.div>
        ))}

        {/* LÍNEA */}
        <div
          style={{
            height: height + 100 + "px",
          }}
          className="absolute md:left-8 left-8 top-[-100px] overflow-hidden w-[2px] 
          bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
          from-transparent from-[0%] 
          via-neutral-200 dark:via-neutral-700 
          to-transparent to-[99%]  
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_98%,transparent_100%)]"
        >
          {reducedMotion ? (
            <div
              style={{ height: "100%", opacity: 1 }}
              className="absolute inset-x-0 top-0 w-[2px] 
              bg-gradient-to-t from-purple-500 via-blue-500 to-transparent 
              from-[0%] via-[10%] rounded-full"
            />
          ) : (
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] 
              bg-gradient-to-t from-purple-500 via-blue-500 to-transparent 
              from-[0%] via-[10%] rounded-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};
