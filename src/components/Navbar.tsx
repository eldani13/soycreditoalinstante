"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-[#1E3A8A] to-[#1E40AF] text-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
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
        </div>

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#quienes" className="hover:text-[#FBBF24] transition-colors">
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
          <a href="#alianza" className="hover:text-[#FBBF24] transition-colors">
            Alianza
          </a>
          <a
            href="#contacto"
            className="hover:text-[#FBBF24] transition-colors"
          >
            Contacto
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Bars3Icon className="h-6 w-6 text-white" />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E40AF] text-white py-4 px-6 space-y-4">
          <a
            href="#quienes"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Quiénes somos
          </a>
          <a
            href="#objetivos"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Objetivos
          </a>
          <a
            href="#presencia"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Presencia
          </a>
          <a
            href="#alianza"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Alianza
          </a>
          <a
            href="#contacto"
            className="block hover:text-[#FBBF24] transition-colors"
          >
            Contacto
          </a>
        </div>
      )}
    </header>
  );
}
