"use client";

import React from "react";
import { WobbleCard } from "@/components/ui/wobble-card";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";

export default function WobbleCardSection() {
  return (
    <section className="py-25 lg:py-40 bg-background">
      <div className="container mx-auto px-5 md:px-15">
        {/* Titulo y descripcion inicial */}
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-wobble-ttl text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight text-balance">
              Funcionalidades de la Plataforma
            </h2>

            <p className="mt-2 text-wobble-desc max-w-4xl mx-auto text-lg">
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
              <div className="max-w-lg">
                <h2 className="text-wobble-ttl-5 text-left text-balance text-base md:text-xl lg:text-4xl font-semibold tracking-[-0.015em]">
                  Laboratorio Virtual a Detalle
                </h2>

                <p className="text-wobble-desc-6 mt-5 text-left text-base/6">
                  Conoce y maneja el equipo crítico antes de pisar el
                  laboratorio físico. Cada módulo incluye su estructura, función
                  y protocolos de seguridad.
                </p>

                <ul className="text-wobble-desc-6 mt-4 space-y-2 text-sm md:text-base">
                  <li className="flex items-center gap-2">
                    <span>🔬</span> Modelos 3D interactivos con zoom
                  </li>
                  <li className="flex items-center gap-2">
                    <span>📋</span> Fichas descriptivas de materiales
                  </li>
                </ul>
              </div>

              <img
                src="/img/carrusel/carrusel1.png"
                width={370}
                height={370}
                alt="Exploración de instrumentos de laboratorio"
                className="absolute -right-10 md:-right-[10%] lg:-right-[2%] -bottom-10 object-contain rounded-2xl hidden sm:block lg:w-[350px]"
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
              <div className="max-w-xl">
                <h2 className="text-wobble-ttl-5 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]">
                  Química en Realidad Aumentada
                </h2>

                <p className="text-wobble-desc-6 mt-5 text-left text-base/6">
                  Convierte tu habitación, escritorio o aula en un entorno de
                  aprendizaje dinámico. Proyecta compuestos moleculares y equipo
                  de precisión directamente en tu espacio real utilizando la
                  cámara de tu dispositivo para entender escalas y proporciones.
                </p>
              </div>

              <img
                src="/img/carrusel/carrusel7.png"
                width={370}
                height={370}
                alt="Visualización de estructuras científicas"
                className="absolute -right-10 md:-right-[10%] lg:-right-[2%] -bottom-10 object-contain rounded-2xl hidden sm:block lg:w-[350px]"
              />
            </WobbleCard>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
