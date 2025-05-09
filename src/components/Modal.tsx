import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Producto } from "@/interfaces/Productos";
import { XMarkIcon } from "@heroicons/react/24/outline";

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
      className="fixed inset-0 bg-[rgba(31,41,55,0.7)] flex items-center justify-center z-50 p-4"
      onClick={handleCloseModal}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-2xl overflow-hidden w-full max-w-5xl max-h-screen flex flex-col sm:flex-row relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white hover:bg-gray-100 p-2 rounded-full shadow-md z-10"
        >
          <XMarkIcon className="w-6 h-6 text-gray-600 cursor-pointer" />
        </button>

        <div className="bg-gray-50 p-4 sm:p-6 w-full sm:w-1/3 flex flex-col items-center justify-center gap-4 border-b sm:border-b-0 sm:border-r">
          <Image
            src={producto.imagen}
            alt={producto.nombre}
            width={240}
            height={240}
            className="rounded-lg object-contain max-w-full h-auto"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-4 py-2 rounded-xl transition-all text-sm sm:text-base w-full">
            Solicitar Crédito
          </button>
        </div>

        <div className="p-4 sm:p-6 w-full sm:w-2/3 flex flex-col text-gray-800">
          <h2 className="text-xl sm:text-2xl font-bold text-blue-700 mb-1">
            {producto.nombre}
          </h2>
          <p className="text-base sm:text-lg font-medium">{producto.precio}</p>
          <p className="text-sm text-gray-500 mb-4">{producto.cuotas}</p>

          <div className="overflow-y-auto max-h-[40vh] pr-1 scroll-smooth">
            <div className="space-y-2 text-sm sm:text-base">
              {producto.especificaciones.pantalla && (
                <p>
                  <strong>Pantalla:</strong>{" "}
                  {producto.especificaciones.pantalla}
                </p>
              )}
              {producto.especificaciones.tipoPantalla && (
                <p>
                  <strong>Tipo de Pantalla:</strong>{" "}
                  {producto.especificaciones.tipoPantalla}
                </p>
              )}
              {producto.especificaciones.tasaRefresco && (
                <p>
                  <strong>Tasa de Refresco:</strong>{" "}
                  {producto.especificaciones.tasaRefresco}
                </p>
              )}
              {producto.especificaciones.procesador && (
                <p>
                  <strong>Procesador:</strong>{" "}
                  {producto.especificaciones.procesador}
                </p>
              )}
              {producto.especificaciones.ram && (
                <p>
                  <strong>RAM:</strong> {producto.especificaciones.ram}
                </p>
              )}
              {producto.especificaciones.almacenamiento && (
                <p>
                  <strong>Almacenamiento:</strong>{" "}
                  {producto.especificaciones.almacenamiento}
                </p>
              )}
              {producto.especificaciones.camara && (
                <p>
                  <strong>Cámara:</strong> {producto.especificaciones.camara}
                </p>
              )}
              {producto.especificaciones.bateria && (
                <p>
                  <strong>Batería:</strong> {producto.especificaciones.bateria}
                </p>
              )}
              {producto.especificaciones.carga && (
                <p>
                  <strong>Carga:</strong> {producto.especificaciones.carga}
                </p>
              )}
              {producto.especificaciones.sistemaOperativo && (
                <p>
                  <strong>Sistema Operativo:</strong>{" "}
                  {producto.especificaciones.sistemaOperativo}
                </p>
              )}
              {producto.especificaciones.resistencia && (
                <p>
                  <strong>Resistencia:</strong>{" "}
                  {producto.especificaciones.resistencia}
                </p>
              )}
              {producto.especificaciones.peso && (
                <p>
                  <strong>Peso:</strong> {producto.especificaciones.peso}
                </p>
              )}
              {producto.especificaciones.dimensiones && (
                <p>
                  <strong>Dimensiones:</strong>{" "}
                  {producto.especificaciones.dimensiones}
                </p>
              )}
              {producto.especificaciones.tecnologiaAudio && (
                <p>
                  <strong>Audio:</strong>{" "}
                  {producto.especificaciones.tecnologiaAudio}
                </p>
              )}
              {producto.especificaciones.conectividad && (
                <p>
                  <strong>Conectividad:</strong>{" "}
                  {producto.especificaciones.conectividad}
                </p>
              )}
              {producto.especificaciones.seguridad && (
                <p>
                  <strong>Seguridad:</strong>{" "}
                  {producto.especificaciones.seguridad}
                </p>
              )}
              {producto.especificaciones.sensores && (
                <p>
                  <strong>Sensores:</strong>{" "}
                  {producto.especificaciones.sensores}
                </p>
              )}
              {producto.especificaciones.sim && (
                <p>
                  <strong>SIM:</strong> {producto.especificaciones.sim}
                </p>
              )}
              {producto.especificaciones.colores && (
                <p>
                  <strong>Colores:</strong> {producto.especificaciones.colores}
                </p>
              )}
              {producto.especificaciones.materiales && (
                <p>
                  <strong>Materiales:</strong>{" "}
                  {producto.especificaciones.materiales}
                </p>
              )}
              {producto.especificaciones.nfc && (
                <p>
                  <strong>NFC:</strong> {producto.especificaciones.nfc}
                </p>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
