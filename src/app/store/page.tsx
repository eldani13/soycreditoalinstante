"use client";
import { useEffect, useState } from "react";
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
} from "@heroicons/react/24/solid";

import Beneficios from "@/components/Beneficios";
import { useProducto } from "@/context/ProductoContext";
import { useRouter } from "next/navigation";



export default function StorePage() {
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Producto | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 8;
  const router = useRouter();

  const marcas = [...new Set(productos.map((p) => p.marca))];

  const productosFiltrados = productos.filter((producto) => {
    const filtraMarca = marcaFiltro ? producto.marca === marcaFiltro : true;
    const filtraBusqueda = busqueda
      ? producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      : true;
    return filtraMarca && filtraBusqueda;
  });

  const indexUltimo = paginaActual * productosPorPagina;
  const indexPrimero = indexUltimo - productosPorPagina;
  const productosPagina = productosFiltrados.slice(indexPrimero, indexUltimo);

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
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-white shadow-xl rounded-3xl p-6 md:p-8 mb-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 text-black absolute top-3 left-3" />
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por nombre..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-black focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
              />
            </div>

            <div className="relative">
              <AdjustmentsHorizontalIcon className="w-5 h-5 text-black absolute top-2 left-3" />
              <select
                value={marcaFiltro}
                onChange={(e) => setMarcaFiltro(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-blackfocus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-800"
              >
                <option value="">Todas las marcas</option>
                {marcas.map((marca) => (
                  <option key={marca} value={marca}>
                    {marca}
                  </option>
                ))}
              </select>
            </div>
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

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
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

        <div className="flex justify-center items-center mt-10 gap-2 flex-wrap">
          {Array.from(
            {
              length: Math.ceil(productosFiltrados.length / productosPorPagina),
            },
            (_, i) => (
              <button
                key={i}
                onClick={() => setPaginaActual(i + 1)}
                className={`px-4 py-2 rounded-xl text-sm font-medium ${
                  paginaActual === i + 1
                    ? "bg-yellow-400 text-[#1E3A8A]"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {i + 1}
              </button>
            )
          )}
        </div>

        {productosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No se encontraron productos con los filtros o búsqueda ingresados.
          </p>
        )}
      </main>

      <Modal
        isOpen={isModalOpen}
        producto={selectedProduct}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
}
