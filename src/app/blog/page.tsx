"use client";

import React from "react";
import styles from "./blog.module.css";
import iconBiciWarn from "@/assets/icons/bicicleta.png";

import {
  IoMdCash,
  IoIosPodium,
  IoIosHome,
  IoIosArrowRoundForward,
} from "react-icons/io";

import MapComponent from "@/components/maps/Map";
import PostCard from "@/components/cards/PostCard";
import Navbar from "@/components/navBars/NavBar";

function Blog() {
  return (
    <>
      <Navbar />
      <div className={styles.postBlog}>
        <p className={styles.textPost}>
          Descubre la libertad infinita de recorrer el mundo en bicicleta. Más
          que un simple medio de transporte, viajar sobre dos ruedas se
          convierte en una aventura que despierta los sentidos y abre las
          puertas a paisajes inexplorados. Pedalea hacia la libertad, descubre
          destinos únicos y vive la magia de un viaje que transforma cada giro
          de pedal en una experiencia inolvidable. ¡Atrévete a explorar el mundo
          desde una perspectiva completamente nueva!
        </p>

        <div className={styles.houseBici}>
          <div className={styles.boxMap}>
            <MapComponent lat={3.451647} lng={-76.532051} />
          </div>
          <div className={styles.infoHouse}>
            <div className={styles.subInfoHouse}>
              <h1 className={styles.proyectTitle}>Casas Ciclistas</h1>
              <p className={styles.descriptionPrjct}>
                Pedalea hacia tu nuevo hogar en nuestras Casas Ciclistas.
                Combina estilo de vida activo con comodidad. ¡Descubre el placer
                de vivir sobre dos ruedas!
              </p>
              <div className={styles.bannerTitle}>
                <div className={styles.subBoxImg}>
                  <div className={styles.fatherBoxImg}>
                    <div className={styles.fhrIcon}>
                      <IoIosHome size={13} />
                    </div>
                    <div className={styles.fhrIcon}>
                      <IoMdCash size={13} />
                    </div>
                    <div className={styles.fhrIcon}>
                      <IoIosPodium size={13} />
                    </div>
                  </div>
                  <h2 className={styles.titleBoxImg}>Proyecto</h2>
                  <div className={styles.arrowIcon}>
                    <IoIosArrowRoundForward />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* <div className={styles.mapPosting}>
        <MapComponent />
      </div> */}
    </>
  );
}

export default Blog;
