"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeControls } from "@/components/theme-controls";
import React from "react";
import { useScroll, motion } from "motion/react";
import { cn } from "@/lib/utils";

const menuItems = [
  { name: "Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
  { name: "Ayuda", href: "/ayuda" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setScrolled(latest > 0.05);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-60 w-full pt-2"
      >
        <div
          className={cn(
            "mx-auto max-w-8xl rounded-2xl px-6 transition-all duration-300 lg:px-9",
            scrolled && "bg-background/10 backdrop-blur-2xl ",
          )}
        >
          <motion.div
            key={1}
            className={cn(
              "relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6",
              scrolled && "lg:py-4",
            )}
          >
            <div className="flex w-full items-center justify-between gap-18 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:block">
                <ul className="flex gap-13 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-header-redir  hover:text-header-redir-cursor   block duration-150"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              {/* Menu items - solo visible en movil */}
              <div className="lg:hidden w-full">
                <ul className="space-y-4 text-base mb-6">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150 py-1"
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                
                {/* Separador */}
                <div className="border-t border-border/30 my-4" />
                
                {/* Controles y botones en movil - layout vertical */}
                <div className="flex flex-col gap-4">
                  {/* Theme Controls */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Preferencias</span>
                    <ThemeControls className="" />
                  </div>
                  
                  {/* Botones de auth */}
                  <div className="flex items-center justify-between gap-3 pt-2">
                    <Button
                      asChild
                      size="sm"
                      className="cursor-pointer text-header-login-txt bg-transparent hover:bg-transparent focus:outline-none shadow-none px-0 py-0"
                    >
                      <Link href="/login">
                        <span>Iniciar sesion</span>
                      </Link>
                    </Button>

                    <Button
                      asChild
                      size="sm"
                      className="cursor-pointer rounded-full px-5 py-2.5 bg-header-regis-bg text-header-regis-txt hover:bg-header-regis-bg"
                    >
                      <Link href="/registro">
                        <span>Registrarse</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Desktop layout */}
              <div className="hidden lg:flex w-full flex-wrap items-center justify-end gap-6 lg:w-fit">
                <ThemeControls className="mr-8 lg:mr-12" />

                <Button
                  asChild
                  size="sm"
                  className="cursor-pointer text-header-login-txt bg-transparent hover:bg-transparent focus:outline-none shadow-none px-0 py-0"
                >
                  <Link href="/login">
                    <span>Iniciar sesion</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  size="sm"
                  className="cursor-pointer rounded-full px-5 py-5 bg-header-regis-bg text-header-regis-txt hover:bg-header-regis-bg"
                >
                  <Link href="/registro">
                    <span>Registrarse</span>
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
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
