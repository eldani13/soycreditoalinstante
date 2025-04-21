import L from 'leaflet';

export const defaultIcon = new L.Icon({
  iconUrl: '/logo.png',
  iconRetinaUrl: '/logo.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
