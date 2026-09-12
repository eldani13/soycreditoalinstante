"use client";

import { useEffect, useState } from "react";
import { useProducto } from "@/context/ProductoContext";
import { Producto } from "@/interfaces/Productos";
import Image from "next/image";
import { whatsappHref } from "@/data/contacto";

const campo =
  "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#FBBF24] focus:bg-white focus:ring-2 focus:ring-[#FBBF24]/40";

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

const specs = (
  especificaciones: Producto["especificaciones"]
): { label: string; value?: string }[] => [
  { label: "RAM", value: especificaciones.ram },
  { label: "Almacenamiento", value: especificaciones.almacenamiento },
  { label: "Procesador", value: especificaciones.procesador },
  { label: "Pantalla", value: especificaciones.pantalla },
  { label: "Batería", value: especificaciones.bateria },
  { label: "Cámara", value: especificaciones.camara },
];

export default function SolicitudCredito() {
  const { productoSeleccionado, setProductoSeleccionado } = useProducto();
  const [nombreCliente, setNombreCliente] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentarios, setComentarios] = useState("");

  useEffect(() => {
    if (!productoSeleccionado) {
      const stored = localStorage.getItem("productoSeleccionado");
      if (stored) {
        const producto: Producto = JSON.parse(stored);
        setProductoSeleccionado(producto);
      }
    }
  }, [productoSeleccionado, setProductoSeleccionado]);

  if (!productoSeleccionado) {
    return (
      <p className="py-20 text-center text-lg text-slate-500">
        Cargando producto...
      </p>
    );
  }

  const { nombre, imagen, marca, cuotas, especificaciones } =
    productoSeleccionado;

  const mensajeWhatsApp = [
    `Hola, quiero solicitar crédito para el ${nombre}.`,
    nombreCliente && `Nombre: ${nombreCliente}`,
    correo && `Correo: ${correo}`,
    telefono && `Teléfono: ${telefono}`,
    comentarios && `Comentarios: ${comentarios}`,
  ]
    .filter(Boolean)
    .join("\n");

  return (
    <section className="pb-6">
      <div className="grid items-start gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="flex justify-center rounded-2xl bg-slate-50 p-6">
            <Image
              src={imagen}
              alt={nombre}
              width={280}
              height={280}
              className="h-64 w-auto object-contain"
            />
          </div>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-[#1E3A8A]/60">
            {marca}
          </p>
          <h2 className="text-telefonoCredito mt-1 text-2xl font-extrabold text-[#1E3A8A] sm:text-3xl">
            {nombre}
          </h2>
          <p className="mt-1 text-sm font-medium text-slate-500">{cuotas}</p>

          <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {specs(especificaciones)
              .filter((item) => item.value)
              .map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-slate-50 px-3.5 py-3"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
          </div>
        </article>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h3 className="text-minutos text-2xl font-bold text-[#1E3A8A] sm:text-3xl">
            Solicita tu crédito en minutos
          </h3>
          <div className="mt-3 h-1.5 w-20 rounded-full bg-[#FBBF24]" />
          <p className="mt-4 text-sm text-slate-500">
            Completa tus datos y continúa por WhatsApp para el estudio de
            crédito.
          </p>

          <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">
                Nombre completo
              </span>
              <input
                type="text"
                placeholder="Ej. Juan Pérez"
                value={nombreCliente}
                onChange={(e) => setNombreCliente(e.target.value)}
                className={campo}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">
                Correo electrónico
              </span>
              <input
                type="email"
                placeholder="Ej. juan@email.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                className={campo}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">
                Teléfono
              </span>
              <input
                type="tel"
                placeholder="Ej. 302 109 3652"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                className={campo}
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700">
                Comentarios adicionales
              </span>
              <textarea
                rows={4}
                placeholder="Escribe aquí cualquier detalle adicional..."
                value={comentarios}
                onChange={(e) => setComentarios(e.target.value)}
                className={`${campo} resize-none`}
              />
            </label>

            <a
              href={whatsappHref(mensajeWhatsApp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(37,211,102,0.35)] transition hover:bg-[#20bd5a]"
            >
              <IconoWhatsApp className="h-5 w-5" />
              Continuar por WhatsApp
            </a>
          </form>
        </div>
      </div>

      <div className="mt-8 rounded-3xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm sm:px-10">
        <h4 className="text-funcion text-xl font-bold text-[#1E3A8A] sm:text-2xl">
          ¿Cómo funciona el proceso de solicitud?
        </h4>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Una vez que completes el formulario, serás redirigido automáticamente
          a un asesor en WhatsApp, quien te realizará el estudio de crédito de
          forma personalizada. Si cumples con los requisitos, podrás acceder al
          financiamiento para adquirir tu dispositivo móvil de manera rápida y
          sencilla.
        </p>
      </div>
    </section>
  );
}
