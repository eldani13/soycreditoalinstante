"use client";

import { UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import MarcasCarrusel from "./MarcasCarrusel";

export default function Alianza() {
  return (
    <section
      id="alianza"
      className="relative overflow-hidden px-6 py-20 text-white"
    >
      <Image
        src="/alianza.jpg"
        alt=""
        fill
        sizes="100vw"
        quality={70}
        className="object-cover"
      />
      <div className="absolute inset-0 bg-slate-900/75" />
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          className="mb-6 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FBBF24]/15">
            <UserGroupIcon className="h-8 w-8 text-[#FBBF24]" />
          </span>
        </motion.div>

        <motion.h3
          className="text-alianza mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Compra tu celular a crédito con marcas aliadas
        </motion.h3>

        <motion.p
          className="mb-5 text-lg leading-relaxed text-gray-100 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Contamos con el respaldo de marcas como{" "}
          <strong className="text-[#FBBF24]">KrediYa</strong>,{" "}
          <strong className="text-[#FBBF24]">Adelanto Colombia</strong>,{" "}
          <strong className="text-[#FBBF24]">CelYa</strong>,{" "}
          <strong className="text-[#FBBF24]">A lo Credito</strong> y{" "}
          <strong className="text-[#FBBF24]">Suma Credito</strong> para que
          puedas acceder fácilmente a un plan de financiación y estrenar el
          celular que querés.
        </motion.p>

        <motion.p
          className="text-lg leading-relaxed text-gray-200 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Sin trámites complicados, con cuotas cómodas y el respaldo de nuestras
          marcas aliadas, te ayudamos a dar el siguiente paso hacia tu nuevo
          celular.
        </motion.p>

        <MarcasCarrusel />
      </div>
    </section>
  );
}
