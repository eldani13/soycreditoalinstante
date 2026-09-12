"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Modal from "@/components/Modal";
import { productos } from "../../data/telefonos";
import { Producto } from "@/interfaces/Productos";
import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Beneficios from "@/components/Beneficios";
import { useProducto } from "@/context/ProductoContext";
import { useRouter } from "next/navigation";

function obtenerPaginasVisibles(actual: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const paginas = new Set<number>([1, total]);
  for (let i = actual - 1; i <= actual + 1; i++) {
    if (i >= 1 && i <= total) paginas.add(i);
  }

  const ordenadas = [...paginas].sort((a, b) => a - b);
  const visibles: (number | "...")[] = [];

  ordenadas.forEach((pagina, indice) => {
    if (indice > 0 && pagina - ordenadas[indice - 1] > 1) {
      visibles.push("...");
    }
    visibles.push(pagina);
  });

  return visibles;
}

export default function StorePage() {
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 12;
  const catalogoRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const marcas = [...new Set(productos.map((p) => p.marca))].sort((a, b) =>
    a.localeCompare(b, "es")
  );
  const hayFiltros = busqueda.trim() !== "" || marcaFiltro !== "";

  const productosFiltrados = productos.filter((producto) => {
    const filtraMarca = marcaFiltro ? producto.marca === marcaFiltro : true;
    const filtraBusqueda = busqueda
      ? producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      : true;
    return filtraMarca && filtraBusqueda;
  });

  const totalPaginas = Math.max(
    1,
    Math.ceil(productosFiltrados.length / productosPorPagina)
  );
  const indexUltimo = paginaActual * productosPorPagina;
  const indexPrimero = indexUltimo - productosPorPagina;
  const productosPagina = productosFiltrados.slice(indexPrimero, indexUltimo);
  const desde =
    productosFiltrados.length === 0 ? 0 : indexPrimero + 1;
  const hasta = Math.min(indexUltimo, productosFiltrados.length);

  const irAPagina = (pagina: number) => {
    const siguiente = Math.min(Math.max(pagina, 1), totalPaginas);
    setPaginaActual(siguiente);
    catalogoRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const { setProductoSeleccionado } = useProducto();

  const handleClick = (producto: Producto) => {
    console.log("Producto antes de setearlo en contexto:", producto);
    setProductoSeleccionado(producto);
    localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
    router.push("/solicitudCredito");
  };

  const handleOpenModal = (producto: Producto) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    setPaginaActual(1);
  }, [marcaFiltro, busqueda]);

  useEffect(() => {
    if (paginaActual > totalPaginas) {
      setPaginaActual(totalPaginas);
    }
  }, [paginaActual, totalPaginas]);

  const getEtiquetaColor = (etiqueta: string) => {
    switch (etiqueta) {
      case "Popular":
        return "bg-blue-500";
      case "Económico":
        return "bg-yellow-500";
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
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="mb-10 rounded-3xl bg-white p-5 shadow-xl md:p-6">
          <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-[#1E3A8A] md:text-2xl">
                Catálogo
              </h2>
              <p className="text-sm text-slate-500">
                {productosFiltrados.length}{" "}
                {productosFiltrados.length === 1
                  ? "teléfono disponible"
                  : "teléfonos disponibles"}
                {hayFiltros ? " con los filtros actuales" : ""}
              </p>
            </div>
            {hayFiltros && (
              <button
                type="button"
                onClick={() => {
                  setBusqueda("");
                  setMarcaFiltro("");
                }}
                className="self-start rounded-full bg-slate-100 px-3 py-1.5 text-sm font-semibold text-[#1E3A8A] transition hover:bg-slate-200"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <label className="relative block">
              <span className="sr-only">Buscar teléfono</span>
              <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Busca por nombre, por ejemplo iPhone 15"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-11 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#FBBF24] focus:bg-white focus:ring-2 focus:ring-[#FBBF24]/40"
              />
              {busqueda && (
                <button
                  type="button"
                  onClick={() => setBusqueda("")}
                  aria-label="Borrar búsqueda"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:bg-slate-200 hover:text-slate-700"
                >
                  <XMarkIcon className="h-4 w-4" />
                </button>
              )}
            </label>

            <label className="relative block">
              <span className="sr-only">Filtrar por marca</span>
              <AdjustmentsHorizontalIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
              <select
                value={marcaFiltro}
                onChange={(e) => setMarcaFiltro(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-12 pr-10 text-slate-800 outline-none transition focus:border-[#FBBF24] focus:bg-white focus:ring-2 focus:ring-[#FBBF24]/40"
              >
                <option value="">Todas las marcas</option>
                {marcas.map((marca) => (
                  <option key={marca} value={marca}>
                    {marca}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            </label>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setMarcaFiltro("")}
              className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                marcaFiltro === ""
                  ? "bg-[#1E3A8A] text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Todas
            </button>
            {marcas.map((marca) => (
              <button
                key={marca}
                type="button"
                onClick={() =>
                  setMarcaFiltro((actual) => (actual === marca ? "" : marca))
                }
                className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
                  marcaFiltro === marca
                    ? "bg-[#FBBF24] text-[#1E3A8A] shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {marca}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {busqueda.trim() === "" && marcaFiltro.trim() === "" && (
            <motion.section
              key="hero"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="relative bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#1E3A8A] text-white rounded-3xl overflow-hidden px-6 py-16 mb-12 shadow-xl"
            >
              <div className="absolute w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full -top-10 -left-10 z-0" />
              <div className="absolute w-72 h-72 bg-blue-300 opacity-20 blur-3xl rounded-full bottom-0 -right-10 z-0" />

              <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-12 relative z-10">
                <div className="md:w-1/2 text-center md:text-left">
                  <h1 className="text-descubri text-4xl sm:text-5xl font-extrabold tracking-wide mb-6 leading-tight">
                    Descubre los{" "}
                    <span className="text-yellow-400">mejores teléfonos</span>
                  </h1>
                  <p className="text-lg sm:text-xl mb-8 text-gray-200">
                    Tecnología de punta, cuotas accesibles, y un catálogo
                    premium hecho para ti.
                  </p>
                  <button className="bg-yellow-400 text-[#1E3A8A] font-bold px-8 py-4 rounded-2xl shadow-lg hover:bg-yellow-300 transition-all duration-300">
                    Ver promociones
                  </button>
                </div>

                <div className="md:w-1/2 w-full flex justify-center">
                  <Image
                    src="/samsung.png"
                    alt="Teléfono premium"
                    width={450}
                    height={450}
                    className="object-contain max-h-[350px] sm:max-h-[450px] drop-shadow-2xl"
                  />
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {busqueda.trim() === "" && marcaFiltro.trim() === "" && <Beneficios />}

        <div
          ref={catalogoRef}
          className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 scroll-mt-32"
        >
          <AnimatePresence>
            {productosPagina.map((producto) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition"
              >
                {producto.etiqueta && (
                  <div className="flex gap-2 mb-4">
                    <span
                      className={`text-xs text-white px-2 py-1 rounded-full ${getEtiquetaColor(
                        producto.etiqueta
                      )}`}
                    >
                      {producto.etiqueta}
                    </span>
                  </div>
                )}
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={200}
                  height={200}
                  className="rounded-lg mb-4 object-contain h-40 w-auto"
                />
                <h2 className="text-lg font-semibold text-[#1E40AF] mb-1">
                  {producto.nombre}
                </h2>
                <p className="text-gray-800 font-medium">{producto.precio}</p>
                <p className="text-sm text-gray-500 mb-4">{producto.cuotas}</p>

                <button
                  onClick={() => handleOpenModal(producto)}
                  className="bg-[#FBBF24] text-[#1E3A8A] font-semibold px-4 py-2 rounded-xl hover:bg-yellow-400 transition"
                >
                  Ver detalles
                </button>

                <button
                  onClick={() => handleClick(producto)}
                  className="bg-[#1E3A8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-blue-700 transition mt-4"
                >
                  Solicitar Crédito
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {productosFiltrados.length > 0 && (
          <nav
            aria-label="Paginación del catálogo"
            className="mt-12 bg-white rounded-2xl shadow-lg px-4 py-5 sm:px-6"
          >
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-sm text-gray-600">
                Mostrando{" "}
                <span className="font-semibold text-[#1E3A8A]">
                  {desde}-{hasta}
                </span>{" "}
                de{" "}
                <span className="font-semibold text-[#1E3A8A]">
                  {productosFiltrados.length}
                </span>{" "}
                teléfonos
              </p>

              {totalPaginas > 1 && (
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => irAPagina(paginaActual - 1)}
                    disabled={paginaActual === 1}
                    className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-[#1E3A8A] bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:hover:bg-gray-100 disabled:cursor-not-allowed transition"
                    aria-label="Página anterior"
                  >
                    <ChevronLeftIcon className="h-4 w-4" />
                    <span className="hidden sm:inline">Anterior</span>
                  </button>

                  {obtenerPaginasVisibles(paginaActual, totalPaginas).map(
                    (item, indice) =>
                      item === "..." ? (
                        <span
                          key={`ellipsis-${indice}`}
                          className="px-1 text-gray-400 select-none"
                        >
                          …
                        </span>
                      ) : (
                        <button
                          key={item}
                          type="button"
                          onClick={() => irAPagina(item)}
                          aria-current={paginaActual === item ? "page" : undefined}
                          className={`min-w-10 h-10 rounded-xl text-sm font-semibold transition ${
                            paginaActual === item
                              ? "bg-[#FBBF24] text-[#1E3A8A] shadow"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {item}
                        </button>
                      )
                  )}

                  <button
                    type="button"
                    onClick={() => irAPagina(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                    className="inline-flex items-center gap-1 rounded-xl px-3 py-2 text-sm font-semibold text-[#1E3A8A] bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:hover:bg-gray-100 disabled:cursor-not-allowed transition"
                    aria-label="Página siguiente"
                  >
                    <span className="hidden sm:inline">Siguiente</span>
                    <ChevronRightIcon className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </nav>
        )}

        {productosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No se encontraron productos con los filtros o búsqueda ingresados.
          </p>
        )}
      </main>

      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <Modal
            producto={selectedProduct}
            onClose={handleCloseModal}
            onSolicitarCredito={() => handleClick(selectedProduct)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
