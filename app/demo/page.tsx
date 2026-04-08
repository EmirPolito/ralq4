"use client";

import React from "react";
import { HeroHeader } from "@/components/header";
import EarbudShowcase from "@/components/demo/contenido-demo";
import Footer from "@/components/footer";

const demo = () => {
  return (
    <div>
      <HeroHeader />
      <EarbudShowcase />
      {/* <Footer/> */}
    </div>
  );
};

export default demo;
