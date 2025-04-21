"use client";

import { motion } from "framer-motion";

export default function Objetivos() {
  const itemsIzquierda = ["Fácil", "Rápido", "Óptimo", "y al Instante"];

  const pasosCredito = [
    "Acércate a una de nuestras tiendas aliadas.",
    "Escoge el celular de tus sueños.",
    "Presenta tu cédula de ciudadanía.",
    "Responde unas breves preguntas.",
    "Paga una pequeña cuota inicial.",
    "¡Disfruta de tu nuevo celular!",
  ];

  return (
    <section id="objetivos" className="bg-white py-24 px-6 flex justify-center items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-financiar text-4xl font-extrabold text-[#1E3A8A] mb-3 leading-tight tracking-tight">
            Financiar con <span className="text-[#F59E0B]">SoyCredito</span>{" "}
            es
          </h3>

          <div className="relative mb-10">
            <div className="w-24 h-[5px] mx-auto bg-[#F59E0B] rounded-full" />
          </div>

          <ul className="space-y-6">
            {[
              "Un proceso fácil sin complicaciones ni papeleo.",
              "Obtén tu crédito en tiempo récord, sin largas esperas.",
              "Te damos soluciones óptimas para tu presupuesto.",
              "Recibe tu celular de inmediato, sin demoras.",
            ].map((beneficio, idx) => (
              <motion.li
                key={idx}
                className="flex items-start space-x-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#1E40AF] text-white font-bold text-lg mt-1">
                  ✓
                </div>
                <span className="text-lg leading-snug text-gray-800">
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
        >
          <h4 className="text-3xl font-bold text-[#1E3A8A] mb-8 leading-tight">
            Pasos para obtener tu crédito
          </h4>

          <ul className="space-y-6">
            {pasosCredito.map((paso, idx) => (
              <motion.li
                key={idx}
                className="flex items-start space-x-5"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
                <div className="h-9 w-9 flex items-center justify-center rounded-full bg-[#F59E0B] text-white font-bold text-sm mt-1">
                  {idx + 1}
                </div>
                <span className="text-lg leading-snug text-gray-800">
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
