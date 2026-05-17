"use client";

import React from "react";
import { motion } from "framer-motion";

export function ModelLoader() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 z-10">
      {/* Spinner */}
      <div className="relative w-12 h-12">
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-menu2-centro-txt"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-1.5 rounded-full border-2 border-transparent border-t-menu2-centro-desc"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </div>
      <motion.p
        className="text-[10px] font-medium text-menu2-centro-desc uppercase tracking-widest"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Cargando modelo 3D...
      </motion.p>
    </div>
  );
}

export function ModelError({ onFallback }: { onFallback?: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 z-10">
      <span className="text-2xl">⚠️</span>
      <p className="text-[10px] font-medium text-menu2-centro-desc text-center px-4">
        Modelo 3D no disponible
      </p>
      {onFallback && (
        <button
          onClick={onFallback}
          className="text-[9px] underline text-menu2-centro-desc opacity-70 hover:opacity-100"
        >
          Ver imagen
        </button>
      )}
    </div>
  );
}
