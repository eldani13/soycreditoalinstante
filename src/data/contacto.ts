export const contacto = {
  telefono: "3021093652",
  telefonoVisible: "302 109 3652",
  telefonoIntl: "573021093652",
  email: "administrador@soycreditoalinstante.com",
  oficina: "Oficina principal",
  direccion: "Calle 7N #5-19",
  municipio: "Madrid, Cundinamarca",
  local: "Centro Comercial La Casona, Local 4",
};

export const telHref = `tel:+${contacto.telefonoIntl}`;

export function whatsappHref(mensaje?: string) {
  const base = `https://wa.me/${contacto.telefonoIntl}`;
  if (!mensaje) return base;
  return `${base}?text=${encodeURIComponent(mensaje)}`;
}

export const direccionCompleta = `${contacto.direccion}, ${contacto.local}, ${contacto.municipio}`;
