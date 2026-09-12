"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  IdentificationIcon,
  BanknotesIcon,
  MapPinIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const datosEfecty = [
  {
    etiqueta: "Nombre del convenio",
    valor: "KREDIYA INTEGRACIÓN",
  },
  {
    etiqueta: "Número de convenio",
    valor: "113153",
  },
];

const requisitos = [
  {
    icono: IdentificationIcon,
    texto: "Debes presentar tu cédula de ciudadanía.",
  },
  {
    icono: BanknotesIcon,
    texto: "Pagos desde $20.000 hasta $1.000.000 COP.",
  },
  {
    icono: MapPinIcon,
    texto: "Habilitado en todos los puntos Efecty a nivel nacional.",
  },
  {
    icono: BoltIcon,
    texto: "El pago se refleja automáticamente, sin esperas.",
  },
];

const otrosMedios = [
  {
    src: "/refacil.png",
    nombre: "Refácil",
    texto: "Paga desde la Krediapp con Daviplata o Nequi. Se refleja de inmediato.",
  },
  {
    src: "/bancolombia.png",
    nombre: "Bancolombia",
    texto: "Convenio 89058. Referencia: tu número de cédula.",
  },
  {
    src: "/western-union.png",
    nombre: "Western Union",
    texto: "Código: 605 + tu número de cédula.",
  },
  {
    src: "/servi.png",
    nombre: "Servientrega",
    texto: "Código: 605 + tu número de cédula.",
  },
  {
    src: "/sured.png",
    nombre: "SuRed",
    texto: "Código: 605 + tu número de cédula.",
  },
  {
    src: "/wompi.png",
    nombre: "Wompi",
    texto: "Paga en línea con Wompi.",
  },
  {
    src: "/pse.png",
    nombre: "PSE",
    texto: "Transferencia bancaria disponible.",
  },
  {
    src: "/transfiya.png",
    nombre: "Transfiya",
    texto: "Transferencias inmediatas con Transfiya.",
  },
];

export default function PuntosDeVentas() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-grow px-4 pb-16 pt-28 sm:px-6">
        <motion.section
          className="py-10 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-puntos text-3xl font-extrabold text-[#1E3A8A] sm:text-4xl">
            Puntos de pago con reporte automático
          </h1>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[#FBBF24]" />
          <p className="mx-auto mt-5 max-w-2xl text-base text-slate-600 sm:text-lg">
            Aquí están los puntos y medios autorizados para tus pagos
            financieros con KrediYa.
          </p>

          <p className="mx-auto mt-7 max-w-2xl text-[15px] leading-relaxed text-[#1E3A8A] sm:text-base">
            <span className="mr-2 inline-block bg-[#FBBF24] px-2 py-0.5 font-extrabold text-[#1E3A8A]">
              Importante
            </span>
            No envíes dinero por WhatsApp. Haz tus pagos quincenales solo en los
            comercios autorizados.
          </p>
        </motion.section>

        <motion.section
          className="overflow-hidden rounded-3xl border border-[#FBBF24]/40 bg-[#FBBF24] shadow-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col items-center gap-8 px-6 py-10 md:flex-row md:items-center md:gap-12 md:px-10">
            <div className="md:w-1/2">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1E3A8A]/70">
                Convenio principal
              </p>
              <h2 className="text-pagos !text-left text-2xl font-bold text-[#1E3A8A] sm:text-3xl">
                Pagos fáciles, al instante y sin enredos
              </h2>
              <p className="mt-3 text-base font-bold text-[#1E3A8A]">
                Tus pagos se ven reflejados al instante.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[#1E3A8A]/85 sm:text-base">
                En cualquier punto <strong>Efecty</strong> la transacción queda
                reportada automáticamente, para que disfrutes tu celular{" "}
                <span className="font-extrabold">sin límites</span>.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {datosEfecty.map((dato) => (
                  <div
                    key={dato.etiqueta}
                    className="rounded-2xl bg-white/80 px-4 py-3 shadow-sm"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#1E3A8A]/60">
                      {dato.etiqueta}
                    </p>
                    <p className="mt-1 text-sm font-extrabold text-[#1E3A8A] sm:text-base">
                      {dato.valor}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="mt-5 space-y-2.5">
                {requisitos.map(({ icono: Icono, texto }) => (
                  <li
                    key={texto}
                    className="flex items-start gap-2.5 text-sm text-[#1E3A8A]"
                  >
                    <Icono className="mt-0.5 h-5 w-5 shrink-0" />
                    <span>{texto}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex w-full justify-center md:w-1/2">
              <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-white/40 p-3">
                <Image
                  src="/efecty.png"
                  alt="Paga en Efecty"
                  width={480}
                  height={480}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="py-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-medios mb-8 text-2xl font-bold text-[#1E3A8A]">
            Otros medios de pago
          </h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otrosMedios.map((item, i) => (
              <motion.article
                key={item.nombre}
                className="flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-5 py-6 text-center shadow-sm transition hover:border-[#FBBF24]/60 hover:shadow-md"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                viewport={{ once: true }}
              >
                <div className="flex h-16 items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.nombre}
                    width={120}
                    height={56}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <h4 className="mt-4 text-sm font-bold text-[#1E3A8A]">
                  {item.nombre}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {item.texto}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
