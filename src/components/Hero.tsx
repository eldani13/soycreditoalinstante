"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: 'url("/hero.jpg")' }}
      />

      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="relative z-20 max-w-3xl px-4">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold leading-tight text-[#FBBF24] drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Tu aliado para el
          <br /> crecimiento!
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-200 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          En{" "}
          <strong className="text-white font-semibold">
            SOY CRÉDITO AL INSTANTE
          </strong>{" "}
          conectamos tu marca con más personas en todo el país a través de
          estrategias reales y resultados visibles.
        </motion.p>
      </div>
    </section>
  );
}
