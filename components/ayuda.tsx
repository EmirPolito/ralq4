"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function ContenidoBlog() {
  const t = useTranslations("ayuda");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const itemIds = [
    "faq",
    "reportes",
    "correo",
    "manual",
    "actualizaciones",
    "docs",
    "tutoriales",
    "comunidad",
    "estado",
  ] as const;

  const hrefs: Record<string, string> = {
    faq: "/preguntas-frecuentes",
    reportes: "/contacto",
    correo: "/contacto",
    manual: "/manual-usuario",
    actualizaciones: "/historial",
    docs: "/documentacion",
    tutoriales: "recorrido-laboratorios-de-quimica-utsv",
    comunidad: "/comunidad",
    estado: "/estado",
  };

  const rows: (typeof itemIds)[number][][] = [];
  for (let i = 0; i < itemIds.length; i += 3) {
    rows.push(itemIds.slice(i, i + 3) as unknown as (typeof itemIds)[number][]);
  }

  return (
    <div className="w-full bg-background pt-32 md:pt-32 pb-28.5 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-20 md:mb-30"
        >
          {/* Título — ayuda.title */}
          <h1 className="text-ayuda-ttl text-4xl md:text-6xl font-semibold mb-3 text-balance">
            {t("title")}
          </h1>

          {/* Descripción — ayuda.description */}
          <p className="text-ayuda-desc text-base text-balance max-w-1xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        {/* Items */}
        <div className="space-y-12 md:space-y-17">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-2"
            >
              {row.map((id, itemIndex) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: (rowIndex * 3 + itemIndex) * 0.08,
                  }}
                  className={`py-2 px-8 transition-all duration-300 relative group border-border
                    ${itemIndex !== row.length - 1 ? "md:border-r" : ""}
                  `}
                  onMouseEnter={() => setHoveredId(id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="mb-2 md:mb-8">
                  {/* Título de cada item — ayuda.items.[id].title */}
                    <h2 className="text-ayuda-preg-ttl text-2xl font-semibold mb-3">
                      {t(`items.${id}.title`)}
                    </h2>
                    <p className="text-ayuda-preg-txt text-base leading-relaxed text-pretty md:text-left">
                      {t(`items.${id}.description`)}
                    </p>
                  </div>

                  <div
                    className={`transition-all duration-300 overflow-hidden 
                      ${
                        hoveredId === id
                          ? "opacity-100 visible"
                          : "opacity-100 visible lg:opacity-0 lg:invisible"
                      }
                    `}
                  >
                    <Link
                      href={hrefs[id]}
                      className="hover:text-ayuda-link-hvr text-ayuda-link inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-300 group/link"
                    >
                      {t("verMas")}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>

                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10
                      bg-gradient-to-r
                      from-[var(--card-background,rgba(0,0,0,0.2))]
                      to-transparent
                    `}
                  />
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
