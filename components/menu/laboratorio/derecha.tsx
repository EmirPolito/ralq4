"use client";

import React, { useMemo } from "react";
import {
  Activity,
  Gauge,
  ShieldCheck,
  Settings,
  FlaskConical,
  Microscope,
  Pill,
  GraduationCap,
  Apple,
  Droplet,
  Dna,
  Thermometer,
  Clock,
  Box,
  Scale,
  Droplets,
  Atom,
  Lightbulb,
} from "lucide-react";

import { ItemData } from "../data";

const getIcon = (name: string) => {
  switch (name) {
    case "flask": return <FlaskConical className="w-5 h-5" />;
    case "microscope": return <Microscope className="w-5 h-5" />;
    case "pill": return <Pill className="w-5 h-5" />;
    case "graduation": return <GraduationCap className="w-5 h-5" />;
    case "apple": return <Apple className="w-5 h-5" />;
    case "droplet": return <Droplet className="w-5 h-5" />;
    case "dna": return <Dna className="w-5 h-5" />;
    case "thermometer": return <Thermometer className="w-5 h-5" />;
    case "box": return <Box className="w-5 h-5" />;
    case "settings": return <Settings className="w-5 h-5" />;
    case "atom": return <Atom className="w-5 h-5" />;
    case "scale": return <Scale className="w-5 h-5" />;
    case "droplets": return <Droplets className="w-5 h-5" />;
    case "clock": return <Clock className="w-5 h-5" />;
    default: return <Activity className="w-5 h-5" />;
  }
};

const getDetailIcon = (key: string, category: string) => {
  const lowerKey = key.toLowerCase();
  
  if (lowerKey.includes("temperatura") || lowerKey.includes("fusión") || lowerKey.includes("ebullición")) return <Thermometer className="w-3 h-3" />;
  if (lowerKey.includes("presión")) return <Gauge className="w-3 h-3" />;
  if (lowerKey.includes("tiempo")) return <Clock className="w-3 h-3" />;
  if (lowerKey.includes("capacidad") || lowerKey.includes("volumen") || lowerKey.includes("uso")) return <Box className="w-3 h-3" />;
  
  if (lowerKey.includes("fórmula") || lowerKey.includes("método")) return <FlaskConical className="w-3 h-3" />;
  if (lowerKey.includes("masa") || lowerKey.includes("densidad") || lowerKey.includes("peso")) return <Scale className="w-3 h-3" />;
  if (lowerKey.includes("estado")) return <Droplets className="w-3 h-3" />;
  if (lowerKey.includes("pureza")) return <ShieldCheck className="w-3 h-3" />;
  
  return category === "Instrumentos" ? <Settings className="w-3 h-3" /> : <Atom className="w-3 h-3" />;
};

