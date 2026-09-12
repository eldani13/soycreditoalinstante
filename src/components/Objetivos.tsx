"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";

const beneficios = [
  "Un proceso fácil sin complicaciones ni papeleo.",
  "Obtén tu crédito en tiempo récord, sin largas esperas.",
  "Te damos soluciones óptimas para tu presupuesto.",
  "Recibe tu celular de inmediato, sin demoras.",
];

const pasosCredito = [
  "Acércate a una de nuestras tiendas aliadas.",
  "Escoge el celular de tus sueños.",
  "Presenta tu cédula de ciudadanía.",
  "Responde unas breves preguntas.",
  "Paga una pequeña cuota inicial.",
  "¡Disfruta de tu nuevo celular!",
];

export default function Objetivos() {
  return (
    <section
      id="objetivos"
      className="flex items-center justify-center bg-white px-6 py-24"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-slate-50 px-6 py-8 sm:px-8"
        >
          <h3 className="text-financiar mb-3 text-4xl font-extrabold leading-tight tracking-tight text-[#1E3A8A]">
            Financiar con <span className="text-[#F59E0B]">SoyCredito</span> es
          </h3>

          <div className="relative mb-10">
            <div className="mx-auto h-[5px] w-24 rounded-full bg-[#F59E0B]" />
          </div>

          <ul className="space-y-5">
            {beneficios.map((beneficio, idx) => (
              <motion.li
                key={beneficio}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1E40AF] text-white shadow-sm">
                  <CheckIcon className="h-5 w-5" />
                </div>
                <span className="pt-1 text-lg leading-snug text-gray-800">
                  {beneficio}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-slate-50 px-6 py-8 sm:px-8"
        >
          <h4 className="mb-3 text-center text-3xl font-bold leading-tight text-[#1E3A8A]">
            Pasos para obtener tu crédito
          </h4>
          <div className="relative mb-10">
            <div className="mx-auto h-[5px] w-24 rounded-full bg-[#F59E0B]" />
          </div>

          <ul className="relative space-y-5">
            <span className="absolute top-4 bottom-4 left-[17px] w-px bg-[#F59E0B]/30" />
            {pasosCredito.map((paso, idx) => (
              <motion.li
                key={paso}
                className="relative flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative z-10 mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F59E0B] text-sm font-bold text-white shadow-sm">
                  {idx + 1}
                </div>
                <span className="pt-1 text-lg leading-snug text-gray-800">
                  {paso}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
