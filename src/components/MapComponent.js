import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function MapComponent({ data }) {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} className="h-96">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {data.map((item, index) => (
        <Marker key={index} position={[item.lat, item.lng]}>
          <Popup>{item.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapComponent;
