import { MenuHeader } from "@/components/menu/MenuHeader";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen lg:h-screen bg-menu2-bg-general font-sans flex flex-col p-4 gap-5 overflow-y-auto lg:overflow-hidden">
      {/* 1. HEADER - Persistent across navigation */}
      <MenuHeader />

      {/* 2. MAIN AREA - Page content */}
      {children}
    </div>
  );
}
