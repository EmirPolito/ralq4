"use client";

import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { Beaker, Atom, FlaskConical } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PinCardsSection() {
  const t = useTranslations("pinCards");

  return (
    <section className="py-20 lg:py-17 overflow-hidden">
      <div className="container mx-auto px-6 md:px-8">
        <ScrollAnimation direction="up" delay={0.1}>
          <div className="text-center -mb-2  relative -top-8 md:top-3">
            {/* Título — pinCards.sectionLine1 (blanco) + pinCards.sectionLine2 (color) */}
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold tracking-tight">
              <span className="block text-titulos">{t("sectionLine1")}</span>
              <span className="block text-tarjetas-ttl1">
                {t("sectionLine2")}
              </span>
            </h2>

            {/* Descripción — pinCards.sectionDesc */}
            <p className="text-tarjetas-desc2 mt-1.5 max-w-2xl md:max-w-none mx-auto text-sm lg:text-base text-center leading-relaxed">
              {t("sectionDesc")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-17 lg:gap-38 will-change-transform">
          {/* Pin 1 */}
          <ScrollAnimation
            direction="up"
            delay={0.2}
            className="w-full lg:w-[22rem]"
          >
            <div className="h-[22rem] sm:h-[27rem] flex items-center justify-center">
              <PinContainer title={t("pin1.cta")} href="#laboratorios">
                <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[18.5rem] h-[18.5rem] sm:w-[22rem] sm:h-[22rem] from-card to-card/50 backdrop-blur-sm rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="text-tarjetas-txt3 text-xs">
                      {t("pin1.tag")}
                    </div>
                  </div>
                  <div className="flex-1 mt-7 sm:mt-4 space-y-2 sm:space-y-4">
                    <div className="flex items-center gap-2">
                      <Beaker className="text-tarjetas-1txt6 h-6 w-6 sm:h-8 sm:w-8" />
                      <div className="text-tarjetas-ttl4 text-lg sm:text-xl font-bold">
                        {t("pin1.title")}
                      </div>
                    </div>
                    <p className="text-tarjetas-desc5 text-[13px] sm:text-[15px] leading-relaxed">
                      {t("pin1.desc")}
                    </p>
                    <div className="grid grid-cols-3 gap-10 sm:gap-20 mt-4 sm:mt-10">
                      <div className="space-y-1">
                        <div className="text-tarjetas-1txt6 text-2xl sm:text-4xl font-bold">
                          +2
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin1.stat1")}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-tarjetas-1txt6 text-2xl sm:text-4xl font-bold">
                          RA
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin1.stat2")}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-tarjetas-1txt6 text-2xl sm:text-4xl font-bold">
                          3D
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin1.stat3")}
                        </div>
                      </div>
                    </div>
                    <div className="py-3.5 flex justify-between items-end">
                      <div className="text-tarjetas-txt8 text-xs">
                        {t("pin1.footer")}
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          </ScrollAnimation>

          {/* Pin 2 */}
          <ScrollAnimation
            direction="up"
            delay={0.3}
            className="w-full lg:w-[22rem]"
          >
            <div className="h-[22rem] sm:h-[27rem] flex items-center justify-center">
              <PinContainer title={t("pin2.cta")} href="#laboratorios">
                <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[18.5rem] h-[18.5rem] sm:w-[22rem] sm:h-[22rem] from-card to-card/50 backdrop-blur-sm rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="text-tarjetas-txt3 text-xs">
                      {t("pin2.tag")}
                    </div>
                  </div>
                  <div className="flex-1 mt-7 sm:mt-4 space-y-2 sm:space-y-4">
                    <div className="flex items-center gap-2">
                      <Atom className="text-tarjetas-2txt6 h-6 w-6 sm:h-8 sm:w-8" />
                      <div className="text-tarjetas-ttl4 text-lg sm:text-xl font-bold">
                        {t("pin2.title")}
                      </div>
                    </div>
                    <p className="text-tarjetas-desc5 text-[13px] sm:text-[15px] leading-relaxed">
                      {t("pin2.desc")}
                    </p>
                    <div className="grid grid-cols-3 gap-10 sm:gap-20 mt-4 sm:mt-10">
                      <div className="space-y-1">
                        <div className="text-tarjetas-2txt6 text-2xl sm:text-4xl font-bold">
                          8+
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin2.stat1")}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-tarjetas-2txt6 text-2xl sm:text-4xl font-bold">
                          RA
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin2.stat2")}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-tarjetas-2txt6 text-2xl sm:text-4xl font-bold">
                          3D
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin2.stat3")}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="py-3.5 text-tarjetas-txt8 text-xs">
                        {t("pin2.footer")}
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          </ScrollAnimation>

          {/* Pin 3 */}
          <ScrollAnimation
            direction="up"
            delay={0.4}
            className="w-full lg:w-[22rem]"
          >
            <div className="h-[22rem] sm:h-[27rem] flex items-center justify-center">
              <PinContainer title={t("pin3.cta")} href="#laboratorios">
                <div className="bg-tarjetas-bg border border-border flex flex-col p-4 tracking-tight w-[18.5rem] h-[18.5rem] sm:w-[22rem] sm:h-[22rem] from-card to-card/50 backdrop-blur-sm rounded-2xl">
                  <div className="flex items-center gap-2">
                    <div className="text-tarjetas-txt3 text-xs">
                      {t("pin3.tag")}
                    </div>
                  </div>
                  <div className="flex-1 mt-7 sm:mt-4 space-y-2 sm:space-y-4">
                    <div className="flex items-center gap-2">
                      <FlaskConical className="text-tarjetas-3txt6 h-6 w-6 sm:h-8 sm:w-8" />
                      <div className="text-tarjetas-ttl4 text-lg sm:text-xl font-bold">
                        {t("pin3.title")}
                      </div>
                    </div>
                    <p className="text-tarjetas-desc5 text-[13px] sm:text-[15px] leading-relaxed">
                      {t("pin3.desc")}
                    </p>
                    <div className="grid grid-cols-3 gap-10 sm:gap-20 mt-4 sm:mt-10">
                      <div className="space-y-1">
                        <div className="text-tarjetas-3txt6 text-2xl sm:text-4xl font-bold">
                          15+
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin3.stat1")}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-tarjetas-3txt6 text-2xl sm:text-4xl font-bold">
                          360°
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin3.stat2")}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-tarjetas-3txt6 text-2xl sm:text-4xl font-bold">
                          RA
                        </div>
                        <div className="text-tarjetas-desc7 text-xs">
                          {t("pin3.stat3")}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="py-3.5 text-tarjetas-txt8 text-xs">
                        {t("pin3.footer")}
                      </div>
                    </div>
                  </div>
                </div>
              </PinContainer>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
