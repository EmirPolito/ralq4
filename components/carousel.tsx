"use client";

import React from "react";
import Image from "next/image";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";

const circleItems = [
  { image: "/img/carrusel/carrusel1.png", title: "Microscopio" },
  { image: "/img/carrusel/carrusel2.png", title: "Tubos de ensayo" },
  { image: "/img/carrusel/carrusel4.png", title: "Matraz" },
  { image: "/img/carrusel/carrusel5.png", title: "Recipientes" },
  { image: "/img/carrusel/carrusel6.png", title: "Matraz redondo" },
  { image: "/img/carrusel/carrusel7.png", title: "Moleculas" },
];

export function Carousel() {
  return (
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
                <div key={index} className="flex flex-col items-center gap-3">
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
  );
}
