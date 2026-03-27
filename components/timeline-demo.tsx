"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function SobreNosotros() {
  const data = [
    
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-2 text-base md:text-lg text-[var(--foreground)]">
            Establecimos los cimientos del proyecto, definiendo objetivos y
            metodologías.
          </p>
          <p className="mb-8 text-base md:text-lg text-[var(--foreground-secondary)]">
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
          <p className="mb-2 text-base md:text-lg text-[var(--foreground)]">
            Desarrollamos nuevas secciones y plantillas interactivas para la
            plataforma.
          </p>
          <p className="mb-8 text-base md:text-lg text-[var(--foreground-secondary)]">
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
          <p className="mb-2 text-base md:text-lg text-[var(--foreground)]">
            Lanzamos la experiencia web de RALQ con contenido 3D interactivo
            para estudiantes.
          </p>
          <p className="mb-8 text-base md:text-lg text-[var(--foreground-secondary)]">
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
          <p className="mb-2 text-base md:text-lg text-[var(--foreground)]">
            Seguiremos Implementando nuevas funciones y modelos 3D para mejorar la
            interacción.
          </p>
          <p className="mb-8 text-base md:text-lg text-[var(--foreground-secondary)]">
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
    
    {
      
      title: "",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
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
