// "use client";

// import React from "react";
// import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";

// export const IzquierdaDerecha = () => {
//   return (
//     <>
//       {/* BLOQUE 1: Texto izquierda — Imagen derecha */}
//       <section className="relative py-16 md:py-24 lg:py-20">
//         <div className="mx-auto max-w-8xl px-6 md:px-12 lg:px-20">
//           <ScrollAnimation
//             direction="right"
//             className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-32"
//           >
//             {/* TEXTO */}
//             <div className="flex-1 text-center lg:text-left min-w-0 max-w-2xl">
//               <h2 className="text-mockup-ttl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
//                 Conoce los instrumentos del laboratorio de química
//               </h2>

//               {/* DESCRIPCIÓN */}
//               <p className="text-mockup-desc mt-8 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 Explora los equipos y materiales que utilizarás en tus prácticas
//                 para comprender su función y uso. Prepárate antes de entrar al
//                 laboratorio y realiza tus experimentos con mayor seguridad y
//                 confianza.
//               </p>
//             </div>

//             {/* IMAGEN */}
//             <div className="flex-1 w-full flex justify-center lg:justify-end">
//               <img
//                 src="/img/sections/arriba.png"
//                 alt="Instrumentos de laboratorio"
//                 className="w-full max-w-[650px] lg:max-w-[850px] h-auto object-cover rounded-[52%_48%_73%_27%_/_35%_31%_69%_65%] shadow-xl hover:scale-[1.02] transition-transform duration-500"
//               />
//             </div>
//           </ScrollAnimation>
//         </div>
//       </section>

//       {/* BLOQUE 2: Imagen izquierda — Texto derecha */}
//       <section className="relative py-16 md:py-24 lg:py-9">
//         <div className="mx-auto max-w-8xl px-6 md:px-12 lg:px-20">
//           <ScrollAnimation
//             direction="left"
//             className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-32"
//           >
//             {/* IMAGEN */}
//             <div className="flex-1 w-full flex justify-center lg:justify-start">
//               <img
//                 src="/img/sections/abajo.png"
//                 alt="Estructuras químicas"
//                 className="w-full max-w-[650px] lg:max-w-[850px] h-auto object-cover rounded-[41%_59%_38%_62%_/_60%_35%_65%_40%] shadow-xl hover:scale-[1.02] transition-transform duration-500"
//               />
//             </div>
//             鼓{/* TEXTO */}
//             <div className="flex-1 text-center lg:text-left min-w-0 max-w-2xl">
//               <h2 className="text-mockup-ttl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
//                 Explora las estructuras químicas de los compuestos
//               </h2>

//               {/* DESCRIPCIÓN */}
//               <p className="text-mockup-desc mt-8 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0">
//                 Analiza cómo están formadas las moléculas a través de
//                 representaciones visuales claras. Comprende su organización y
//                 relación con sus propiedades de una forma más intuitiva.
//               </p>
//             </div>
//           </ScrollAnimation>
//         </div>
//       </section>
//     </>
//   );
// };
