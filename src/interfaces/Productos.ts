export interface Producto {
    id: number;
    nombre: string;
    imagen: string;
    precio: string;
    cuotas: string;
    marca: string;
    categoria: string;
    especificaciones: {
      pantalla: string;
      procesador: string;
      camara: string;
      almacenamiento: string;
      bateria: string;
      sistemaOperativo: string;
      carga: string;
      resistencia: string;
      peso: string;
      dimensiones: string;
    };
  }
  