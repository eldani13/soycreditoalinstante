"use client";

import { UserGroupIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import MarcasCarrusel from "./MarcasCarrusel";

export default function Alianza() {
  return (
    <section
      id="alianza"
      className="relative py-20 px-6 bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 50%), linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) 50%), url(/alianza.jpg)",
      }}
    >
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <UserGroupIcon className="h-14 w-14 text-[#FBBF24]" />
        </motion.div>

        <motion.h3
          className="text-alianza text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Compra tu celular a crédito con marcas aliadas
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-6 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
          className="text-lg md:text-xl leading-relaxed text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
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
