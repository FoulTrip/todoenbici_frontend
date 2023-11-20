"use client";

import React from "react";
import Navbar from "@/components/navBars/NavBar";
import styles from "./page.module.css";
import Image from "next/image";

import { SiYourtraveldottv, SiJusteat } from "react-icons/si";
import { BsArrowRightShort, BsBicycle } from "react-icons/bs";
import { useRouter } from "next/navigation";

import AutoSliderLeft from "@/components/slider/autoSliderLeft";
import AutoSliderRight from "@/components/slider/autoSliderRight";

function Home() {
  const router = useRouter();
  return (
    <>
      <Navbar />

      <main className={styles.banner}>
        <AutoSliderLeft />
        <h2 className={styles.bannerPhrase}>
          Pedaleando por el mundo y descubriendo la aventura en cada giro
        </h2>
        <AutoSliderRight />
      </main>

      <main className={styles.biografic}>
        <section className={styles.informationBox}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <BsBicycle size={70} />
            </div>
            <p className={styles.textInfoCard}>10.000 km recorridos </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <SiYourtraveldottv size={70} />
            </div>
            <p className={styles.textInfoCard}>3 paises recorridos</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <SiJusteat size={70} />
            </div>
            <p className={styles.textInfoCard}>30 ollas comunitarias</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <SiJusteat size={70} />
            </div>
            <p className={styles.textInfoCard}>30 ollas comunitarias</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <SiJusteat size={70} />
            </div>
            <p className={styles.textInfoCard}>30 ollas comunitarias</p>
          </div>
        </section>

        <div></div>
      </main>

      <main className={styles.Main02}>
        <h2 className={styles.slogan}>Descubre y Disfruta</h2>
        <div className={styles.view01}>
          <div className={styles.boxServices}>
            <div
              className={styles.cardService}
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              <div className={styles.headerCardmap}></div>
              <p className={styles.cardDescription}>
                ¿Te fascinaría conocer los mejores restaurantes en las
                carreteras de mi país? descubre lo mejor del camino
              </p>
              <div className={styles.explorer}>
                <p>Rutas y viajes</p>
                <div className={styles.boxIcon}>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.boxServices}>
            <div className={styles.cardService}>
              <div className={styles.headerCardbici}></div>
              <div className={styles.cardDescription}>
                ¡Eleva tu aventura en dos ruedas al máximo! Descubre la potencia
                de nuestras piezas premium para bicicletas.
              </div>
              <div className={styles.explorer}>
                <p>Partes de mi bici</p>
                <div className={styles.boxIcon}>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            <div className={styles.cardService}>
              <div className={styles.headerCardebooks}></div>
              <div className={styles.cardDescription}>
                ¡Despierta tu sed de conocimiento y explora nuevos horizontes!
                Descubre las enseñanzas que nuestros ebooks
              </div>
              <div className={styles.explorer}>
                <p>Ebooks</p>
                <div className={styles.boxIcon}>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.boxServices}>
            <div className={styles.cardService}>
              <div className={styles.headerCardolla}></div>
              <div className={styles.cardDescription}>
                ¡Eleva tu aventura en dos ruedas al máximo! Descubre la potencia
                de nuestras piezas premium para bicicletas.
              </div>
              <div className={styles.explorer}>
                <p>Ollas comunitarias</p>
                <div className={styles.boxIcon}>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
