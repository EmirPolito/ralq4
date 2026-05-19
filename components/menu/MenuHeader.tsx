"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Home, Microscope, Dna, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { ThemeControls } from "@/components/botones-generales";
import { LanguageSelector } from "@/components/boton-lenguage";

export function MenuHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

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
      <nav className="flex items-center gap-6 p-1 ml-auto mr-20">
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
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-6 mr-4">
          {/* Controles de Apariencia (Modos y Colores) */}
          <ThemeControls hideMotion={true} isMenu={true} />

          {/* Selector de Idioma */}
          <LanguageSelector />
        </div>

        {/* Separador vertical | */}
        <div className="h-6 w-px bg-slate-200 dark:bg-white/10" />

        {/* Botón de usuario */}
        <div className="ml-4 mr-2 flex items-center justify-center min-w-[32px] min-h-[32px]">
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
                        minWidth: "341px",
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
