"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";
import Footer from "@/components/footer";

export function SobreNosotros() {
  const t = useTranslations("nosotros");

  const data = [
    {
      title: t("y2023.title"),
      content: (
        <div>
          <p className="text-nos-txt mb-2 text-base">{t("y2023.p1")}</p>
          <p className="text-nos-txt mb-8 text-base">{t("y2023.p2")}</p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: t("y2024.title"),
      content: (
        <div>
          <p className="text-nos-txt mb-2 text-base">{t("y2024.p1")}</p>
          <p className="text-nos-txt mb-8 text-base">{t("y2024.p2")}</p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: t("y2025.title"),
      content: (
        <div>
          <p className="text-nos-txt mb-2 text-base">{t("y2025.p1")}</p>
          <p className="text-nos-txt mb-8 text-base">{t("y2025.p2")}</p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
    {
      title: t("mejoras.title"),
      content: (
        <div>
          <p className="text-nos-txt mb-2 text-base">{t("mejoras.p1")}</p>
          <p className="text-nos-txt mb-8 text-base">{t("mejoras.p2")}</p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              className="h-50 w-full rounded-lg object-cover border-[var(--border-theme)]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
      <Footer />
    </div>
  );
}
