export interface Producto {
  id: number;
  nombre: string;
  precio: string;
  imagen: string;
  cuotas: string;
  marca: string;
  categoria: string;
  etiqueta: string;
  especificaciones: {
    pantalla?: string;
    tipoPantalla?: string;
    tasaRefresco?: string;
    procesador?: string;
    ram?: string;
    camara?: string;
    almacenamiento?: string;
    bateria?: string;
    carga?: string;
    sistemaOperativo?: string;
    resistencia?: string;
    peso?: string;
    dimensiones?: string;
    conectividad?: string;
    seguridad?: string;
    sensores?: string;
    sim?: string;
    colores?: string;
    materiales?: string;
    tecnologiaAudio?: string;
    nfc?: string;
  };
}
