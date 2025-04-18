"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Modal from "@/components/Modal";
import { productos } from "../data/telefonos";

export default function StorePage() {
  const [marcaFiltro, setMarcaFiltro] = useState("");
  const [categoriaFiltro, setCategoriaFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const marcas = [...new Set(productos.map((p) => p.marca))];
  const categorias = [...new Set(productos.map((p) => p.categoria))];

  const productosFiltrados = productos.filter((producto) => {
    const filtraMarca = marcaFiltro ? producto.marca === marcaFiltro : true;
    const filtraCategoria = categoriaFiltro
      ? producto.categoria === categoriaFiltro
      : true;
    const filtraBusqueda = busqueda
      ? producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
      : true;
    return filtraMarca && filtraCategoria && filtraBusqueda;
  });

  const handleOpenModal = (producto: any) => {
    setSelectedProduct(producto);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-28 pb-16 px-6 max-w-7xl mx-auto w-full">
        <div className="flex flex-wrap gap-4 justify-center mb-10 sticky top-24 py-4 bg-white shadow-md z-50 rounded-2xl">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="Buscar por nombre..."
            className="border border-black rounded-lg px-4 py-2 w-60 text-black"
          />

          <select
            value={marcaFiltro}
            onChange={(e) => setMarcaFiltro(e.target.value)}
            className="border border-black rounded-lg px-4 py-2 text-black"
          >
            <option value="">Todas las marcas</option>
            {marcas.map((marca) => (
              <option key={marca} value={marca}>
                {marca}
              </option>
            ))}
          </select>

          <select
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
            className="border border-black rounded-lg px-4 py-2 text-black"
          >
            <option value="">Todas las categorías</option>
            {categorias.map((categoria) => (
              <option key={categoria} value={categoria}>
                {categoria}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10">
          <AnimatePresence>
            {productosFiltrados.map((producto) => (
              <motion.div
                key={producto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                layout
                className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center text-center hover:shadow-xl transition"
              >
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

                <button className="bg-[#1E3A8A] text-white font-semibold px-4 py-2 rounded-xl hover:bg-blue-700 transition mt-4">
                  Solicitar Crédito
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
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
