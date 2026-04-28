"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { UserButton } from "@clerk/nextjs";
import { Home, FlaskConical, Dna, LayoutGrid } from "lucide-react";
import { useState, useEffect } from "react";
import { ThemeControls } from "@/components/theme-controls";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navItems = [
  { name: "Inicio", href: "/menu", icon: Home },
  { name: "Instrumentos", href: "/menu/instrumentos", icon: FlaskConical },
  { name: "Moléculas", href: "/menu/moleculas", icon: Dna },
  { name: "Tabla periódica", href: "/menu/tabla-periodica", icon: LayoutGrid },
];

export function MenuSidebar() {
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Sidebar
      collapsible="icon"
      className="border-r border-menu-lineas bg-menu-bg"
    >
      <SidebarHeader className="h-21 flex justify-center items-center relative pt-3.5 pb-2">
        <Link
          href="/menu"
          className="flex items-center justify-center w-full group-data-[state=collapsed]:hidden"
        >
          {mounted ? (
            <img
              src={
                resolvedTheme === "dark"
                  ? "/logos/logo-blanco.png"
                  : "/logos/logo-verde.png"
              }
              alt="RALQ Logo"
              className="h-12 w-auto object-contain"
            />
          ) : (
            <div className="h-12" />
          )}
        </Link>
        <SidebarTrigger className="absolute -right-3 top-[60%] -translate-y-1/2 z-50 w-6 h-6 shrink-0 flex items-center justify-center opacity-100 transition-all text-menu-mostrador hover:bg-transparent cursor-pointer" />
      </SidebarHeader>

      <SidebarContent className="py-4 px-2">
        <SidebarMenu className="gap-3">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  asChild
                  isActive={isActive}
                  tooltip={item.name}
                  className={`h-18 px-5 transition-colors duration-200 hover:bg-menu-paginas-hover data-[active=true]:bg-menu-paginas-hover ${
                    isActive
                      ? "text-menu-paginas font-bold relative"
                      : "text-menu-paginas font-medium"
                  }`}
                >
                  <Link
                    href={item.href}
                    prefetch={true}
                    className="flex items-center gap-4"
                  >
                    {/* Indicador lateral vinculado a la variable Primary */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-r-full bg-menu-apartados group-data-[state=collapsed]:w-1" />
                    )}
                    <item.icon
                      className={`w-6 h-6 shrink-0 ${isActive ? "text-menu-apartados" : "text-menu-iconos"}`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                    <span className="text-[15px]">{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-menu-lineas flex flex-col gap-5">
        {/* Controles de Animación/Color/Tema (escondidos cuando colapsa) */}
        <div className="w-full flex justify-center group-data-[state=collapsed]:hidden">
          <ThemeControls />
        </div>

        {/* Usuario */}
        <div className="flex items-center gap-1 p-2 rounded-xl transition-colors cursor-pointer w-full group-data-[state=collapsed]:justify-center">
          <UserButton
            appearance={{
              elements: {
                userButtonAvatarBox:
                  "ml-20 mr-20 shadow-sm transition-transform",
              },
            }}
          />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
