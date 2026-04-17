"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Footer() {
  return (
    <footer className="py-20 px-4 md:px-10 z-50 bg-[var(--footer-bg)] border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-13">
            <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
              {/* <div className="h-6 w-6 bg-neutral-100 border-neutral-300 border dark:bg-white rounded-md flex items-center justify-center p-1">
              </div> */}
              <span className=" bg font-bold lg:inline-block">
                {/* Logo claro */}
                <img
                  src="/logos/logo-verde.png"
                  alt="RALQ logo"
                  className="h-10 w-auto dark:hidden"
                />

                {/* Logo oscuro */}
                <img
                  src="/logos/logo-blanco.png"
                  alt="RALQ logo"
                  className="px-1 hidden h-10 w-auto dark:block"
                />
              </span>
            </Link>

            <h1 className="text-footer-txt mt-1.5 px-1">
              Realidad Aumentada para Laboratorios de Quimica.
              {/* Desarrollado por{" "}
              <span className="text-footer-link gap-2">
                <Link
                  className="hover:underline"
                  href="https://x.com/emirpolito"
                >
                  @emirpolito
                </Link>
                <span>{"  "}</span>
                <Link
                  href="https://linkedin.com/in/itzamanjain"
                  className="hover:underline"
                >
                  @irvingstbn
                </Link>
                <span>{" & "}</span>

                <Link
                  href="https://linkedin.com/in/itzamanjain"
                  className="hover:underline"
                >
                  @cristiandnl
                </Link>
              </span> */}
            </h1>

            <p className="text-footer-derechos mt-1 px-1">
              © {new Date().getFullYear()} RALQ. Todos los derechos reservados.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-footer-ttl font-semibold mb-4">Paginas</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/nosotros"
                    className="text-footer-pag hover:text-footer-pag-hov"
                  >
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="text-footer-pag hover:text-footer-pag-hov"
                  >
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ayuda"
                    className="text-footer-pag hover:text-footer-pag-hov"
                  >
                    Ayuda
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-footer-ttl font-semibold mb-4">Paginas</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61563746413453"
                    className="text-footer-pag hover:text-footer-pag-hov"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/ralq.utsv?igsh=Z256dmRoOXY3ZDg2"
                    className="text-footer-pag hover:text-footer-pag-hov"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/arihantcodes"
                    className="text-footer-pag hover:text-footer-pag-hov"
                  >
                    Linkedln
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-footer-ttl font-semibold mb-4">Paginas</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-footer-pag hover:text-footer-pag-hov"
                  >
                    Politica de privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="text-footer-pag hover:text-footer-pag-hov"
                  >
                    Terminos y servicios
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex mt-9.5 items-center justify-center">
          <h1
            className="bg-clip-text text-center text-3xl md:text-5xl lg:text-[14rem] font-bold tracking-widest text-transparent bg-gradient-to-b from-footer-ralq to-footer-ralq select-none"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 70%, transparent)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent)",
            }}
          >
            RALQ
          </h1>
        </div>
      </div>
    </footer>
  );
}
