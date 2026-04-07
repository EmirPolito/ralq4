"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { HeroHeader } from "./header";

import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { ChevronRight } from "lucide-react";
import { Feature } from "@/components/feature-with-image-carousel";

import FAQs from "@/components/preguntas-frec";
import Footer from "@/components/footer";
import WobbleCardSection from "@/components/wobble-card-section";
import PinCardsSection from "@/components/pin-cards-section";
import { useReducedMotion } from "@/components/theme-controls";
import { IzquierdaDerecha } from "@/components/izquierda-derecha";

const circleItems = [
  { image: "/img/carrusel/carrusel1.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel2.png", title: "Tubos de ensayo" },
  { image: "/img/carrusel/carrusel4.png", title: "Matraz" },
  { image: "/img/carrusel/carrusel5.png", title: "Recipientes" },
  { image: "/img/carrusel/carrusel6.png", title: "Matraz redondo" },
  { image: "/img/carrusel/carrusel7.png", title: "Moleculas" },
];

export default function HeroSection() {
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
    <>
      {/* header */}
      <HeroHeader />
      <main className="overflow-x-hidden">
        {/* HERO */}
        <section>
          <div>
            <div className="aspect-2/3 relative z-10 flex flex-col justify-end px-0 lg:aspect-video">
              <div className="mx-auto w-full max-w-8xl pb-7 lg:px-35 lg:pb-75">
                <ScrollAnimation direction="up" delay={0.2}>
                  <div className="max-w-8xl relative mx-auto pt-36 md:pt-32 pb-20 md:pb-10 px-5 w-full left-0 top-0">
                    <h1 className="text-hero-ttl text-3xl md:text-7xl font-bold">
                      Instrumentos al
                      <br />
                      alcance de tus manos
                    </h1>

                    <p className="text-hero-desc max-w-2xl text-base md:text-lg mt-6 ">
                      Nuestra plataforma permite a los estudiantes aprender
                      sobre instrumentos de laboratorio de quimica mediante
                      modelos 3D en Realidad Aumentada.
                    </p>

                    <div className="mt-8 flex items-center gap-2">
                      <Button
                        asChild
                        size="lg"
                        className="h-12 rounded-full pl-5 pr-3 text-base bg-hero-bg-demo text-hero-txt-demo hover:bg-primary-hero-bg-btn-demo/80"
                      >
                        <Link href="/demo">
                          <span className="text-nowrap">Ver demo</span>
                          <ChevronRight className="ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            {/* ADN */}
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

        {/* Carrusel */}
        <section className="bg-background py-3">
          <div className="group relative m-auto max-w-8xl px-5 -mt-10 md:-mt-32">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-52 md:border-r md:border-[#9cc2a9]/30 md:px-5 md:pr-10 shrink-10">
                <p className="text-carrusel-ttl text-start text-base md:text-lg font-semibold tracking-wide md:text-left">
                  Hora de aprender
                </p>
              </div>

              <div className="relative py-13 md:w-[calc(100%-5rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={56}>
                  {circleItems.map((item, index) => (
                    <div
                      key={index}
                      className=" flex flex-col items-center gap-3"
                    >
                      <div className="bg-carrusel2-bg h-55 w-55 rounded-full flex items-center justify-center overflow-hidden p-2 shadow-lg border-2">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={112}
                          height={112}
                          className="h-full w-full object-cover rounded-full"
                        />
                      </div>
                      <span className="text-sm text-carrusel-desc font-medium">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </InfiniteSlider>
                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-1"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-1"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 3 tarjetas pin */}
        <PinCardsSection />

        {/* Izquierda y derecha */}
        <IzquierdaDerecha />

        {/* Rectangulo y cuadro 2*/}
        <WobbleCardSection />

        {/* imagene automatico*/}
        <ScrollAnimation direction="up" delay={0.1}>
          <Feature />
        </ScrollAnimation>

        {/*Preguntas frecuentes*/}
        <FAQs />

        {/* Footer*/}
        <Footer />
      </main>
    </>
  );
}

//croll de tarjetas de imagenes
// import StackingCardsDemo from "@/components/scroll-comp";
{
  /* <StackingCardsDemo /> */
}
