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
          <div className="mx-auto w-full max-w-7xl pb-4 lg:pb-40 sm:pb-20 md:pb-32">
            <ScrollAnimation direction="up" delay={0.2}>
              <div
                className="flex flex-col items-start text-left lg:items-start lg:text-left"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Título principal — hero.titleLine1 + hero.titleLine2 */}
                <h1 className="text-hero-ttl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold leading-tight tracking-tight">
                  {t("titleLine1")}
                  <br />
                  {t("titleLine2")}
                </h1>

                {/* Descripción — hero.description */}
                <p className="text-hero-desc w-full sm:max-w-md md:max-w-2xl text-sm sm:text-lg md:text-xl mt-2 leading-relaxed">
                  {t("description")}
                </p>

                {/* Botón CTA — hero.cta → /demo */}
                <div className="mt-8 flex items-center justify-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-10 lg:h-12 rounded-full px-6 lg:px-8 text-sm lg:text-base font-medium shadow-lg transition-all hover:scale-100 active:scale-95 bg-hero-bg-demo text-hero-txt-demo hover:bg-hero-hvr-demo"
                  >
                    <Link href="/demo">
                      <span className="text-nowrap">{t("cta")}</span>
                      <ChevronRight className="ml-2 size-4 lg:size-5" />
                    </Link>
                  </Button>
                </div>
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
            absolute inset-0 lg:inset-5
            w-full h-full object-cover
            -scale-x-100
            invert contrast-115 
            brightness-90
            dark:invert-0 
            dark:brightness-65"
            src="https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"
          />
        </div>
      </div>
    </section>
  );
}
