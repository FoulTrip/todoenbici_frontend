"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MusicData, Song } from "../types";
import styles from "./styles/artista.module.css";
import Image from "next/image";

import { GrSpotify } from "react-icons/gr";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import MusicPlayer from "@/components/music/reproductor";

function Artistas() {
  const [musicData, setMusicData] = useState<MusicData | null>(null);
  const [openAlbum, setOpenAlbum] = useState(false);
  const [selectArt, setSelectArt] = useState(0);

  useEffect(() => {
    const musiData = async () => {
      try {
        const response = await axios.get<MusicData>("/api/music");
        setMusicData(response.data);
      } catch (error) {
        console.error("Error api: ", error);
      }
    };

    musiData();
  }, []);

  return (
    <>
      <main className={styles.ArtistContainer}>
        <h1 className={styles.titleMusic}>
          Disfruta las canciones de estos talentosos cantantes mientras viajas
        </h1>

        {selectArt == 0 ? (
          <div className={styles.boxArtists}>
            {musicData?.artista.map((artista) => (
              <div className={styles.cardArtist} key={artista.id}>
                <div className={styles.titleAlbum}>
                  <Image
                    className={styles.imgAlbumDedosSecos}
                    src={`/music/imgAlbumes/${artista.albumes[0].image}`}
                    width={400}
                    height={400}
                    alt="cartel"
                  />
                </div>
                <div className={styles.btnListen}>
                  <h2 className={styles.nameAlbum}>{artista.name}</h2>
                  <p onClick={() => setSelectArt(artista.id)}>Escuchar</p>
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {selectArt != 0 ? (
          <div className={styles.backBtn}>
            <IoIosArrowRoundBack onClick={() => setSelectArt(0)} />
          </div>
        ) : null}

        {selectArt == 1 ? (
          <>
            <div className={styles.artistComponent}>
              <div className={styles.contentArt}>
                <div className={styles.imgBoxAlbum}>
                  <Image
                    className={styles.imgAlbumDedosSecos}
                    src={`/music/imgAlbumes/${musicData?.artista[0].albumes[0].image}`}
                    alt="album"
                    width={150}
                    height={150}
                  />
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.subInfoContent}>
                    <p className={styles.titleArtist}>
                      {musicData?.artista[0].name}
                    </p>
                    <div className={styles.numberInfo}>
                      <p className={styles.txtInfoNumbr}>
                        <span>Albums: </span>
                        {musicData?.artista[0].albumes.length}
                      </p>
                      <p className={styles.txtInfoNumbr}>
                        <span>Canciones: </span>
                        {musicData?.artista[0].albumes[0].songs.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.redirectSpotify}>
                <div className={styles.subBtnSpotify}>
                  <GrSpotify className={styles.spotfyIcon} />
                  <p>Spotify</p>
                  <IoIosArrowRoundForward className={styles.arrowIcon} />
                </div>
              </div>
            </div>
            {musicData?.artista[0].albumes[0].songs ? (
              <MusicPlayer songs={musicData?.artista[0].albumes[0].songs} />
            ) : null}
          </>
        ) : null}

        {selectArt == 2 ? (
          <>
            <div className={styles.artistComponent}>
              <div className={styles.contentArt}>
                <div className={styles.imgBoxAlbum}>
                  <Image
                    className={styles.imgAlbumDedosSecos}
                    src={`/music/imgAlbumes/${musicData?.artista[1].albumes[0].image}`}
                    alt="album"
                    width={150}
                    height={150}
                  />
                </div>
                <div className={styles.infoContent}>
                  <div className={styles.subInfoContent}>
                    <p className={styles.titleArtist}>
                      {musicData?.artista[1].name}
                    </p>
                    <div className={styles.numberInfo}>
                      <p className={styles.txtInfoNumbr}>
                        <span>Albums: </span>
                        {musicData?.artista[0].albumes.length}
                      </p>
                      <p className={styles.txtInfoNumbr}>
                        <span>Canciones: </span>
                        {musicData?.artista[1].albumes[0].songs.length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.redirectSpotify}>
                <div className={styles.subBtnSpotify}>
                  <GrSpotify className={styles.spotfyIcon} />
                  <p>Spotify</p>
                  <IoIosArrowRoundForward className={styles.arrowIcon} />
                </div>
              </div>
            </div>
            <div>
              {musicData?.artista[1].albumes[0].songs ? (
                <MusicPlayer songs={musicData?.artista[1].albumes[0].songs} />
              ) : null}
              <div className={styles.infoArts}>
                <div className={styles.subInfoArts}></div>
              </div>
            </div>
          </>
        ) : null}
      </main>
    </>
  );
}

export default Artistas;
