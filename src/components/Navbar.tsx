"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { enlaces } from "@/data/enlaces";

export default function Navbar({ offsetTop = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const esActivo = (href: string) => {
    if (href === "/store") return pathname === "/store";
    if (href === "/puntoVenta") return pathname === "/puntoVenta";
    return false;
  };

  const cerrarMenu = () => setMobileMenuOpen(false);

  return (
    <motion.header
      className="fixed left-0 z-50 w-full border-b border-white/10 bg-[#1E3A8A]/95 text-white shadow-lg backdrop-blur-md"
      style={{ top: offsetTop }}
      initial={{ top: 0 }}
      animate={{ top: offsetTop }}
      transition={{ duration: 0.3 }}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={cerrarMenu}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 object-contain"
          />
          <h1 className="truncate text-lg font-extrabold tracking-tight sm:text-xl">
            Crédito al Instante
          </h1>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {enlaces.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                esActivo(enlace.href)
                  ? "bg-white/15 text-[#FBBF24]"
                  : "text-white/90 hover:bg-white/10 hover:text-[#FBBF24]"
              }`}
            >
              {enlace.label}
            </Link>
          ))}

          <Link
            href="/puntoVenta"
            className="ml-2 rounded-full bg-[#FBBF24] px-4 py-2 text-sm font-bold text-[#1E3A8A] shadow-sm transition hover:bg-yellow-300"
          >
            Convenios de pago
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((abierto) => !abierto)}
          className="rounded-xl p-2 text-white transition hover:bg-white/10 lg:hidden"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="border-t border-white/10 bg-[#1E3A8A] px-4 py-4 lg:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1">
              {enlaces.map((enlace) => (
                <Link
                  key={enlace.href}
                  href={enlace.href}
                  onClick={cerrarMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    esActivo(enlace.href)
                      ? "bg-white/15 text-[#FBBF24]"
                      : "text-white hover:bg-white/10 hover:text-[#FBBF24]"
                  }`}
                >
                  {enlace.label}
                </Link>
              ))}
              <Link
                href="/puntoVenta"
                onClick={cerrarMenu}
                className="mt-2 rounded-xl bg-[#FBBF24] px-4 py-3 text-center text-sm font-bold text-[#1E3A8A]"
              >
                Convenios de pago
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
