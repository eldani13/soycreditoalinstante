"use client";

import { BeakerIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Alianza() {
  return (
    <section
      id="alianza"
      className="relative py-20 px-6 bg-cover bg-center text-white"
      style={{
        backgroundImage: "url(/alianza.jpg)",
      }}
    >
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <BeakerIcon className="h-14 w-14 text-[#FBBF24]" />
        </motion.div>

        <motion.h3
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1E40AF] mb-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Propuesta de Alianza Estratégica
        </motion.h3>

        <motion.p
          className="text-lg md:text-xl leading-relaxed mb-6 text-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Nuestra propuesta consiste en establecer una alianza con empresas como{" "}
          <strong className="text-[#FBBF24]">JAMAR</strong> para ampliar su base
          de clientes mediante presencia directa en territorios clave, personal
          calificado y experiencia en estrategias comerciales.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ofrecemos{" "}
          <strong className="text-[#FBBF24]">seguimiento personalizado</strong>,
          atención dedicada y una red de representantes en constante expansión
          para impulsar el crecimiento conjunto.
        </motion.p>
      </div>
    </section>
  );
}
