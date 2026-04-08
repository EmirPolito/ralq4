"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { useReducedMotion } from "@/components/theme-controls";

export function Hero() {
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
        <div className="aspect-2/3 relative z-10 flex flex-col justify-end px-0 lg:aspect-video">
          <div className="mx-auto w-full max-w-8xl pb-7 lg:px-30 lg:pb-78">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="max-w-8xl relative mx-auto pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-5 px-4 sm:px-3 w-full left-0 top-0">
                <h1 className="text-hero-ttl text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
                  Instrumentos al
                  <br />
                  alcance de tus manos
                </h1>

                <p className="text-hero-desc max-w-xs sm:max-w-md md:max-w-2xl text-sm sm:text-base md:text-lg mt-4 sm:mt-1 leading-relaxed">
                  Nuestra plataforma permite a los estudiantes aprender sobre
                  instrumentos de laboratorio de quimica mediante modelos 3D en
                  Realidad Aumentada.
                </p>

                <div className="mt-6 sm:mt-10 flex items-center gap-2">
                  <Button
                    asChild
                    size="lg"
                    className="h-10 sm:h-11.5 rounded-full pl-4 sm:pl-5 pr-2 sm:pr-3 text-sm sm:text-base bg-hero-bg-demo text-hero-txt-demo hover:bg-primary-hero-bg-btn-demo/80"
                  >
                    <Link href="/demo">
                      <span className="text-nowrap">Ver demo</span>
                      <ChevronRight className="ml-1 size-4 sm:size-4.5" />
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
            absolute inset-5
            w-full h-full object-cover
            -scale-x-95
            invert contrast-115 
            brightness-90
            dark:invert-0 
            dark:brightness-110"
            src="https://videos.pexels.com/video-files/35968183/15249566_1920_1080_30fps.mp4"
          />
        </div>
      </div>
    </section>
  );
}
