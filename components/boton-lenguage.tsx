"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "@/context/language-context";
import type { Locale } from "@/context/language-context";
import { cn } from "@/lib/utils";

const LANGUAGES: {
  code: Locale;
  label: string;
  flag: string;
  country: string;
  img: string;
}[] = [
  {
    code: "es",
    label: "Español",
    flag: "🇲🇽",
    country: "México",
    img: "/icons/lenguage/Mexico.png",
  },
  {
    code: "pt",
    label: "Português",
    flag: "🇧🇷",
    country: "Brasil",
    img: "/icons/lenguage/Brasil.png",
  },
  {
    code: "en",
    label: "English",
    flag: "🇺🇸",
    country: "USA",
    img: "/icons/lenguage/EU.png",
  },
];

export function LanguageSelector({
  isMobile = false,
  className,
}: {
  isMobile?: boolean;
  className?: string;
}) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);

  const handleLanguageCycle = () => {
    const currentIndex = LANGUAGES.findIndex((l) => l.code === locale);
    const nextIndex = (currentIndex + 1) % LANGUAGES.length;
    setLocale(LANGUAGES[nextIndex].code);
  };

  const current = LANGUAGES.find((l) => l.code === locale) ?? LANGUAGES[0];

  return (
    <div className={cn("relative flex items-center", className)}>
      {/* Trigger button */}
      <button
        type="button"
        onClick={() => {
          if (isMobile) {
            handleLanguageCycle();
          } else {
            setOpen((v) => !v);
          }
        }}
        aria-label="Seleccionar idioma"
        className={cn(
          "flex items-center justify-center cursor-pointer rounded-md transition-opacity focus:outline-none outline-none",
          isMobile ? "h-9 w-9" : "h-9 w-9 hover:opacity-80",
        )}
      >
        <span
          className="flex items-center justify-center w-6.5 h-6.5 rounded-full overflow-hidden border border-border/30 shrink-0"
          aria-hidden
        >
          <img
            src={current.img}
            alt={current.country}
            className="w-full h-full object-cover"
          />
        </span>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
          {open && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-[190]"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.95 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className={cn(
                "absolute z-[200] flex flex-col gap-1 p-2 rounded-2xl",
                "bg-popover/95 backdrop-blur-xl border border-border/50 shadow-2xl",
                isMobile
                  ? "top-11 left-1/2 -translate-x-1/2"
                  : "top-11 right-0",
              )}
              style={{ minWidth: "140px" }}
            >
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLocale(lang.code);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer transition-colors text-sm w-full text-left",
                    "hover:bg-muted/50 focus:outline-none",
                    locale === lang.code
                      ? "bg-muted/40 font-medium text-foreground"
                      : "text-muted-foreground",
                  )}
                >
                  {/* Circular flag image */}
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-full overflow-hidden border border-border/30 shrink-0"
                    aria-hidden
                  >
                    <img
                      src={lang.img}
                      alt={lang.country}
                      className="w-full h-full object-cover"
                    />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-foreground text-xs font-medium">
                      {lang.label}
                    </span>
                    <span className="text-muted-foreground text-[10px]">
                      {lang.country}
                    </span>
                  </span>
                  {locale === lang.code && (
                    <span className="ml-auto text-primary text-xs">✓</span>
                  )}
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
