"use client";

import MapComponent from "@/components/maps/Map";
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Navbar from "@/components/navBars/NavBar";

interface Coordinates {
  latitude: number;
  longitude: number;
}

function RutaPage() {
  const [coordinates, setCoordinates] = useState<Coordinates[]>([]);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await axios.get("/api/coordinates");
        const data: Coordinates[] = await response.data;
        setCoordinates(data);
        setMapLoaded(true);
      } catch (error) {
        console.log("Error al obtener coordenadas:", error);
      }
    };

    fetchCoordinates();
  }, []);

  return (
    <>
      <Navbar />
      <div className={styles.containerPage}>
        <h1 className={styles.titleHeader}>
          Cicloviaje en Directo: Descubre mi Ruta
        </h1>
        <div className={styles.mapBox}>
          {mapLoaded == true ? (
            <>
              <div className={styles.mapBox}>
                <p>Proximamente...</p>
              </div>
            </>
          ) : null}
          {!mapLoaded && <p>Cargando mapa...</p>}
        </div>
      </div>
    </>
  );
}

export default RutaPage;
