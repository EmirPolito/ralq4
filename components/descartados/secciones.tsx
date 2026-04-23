// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { PointerHighlight } from "@/components/ui/pointer-highlight";

// const features = [
//   {
//     id: "molecules",
//     number: "01",
//     title: "Estructuras Moleculares",
//     tag: "Visualización 3D",
//     description:
//       "Explora modelos moleculares tridimensionales con detalle atómico. Rota, acerca y analiza cada enlace químico, ángulo de enlace y propiedad fisicoquímica en tiempo real.",
//     highlight: "ver cada átomo",
//     highlightColors: {
//       rectangle: "bg-tres-mini-bg/10 border-tres-mini-borde leading-loose",
//       pointer: "text-tres-01-cursor h-3 w-3",
//     },
//     visual: <MoleculeVisual />,
//     color: "bg-tres-mini-bg",
//     textColor: "text-tres-ttl",
//     borderColor: "border-tres-caracteristicas-border",
//     numColor: "text-tres-num",
//     miniBg: "bg-tres-mini-bg",
//     miniBorder: "border-tres-mini-borde",
//     miniTxt: "text-tres-mini-txt",
//     descColor: "text-tres-desc",
//   },
//   {
//     id: "instruments",
//     number: "02",
//     title: "Instrumentos de Laboratorio",
//     tag: "80+ modelos",
//     description:
//       "Desde matraces Erlenmeyer hasta espectrofotómetros. Cada instrumento renderizado en alta resolución con anotaciones técnicas y guías de uso.",
//     highlight: "practicar sin riesgos",
//     highlightColors: {
//       rectangle: "bg-tres-mini-bg/10 border-tres-mini-borde leading-loose",
//       pointer: "text-tres-02-cursor h-3 w-3",
//     },
//     visual: <InstrumentVisual />,
//     color: "bg-tres-mini-bg",
//     textColor: "text-tres-ttl",
//     borderColor: "border-tres-caracteristicas-border",
//     numColor: "text-tres-num",
//     miniBg: "bg-tres-mini-bg",
//     miniBorder: "border-tres-mini-borde",
//     miniTxt: "text-tres-mini-txt",
//     descColor: "text-tres-desc",
//   },
//   {
//     id: "ar",
//     number: "03",
//     title: "Realidad Aumentada",
//     tag: "Inmersivo",
//     description:
//       "Proyecta modelos 3D en tu entorno usando la cámara de tu dispositivo. Coloca una molécula en tu escritorio o un instrumento en tu laboratorio real en menos de 2 segundos.",
//     highlight: "el laboratorio a ti",
//     highlightColors: {
//       rectangle: "bg-tres-mini-bg/10 border-tres-mini-borde leading-loose",
//       pointer: "text-tres-03-cursor h-3 w-3",
//     },
//     visual: <ARVisual />,
//     color: "bg-tres-mini-bg",
//     textColor: "text-tres-ttl",
//     borderColor: "border-tres-caracteristicas-border",
//     numColor: "text-tres-num",
//     miniBg: "bg-tres-mini-bg",
//     miniBorder: "border-tres-mini-borde",
//     miniTxt: "text-tres-mini-txt",
//     descColor: "text-tres-desc",
//   },
// ];

// export default function SeccionesDemo() {
//   const [active, setActive] = useState(features[0].id);
//   const current = features.find((f) => f.id === active)!;

//   return (
//     <section
//       id="features"
//       className="relative overflow-hidden bg-tres-bg px-4 py-28 md:px-8"
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Top row — editorial heading + selector */}
//         <div className="mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
//           <div className="max-w-lg">
//             <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-tres-desc">
//               Funcionalidades
//             </p>
//             <h2 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-tres-ttl md:text-5xl">
//               Todo lo que necesitas, <br className="hidden md:block" />
//               <PointerHighlight
//                 rectangleClassName={current.highlightColors.rectangle}
//                 pointerClassName={current.highlightColors.pointer}
//                 containerClassName="inline-block"
//               >
//                 <span className="relative z-10">nada que sobra.</span>
//               </PointerHighlight>
//             </h2>
//           </div>

