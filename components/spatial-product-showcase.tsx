"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";
import {
  Battery,
  Sliders,
  ChevronRight,
  Zap,
  Bluetooth,
  Wifi,
  Music,
  LucideIcon,
} from "lucide-react";

export type ProductId = "left" | "right";

export interface FeatureMetric {
  label: string;
  value: number;
  icon: LucideIcon;
}

export interface ProductData {
  id: ProductId;
  label: string;
  title: string;
  description: string;
  image: string;
  colors: {
    gradient: string;
    glow: string;
    ring: string;
  };
  stats: {
    connectionStatus: string;
    batteryLevel: number;
  };
  features: FeatureMetric[];
}

const PRODUCT_DATA: Record<ProductId, ProductData> = {
  left: {
    id: "left",
    label: "Instrumento",
    title: "Gradilla",
    description:
      "La gradilla es un instrumento de laboratorio utilizado para sostener y organizar tubos de ensayo de forma segura durante experimentos, reacciones químicas o procesos de análisis.",
    image: "https://ik.imagekit.io/kqmrslzuq/SOUND/left-earbud.png",
    colors: {
      gradient: "from-[#111] to-[#000]",
      glow: "bg-[#222]",
      ring: "border-l-[#333]/50",
    },
    stats: { connectionStatus: "Disponible", batteryLevel: 82 },
    features: [
      { label: "Capacidad", value: 12, icon: Zap },
      { label: "Estabilidad", value: 98, icon: Wifi },
    ],
  },

  right: {
    id: "right",
    label: "Molecula",
    title: "Cafeína",
    description:
      "La cafeína es una molécula orgánica perteneciente al grupo de las metilxantinas. Es conocida por sus efectos estimulantes en el sistema nervioso central y se encuentra de forma natural en el café, té y cacao.",
    image: "https://ik.imagekit.io/kqmrslzuq/SOUND/right-earbud.png",
    colors: {
      gradient: "from-[#111] to-[#000]",
      glow: "bg-[#222]",
      ring: "border-r-[#333]/50",
    },
    stats: { connectionStatus: "Disponible", batteryLevel: 74 },
    features: [
      { label: "Átomos", value: 24, icon: Bluetooth },
      { label: "Complejidad", value: 88, icon: Music },
    ],
  },
};

const ANIMATIONS: {
  container: Variants;
  item: Variants;
  image: (isLeft: boolean) => Variants;
} = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
    exit: { opacity: 0, y: -10, filter: "blur(5px)" },
  },
  image: (isLeft: boolean): Variants => ({
    initial: {
      opacity: 0,
      scale: 1.5,
      filter: "blur(15px)",
      rotate: isLeft ? -30 : 30,
      x: isLeft ? -80 : 80,
    },
    animate: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      rotate: 0,
      x: 0,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    exit: {
      opacity: 0,
      scale: 0.6,
      filter: "blur(20px)",
      transition: { duration: 0.25 },
    },
  }),
};

