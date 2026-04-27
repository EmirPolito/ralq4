"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Footer from "@/components/footer";

export default function TerminosCondiciones() {
  const t = useTranslations("terminos");

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="pb-20 flex-1 max-w-4xl mx-auto w-full px-4 md:px-5 py-35 text-left">
        <h1 className="text-2xl lg:text-5xl font-semibold text-ttl mb-4 tracking-tight px-2 lg:px-0">
          {t("title")}
        </h1>
        <div className="space-y-6 text-sm lg:text-base text-desc leading-relaxed px-2 lg:px-0">
          <p>{t("intro")}</p>

          <h2 className="text-lg lg:text-xl font-semibold text-ttl mt-10 mb-2">
            {t("s1Title")}
          </h2>
          <p>{t("s1")}</p>

          <h2 className="text-xl font-semibold text-ttl mt-11 mb-2">
            {t("s2Title")}
          </h2>
          <p>{t("s2Intro")}</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{t("s2l1")}</li>
            <li>{t("s2l2")}</li>
            <li>{t("s2l3")}</li>
            <li>{t("s2l4")}</li>
          </ul>

          <h2 className="text-xl font-semibold text-ttl mt-11 mb-2">
            {t("s3Title")}
          </h2>
          <p>{t("s3")}</p>

          <h2 className="text-xl font-semibold text-ttl mt-11 mb-2">
            {t("s4Title")}
          </h2>
          <p>{t("s4")}</p>

          <h2 className="text-xl font-semibold text-ttl mt-11 mb-2">
            {t("s5Title")}
          </h2>
          <p>{t("s5")}</p>

          <h2 className="text-xl font-semibold text-ttl mt-11 mb-2">
            {t("s6Title")}
          </h2>
          <p>{t("s6")}</p>

          <h2 className="text-xl font-semibold text-ttl mt-11 mb-2">
            {t("s7Title")}
          </h2>
          <p>
            {t("s7")}{" "}
            <Link
              href="/contacto"
              className="text-link underline underline-offset-4"
            >
              {t("s7Link")}
            </Link>
            .
          </p>
          <p className="text-sm text-desc pt-8 border-t border-desc/10">
            {t("lastUpdate")} {new Date().toLocaleDateString()}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