export function InstrumentDetails({ activeItem }: { activeItem: ItemData }) {
  const detailEntries = Object.entries(activeItem.details).filter(
    ([key]) => key !== "Notas",
  );

  return (
    <div className="flex flex-col h-full min-h-0 font-sans w-full">
      <div className="flex-1 flex flex-col min-h-0 transform-gpu">
        {/* Cabecera Horizontal - Icono a la izquierda, Texto a la derecha */}
        <div className="flex flex-row items-center gap-4 mb-8 mt-0 flex-shrink-0">
          <div className="w-15 h-15 rounded-xl bg-menu2-derecha-bg-iconos flex items-center justify-center flex-shrink-0 overflow-hidden shadow-lg">
            <img
              src={activeItem.image}
              alt={activeItem.name}
              className="w-18 h-18 object-contain"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <h3 className="text-menu2-derecha-ttl text-lg font-bold leading-tight truncate">
              {activeItem.name}
            </h3>

            <p className="text-menu2-derecha-desc text-xs font-normal mt-0.5">
              {activeItem.scientificName || activeItem.group}
            </p>
          </div>
        </div>

        {/* Contenedor de Scroll */}
        <div className="flex-1 overflow-y-auto pr-3 custom-scrollbar overscroll-contain will-change-transform scrolling-touch">
          <div className="flex flex-col divide-y divide-menu2-izq-buscador-borde pb-6" style={{ contentVisibility: "auto" }}>
            
            {/* SECCIÓN ¿QUÉ ES? */}
            {activeItem.whatIsIt && (
              <div className="py-6 first:pt-0 last:pb-0 transform-gpu">
                <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] mb-1.5 px-1">
                  ¿QUÉ ES?
                </h2>
                <p className="text-menu2-derecha-mini-ttl text-xs font-normal px-1 leading-relaxed">
                  {activeItem.whatIsIt}
                </p>
              </div>
            )}

            <div className="py-6 first:pt-0 last:pb-0 transform-gpu">
              <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] mb-1.5 px-1">
                CARACTERÍSTICAS PRINCIPALES
              </h2>

              {detailEntries.map(([key, value], i) => (
                <div key={activeItem.id + i} className="transform-gpu">
                  <div className="flex items-center gap-5 py-3.5 px-1">
                    <div className="w-8 h-8 rounded-full bg-menu2-derecha-bg-iconos text-menu2-derecha-iconos flex items-center justify-center flex-shrink-0 shadow-sm">
                      {getDetailIcon(key, activeItem.category)}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-menu2-derecha-mini-ttl text-xs font-normal leading-none mb-1.5">
                        {key}
                      </span>
                      <p className="text-menu2-derecha-mini-txt text-sm font-semibold leading-tight">
                        {value}
                      </p>
                    </div>
                  </div>
                  {i < detailEntries.length - 1 && (
                    <div className="border-t border-dashed border-menu2-izq-buscador-borde ml-14" />
                  )}
                </div>
              ))}
            </div>

            {/* SECCIÓN ¿CÓMO FUNCIONA? */}
            {activeItem.howItWorks && (
              <div className="py-6 first:pt-0 last:pb-0 transform-gpu">
                <div className="flex items-center gap-2 mb-1.5 px-1">
                  <Lightbulb className="w-3.5 h-3.5 text-menu2-derecha-txt-mayusculas" />
                  <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em]">
                    {activeItem.howItWorksTitle || "¿CÓMO FUNCIONA?"}
                  </h2>
                </div>
                <p className="text-menu2-derecha-mini-ttl text-xs font-normal px-1 leading-relaxed">
                  {activeItem.howItWorks}
                </p>
              </div>
            )}

            {/* SECCIÓN ¿PARA QUÉ SIRVE? */}
            {activeItem.whatIsItFor && (
              <div className="py-6 first:pt-0 last:pb-0 transform-gpu">
                <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] mb-1.5 px-1">
                  ¿PARA QUÉ SIRVE?
                </h2>
                <p className="text-menu2-derecha-mini-ttl text-xs font-normal px-1 mb-3 leading-relaxed">
                  {activeItem.whatIsItFor.text}
                </p>
                <div className="grid grid-cols-4 gap-2 px-1">
                  {activeItem.whatIsItFor.uses.map((use, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-start p-2 rounded-xl bg-transparent text-menu2-derecha-mini-ttl shadow-sm text-center gap-1.5 border border-menu2-izq-buscador-borde">
                      <div className="text-menu2-centro-txt mb-1">
                         {getIcon(use.icon)}
                      </div>
                      <span className="text-[8.5px] font-medium leading-tight">
                        {use.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SECCIÓN DATO EDUCATIVO */}
            {activeItem.educationalFact && (
              <div className="py-6 first:pt-0 last:pb-0 transform-gpu px-1">
                <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] mb-1.5">
                  DATO EDUCATIVO
                </h2>
                <div className="p-4 rounded-xl border border-menu2-izq-buscador-borde bg-transparent">
                  <p className="text-menu2-derecha-mini-ttl text-xs font-normal leading-relaxed">
                    {activeItem.educationalFact}
                  </p>
                </div>
              </div>
            )}

            {/* SECCIÓN INFORMACIÓN ADICIONAL */}
            {activeItem.additionalInfo && (
              <div className="py-6 first:pt-0 last:pb-0 transform-gpu">
                <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] mb-1.5 px-1">
                  INFORMACIÓN ADICIONAL
                </h2>
                <div className="space-y-3 px-1 pt-1">
                  {Object.entries(activeItem.additionalInfo).map(([k, v], idx) => (
                    <div key={idx} className="flex justify-between items-center gap-4">
                      <span className="text-menu2-derecha-mini-txt text-xs font-semibold shrink-0">
                        {k}
                      </span>
                      <span className="text-menu2-derecha-mini-ttl text-xs font-normal text-right">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
