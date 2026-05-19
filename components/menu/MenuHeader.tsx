"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Home, Microscope, Dna, LayoutGrid, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { ThemeControls } from "@/components/botones-generales";
import { LanguageSelector } from "@/components/boton-lenguage";

export function MenuHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);
  const [isHeaderMenuOpen, setIsHeaderMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-menu2-header-bg h-[77px] flex-shrink-0 flex items-center px-4 backdrop-blur-md rounded-xl border border-menu2-header-borde shadow-sm relative z-[100]">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <span className="bg font-bold lg:inline-block">
          {/* Logo claro */}
          <img
            src="/logos/ralq-verde.png"
            alt="RALQ logo"
            className="px-1 block h-10 w-auto dark:hidden -mt-1"
          />

          {/* Logo oscuro */}
          <img
            src="/logos/ralq-blanco.png"
            alt="RALQ logo"
            className="px-1 hidden h-10 w-auto dark:block -mt-1"
          />
        </span>
      </Link>

      {/* Menu Items - Shifted slightly left from the right edge */}
      <nav className="hidden lg:flex items-center gap-6 p-1 ml-auto mr-20">
        {/* 
        <NavItem
          icon={<Home className="w-4 h-4" />}
          label="Laboratorio"
          href="/menu/laboratorio"
          active={pathname === "/menu/laboratorio"}
        />
        <NavItem
          icon={<Microscope className="w-4 h-4" />}
          label="Instrumentos"
          href="/menu/instrumentos"
          active={pathname === "/menu/instrumentos"}
        />
        <NavItem
          icon={<Dna className="w-4 h-4" />}
          label="Moleculas"
          href="/menu/moleculas"
          active={pathname === "/menu/moleculas"}
        />
        <NavItem
          icon={<LayoutGrid className="w-4 h-4" />}
          label="Tabla periódica"
          href="/menu/tabla"
          active={pathname === "/menu/tabla"}
        /> */}
      </nav>

      {/* Right Actions */}
      <div className="ml-auto lg:ml-0 flex items-center gap-1 sm:gap-2">
        {/* Contenedor relativo para alinear la tarjeta perfectamente con la hamburguesa */}
        <div className="relative flex items-center">
          {/* Controles: En desktop se muestran inline; en móvil se muestran en formato vertical debajo de la hamburguesa */}
          <div className={cn(
            "lg:flex lg:items-center lg:gap-6 lg:mr-4",
            isHeaderMenuOpen 
              ? "flex flex-col absolute right-[-6px] top-[48px] bg-menu2-header-bg py-4 px-3 rounded-xl border border-menu2-header-borde shadow-lg gap-6 items-center scale-90 z-[120]" 
              : "hidden lg:flex"
          )}>
            {/* Controles de Apariencia (Modos y Colores) */}
            <ThemeControls 
              hideMotion={true} 
              isMenu={true} 
              isMobile={isHeaderMenuOpen}
              className={isHeaderMenuOpen ? "!flex-col !gap-6" : ""} 
            />

            {/* Selector de Idioma */}
            <LanguageSelector isMobile={isHeaderMenuOpen} />
          </div>

          {/* Botón de Hamburguesa para pantallas móviles */}
          <button
            onClick={() => setIsHeaderMenuOpen(!isHeaderMenuOpen)}
            className="lg:hidden flex items-center justify-center p-2 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-white/5 transition-colors mr-2 cursor-pointer z-[120]"
            title="Menú de opciones"
          >
            {isHeaderMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Separador vertical | */}
        <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />

        {/* Botón de usuario */}
        <div className="ml-2 sm:ml-4 mr-1 sm:mr-2 flex items-center justify-center min-w-[32px] min-h-[32px]">
          {!mounted ? (
            <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-white/10 animate-pulse" />
          ) : (
            <>
              <ClerkLoading>
                <div className="w-7 h-7 rounded-full bg-slate-200 dark:bg-white/10 animate-pulse" />
              </ClerkLoading>
              <ClerkLoaded>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonPopoverCard: {
                        width: "280px",
                        minWidth: "min(341px, 90vw)",
                        maxWidth: "280px",
                      },
                      userPreviewSecondaryIdentifier: {
                        maxWidth: "170px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      },
                      userPreviewMainIdentifier: {
                        maxWidth: "170px",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      },
                    },
                  }}
                />
              </ClerkLoaded>
            </>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .cl-userButtonPopoverCard {
            margin-right: 28px !important;
          }
        }
      `}</style>
    </header>
  );
}

function NavItem({ icon, label, href, active }: any) {
  return (
    <Link href={href}>
      <button
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 transition-all text-[13px] cursor-pointer rounded-lg relative",
          active
            ? "text-menu2-header-paginas-hvr"
            : "text-menu2-header-paginas hover:text-menu2-header-paginas-hvr",
        )}
      >
        {icon}
        {/* Invisible bold text to reserve space and prevent jitter */}
        <div className="flex flex-col items-center">
          <span
            className={cn(
              "transition-all duration-200",
              active ? "font-semibold" : "font-normal",
            )}
          >
            {label}
          </span>
          {/* Reserved space for bold text (now semibold) */}
          <span
            className="font-semibold h-0 overflow-hidden invisible select-none pointer-events-none"
            aria-hidden="true"
          >
            {label}
          </span>
        </div>
      </button>
    </Link>
  );
}