//           {/* Tab selectors */}
//           <div className="flex flex-wrap gap-3">
//             {features.map((f) => (
//               <button
//                 key={f.id}
//                 onClick={() => setActive(f.id)}
//                 className={`relative rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${
//                   active === f.id
//                     ? `${f.color} ${f.borderColor} text-white shadow-sm`
//                     : "border-border bg-card text-muted-foreground hover:border-tres-01-marcos hover:text-tres-ttl"
//                 }`}
//               >
//                 <span className="mr-1.5 text-[10px] opacity-60">
//                   {f.number}
//                 </span>
//                 {f.title.split(" ")[0]}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Feature content — asymmetric layout */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={active}
//             initial={{ opacity: 0, y: 12 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -8 }}
//             transition={{ duration: 0.35 }}
//             className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] will-change-[transform,opacity]"
//           >
//             {/* Left — text panel */}
//               <div
//                 className={`relative flex flex-col justify-between overflow-hidden rounded-3xl border ${current.borderColor} bg-card p-8 md:p-10`}
//               >
//                 <div>
//                   <span
//                     className={`mb-5 inline-block text-7xl font-black ${current.numColor} leading-none`}
//                   >
//                     {current.number}
//                   </span>
//                   <div className="mb-4">
//                     <span
//                       className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${current.miniBg} ${current.miniBorder} ${current.miniTxt}`}
//                     >
//                       {current.tag}
//                     </span>
//                   </div>
//                   <h3 className={`text-2xl font-bold tracking-tight ${current.textColor} md:text-3xl`}>
//                     {current.title}
//                   </h3>
//                   <p className={`mt-4 text-base leading-relaxed ${current.descColor}`}>
//                     {current.description}
//                   </p>
//                 </div>
//               <div className="mt-8 pt-6 border-t border-border">
//                 <div className="text-sm text-muted-foreground">
//                   {"Diseñado para "}
//                   <PointerHighlight
//                     rectangleClassName={current.highlightColors.rectangle}
//                     pointerClassName={current.highlightColors.pointer}
//                     containerClassName="inline-block mx-0.5"
//                   >
//                     <span className="relative z-10 font-semibold text-foreground">
//                       {current.highlight}
//                     </span>
//                   </PointerHighlight>
//                   {" de forma intuitiva."}
//                 </div>
//               </div>
//             </div>

//             {/* Right — visual panel */}
//             <div
//               className={`relative min-h-[380px] overflow-hidden rounded-3xl border ${current.borderColor} bg-gradient-to-br from-brand-subtle/40 via-white to-slate-50 p-8 flex items-center justify-center`}
//             >
//               {current.visual}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }

// // Visual components for each feature
// function MoleculeVisual() {
//   return (
//     <svg
//       viewBox="0 0 380 280"
//       fill="none"
//       className="w-full max-w-sm opacity-90"
//     >
//       {/* Benzene ring */}
//       <polygon
//         points="190,70 230,95 230,145 190,170 150,145 150,95"
//         stroke="#0d7377"
//         strokeWidth="2"
//         fill="none"
//       />
//       <polygon
//         points="190,82 220,99 220,133 190,150 160,133 160,99"
//         stroke="#0d7377"
//         strokeWidth="1"
//         fill="#0d7377"
//         fillOpacity="0.05"
//         strokeDasharray="4 2"
//       />
//       {[
//         [190, 70],
//         [230, 95],
//         [230, 145],
//         [190, 170],
//         [150, 145],
//         [150, 95],
//       ].map(([x, y], i) => (
//         <circle key={i} cx={x} cy={y} r="8" fill="#0a9396" />
//       ))}
//       {/* Side chains */}
//       <line
//         x1="190"
//         y1="62"
//         x2="190"
//         y2="40"
//         stroke="#94d2bd"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <circle cx="190" cy="32" r="10" fill="#94d2bd" opacity="0.8" />
//       <text
//         x="190"
//         y="37"
//         textAnchor="middle"
//         fontSize="9"
//         fontWeight="700"
//         fill="white"
//       >
//         OH
//       </text>

//       <line
//         x1="237"
//         y1="90"
//         x2="255"
//         y2="70"
//         stroke="#94d2bd"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <circle cx="263" cy="62" r="10" fill="#e9d8a6" opacity="0.8" />
//       <text
//         x="263"
//         y="67"
//         textAnchor="middle"
//         fontSize="9"
//         fontWeight="700"
//         fill="#666"
//       >
//         CH₃
//       </text>

