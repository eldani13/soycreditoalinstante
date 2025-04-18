"use client";

import dynamic from "next/dynamic";
import { zonas } from "@/app/data/presencia";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const DynamicMap = dynamic(() => import("./PresenciaMap"), {
  ssr: false,
});

export default function Presencia() {
  const [isClient, setIsClient] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setIsClient(true);
  }, []);
  

  const filteredZonas = zonas
    .map((zona) => ({
      ...zona,
      municipios: zona.municipios.filter((municipio) =>
        municipio.nombre.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((zona) => zona.municipios.length > 0);

  return (
    <section
      id="presencia"
      aria-labelledby="aliados-heading"
      className="py-12 px-4 bg-[#F9FAFB]"
    >
      <div className="max-w-7xl mx-auto space-y-8 flex flex-col lg:flex-row gap-8">
        <motion.div
          className="w-full lg:w-1/3 h-[500px] rounded-xl overflow-hidden shadow-xl border-2 border-[#1E40AF]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {isClient && <DynamicMap zonas={zonas} />}
        </motion.div>

        <motion.div
          className="w-full lg:w-2/3 h-[500px] flex flex-col space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            id="aliados-heading"
            className="text-3xl font-extrabold text-[#1E40AF] mb-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Aliados comerciales
          </motion.h3>
          <div className="w-24 h-10 bg-[#FBBF24] mb-4 rounded-full" />

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <input
              type="text"
              placeholder="Buscar municipio..."
              className="w-full px-4 py-2 pr-10 border border-[#1E40AF] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#1E40AF] text-black"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <MagnifyingGlassIcon
              className="absolute right-3 top-2.5 text-gray-400"
              width={20}
            />
          </motion.div>

          <motion.div
            className="overflow-y-auto flex-grow pr-2"
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
            viewport={{ once: true }}
          >
            {filteredZonas.map((zona, index) => (
              <motion.article key={index} className="space-y-4">
                <motion.h4
                  className="text-xl font-semibold text-[#1E40AF]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {zona.departamento}
                </motion.h4>

                <div className="grid grid-cols-1 gap-4">
                  {zona.municipios.map((municipio, i) => (
                    <motion.div
                      key={`${index}-${i}`}
                      className="group p-4 bg-white shadow-lg rounded-xl hover:bg-[#FBBF24] hover:text-white transition-all duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-black group-hover:text-white transition">
                          {municipio.nombre}
                        </p>
                        <p className="text-sm text-gray-500 group-hover:text-white transition">
                          Agente: {zona.agente}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>

          <motion.button
            className="mt-4 w-full py-3 px-6 bg-[#1E40AF] text-white font-semibold rounded-xl hover:bg-[#3749B3] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Quiero ser agente
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
