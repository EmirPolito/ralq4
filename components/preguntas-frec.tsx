"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqItems = [
  {
    id: "item-1",
    question: "¿Qué es RALQ y cómo funciona?",
    answer:
      "RALQ es una plataforma educativa que utiliza realidad aumentada y modelos 3D interactivos para transformar el aprendizaje de química mediante experiencias visuales e interactivas.",
  },
  {
    id: "item-2",
    question: "¿Necesito algún dispositivo especial para usar RALQ?",
    answer:
      "No. Solo necesitas un smartphone, tablet o computadora con acceso a internet y una cámara para poder visualizar las experiencias en realidad aumentada.",
  },
  {
    id: "item-3",
    question: "¿Es gratuito usar la plataforma?",
    answer:
      "RALQ ofrece acceso gratuito a varias funciones educativas. Algunas herramientas avanzadas o contenidos adicionales pueden requerir acceso ampliado en el futuro.",
  },
  {
    id: "item-4",
    question: "¿Puedo usar RALQ sin conexión a internet?",
    answer:
      "No. Actualmente se requiere conexión a internet para acceder a los modelos 3D y a las funciones de la plataforma.",
  },
  {
    id: "item-5",
    question: "¿RALQ es adecuado para todos los niveles educativos?",
    answer:
      "Sí. La plataforma está diseñada para estudiantes desde nivel primaria hasta universidad, así como para docentes que buscan herramientas interactivas para enseñar química.",
  },
  {
    id: "item-6",
    question: "¿Qué tipo de contenido puedo explorar en RALQ?",
    answer:
      "Puedes explorar instrumentos de laboratorio, modelos moleculares, estructuras químicas y experiencias educativas en realidad aumentada diseñadas para facilitar la comprensión de conceptos científicos.",
  },
];

export default function FAQs() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="bg-background @container py-22.5">
      <div className="mx-auto max-w-8xl px-5 md:px-13">
        <div className="@xl:flex-row @xl:items-start @xl:gap-15 flex flex-col gap-8">
          {/* LADO IZQUIERDO */}
          <div className="py-7 @xl:sticky @xl:top-24 @xl:w-83 shrink-0">
            <h2 className="text-preg-ttl font-semibold text-6xl font-medium">
              Preguntas Frecuentes
            </h2>

            <p className="text-preg-desc @xl:block mt-2 hidden text-base">
              ¿Necesitas más ayuda?{" "}
              <Link
                href="/contacto"
                className="text-preg-link font-medium hover:underline"
              >
                Contáctanos
              </Link>
            </p>
          </div>

          {/* LADO DERECHO */}
          <div className="flex-1">
            <Accordion type="single" collapsible>
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="border-dashed"
                >
                  <AccordionTrigger className="text-preg-preg cursor-pointer py-8 text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent>
                    <p className="text-preg-txt pb-2 text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
