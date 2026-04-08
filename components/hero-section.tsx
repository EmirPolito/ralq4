"use client";

import React from "react";
import { HeroHeader } from "./header";
import { Hero } from "@/components/hero";
import { Carousel } from "@/components/carousel";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { Feature } from "@/components/feature-with-image-carousel";
import FAQs from "@/components/preguntas-frec";
import Footer from "@/components/footer";
import WobbleCardSection from "@/components/wobble-card-section";
import PinCardsSection from "@/components/pin-cards-section";
import { IzquierdaDerecha } from "@/components/izquierda-derecha";

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
