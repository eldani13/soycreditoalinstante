"use client";

import { motion } from "framer-motion";
import {
  CalendarDaysIcon,
  UserGroupIcon,
  MapPinIcon,
  DevicePhoneMobileIcon,
  BuildingStorefrontIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const cifras = [
  { valor: "2019", label: "Año de fundación", icon: CalendarDaysIcon },
  { valor: "+8 años", label: "De experiencia", icon: UserGroupIcon },
  { valor: "Nacional", label: "Presencia en el país", icon: MapPinIcon },
];

const pilares = [
  {
    icon: DevicePhoneMobileIcon,
    titulo: "Celulares a crédito",
    texto:
      "Soluciones rápidas, accesibles y seguras para que más personas estrenen su teléfono sin complicaciones.",
  },
  {
    icon: BuildingStorefrontIcon,
    titulo: "Aliados estratégicos",
    texto:
      "Trabajamos con aliados y personal capacitado para llegar a lugares de difícil acceso.",
  },
  {
    icon: SparklesIcon,
    titulo: "Atención personalizada",
    texto:
      "Alternativas de pago cómodas y un equipo listo para acompañarte en cada paso.",
  },
];

export default function QuienesSomos() {
  return (
    <section id="quienes" className="bg-[#F1F5F9] px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-somos text-4xl font-extrabold text-[#1E40AF]">
            ¿Quiénes somos?
          </h3>
          <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-[#FBBF24]" />
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Somos{" "}
            <span className="font-bold text-[#1E3A8A]">
              Crédito al Instante
            </span>
            , una empresa nacida en 2019 con la misión de facilitar el acceso a
            la tecnología para todos.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {cifras.map((cifra, index) => (
            <motion.div
              key={cifra.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white px-6 py-6 text-center shadow-sm"
            >
              <cifra.icon className="mx-auto h-7 w-7 text-[#F59E0B]" />
              <p className="mt-3 text-2xl font-extrabold text-[#1E3A8A]">
                {cifra.valor}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500">
                {cifra.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-slate-600 sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
        >
          Aunque somos una marca joven, nuestro equipo suma más de 8 años de
          experiencia en el sector comercial y financiero. El compromiso es
          conectar a más personas con productos tecnológicos, impulsando el
          crecimiento de nuestros clientes y democratizando el acceso a la
          tecnología.
        </motion.p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {pilares.map((pilar, index) => (
            <motion.article
              key={pilar.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1E3A8A]/10">
                <pilar.icon className="h-6 w-6 text-[#1E3A8A]" />
              </div>
              <h4 className="mt-4 text-lg font-bold text-[#1E3A8A]">
                {pilar.titulo}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {pilar.texto}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
