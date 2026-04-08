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
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const checkReducedMotion = () => {
      const saved = localStorage.getItem("reducedMotion") === "true";
      const hasClass =
        document.documentElement.classList.contains("reduce-motion");
      setReducedMotion(saved || hasClass);
    };

    checkReducedMotion();

    const observer = new MutationObserver(() => {
      checkReducedMotion();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return reducedMotion;
}

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
    <div className="w-full py-20 lg:py-26">
      <div className="container mx-auto px-5 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 min-h-[400px]">
          {/* Texto */}
          <div className="flex gap-2 flex-col items-start">
            <div>
              <Badge className="bg-carrusel2-mini-bg text-carrusel2-mini-txt rounded-2xl px-2 py-1">
                Plataforma educativa interactiva
              </Badge>
            </div>

            <div className="flex gap-5 flex-col">
              <h2 className="text-carrusel2-ttl text-xl md:text-3xl lg:text-6xl tracking-tighter lg:max-w-xl font-semibold text-left">
                Sumérgete en la
                <br />
                Realidad Aumentada
              </h2>

              <p className="text-carrusel2-desc lg:max-w-xl text-lg max-w-xl leading-relaxed tracking-tight text-left">
                RALQ reúne instrumentos, materiales y recursos de laboratorio
                dentro de un entorno digital diseñado para facilitar la
                comprensión de la química mediante exploración visual e
                interacción directa con los modelos.
              </p>
            </div>

            {/* Botón opcional */}
            <Button
              asChild
              size="sm"
              className="-mx-2 h-10 rounded-full px-4 text-sm bg-background hover:bg-background text-titulos mt-3"
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
              }}
              className="cursor-pointer active:cursor-grabbing"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="flex rounded-xl aspect-video items-center justify-center overflow-hidden">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Botones para cambiar imagen cada lado */}
              {/* <CarouselPrevious className=" cursor-pointer -left-23" />
              <CarouselNext className=" cursor-pointer -right-7 " /> */}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Feature };
