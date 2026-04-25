"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { ScrollAnimation } from "@/components/motion-primitives/scroll-animation";
import { useTranslations } from "next-intl";

export default function Preguntas1() {
  const t = useTranslations("faq");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const items = t.raw("items") as { question: string; answer: string }[];

  return (
    <section className="bg-background @container py-15 md:py-24 lg:py-22">
      <div className="mx-auto max-w-8xl px-5 md:px-12 lg:px-15">
        <div className="@xl:flex-row @xl:items-start lg:gap-5 flex flex-col gap-7">
          {/* LADO IZQUIERDO */}
          <ScrollAnimation
            direction="up"
            delay={0.1}
            className="@xl:sticky @xl:top-24 lg:w-96 shrink-0"
          >
            {/* Título — faq.title */}
            <h2 className="text-preg-ttl font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-center @xl:text-left">
              {t("title")}
            </h2>

            {/* Subtítulo + link a contacto — faq.subtitle + faq.contactLink */}
            <p className="text-preg-desc mt-2 text-base text-center @xl:text-left">
              {t("subtitle")}{" "}
              <Link
                href="/contacto"
                className="text-preg-link font-medium hover:underline"
              >
                {t("contactLink")}
              </Link>
            </p>
          </ScrollAnimation>

          {/* LADO DERECHO */}
          <ScrollAnimation direction="up" delay={0.2} className="flex-1">
            <Accordion type="single" collapsible>
            {/* Preguntas acordeón — faq.items[].question + faq.items[].answer */}
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
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
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
