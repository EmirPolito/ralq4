"use client";

import { AnimatedHeaderMenu } from "@/components/menu/headerMenu";
import "../globals.css";

export default function HeaderLayout({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <>
      <AnimatedHeaderMenu /> {/* Solo un header */}
      {children}
    </>
  );
}
