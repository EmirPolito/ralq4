"use client";

import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

const tech = [
  {
    name: "Khan Academy",
    url: "https://www.khanacademy.org/science/chemistry",
    role: "Recursos Educativos",
  },
  {
    name: "Khan Academy",
    url: "https://www.khanacademy.org/science/chemistry",
    role: "Recursos Educativos",
  },
  {
    name: "Khan Academy",
    url: "https://www.khanacademy.org/science/chemistry",
    role: "Recursos Educativos",
  },

  { name: "Three.js", url: "https://threejs.org", role: "3D Engine" },
  { name: "A-Frame", url: "https://aframe.io", role: "AR Framework" },
  { name: "Next.js", url: "https://nextjs.org", role: "Web Framework" },
  { name: "OpenAI", url: "https://openai.com", role: "IA " },
];

export default function ImgCursorDemo2() {
  const t = useTranslations("imgCursor");
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="resources"
      className="relative bg-imgcursor-bg px-4 py-20 md:px-8 md:py-18"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* Centered Title */}
        <motion.div
          key={`img-cursor-header-${reducedMotion}`}
          initial={
            reducedMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
          }
          whileInView={
            reducedMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
          }
          transition={
            reducedMotion
              ? { duration: 0 }
              : { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
          }
          viewport={{ once: true }}
          className="mb-1.5 md:mb-12 text-center"
        >
          {/* Título — "Construido sobre / las mejores tecnologías" */}
          <h2 className="text-balance text-2xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-titulos">{t("titleLine1")}</span>
            <br />
            <span className="text-imgcursor-ttl">{t("titleLine2")}</span>
          </h2>
        </motion.div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20 items-start">
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              key={`img-cursor-left-${reducedMotion}`}
              initial={
                reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
              }
              whileInView={
                reducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
              }
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
              }
              viewport={{ once: true }}
              className="flex flex-col items-center lg:items-start"
            >
              <p className=" px-5 text-justify md:px-0 mb-11 text-center text-sm lg:text-base leading-relaxed text-imgcursor-desc lg:text-left max-w-[510px]">
                {t("description")}
              </p>

              {/* Tech grid - Row 1 (4 items) */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mb-6">
                {tech.slice(3).map((t, i) => (
                  <motion.div
                    key={`tech-top-${i}-${reducedMotion}`}
                    initial={
                      reducedMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.92 }
                    }
                    whileInView={
                      reducedMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 1, scale: 1 }
                    }
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
                        "group inline-flex flex-col rounded-xl border border-imgcursor-izq-borde bg-imgcursor-izq-bg px-3 py-4 transition-all cursor-pointer no-underline w-[110px] md:w-[104px]",
                        !reducedMotion &&
                          "hover:border-primary/25 hover:shadow-sm hover:-translate-y-0.5",
                      )}
                    >
                      <span className="text-[14px] font-bold text-imgcursor-izq-ttl group-hover:text-imgcursor-izq-hvr transition-colors truncate">
                        {t.name}
                      </span>
                      <span className="text-[9.5px] text-imgcursor-izq-desc truncate">
                        {t.role}
                      </span>
                    </LinkPreview>
                  </motion.div>
                ))}
              </div>

              {/* Tech grid - Row 2 (3 items) */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                {tech.slice(0, 3).map((t, i) => (
                  <motion.div
                    key={`tech-bottom-${i}-${reducedMotion}`}
                    initial={
                      reducedMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.92 }
                    }
                    whileInView={
                      reducedMotion
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 1, scale: 1 }
                    }
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : {
                            duration: 0.5,
                            delay: (i + 4) * 0.08,
                            ease: "easeOut",
                          }
                    }
                    viewport={{ once: true }}
                  >
                    <LinkPreview
                      url={t.url}
                      disabled={reducedMotion}
                      className={cn(
                        "group inline-flex flex-col rounded-xl border border-imgcursor-izq-borde bg-imgcursor-izq-bg px-4 py-4 transition-all cursor-pointer no-underline w-[110px] md:w-[145px]",
                        !reducedMotion &&
                          "hover:border-primary/25 hover:shadow-sm hover:-translate-y-0.5",
                      )}
                    >
                      <span className="text-[14px] font-bold text-imgcursor-izq-ttl group-hover:text-imgcursor-izq-hvr transition-colors truncate">
                        {t.name}
                      </span>
                      <span className="text-[9.5px] text-imgcursor-izq-desc truncate">
                        {t.role}
                      </span>
                    </LinkPreview>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column — big editorial pull quote */}
          <motion.div
            key={`img-cursor-right-${reducedMotion}`}
            initial={
              reducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }
            }
            whileInView={
              reducedMotion ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
            }
            transition={
              reducedMotion
                ? { duration: 0 }
                : { duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }
            }
            viewport={{ once: true }}
            className="relative flex flex-col"
          >
            <div className="relative rounded-[1.5rem] border border-imgcursor-der-borde/60 bg-imgcursor-der-bg p-8 md:p-12 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
              {/* Large decorative quote - subtle background */}
              <div className="pointer-events-none absolute -top-8.5 left-0 text-9xl font-black leading-none text-primary/10 select-none">
                "
              </div>

              <p className="relative z-10 text-sm lg:text-base leading-[1.8] text-imgcursor-der-des font-semibold tracking-tight">
                {"ChemAR usa "}
                <LinkPreview
                  url="https://threejs.org"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor1 underline-offset-4 decoration-current/30 underline"
                >
                  Three.js
                </LinkPreview>
                {
                  " para renderizar modelos moleculares con fidelidad científica, "
                }
                <LinkPreview
                  url="https://aframe.io"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor2 underline-offset-4 decoration-current/30 underline"
                >
                  A-Frame
                </LinkPreview>
                {" para proyectarlos en el mundo real a través de RA, y "}
                <LinkPreview
                  url="https://nextjs.org"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor3 underline-offset-4 decoration-current/30 underline"
                >
                  Next.js
                </LinkPreview>
                {
                  " para garantizar una experiencia web de alto rendimiento. Cada dato molecular proviene de "
                }
                <LinkPreview
                  url="https://pubchem.ncbi.nlm.nih.gov"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor4 underline-offset-4 decoration-current/30 underline"
                >
                  PubChem
                </LinkPreview>
                {", respaldado por contenido educativo de "}
                <LinkPreview
                  url="https://www.khanacademy.org/science/chemistry"
                  disabled={reducedMotion}
                  className="font-bold text-imgcursor-der-cursor5 underline-offset-4 decoration-current/30 underline"
                >
                  Khan Academy
                </LinkPreview>
                {". Precisión científica, nunca comprometida."}
              </p>

              {/* Attribution */}
              <div className="mt-7 flex items-center gap-3.5 border-t border-imgcursor-der-linea/60 pt-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-imgcursor-der-c-bg border border-imgcursor-der-linea/60">
                  <span className="text-sm font-semibold text-imgcursor-der-c">
                    E
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-imgcursor-der-ttl">
                    Equipo RALQ
                  </p>
                  <p className="text-[11px] text-imgcursor-der-desc opacity-70 font-medium">
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
