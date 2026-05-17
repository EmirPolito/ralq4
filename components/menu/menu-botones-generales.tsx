"use client";

import * as React from "react";
import { Moon, Sun, Eye, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import {
  TooltipProvider,
} from "@/components/ui/tooltip";

const colorOptions = [
  { name: "Por defecto", value: "default", color: "" },
  { name: "Azul", value: "blue", color: "#155dfc" },
  { name: "Morado", value: "purple", color: "#a800b7" },
  { name: "Amarillo", value: "yellow", color: "#fdc700" },
  { name: "Naranja", value: "orange", color: "#f97316" },
  { name: "Rosa", value: "pink", color: "#ec003f" },
  { name: "Verde", value: "green", color: "#5ea500" },
];

import {
  REDUCED_MOTION_EVENT,
} from "@/hooks/use-reduced-motion";

export function MenuThemeControls({
  className,
}: {
  className?: string;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [colorblind, setColorblind] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [primaryColor, setPrimaryColor] = React.useState("default");
  const t = useTranslations("themeControls");

  React.useEffect(() => {
    setMounted(true);
    const savedColorblind = localStorage.getItem("colorblind") === "true";
    const savedReducedMotion = localStorage.getItem("reducedMotion") === "true";
    const savedColor = localStorage.getItem("primaryColor") || "default";

    setColorblind(savedColorblind);
    setReducedMotion(savedReducedMotion);

    // Si el modo daltónico está activo, forzar color por defecto
    if (savedColorblind) {
      setPrimaryColor("default");
      localStorage.setItem("primaryColor", "default");
      applyColorTheme("default");
    } else {
      setPrimaryColor(savedColor);
      applyColorTheme(savedColor);
    }

    applyColorblindMode(savedColorblind);
    applyReducedMotion(savedReducedMotion);
  }, []);

  const applyColorblindMode = (enabled: boolean) => {
    const html = document.documentElement;
    enabled
      ? html.classList.add("colorblind")
      : html.classList.remove("colorblind");
  };

  const applyReducedMotion = (enabled: boolean) => {
    const html = document.documentElement;
    enabled
      ? html.classList.add("reduce-motion")
      : html.classList.remove("reduce-motion");
    window.dispatchEvent(
      new CustomEvent(REDUCED_MOTION_EVENT, {
        detail: { reducedMotion: enabled },
      }),
    );
  };

  const applyColorTheme = (color: string) => {
    if (color === "default")
      document.documentElement.removeAttribute("data-color");
    else document.documentElement.setAttribute("data-color", color);
  };

  const toggleColorblind = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newValue = !colorblind;
    setColorblind(newValue);
    localStorage.setItem("colorblind", String(newValue));
    applyColorblindMode(newValue);

    // Si se activa el modo daltónico, forzar el tema claro y color por defecto
    if (newValue) {
      setTheme("light");
      setPrimaryColor("default");
      localStorage.setItem("primaryColor", "default");
      applyColorTheme("default");
    }
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem("reducedMotion", String(newValue));
    applyReducedMotion(newValue);
  };

  const [isPaletteOpen, setIsPaletteOpen] = React.useState(false);

  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
    localStorage.setItem("primaryColor", color);
    applyColorTheme(color);
    setIsPaletteOpen(false);
  };

  // Ciclar entre temas (Claro -> Oscuro -> Daltonico)
  const handleThemeCycle = () => {
    if (colorblind) {
      // De Daltonico a Claro
      setColorblind(false);
      localStorage.setItem("colorblind", "false");
      applyColorblindMode(false);
      setTheme("light");
    } else if (resolvedTheme === "light") {
      // De Claro a Oscuro
      setTheme("dark");
    } else {
      // De Oscuro a Daltonico
      setTheme("light");
      setColorblind(true);
      localStorage.setItem("colorblind", "true");
      applyColorblindMode(true);
      setPrimaryColor("default");
      localStorage.setItem("primaryColor", "default");
      applyColorTheme("default");
    }
  };

  // Ciclar entre colores
  const handleColorCycle = () => {
    const currentIndex = colorOptions.findIndex(
      (c) => c.value === primaryColor,
    );
    const nextIndex = (currentIndex + 1) % colorOptions.length;
    handleColorChange(colorOptions[nextIndex].value);
  };

  const currentThemeColor = React.useMemo(() => {
    if (primaryColor !== "default") {
      return (
        colorOptions.find((c) => c.value === primaryColor)?.color ||
        "currentColor"
      );
    }
    return resolvedTheme === "dark" ? "#ffffff" : "#000000";
  }, [primaryColor, resolvedTheme]);

  const toggleCircleColor = React.useMemo(() => {
    if (primaryColor !== "default") {
      return (
        colorOptions.find((c) => c.value === primaryColor)?.color || "#155dfc"
      );
    }
    return resolvedTheme === "dark" ? "#ffffff" : "#155dfc";
  }, [primaryColor, resolvedTheme]);

  if (!mounted) return null;

  return (
    <TooltipProvider delayDuration={400}>
      <div
        className={cn(
          "flex items-center w-full justify-center gap-5",
          className,
        )}
      >
        <div className="relative flex flex-col items-center">
            <button
              type="button"
              onClick={handleThemeCycle}
              className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md group mt-1"
            >
              {colorblind ? (
                <Eye
                  className="transition-all h-4 w-4"
                  style={{ color: currentThemeColor }}
                />
              ) : (
                <>
                  <Sun
                    className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 h-4 w-4"
                    style={{ color: currentThemeColor }}
                  />
                  <Moon
                    className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 h-4 w-4"
                    style={{ color: currentThemeColor }}
                  />
                </>
              )}
            </button>
          </div>

        {/* Color Selector Popover / Cycle */}
        <div className="relative flex flex-col items-center">
            <button
              type="button"
              onClick={handleColorCycle}
              className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md mt-1"
            >
              <Palette
                className="h-4 w-4"
                style={{ color: currentThemeColor }}
              />
            </button>
          </div>

        {/* Reduced Motion Toggle tipo switch */}
        <div className="flex flex-col items-center relative">
          <button
            className={cn(
              "relative inline-flex h-5 w-10 items-center rounded-full cursor-pointer transition-colors focus:outline-none outline-none focus-visible:ring-0 focus-visible:outline-none",
              "bg-muted/75 mt-1",
            )}
            onClick={toggleReducedMotion}
            aria-label="Reducir animaciones"
          >
            <span
              className={`inline-block h-3.5 w-3.5 transform rounded-full transition-transform ${
                reducedMotion
                  ? "translate-x-[22px] bg-muted-foreground"
                  : "translate-x-0.5"
              }`}
              style={{
                backgroundColor: reducedMotion ? undefined : toggleCircleColor,
              }}
            />
          </button>
        </div>
      </div>
    </TooltipProvider>
  );
}
