"use client";

import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

const tech = [
  { name: "Three.js", url: "https://threejs.org", role: "3D Engine" },
  { name: "A-Frame", url: "https://aframe.io", role: "AR Framework" },
  { name: "Next.js", url: "https://nextjs.org", role: "Web Framework" },
  {
    name: "PubChem",
    url: "https://pubchem.ncbi.nlm.nih.gov",
    role: "Molecular Data",
  },
  {
    name: "Khan Academy",
    url: "https://www.khanacademy.org/science/chemistry",
    role: "Recursos Educativos",
  },
];

export default function ImgCursorDemo() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="resources"
      className="relative bg-imgcursor-bg px-4 py-20 md:px-8 md:py-20"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Two-col layout: left = heading + tech pills, right = editorial paragraph */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          {/* Left */}
          <div className="flex flex-col justify-center items-center text-center lg:items-start lg:text-left">
            <motion.div
              key={`img-cursor-left-${reducedMotion}`}
              initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              whileInView={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
              }
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              <h2 className="text-balance text-3xl font-bold leading-[1.1] tracking-tight text-imgcursor-ttl md:text-6xl">
                Construido sobre
                <br />
                los mejores.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-imgcursor-desc max-w-lg">
                Cada tecnología fue elegida con un criterio claro: ofrecer la
                mejor experiencia científica y visual para el estudiante.
              </p>

              {/* Tech pills — irregular sizing */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                {tech.map((t, i) => (
                  <motion.div
                    key={`${t.name}-${reducedMotion}`}
                    initial={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.92 }}
                    whileInView={reducedMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : { duration: 0.5, delay: i * 0.08, ease: "easeOut" }
                    }
                    viewport={{ once: true }}
                  >
                    <LinkPreview
                      url={t.url}
                      disabled={reducedMotion}
                      className={cn(
                        "group inline-flex flex-col rounded-xl border border-imgcursor-izq-borde bg-imgcursor-izq-bg px-4 py-3 transition-all cursor-pointer no-underline",
                        !reducedMotion && "hover:border-primary/25 hover:shadow-sm"
                      )}
                    >
                      <span className="text-sm font-bold text-imgcursor-izq-ttl group-hover:text-imgcursor-izq-hvr transition-colors">
                        {t.name}
                      </span>
                      <span className="text-[10px] text-imgcursor-izq-desc">
                        {t.role}
                      </span>
                    </LinkPreview>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — big editorial pull quote */}
          <motion.div
            key={`img-cursor-right-${reducedMotion}`}
            initial={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            whileInView={reducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }
            }
            viewport={{ once: true }}
            className="relative flex flex-col justify-center"
          >
            {/* Large decorative quote */}
            <div className="pointer-events-none absolute -top-6 -left-4 text-9xl font-black leading-none text-primary/6 select-none">
              "
            </div>

            <div className="relative rounded-3xl border border-imgcursor-der-borde bg-imgcursor-der-bg p-8 md:p-11">
              <p className="text-base leading-[1.9] text-imgcursor-der-des md:text-lg">
                {"ChemAR usa "}
                <LinkPreview
                  url="https://threejs.org"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor1 underline-offset-2 decoration-current/30 underline"
                >
                  Three.js
                </LinkPreview>
                {
                  " para renderizar modelos moleculares con fidelidad científica, "
                }
                <LinkPreview
                  url="https://aframe.io"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor2 underline-offset-2 decoration-current/30 underline"
                >
                  A-Frame
                </LinkPreview>
                {" para proyectarlos en el mundo real a través de RA, y "}
                <LinkPreview
                  url="https://nextjs.org"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor3 underline-offset-2 decoration-current/30 underline"
                >
                  Next.js
                </LinkPreview>
                {
                  " para garantizar una experiencia web de alto rendimiento. Cada dato molecular proviene de "
                }
                <LinkPreview
                  url="https://pubchem.ncbi.nlm.nih.gov"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor4 underline-offset-2 decoration-current/30 underline"
                >
                  PubChem
                </LinkPreview>
                {", respaldado por contenido educativo de "}
                <LinkPreview
                  url="https://www.khanacademy.org/science/chemistry"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor5 underline-offset-2 decoration-current/30 underline"
                >
                  Khan Academy
                </LinkPreview>
                {". Precisión científica, nunca comprometida."}
              </p>

              {/* Attribution */}
              <div className="mt-6 flex items-center gap-3 border-t border-imgcursor-der-linea pt-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-imgcursor-der-c-bg">
                  <span className="text-xs font-black text-imgcursor-der-c">C</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-imgcursor-der-ttl">
                    Equipo RALQ
                  </p>
                  <p className="text-[10px] text-imgcursor-der-desc">
                    Decisiones de arquitectura técnica
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
