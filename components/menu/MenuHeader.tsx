"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Home, Microscope, Dna, LayoutGrid, MoreVertical } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MenuThemeControls } from "@/components/menu/menu-botones-generales";
import { MenuLanguageSelector } from "@/components/menu/menu-boton-lenguage";

export function MenuHeader() {
  const pathname = usePathname();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-menu2-header-bg h-[77px] flex-shrink-0 flex items-center px-4 backdrop-blur-md rounded-xl border border-menu2-header-borde shadow-sm">
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
        />
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-8">
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-menu2-header-paginas hover:text-menu2-header-paginas-hvr cursor-pointer transition-colors p-0">
              <MoreVertical className="w-5 h-5" />
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            sideOffset={8}
            className="w-auto p-4 rounded-xl shadow-xl border border-slate-200 dark:border-menu2-header-borde bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-xl flex flex-col gap-4 z-[200]"
          >
            <h3 className="font-medium text-sm text-slate-800 dark:text-white">
              Ajustes Generales
            </h3>

            <div className="flex items-center justify-between gap-4">
              <span className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.2em] uppercase">
                Apariencia
              </span>
              <MenuThemeControls />
            </div>

            <div className="border-t border-slate-100 dark:border-white/10 my-2" />

            <div className="flex items-center justify-between gap-4">
              <span className="text-menu2-derecha-txt-mayusculas text-[10px] font-medium tracking-[0.2em] uppercase">
                Idioma
              </span>
              <MenuLanguageSelector />
            </div>
          </PopoverContent>
        </Popover>
        <div className="mr-2 flex items-center justify-center min-w-[32px] min-h-[32px]">
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
