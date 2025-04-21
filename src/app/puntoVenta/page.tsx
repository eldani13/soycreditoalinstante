"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PuntosDeVentas() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-28 pb-16 px-6 max-w-7xl mx-auto w-full">
        <motion.section
          className="text-center py-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-puntos text-4xl font-extrabold text-[#1E40AF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Puntos de pago con reporte automático
          </motion.h1>
          <motion.p
            className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A continuación encontrarás los puntos y medios de pago autorizados
            para realizar tus pagos de SoyCredito.
          </motion.p>
          <motion.p
            className="mt-2 font-semibold text-[#1E40AF]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Importante: Ningún asesor o persona está autorizada a pedirte o
            recibir el dinero de tu pago.
          </motion.p>
        </motion.section>

        <motion.section
          className="bg-[#f6cc00] rounded-3xl py-10 px-8 flex flex-col md:flex-row items-center gap-10 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-pagos text-3xl font-bold text-gray-800">
              Pagos fáciles, al instante y sin enredos
            </h2>
            <p className="mt-2 text-lg font-semibold text-white">
              ¡Ahora podrás ver tus pagos reflejados al instante!
            </p>
            <p className="mt-4 text-gray-800">
              En cualquier punto <span className="font-bold">Efecty</span>, tu
              transacción se ve reflejada automáticamente, para que disfrutes de
              tu celular...{" "}
              <a href="#" className="underline font-bold text-white">
                SIN LÍMITES
              </a>
              .
            </p>
            <ul className="mt-4 list-disc list-inside text-sm text-gray-800 space-y-1">
              <li>
                <strong>Nombre del convenio:</strong> KREDIYA INTEGRACIÓN
              </li>
              <li>
                <strong>Número de convenio con Efecty:</strong> 113153
              </li>
              <li>Debes presentar tu cédula de ciudadanía.</li>
              <li>Pagos desde $20.000 hasta $1.000.000 COP.</li>
              <li>
                Habilitado en todos los puntos <strong>Efecty</strong> a nivel
                nacional.
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/efecty.png" alt="Efecty" width={400} height={400} />
          </motion.div>
        </motion.section>

        <motion.section
          className="py-14 bg-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-medios text-2xl font-bold text-[#1E40AF] text-center mb-10">
            Otros medios de pago
          </h3>

          <div className="space-y-12 px-4">
            {[0, 1].map((row) => (
              <motion.div
                key={row}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 items-start text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: row * 0.2 }}
                viewport={{ once: true }}
              >
                {(row === 0
                  ? [
                      { src: "/refacil.png", text: "Paga desde la krediapp con Daviplata o Nequi. Tu pago se refleja ¡de inmediato!" },
                      { src: "/bancolombia.png", text: "Convenio: 89058\nReferencia: tu número de cédula" },
                      { src: "/western-union.png", text: "Código: 605 + tu número de cédula" },
                      { src: "/servi.png", text: "Código: 605 + tu número de cédula" },
                    ]
                  : [
                      { src: "/sured.png", text: "Código: 605 + tu número de cédula" },
                      {
                        src: "/wompi.png",
                        text: 'Paga con Wompi <a href="#" class="text-[#FBBF24] underline">aquí</a>.',
                      },
                      { src: "/pse.png", text: "Disponible" },
                      { src: "/transfiya.png", text: "Transferencias inmediatas con Transfiya" },
                    ]
                ).map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={item.src}
                      alt=""
                      width={100}
                      height={50}
                      className="mx-auto"
                    />
                    <p
                      className="text-sm mt-3 text-black"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ))}

            <hr className="border-t border-gray-300 mt-12" />
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}
