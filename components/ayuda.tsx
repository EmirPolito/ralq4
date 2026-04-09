"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SupportItem {
  id: string;
  title: string;
  description: string;
  href: string;
}

const supportItems: SupportItem[] = [
  {
    id: "faq",
    title: "Preguntas Frecuentes",
    description:
      "Respuestas rápidas a problemas comunes: modelos que no cargan, errores al escanear QR, problemas de compatibilidad y más.",
    href: "/preguntas-frecuentes",
  },
  {
    id: "reportes",
    title: "Reporte de Problemas",
    description:
      "Envía reportes de errores, fallos visuales o problemas técnicos para que el equipo de desarrollo los revise y corrija.",
    href: "/contacto",
  },
  {
    id: "correo",
    title: "Soporte por Correo",
    description:
      "Contacta directamente al equipo de RALQ para resolver dudas, reportar problemas o recibir asistencia personalizada.",
    href: "/contacto",
  },
  {
    id: "manual-usuario",
    title: "Manual de Usuario",
    description:
      "Aprende paso a paso cómo utilizar el sistema RALQ: registro, escaneo de códigos QR, interacción con modelos 3D y navegación.",
    href: "/manual-usuario",
  },

  {
    id: "actualizaciones",
    title: "Historial de Actualizaciones",
    description:
      "Consulta los cambios más recientes, mejoras, correcciones de bugs y nuevas funciones añadidas a RALQ.",
    href: "/historial",
  },
  {
    id: "docs-tecnicas",
    title: "Documentación Técnica",
    description:
      "Información para desarrolladores: APIs, arquitectura del sistema, estructura del visor 3D y detalles de integración.",
    href: "/documentacion",
  },
  {
    id: "tutoriales",
    title: "Videos relacionados",
    description:
      "Visualiza videos explicativos sobre cómo operar cada función del proyecto RALQ, desde el escaneo hasta los laboratorios virtuales.",
    href: "recorrido-laboratorios-de-quimica-utsv",
  },

  {
    id: "comunidad",
    title: "Foro de la Comunidad",
    description:
      "Comparte ideas, resuelve dudas con otros estudiantes y colabora en discusiones sobre el uso de la plataforma.",
    href: "/comunidad",
  },

  {
    id: "estado-sistema",
    title: "Estado del Sistema",
    description:
      "Revisa si los servicios del sistema están funcionando: servidor, APIs, visor 3D, QR y base de datos.",
    href: "/estado",
  },
];

export default function ContenidoBlog() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const rows = [];
  for (let i = 0; i < supportItems.length; i += 3) {
    rows.push(supportItems.slice(i, i + 3));
  }

  return (
    <div className="w-full bg-background py-29.5 px-4 transition-colors">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-30"
        >
          <h1 className="text-ayuda-ttl text-5xl md:text-6xl font-bold  mb-3 text-balance">
            Centro de Ayuda
          </h1>

          <p className="text-ayuda-desc text-lg text-balance max-w-1xl mx-auto">
            Encuentra asistencia rápida sobre el funcionamiento del sistema
            RALQ, guías, tutoriales, reportes y soporte personalizado.
          </p>
        </motion.div>

        {/* Items */}
        <div className="space-y-17">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-1 md:grid-cols-3 gap-2"
            >
              {row.map((item, itemIndex) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: (rowIndex * 3 + itemIndex) * 0.08, // animación escalonada SOLO al cargar
                  }}
                  className={`py-2 px-8 transition-all duration-300 relative group border-border
                    ${itemIndex !== row.length - 1 ? "md:border-r" : ""}
                  `}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="mb-8">
                    <h2 className="text-ayuda-preg-ttl text-2xl font-semibold mb-3">
                      {item.title}
                    </h2>
                    <p className="text-ayuda-preg-txt text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className={`transition-all duration-300 overflow-hidden 
                      ${
                        hoveredId === item.id
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }
                    `}
                  >
                    <Link
                      href={item.href}
                      className="hover:text-ayuda-link-hvr text-ayuda-link inline-flex items-center gap-2 font-medium hover:gap-3 transition-all duration-300 group/link"
                    >
                      Ver más
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
