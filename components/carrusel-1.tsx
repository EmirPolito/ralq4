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
  const [gap, setGap] = React.useState(56);

  React.useEffect(() => {
    const handleResize = () => {
      setGap(window.innerWidth < 768 ? 32 : 56);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-background py-16">
      <div className="group relative m-auto max-w-8xl px-0 mt-5 md:-mt-15">
        <div className="flex flex-col items-center md:flex-row">
          <div className="relative py-13 w-full">
            <InfiniteSlider speedOnHover={20} speed={40} gap={gap}>
              {circleItems.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-5">
                  {/* border-1 */}
                  <div className="bg-carrusel2-bg h-44 w-44 md:h-55 md:w-55 rounded-full flex items-center justify-center overflow-hidden p-1.5">
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
          </div>
        </div>
      </div>
    </section>
  );
}
