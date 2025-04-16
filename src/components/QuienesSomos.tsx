"use client";

import { motion } from "framer-motion";

export default function QuienesSomos() {
  return (
    <section id="quienes" className="bg-[#F1F5F9] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          className="text-4xl font-extrabold text-[#1E40AF] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¿Quiénes somos?
        </motion.h3>

        <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-8 rounded-full" />

        <motion.p
          className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Soy{" "}
          <span className="font-semibold text-[#1E40AF]">
            {" "}
            CRÉDITO AL INSTANTE,
          </span>{" "}
          es una empresa que nace en el 2024 con el fin de abrirse a nuevos
          cliente, basándose en la experiencia como agencia estratéga con mas de
          <strong> 8 años de experiencia</strong> y con presencia en diferentes
          zonas del país, esto con el objetivo de acercar a nuestros aliados a
          mas publico. Ofrecemos la oportunidad de ampliar sus portafolio de
          clientes y llegar a lugares de difícil acceso, contamos con personal
          calificados y colaboradores estratégicos que llevaran tu empresa a
          otro nivel, impulsando e incrementando sus ventas{" "}
          <strong className="text-[#FBBF24]">ventas.</strong>
        </motion.p>
      </div>
    </section>
  );
}
