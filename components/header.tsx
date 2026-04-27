"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeControls } from "@/components/theme-controls";
import { LanguageSelector } from "@/components/language-selector";
import React from "react";
import { useScroll, motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const HeroHeader = () => {
  const t = useTranslations("nav");
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollY } = useScroll();

  const menuItems = [
    { name: t("nosotros"), href: "/nosotros" },
    { name: t("contacto"), href: "/contacto" },
    { name: t("ayuda"), href: "/ayuda" },
  ];

  React.useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 10);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Bloquear scroll cuando el menú está abierto
  React.useEffect(() => {
    if (menuState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuState]);

  return (
    <header>
      <nav className="fixed z-[120] w-full pt-2">
        <div
          className={cn(
            "mx-auto max-w-8xl rounded-2xl px-6 transition-all duration-300 lg:px-9",
            scrolled && !menuState && "bg-background/10 backdrop-blur-2xl",
            !scrolled &&
              !menuState &&
              "max-lg:bg-background/10 max-lg:backdrop-blur-2xl",
          )}
        >
          <div
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4",
            )}
          >
            <div className="flex w-full items-center justify-between gap-18 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="relative z-[110] flex items-center space-x-2"
              >
                <Logo />
              </Link>

              {/* Mobile: hamburger + language when open */}
              <div className="flex items-center gap-1 lg:hidden">
                {/* Language selector: only visible when menu is open */}
                {menuState && (
                  <div className="relative z-[110] mr-6">
                    <LanguageSelector isMobile />
                  </div>
                )}
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-[110] -m-2.5 -mr-4 block cursor-pointer p-2.5"
                >
                  <div className="relative size-6 flex items-center justify-center">
                    <AnimatePresence mode="wait" initial={false}>
                      {menuState ? (
                        <motion.div
                          key="close"
                          initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <X className="size-6" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="menu"
                          initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
                          animate={{ opacity: 1, rotate: 0, scale: 1 }}
                          exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <Menu className="size-6" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </div>

              <div className="hidden lg:block">
                <ul className="flex gap-13 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-header-redir hover:text-header-redir-cursor block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Desktop layout buttons */}
            <div className="hidden lg:flex w-full flex-wrap items-center justify-end gap-6 lg:w-fit">
              <LanguageSelector className="mr-4 lg:mr-6" />
              <ThemeControls className="mr-8 lg:mr-12" />

              <Button
                asChild
                size="sm"
                className="cursor-pointer text-header-login-txt bg-transparent hover:bg-transparent focus:outline-none shadow-none px-0 py-0"
              >
                <Link href="/login">
                  <span>{t("login")}</span>
                </Link>
              </Button>

              <Button
                asChild
                size="sm"
                className="cursor-pointer rounded-full px-5 py-5 bg-header-regis-bg text-header-regis-txt hover:bg-header-regis-bg"
              >
                <Link href="/registro">
                  <span>{t("register")}</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[110] bg-background lg:hidden flex flex-col"
          >
            {/* Header Area */}
            <div className="h-24 px-6 flex items-center justify-between">
              {/* Logo and X are handled by the main nav container which is z-70 */}
            </div>

            <div className="flex-1 flex flex-col px-6">
              {/* Main Links - Centered */}
              <nav className="flex flex-col space-y-12 pt-32 text-center">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuState(false)}
                      className="text-xl font-medium tracking-tight text-[var(--titulos)] hover:opacity-80 transition-colors block"
                    >
                      {item.name}
                      <div className="h-px w-15 bg-[var(--titulos)]/20 mx-auto mt-1" />
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Bottom Section - Centered and Optimized */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-auto pb-11.5 space-y-9"
              >
                {/* Theme Controls only — Language moved to top bar */}
                <div className="flex items-center justify-center gap-8 pt-29">
                  <ThemeControls isMobile={true} />
                </div>

                {/* Auth Buttons Grid - Wider and Lower */}
                <div className="grid grid-cols-2 gap-7">
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-center h-11 text-sm font-medium rounded-3xl bg-muted/0 text-[var(--titulos)] hover:bg-muted/35 transition-all"
                    onClick={() => setMenuState(false)}
                  >
                    <Link href="/login" onClick={() => setMenuState(false)}>
                      {t("login")}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    className="w-full justify-center h-11 text-sm font-medium rounded-3xl bg-header-regis-bg text-header-regis-txt hover:opacity-90 transition-all shadow-md shadow-header-regis-bg/10"
                    onClick={() => setMenuState(false)}
                  >
                    <Link href="/registro" onClick={() => setMenuState(false)}>
                      {t("register")}
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

// Con el header transparene
// "use client";
// import Link from "next/link";
// import { Logo } from "@/components/logo";
// import { Menu, X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ThemeControls } from "@/components/theme-controls";
// import React from "react";
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";

// const menuItems = [
//   { name: "Nosotros", href: "/nosotros" },
//   { name: "Contacto", href: "/contacto" },
//   { name: "Ayuda", href: "/ayuda" },
// ];

// export const HeroHeader = () => {
//   const [menuState, setMenuState] = React.useState(false);

//   return (
//     <header>
//       <nav
//         data-state={menuState && "active"}
//         className="fixed z-60 w-full pt-2"
//       >
//         <div
//           className={cn(
//             // 👇 SIEMPRE activo
//             "mx-auto max-w-8xl rounded-2xl px-6 transition-all duration-300 lg:px-9 bg-background/10 backdrop-blur-2xl",
//           )}
//         >
//           <motion.div
//             className={cn(
//               // 👇 padding fijo (ya no depende de scroll)
//               "lg:py-3.5 relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0",
//             )}
//           >
//             <div className="flex w-full items-center justify-between gap-18 lg:w-auto">
//               <Link
//                 href="/"
//                 aria-label="home"
//                 className="flex items-center space-x-2"
//               >
//                 <Logo />
//               </Link>

//               <button
//                 onClick={() => setMenuState(!menuState)}
//                 aria-label={menuState ? "Close Menu" : "Open Menu"}
//                 className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
//               >
//                 <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
//                 <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
//               </button>

//               <div className="hidden lg:block">
//                 <ul className="flex gap-13 text-sm">
//                   {menuItems.map((item, index) => (
//                     <li key={index}>
//                       <Link
//                         href={item.href}
//                         className="text-header-redir hover:text-header-redir-cursor block duration-150"
//                       >
//                         <span>{item.name}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//             <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
//               <div className="lg:hidden">
//                 <ul className="space-y-6 text-base">
//                   {menuItems.map((item, index) => (
//                     <li key={index}>
//                       <Link
//                         href={item.href}
//                         className="text-muted-foreground hover:text-accent-foreground block duration-150"
//                       >
//                         <span>{item.name}</span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <ThemeControls className="mr-0 lg:mr-2" />

//               <div className="flex w-full flex-col space-y-3 sm:flex-row sm:items-center sm:gap-3 sm:space-y-0 md:w-fit">
//                 <Button
//                   asChild
//                   size="sm"
//                   className="cursor-pointer rounded-full px-5 py-5
//                   bg-header-login-bg-2
//                   text-header-login-txt
//                   hover:bg-header-login-bg-2"
//                 >
//                   <Link href="/login">
//                     <span>Iniciar sesión</span>
//                   </Link>
//                 </Button>

//                 <Button
//                   asChild
//                   size="sm"
//                   className="cursor-pointer rounded-full px-5 py-5
//                   bg-header-regis-bg
//                   text-header-regis-txt
//                   hover:bg-header-regis-bg"
//                 >
//                   <Link href="/registro">
//                     <span>Registrarse</span>
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </nav>
//     </header>
//   );
// };
