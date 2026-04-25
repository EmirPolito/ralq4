"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useTranslations } from "next-intl";

export default function TresPasosLaboratorio() {
  const t = useTranslations("tresPasos");
  const reducedMotion = useReducedMotion();

  const steps = [
    {
      step: "01",
      title: t("step1.title"),
      description: t("step1.description"),
      image: "/img/quimica/img1.jpg",
      tag: t("step1.tag"),
      details: [t("step1.detail1"), t("step1.detail2"), t("step1.detail3")],
      align: "left",
      color: "from-brand-subtle to-teal-50",
      accentColor: "bg-emerald-500",
      textColor: "text-emerald-600",
      varNum: "text-tres-num",
      varMiniBg: "bg-tres-mini-bg",
      varMiniBorder: "border-tres-mini-borde",
      varMiniTxt: "text-tres-mini-txt",
      varTtl: "text-tres-ttl",
      varDesc: "text-tres-desc",
      varMarcos:
        "bg-tres-caracteristicas-bg border-tres-caracteristicas-border",
      varMarcosTxt: "text-tres-caracteristicas-txt",
      varPuntos: "bg-tres-caracteristicas-puntos",
      varCursor: "text-tres-01-cursor",
    },
    {
      step: "02",
      title: t("step2.title"),
      description: t("step2.description"),
      image: "/img/quimica/img2.jpg",
      tag: t("step2.tag"),
      details: [t("step2.detail1"), t("step2.detail2"), t("step2.detail3")],
      align: "right",
      color: "from-teal-50 to-sky-50",
      accentColor: "bg-teal-500",
      textColor: "text-teal-600",
      varNum: "text-tres-num",
      varMiniBg: "bg-tres-mini-bg",
      varMiniBorder: "border-tres-mini-borde",
      varMiniTxt: "text-tres-mini-txt",
      varTtl: "text-tres-ttl",
      varDesc: "text-tres-desc",
      varMarcos:
        "bg-tres-caracteristicas-bg border-tres-caracteristicas-border",
      varMarcosTxt: "text-tres-caracteristicas-txt",
      varPuntos: "bg-tres-caracteristicas-puntos",
      varCursor: "text-tres-02-cursor",
    },
    {
      step: "03",
      title: t("step3.title"),
      description: t("step3.description"),
      image: "/img/quimica/img3.jpg",
      tag: t("step3.tag"),
      details: [t("step3.detail1"), t("step3.detail2"), t("step3.detail3")],
      align: "left",
      color: "from-sky-50 to-indigo-50",
      accentColor: "bg-sky-500",
      textColor: "text-sky-600",
      varNum: "text-tres-num",
      varMiniBg: "bg-tres-mini-bg",
      varMiniBorder: "border-tres-mini-borde",
      varMiniTxt: "text-tres-mini-txt",
      varTtl: "text-tres-ttl",
      varDesc: "text-tres-desc",
      varMarcos:
        "bg-tres-caracteristicas-bg border-tres-caracteristicas-border",
      varMarcosTxt: "text-tres-caracteristicas-txt",
      varPuntos: "bg-tres-caracteristicas-puntos",
      varCursor: "text-tres-03-cursor",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-tres-bg px-5 py-[1px] md:px-12 md:py-24 lg:py-5"
    >
      {/* Section heading — left-anchored, not centered */}
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-3 mx-auto max-w-4xl text-center md:mb-0">
          {/* Título — tresPasos.titleLine1 + tresPasos.titleLine2 */}
          <h2 className="text-titulos font-semibold leading-[1.15] tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="block">{t("titleLine1")}</span>
            <span className="block text-hero-ttl">{t("titleLine2")}</span>
          </h2>
        </div>

        {/* Alternating steps */}
        <div className="flex flex-col gap-0">
          {steps.map((step, index) => (
            <motion.div
              key={`${step.step}-${reducedMotion}`}
              initial={reducedMotion ? { y: 0 } : { y: 30 }}
              whileInView={reducedMotion ? { y: 0 } : { y: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.08,
                    }
              }
              viewport={{ once: true, margin: "-80px" }}
              className={cn(
                "group relative grid grid-cols-1 gap-12 py-12 md:py-16 lg:pt-10 lg:pb-24 lg:grid-cols-2 lg:gap-24 lg:gap-y-0",
                step.align === "right" &&
                  "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1",
              )}
            >
              {/* Text side */}
              {/* Texto lado izquierdo: número, tag, título, descripción, pills */}
              <div className="flex flex-col justify-center">
                <div className="flex items-start gap-6">
                  {/* Step number — large */}
                  <span
                    className={`shrink-0 text-7xl font-black leading-none ${step.varNum} mt-1`}
                  >
                    {step.step}
                  </span>
                  <div>
                    <span
                      className={`mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold ${step.varMiniBg} ${step.varMiniBorder} ${step.varMiniTxt}`}
                    >
                      {step.tag}
                    </span>
                    <h3
                      className={`text-xl sm:text-2xl md:text-3xl font-bold tracking-tight ${step.varTtl}`}
                    >
                      {step.title}
                    </h3>
                    <p
                      className={`mt-4 text-base leading-relaxed ${step.varDesc}`}
                    >
                      {step.description}
                    </p>

                    {/* Detail pills */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {step.details.map((d) => (
                        <span
                          key={d}
                          className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium ${step.varMarcos} ${step.varMarcosTxt}`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${step.varPuntos}`}
                          />
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual side */}
              {/* Imagen lado derecho con PointerHighlight y hover scale */}
              <PointerHighlight
                rectangleClassName={cn(
                  "rounded-2xl border",
                  step.varMiniBorder,
                )}
                bgOpacity={0.03}
                pointerClassName={step.varCursor}
                containerClassName="w-full"
                disabled={reducedMotion}
              >
                <div
                  className={`relative overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-border aspect-[16/10] w-full`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={800}
                    height={500}
                    quality={85}
                    priority={index <= 1}
                    loading={index <= 1 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                    className={cn(
                      "h-full w-full object-cover transition duration-700 will-change-transform dark:opacity-90 [transform:translateZ(0)] [backface-visibility:hidden]",
                      !reducedMotion && "group-hover:scale-[1.03]",
                    )}
                  />
                </div>
              </PointerHighlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