const BackgroundGradient = ({ isLeft }: { isLeft: boolean }) => (
  <div className="absolute inset-0 pointer-events-none">
    <motion.div
      animate={{
        background: isLeft
          ? "radial-gradient(circle at 0% 50%, rgba(0,0,0,0.25), transparent 50%)"
          : "radial-gradient(circle at 100% 50%, rgba(0,0,0,0.25), transparent 50%)",
      }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="absolute inset-0"
    />
  </div>
);

const ProductVisual = ({
  data,
  isLeft,
}: {
  data: ProductData;
  isLeft: boolean;
}) => (
  <motion.div layout="position" className="relative group shrink-0">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className={`absolute inset-[-20%] rounded-full border border-dashed border-demo-border/30 ${data.colors.ring}`}
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute inset-0 rounded-full bg-demo-bg ${data.colors.gradient} blur-2xl opacity-10`}
    />

    {/* Contenedor circular más pequeño */}
    <div className="relative h-64 w-64 md:h-88 md:w-88 rounded-full border border-demo-border/15 shadow-2xl flex items-center justify-center overflow-hidden  backdrop-blur-sm">
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="relative z-10 w-full h-full flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={data.id}
            src={data.image}
            alt={`${data.title}`}
            variants={ANIMATIONS.image(isLeft)}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-0"
            draggable={false}
          />
        </AnimatePresence>
      </motion.div>
    </div>

    {/* Boton DISPONIBLE */}
    <motion.div
      layout="position"
      className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap"
    >
      <div className="text-demo-dis-txt bg-demo-dis-bg/70 flex items-center gap-3 border-demo-border/10 border text-xs uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur">
        <span
          className={`h-1.5 w-1.5 rounded-full ${data.colors.glow} animate-pulse`}
        />
        {data.stats.connectionStatus}
      </div>
    </motion.div>
  </motion.div>
);

const ProductDetails = ({
  data,
  isLeft,
}: {
  data: ProductData;
  isLeft: boolean;
}) => {
  // Forzamos que siempre esté alineado a la izquierda
  const alignClass = "items-start text-left";
  const flexDirClass = "flex-row"; // barra de progreso igual
  const barColorClass = isLeft ? "left-0 bg-[#9cc2a9]" : "left-0 bg-[#60806b]"; // izquierda para ambos

  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col ${alignClass}`}
    >
      {/* mini ttl */}
      <motion.h2
        variants={ANIMATIONS.item}
        className="text-demo-mini-ttl text-sm font-normal uppercase tracking-[0.2em] mb-2.5"
      >
        {data.label}
      </motion.h2>

      {/* ttl */}
      <motion.h1
        variants={ANIMATIONS.item}
        //  text-transparent
        className="text-demo-ttl text-4xl md:text-5xl font-bold tracking-tight mb-2  bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground whitespace-nowrap"
      >
        {data.title}
      </motion.h1>

      {/* desc */}
      <motion.p
        variants={ANIMATIONS.item}
        className="text-demo-desc mb-8 max-w-sm leading-relaxed mr-auto"
      >
        {data.description}
      </motion.p>

      <motion.div
        variants={ANIMATIONS.item}
        className="w-full space-y-6 bg-card/30 p-6 rounded-2xl border border-foreground/5 backdrop-blur-sm"
      >
        {data.features.map((feature, idx) => (
          <div key={feature.label} className="group">
            <div
              className={`flex items-center justify-between mb-3 text-sm ${flexDirClass}`}
            >
              <div
                className={`flex items-center gap-2 ${
                  feature.value > 50
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                <feature.icon size={16} /> <span>{feature.label}</span>
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                {feature.value}%
              </span>
            </div>
            <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${feature.value}%` }}
                transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
                className={`absolute top-0 bottom-0 ${barColorClass} opacity-80`}
              />
            </div>
          </div>
        ))}

        <div className="pt-4 flex justify-start">
          <button
            type="button"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors group"
          >
            <Sliders size={14} /> Ver Especificaciones
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={ANIMATIONS.item}
        className="mt-6 flex items-center gap-3 text-muted-foreground flex-row"
      >
        {/* <Battery size={16} />
        <span className="text-sm font-medium">{data.stats.batteryLevel}% Carga</span> */}
      </motion.div>
    </motion.div>
  );
};

