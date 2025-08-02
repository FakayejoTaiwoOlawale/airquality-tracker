// MapComponent.tsx
import React, { useState } from "react";
import {
  Circle,
  LayerGroup,
  LayersControl,
  MapContainer,
  Marker,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
} from "react-leaflet";

const Maps: React.FC = () => {
  return (
    <MapContainer
      center={[1.3521, 103.8198]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    </MapContainer>
  );
};

export default Maps;
