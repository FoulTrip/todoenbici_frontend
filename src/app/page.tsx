"use client";

import React, { useState } from "react";
import Navbar from "@/components/navBars/NavBar";
import styles from "./page.module.css";
import Image from "next/image";

import { SiYourtraveldottv, SiJusteat } from "react-icons/si";
import { BsArrowRightShort, BsBicycle } from "react-icons/bs";
import {
  FaYoutube,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaRoad,
  FaHandsHelping,
} from "react-icons/fa";
import { FaCity } from "react-icons/fa6";
import { BiSolidHomeHeart } from "react-icons/bi";
import { useRouter } from "next/navigation";

import AutoSliderLeft from "@/components/slider/autoSliderLeft";
import AutoSliderRight from "@/components/slider/autoSliderRight";
import pictureCEO from "@/assets/perfil_CEO.jpg";
import Footer from "@/components/footer/Footer";
import AutoSliderSponsor from "@/components/slider/sponsors";
import Typewriter from "typewriter-effect";

import banner01 from "@/assets/services_img/banner01.jpg";
import banner02 from "@/assets/services_img/banner02.jpg";
import banner03 from "@/assets/services_img/banner03.jpg";
import banner04 from "@/assets/services_img/banner04.jpg";
import banner05 from "@/assets/services_img/banner05.jpg";
import banner06 from "@/assets/services_img/banner06.jpg";
import banner07 from "@/assets/services_img/banner07.jpg";
import banner08 from "@/assets/services_img/banner08.jpg";
import banner09 from "@/assets/services_img/banner09.jpg";
import banner10 from "@/assets/services_img/banner10.jpg";

function Home() {
  const router = useRouter();
  const [textState, setTextState] = useState(false);
  return (
    <>
      <Navbar />

      <main className={styles.banner}>
        <AutoSliderLeft />
        {textState == false ? (
          <h2 className={styles.bannerPhrase}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("VUELTA AL MUNDO EN CARGOBIKE")
                  .pauseFor(2000)
                  .callFunction(() => {
                    setTextState(true);
                  })
                  .start();
              }}
            />
          </h2>
        ) : (
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
        )}
        <AutoSliderRight />
      </main>

      <main className={styles.biografic}>
        <section className={styles.informationBox}>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaRoad className={styles.iconRoad} size={70} />
            </div>
            <p className={styles.textInfoCard}>10.000 km recorridos </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaCity className={styles.iconCity} size={70} />
            </div>
            <p className={styles.textInfoCard}>3 paises recorridos</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaHandsHelping className={styles.iconHelping} size={70} />
            </div>
            <p className={styles.textInfoCard}>67 puntos de apoyo</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <BsBicycle className={styles.iconBicycle} size={70} />
            </div>
            <p className={styles.textInfoCard}>8 millones de pedaleadas</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <BiSolidHomeHeart className={styles.iconHomeHeart} size={70} />
            </div>
            <p className={styles.textInfoCard}>3 casas cicloviajeras</p>
          </div>
        </section>

        <div></div>
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
        <h2 className={styles.slogan}>Descubre y Disfruta</h2>
        <div className={styles.view01}>
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
              router.push("/guia");
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
              router.push("https://tripcode.vercel.app/");
            }}
          >
            <Image className={styles.iconoBanner} src={banner05} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/gastronomia");
            }}
          >
            <Image className={styles.iconoBanner} src={banner06} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/");
            }}
          >
            <Image className={styles.iconoBanner} src={banner07} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/music");
            }}
          >
            <Image className={styles.iconoBanner} src={banner08} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("/community");
            }}
          >
            <Image className={styles.iconoBanner} src={banner09} alt="bn1" />
          </div>

          <div
            className={styles.boxServices}
            onClick={() => {
              router.push("https://oskargo.vercel.app/");
            }}
          >
            <Image className={styles.iconoBanner} src={banner10} alt="bn1" />
          </div>
        </div>

        <p className={styles.textPatro}>Patrocinadores</p>
        <AutoSliderSponsor />
      </main>

      <Footer />
    </>
  );
}

export default Home;
