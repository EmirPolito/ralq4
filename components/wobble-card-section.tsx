"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";

export default function WobbleCardSection() {
  return (
    <section className="py-20 lg:py-45 bg-background">
      <div className="container mx-auto px-15">

{/* Titulo y descripcion inicial */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-15">
            <h2 className="text-wobble-ttl text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight text-balance">
              Funcionalidades de la Plataforma
            </h2>

            <p className="mt-4 text-lg text-wobble-desc max-w-6xl mx-auto text-balance">
              RALQ integra diferentes herramientas educativas diseñadas para
              facilitar la comprensión de la química mediante exploración
              visual, información científica y recursos interactivos.
            </p>
          </div>
        </ScrollAnimation>


{/* 4 tarjetas */}
        <ScrollAnimation direction="up" delay={0.2}>
          {/* FILA 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-8xl mx-auto w-full mb-4">

            {/* RECTANGULAR */}
            <WobbleCard containerClassName="bg-wobble-bg-1 col-span-1 lg:col-span-3 min-h-[300px]">
              <div className="max-w-md -mt-8">
                <h2 className="text-wobble-ttl-5 text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em]">
                  Exploración de Instrumentos
                </h2>

                <p className="text-wobble-desc-6 mt-5 text-left text-base/6">
                  Conoce los materiales y equipos utilizados en prácticas de
                  laboratorio. Cada instrumento incluye información sobre su
                  estructura, función y uso dentro de experimentos químicos.
                </p>
              </div>

              <img
                src="/img/carrusel/carrusel1.png"
                width={370}
                height={370}
                alt="Exploración de instrumentos de laboratorio"
                className="absolute -right-4 lg:-right-[2%] -bottom-3.5 object-contain rounded-2xl"
              />
            </WobbleCard>

            {/* CUADRADO */}
            <WobbleCard containerClassName="bg-wobble-bg-2 col-span-1 min-h-[300px]">
              <h2 className="text-wobble-ttl-5 max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                Tabla Periódica Digital
              </h2>

              <p className="text-wobble-desc-6 mt-4 max-w-[26rem] text-left text-base/6">
                Consulta información detallada de los elementos químicos,
                incluyendo propiedades, masa atómica y características
                relevantes para el estudio de la química.
              </p>
            </WobbleCard>
          </div>

          {/* FILA 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-8xl mx-auto w-full">

            {/* CUADRADO */}
            <WobbleCard containerClassName="bg-wobble-bg-3 col-span-1 min-h-[300px]">
              <h2 className="text-wobble-ttl-5 max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                Biblioteca de Estructuras Moleculares
              </h2>

              <p className="text-wobble-desc-6 mt-4 max-w-[26rem] text-left text-base/6">
                Examina diferentes compuestos químicos y comprende cómo se
                organizan sus átomos dentro de las moléculas mediante
                representaciones visuales detalladas.
              </p>
            </WobbleCard>

            {/* RECTANGULAR */}
            <WobbleCard containerClassName="bg-wobble-bg-4 col-span-1 lg:col-span-3 min-h-[300px]">
              <div className="max-w-sm">
                <h2 className="text-wobble-ttl-5 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                  Visualización Científica en el Entorno Real
                </h2>

                <p className="text-wobble-desc-6 mt-5 text-left text-base/6">
                  Observa modelos científicos dentro de tu propio espacio para
                  analizar su forma, proporciones y estructura desde distintas
                  perspectivas.
                </p>
              </div>

              <img
                src="/img/carrusel/carrusel1.png"
                width={370}
                height={370}
                alt="Visualización de estructuras científicas"
                className="absolute -right-4 lg:-right-[2%] -bottom-2 object-contain rounded-2xl"
              />
            </WobbleCard>

          </div>

        </ScrollAnimation>
      </div>
    </section>
  );
}