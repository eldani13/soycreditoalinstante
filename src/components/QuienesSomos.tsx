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
          es una empresa nacida en <strong>2019</strong> , con la misión de
          facilitar el acceso a tecnología para todos. Nos especializamos en la
          venta de celulares a crédito, ofreciendo soluciones rápidas,
          accesibles y seguras para que más personas puedan estrenar su teléfono
          sin complicaciones. Aunque somos una marca joven, contamos con un
          equipo con más de 8 años de experiencia en el sector comercial y
          financiero, con presencia en distintas zonas del país. Nuestro
          compromiso es conectar a más personas con productos tecnológicos,
          brindando alternativas de pago cómodas y atención personalizada.
          Trabajamos con <strong className="text-[#FBBF24]">aliados </strong>{" "}
          estratégicos y personal capacitado para llegar a lugares de difícil
          acceso, impulsando así el crecimiento de nuestros clientes y
          democratizando el acceso a la tecnología.
        </motion.p>
      </div>
    </section>
  );
}
