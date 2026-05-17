"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Home, Microscope, Dna, LayoutGrid, MoreVertical } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

import { MenuHeader } from "./MenuHeader";
import { InstrumentSidebar } from "./laboratorio/izquierda";
import { InstrumentViewer, BottomSections } from "./laboratorio/centro";
import { InstrumentDetails } from "./laboratorio/derecha";
import { combinedData } from "./data";

export default function LaboratorioPage() {
  const [activeSpeciesId, setActiveSpeciesId] = useState(combinedData[0].id);
  const [viewMode, setViewMode] = useState("normal");
  const pathname = usePathname();

  const activeItem =
    combinedData.find((s) => s.id === activeSpeciesId) || combinedData[0];

  return (
    <>
      <main className="flex-1 grid grid-cols-[3fr_9fr_4fr] gap-3.5 min-h-0 max-w-[1700px] w-full">
        <aside className="min-h-0 bg-menu2-izq-bg rounded-xl border border-menu2-izq-buscador-borde shadow-xl p-3.5 overflow-hidden flex flex-col">
          <InstrumentSidebar
            activeId={activeSpeciesId}
            onSelect={setActiveSpeciesId}
            data={combinedData}
            title="Instrumentos y Moleculas"
          />
        </aside>

        {/* Centro: Visor 3D y Sección Inferior */}
        <section className="flex flex-col gap-4 min-h-0">
          <div className="bg-menu2-izq-bg flex-1 backdrop-blur-md rounded-xl border border-menu2-centro-borde shadow-xl overflow-hidden min-h-0">
            <InstrumentViewer activeItem={activeItem} viewMode={viewMode} />
          </div>

          <div className="flex-1 min-h-[160px] max-h-[201px]">
            <BottomSections
              data={combinedData}
              activeItem={activeItem}
              compareLabel="LABORATORIO"
              isInstrument={true}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
            />
          </div>
        </section>

        {/* Derecha: Detalles */}
        <aside className="min-h-0 overflow-y-auto custom-scrollbar bg-menu2-derecha-bg rounded-xl border border-menu2-derecha-borde shadow-xl p-6">
          <InstrumentDetails activeItem={activeItem} />
        </aside>
      </main>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}
