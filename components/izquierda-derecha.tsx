"use client";

import React from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

export const IzquierdaDerecha = () => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* BLOQUE 1: Texto izquierda — Imagen derecha */}
      <section className="relative py-20 md:py-15">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-3">
          <motion.div
            className="flex flex-col lg:flex-row items-center gap-12 lg:gap-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* TEXTO */}
            <motion.div className="flex-1 min-w-0" variants={fadeUp}>
              <h2 className="text-mockup-ttl text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-2xl">
                Conoce los instrumentos del laboratorio de química
              </h2>

              {/* DESCRIPCIÓN */}
              <p className="text-mockup-desc mt-2 text-lg leading-relaxed max-w-xl  ">
                Explora los equipos y materiales que utilizarás en tus prácticas
                para comprender su función y uso. Prepárate antes de entrar al
                laboratorio y realiza tus experimentos con mayor seguridad y
                confianza.
              </p>
            </motion.div>

            {/* IMAGEN */}
            <motion.div
              className="flex-1 min-w-0 flex justify-center"
              variants={fadeUp}
            >
              <img
                src="/img/sections/section1.png"
                alt="Instrumentos de laboratorio"
                className="w-full max-w-[550px] h-auto object-contain"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* BLOQUE 2: Imagen izquierda — Texto derecha */}
      <section className="relative py-20 md:py-30">
        <div className="mx-auto max-w-[90rem] px-6 lg:px-0">
          <motion.div
            className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-32"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ staggerChildren: 0.2 }}
          >
            {/* IMAGEN */}
            <motion.div
              className="flex-1 min-w-0 flex justify-center"
              variants={fadeUp}
            >
              <img
                src="/img/sections/section2.png"
                alt="Estructuras químicas"
                className="w-full max-w-[550px] h-auto object-contain"
              />
            </motion.div>

            {/* TEXTO */}
            <motion.div className="flex-1 min-w-0" variants={fadeUp}>
              <h2 className="text-mockup-ttl text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight max-w-2xl">
                Explora las estructuras químicas de los compuestos{" "}
              </h2>

              {/* DESCRIPCIÓN */}
              <p className="text-mockup-desc mt-2 text-lg leading-relaxed max-w-xl">
                Analiza cómo están formadas las moléculas a través de
                representaciones visuales claras. Comprende su organización y
                relación con sus propiedades de una forma más intuitiva.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};
