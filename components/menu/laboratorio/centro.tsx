"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize,
  RotateCcw,
  Box,
  Eye,
  Camera,
  Download,
  SwitchCamera,
  Info,
  ChevronDown,
  ChevronRight,
  BookOpen,
  BarChart2,
} from "lucide-react";

import { ItemData } from "../data";
import { ModelViewer } from "./model-viewer/ModelViewer";

export function InstrumentViewer({
  activeItem,
  viewMode: externalViewMode = "normal",
}: {
  activeItem: ItemData;
  viewMode?: string;
}) {
  const [viewType, setViewType] = useState<"3D" | "AR" | "360">("3D");
  const [showHabitat, setShowHabitat] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [resetTrigger, setResetTrigger] = useState(0);

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

  return (
    <div className="flex flex-col h-full gap-0 px-0 w-full">
      {/* Header Info - Comentado temporalmente por petición del usuario
      <div className="flex justify-between items-end px-3.5">
        <div className="flex flex-col mt-3">
          <h1 className="text-2xl md:text-xl font-bold text-menu2-centro-txt">
            {activeItem.name}
          </h1>

          <span className="text-sm md:text-sm font-normal text-menu2-centro-desc">
            {activeItem.subtitle}
          </span>
        </div>

        <div className="bg-menu2-centro-bgderecha flex items-center gap-6 p-1.5 rounded-xl shadow-sm border border-menu2-izq-buscador-borde">
          <div className="flex items-center">
            <div className="flex bg-menu2-centro-bgbg rounded-xl p-0.5">
              {(["3D", "AR"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewType(mode)}
                  className={cn(
                    "cursor-pointer px-3.5 py-1.5 text-xs font-medium rounded-lg",
                    viewType === mode
                      ? "bg-menu2-centro-bg-boton text-menu2-centro-3D shadow-md"
                      : "text-menu2-centro-AR",
                  )}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 pr-2">
            <button
              onClick={() => setShowHabitat(!showHabitat)}
              className={cn(
                "cursor-pointer relative w-10 h-5 rounded-full transition-colors duration-300 focus:outline-none",
                showHabitat ? "bg-menu2-centro-bg-boton" : "bg-menu2-centro-AR",
              )}
            >
              <div
                className={cn(
                  "absolute top-0.5 left-0.5 w-4 h-4 bg-menu2-centro-bolita-bg rounded-full transition-transform duration-300 shadow-sm",
                  showHabitat ? "translate-x-5" : "translate-x-0",
                )}
              />
            </button>
            <span className="text-xs md:text-xs font-medium text-menu2-centro-AR uppercase">
              Fondo
            </span>
          </div>
        </div>
      </div>
      */}

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
              "absolute inset-0 transition-colors duration-700",
              externalViewMode === "anatomy"
                ? "bg-indigo-950/40"
                : externalViewMode === "details"
                  ? "bg-slate-900"
                  : showHabitat
                    ? "bg-menu2-izq-bg"
                    : "bg-transparent",
            )}
          >
            {/* Anatomy Grid Effect */}
            {externalViewMode === "anatomy" && (
              <div className="absolute inset-0 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Central Model — GLB Viewer or PNG Fallback */}
        <div className="absolute inset-0 flex items-center justify-center">
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

        {/* Botones de Control de Cámara y Pantalla Completa — Ubicados en la esquina superior derecha */}
        <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
          {/* Botón Maximizar / Pantalla Completa */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleFullscreen}
            className="flex items-center justify-center cursor-pointer text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-lg backdrop-blur-md transition-all duration-300 shadow-md border border-white/10"
            title="Pantalla Completa"
          >
            <Maximize className="w-4 h-4" />
          </motion.button>

          {/* Botón Reiniciar Posición */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setResetTrigger((prev) => prev + 1)}
            className="flex items-center justify-center cursor-pointer text-white/70 hover:text-white bg-black/40 hover:bg-black/60 p-2 rounded-lg backdrop-blur-md transition-all duration-300 shadow-md border border-white/10"
            title="Reiniciar Posición"
          >
            <RotateCcw className="w-4 h-4" />
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

  if (isInstrument) {
    const modes = [
      { id: "normal", label: "Vista general", emoji: "📦", bg: "bg-blue-50" },
      { id: "details", label: "ESTRUCTURA", emoji: "🔍", bg: "bg-emerald-50" },
      { id: "anatomy", label: "COMPONENTES", emoji: "🧬", bg: "bg-slate-50" },
    ];

    return (
      <div className="bg-menu2-abajo-bg w-full h-full backdrop-blur-md border border-menu2-izq-buscador-borde rounded-xl p-3 shadow-xl flex flex-col gap-2 min-h-0 animate-in fade-in slide-in-from-bottom-2 duration-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <BookOpen className="w-3 h-3 text-menu2-abajo-txt" />
            <h2 className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.1em] uppercase">
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
                  ? "border-black/10 dark:border-white/30 shadow-lg"
                  : "border-slate-200/60 dark:border-menu2-abajo-borde shadow-sm",
              )}
            >
              <div
                className={cn(
                  "flex-1 flex items-center justify-center p-4",
                  "bg-menu2-abajo-bg-bgtarjeta",
                )}
              >
                <img
                  src={activeItem.image}
                  alt={mode.label}
                  className={cn(
                    "w-12 h-12 object-contain transition-all duration-500",
                    mode.id === "anatomy"
                      ? "invert brightness-200 contrast-125"
                      : "",
                    mode.id === "details" ? "scale-110 brightness-110" : "",
                    viewMode !== mode.id
                      ? "opacity-40 grayscale"
                      : "opacity-100",
                  )}
                />
                {viewMode === mode.id && (
                  <div className="bg-white/5 absolute inset-0 pointer-events-none" />
                )}
              </div>
              <div
                className={cn(
                  "py-1.5 flex items-center justify-center border-t",
                  viewMode === mode.id
                    ? "bg-black border-black dark:bg-white dark:border-white"
                    : "bg-menu2-abajo-borde border-menu2-abajo-borde",
                )}
              >
                <span
                  className={cn(
                    "text-[10px] font-bold uppercase tracking-wider",
                    viewMode === mode.id
                      ? "text-white dark:text-black"
                      : "text-menu2-abajo-txt-tarjeta",
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
    <div className="grid grid-cols-12 gap-3 h-full">
      <div className="col-span-7 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-lg flex flex-col gap-2 min-h-0">
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

      <div className="col-span-5 bg-white/80 backdrop-blur-md border border-slate-200 rounded-2xl p-3 shadow-lg flex flex-col gap-2 min-h-0">
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
