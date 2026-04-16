"use client";

import { MenuSidebar } from "@/components/menu/layout/menu-sidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import "../globals.css";

export default function HeaderLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <MenuSidebar />
      <SidebarInset className="bg-[#fefcf8] dark:bg-[#0c0c0e]">
        <main className="w-full h-full flex-1">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
