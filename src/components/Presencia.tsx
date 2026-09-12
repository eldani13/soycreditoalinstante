"use client";

import dynamic from "next/dynamic";
import { zonas } from "@/data/presencia";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const DynamicMap = dynamic(() => import("./PresenciaMap"), {
  ssr: false,
});

export default function Presencia() {
  const [loadMap, setLoadMap] = useState(false);
  const [search, setSearch] = useState("");
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filteredZonas = zonas
    .map((zona) => ({
      ...zona,
      municipios: zona.municipios.filter((municipio) =>
        municipio.nombre.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((zona) => zona.municipios.length > 0);

  const totalMunicipios = filteredZonas.reduce(
    (acc, zona) => acc + zona.municipios.length,
    0
  );

  return (
    <section
      id="presencia"
      aria-labelledby="aliados-heading"
      className="bg-[#F9FAFB] px-4 py-16 sm:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row">
        <motion.div
          ref={mapRef}
          className="h-[500px] w-full overflow-hidden rounded-3xl border-2 border-[#1E40AF] bg-slate-100 shadow-xl lg:w-1/3"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {loadMap ? (
            <DynamicMap zonas={zonas} />
          ) : (
            <div className="h-full w-full bg-slate-100" aria-hidden />
          )}
        </motion.div>

        <motion.div
          className="flex h-[500px] w-full flex-col lg:w-2/3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            id="aliados-heading"
            className="text-ventas mb-3 text-3xl font-extrabold text-[#1E40AF]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Puntos de ventas
          </motion.h3>
          <div className="mb-2 h-1.5 w-24 rounded-full bg-[#FBBF24]" />
          <p className="mb-5 text-sm text-slate-500">
            {totalMunicipios}{" "}
            {totalMunicipios === 1 ? "municipio" : "municipios"}{" "}
            {search ? "encontrados" : "disponibles"}
          </p>

          <div className="relative mb-5">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              placeholder="Buscar municipio..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-12 pr-11 text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-[#FBBF24] focus:ring-2 focus:ring-[#FBBF24]/40"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Borrar búsqueda"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-700"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="min-h-0 flex-grow space-y-6 overflow-y-auto pr-1">
            {filteredZonas.length === 0 && (
              <p className="rounded-2xl bg-white px-4 py-8 text-center text-slate-500 shadow-sm">
                No encontramos ese municipio.
              </p>
            )}

            {filteredZonas.map((zona) => (
              <article key={zona.departamento} className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h4 className="text-lg font-bold text-[#1E40AF]">
                    {zona.departamento}
                  </h4>
                  <span className="rounded-full bg-[#1E3A8A]/10 px-2.5 py-0.5 text-xs font-semibold text-[#1E3A8A]">
                    {zona.municipios.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {zona.municipios.map((municipio) => (
                    <div
                      key={`${zona.departamento}-${municipio.nombre}`}
                      className="group flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3.5 shadow-sm transition hover:bg-[#FBBF24]"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1E3A8A]/10 text-[#1E3A8A] transition group-hover:bg-white/70">
                          <MapPinIcon className="h-5 w-5" />
                        </span>
                        <p className="truncate font-semibold text-slate-800 transition group-hover:text-[#1E3A8A]">
                          {municipio.nombre}
                        </p>
                      </div>
                      <p className="shrink-0 text-sm text-slate-500 transition group-hover:text-[#1E3A8A]/80">
                        Agente: {zona.agente}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <a
            href="#contacto"
            className="mt-5 block w-full rounded-2xl bg-[#1E40AF] px-6 py-3.5 text-center font-semibold text-white transition hover:bg-[#1E3A8A]"
          >
            Quiero ser agente
          </a>
        </motion.div>
      </div>
    </section>
  );
}
