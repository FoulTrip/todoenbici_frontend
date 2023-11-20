import React from "react";
import styles from "./autoSliderRight.module.css";
import Image from "next/image";

import img00 from "@/assets/principalBanner/00.jpg";
import img01 from "@/assets/principalBanner/01.jpg";
import img02 from "@/assets/principalBanner/02.jpg";
import img03 from "@/assets/principalBanner/03.jpg";
import img04 from "@/assets/principalBanner/04.jpg";
import img05 from "@/assets/principalBanner/05.jpg";
import img06 from "@/assets/principalBanner/06.jpg";
import img07 from "@/assets/principalBanner/07.jpg";
import img08 from "@/assets/principalBanner/08.jpg";

function AutoSliderLeft() {
  return (
    <>
      <div>
        <div className={styles.slider}>
          <div className={styles.slide_track}>
            <div className={styles.slide}>
              <Image className={styles.img} src={img00} alt="img00" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img01} alt="img01" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img02} alt="img02" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img03} alt="img03" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img04} alt="img04" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img05} alt="img05" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img06} alt="img06" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img07} alt="img07" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img08} alt="img08" />
            </div>

            {/* Copy */}
            <div className={styles.slide}>
              <Image className={styles.img} src={img00} alt="img00" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img01} alt="img01" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img02} alt="img02" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img03} alt="img03" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img04} alt="img04" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img05} alt="img05" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img06} alt="img06" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img07} alt="img07" />
            </div>
            <div className={styles.slide}>
              <Image className={styles.img} src={img08} alt="img08" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutoSliderLeft;
