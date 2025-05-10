"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChangeEvent } from "react";

export default function Contacto() {
  const [isAliado, setIsAliado] = useState(false);

  const handleAsuntoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "Aliado") {
      setIsAliado(true);
    } else {
      setIsAliado(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6  text-gray-900">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
      <div className="flex flex-col  text-center lg:text-left">
          <motion.h3
            className="text-contacto text-4xl font-extrabold text-[#1E40AF] mb-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contáctanos
          </motion.h3>

          <motion.p
            className="text-xl text-gray-700 mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Estamos aquí para ayudarte con cualquier duda, queja, petición o
            reclamo. Si necesitas más información sobre nuestros productos o
            servicios, o si tienes alguna sugerencia, estamos disponibles para
            escucharte y brindarte el soporte que necesitas. Si deseas
            convertirte en aliado, te ofrecemos la oportunidad de colaborar con
            nosotros. Si ya cuentas con una tienda física, también puedes formar
            parte de nuestra red de aliados y disfrutar de beneficios
            exclusivos. Rellena el formulario y nos pondremos en contacto
            contigo pronto. Nuestro equipo te brindará una atención
            personalizada para resolver tus dudas o ayudarte a iniciar una
            colaboración exitosa.{" "}
          </motion.p>
        </div>
        <div>
          <motion.form
            className="space-y-6  p-8  bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.input
              type="text"
              placeholder="Nombre completo"
              className="w-full p-4 rounded-xl text-gray-800 bg-gray-100 border-2 border-gray-300 focus:border-[#1E40AF] focus:outline-none "
            />

            <motion.input
              type="email"
              placeholder="Correo electrónico"
              className="w-full p-4 rounded-xl text-gray-800 bg-gray-100 border-2 border-gray-300 focus:border-[#1E40AF] focus:outline-none"
            />

            <motion.input
              type="tel"
              placeholder="Número de teléfono"
              className="w-full p-4 rounded-xl text-gray-800 bg-gray-100 border-2 border-gray-300 focus:border-[#1E40AF] focus:outline-none "
            />

            <motion.select
              className="w-full p-4 rounded-xl text-gray-800 bg-gray-100 border-2 border-gray-300 focus:border-[#1E40AF] focus:outline-none"
              onChange={handleAsuntoChange}
            >
              <option value="">Selecciona el asunto</option>
              <option value="Petición">Petición</option>
              <option value="Queja">Queja</option>
              <option value="Reclamo">Reclamo</option>
              <option value="Aliado">Aliado</option>
            </motion.select>

            {isAliado && (
              <motion.input
                type="text"
                placeholder="¿Tienes tienda física?"
                className="w-full p-4 rounded-xl text-gray-800 bg-gray-100 border-2 border-gray-300 focus:border-[#1E40AF] focus:outline-none "
              />
            )}

            <motion.textarea
              placeholder="Tu mensaje"
              className="w-full p-4 rounded-xl text-gray-800 bg-gray-100 border-2 border-gray-300 focus:border-[#1E40AF] focus:outline-none h-40 resize-none"
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

        
      </div>
    </section>
  );
}
