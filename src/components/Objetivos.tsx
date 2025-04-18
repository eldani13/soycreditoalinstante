'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

export default function Objetivos() {
  const items = [
    'Brindar soluciones de financiamiento accesibles, seguras y rápidas para la compra de teléfonos celulares.',
    'Simplificar el proceso de solicitud de crédito, eliminando barreras como trámites complicados o historial crediticio exigente.',
    'Optimizar nuestros tiempos de respuesta, reduciendo el tiempo entre la solicitud del crédito y la aprobación final.',
    'Consolidar alianzas estratégicas con distribuidores y operadores, que nos permitan ampliar la oferta de productos con financiación.',
  ];

  return (
    <section id="objetivos" className="bg-[#F9FAFB] py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          className="text-4xl font-extrabold text-[#1E40AF] mb-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nuestros Objetivos
        </motion.h3>

        <div className="w-24 h-1 bg-[#FBBF24] mx-auto mb-10 rounded-full" />

        <motion.ul
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {items.map((item, idx) => (
            <motion.li
              key={idx}
              className="flex items-start space-x-3 text-gray-800 text-lg"
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              <CheckCircleIcon className="h-6 w-6 text-[#1E40AF] mt-1 flex-shrink-0" />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
