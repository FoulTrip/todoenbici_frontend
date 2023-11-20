import React, { useState } from "react";
import styles from "./styles/blog.module.css";
import Avatar from "react-avatar";
import iconUser from "@/assets/iconUser.jpg";

import { IoIosHeartEmpty, IoMdHeart } from "react-icons/io";
import { IoArrowRedoOutline, IoLocation, IoChatbubblesOutline } from "react-icons/io5";

function Blog() {
  const [likeStatus, setLikeStatus] = useState(false);
  const [valueLikes, setValueLikes] = useState(0);

  const handleLike = () => {
    setLikeStatus(!likeStatus);
    setValueLikes(valueLikes + 1);
  };

  const handleLikeDelete = () => {
    setLikeStatus(!likeStatus);
    setValueLikes(valueLikes - 1);
  };

  return (
    <>
      <div className={styles.postBlog}>
        <h2 className={styles.titlePost}>
          Explorando el Mundo Sobre Dos Ruedas: La Magia de Viajar en Bicicleta
        </h2>
        <div className={styles.infoPost}>
          <div className={styles.infoAuthor}>
            <Avatar src={iconUser.src} size="20" round={true} />
            <p className={styles.nameAuthor}>Carlos Vasquez</p>
          </div>
          <div className={styles.infoLocation}>
            <div className={styles.iconBoxLocation}>
              <IoLocation className={styles.locationIcon} />
            </div>
            <p className={styles.nameCountry}>Colombia</p>
          </div>
          <p className={styles.date}>18/11/2023</p>
        </div>
        <p className={styles.textPost}>
          Descubre la libertad infinita de recorrer el mundo en bicicleta. Más
          que un simple medio de transporte, viajar sobre dos ruedas se
          convierte en una aventura que despierta los sentidos y abre las
          puertas a paisajes inexplorados. Pedalea hacia la libertad, descubre
          destinos únicos y vive la magia de un viaje que transforma cada giro
          de pedal en una experiencia inolvidable. ¡Atrévete a explorar el mundo
          desde una perspectiva completamente nueva!
        </p>
        <div className={styles.interactions}>
          {likeStatus ? (
            <div className={styles.containerLike}>
              <IoMdHeart
                onClick={handleLikeDelete}
                size={25}
                className={styles.likeBtnActive}
              />
              <p>{valueLikes}</p>
            </div>
          ) : (
            <div className={styles.containerLike}>
              <IoIosHeartEmpty
                onClick={handleLike}
                size={25}
                className={styles.likeBtnDefault}
              />
              <p>{valueLikes}</p>
            </div>
          )}
          <IoChatbubblesOutline className={styles.commentBtnDefault} size={25} />
          <IoArrowRedoOutline className={styles.shareBtn} size={25} />
        </div>
      </div>
    </>
  );
}

export default Blog;
