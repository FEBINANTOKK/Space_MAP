import React from "react";
import MapComponent from "../components/MapComponent";

function MapPage() {
  // Sample data for markers
  const markerData = [
    { lat: 51.505, lng: -0.09, name: "Marker 1" },
    { lat: 51.515, lng: -0.1, name: "Marker 2" },
    { lat: 51.525, lng: -0.11, name: "Marker 3" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Interactive Map</h1>
      <p className="mb-4 text-gray-700">
        Below is a map with multiple markers. Click on a marker to view details.
      </p>
      <MapComponent data={markerData} />
    </div>
  );
}

export default MapPage;
