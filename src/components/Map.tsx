"use client";

import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MapProps {
  center?: number[];
}

const Map = ({ center }: MapProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const defaultCenter: [number, number] = [4.611, -74.083];
  const mapCenter: [number, number] = center && center.length === 2 ? [center[0], center[1]] : defaultCenter;

  if (!isClient) return null;

  return (
    <MapContainer
      className="mt-5 z-0"
      center={mapCenter}
      zoom={4}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={mapCenter} icon={customIcon} />
    </MapContainer>
  );
};

export default Map;