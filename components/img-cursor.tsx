"use client";

import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";

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
  return (
    <section
      id="resources"
      className="relative bg-background px-4 py-16 md:px-8 md:py-25"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Two-col layout: left = heading + tech pills, right = editorial paragraph */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.6fr] lg:gap-24">
          {/* Left */}
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Stack tecnológico
              </p>
              <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl">
                Construido sobre
                <br />
                los mejores.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Cada tecnología fue elegida con un criterio claro: ofrecer la
                mejor experiencia científica y visual para el estudiante.
              </p>

              {/* Tech pills — irregular sizing */}
              <div className="mt-8 flex flex-wrap gap-2">
                {tech.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.07 }}
                    viewport={{ once: true }}
                  >
                    <LinkPreview
                      url={t.url}
                      className="group inline-flex flex-col rounded-xl border border-border bg-card px-4 py-3 transition-all hover:border-primary/25 hover:shadow-sm cursor-pointer no-underline"
                    >
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {t.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative flex flex-col justify-center"
          >
            {/* Large decorative quote */}
            <div className="pointer-events-none absolute -top-6 -left-4 text-9xl font-black leading-none text-primary/6 select-none">
              "
            </div>

            <div className="relative rounded-3xl border border-border bg-card p-8 md:p-10">
              <p className="text-base leading-[1.9] text-foreground md:text-lg">
                {"ChemAR usa "}
                <LinkPreview
                  url="https://threejs.org"
                  className="font-bold text-primary underline-offset-2 decoration-primary/30 underline"
                >
                  Three.js
                </LinkPreview>
                {
                  " para renderizar modelos moleculares con fidelidad científica, "
                }
                <LinkPreview
                  url="https://aframe.io"
                  className="font-bold text-teal-600 underline-offset-2 decoration-teal-300 underline"
                >
                  A-Frame
                </LinkPreview>
                {" para proyectarlos en el mundo real a través de RA, y "}
                <LinkPreview
                  url="https://nextjs.org"
                  className="font-bold text-slate-700 underline-offset-2 decoration-slate-300 underline"
                >
                  Next.js
                </LinkPreview>
                {
                  " para garantizar una experiencia web de alto rendimiento. Cada dato molecular proviene de "
                }
                <LinkPreview
                  url="https://pubchem.ncbi.nlm.nih.gov"
                  className="font-bold text-sky-600 underline-offset-2 decoration-sky-300 underline"
                >
                  PubChem
                </LinkPreview>
                {", respaldado por contenido educativo de "}
                <LinkPreview
                  url="https://www.khanacademy.org/science/chemistry"
                  className="font-bold text-emerald-600 underline-offset-2 decoration-emerald-300 underline"
                >
                  Khan Academy
                </LinkPreview>
                {". Precisión científica, nunca comprometida."}
              </p>

              {/* Attribution */}
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-xs font-black text-primary">C</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Equipo ChemAR
                  </p>
                  <p className="text-[10px] text-muted-foreground">
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
