"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[80vh] items-center justify-center overflow-hidden text-center text-white">
      <Image
        src="/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        quality={70}
        className="z-0 object-cover"
      />

      <div className="absolute inset-0 z-10 bg-black/60" />

      <div className="relative z-20 max-w-3xl px-4">
        <motion.h1
          className="text-hero mt-32 text-5xl md:text-6xl sm:mt-32"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          ¡Tu nuevo celular está
          <br /> más cerca de lo que crees!
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-gray-200 drop-shadow-md md:text-xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.08 }}
        >
          En{" "}
          <strong className="font-semibold text-white">
            SOY CRÉDITO AL INSTANTE
          </strong>{" "}
          te ayudamos a estrenar smartphone hoy mismo, sin tanto papeleo y con
          pagos accesibles. Crédito fácil, rápido y sin complicaciones.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.14 }}
        >
          <Link href="/store">
            <button className="mt-3 cursor-pointer rounded-lg bg-[#FBBF24] px-8 py-3 font-semibold text-white transition hover:bg-yellow-400">
              Ver catalogo
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
