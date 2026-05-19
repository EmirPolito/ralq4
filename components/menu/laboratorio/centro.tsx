"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize,
  RotateCcw,
  BookOpen,
  ChevronDown,
  ChevronRight,
  BarChart2,
  Download,
} from "lucide-react";

import { useGLTF } from "@react-three/drei";

import { ItemData } from "../data";
import { ModelViewer } from "./model-viewer/ModelViewer";

// Set up Google's hosted Draco decoders globally for Drei's useGLTF
useGLTF.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.5/",
);

export function InstrumentViewer({
  activeItem,
  viewMode: externalViewMode = "normal",
}: {
  activeItem: ItemData;
  viewMode?: string;
}) {
  const [viewType, setViewType] = useState<"3D" | "AR" | "360">("3D");
  const [showHabitat, setShowHabitat] = useState(true);
  const [resetTrigger, setResetTrigger] = useState(0);
  const [mounted, setMounted] = useState(false);

  const containerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error("Error attempting to enable fullscreen:", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleDownload = () => {
    if (!activeItem.glbPath) return;
    const link = document.createElement("a");
    link.href = activeItem.glbPath;
    const fileName =
      activeItem.glbPath.split("/").pop() || `${activeItem.name}.glb`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col h-full gap-0 px-0 w-full">
      {/* Visualizador de modelo 3D — Ocupa toda la pantalla del centro */}
      <div
        ref={containerRef}
        className="relative w-full h-full flex-1 rounded-xl overflow-hidden group bg-menu2-izq-bg"
      >
        {/* Dynamic Background based on mode */}
        <AnimatePresence mode="wait">
          <motion.div
            key={externalViewMode + showHabitat}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "absolute inset-0 transition-colors duration-700 bg-menu2-izq-bg",
            )}
          >
            {/* Anatomy Grid Effect */}
            {externalViewMode === "anatomy" && (
              <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Central Model — GLB Viewer or PNG Fallback */}
        <div className="absolute inset-x-0 bottom-0 top-12 lg:top-0 flex items-center justify-center">
          <ModelViewer
            glbPath={activeItem.glbPath ?? ""}
            fallbackImage={activeItem.image}
            name={activeItem.name}
            showBackground={showHabitat}
            viewMode={externalViewMode}
            autoRotate={externalViewMode === "anatomy"}
            resetTrigger={resetTrigger}
          />
        </div>

        {/* Botones de Control de Cámara y Pantalla Completa — Ubicados en las esquinas y en medio */}
        <div className="absolute top-4 left-0 right-0 px-6 z-30 flex flex-row justify-between items-center lg:left-auto lg:right-4 lg:w-auto lg:flex-col lg:gap-5 lg:justify-start lg:px-0">
          {/* Botón Descargar Modelo 3D */}
          {activeItem.glbPath && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleDownload}
              className="flex flex-col items-center justify-center cursor-pointer text-menu2-centro-iconos hover:text-white bg-menu2-centro-bg-iconos hover:bg-menu2-centro-hvr-iconos p-1.5 lg:p-2 rounded-lg transition-all duration-300 shadow-md border border-menu2-centro-borde gap-0.5 order-1 lg:order-3"
              title="Descargar Modelo 3D"
            >
              <Download className="w-4 h-2 lg:w-5 lg:h-2.5" />
              <span className="text-[7px] lg:text-[8px] font-medium tracking-wider leading-none">
                GLB
              </span>
            </motion.button>
          )}

          {/* Botón Reiniciar Posición */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setResetTrigger((prev) => prev + 1)}
            className="flex items-center justify-center cursor-pointer text-menu2-centro-iconos hover:text-white bg-menu2-centro-bg-iconos hover:bg-menu2-centro-hvr-iconos p-1.5 lg:p-2 rounded-lg transition-all duration-300 shadow-md border border-menu2-centro-borde order-2 lg:order-2"
            title="Reiniciar Posición"
          >
            <RotateCcw className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
          </motion.button>

          {/* Botón Maximizar / Pantalla Completa */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleFullscreen}
            className="flex items-center justify-center cursor-pointer text-menu2-centro-iconos hover:text-white bg-menu2-centro-bg-iconos hover:bg-menu2-centro-hvr-iconos p-1.5 lg:p-2 rounded-lg transition-all duration-300 shadow-md border border-menu2-centro-borde order-3 lg:order-1"
            title="Pantalla Completa"
          >
            <Maximize className="w-3.5 h-3.5 lg:w-4.5 lg:h-4.5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}

