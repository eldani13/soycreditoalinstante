"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import type { LatLngTuple } from "leaflet";

interface Municipio {
  nombre: string;
  coords: {
    lat: number;
    lng: number;
  };
}

interface Zona {
  departamento: string;
  agente: string;
  municipios: Municipio[];
  coords: {
    lat: number;
    lng: number;
  };
}

export default function PresenciaMap({ zonas }: { zonas: Zona[] }) {
  const allCoordinates = zonas.flatMap((zona) =>
    zona.municipios.map((municipio) => municipio.coords)
  );

  const avgLat =
    allCoordinates.reduce((sum, coord) => sum + coord.lat, 0) /
    allCoordinates.length;
  const avgLng =
    allCoordinates.reduce((sum, coord) => sum + coord.lng, 0) /
    allCoordinates.length;

  const position: LatLngTuple = [avgLat, avgLng];

  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <MapContainer
      center={position}
      zoom={9}
      scrollWheelZoom={false}
      className="h-[500px] w-full rounded-xl shadow-lg border-2 border-blue-600"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {zonas.map((zona, index) =>
        zona.municipios.map((municipio, i) => (
          <Marker
            key={`${index}-${i}`}
            position={[municipio.coords.lat, municipio.coords.lng]}
            icon={customIcon}
          >
            <Popup className="text-[#1E40AF] font-semibold">
              <strong>{municipio.nombre}</strong>
              <br />
              Agente: {zona.agente}
            </Popup>
          </Marker>
        ))
      )}
    </MapContainer>
  );
}
