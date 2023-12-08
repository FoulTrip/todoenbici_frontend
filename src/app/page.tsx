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
import Avatar from "react-avatar";
import Footer from "@/components/footer/Footer";
import AutoSliderSponsor from "@/components/slider/sponsors";
import Typewriter from "typewriter-effect";

import animateMarkerGps from "@/assets/marcadores/distancia.gif";
import MarkerGps from "@/assets/marcadores/distancia.png";

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
            <div className={styles.realBtnYtb}>
              <FaYoutube />
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
              <FaRoad size={70} />
            </div>
            <p className={styles.textInfoCard}>10.000 km recorridos </p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaCity size={70} />
            </div>
            <p className={styles.textInfoCard}>3 paises recorridos</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <FaHandsHelping size={70} />
            </div>
            <p className={styles.textInfoCard}>67 puntos de apoyo</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <BsBicycle size={70} />
            </div>
            <p className={styles.textInfoCard}>8 millones de pedaleadas</p>
          </div>
          <div className={styles.infoCard}>
            <div className={styles.infoIcon}>
              <BiSolidHomeHeart size={70} />
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
                    <FaYoutube size={25} className={styles.iconYoutube} />
                    <FaFacebook size={25} className={styles.iconFacebook} />
                    <FaInstagram size={25} className={styles.iconInstagram} />
                    <FaTiktok size={25} className={styles.iconTiktok} />
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
                <p>Ruta</p>
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
                <p>Tienda</p>
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
                Estas viajando en tu bicicleta y no sabes donde puedes
                hospedarte con la seguridad y el mejor acompañamiento posible?
              </div>
              <div className={styles.explorer}>
                <p>Gastronomia</p>
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
                Estas viajando en tu bicicleta y no sabes donde puedes
                hospedarte con la seguridad y el mejor acompañamiento posible?
              </div>
              <div className={styles.explorer}>
                <p>Compra una Cargo</p>
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
                Estas viajando en tu bicicleta y no sabes donde puedes
                hospedarte con la seguridad y el mejor acompañamiento posible?
              </div>
              <div className={styles.explorer}>
                <p>Desarrollo de software</p>
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
                Estas viajando en tu bicicleta y no sabes donde puedes
                hospedarte con la seguridad y el mejor acompañamiento posible?
              </div>
              <div className={styles.explorer}>
                <p>Veterinaria</p>
                <div className={styles.boxIcon}>
                  <BsArrowRightShort />
                </div>
              </div>
            </div>
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
