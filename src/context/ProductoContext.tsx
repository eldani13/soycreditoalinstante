"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface Producto {
  id: number;
  nombre: string;
  imagen: string;
  especificaciones: {
    ram?: string;
    almacenamiento?: string;
    procesador?: string;
    pantalla?: string;
    bateria?: string;
    camara?: string;
  };
  
}

interface ProductoContextType {
  productoSeleccionado: Producto | null;
  setProductoSeleccionado: (producto: Producto) => void;
}

const ProductoContext = createContext<ProductoContextType | undefined>(undefined);

export const ProductoProvider = ({ children }: { children: ReactNode }) => {
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  return (
    <ProductoContext.Provider value={{ productoSeleccionado, setProductoSeleccionado }}>
      {children}
    </ProductoContext.Provider>
  );
};

export const useProducto = () => {
  const context = useContext(ProductoContext);
  if (!context) throw new Error("useProducto debe usarse dentro de ProductoProvider");
  return context;
};
