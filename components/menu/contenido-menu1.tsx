"use client";

import { useState } from "react";
import Link from "next/link";
import { Lens } from "@/components/ui/lens";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function LensDemo() {
  const cards = [
    {
      title: "Estruturas Moleculares",
      desc: "La experiencia espacial más avanzada.",
      img: "/img/menu/1-moleculas.png",
      link: "/menu/estructuras-mol",
    },
    {
      title: "Tus Laboratorios",
      desc: "Tecnología de siguiente nivel.",
      img: "/img/menu/2-tuslaboratorios.png",
      link: "/tus-laboratorios",
    },
    {
      title: "Evaluate",
      desc: "El futuro de la computación.",
      img: "/img/menu/5-evaluate.png",
      link: "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__TR___tUOTI4WkFURU0yR1RZQkdLTFU4OFpZWjgyTS4u",
    },

    {
      title: "Explora los en 3D Laboratorios",
      desc: "Modelos avanzados.",
      img: "/img/menu/4-exploratuslab.png",
      link: "https://www.youtube.com/watch?v=cubEOJ_gz3w",
    },

    {
      title: "Aprende Jugando",
      desc: "Experiencias inmersivas.",
      img: "/img/menu/6-aprendejugando.png",
      link: "https://wordwall.net/es/resource/13254497/elementos-de-laboratorio",
    },
    {
      title: "Tabla Periodica",
      desc: "Visualización precisa en 3D.",
      img: "/img/menu/3-tablaperiodica.png",
      link: "/",
    },
  ];

  const [hoverStates, setHoverStates] = useState(
    Array(cards.length).fill(false)
  );

  const setCardHover = (index: number, value: boolean) => {
    const updated = [...hoverStates];
    updated[index] = value;
    setHoverStates(updated);
  };

  return (
    <div className="my-24 md:my-45 px-5 md:px-6">
      {/* ---------------- ENCABEZADO ---------------- */}
      <div className="max-w-7xl mx-auto mb-16 md:mb-30 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-foreground dark:text-white"
        >
          Bienvenido al Menú
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
          className="mt-2 text-lg md:text-xl text-muted-foreground"
        >
          Explora cada contenido y aprende
        </motion.p>
      </div>

      {/* ---------------- GRID DE TARJETAS ---------------- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-17 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <Link key={i} href={card.link}>
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                delay: i * 0.1,
                duration: 0.8,
                ease: "easeOut",
              }}
              className={cn(
                "relative rounded-2xl overflow-hidden p-6 cursor-pointer group",
                "bg-card border border-border shadow-sm text-foreground",
                "dark:bg-gradient-to-r dark:from-[#1D2235] dark:to-[#121318]",
                "h-[400px]"
              )}
            >
              <Rays />
              <Beams />

              <div className="relative z-10 h-full flex flex-col">
                <Lens
                  hovering={hoverStates[i]}
                  setHovering={(v) => setCardHover(i, v)}
                >
                  <img
                    src={card.img}
                    alt={card.title}
                    width={500}
                    height={500}
                    className="rounded-2xl h-[195px] w-full object-cover"
                  />
                </Lens>

                <div className="py-7 mt-auto text-center">
                  <h2
                    className="text-2xl font-bold"
                    style={{ color: "var(--primary-7)" }}
                  >
                    {card.title}
                  </h2>
                  <p className="text-muted-foreground mt-1">{card.desc}</p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ---------------- RAYS ---------------- */
const Rays = ({ className }: { className?: string }) => {
  return (
    <svg
      width="380"
      height="397"
      viewBox="0 0 380 397"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "absolute left-0 top-20 pointer-events-none opacity-50",
        className
      )}
    ></svg>
  );
};

/* ---------------- BEAMS ---------------- */
const Beams = () => {
  return (
    <svg
      width="380"
      height="315"
      viewBox="0 0 380 315"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none opacity-60"
    >
      <g filter="url(#filter0_f_120_7481)">
        <ellipse
          cx="190.5"
          cy="157.5"
          rx="150.5"
          ry="60.5"
          fill="url(#paint0_radial_120_7481)"
        />
      </g>
      <defs>
        <filter id="filter0_f_120_7481" x="0" y="0" width="381" height="315">
          <feGaussianBlur stdDeviation="40" />
        </filter>

        <radialGradient
          id="paint0_radial_120_7481"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(190.5 157.5) rotate(90) scale(60.5 150.5)"
        >
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="transparent" />
        </radialGradient>
      </defs>
    </svg>
  );
};
