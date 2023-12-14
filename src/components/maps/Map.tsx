import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef, useState } from "react";
import styles from "./maps.module.css";

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface mapProps {
  cordinates: Coordinates[];
}

function MapComponent({ cordinates }: mapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function initMap() {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY as string,
          version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");
        const { Marker } = await loader.importLibrary("marker");

        if (!Map) {
          console.error("Error al cargar el mapa");
          return;
        }

        const map = new Map(mapRef.current as HTMLDivElement, {
          center: {
            lat: 3.4516,
            lng: -76.532,
          },
          disableDefaultUI: true,
          zoom: 6,
        });

        cordinates.forEach((coordinate) => {
          if (
            coordinate.latitude !== undefined &&
            coordinate.longitude !== undefined
          ) {
            new Marker({
              position: new google.maps.LatLng(
                coordinate.latitude,
                coordinate.longitude
              ),
              map: map,
            });
          } else {
            console.error("Coordenadas inválidas:", coordinate);
          }
        });

        setLoading(false); // Set loading to false after map is initialized
      } catch (error) {
        console.error("Error al cargar el mapa:", error);
      }
    }

    const firstCoordinate = cordinates[0];

    if (
      cordinates.length > 0 &&
      firstCoordinate &&
      firstCoordinate.latitude &&
      firstCoordinate.longitude
    ) {
      if (!window.google || !window.google.maps) {
        initMap();
      }
    } else {
      console.warn("No hay coordenadas para mostrar en el mapa.");
    }
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading...</div> // Show a loading message while the map is being initialized
      ) : (
        <div className={styles.mapContainer} ref={mapRef} />
      )}
    </>
  );
}

export default MapComponent;
