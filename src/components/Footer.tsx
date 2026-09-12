import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { enlaces } from "@/data/enlaces";
import { contacto, whatsappHref } from "@/data/contacto";

const enlacesFooter = [...enlaces, { href: "/puntoVenta", label: "Convenios de pago" }];

function IconoWhatsApp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.52 3.48A11.9 11.9 0 0012.05 0 11.96 11.96 0 000 12a11.9 11.9 0 001.65 6L0 24l6.29-1.65A11.9 11.9 0 0012.05 24C18.64 24 24 18.64 24 12c0-3.19-1.24-6.19-3.48-8.52zM12.05 22a9.88 9.88 0 01-5.19-1.46l-.37-.23-3.74.98 1-3.64-.24-.37A9.9 9.9 0 1122 12a9.88 9.88 0 01-9.95 10zm4.95-7.2c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.2-.24-.59-.48-.51-.66-.52l-.56-.01c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.48 0 1.47 1.06 2.89 1.2 3.09.15.2 2.09 3.18 5.07 4.46.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#1E3A8A] px-4 py-12 text-white sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <h2 className="text-lg font-extrabold tracking-tight sm:text-xl">
              Crédito al Instante
            </h2>
          </Link>
          <p className="mt-3 max-w-md text-sm text-white/70">
            Te damos acceso rápido y seguro a soluciones financieras desde donde
            estés.
          </p>
        </div>

        <nav
          aria-label="Navegación del pie"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-y border-white/10 py-5"
        >
          {enlacesFooter.map((enlace) => (
            <Link
              key={enlace.href}
              href={enlace.href}
              className={`text-sm transition hover:text-[#FBBF24] ${
                enlace.href === "/puntoVenta"
                  ? "font-bold text-[#FBBF24]"
                  : "font-medium text-white/80"
              }`}
            >
              {enlace.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-white/80 sm:flex-row sm:flex-wrap sm:gap-x-8">
          <a
            href={whatsappHref("Hola, quiero información de un crédito de celular.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition hover:text-[#FBBF24]"
          >
            <PhoneIcon className="h-4 w-4 shrink-0" />
            {contacto.telefonoVisible}
          </a>
          <a
            href={`mailto:${contacto.email}`}
            className="inline-flex items-center gap-2 transition hover:text-[#FBBF24]"
          >
            <EnvelopeIcon className="h-4 w-4 shrink-0" />
            {contacto.email}
          </a>
          <span className="inline-flex items-center gap-2">
            <MapPinIcon className="h-4 w-4 shrink-0" />
            La Casona, Local 4 · Madrid
          </span>
          <a
            href={whatsappHref("Hola, quiero información de un crédito de celular.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(37,211,102,0.35)] transition hover:bg-[#20bd5a]"
          >
            <IconoWhatsApp className="h-5 w-5" />
            WhatsApp
          </a>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/60">
          <p>© 2026 Crédito al Instante. Todos los derechos reservados.</p>
          <p className="mt-2">
            Desarrollado por{" "}
            <a
              href="https://www.thedid.com.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-extrabold text-[#FBBF24] underline decoration-[#FBBF24]/40 underline-offset-4 transition hover:text-yellow-300 hover:decoration-[#FBBF24]"
            >
              The D&D
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
