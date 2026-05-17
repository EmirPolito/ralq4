"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Search, Download, Box } from "lucide-react";
import { moleculesData } from "../data";

export default function MoleculasPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return moleculesData;
    return moleculesData.filter(
      (item) =>
        item.name.toLowerCase().startsWith(q) ||
        item.group.toLowerCase().startsWith(q) ||
        (item.scientificName ?? "").toLowerCase().startsWith(q),
    );
  }, [query]);

  return (
    <main className="flex-1 flex flex-col min-h-0 overflow-hidden bg-menu2-bg-general">
      {/* ── Buscador ──────────────────────────────────────────────── */}
      <div className="flex justify-center pt-0 pb-2 px-1 flex-shrink-0">
        <div
          className="flex items-center gap-3 rounded-3xl px-4 py-3 border w-full"
          style={{
            background: "var(--menu2-header-bg)",
            borderColor: "var(--menu2-izq-buscador-borde)",
          }}
        >
          <Search
            className="w-4 h-4 flex-shrink-0"
            style={{ color: "var(--menu2-izq-buscador-contenido)" }}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar molécula…"
            className="flex-1 bg-transparent outline-none text-sm"
            style={{ color: "var(--menu2-izq-tarjeta-txt)" }}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-xs opacity-40 hover:opacity-80 transition-opacity"
              style={{ color: "var(--menu2-izq-tarjeta-txt)" }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* ── Grid ─────────────────────────────────────────────────── */}
      <div className="flex-1 overflow-y-auto pt-14 px-22 pb-4 custom-scrollbar">
        {filtered.length === 0 ? (
          <div
            className="flex items-center justify-center h-40 text-sm opacity-40"
            style={{ color: "var(--menu2-izq-tarjeta-mini-txt)" }}
          >
            No se encontraron moléculas
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-33">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="flex flex-col rounded-xl overflow-hidden border"
                style={{
                  background: "var(--menu2-izq-tarjeta-bg)",
                  borderColor: "var(--menu2-izq-buscador-borde)",
                }}
              >
                {/* Imagen */}
                <div
                  className="relative w-full h-80 flex items-center justify-center"
                  style={{ background: "var(--menu2-abajo-bg)" }}
                >
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain p-10"
                      sizes="(max-width: 768px) 33vw, 220px"
                    />
                  ) : (
                    <Box
                      className="w-10 h-10 opacity-25"
                      style={{ color: "var(--menu2-centro-iconos)" }}
                    />
                  )}
                </div>

                {/* Info */}
                <div
                  className="flex flex-col px-4 pt-2 pb-5 gap-0 border-t"
                  style={{ borderColor: "var(--menu2-izq-buscador-borde)" }}
                >
                  <span
                    className="text-base font-semibold leading-tight mt-1"
                    style={{ color: "var(--menu2-izq-ttl)" }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="text-xs leading-snug line-clamp-2 mt-0"
                    style={{ color: "var(--menu2-izq-tarjeta-mini-txt)" }}
                  >
                    {item.scientificName ?? item.subtitle}
                  </span>
                </div>

                {/* Botón descarga */}
                {item.glbPath ? (
                  <a
                    href={item.glbPath}
                    download
                    className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold transition-opacity hover:opacity-75"
                    style={{
                      background: "var(--menu2-abajo-bg-active)",
                      color: "var(--menu2-abajo-txt-active)",
                    }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    Descargar modelo 3D
                  </a>
                ) : (
                  <div
                    className="flex items-center justify-center gap-2 w-full py-2 text-xs font-semibold opacity-25 cursor-not-allowed"
                    style={{
                      background: "var(--menu2-izq-buscador-borde)",
                      color: "var(--menu2-izq-tarjeta-mini-txt)",
                    }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    No disponible
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

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
    </main>
  );
}
