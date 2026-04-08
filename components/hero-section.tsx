"use client";

import React from "react";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { HeroHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { Carousel } from "@/components/carrusel-1";
import PinCardsSection from "@/components/3d-pin-demo";
import { IzquierdaDerecha } from "@/components/izquierda-derecha";
import WobbleCardSection from "@/components/wobble-card";
import { Feature } from "@/components/carrusel-2";
import FAQs from "@/components/preguntas-frecuentes";
import Footer from "@/components/footer";

export default function HeroSection() {
  return (
    <>
      {/* header */}
      <HeroHeader />
      <main className="overflow-x-hidden">
        {/* HERO */}
        <Hero />

        {/* Carrusel */}
        <Carousel />

        {/* 3 tarjetas pin */}
        <PinCardsSection />

        {/* Izquierda y derecha */}
        <IzquierdaDerecha />

        {/* Rectangulo y cuadro 2*/}
        <WobbleCardSection />

        {/* imagene automatico*/}
        <ScrollAnimation direction="up" delay={0.1}>
          <Feature />
        </ScrollAnimation>

        {/*Preguntas frecuentes*/}
        <FAQs />

        {/* Footer*/}
        <Footer />
      </main>
    </>
  );
}
