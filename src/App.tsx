import React, { useEffect, useState } from "react";
import { fetchAQIDataByCity } from "./services/api";
import {type AQIData } from "./types/aqi";

const App: React.FC = () => {
  const [data, setData] = useState<AQIData[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getData = async () => {
      const result = await fetchAQIDataByCity("Lagos");
      setData(result);
      setLoading(false);
    };

    getData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-center mb-6">
        Real-Time Air Quality Tracker
      </h1>

      <div className="max-w-4xl mx-auto space-y-6">
        {loading ? (
          <p className="text-center text-lg">Loading AQI for Lagos...</p>
        ) : data.length === 0 ? (
          <p className="text-center text-red-600 font-medium">
            Could not fetch AQI data.
          </p>
        ) : (
          <pre className="bg-white p-4 rounded-lg shadow text-sm overflow-auto">
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
};

export default App;
