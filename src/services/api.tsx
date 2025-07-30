// src/services/api.ts
import axios from "axios";
import { type AQIData } from "../types/aqi";
//signed up for open aqi data
const BASE_URL = "https://api.openaq.org/v3/locations/2178";
const apiKey = process.env.REACT_APP_OPENAQ_API_KEY;

//i just realised that the :promise... could be to define what we are returning
export const fetchAQIDataByCity = async (city: string): Promise<AQIData[]> => {
const response = await axios.get(BASE_URL, {
      headers: {
        "X-API-Key": apiKey || "",
      },
      params: {
        city,
        limit: 1,
      },
    });
    const results = response.data.results;

    const formatted: AQIData[] = results.map((item: any) => ({
      city: item.city,
      country: item.country,
      location: item.location,
      measurements: item.measurements.map((m: any) => ({
        parameter: m.parameter,
        value: m.value,
        unit: m.unit,
        lastUpdated: m.lastUpdated,
        coordinates: {
          latitude: m.coordinates.latitude,
          longitude: m.coordinates.longitude,
        },
      })),
    }));

    return formatted;
  } catch (error) {
    console.error("Error fetching AQI data:", error);
    return [];
  }
};
