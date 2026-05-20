"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");
  const reducedMotion = useReducedMotion();
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (!videoRef.current) return;

    if (reducedMotion) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch(() => {});
    }
  }, [reducedMotion]);

  return (
    <section>
      <div>
        <div className="relative z-10 flex min-h-[85vh] lg:min-h-screen flex-col justify-end pt-20 pb-4 lg:pt-0 lg:pb-0 px-5 sm:px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-8xl w-full pb-2.5 lg:pb-60 sm:pb-20">
            <ScrollAnimation direction="up" delay={0.2}>
              <div
                className="flex flex-col items-start text-left lg:items-start lg:text-left"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Título principal — hero.titleLine1 + hero.titleLine2 */}
                <h1 className="text-hero-ttl text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-medium leading-[1.05] lg:leading-[1.07] tracking-[0.2] lg:tracking-[0]">
                  {t("titleLine1")}
                  <br />
                  {t("titleLine2")}
                </h1>

                {/* Descripción — hero.description */}
                <p className="text-hero-desc text-sm  lg:text-lg mt-1.5 sm:mt-2 md:max-w-xl  w-full leading-relaxed">
                  {t("description")}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>

        {/* Video Background */}
        <div className="bg-background absolute inset-0 overflow-hidden rounded-3xl lg:rounded-[2rem] border border-black/10 dark:border-white/5 bg-white dark:bg-black">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="
            absolute inset-0 
            lg:inset-5   
            w-full h-full object-cover
            -scale-x-100
            invert contrast-115 
            brightness-90
            dark:invert-0 
            dark:brightness-55" /*Mientras menos tenga menos se verá en modo oscuro*/
            src="/videos/video-hero.mp4"
          />
        </div>
      </div>
    </section>
  );
}
