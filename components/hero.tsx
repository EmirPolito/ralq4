"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

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
        <div className="relative z-10 flex min-h-[80vh] flex-col justify-end px-4 sm:px-6 md:px-12 lg:px-20 lg:min-h-screen">
          <div className="mx-auto w-full max-w-7xl pb-12 sm:pb-20 md:pb-32 lg:pb-35">
            <ScrollAnimation direction="up" delay={0.2}>
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <h1 className="text-hero-ttl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                  Instrumentos al
                  <br />
                  alcance de tus manos
                </h1>

                <p className="text-hero-desc max-w-sm sm:max-w-md md:max-w-2xl text-base sm:text-lg md:text-xl mt-2 leading-relaxed">
                  Nuestra plataforma permite a los estudiantes aprender sobre
                  instrumentos de laboratorio de química mediante modelos 3D en
                  Realidad Aumentada.
                </p>

                <div className="mt-10 flex items-center justify-center sm:justify-start gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="h-12 rounded-full px-8 text-base font-medium shadow-lg transition-all hover:scale-105 active:scale-95 bg-hero-bg-demo text-hero-txt-demo hover:opacity-90"
                  >
                    <Link href="/demo">
                      <span className="text-nowrap">Ver demo</span>
                      <ChevronRight className="ml-2 size-5" />
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
