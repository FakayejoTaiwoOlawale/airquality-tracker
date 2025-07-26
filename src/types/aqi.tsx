// src/types/aqi.ts

export interface Measurement {
  parameter: string; // e.g. "pm25"
  value: number; // pollutant value
  unit: string; // e.g. "µg/m³"
  lastUpdated: string; // ISO timestamp
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface AQIData {
  city: string;
  country: string;
  location: string;
  measurements: Measurement[];
}
