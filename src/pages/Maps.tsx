// MapComponent.tsx
import React, { useState } from "react";

import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  Rectangle,
  TileLayer,
} from "react-leaflet";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

// Default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Maps: React.FC = () => {
  return (
    <MapContainer
      center={[6.5244, 3.3792]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[6.5244, 3.3792]}>
        <Popup>
          Tizeri HQ <br /> Get all your wears hear at an affordable rate
        </Popup>
      </Marker>
      <Marker position={[6.524, 3.37]}>
        <Popup>
          Shiro Street
          <br /> Welcome to Shiro Street
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Maps;
