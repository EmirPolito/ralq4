"use client";

import React from "react";
import {
  Flame,
  BookOpen,
  BarChart3,
  ChevronRight,
  FlaskConical,
  Play,
  ArrowRight,
  BookMarked,
} from "lucide-react";
import Link from "next/link";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function ContenidoHome() {
  return (
    <div className="w-full flex flex-col items-center pt-5 px-4 md:px-8 pb-5">
      <div className="w-full max-w-5xl pl-0 pr-2">
        <div className="flex items-baseline gap-4 mb-2">
          <h1 className="text-3xl md:text-3xl font-extrabold text-foreground tracking-tight">
            Química General - Nivel
          </h1>
          <div className="w-9 h-9 rounded-full bg-[var(--dash-banner)] flex items-center justify-center text-xl font-bold text-[var(--dash-banner-txt)] border-2 border-transparent shadow-sm">
            1
          </div>

          <div className="flex items-center gap-5 text-muted-foreground mr-4 ml-auto">
            <BarChart3 className="w-5 h-5 cursor-pointer hover:text-foreground transition-colors" />
            <BookMarked className="w-5 h-5 cursor-pointer hover:text-foreground transition-colors" />
            <div className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors">
              <Flame className="w-5 h-5 text-orange-500" />
              <span className="font-semibold text-foreground">0</span>
            </div>
          </div>
        </div>

        {/* Progress Bar Row */}
        <div className="flex items-center gap-4 mb-6">
          <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
            Al nivel 2
          </span>
          <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full bg-[var(--dash-banner)] rounded-full transition-all duration-1000"
              style={{ width: "72%" }}
            />
          </div>
          <span className="text-sm font-bold text-muted-foreground whitespace-nowrap">
            72/100
          </span>
        </div>

        {/* SCORE BANNER */}
        <div className="w-full bg-[var(--dash-banner)] text-[var(--dash-banner-txt)] rounded-t-xl px-6 py-3 flex items-center justify-between shadow-sm">
          <h2 className="text-xl font-semibold tracking-tight">
            Mi puntuación
          </h2>
          <span className="text-xl font-semibold">72 pts</span>
        </div>

        {/* STATS PANELS */}
        <div className="w-full bg-card border border-t-0 border-border rounded-b-xl px-6 py-8 flex flex-col md:flex-row gap-8 shadow-sm">
          {/* Panel 1 */}
          <div
            className="flex-1 p-5 rounded-xl border border-border"
            style={{ backgroundColor: "var(--dash-card-1)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-bold text-foreground">
                <FlaskConical className="w-4 h-4 text-emerald-500" /> Aprender
              </div>
              <span className="font-bold text-foreground">72 pts</span>
            </div>
            <div className="text-sm text-foreground/80 font-medium">
              <p>18 Instrumentos aprendidos</p>
              <p>0 En progreso</p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="flex-1 p-5 rounded-xl bg-transparent">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <Play className="w-4 h-4 text-red-500" /> Visualizar
              </div>
              <span className="font-bold text-muted-foreground">0 pts</span>
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              <p>0 Moléculas observadas</p>
              <p>0 En repetición</p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="flex-1 p-5 rounded-xl bg-transparent">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 font-bold text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                <BookOpen className="w-4 h-4 text-blue-500" /> Evaluar
              </div>
              <span className="font-bold text-muted-foreground">0 pts</span>
            </div>
            <div className="text-sm text-muted-foreground font-medium">
              <p>0 Modos interactivos</p>
              <p>0 Prácticas completadas</p>
            </div>
          </div>
        </div>

        {/* BOTTOM CARDS ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* LABS CARD */}
          <div
            className="border border-border rounded-xl p-6 relative overflow-hidden group shadow-sm"
            style={{ backgroundColor: "var(--dash-card-2)" }}
          >
            <h3 className="font-bold text-lg text-foreground mb-2">
              Laboratorios AR
            </h3>
            <p className="text-sm text-foreground/80 font-medium max-w-[70%] z-10 relative">
              Visualiza en el mundo real instrumentos reales. Moldea tu
              experiencia de estudios experimentales.
            </p>
            <button className="mt-4 px-4 py-2 bg-card text-foreground border border-border text-sm font-bold rounded-full shadow-sm hover:shadow transition-shadow z-10 relative cursor-pointer">
              Explorar ahora
            </button>
            <FlaskConical className="absolute -right-4 -bottom-4 w-28 h-28 text-emerald-500 opacity-20 rotate-12" />
          </div>

          {/* AI CARD (Moleculas) */}
          <div
            className="border border-border rounded-xl p-6 relative overflow-hidden group shadow-sm"
            style={{ backgroundColor: "var(--dash-card-3)" }}
          >
            <h3 className="font-bold text-lg text-foreground mb-2">
              Simulador de Moléculas
            </h3>
            <p className="text-sm text-foreground/80 font-medium max-w-[75%] z-10 relative">
              Construye átomos, visualiza enlaces químicos y diviértete con la
              química.
            </p>
            <Link
              href="/menu/estructuras-mol"
              className="block mt-4 text-sm font-bold text-[var(--dash-banner)] z-10 relative hover:underline"
            >
              Explorar 3D {">"}
            </Link>
          </div>

          {/* ACTIVITIES BUTTON */}
          <div className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between shadow-sm cursor-pointer hover:border-[#fce04b]/50 transition-colors">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg text-foreground flex items-center gap-2">
                <BarChart3 className="w-5 h-5" /> Mis Actividades
              </h3>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>

            <div className="w-full h-24 mt-4 bg-secondary/50 rounded-lg relative overflow-hidden backdrop-blur-sm flex items-center justify-center border border-dashed border-border">
              <span className="text-xs font-semibold text-muted-foreground uppercase opacity-60">
                Historial vacío
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------ BOTTOM STICKY ACTION BAR ------------------ */}
      <div className="mt-4 sticky bottom-[16px] xl:left-auto lg:z-40 w-full max-w-5xl mx-auto bg-foreground text-background py-3 px-6 md:px-3 flex items-center justify-between shadow-2xl rounded-xl border border-border/10">
        <div className="flex items-center gap-4">
          <button className="cursor-pointer w-10 h-10 rounded-full hover:bg-background/20 flex items-center justify-center transition-colors">
            <ChevronRight className="w-6 h-6 rotate-180" />
          </button>
          <div className="flex items-center gap-3">
            <FlaskConical className="w-6 h-6 text-[#fce04b] dark:text-[var(--dash-banner)]" />
            <div>
              <h4 className="font-bold text-lg tracking-tight">
                Continuar: Laboratorios
              </h4>
              <p className="text-sm opacity-80 font-medium">
                Reconociendo instrumentos principales
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-1.5 opacity-50">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--dash-banner)]" />
            <div className="w-1.5 h-1.5 rounded-full bg-background/50" />
            <div className="w-1.5 h-1.5 rounded-full bg-background/50" />
          </div>
          <button className="bg-[#4b6554] dark:bg-[var(--dash-banner)] hover:opacity-90 text-white font-extrabold px-8 py-2.5 rounded-xl transition-colors shadow-lg active:scale-95 flex items-center gap-2 border-2 border-transparent">
            Empezar
          </button>
          <button className="cursor-pointer hidden sm:flex w-10 h-10 rounded-full hover:bg-background/20 items-center justify-center transition-colors">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