const Switcher = ({
  activeId,
  onToggle,
}: {
  activeId: ProductId;
  onToggle: (id: ProductId) => void;
}) => {
  const options = Object.values(PRODUCT_DATA).map((p) => ({
    id: p.id,
    label: p.label,
  }));

  return (
    <div className="absolute bottom-10 inset-x-0 flex justify-center z-50 pointer-events-none">
      <motion.div className="bg-demo-btn-bg text-demo-btn-txt pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-card/10 backdrop-blur-2xl border border-foreground/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-foreground/5">
        {options.map((opt) => (
          <motion.button
            key={opt.id}
            onClick={() => onToggle(opt.id)}
            whileTap={{ scale: 0.96 }}
            className="cursor-pointer relative w-24 h-12 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none"
          >
            {activeId === opt.id && (
              <motion.div
                layoutId="island-surface"
                className="absolute inset-0 rounded-full bg-gradient-to-b from-foreground/10 to-foreground/5 shadow-inner"
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
              />
            )}

            <span
              className={`relative z-10 transition-colors duration-300 ${
                activeId === opt.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground/70"
              }`}
            >
              {opt.label}
            </span>
            {activeId === opt.id && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-1 h-1 w-6 rounded-full bg-gradient-to-r from-transparent via-foreground/60 to-transparent"
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default function EarbudShowcase() {
  const [activeSide, setActiveSide] = useState<ProductId>("left");

  const currentData = PRODUCT_DATA[activeSide];
  const isLeft = activeSide === "left";

  return (
    <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden selection:bg-muted flex flex-col items-center justify-center">
      <BackgroundGradient isLeft={isLeft} />

      <main className="relative z-10 w-full px-6 py-8 flex flex-col justify-center max-w-7xl mx-auto">
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-22 lg:gap-55 w-full ${
            isLeft ? "md:flex-row" : "md:flex-row-reverse"
          }`}
        >
          <ProductVisual data={currentData} isLeft={isLeft} />

          <motion.div layout="position" className="w-full max-w-md">
            <AnimatePresence mode="wait">
              <ProductDetails
                key={activeSide}
                data={currentData}
                isLeft={isLeft}
              />
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </main>

      <Switcher activeId={activeSide} onToggle={setActiveSide} />
    </div>
  );
}

// 'use client';

// import { useState } from 'react';
// import { motion, AnimatePresence, Variants } from 'framer-motion';
// import {
//   Battery,
//   Sliders,
//   ChevronRight,
//   Zap,
//   Bluetooth,
//   Wifi,
//   Music,
//   LucideIcon,
// } from 'lucide-react';

// import { SplineScene } from '@/components/ui/splite';

// export type ProductId = 'left' | 'right';

// export interface FeatureMetric {
//   label: string;
//   value: number;
//   icon: LucideIcon;
// }

// export interface ProductData {
//   id: ProductId;
//   label: string;
//   title: string;
//   description: string;
//   image: string;

//   scene: string; // ← agregado

//   colors: {
//     gradient: string;
//     glow: string;
//     ring: string;
//   };
//   stats: {
//     connectionStatus: string;
//     batteryLevel: number;
//   };
//   features: FeatureMetric[];
// }

// const PRODUCT_DATA: Record<ProductId, ProductData> = {
//   left: {
//     id: 'left',
//     label: 'Izquierdo',
//     title: 'Ancla Espacial',
//     description:
//       'El nodo principal para sincronizacion binaural. Maneja transmision de baja latencia y ancla el escenario de audio espacial.',
//     image: '',

//     scene: 'https://prod.spline.design/yJm-PpfNHEagCCaU/scene.splinecode',

//     colors: {
//       gradient: 'from-[#111] to-[#000]',
//       glow: 'bg-[#222]',
//       ring: 'border-l-[#333]/50',
//     },
//     stats: { connectionStatus: 'Conectado', batteryLevel: 82 },
//     features: [
//       { label: 'Latencia', value: 12, icon: Zap },
//       { label: 'Tasa Sync', value: 98, icon: Wifi },
//     ],
//   },
//   right: {
//     id: 'right',
//     label: 'Derecho',
//     title: 'Claridad Vocal',
//     description:
//       'Optimizado para detalle de alta frecuencia y captura de voz. Contiene el arreglo de microfonos beamforming para llamadas cristalinas.',
//     image: '',

//     scene: 'https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode',

//     colors: {
//       gradient: 'from-[#111] to-[#000]',
//       glow: 'bg-[#222]',
//       ring: 'border-r-[#333]/50',
//     },
//     stats: { connectionStatus: 'Conectado', batteryLevel: 74 },
//     features: [
//       { label: 'Bitrate', value: 94, icon: Bluetooth },
//       { label: 'Clarificador', value: 88, icon: Music },
//     ],
//   },
// };

// const ANIMATIONS: {
//   container: Variants;
//   item: Variants;
//   image: (isLeft: boolean) => Variants;
// } = {
//   container: {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, delayChildren: 0.1 },
//     },
//     exit: {
//       opacity: 0,
//       transition: { duration: 0.2 },
//     },
//   },
//   item: {
//     hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
//     visible: {
//       opacity: 1,
//       y: 0,
//       filter: 'blur(0px)',
//       transition: { type: 'spring', stiffness: 100, damping: 20 },
//     },
//     exit: { opacity: 0, y: -10, filter: 'blur(5px)' },
//   },
//   image: (isLeft: boolean): Variants => ({
//     initial: {
//       opacity: 0,
//       scale: 1.5,
//       filter: 'blur(15px)',
//       rotate: isLeft ? -30 : 30,
//       x: isLeft ? -80 : 80,
//     },
//     animate: {
//       opacity: 1,
//       scale: 1,
//       filter: 'blur(0px)',
//       rotate: 0,
//       x: 0,
//       transition: { type: 'spring', stiffness: 260, damping: 20 },
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.6,
//       filter: 'blur(20px)',
//       transition: { duration: 0.25 },
//     },
//   }),
// };

// const BackgroundGradient = ({ isLeft }: { isLeft: boolean }) => (
//   <div className="absolute inset-0 pointer-events-none">
//     <motion.div
//       animate={{
//         background: isLeft
//           ? 'radial-gradient(circle at 0% 50%, rgba(0,0,0,0.25), transparent 50%)'
//           : 'radial-gradient(circle at 100% 50%, rgba(0,0,0,0.25), transparent 50%)',
//       }}
//       transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
//       className="absolute inset-0"
//     />
//   </div>
// );

// const ProductVisual = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => (
//   <motion.div layout="position" className="relative group shrink-0">
//     <motion.div
//       animate={{ rotate: 360 }}
//       transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
//       className={`absolute inset-[-20%] rounded-full border border-dashed border-foreground/10 ${data.colors.ring}`}
//     />
//     <motion.div
//       animate={{ scale: [1, 1.05, 1] }}
//       transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
//       className={`absolute inset-0 rounded-full bg-gradient-to-br ${data.colors.gradient} blur-2xl opacity-40`}
//     />

//     <div className="relative h-80 w-80 md:h-[450px] md:w-[450px] rounded-full border border-foreground/5 shadow-2xl flex items-center justify-center overflow-hidden bg-background/20 backdrop-blur-sm">
//       <motion.div
//         animate={{ y: [-10, 10, -10] }}
//         transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
//         className="relative z-10 w-full h-full flex items-center justify-center"
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={data.id}
//             variants={ANIMATIONS.image(isLeft)}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//             className="w-full h-full p-4"
//           >
//             <SplineScene
//               scene={data.scene}
//               className="w-full h-full"
//             />
//           </motion.div>
//         </AnimatePresence>
//       </motion.div>
//     </div>

//     <motion.div
//       layout="position"
//       className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
//     >
//       <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground bg-card/80 px-4 py-2 rounded-full border border-foreground/5 backdrop-blur">
//         <span className={`h-1.5 w-1.5 rounded-full ${data.colors.glow} animate-pulse`} />
//         {data.stats.connectionStatus}
//       </div>
//     </motion.div>
//   </motion.div>
// );

// const ProductDetails = ({ data, isLeft }: { data: ProductData; isLeft: boolean }) => {
//   const alignClass = isLeft ? 'items-start text-left' : 'items-end text-right';
//   const flexDirClass = isLeft ? 'flex-row' : 'flex-row-reverse';
//   const barColorClass = isLeft ? 'left-0 bg-[#9cc2a9]' : 'right-0 bg-[#60806b]';

//   return (
//     <motion.div
//       variants={ANIMATIONS.container}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//       className={`flex flex-col ${alignClass}`}
//     >
//       <motion.h2
//         variants={ANIMATIONS.item}
//         className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2"
//       >
//         Auricular {data.label}
//       </motion.h2>

//       <motion.h1
//         variants={ANIMATIONS.item}
//         className="text-4xl md:text-5xl font-bold tracking-tight mb-2 text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground"
//       >
//         {data.title}
//       </motion.h1>

//       <motion.p
//         variants={ANIMATIONS.item}
//         className={`text-muted-foreground mb-8 max-w-sm leading-relaxed ${
//           isLeft ? 'mr-auto' : 'ml-auto'
//         }`}
//       >
//         {data.description}
//       </motion.p>

//       <motion.div
//         variants={ANIMATIONS.item}
//         className="w-full space-y-6 bg-card/40 p-6 rounded-2xl border border-foreground/5 backdrop-blur-sm"
//       >
//         {data.features.map((feature, idx) => (
//           <div key={feature.label} className="group">
//             <div className={`flex items-center justify-between mb-3 text-sm ${flexDirClass}`}>
//               <div
//                 className={`flex items-center gap-2 ${
//                   feature.value > 50 ? 'text-foreground' : 'text-muted-foreground'
//                 }`}
//               >
//                 <feature.icon size={16} /> <span>{feature.label}</span>
//               </div>
//               <span className="font-mono text-xs text-muted-foreground">{feature.value}%</span>
//             </div>

//             <div className="relative h-2 w-full bg-muted rounded-full overflow-hidden">
//               <motion.div
//                 initial={{ width: 0 }}
//                 animate={{ width: `${feature.value}%` }}
//                 transition={{ duration: 1, delay: 0.4 + idx * 0.15 }}
//                 className={`absolute top-0 bottom-0 ${barColorClass} opacity-80`}
//               />
//             </div>
//           </div>
//         ))}

//         <div className={`pt-4 flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
//           <button
//             type="button"
//             className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors group"
//           >
//             <Sliders size={14} /> Ver Especificaciones
//             <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </motion.div>

//       <motion.div
//         variants={ANIMATIONS.item}
//         className={`mt-6 flex items-center gap-3 text-muted-foreground ${flexDirClass}`}
//       >
//         <Battery size={16} />
//         <span className="text-sm font-medium">{data.stats.batteryLevel}% Carga</span>
//       </motion.div>
//     </motion.div>
//   );
// };

// const Switcher = ({
//   activeId,
//   onToggle,
// }: {
//   activeId: ProductId;
//   onToggle: (id: ProductId) => void;
// }) => {
//   const options = Object.values(PRODUCT_DATA).map((p) => ({ id: p.id, label: p.label }));

//   return (
//     <div className="absolute bottom-12 inset-x-0 flex justify-center z-50 pointer-events-none">
//       <motion.div className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-card/30 backdrop-blur-2xl border border-foreground/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-foreground/5">
//         {options.map((opt) => (
//           <motion.button
//             key={opt.id}
//             onClick={() => onToggle(opt.id)}
//             whileTap={{ scale: 0.96 }}
//             className="relative w-24 h-12 rounded-full flex items-center justify-center text-sm font-medium focus:outline-none"
//           >
//             {activeId === opt.id && (
//               <motion.div
//                 layoutId="island-surface"
//                 className="absolute inset-0 rounded-full bg-gradient-to-b from-foreground/10 to-foreground/5 shadow-inner"
//                 transition={{ type: 'spring', stiffness: 220, damping: 22 }}
//               />
//             )}

//             <span
//               className={`relative z-10 transition-colors duration-300 ${
//                 activeId === opt.id
//                   ? 'text-foreground'
//                   : 'text-muted-foreground hover:text-foreground/70'
//               }`}
//             >
//               {opt.label}
//             </span>
//           </motion.button>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default function EarbudShowcase() {
//   const [activeSide, setActiveSide] = useState<ProductId>('left');

//   const currentData = PRODUCT_DATA[activeSide];
//   const isLeft = activeSide === 'left';

//   return (
//     <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden selection:bg-muted flex flex-col items-center justify-center">
//       <BackgroundGradient isLeft={isLeft} />

//       <main className="relative z-10 w-full px-6 py-8 flex flex-col justify-center max-w-7xl mx-auto">
//         <motion.div
//           layout
//           transition={{ type: 'spring', bounce: 0, duration: 0.9 }}
//           className={`flex flex-col md:flex-row items-center justify-center gap-12 md:gap-32 lg:gap-48 w-full ${
//             isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
//           }`}
//         >
//           <ProductVisual data={currentData} isLeft={isLeft} />

//           <motion.div layout="position" className="w-full max-w-md">
//             <AnimatePresence mode="wait">
//               <ProductDetails key={activeSide} data={currentData} isLeft={isLeft} />
//             </AnimatePresence>
//           </motion.div>
//         </motion.div>
//       </main>

//       <Switcher activeId={activeSide} onToggle={setActiveSide} />
//     </div>
//   );
// }
