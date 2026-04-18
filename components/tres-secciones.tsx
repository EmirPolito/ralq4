"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { cn } from "@/lib/utils";

const steps = [
  {
    step: "01",
    title: "Elige tu molécula",
    description:
      "Navega una biblioteca curada de más de 150 estructuras moleculares e instrumentos. Filtra por tipo, complejidad o unidad académica.",
    image: "/img/quimica/img1.jpg",
    tag: "Catálogo",
    details: [
      "150+ modelos disponibles",
      "Datos verificados (PubChem)",
      "Clasificados por tema",
    ],
    align: "left",
    color: "from-brand-subtle to-teal-50",
    accentColor: "bg-emerald-500",
    textColor: "text-emerald-600",
  },
  {
    step: "02",
    title: "Explórala en 3D",
    description:
      "Rota, acerca y desglosa cada modelo. Observa ángulos de enlace, distancias atómicas y propiedades fisicoquímicas anotadas directamente sobre el modelo.",
    image: "/img/quimica/img2.jpg",
    tag: "Visualización",
    details: [
      "Rotación libre 360°",
      "Propiedades en tiempo real",
      "Anotaciones científicas",
    ],
    align: "right",
    color: "from-teal-50 to-sky-50",
    accentColor: "bg-teal-500",
    textColor: "text-teal-600",
  },
  {
    step: "03",
    title: "Proyéctala en tu espacio",
    description:
      "Un solo toque activa la Realidad Aumentada. El modelo aparece sobre cualquier superficie plana. Camina alrededor, cambia el ángulo, estudia desde todos los puntos de vista.",
    image: "/img/quimica/img3.jpg",
    tag: "Realidad Aumentada",
    details: [
      "Sin apps extras",
      "Funciona en iOS y Android",
      "Reconocimiento de superficie",
    ],
    align: "left",
    color: "from-sky-50 to-indigo-50",
    accentColor: "bg-sky-500",
    textColor: "text-sky-600",
  },
];

export default function TresPasosLaboratorio() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-background px-6 py-16 md:px-12 md:py-24 lg:py-32"
    >
      {/* Section heading — left-anchored, not centered */}
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 mx-auto max-w-4xl text-center md:mb-20">
          <h2 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight text-foreground">
            Tres pasos.
            <br />
            <span className="text-muted-foreground/60">
              Un laboratorio completo.
            </span>
          </h2>
          <p className="text-tarjetas-desc2 mt-4 max-w-2xl mx-auto text-base md:text-lg text-center leading-relaxed">
            Paso a paso para explorar la química de manera interactiva.
          </p>
        </div>

        {/* Alternating steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              viewport={{ once: true, margin: "-80px" }}
              className={`group relative grid grid-cols-1 gap-12 border-t border-border py-12 md:py-16 lg:py-24 lg:grid-cols-2 lg:gap-24 lg:gap-y-0 will-change-transform ${
                step.align === "right"
                  ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                  : ""
              }`}
            >
              {/* Text side */}
              <div className="flex flex-col justify-center">
                <div className="flex items-start gap-6">
                  {/* Step number — large */}
                  <span
                    className={`shrink-0 text-7xl font-black leading-none opacity-[0.07] text-foreground mt-1`}
                  >
                    {step.step}
                  </span>
                  <div>
                    <span
                      className={`mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${step.textColor} border-current/20`}
                    >
                      {step.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>

                    {/* Detail pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {step.details.map((d) => (
                        <span
                          key={d}
                          className="flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${step.accentColor}`}
                          />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual side */}
              <PointerHighlight
                rectangleClassName={cn(
                  "rounded-2xl border border-current",
                  step.textColor,
                )}
                bgOpacity={0.03}
                pointerClassName={step.textColor}
                containerClassName="w-full"
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${step.color} border border-border aspect-[16/10] w-full`}
                >
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] will-change-transform"
                  />
                  {/* Step badge overlay */}
                  <div
                    className={`absolute top-4 left-4 rounded-xl ${step.accentColor} px-3 py-1.5 shadow-sm`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white">
                      {step.tag}
                    </p>
                  </div>
                </div>
              </PointerHighlight>
            </motion.div>
          ))}
          {/* Last border */}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
}
