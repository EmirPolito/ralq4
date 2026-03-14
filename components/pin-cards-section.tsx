"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { Beaker, Atom, FlaskConical } from "lucide-react";

export default function PinCardsSection() {
  return (
    <section className="py-20 lg:py-30 bg-background overflow-hidden">
      <div className="container mx-auto px-5">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center mb-7">
            <h2 className="text-tarjetas-ttl1 text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight text-balance">
              Áreas de Exploración Científica
            </h2>

            <p className="text-tarjetas-desc2 mt-4 text-lg max-w-4xl mx-auto text-center">
              La plataforma organiza el contenido en distintos entornos de
              aprendizaje
              <br />
              que representan cómo se utiliza la química en contextos
              educativos, analíticos e industriales.
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
          {/* Pin 1 */}
          <div className="h-[27rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer title="Procesos Industriales" href="#laboratorios">
              <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[22rem] h-[22rem] from-card to-card/50 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="text-tarjetas-txt3 text-xs">
                    Entorno industrial
                  </div>
                </div>

                <div className="flex-1 mt-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <Beaker className="text-tarjetas-1txt6 h-8 w-8" />
                    <div className="text-tarjetas-ttl4 text-xl font-bold">
                      Plantas Químicas
                    </div>
                  </div>

                  <p className="text-tarjetas-desc5 text-[15px] leading-relaxed">
                    Comprende cómo se transforman las sustancias en procesos
                    industriales observando equipos utilizados en producción
                    química a gran escala.
                  </p>

                  <div className="grid grid-cols-3 gap-20 mt-10">
                    <div className="space-y-1">
                      <div className="text-tarjetas-1txt6 text-4xl font-bold">
                        +2
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Procesos
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-1txt6 text-4xl font-bold">
                        3D
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Equipos
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-1txt6 text-4xl font-bold">
                        RA
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Visualización
                      </div>
                    </div>
                  </div>

                  <div className="py-3.5 flex justify-between items-end">
                    <div className="text-tarjetas-txt8 text-xs">
                      Producción química explicada visualmente
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Pin 2 */}
          <div className="h-[25rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer
              title="Instrumentación Científica"
              href="#laboratorios"
            >
              <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[22rem] h-[22rem] from-card to-card/50 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="text-tarjetas-txt3 text-xs">
                    Tecnología analítica
                  </div>
                </div>

                <div className="flex-1 mt-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <Atom className="text-tarjetas-2txt6 h-8 w-8" />
                    <div className="text-tarjetas-ttl4 text-xl font-bold">
                      Análisis Instrumental
                    </div>
                  </div>

                  <p className="text-tarjetas-desc5 text-[15px] leading-relaxed">
                    Descubre cómo los instrumentos científicos permiten
                    identificar compuestos, medir concentraciones y analizar
                    propiedades químicas de diferentes sustancias.
                  </p>

                  <div className="grid grid-cols-3 gap-20 mt-10">
                    <div className="space-y-1">
                      <div className="text-tarjetas-2txt6 text-4xl font-bold">
                        8+
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Instrumentos
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-2txt6 text-4xl font-bold">
                        RA
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Compatible
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-2txt6 text-4xl font-bold">
                        3D
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Visualización
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="py-3.5 text-tarjetas-txt8 text-xs">
                      Herramientas científicas explicadas paso a paso
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>

          {/* Pin 3 */}
          <div className="h-[25rem] w-full lg:w-1/3 flex items-center justify-center">
            <PinContainer
              title="Fundamentos de Laboratorio"
              href="#laboratorios"
            >
              <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[22rem] h-[22rem] from-card to-card/50 backdrop-blur-sm rounded-xl">
                <div className="flex items-center gap-2">
                  <div className="text-tarjetas-txt3 text-xs">
                    Laboratorio educativo
                  </div>
                </div>

                <div className="flex-1 mt-4 space-y-4">
                  <div className="flex items-center gap-2">
                    <FlaskConical className="text-tarjetas-3txt6 h-8 w-8" />
                    <div className="text-tarjetas-ttl4 text-xl font-bold">
                      Química General
                    </div>
                  </div>

                  <p className="text-tarjetas-desc5 text-[15px] leading-relaxed">
                    Familiarízate con el uso de materiales esenciales del
                    laboratorio y comprende su función dentro de prácticas
                    experimentales de química básica.
                  </p>

                  <div className="grid grid-cols-3 gap-20 mt-10">
                    <div className="space-y-1">
                      <div className="text-tarjetas-3txt6 text-4xl font-bold">
                        15+
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Materiales
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-3txt6 text-4xl font-bold">
                        360°
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Exploración
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-tarjetas-3txt6 text-4xl font-bold">
                        RA
                      </div>
                      <div className="text-tarjetas-desc7 text-xs">
                        Interacción
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="py-3.5 text-tarjetas-txt8 text-xs">
                      Introducción visual al trabajo de laboratorio
                    </div>
                  </div>
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
