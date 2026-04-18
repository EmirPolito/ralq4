"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";

import { useReducedMotion } from "@/hooks/use-reduced-motion";

const carouselImages = [
  {
    src: "/img/sections/tabla.png",
    alt: "Interfaz educativa de exploración científica",
  },
  {
    src: "/img/sections/tabla.png",
    alt: "Exploración visual de instrumentos de laboratorio",
  },
  {
    src: "/img/sections/tabla.png",
    alt: "Visualización interactiva de contenido científico",
  },
  {
    src: "/img/sections/tabla.png",
    alt: "Interfaz digital para aprendizaje de química",
  },
  {
    src: "/img/sections/tabla.png",
    alt: "Exploración educativa de recursos de laboratorio",
  },
];

function Feature() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const reducedMotion = useReducedMotion();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-play
  useEffect(() => {
    if (!api || reducedMotion) return;

    const interval = setInterval(
      () => {
        api.scrollNext();
      },
      isHovered ? 4000 : 2500,
    );

    return () => clearInterval(interval);
  }, [api, isHovered, reducedMotion]);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  // Fondo según tema
  const bgColor = resolvedTheme === "light" ? "#dff4e5" : "var(--background)";

  return (
    <div className="w-full py-20 lg:py-5">
      <div className="container mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 min-h-[400px]">
          {/* Texto */}
          <div className="flex gap-2 flex-col items-center text-center lg:items-start lg:text-left">
            <div>
              <Badge className="bg-carrusel2-mini-bg text-carrusel2-mini-txt rounded-2xl px-2 py-1">
                Plataforma educativa interactiva
              </Badge>
            </div>

            <div className="flex gap-5 flex-col items-center lg:items-start">
              <h2 className="text-carrusel2-ttl text-balance text-3xl font-bold leading-[1.1] tracking-tight md:text-4xl lg:text-6xl">
                Sumérgete en la
                <br />
                Realidad Aumentada
              </h2>

              <div className="text-carrusel2-desc lg:max-w-xl text-lg max-w-xl leading-relaxed tracking-tight text-center lg:text-left">
                RALQ reúne instrumentos, materiales y recursos de laboratorio
                dentro de un entorno digital diseñado para facilitar la
                comprensión de la química mediante exploración visual e
                interacción directa con los modelos.
              </div>
            </div>

            {/* Botón opcional */}
            <Button
              asChild
              size="sm"
              className="h-10 rounded-full px-4 text-sm bg-background hover:bg-background text-titulos mt-3 lg:-mx-2"
            >
              <Link href="/demo" className="flex items-center gap-1">
                <span>Explorar la experiencia</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Carrusel */}
          <div
            className="w-full max-w-full px-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Carousel
              setApi={setApi}
              opts={{
                loop: true,
                dragFree: false,
                watchDrag: !reducedMotion,
              }}
              className={
                reducedMotion
                  ? "cursor-default"
                  : "cursor-pointer active:cursor-grabbing"
              }
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="will-change-transform">
                    <div className="flex rounded-xl aspect-video items-center justify-center overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover will-change-transform"
                        draggable={false}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Flechas manuales — siempre reservan espacio para evitar saltos */}
            <div
              className={`-ml-6 gap-7.5 mt-5 flex items-center justify-center transition-opacity ${reducedMotion ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            >
              <button
                onClick={() => api?.scrollPrev()}
                className="h-11 w-11 flex items-center justify-center rounded-full cursor-pointer bg-transparent hover:opacity-70 transition-opacity focus:outline-none"
                aria-label="Imagen anterior"
                tabIndex={reducedMotion ? 0 : -1}
              >
                <ArrowLeft className="h-5 w-5 text-foreground" />
              </button>
              <button
                onClick={() => api?.scrollNext()}
                className="h-8 w-8 flex items-center justify-center rounded-full cursor-pointer bg-transparent hover:opacity-70 transition-opacity focus:outline-none"
                aria-label="Imagen siguiente"
                tabIndex={reducedMotion ? 0 : -1}
              >
                <ArrowRight className="h-5 w-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