//       {/* Labels */}
//       <text
//         x="190"
//         y="200"
//         textAnchor="middle"
//         fontSize="11"
//         fill="#0d7377"
//         fontWeight="700"
//       >
//         Benceno
//       </text>
//       <text
//         x="190"
//         y="214"
//         textAnchor="middle"
//         fontSize="9"
//         fill="#666"
//         opacity="0.7"
//       >
//         C₆H₆ · Aromático
//       </text>
//       {/* Properties chip */}
//       <rect
//         x="100"
//         y="230"
//         width="180"
//         height="32"
//         rx="8"
//         fill="#e9f8f7"
//         stroke="#0a9396"
//         strokeWidth="1"
//         opacity="0.7"
//       />
//       <text
//         x="190"
//         y="248"
//         textAnchor="middle"
//         fontSize="9"
//         fill="#0d7377"
//         fontWeight="600"
//       >
//         PM: 78.11 g/mol · Tb: 80.1°C
//       </text>
//     </svg>
//   );
// }

// function InstrumentVisual() {
//   return (
//     <svg viewBox="0 0 360 280" fill="none" className="w-full max-w-sm">
//       {/* Erlenmeyer flask */}
//       <path
//         d="M155 40 L155 130 L100 230 Q95 245 110 248 L250 248 Q265 245 260 230 L205 130 L205 40 Z"
//         stroke="#0f766e"
//         strokeWidth="2"
//         fill="#e9f8f7"
//         fillOpacity="0.5"
//       />
//       <rect
//         x="145"
//         y="32"
//         width="70"
//         height="14"
//         rx="4"
//         stroke="#0f766e"
//         strokeWidth="1.5"
//         fill="none"
//       />
//       {/* Liquid */}
//       <path
//         d="M110 228 Q115 200 130 185 L230 185 Q245 200 250 228 Z"
//         fill="#0a9396"
//         opacity="0.25"
//       />
//       {/* Bubbles */}
//       <circle cx="165" cy="200" r="4" fill="#0a9396" opacity="0.3" />
//       <circle cx="190" cy="195" r="3" fill="#0a9396" opacity="0.25" />
//       <circle cx="210" cy="205" r="3.5" fill="#0a9396" opacity="0.2" />
//       {/* Label lines */}
//       <line
//         x1="260"
//         y1="185"
//         x2="295"
//         y2="160"
//         stroke="#94d2bd"
//         strokeWidth="1"
//         strokeDasharray="3 2"
//       />
//       <rect
//         x="295"
//         y="145"
//         width="60"
//         height="30"
//         rx="5"
//         fill="white"
//         stroke="#94d2bd"
//         strokeWidth="1"
//       />
//       <text
//         x="325"
//         y="158"
//         textAnchor="middle"
//         fontSize="8"
//         fill="#0f766e"
//         fontWeight="600"
//       >
//         Solución
//       </text>
//       <text x="325" y="169" textAnchor="middle" fontSize="7" fill="#666">
//         0.5 mol/L
//       </text>
//     </svg>
//   );
// }

// function ARVisual() {
//   return (
//     <svg viewBox="0 0 380 280" fill="none" className="w-full max-w-sm">
//       {/* Phone frame */}
//       <rect
//         x="120"
//         y="20"
//         width="140"
//         height="240"
//         rx="18"
//         stroke="#0369a1"
//         strokeWidth="2"
//         fill="white"
//       />
//       <rect x="128" y="32" width="124" height="216" rx="10" fill="#f0f9ff" />
//       {/* AR overlay corners */}
//       {[
//         [135, 38, 8, 8],
//         [244, 38, -8, 8],
//         [135, 240, 8, -8],
//         [244, 240, -8, -8],
//       ].map(([x, y, dx, dy], i) => (
//         <g key={i}>
//           <line
//             x1={x}
//             y1={y}
//             x2={x + dx}
//             y2={y}
//             stroke="#0ea5e9"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//           <line
//             x1={x}
//             y1={y}
//             x2={x}
//             y2={y + dy}
//             stroke="#0ea5e9"
//             strokeWidth="2"
//             strokeLinecap="round"
//           />
//         </g>
//       ))}
//       {/* AR molecule */}
//       <circle cx="190" cy="130" r="14" fill="#0369a1" opacity="0.9" />
//       <text
//         x="190"
//         y="135"
//         textAnchor="middle"
//         fontSize="11"
//         fontWeight="700"
//         fill="white"
//       >
//         C
//       </text>
//       <circle cx="160" cy="108" r="9" fill="#0ea5e9" opacity="0.8" />
//       <text
//         x="160"
//         y="113"
//         textAnchor="middle"
//         fontSize="9"
//         fontWeight="700"
//         fill="white"
//       >
//         H
//       </text>
//       <circle cx="220" cy="108" r="9" fill="#0ea5e9" opacity="0.8" />
//       <text
//         x="220"
//         y="113"
//         textAnchor="middle"
//         fontSize="9"
//         fontWeight="700"
//         fill="white"
//       >
//         H
//       </text>
//       <circle cx="160" cy="152" r="9" fill="#0ea5e9" opacity="0.8" />
//       <circle cx="220" cy="152" r="9" fill="#0ea5e9" opacity="0.8" />
//       <line
//         x1="169"
//         y1="114"
//         x2="178"
//         y2="122"
//         stroke="#38bdf8"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <line
//         x1="211"
//         y1="114"
//         x2="202"
//         y2="122"
//         stroke="#38bdf8"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <line
//         x1="169"
//         y1="146"
//         x2="178"
//         y2="138"
//         stroke="#38bdf8"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       <line
//         x1="211"
//         y1="146"
//         x2="202"
//         y2="138"
//         stroke="#38bdf8"
//         strokeWidth="2"
//         strokeLinecap="round"
//       />
//       {/* AR status badge */}
//       <rect x="148" y="60" width="84" height="22" rx="11" fill="#0369a1" />
//       <circle cx="165" cy="71" r="4" fill="#4ade80" />
//       <text
//         x="192"
//         y="75"
//         textAnchor="middle"
//         fontSize="8"
//         fill="white"
//         fontWeight="600"
//       >
//         AR Activa
//       </text>
//       {/* Scan lines */}
//       <line
//         x1="135"
//         y1="165"
//         x2="245"
//         y2="165"
//         stroke="#0ea5e9"
//         strokeWidth="0.8"
//         opacity="0.3"
//       />
//       <line
//         x1="135"
//         y1="175"
//         x2="245"
//         y2="175"
//         stroke="#0ea5e9"
//         strokeWidth="0.8"
//         opacity="0.2"
//       />
//     </svg>
//   );
// }

