"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useMediaQuery } from "react-responsive";

import iconLogo from "@/assets/logo_page.png";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { IoMdCloseCircle, IoIosMusicalNotes } from "react-icons/io";
import { FaMap } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation";

// interface NavBarProps {
//   openModal: (content: React.ReactNode) => void;
// }

function Navbar() {
  const router = useRouter()
  const responsive = useMediaQuery({ query: "(min-width: 900px)" });
  const [openDropDown, setOpenDropDown] = useState(false);

  const handlerDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.imageLogo}>
            <Image className={styles.iconLogo} src={iconLogo} alt="iconLogo" />
          </div>
          <Link href="/" className={styles.logoTitle}>
            Todo en bicicleta
          </Link>
        </div>
        {responsive ? (
          <div className={styles.account}>
            {/* <div className={styles.subAccount}>
              <Link href="/blog" className={styles.login}>
                Blog
              </Link>
            </div> */}
            <div className={styles.subAccount}>
              <Link href="/music" className={styles.login}>
                Musica
              </Link>
            </div>
            <div className={styles.subAccount}>
              <Link href="/shop" className={styles.login}>
                Tienda
              </Link>
            </div>
            <div className={styles.subAccount}>
              <Link href="/ruta" className={styles.login}>
                Ruta
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.menuIcon}>
            <AiOutlineMenu size={20} onClick={handlerDropDown} />
            {openDropDown ? (
              <ul className={styles.dropdown}>
                <div className={styles.boxBtnClose}>
                  <IoMdCloseCircle size={25} onClick={handlerDropDown} className={styles.iconCloseDrop} />
                </div>
                <li className={styles.dropdown_list} onClick={() => router.push("/")}>
                  <div className={styles.dropdown_link}>
                    <AiFillHome />
                    <span className={styles.dropdown_span}>Inicio</span>
                  </div>
                </li>

                <li className={styles.dropdown_list} onClick={() => router.push("/music")}>
                  <div className={styles.dropdown_link}>
                    <IoIosMusicalNotes />
                    <span className={styles.dropdown_span}>Musica</span>
                  </div>
                </li>

                <li className={styles.dropdown_list} onClick={() => router.push("/shop")}>
                  <div className={styles.dropdown_link}>
                    <MdOutlineLocalGroceryStore />
                    <span className={styles.dropdown_span}>Tienda</span>
                  </div>
                </li>

                <li className={styles.dropdown_list} onClick={() => router.push("/ruta")}>
                  <div className={styles.dropdown_link}>
                    <FaMap />
                    <span className={styles.dropdown_span}>Ruta</span>
                  </div>
                </li>
              </ul>
            ) : null}
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
