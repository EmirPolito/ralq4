"use client";

import * as React from "react";
import { Moon, Sun, Eye, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const colorOptions = [
  { name: "Por defecto", value: "default", color: "" },
  { name: "Azul", value: "blue", color: "#3b82f6" },
  { name: "Morado", value: "purple", color: "#8b5cf6" },
  { name: "Rojo", value: "red", color: "#ef4444" },
  { name: "Naranja", value: "orange", color: "#f97316" },
  { name: "Rosa", value: "pink", color: "#ec003f" },
  { name: "Verde", value: "green", color: "#15cb24" },
];

// Custom event to communicate reduced motion state to other components
export const REDUCED_MOTION_EVENT = "reducedMotionChange";

export function useReducedMotion() {
  const [reducedMotion, setReducedMotion] = React.useState(false);

  React.useEffect(() => {
    setReducedMotion(localStorage.getItem("reducedMotion") === "true");

    const handler = (e: CustomEvent) => {
      setReducedMotion(e.detail.reducedMotion);
    };
    window.addEventListener(REDUCED_MOTION_EVENT, handler as EventListener);
    return () =>
      window.removeEventListener(
        REDUCED_MOTION_EVENT,
        handler as EventListener,
      );
  }, []);

  return reducedMotion;
}

export function ThemeControls() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [colorblind, setColorblind] = React.useState(false);
  const [reducedMotion, setReducedMotion] = React.useState(false);
  const [primaryColor, setPrimaryColor] = React.useState("default");

  React.useEffect(() => {
    setMounted(true);
    const savedColorblind = localStorage.getItem("colorblind") === "true";
    const savedReducedMotion = localStorage.getItem("reducedMotion") === "true";
    const savedColor = localStorage.getItem("primaryColor") || "default";

    setColorblind(savedColorblind);
    setReducedMotion(savedReducedMotion);
    setPrimaryColor(savedColor);

    applyColorblindMode(savedColorblind);
    applyReducedMotion(savedReducedMotion);
    applyColorTheme(savedColor);
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
  };

  const toggleReducedMotion = () => {
    const newValue = !reducedMotion;
    setReducedMotion(newValue);
    localStorage.setItem("reducedMotion", String(newValue));
    applyReducedMotion(newValue);
  };

  const handleColorChange = (color: string) => {
    setPrimaryColor(color);
    localStorage.setItem("primaryColor", color);
    applyColorTheme(color);
  };

  if (!mounted) return null;

  const currentTheme = resolvedTheme || theme;

  return (
    <div className="flex items-center gap-2 pl-0">
      {/* Theme Mode Dropdown */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            type="button"
            style={{ backgroundColor: 'transparent' }}
            className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md transition-colors hover:!bg-transparent dark:hover:!bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0 outline-none group"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 !text-foreground group-hover:!text-foreground" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 !text-foreground group-hover:!text-foreground" />
            <span className="sr-only">Cambiar modo</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="z-[100] rounded-2xl ">
          <DropdownMenuLabel>Modo de visualización</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className="cursor-pointer hover:bg-transparent focus:bg-transparent hover:text-foreground focus:text-foreground group"
          >
            <Sun className="mr-2 h-5 w-5" />
            <span>Claro</span>
            {currentTheme === "light" && !colorblind && (
              <span className="ml-auto text-primary">*</span>
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className="cursor-pointer hover:bg-transparent focus:bg-transparent hover:text-foreground focus:text-foreground group"
          >
            <Moon className="mr-2 h-5 w-5" />
            <span>Oscuro</span>
            {currentTheme === "dark" && !colorblind && (
              <span className="ml-auto text-primary">*</span>
            )}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={toggleColorblind}
            className="cursor-pointer hover:bg-transparent focus:bg-transparent hover:text-foreground focus:text-foreground group"
          >
            <Eye className="mr-2 h-5 w-5" />
            <span>Modo daltonico</span>
            {colorblind && <span className="ml-auto text-primary">*</span>}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {/* Color Selector Popover */}
      <Popover modal={false}>
        <PopoverTrigger asChild>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-9 w-9 cursor-pointer flex items-center justify-center hover:bg-transparent dark:hover:bg-transparent focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:border-transparent outline-none"
          >
            <Palette
              className="h-5 w-5"
              style={{
                color:
                  colorOptions.find((c) => c.value === primaryColor)?.color ||
                  "#60806b",
              }}
            />
            <span className="sr-only">Seleccionar color</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="rounded-2xl w-42 z-[100]" align="end">
          <div className="space-y-2">
            <p className="text-sm font-medium text-foreground mb-3">
              Selecciona un color
            </p>
            <div className="flex flex-col gap-1">
              {colorOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleColorChange(option.value)}
                  className={`flex items-center gap-3 w-full px-2 py-1.5 rounded-md cursor-pointer hover:bg-transparent focus:bg-transparent focus:outline-none outline-none ${
                    primaryColor === option.value ? "" : ""
                  }`}
                  aria-label={`Color ${option.name}`}
                >
                  <div
                    className={`h-3 w-3 rounded-full shrink-0 ${
                      primaryColor === option.value
                        ? "ring-1 ring-offset-1 ring-foreground"
                        : ""
                    }`}
                    style={{ backgroundColor: option.color }}
                  />
                  <span className="text-sm text-foreground">{option.name}</span>
                  {primaryColor === option.value && (
                    <span className="ml-auto text-primary text-xs">*</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
      {/* Reduced Motion Toggle tipo switch */}
      <button
        className="relative inline-flex h-6 w-12 items-center rounded-full bg-muted cursor-pointer transition-colors focus:outline-none outline-none focus-visible:ring-0 focus-visible:outline-none hover:bg-muted dark:hover:bg-muted"
        onClick={toggleReducedMotion}
        aria-label="Reducir animaciones"
      >
        <span
          className={`inline-block h-4.5 w-4.5 transform rounded-full transition-transform ${
            reducedMotion
              ? "translate-x-6 bg-muted-foreground"
              : "translate-x-1 bg-primary"
          }`}
        />
      </button>
    </div>
  );
}
{
  /* Reduced Motion Toggle tipo switch */
}
{
  /* <button
        className="relative inline-flex h-6 w-12 items-center rounded-full bg-muted cursor-pointer transition-colors focus:outline-none outline-none focus-visible:ring-0 focus-visible:outline-none"
        onClick={toggleReducedMotion}
        aria-label="Reducir animaciones"
      >
        <span
          className={`inline-block h-4.5 w-4.5 transform rounded-full transition-transform ${
            reducedMotion ? "translate-x-6 bg-muted-foreground" : "translate-x-1 bg-primary"
          }`}
        />
      </button>
    </div>
  )
} */
}
