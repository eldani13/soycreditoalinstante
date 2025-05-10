"use client";
import { useEffect } from "react";
import { useProducto } from "@/context/ProductoContext";
import { Producto } from "@/interfaces/Productos";
import Image from "next/image";

export default function SolicitudCredito() {
  const { productoSeleccionado, setProductoSeleccionado } = useProducto();

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
      <p className="text-center text-gray-500 text-lg">Cargando producto...</p>
    );
  }

  const { nombre, imagen, especificaciones } = productoSeleccionado;

  return (
    <section className="bg-[#f6cc00] py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="p-8 space-y-8">
          <div className="flex justify-center">
            <Image
              src={imagen}
              alt={nombre}
              width={300}
              height={300}
              className="object-contain transition-transform hover:scale-105 duration-300"
            />
          </div>
          <h2 className="text-telefonoCredito text-4xl font-extrabold text-blue-900 text-center tracking-tight">
            {nombre}
          </h2>

          <div className="text-lg text-gray-800 space-y-1 leading-relaxed">
            {especificaciones.ram && (
              <p>
                <span className="font-semibold">RAM:</span>{" "}
                {especificaciones.ram}
              </p>
            )}
            {especificaciones.almacenamiento && (
              <p>
                <span className="font-semibold">Almacenamiento:</span>{" "}
                {especificaciones.almacenamiento}
              </p>
            )}
            {especificaciones.procesador && (
              <p>
                <span className="font-semibold">Procesador:</span>{" "}
                {especificaciones.procesador}
              </p>
            )}
            {especificaciones.pantalla && (
              <p>
                <span className="font-semibold">Pantalla:</span>{" "}
                {especificaciones.pantalla}
              </p>
            )}
            {especificaciones.bateria && (
              <p>
                <span className="font-semibold">Batería:</span>{" "}
                {especificaciones.bateria}
              </p>
            )}
            {especificaciones.camara && (
              <p>
                <span className="font-semibold">Cámara:</span>{" "}
                {especificaciones.camara}
              </p>
            )}
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-minutos text-3xl font-bold text-gray-900 mb-10 leading-snug">
            Solicita tu crédito en minutos
          </h3>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-800">
                Nombre completo
              </label>
              <input
                type="text"
                placeholder="Ej. Juan Pérez"
                className="w-full px-5 py-3 rounded-xl text-base text-black focus:outline-none focus:ring-2 focus:ring-blue-700 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-800">
                Correo electrónico
              </label>
              <input
                type="email"
                placeholder="Ej. juan@email.com"
                className="w-full px-5 py-3 rounded-xl text-base  text-black focus:outline-none focus:ring-2 focus:ring-blue-700 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-800">
                Teléfono
              </label>
              <input
                type="tel"
                placeholder="Ej. 0991234567"
                className="w-full px-5 py-3 rounded-xl text-base text-black focus:outline-none focus:ring-2 focus:ring-blue-700 bg-white"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-base font-medium text-gray-800">
                Comentarios adicionales
              </label>
              <textarea
                rows={4}
                placeholder="Escribe aquí cualquier detalle adicional..."
                className="w-full px-5 py-3 rounded-xl text-base text-black focus:outline-none focus:ring-2 focus:ring-blue-700 bg-white resize-none"
              />
            </div>

            <a
              href="https://wa.me/593XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-green-600 text-white font-semibold py-3 text-lg rounded-xl hover:bg-green-700 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M20.52 3.48A11.9 11.9 0 0012.05 0 11.96 11.96 0 000 12a11.9 11.9 0 001.65 6L0 24l6.29-1.65A11.9 11.9 0 0012.05 24C18.64 24 24 18.64 24 12c0-3.19-1.24-6.19-3.48-8.52zM12.05 22a9.88 9.88 0 01-5.19-1.46l-.37-.23-3.74.98 1-3.64-.24-.37A9.9 9.9 0 1122 12a9.88 9.88 0 01-9.95 10zM17 14.8c-.29-.15-1.71-.84-1.98-.94-.27-.1-.47-.15-.66.15-.2.29-.76.94-.93 1.13-.17.2-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.77-1.44-1.7-1.6-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.5.15-.17.2-.29.3-.48.1-.2.05-.37-.02-.52-.07-.15-.66-1.59-.9-2.2-.24-.59-.48-.51-.66-.52l-.56-.01c-.2 0-.52.07-.79.37-.27.29-1.04 1.01-1.04 2.48 0 1.47 1.06 2.89 1.2 3.09.15.2 2.09 3.18 5.07 4.46.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.71-.7 1.95-1.38.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34z" />
              </svg>
              Continuar proceso
            </a>
          </form>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20 text-center px-4">
        <h4 className="text-funcion text-2xl font-bold text-gray-900 mb-4">
          ¿Cómo funciona el proceso de solicitud?
        </h4>
        <p className="text-gray-800 text-lg leading-relaxed">
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
