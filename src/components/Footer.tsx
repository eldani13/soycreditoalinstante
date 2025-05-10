import { LinkIcon, GlobeAltIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";  

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1E40AF] to-[#1E3A8A] text-white py-14 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <div>
          <div className="flex justify-center items-center gap-2">
            <Image src="/logo.png" alt="logo" width={45} height={45} />
            <h2 className="text-2xl font-bold">Crédito al Instante</h2>
          </div>
          <p className="text-gray-300 mt-2 max-w-md mx-auto">
            Te damos acceso rápido y seguro a soluciones financieras desde donde
            estés.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-sm text-gray-300">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" passHref>
                  <a className="hover:text-[#FBBF24]">Inicio</a>
                </Link>
              </li>
              <li>
                <Link href="/store" passHref>
                  <a className="hover:text-[#FBBF24]">Catalogo</a>
                </Link>
              </li>
              <li>
                <Link href="/puntoVenta" passHref>
                  <a className="hover:text-[#FBBF24]">Puntos de venta</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Contáctanos
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-center items-center gap-2">
                <PhoneIcon className="w-5 h-5" /> +58 412 123 4567
              </li>
              <li className="flex justify-center items-center gap-2">
                <EnvelopeIcon className="w-5 h-5" />{" "}
                contacto@creditoinstante.com
              </li>
              <li className="flex justify-center items-center gap-2">
                <MapPinIcon className="w-5 h-5" /> Colombia, Colombia
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkIcon className="w-6 h-6 hover:text-[#FBBF24]" />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Web"
              >
                <GlobeAltIcon className="w-6 h-6 hover:text-[#FBBF24]" />
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Teléfono"
              >
                <PhoneIcon className="w-6 h-6 hover:text-[#FBBF24]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-6 text-xs text-gray-400">
          <p>© 2025 Crédito al Instante. Todos los derechos reservados.</p>
          <p className="mt-1">Desarrollado por The D&D</p>
        </div>
      </div>
    </footer>
  );
}
