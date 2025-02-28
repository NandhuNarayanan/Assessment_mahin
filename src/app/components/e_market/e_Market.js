import React from "react";
import styles from "./E_Market.module.css";
import Image from "next/image";

export default function e_Market() {
  return (
    <>
      {" "}
      <div className={styles.visual_OutputImage}>
        <Image
          src="/e_market.jpg"
          alt="Vercel Logo"
          width={1920}
          height={1080}
          className={styles.eImage}
        ></Image>
      </div>
    </>
  );
}
