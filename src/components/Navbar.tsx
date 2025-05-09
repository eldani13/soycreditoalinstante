"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar({ offsetTop = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isStorePage = pathname === "/store";

  return (
    <motion.header
      className={`fixed left-0 w-full z-50 bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] text-white shadow-lg`}
      style={{ top: offsetTop }}
      initial={{ top: 0 }}
      animate={{ top: offsetTop }}
      transition={{ duration: 0.3 }}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={42}
            height={42}
            className="w-auto"
          />
          <h1 className="text-2xl font-bold text-white tracking-wide">
            Crédito al Instante
          </h1>
        </Link>

        {!isStorePage && (
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <a
              href="#quienes"
              className="hover:text-[#FBBF24] transition-colors"
            >
              Quiénes somos
            </a>
            <a
              href="#objetivos"
              className="hover:text-[#FBBF24] transition-colors"
            >
              Objetivos
            </a>
            <a
              href="#presencia"
              className="hover:text-[#FBBF24] transition-colors"
            >
              Presencia
            </a>
            <a
              href="#alianza"
              className="hover:text-[#FBBF24] transition-colors"
            >
              Alianza
            </a>
            <a
              href="#contacto"
              className="hover:text-[#FBBF24] transition-colors"
            >
              Contacto
            </a>
            <Link
              href="/store"
              className="hover:text-[#FBBF24] transition-colors"
            >
              Catalogo
            </Link>

            <Link
              href="/puntoVenta"
              className="bg-[#FBBF24] text-[#1E3A8A] font-semibold px-4 py-2 rounded-full shadow-lg hover:bg-yellow-400 transition-colors"
            >
              Convenios de pago
            </Link>
          </div>
        )}

        {!isStorePage && (
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>
          </div>
        )}
      </nav>

      {!isStorePage && mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-[#1E40AF] text-white py-6 px-6 space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-lg font-bold border-b border-white pb-2">Menú</p>

          <a
            href="#credito"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Solicita tu crédito
          </a>
          <a
            href="#puntos"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Puntos de venta
          </a>
          <a
            href="#quienes"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Nosotros
          </a>

          <Link
            href="/store"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Catalogo
          </Link>

          <div className="pt-2 border-t border-white flex items-center gap-2">
            <Image src="/colombia.png" alt="Colombia" width={16} height={16} className="h-4 w-auto" />
          </div>

          <Link
            href="/puntoVenta"
            className="block text-center bg-[#FBBF24] text-[#1E3A8A] font-semibold px-4 py-2 rounded-full shadow-md hover:bg-yellow-400 transition-colors"
          >
            CONVENIOS DE PAGO
          </Link>
        </motion.div>
      )}
    </motion.header>
  );
}
