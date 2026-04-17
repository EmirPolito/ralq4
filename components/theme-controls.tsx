"use client";

import * as React from "react";
import { Moon, Sun, Eye, Palette } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
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
  useReducedMotion,
} from "@/hooks/use-reduced-motion";

export function ThemeControls({
  className,
  isMobile,
}: {
  className?: string;
  isMobile?: boolean;
}) {
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
          "flex items-center gap-5",
          isMobile ? "w-full justify-center gap-14" : "",
          className,
        )}
      >
        {/* Theme Mode Dropdown / Cycle */}
        {isMobile ? (
          <button
            type="button"
            onClick={handleThemeCycle}
            className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md group"
          >
            {colorblind ? (
              <Eye
                className="h-6 w-6 transition-all"
                style={{ color: currentThemeColor }}
              />
            ) : (
              <>
                <Sun
                  className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                  style={{ color: currentThemeColor }}
                />
                <Moon
                  className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                  style={{ color: currentThemeColor }}
                />
              </>
            )}
          </button>
        ) : (
          <DropdownMenu modal={false}>
            <Tooltip>
              <TooltipTrigger asChild>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    style={{ backgroundColor: "transparent" }}
                    className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md transition-colors hover:!bg-transparent dark:hover:!bg-transparent focus:outline-none focus:ring-0 focus-visible:ring-0 outline-none group"
                  >
                    {colorblind ? (
                      <Eye
                        className="h-5 w-5 transition-all group-hover:opacity-80"
                        style={{ color: currentThemeColor }}
                      />
                    ) : (
                      <>
                        <Sun
                          className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:opacity-80"
                          style={{ color: currentThemeColor }}
                        />
                        <Moon
                          className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:opacity-80"
                          style={{ color: currentThemeColor }}
                        />
                      </>
                    )}
                    <span className="sr-only">Cambiar modo</span>
                  </button>
                </DropdownMenuTrigger>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={-6}
                avoidCollisions={false}
              >
                <p>Cambiar modo de visualización</p>
              </TooltipContent>
            </Tooltip>
            <DropdownMenuContent
              align="end"
              className="z-[100] rounded-2xl w-56 md:w-auto md:bg-popover md:backdrop-blur-none md:shadow-md md:border-border border-border/50 bg-popover/95 backdrop-blur-xl shadow-2xl"
            >
              <DropdownMenuLabel>Modos</DropdownMenuLabel>
              <DropdownMenuSeparator />

              <DropdownMenuItem
                onClick={() => {
                  setTheme("light");
                  setColorblind(false);
                  localStorage.setItem("colorblind", "false");
                  applyColorblindMode(false);
                }}
                className="cursor-pointer hover:bg-muted/50 focus:bg-muted/50 py-3 md:py-1.5 md:hover:bg-transparent md:focus:bg-transparent md:hover:text-foreground md:focus:text-foreground"
              >
                <Sun className="mr-2 h-5 w-5" />
                <span>Claro</span>
                {resolvedTheme === "light" && !colorblind && (
                  <span className="ml-auto text-primary">*</span>
                )}
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  setTheme("dark");
                  setColorblind(false);
                  localStorage.setItem("colorblind", "false");
                  applyColorblindMode(false);
                }}
                className="cursor-pointer hover:bg-muted/50 focus:bg-muted/50 py-3 md:py-1.5 md:hover:bg-transparent md:focus:bg-transparent md:hover:text-foreground md:focus:text-foreground"
              >
                <Moon className="mr-2 h-5 w-5" />
                <span>Oscuro</span>
                {resolvedTheme === "dark" && (
                  <span className="ml-auto text-primary">*</span>
                )}
              </DropdownMenuItem>

              <DropdownMenuItem
                onClick={() => {
                  if (!colorblind) {
                    setColorblind(true);
                    localStorage.setItem("colorblind", "true");
                    applyColorblindMode(true);
                    setTheme("light");
                    // Resetear color a por defecto en modo daltónico
                    setPrimaryColor("default");
                    localStorage.setItem("primaryColor", "default");
                    applyColorTheme("default");
                  }
                }}
                className="cursor-pointer hover:bg-muted/50 focus:bg-muted/50 py-3 md:py-1.5 md:hover:bg-transparent md:focus:bg-transparent md:hover:text-foreground md:focus:text-foreground"
              >
                <Eye className="mr-2 h-5 w-5" />
                <span>Daltonico</span>
                {colorblind && <span className="ml-auto text-primary">*</span>}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Color Selector Popover / Cycle */}
        {isMobile ? (
          <button
            type="button"
            onClick={handleColorCycle}
            className="h-9 w-9 cursor-pointer flex items-center justify-center rounded-md"
          >
            <Palette className="h-6 w-6" style={{ color: currentThemeColor }} />
          </button>
        ) : (
          <Popover
            open={isPaletteOpen}
            onOpenChange={setIsPaletteOpen}
            modal={false}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-9 w-9 cursor-pointer flex items-center justify-center hover:bg-transparent dark:hover:bg-transparent focus:ring-0 focus:outline-none focus-visible:ring-0 focus-visible:border-transparent outline-none"
                  >
                    <Palette
                      className="h-5 w-5"
                      style={{ color: currentThemeColor }}
                    />
                    <span className="sr-only">Seleccionar color</span>
                  </Button>
                </PopoverTrigger>
              </TooltipTrigger>
              <TooltipContent
                side="top"
                sideOffset={-6}
                avoidCollisions={false}
              >
                <p>Personalizar colores del sitio</p>
              </TooltipContent>
            </Tooltip>
            <PopoverContent
              className="rounded-2xl w-56 md:w-44 z-[100] p-0 overflow-hidden border-border/50 bg-popover/95 backdrop-blur-xl shadow-2xl"
              align="end"
              sideOffset={8}
            >
              <div className="px-4 py-3 pb-0">
                <p className="text-sm font-medium text-foreground mb-2">
                  Selecciona un color
                </p>
              </div>
              <Separator />
              <div className="p-3 pt-2">
                <div className="flex flex-col gap-1">
                  {colorOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleColorChange(option.value)}
                      className={`flex items-center gap-3 w-full px-3 py-2.5 md:py-1.5 rounded-md cursor-pointer hover:bg-muted/50 focus:bg-muted/50 md:hover:bg-transparent md:focus:bg-transparent focus:outline-none outline-none ${
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
                      <span className="text-sm text-foreground">
                        {option.name}
                      </span>
                      {primaryColor === option.value && (
                        <span className="ml-auto text-primary text-xs">*</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        )}

        {/* Reduced Motion Toggle tipo switch */}
        <div className={cn(isMobile ? "flex items-center justify-center" : "")}>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                className={cn(
                  "relative inline-flex h-6 w-12 items-center rounded-full cursor-pointer transition-colors focus:outline-none outline-none focus-visible:ring-0 focus-visible:outline-none",
                  isMobile ? "bg-muted/20" : "bg-muted hover:bg-muted/80",
                )}
                onClick={toggleReducedMotion}
                aria-label="Reducir animaciones"
              >
                <span
                  className={`inline-block h-4.5 w-4.5 transform rounded-full transition-transform ${
                    reducedMotion
                      ? "translate-x-6 bg-muted-foreground"
                      : "translate-x-1"
                  }`}
                  style={{
                    backgroundColor: reducedMotion
                      ? undefined
                      : toggleCircleColor,
                  }}
                />
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" sideOffset={2} avoidCollisions={false}>
              <p>Activar/Desactivar animaciones</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
