"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const reducedMotion = useReducedMotion();
  const router = useRouter();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)",
  );
  const [isMobile, setIsMobile] = useState(false);
  const [inView, setInView] = useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // IntersectionObserver para detectar cuando la tarjeta está visible en móvil
  React.useEffect(() => {
    if (!isMobile || reducedMotion || !containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.6 },
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMobile, reducedMotion]);

  // Actualizar transform cuando cambia inView en móvil
  React.useEffect(() => {
    if (!isMobile || reducedMotion) return;

    if (inView) {
      setTransform("translate(-50%,-50%) rotateX(12deg) scale(0.95)");
    } else {
      setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    }
  }, [inView, isMobile, reducedMotion]);

  const onMouseEnter = () => {
    if (!reducedMotion && !isMobile) {
      setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
    }
  };

  const onMouseLeave = () => {
    if (!reducedMotion && !isMobile) {
      setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!isMobile && href) {
      router.push(href);
    }
  };

  // Estado activo: en móvil cuando está visible en viewport
  const isActive = isMobile && inView && !reducedMotion;

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName,
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <div
        style={{
          perspective: reducedMotion ? "none" : "1000px",
          transform: reducedMotion ? "none" : "rotateX(70deg) translateZ(0deg)",
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div
          style={{
            transform: reducedMotion ? "translate(-50%,-50%)" : transform,
          }}
          className={cn(
            "absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] bg-card border border-border overflow-hidden",
            reducedMotion
              ? "transition duration-200"
              : "transition duration-700",
            !reducedMotion &&
              (isActive
                ? "border-primary/30"
                : "group-hover/pin:border-primary/30"),
          )}
        >
          <div className={cn("relative z-50", className)}>{children}</div>
        </div>
      </div>

      {!reducedMotion && (
        <PinPerspective
          title={title}
          href={href}
          reducedMotion={reducedMotion}
          isActive={isActive}
          isMobile={isMobile}
        />
      )}
    </div>
  );
};

export const PinPerspective = ({
  title,
  href,
  reducedMotion = false,
  isActive = false,
  isMobile = false,
}: {
  title?: string;
  href?: string;
  reducedMotion?: boolean;
  isActive?: boolean;
  isMobile?: boolean;
}) => {
  return (
    <motion.div
      className={cn(
        "pointer-events-none w-[18.5rem] h-[18.5rem] sm:w-96 sm:h-80 flex items-center justify-center z-[60]",
        reducedMotion ? "transition duration-150" : "transition duration-500",
        isActive ? "opacity-100" : "opacity-0 group-hover/pin:opacity-100",
      )}
    >
      <div className="w-full h-full -mt-7 flex-none inset-0">
        {/* etiqueta superior — en móvil es un Link clickeable */}
        <div
          className={cn(
            "absolute inset-x-0 flex justify-center transition-all duration-500",
            isActive ? "top-[-5rem]" : "top-0",
          )}
        >
          {isMobile && href ? (
            <Link
              href={href}
              className="pointer-events-auto relative flex space-x-2 items-center z-10 rounded-full bg-card py-0.5 px-4 ring-1 ring-border"
            >
              <span className="relative z-20 text-foreground text-xs font-bold inline-block py-0.5">
                {title}
              </span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
            </Link>
          ) : (
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-card py-0.5 px-4 ring-1 ring-border">
              <span className="relative z-20 text-foreground text-xs font-bold inline-block py-0.5">
                {title}
              </span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-primary/0 via-primary/90 to-primary/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
            </div>
          )}
        </div>

        <div
          style={{
            perspective: "1000px",
            transform: "rotateX(70deg) translateZ(0)",
          }}
          className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
        >
          {/* Solo mostrar ondas animadas si las animaciones están habilitadas */}
          {!reducedMotion && (
            <>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 0,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-pin-wave/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              />

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 2,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-pin-wave/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              />

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                  x: "-50%",
                  y: "-50%",
                }}
                animate={{
                  opacity: [0, 1, 0.5, 0],
                  scale: 1,
                  z: 0,
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: 4,
                }}
                className="absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-full bg-pin-wave/[0.08] shadow-[0_8px_16px_rgb(0_0_0/0.4)]"
              />
            </>
          )}
        </div>

        <>
          <motion.div
            className={cn(
              "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-pin-line translate-y-[14px] w-px h-20 blur-[2px]",
              isActive ? "h-60" : "group-hover/pin:h-40",
              reducedMotion && "transition-all duration-150",
            )}
          />
          <motion.div
            className={cn(
              "absolute right-1/2 bottom-1/2 bg-gradient-to-b from-transparent to-pin-line translate-y-[14px] w-px h-20",
              isActive ? "h-60" : "group-hover/pin:h-40",
              reducedMotion && "transition-all duration-150",
            )}
          />
          <motion.div className="absolute right-1/2 translate-x-[1.5px] bottom-1/2 bg-pin-line translate-y-[14px] w-[4px] h-[4px] rounded-full z-40 blur-[3px]" />
          <motion.div className="absolute right-1/2 translate-x-[0.5px] bottom-1/2 bg-pin-line/70 translate-y-[14px] w-[2px] h-[2px] rounded-full z-40" />
        </>
      </div>
    </motion.div>
  );
};
