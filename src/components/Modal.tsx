import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Producto } from "@/interfaces/Productos";


interface ModalProps {
  isOpen: boolean;
  producto: Producto | null; 
  onClose: () => void;
}


export default function Modal({ isOpen, producto, onClose }: ModalProps) {
  if (!isOpen || !producto) return null;


  const handleCloseModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-[rgba(31,41,55,0.7)] flex items-center justify-center z-50"
      onClick={handleCloseModal}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-lg p-4 sm:p-8 w-11/12 max-w-4xl flex flex-col sm:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full sm:w-1/3 mb-4 sm:mb-0">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={300}
            height={300}
            className="rounded-lg object-contain mx-auto"
          />

          <button className="hidden sm:block bg-[#FBBF24] text-[#1E3A8A] font-semibold px-4 py-2 rounded-xl hover:bg-yellow-400 transition mt-4 mx-auto flex justify-center">
            Solicitar Crédito
          </button>
        </div>

        <div className="flex flex-col w-full sm:w-2/3">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            {producto.nombre}
          </h2>
          <p className="text-lg font-medium text-gray-800">{producto.precio}</p>
          <p className="text-sm text-gray-500 mb-4">{producto.cuotas}</p>

          <div className="flex-grow overflow-y-auto max-h-60 sm:max-h-[600px] text-gray-700">
            <div className="space-y-2">
              <p>
                <strong>Pantalla:</strong> {producto.especificaciones.pantalla}
              </p>
              <p>
                <strong>Procesador:</strong>{" "}
                {producto.especificaciones.procesador}
              </p>
              <p>
                <strong>Cámara:</strong> {producto.especificaciones.camara}
              </p>
              <p>
                <strong>Almacenamiento:</strong>{" "}
                {producto.especificaciones.almacenamiento}
              </p>
              <p>
                <strong>Batería:</strong> {producto.especificaciones.bateria}
              </p>
              <p>
                <strong>Sistema Operativo:</strong>{" "}
                {producto.especificaciones.sistemaOperativo}
              </p>
              <p>
                <strong>Carga:</strong> {producto.especificaciones.carga}
              </p>
              <p>
                <strong>Resistencia:</strong>{" "}
                {producto.especificaciones.resistencia}
              </p>
              <p>
                <strong>Peso:</strong> {producto.especificaciones.peso}
              </p>
              <p>
                <strong>Dimensiones:</strong>{" "}
                {producto.especificaciones.dimensiones}
              </p>
            </div>
          </div>

          <div className="sm:hidden mt-4 flex justify-center sm:justify-start">
            <button className="bg-[#FBBF24] text-[#1E3A8A] font-semibold px-4 py-2 rounded-xl hover:bg-yellow-400 transition">
              Solicitar Crédito
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