// function LearnVisual() {
//   return (
//     <svg viewBox="0 0 380 280" fill="none" className="w-full max-w-sm">
//       {/* Progress arcs */}
//       <circle
//         cx="190"
//         cy="130"
//         r="80"
//         stroke="#d1fae5"
//         strokeWidth="16"
//         fill="none"
//       />
//       <circle
//         cx="190"
//         cy="130"
//         r="80"
//         stroke="#10b981"
//         strokeWidth="16"
//         fill="none"
//         strokeDasharray="440"
//         strokeDashoffset="110"
//         strokeLinecap="round"
//         transform="rotate(-90 190 130)"
//       />
//       {/* Inner ring */}
//       <circle
//         cx="190"
//         cy="130"
//         r="56"
//         stroke="#d1fae5"
//         strokeWidth="10"
//         fill="none"
//       />
//       <circle
//         cx="190"
//         cy="130"
//         r="56"
//         stroke="#34d399"
//         strokeWidth="10"
//         fill="none"
//         strokeDasharray="352"
//         strokeDashoffset="60"
//         strokeLinecap="round"
//         transform="rotate(-90 190 130)"
//       />
//       {/* Center */}
//       <circle cx="190" cy="130" r="36" fill="#f0fdf4" />
//       <text
//         x="190"
//         y="125"
//         textAnchor="middle"
//         fontSize="20"
//         fontWeight="800"
//         fill="#059669"
//       >
//         75%
//       </text>
//       <text x="190" y="140" textAnchor="middle" fontSize="9" fill="#6b7280">
//         Completado
//       </text>
//       {/* Subject badges */}
//       {[
//         { label: "Orgánica", x: 80, y: 60, pct: "92%" },
//         { label: "Inorgánica", x: 300, y: 60, pct: "68%" },
//         { label: "Física", x: 80, y: 205, pct: "81%" },
//         { label: "Bioquímica", x: 300, y: 205, pct: "55%" },
//       ].map((b) => (
//         <g key={b.label}>
//           <rect
//             x={b.x - 34}
//             y={b.y - 18}
//             width="68"
//             height="36"
//             rx="8"
//             fill="white"
//             stroke="#d1fae5"
//             strokeWidth="1.2"
//           />
//           <text
//             x={b.x}
//             y={b.y - 4}
//             textAnchor="middle"
//             fontSize="8"
//             fill="#6b7280"
//           >
//             {b.label}
//           </text>
//           <text
//             x={b.x}
//             y={b.y + 11}
//             textAnchor="middle"
//             fontSize="11"
//             fontWeight="700"
//             fill="#059669"
//           >
//             {b.pct}
//           </text>
//         </g>
//       ))}
//     </svg>
//   );
// }
