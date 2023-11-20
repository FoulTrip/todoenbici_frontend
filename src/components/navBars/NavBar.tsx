"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import { useMediaQuery } from "react-responsive";

import iconLogo from "@/assets/logo_page.png";
import { AiOutlineMenu } from "react-icons/ai";
import { HiChevronDown, HiChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";

// interface NavBarProps {
//   openModal: (content: React.ReactNode) => void;
// }

function Navbar() {
  const responsive = useMediaQuery({ query: "(min-width: 900px)" });
  const [chevron, setChevron] = useState();


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
            <div className={styles.subAccount}>
              <Link href="/dashboard" className={styles.login}>
                Blog
              </Link>
            </div>
          </div>
        ) : (
          <div className={styles.menuIcon}>
            <div className={styles.menuImg}>
              <AiOutlineMenu />
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
