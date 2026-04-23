"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function SobreNosotros() {
  const data = [
    {
      title: "2023",
      content: (
        <div>
          <p className="text-nos-txt mb-2 text-base md:text-lg">
            Establecimos los cimientos del proyecto, definiendo objetivos y
            metodologías.
          </p>
          <p className="text-nos-txt mb-8 text-base md:text-lg">
            Nos centramos en crear una experiencia educativa innovadora y
            motivadora.
          </p>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-nos-txt mb-2 text-base md:text-lg">
            Desarrollamos nuevas secciones y plantillas interactivas para la
            plataforma.
          </p>
          <p className="text-nos-txt mb-8 text-base md:text-lg">
            Mejoramos la experiencia visual y la adaptabilidad a diferentes
            dispositivos.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-nos-txt mb-2 text-base md:text-lg">
            Lanzamos la experiencia web de RALQ con contenido 3D interactivo
            para estudiantes.
          </p>
          <p className="text-nos-txt mb-8 text-base md:text-lg">
            Nos enfocamos en que fuera accesible, atractiva y fácil de usar en
            cualquier plataforma.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },

    {
      title: "Mejoras continuas",
      content: (
        <div>
          <p className="text-nos-txt mb-2 text-base md:text-lg">
            Seguiremos Implementando nuevas funciones y modelos 3D para mejorar
            la interacción.
          </p>
          <p className="text-nos-txt mb-8 text-base md:text-lg">
            Actualizaremos componentes y secciones para mantener la plataforma
            más accesible.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },

  ];

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
