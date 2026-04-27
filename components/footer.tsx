"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="py-17 px-5 md:px-10 z-50 bg-[var(--footer-bg)] border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Logo + tagline + copyright */}
          <div className="mb-12 md:mb-13">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              <span className="bg font-bold lg:inline-block">
                {/* Logo claro */}
                <img
                  src="/logos/logo-verde.png"
                  alt="RALQ logo"
                  className="h-10 w-auto dark:hidden"
                />

                {/* Logo oscuro */}
                <img
                  src="/logos/logo-blanco.png"
                  alt="RALQ logo"
                  className="px-1 hidden h-10 w-auto dark:block"
                />
              </span>
            </Link>

            <h1 className="text-footer-txt text-sm lg:text-base mt-1 md:mt-1.5 px-1">
              {t("tagline")}
            </h1>

            <p className="hidden md:block text-footer-derechos text-sm mt-1 px-1">
              © {new Date().getFullYear()} {t("copyright")}
            </p>
          </div>
          {/* Columnas de links — Páginas / Redes / Legales */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-footer-ttl font-semibold mb-4">{t("sections.pages")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/nosotros"
                    className="text-footer-pag text-sm lg:text-base hover:text-footer-pag-hov"
                  >
                    {t("links.nosotros")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-footer-pag text-sm lg:text-base hover:text-footer-pag-hov"
                  >
                    {t("links.contacto")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ayuda"
                    className="text-footer-pag text-sm lg:text-base hover:text-footer-pag-hov"
                  >
                    {t("links.ayuda")}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-footer-ttl font-semibold mb-4">{t("sections.networks")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61563746413453"
                    className="text-footer-pag text-sm lg:text-base hover:text-footer-pag-hov"
                  >
                    {t("links.facebook")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ralq.utsv?igsh=Z256dmRoOXY3ZDg2"
                    className="text-footer-pag text-sm lg:text-base hover:text-footer-pag-hov"
                  >
                    {t("links.instagram")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/arihantcodes"
                    className="text-footer-pag text-sm lg:text-base hover:text-footer-pag-hov"
                  >
                    {t("links.linkedin")}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-footer-ttl font-semibold mb-4">{t("sections.legal")}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/politica-privacidad"
                    className="text-footer-pag text-sm lg:text-base hover:text-footer-pag-hov"
                  >
                    {t("links.privacidad")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos-condiciones"
                    className="text-footer-pag text-sm lg:text-base hover:text-footer-pag-hov"
                  >
                    {t("links.terminos")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Wordmark grande RALQ con degradado (solo desktop) */}
        <div className="w-full flex flex-col mt-10 md:mt-9.5 items-center justify-center">
          <h1
            className="hidden md:block bg-clip-text text-center text-3xl md:text-5xl lg:text-[14rem] font-bold tracking-widest text-transparent bg-gradient-to-b from-footer-ralq to-footer-ralq select-none"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 70%, transparent)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent)",
            }}
          >
            RALQ
          </h1>
          <p className="md:hidden text-footer-derechos text-sm mt-6 text-center px-1">
            © {new Date().getFullYear()} {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
