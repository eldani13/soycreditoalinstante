"use client";

import { motion } from "framer-motion";
import Link from "next/link";  

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
          className="text-hero text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ¡Tu nuevo celular está
          <br /> más cerca de lo que crees!
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
          te ayudamos a estrenar smartphone hoy mismo, sin tanto papeleo y con
          pagos accesibles. Crédito fácil, rápido y sin complicaciones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/store">
            <button className="mt-8 px-8 py-3 bg-[#FBBF24] text-white font-semibold rounded-lg hover:bg-yellow-400 transition cursor-pointer">
              Ver Tienda
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
