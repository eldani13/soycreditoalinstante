"use client";

import {
  PhoneIcon,
  MapIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <section id="contacto" className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h3
          className="text-contacto text-4xl font-extrabold text-[#1E40AF] mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contáctanos
        </motion.h3>

        <motion.p
          className="text-xl text-gray-700 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Estamos aquí para ayudarte. ¿Tienes alguna pregunta? ¡Nos encantaría
          saber de ti!
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {[
            {
              icon: <PhoneIcon className="h-8 w-8 text-[#1E40AF]" />,
              title: "Llámanos",
              text: "+57 (321) 123 8459",
            },
            {
              icon: <MapIcon className="h-8 w-8 text-[#1E40AF]" />,
              title: "Envíanos un correo",
              text: "contacto@hotmail.com",
            },
            {
              icon: <PaperAirplaneIcon className="h-8 w-8 text-[#1E40AF]" />,
              title: "Formulario de contacto",
              text: "Rellena el formulario y te responderemos en breve.",
            },
          ].map(({ icon, title, text }, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center min-h-[180px] p-4  bg-white"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-3">{icon}</div>
              <h4 className="text-lg font-semibold text-[#1E40AF] mb-1">
                {title}
              </h4>
              <p className="text-gray-600 text-sm">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.input
            type="text"
            placeholder="Nombre completo"
            className="w-full p-4 rounded-xl text-white bg-gray-800 border-2 border-gray-700 focus:border-[#1E40AF] focus:outline-none transition"
            whileFocus={{ scale: 1.05 }}
          />

          <motion.input
            type="email"
            placeholder="Correo electrónico"
            className="w-full p-4 rounded-xl text-white bg-gray-800 border-2 border-gray-700 focus:border-[#1E40AF] focus:outline-none transition"
            whileFocus={{ scale: 1.05 }}
          />

          <motion.textarea
            placeholder="Tu mensaje"
            className="w-full p-4 rounded-xl text-white bg-gray-800 border-2 border-gray-700 focus:border-[#1E40AF] focus:outline-none h-40 resize-none transition"
            whileFocus={{ scale: 1.05 }}
          ></motion.textarea>

          <motion.button
            type="submit"
            className="w-full py-3 px-6 rounded-xl bg-[#1E40AF] text-white font-semibold text-lg hover:bg-blue-600 transition duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Enviar mensaje
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
