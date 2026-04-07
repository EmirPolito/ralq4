"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";
import {
  Sliders,
  ChevronRight,
  LucideIcon,
  FlaskConical,
  Layers,
  Ruler,
  Atom,
  Beaker,
  TestTubes,
} from "lucide-react";

export type ProductId = "left" | "right";

export interface InfoItem {
  label: string;
  value: string;
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
  };
  infoItems: InfoItem[];
}

const PRODUCT_DATA: Record<ProductId, ProductData> = {
  left: {
    id: "left",
    label: "Instrumento",
    title: "Gradilla",
    description:
      "La gradilla es un instrumento de laboratorio utilizado para sostener y organizar tubos de ensayo de forma segura durante experimentos, reacciones químicas o procesos de análisis.",
    image: "/img/demo/gradilla.png",
    colors: {
      gradient: "from-[#111] to-[#000]",
      glow: "bg-[#222]",
      ring: "border-l-[#333]/50",
    },
    stats: { connectionStatus: "Disponible" },
    infoItems: [
      { label: "Material", value: "Polipropileno", icon: Layers },
      { label: "Capacidad", value: "12 tubos de ensayo", icon: TestTubes },
      { label: "Dimensiones", value: "24.5 × 10 × 7.5 cm", icon: Ruler },
    ],
  },

  right: {
    id: "right",
    label: "Molecula",
    title: "Cafeína",
    description:
      "La cafeína es una molécula orgánica perteneciente al grupo de las metilxantinas. Es conocida por sus efectos estimulantes en el sistema nervioso central y se encuentra de forma natural en el café, té y cacao.",
    image: "/img/demo/cafeina.png",
    colors: {
      gradient: "from-[#111] to-[#000]",
      glow: "bg-[#222]",
      ring: "border-r-[#333]/50",
    },
    stats: { connectionStatus: "Disponible" },
    infoItems: [
      { label: "Fórmula", value: "C₈H₁₀N₄O₂", icon: FlaskConical },
      { label: "Peso molecular", value: "194.19 g/mol", icon: Atom },
      { label: "Clasificación", value: "Metilxantina", icon: Beaker },
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
      className="absolute inset-0 hidden dark:block"
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
      className={`absolute inset-[-20%] rounded-full border border-dashed border-border/20 dark:border-demo-border/30 ${data.colors.ring}`}
    />
    <motion.div
      animate={{ scale: [1, 1.05, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute inset-0 rounded-full ${data.colors.gradient} blur-2xl opacity-0 dark:opacity-10`}
    />

    {/* Contenedor circular */}
    <div className="relative h-64 w-64 md:h-88 md:w-88 rounded-full border border-border/30 dark:border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
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
      <div className="text-demo-dis-txt bg-demo-dis-bg/70 flex items-center gap-3 border border-border/10 dark:border-demo-border/10 text-xs uppercase tracking-widest px-4 py-2 rounded-full backdrop-blur">
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
  const alignClass = "items-start text-left";

  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={`flex flex-col ml-15 ${alignClass}`}
    >
      {/* mini ttl */}
      <motion.h2
        variants={ANIMATIONS.item}
        className="text-demo-mini-ttl text-sm font-normal uppercase tracking-[0.2em] mb-2"
      >
        {data.label}
      </motion.h2>

      {/* ttl */}
      <motion.h1
        variants={ANIMATIONS.item}
        className="text-demo-ttl text-4xl md:text-5xl font-bold tracking-tight mb-2 bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground whitespace-nowrap"
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

      {/* Info cards - chemistry-relevant data */}
      <motion.div
        variants={ANIMATIONS.item}
        className="w-full space-y-1 p-5 rounded-2xl border border-border/10 dark:border-foreground/5 dark:bg-card/30 backdrop-blur-sm"
      >
        {data.infoItems.map((item, idx) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
            className="flex items-center gap-4 py-3.5 border-b border-border/10 dark:border-foreground/5 last:border-0"
          >
            <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-muted/20 dark:bg-muted/50 shrink-0">
              <item.icon size={18} className="text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {item.value}
              </p>
            </div>
          </motion.div>
        ))}

        <div className="pt-3 flex justify-start">
          <button
            type="button"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground/70 hover:text-foreground transition-colors group"
          >
            <Sliders size={14} /> Ver en Realidad Aumentada
            <ChevronRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
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
    <div className="absolute bottom-15 inset-x-0 flex justify-center z-50 pointer-events-none">
      <motion.div className="bg-demo-btn-bg text-demo-btn-txt pointer-events-auto flex items-center gap-3 p-1.5 rounded-full bg-card/10 backdrop-blur-2xl border border-foreground/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] ring-1 ring-foreground/5">
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

      <main className="relative z-10 w-full px-6 pt-32 pb-20 flex flex-col justify-center max-w-7xl mx-auto">
        <motion.div
          layout
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
          className={`flex flex-col md:flex-row items-center justify-center gap-16 md:gap-32 lg:gap-60 w-full ${
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
