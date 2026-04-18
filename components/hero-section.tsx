"use client";

import React from "react";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { HeroHeader } from "@/components/header";
import { Hero } from "@/components/hero";
import { Carousel } from "@/components/carrusel-1";
import PinCardsSection from "@/components/3d-pin-demo";
import TresPasosLaboratorio from "@/components/tres-secciones";
import { Feature } from "@/components/carrusel-2";
import ImgCursorDemo from "@/components/img-cursor";
import Preguntas1 from "@/components/preguntas-frecuentes";
import Footer from "@/components/footer";

export default function HeroSection() {
  return (
    <>
      <main className="overflow-x-hidden">
        {/* HERO */}
        <Hero />

        {/* Carrusel */}
        <Carousel />

        {/* 3 tarjetas pin */}
        <PinCardsSection />

        {/* 3 pasos para laboratorio completo*/}
        <TresPasosLaboratorio />

        {/* imagene automatico*/}
        <ScrollAnimation direction="up" delay={0.1}>
          <Feature />
        </ScrollAnimation>

        {/* Comentario*/}
        <ImgCursorDemo />

        {/*Preguntas frecuentes 2*/}
        <Preguntas1 />

        {/* Footer*/}
        <Footer />
      </main>
    </>
  );
}

// import { LandingAccordionItem } from "@/components/despliegue-img";
// {/* Despliegue de imagen  */}
// {/* <LandingAccordionItem /> */}

//import GalleryHoverCarousel from "@/components/img-carrusel";
// {/* Carrete de imagenes*/}
// {/* <GalleryHoverCarousel /> */}

// import { IzquierdaDerecha } from "@/components/izquierda-derecha";
// {/* Izquierda y derecha */}
// {/* <IzquierdaDerecha /> */}

// import WobbleCardSection from "@/components/wobble-card";
// {/* Rectangulo y cuadro 2*/}
// <WobbleCardSection />;

// import SeccionesDemo from "@/components/secciones";
// {/* 4 secciones */}
// <SeccionesDemo />

// import Preguntas2 from "@/components/preguntas-frecuentes copy";
{
  /*Preguntas frecuentes*/
}
// <Preguntas2 />
