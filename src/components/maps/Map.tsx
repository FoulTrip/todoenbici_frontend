"use client";

import { Loader } from "@googlemaps/js-api-loader";
import React, { useEffect, useRef } from "react";
import styles from "./maps.module.css";

import { positions } from "./positions";

const citys = [
  {
    lat: 3.3425625,
  },
];

interface mapProps {
  lat: number;
  lng: number;
}

function MapComponent({ lat, lng }: mapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_GOOGLE_KEY as string,
          version: "weekly",
        });

        const { Map } = await loader.importLibrary("maps");

        // Init a Marker
        const { Marker } = await loader.importLibrary(
          "marker"
        ); /*{as google.maps.MarkerLibrary;}*/

        const externPositions = {
          latitude: lat,
          longitude: lng,
        };

        const mapOption: google.maps.MapOptions = {
          zoom: 6,
          //   mapId: "MY_NEXTJS_MAPID",
        };

        const map = new Map(mapRef.current as HTMLDivElement, {
          center: positions.colombia.bogota,
          disableDefaultUI: true,
          ...mapOption,
        });

        for (let city in positions.colombia) {
          let position =
            positions.colombia[city as keyof typeof positions.colombia];
          let marker = new google.maps.Marker({
            position: new google.maps.LatLng(position.lat, position.lng),
            map: map,
            title: city,
          });
        }

        const marker = new Marker({
          map: map,
          position: positions.colombia.bogota,
        });
      } catch (error) {
        console.error("Error al cargar el mapa:", error);
      }
    };

    initMap();
  }, []);

  return (
    <>
      <div className={styles.mapContainer} ref={mapRef} />
    </>
  );
}

export default MapComponent;