// ─── BOTTOM SECTIONS COMPONENT (Moved from separate file) ──────────────────────

export interface BottomSectionsProps {
  data: ItemData[];
  activeItem: ItemData;
  compareLabel?: string;
  isInstrument?: boolean;
  viewMode?: string;
  onViewModeChange?: (mode: string) => void;
}

const MOLECULE_CARDS = [
  { id: "specs", label: "Especificaciones", emoji: "📋", bg: "bg-blue-50" },
  { id: "3d", label: "Visualización 3D", emoji: "🔷", bg: "bg-slate-50" },
];

export function BottomSections({
  data,
  activeItem,
  compareLabel = "INSTRUMENTOS",
  isInstrument = false,
  viewMode = "normal",
  onViewModeChange,
}: BottomSectionsProps) {
  const [activeGallery, setActiveGallery] = useState("specs");
  const [compareA, setCompareA] = useState(data[0]?.id ?? "");
  const [compareB, setCompareB] = useState(data[1]?.id ?? "");

  const itemA = data.find((i) => i.id === compareA) ?? data[0];
  const itemB = data.find((i) => i.id === compareB) ?? data[1];

  // Stagger model preloading in the background to keep the main thread completely lag-free
  useEffect(() => {
    const modelsToPreload = data.filter((item) => item.glbPath);
    let index = 0;

    const interval = setInterval(() => {
      if (index < modelsToPreload.length) {
        const item = modelsToPreload[index];
        if (item.glbPath) {
          useGLTF.preload(item.glbPath);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 1500); // Stagger preloading: 1 model every 1.5s in the background

    return () => clearInterval(interval);
  }, [data]);

  if (isInstrument) {
    const modes = [
      { id: "normal", label: "Vista General", emoji: "📦", bg: "bg-blue-50" },
      { id: "details", label: "Rotación", emoji: "🔄", bg: "bg-emerald-50" },
    ];

    return (
      <div className="bg-menu2-abajo-bg w-full h-full backdrop-blur-md border border-menu2-abajo-borde rounded-xl p-3 shadow-xl flex flex-col gap-2 min-h-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <h2 className="text-menu2-abajo-txt text-[10px] font-bold tracking-[0.1em] uppercase px-0.5">
              Opciones de Visualización
            </h2>
          </div>
        </div>

        <div className="flex gap-3 flex-1 min-h-0">
          {modes.map((mode) => (
            <motion.button
              key={mode.id}
              onClick={() => onViewModeChange?.(mode.id)}
              className={cn(
                "flex-1 flex flex-col rounded-xl overflow-hidden border transition-all cursor-pointer relative",
                viewMode === mode.id
                  ? "border-menu2-abajo-borde-minitarjeta dark:border-white/30 shadow-lg"
                  : "border-menu2-abajo-borde-minitarjeta hover:bg-menu2-abajo-hvr-minitarjeta shadow-sm",
              )}
            >
              <div
                className={cn(
                  "flex-1 flex items-center justify-center relative min-h-[110px]",
                  "bg-menu2-abajo-bg-minitarjeta",
                )}
              >
                <div className="p-4 flex items-center justify-center absolute inset-0">
                  <img
                    src={activeItem.image}
                    alt={mode.label}
                    className={cn(
                      "w-31 h-31 object-contain transition-all duration-500",
                      viewMode !== mode.id
                        ? "opacity-40 grayscale"
                        : "opacity-100 drop-shadow-md",
                    )}
                  />
                </div>
                {viewMode === mode.id && (
                  <div className="bg-white/5 absolute inset-0 pointer-events-none" />
                )}
              </div>
              <div
                className={cn(
                  "py-1.5 flex items-center justify-center border-t",
                  viewMode === mode.id
                    ? "bg-menu2-abajo-bg-active border-menu2-abajo-bg-active"
                    : "bg-menu2-abajo-bg-minitarjeta-chica border-menu2-abajo-borde-minitarjeta",
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    viewMode === mode.id
                      ? "text-menu2-abajo-txt-active"
                      : "text-menu2-abajo-txt-minitarjeta-chica",
                  )}
                >
                  {mode.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-3 h-full">
      <div className="col-span-1 md:col-span-7 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-lg flex flex-col gap-2 min-h-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-[#1a88c3]" />
            <h2 className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">
              Galería Educativa
            </h2>
          </div>
          <button className="p-1 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="flex gap-3 flex-1 min-h-0">
          {MOLECULE_CARDS.map((card) => (
            <motion.button
              key={card.id}
              whileHover={{ y: -3 }}
              onClick={() => setActiveGallery(card.id)}
              className={cn(
                "flex-1 flex flex-col rounded-xl overflow-hidden border transition-all cursor-pointer relative",
                activeGallery === card.id
                  ? "border-blue-300 shadow-md shadow-blue-50"
                  : "border-slate-100 hover:border-slate-200 shadow-sm",
              )}
            >
              <div
                className={cn(
                  "flex-1 flex items-center justify-center",
                  card.bg,
                )}
              >
                <span className="text-4xl drop-shadow">{card.emoji}</span>
                {activeGallery === card.id && (
                  <div className="absolute inset-0 bg-blue-400/5" />
                )}
              </div>
              <div className="py-1.5 bg-white flex items-center justify-center border-t border-slate-100">
                <span
                  className={cn(
                    "text-[10px] font-bold",
                    activeGallery === card.id
                      ? "text-[#1a88c3]"
                      : "text-slate-500",
                  )}
                >
                  {card.label}
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="col-span-1 md:col-span-5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-lg flex flex-col gap-2 min-h-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BarChart2 className="w-3 h-3 text-[#1a88c3]" />
            <h2 className="text-[9px] font-bold text-slate-500 tracking-widest uppercase">
              Comparar {compareLabel}
            </h2>
          </div>
          <button className="p-1 rounded-lg bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors">
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="flex items-center gap-2 flex-1">
          <div className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-xl border border-slate-100 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">
              {itemA?.emoji}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-slate-800 text-center leading-tight">
                {itemA?.name}
              </span>
              <span className="text-[8px] text-slate-400">{itemA?.group}</span>
            </div>
            <select
              value={compareA}
              onChange={(e) => setCompareA(e.target.value)}
              className="w-full text-[9px] border border-slate-200 rounded-lg px-1.5 py-0.5 bg-white text-slate-600 font-semibold cursor-pointer"
            >
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className="w-7 h-7 rounded-full bg-[#1a88c3] text-white flex items-center justify-center text-[9px] font-black border-2 border-white shadow-lg flex-shrink-0">
            VS
          </div>

          <div className="flex-1 flex flex-col items-center gap-1.5 p-2 rounded-xl border border-slate-100 bg-slate-50/50">
            <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-2xl">
              {itemB?.emoji}
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-slate-800 text-center leading-tight">
                {itemB?.name}
              </span>
              <span className="text-[8px] text-slate-400">{itemB?.group}</span>
            </div>
            <select
              value={compareB}
              onChange={(e) => setCompareB(e.target.value)}
              className="w-full text-[9px] border border-slate-200 rounded-lg px-1.5 py-0.5 bg-white text-slate-600 font-semibold cursor-pointer"
            >
              {data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-1.5 bg-[#1a88c3] text-white rounded-xl text-[10px] font-bold shadow-lg shadow-blue-100 hover:bg-[#1577ab] transition-all flex items-center justify-center gap-1"
        >
          Abrir comparación <ChevronRight className="w-3 h-3" />
        </motion.button>
      </div>
    </div>
  );
}
