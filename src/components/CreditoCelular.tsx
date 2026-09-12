"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ventajas = ["Solo tu cédula", "Sin fiador", "Sin historial"];

export default function CreditoCelular() {
  return (
    <section className="relative flex w-full justify-center overflow-hidden bg-[#f8f8fb] px-4 py-16 sm:py-20">
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-10 lg:flex-row lg:gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative flex w-full items-center justify-center lg:w-1/2"
        >
          <Image
            src="/credito.jpg"
            alt="Cliente con su nuevo celular"
            width={800}
            height={600}
            className="relative z-10 max-h-[420px] w-auto object-contain"
          />
          <div className="absolute inset-y-0 left-0 z-20 w-[120px] bg-gradient-to-r from-[#f8f8fb] to-transparent" />
          <div className="absolute inset-y-0 right-0 z-20 w-[120px] bg-gradient-to-l from-[#f8f8fb] to-transparent" />
          <div className="absolute inset-x-0 top-0 z-20 h-[100px] bg-gradient-to-b from-[#f8f8fb] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 z-20 h-[100px] bg-gradient-to-t from-[#f8f8fb] to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-full max-w-xl text-center lg:w-1/2 lg:text-left"
        >
          <h2 className="text-credito mb-5 text-2xl font-bold leading-snug text-[#1E40AF] lg:text-3xl">
            ¿Buscas un préstamo <br />
            rápido y sin complicaciones <br />
            para comprar tu celular?
          </h2>

          <div className="mb-5 flex flex-wrap justify-center gap-2 lg:justify-start">
            {ventajas.map((ventaja) => (
              <span
                key={ventaja}
                className="rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-sm font-semibold text-[#1E3A8A]"
              >
                {ventaja}
              </span>
            ))}
          </div>

          <p className="mb-4 leading-relaxed text-[#2c2c54]">
            Sabemos que muchas personas no logran acceder a préstamos
            tradicionales por no tener historial crediticio, empleo formal o un
            fiador. Incluso si estás reportado,{" "}
            <strong className="text-[#1E40AF]">
              en{" "}
              <span className="font-semibold text-[#F59E0B]">Soy Crédito</span>{" "}
              creemos en ti.
            </strong>
          </p>
          <p className="mb-6 leading-relaxed text-[#2c2c54]">
            Te damos la oportunidad de renovar tu celular fácil y rápido, usando
            solo tu cédula. Sin trámites engorrosos, sin fiador y sin importar
            tu historial.
          </p>
          <p className="mb-6 font-bold text-[#1E40AF]">
            <span className="text-[#F59E0B]">Préstamos 100% confiables</span> y
            pensados para ti.
          </p>

          <Link
            href="/store"
            className="inline-flex rounded-full bg-[#FBBF24] px-6 py-3 text-sm font-bold text-[#1E3A8A] shadow-sm transition hover:bg-yellow-300"
          >
            Ver teléfonos disponibles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
