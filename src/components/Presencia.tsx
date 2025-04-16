"use client";

import dynamic from "next/dynamic";
import { zonas } from "@/app/data/presencia";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DynamicMap = dynamic(() => import("./PresenciaMap"), {
  ssr: false,
});

export default function Presencia() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="presencia" className="py-12 px-4 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col lg:flex-row gap-8">
        <motion.div
          className="w-full lg:w-2/3 h-[500px] rounded-xl overflow-hidden shadow-xl border-2 border-[#1E40AF]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {isClient && <DynamicMap zonas={zonas} />}
        </motion.div>

        <motion.div
          className="w-full lg:w-1/3 flex flex-col space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-extrabold text-[#1E40AF] mb-4">
            Presencia en el país
          </h3>
          <div className="w-24 h-1 bg-[#FBBF24] mb-8 rounded-full" />

          <motion.div
            className="overflow-y-auto max-h-[500px]"
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
            {zonas.map((zona, index) => (
              <motion.div key={index} className="space-y-4">
                <motion.h4
                  className="text-xl font-semibold text-[#1E40AF]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {zona.departamento}
                </motion.h4>

                <div className="grid grid-cols-1 gap-4">
                  {zona.municipios.map((municipio, i) => (
                    <motion.div
                      key={`${index}-${i}`}
                      className="p-4 bg-white shadow-lg rounded-xl hover:bg-[#FBBF24] hover:text-white transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <p className="font-medium text-black">
                        {municipio.nombre}
                      </p>
                      <p className="text-sm text-gray-500">
                        Agente: {zona.agente}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
