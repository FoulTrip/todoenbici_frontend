"use client";

import React from "react";
import Navbar from "@/components/navBars/NavBar";
import styles from "./page.module.css";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaRoad,
  FaHandsHelping,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

import { MdDirectionsBike } from "react-icons/md";

import pictureCEO from "@/assets/perfil_CEO.jpg";
import Footer from "@/components/footer/Footer";
import Typewriter from "typewriter-effect";

import banner01 from "@/assets/services_img/banner01.jpg";
import banner02 from "@/assets/services_img/banner02.jpg";
import banner03 from "@/assets/services_img/banner03.jpg";
import banner04 from "@/assets/services_img/banner04.jpg";
import banner05 from "@/assets/services_img/banner05.jpg";
import banner06 from "@/assets/services_img/banner06.jpg";
import banner07 from "@/assets/services_img/banner07.jpg";
import oskargo_logo from "@/assets/oscargo_logo.png";
import tripcode_logo from "@/assets/tripcode_logo.png";
import juliaca_logo from "@/assets/juliaca_logo.png";
import VideoComponent from "@/components/video/VideoComponent";
import AutoSliderLeft from "@/components/slider/autoSliderLeft";

function Home() {
  const router = useRouter();
  const isBigScreen = useMediaQuery({ query: "(min-width: 900px)" });
  return (
    <>
      <Navbar />

      <main className={styles.banner}>
        <div>
          <h2 className={styles.bannerPhrase}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("VUELTA AL MUNDO EN CARGOBIKE")
                  .pauseFor(2000)
                  .start();
              }}
            />
          </h2>

          <div className={styles.barBtnYoutube}>
            <div
              className={styles.realBtnYtb}
              onClick={() =>
                router.push("https://www.youtube.com/@TodoenBicicleta")
              }
            >
              <div className={styles.realBtnIconBox}>
                <FaYoutube />
              </div>
              <p>Pedalea conmigo</p>
            </div>
          </div>
        </div>
      </main>

      <main className={styles.biografic}>
        <section className={styles.informationBox}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <MdDirectionsBike className={styles.iconRoad} size={70} />
            </div>
            <p className={styles.textInfoCard}>10.000 km recorridos </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaRoad className={styles.iconCity} size={70} />
            </div>
            <p className={styles.textInfoCard}>8 Millones de pedaleadas</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaHandsHelping className={styles.iconHelping} size={70} />
            </div>
            <p className={styles.textInfoCard}>67 puntos de apoyo</p>
          </div>
        </section>
      </main>

      <main className={styles.aboutMain}>
        <div className={styles.boxImage}>
          <Image className={styles.iconCEO} src={pictureCEO} alt="ceo" />
        </div>
        <div className={styles.ceo_info}>
          <div className={styles.subceo_info}>
            <h2>¿Quien Soy?</h2>
            <p className={styles.textInfoCEO}>
              ¡Hola aventureros! Soy Carlos Vasquez, un apasionado cicloviajero
              colombiano en busca de experiencias únicas sobre dos ruedas. Mi
              misión es demostrar que en bicicleta se puede llegar a cualquier
              rincón, descubriendo la magia de cada lugar a un ritmo tranquilo.
              Con mi pedalada, quiero inspirarte a explorar el mundo, conectarte
              con la naturaleza y disfrutar de la libertad que solo una
              bicicleta puede ofrecer. Únete a mi viaje y descubre la emoción de
              explorar cada kilómetro con el viento como compañero.
            </p>
            <div className={styles.redBox}>
              <div className={styles.subRedBox}>
                <p>Redes</p>
                <div className={styles.pasarellIconss}>
                  <div className={styles.centerIcons}>
                    <FaYoutube
                      onClick={() =>
                        router.push("https://www.youtube.com/@TodoenBicicleta")
                      }
                      size={25}
                      className={styles.iconYoutube}
                    />
                    <FaFacebook
                      size={25}
                      onClick={() =>
                        router.push(
                          "https://www.facebook.com/todoenbicicletacolombia"
                        )
                      }
                      className={styles.iconFacebook}
                    />
                    <FaInstagram
                      size={25}
                      onClick={() =>
                        router.push("https://www.instagram.com/Todoenbicicleta")
                      }
                      className={styles.iconInstagram}
                    />
                    <FaTiktok
                      size={25}
                      onClick={() =>
                        router.push(
                          "https://www.tiktok.com/@todo.enbicicleta?fbclid=IwAR3-k2G7QUT_ECgyOKXrtgbjl7eVZT8yPutgUgPV8JKchvp8t2p6nYgOCjs"
                        )
                      }
                      className={styles.iconTiktok}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main className={styles.Main02}>
        {isBigScreen ? (
          <h1 className={styles.services_title}>Explora y disfuta</h1>
        ) : null}
        <div className={styles.view001}>
          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/shop");
            }}
          >
            <Image className={styles.iconoBanner} src={banner01} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/ruta");
            }}
          >
            <Image className={styles.iconoBanner} src={banner02} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/shop");
            }}
          >
            <Image className={styles.iconoBanner} src={banner03} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/shop");
            }}
          >
            <Image className={styles.iconoBanner} src={banner04} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/music");
            }}
          >
            <Image className={styles.iconoBanner} src={banner05} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/cicloviajero");
            }}
          >
            <Image className={styles.iconoBanner} src={banner06} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/guia");
            }}
          >
            <Image className={styles.iconoBanner} src={banner07} alt="bn1" />
          </div>
        </div>
      </main>

      <section className={styles.containerVideo}>
        <VideoComponent />
      </section>

      <main>
        <p className={styles.textPatro}>Colaboradores</p>
        <div className={styles.cubeLogos}>
          <div className={styles.centerLogos}>
            <div className={styles.imgLogos}>
              <Image
                className={styles.iconLogo}
                src={oskargo_logo}
                alt="oskargo"
              />
            </div>
            <div className={styles.imgLogos}>
              <Image
                className={styles.iconLogo}
                src={tripcode_logo}
                alt="oskargo"
              />
            </div>
          </div>
        </div>
        <p className={styles.textPatro}>Patrocinadores</p>
        <div className={styles.cubeLogos}>
          <div className={styles.centerLogos}>
            <div className={styles.imgLogos}>
              <Image
                className={styles.iconLogo}
                src={juliaca_logo}
                alt="oskargo"
              />
            </div>
          </div>
        </div>
      </main>

      <div className={styles.bannerInstagram}>
        <AutoSliderLeft />
        <div className={styles.btnInstagram}>
          <div
            className={styles.centerBtnInstagram}
            onClick={() =>
              router.push("https://www.instagram.com/Todoenbicicleta")
            }
          >
            <div className={styles.boxIconRed}>
              <FaInstagram />
            </div>
            <p>Instagram</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
