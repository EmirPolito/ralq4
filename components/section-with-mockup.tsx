"use client";

import React from "react";
import { motion, Variants, useReducedMotion } from "framer-motion";

interface SectionWithMockupProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  imageSrc: string;
  reverseLayout?: boolean;
}

const SectionWithMockup: React.FC<SectionWithMockupProps> = ({
  title,
  description,
  imageSrc,
  reverseLayout = false,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative pt-20 md:py-25">
      <div className="mx-auto max-w-8xl px-6 lg:px-25">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 items-center gap-50"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* TEXT */}
          <motion.div
            variants={itemVariants}
            className={`max-w-xl ${
              reverseLayout ? "md:order-2 md:pl-12" : "md:pr-12"
            }`}
          >
            <h2 className="text-mockup-ttl text-3xl md:text-[60px] md:leading-[55px] font-semibold leading-tight ">
              {title}
            </h2>

            <p className="text-mockup-desc mt-6 text-[17px] leading-6.5">
              {description}
            </p>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            variants={itemVariants}
            className={`flex justify-center ${
              reverseLayout ? "md:order-1" : ""
            }`}
          >
            <img
              src={imageSrc}
              alt="section image"
              className="w-full max-w-[680px] h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWithMockup;