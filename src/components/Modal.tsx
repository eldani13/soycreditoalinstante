"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Producto } from "@/interfaces/Productos";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface ModalProps {
  producto: Producto;
  onClose: () => void;
  onSolicitarCredito: () => void;
}

function colorEtiqueta(etiqueta: string) {
  switch (etiqueta) {
    case "Popular":
      return "bg-blue-500";
    case "Económico":
      return "bg-yellow-500 text-[#1E3A8A]";
    case "Alta resolución":
      return "bg-green-500";
    case "Alto rendimiento":
      return "bg-purple-500";
    case "Recomendado":
      return "bg-orange-500";
    case "Nuevo lanzamiento":
      return "bg-emerald-500";
    case "Conectividad 5G":
      return "bg-sky-500";
    default:
      return "bg-gray-500";
  }
}

function datoCorto(valor?: string) {
  if (!valor) return "";
  return valor.split(",")[0].trim();
}

function SpecItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-slate-50 px-3.5 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm leading-relaxed text-slate-800">{value}</p>
    </div>
  );
}

function Seccion({
  titulo,
  items,
}: {
  titulo: string;
  items: { label: string; value?: string }[];
}) {
  const visibles = items.filter((item) => item.value);

  if (visibles.length === 0) return null;

  return (
    <section className="space-y-2.5">
      <h3 className="text-sm font-bold text-[#1E3A8A]">{titulo}</h3>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {visibles.map((item) => (
          <SpecItem key={item.label} label={item.label} value={item.value!} />
        ))}
      </div>
    </section>
  );
}

export default function Modal({
  producto,
  onClose,
  onSolicitarCredito,
}: ModalProps) {
  const specs = producto.especificaciones;
  const destacados = [
    { label: "RAM", value: datoCorto(specs.ram) },
    { label: "Almacenamiento", value: datoCorto(specs.almacenamiento) },
    { label: "Batería", value: datoCorto(specs.bateria) },
    { label: "Pantalla", value: datoCorto(specs.tasaRefresco) || datoCorto(specs.tipoPantalla) },
  ].filter((item) => item.value);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-3 sm:p-6 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="producto-titulo"
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar detalles"
          className="absolute right-3 top-3 z-20 rounded-full bg-white p-2 text-slate-600 shadow-md transition hover:bg-slate-100"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        <div className="flex w-full shrink-0 flex-col bg-gradient-to-b from-slate-50 to-white p-5 md:w-[38%] md:p-7">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#1E3A8A]/10 px-3 py-1 text-xs font-semibold text-[#1E3A8A]">
              {producto.marca}
            </span>
            {producto.categoria && (
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {producto.categoria}
              </span>
            )}
          </div>

          <div className="flex flex-1 items-center justify-center rounded-2xl bg-white p-4 shadow-inner">
            <Image
              src={producto.imagen}
              alt={producto.nombre}
              width={280}
              height={280}
              className="h-48 w-auto object-contain sm:h-56 md:h-64"
            />
          </div>

          <button
            type="button"
            onClick={onSolicitarCredito}
            className="mt-5 w-full rounded-2xl bg-[#FBBF24] px-4 py-3 text-sm font-bold text-[#1E3A8A] shadow-sm transition hover:bg-yellow-400 sm:text-base"
          >
            Solicitar crédito
          </button>
        </div>

        <div className="flex min-h-0 w-full flex-1 flex-col p-5 md:p-7">
          <div className="pr-8">
            {producto.etiqueta && (
              <span
                className={`mb-3 inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold text-white ${colorEtiqueta(
                  producto.etiqueta
                )}`}
              >
                {producto.etiqueta}
              </span>
            )}
            <h2
              id="producto-titulo"
              className="text-2xl font-extrabold leading-tight text-[#1E3A8A] sm:text-3xl"
            >
              {producto.nombre}
            </h2>
            <p className="mt-2 text-lg font-semibold text-slate-800">
              {producto.precio}
            </p>
            <p className="text-sm text-slate-500">{producto.cuotas}</p>
          </div>

          {destacados.length > 0 && (
            <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {destacados.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#1E3A8A]/10 bg-[#1E3A8A]/5 px-3 py-3"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#1E3A8A]/70">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#1E3A8A]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 min-h-0 flex-1 space-y-5 overflow-y-auto pr-1">
            <Seccion
              titulo="Pantalla"
              items={[
                { label: "Pantalla", value: specs.pantalla },
                { label: "Tipo", value: specs.tipoPantalla },
                { label: "Tasa de refresco", value: specs.tasaRefresco },
              ]}
            />

            <Seccion
              titulo="Rendimiento"
              items={[
                { label: "Procesador", value: specs.procesador },
                { label: "RAM", value: specs.ram },
                { label: "Almacenamiento", value: specs.almacenamiento },
                { label: "Sistema", value: specs.sistemaOperativo },
              ]}
            />

            <Seccion
              titulo="Cámara y batería"
              items={[
                { label: "Cámara", value: specs.camara },
                { label: "Batería", value: specs.bateria },
                { label: "Carga", value: specs.carga },
                { label: "Audio", value: specs.tecnologiaAudio },
              ]}
            />

            <Seccion
              titulo="Diseño y conectividad"
              items={[
                { label: "Resistencia", value: specs.resistencia },
                { label: "Peso", value: specs.peso },
                { label: "Dimensiones", value: specs.dimensiones },
                { label: "Conectividad", value: specs.conectividad },
                { label: "Seguridad", value: specs.seguridad },
                { label: "Sensores", value: specs.sensores },
                { label: "SIM", value: specs.sim },
                { label: "NFC", value: specs.nfc },
                { label: "Colores", value: specs.colores },
                { label: "Materiales", value: specs.materiales },
              ]}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
