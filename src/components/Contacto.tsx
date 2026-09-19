"use client";

import { motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { contacto, whatsappHref } from "@/data/contacto";

function IconoWhatsApp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.52 3.48A11.9 11.9 0 0012.05 0 11.96 11.96 0 000 12a11.9 11.9 0 001.65 6L0 24l6.29-1.65A11.9 11.9 0 0012.05 24C18.64 24 24 18.64 24 12c0-3.19-1.24-6.19-3.48-8.52zM12.05 22a9.88 9.88 0 01-5.19-1.46l-.37-.23-3.74.98 1-3.64-.24-.37A9.9 9.9 0 1122 12a9.88 9.88 0 01-9.95 10zm4.95-7.2c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.2-.24-.59-.48-.51-.66-.52l-.56-.01c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.48 0 1.47 1.06 2.89 1.2 3.09.15.2 2.09 3.18 5.07 4.46.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34z" />
    </svg>
  );
}

const campo =
  "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#FBBF24] focus:bg-white focus:ring-2 focus:ring-[#FBBF24]/40";

export default function Contacto() {
  const [isAliado, setIsAliado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [estado, setEstado] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const handleAsuntoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setIsAliado(e.target.value === "Aliado");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const datos = new FormData(form);

    setEnviando(true);
    setEstado("idle");
    setError("");

    try {
      const respuesta = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: datos.get("nombre"),
          correo: datos.get("correo"),
          telefono: datos.get("telefono"),
          asunto: datos.get("asunto"),
          tienda: datos.get("tienda"),
          mensaje: datos.get("mensaje"),
          empresa: datos.get("empresa"),
        }),
      });
      const json = await respuesta.json();
      if (!respuesta.ok || !json.ok) {
        throw new Error(json.error || "No se pudo enviar.");
      }
      form.reset();
      setIsAliado(false);
      setEstado("ok");
    } catch (err) {
      setEstado("error");
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo enviar el mensaje. Intenta de nuevo."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="bg-white px-6 py-20 text-gray-900">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col text-center lg:text-left">
          <motion.h3
            className="text-contacto mb-4 text-4xl font-extrabold text-[#1E40AF]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contáctanos
          </motion.h3>
          <div className="mb-6 h-1.5 w-24 rounded-full bg-[#FBBF24] max-lg:mx-auto" />

          <motion.div
            className="space-y-4 text-base leading-relaxed text-slate-600 sm:text-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              Estamos aquí para ayudarte con cualquier duda, queja, petición o
              reclamo. Si necesitas más información sobre nuestros productos o
              servicios, o si tienes alguna sugerencia, estamos disponibles para
              escucharte y brindarte el soporte que necesitas.
            </p>
            <p>
              Si deseas convertirte en aliado, te ofrecemos la oportunidad de
              colaborar con nosotros. Si ya cuentas con una tienda física,
              también puedes formar parte de nuestra red de aliados y disfrutar
              de beneficios exclusivos.
            </p>
            <p>
              Rellena el formulario y nos pondremos en contacto contigo pronto.
              Nuestro equipo te brindará una atención personalizada para
              resolver tus dudas o ayudarte a iniciar una colaboración exitosa.
            </p>
          </motion.div>

          <div className="mt-8 w-full space-y-3 text-left">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[#1E3A8A]/60">
                {contacto.oficina}
              </p>
              <p className="mt-2 flex items-start gap-2 text-sm text-slate-700 sm:text-base">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#1E3A8A]" />
                <span>
                  {contacto.direccion}
                  <br />
                  {contacto.local}
                  <br />
                  {contacto.municipio}
                </span>
              </p>
            </div>

            <a
              href={whatsappHref(
                "Hola, quiero información de un crédito de celular."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(37,211,102,0.35)] transition hover:bg-[#20bd5a]"
            >
              <IconoWhatsApp className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-3xl bg-slate-50 p-6 shadow-sm sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            name="empresa"
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
            aria-hidden="true"
          />
          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            required
            className={campo}
          />
          <input
            type="email"
            name="correo"
            placeholder="Correo electrónico"
            required
            className={campo}
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Número de teléfono"
            required
            className={campo}
          />
          <select
            name="asunto"
            className={`${campo} appearance-none`}
            required
            onChange={handleAsuntoChange}
            defaultValue=""
          >
            <option value="">Selecciona el asunto</option>
            <option value="Petición">Petición</option>
            <option value="Queja">Queja</option>
            <option value="Reclamo">Reclamo</option>
            <option value="Aliado">Aliado</option>
          </select>

          {isAliado && (
            <input
              type="text"
              name="tienda"
              placeholder="¿Tienes tienda física?"
              className={campo}
            />
          )}

          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            required
            className={`${campo} h-36 resize-none`}
          />

          {estado === "ok" && (
            <p className="text-sm font-medium text-green-700">
              Mensaje enviado. Te responderemos al correo que dejaste.
            </p>
          )}
          {estado === "error" && (
            <p className="text-sm font-medium text-red-600">{error}</p>
          )}

          <button
            type="submit"
            disabled={enviando}
            className="w-full rounded-2xl bg-[#1E40AF] px-6 py-3.5 text-lg font-semibold text-white transition hover:bg-[#1E3A8A] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {enviando ? "Enviando..." : "Enviar mensaje"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
