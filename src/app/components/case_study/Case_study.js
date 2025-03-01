import Image from "next/image";
import React from "react";
import styles from "./Case_study.module.css";

export default function Case_study() {
  return (
    <div className={styles.case_StudyContainer}>
      <div className={styles.case_StudyArea}>
        <div>
          <h1 className={styles.case_StudyTitle}>Our Case Study</h1>
        </div>
        <div>
          <h5 className={styles.case_StudyDescription}>
            An Experience design agency building high-end products and <br />
            experiences that grow your business exponentially.
          </h5>
        </div>
      </div>
      <div>
        <div className={styles.background}>
          <Image
            src="/casestudy_1.png"
            alt="Vercel Logo"
            width={500}
            height={500}
            className={styles.backgroundimage}
          />
        </div>
        <div className={styles.imagecase2}>
          <Image
            src="/casestudy_2.png"
            alt="Vercel Logo"
            width={190}
            height={190}
          />
        </div>
      </div>
    </div>
  );
}
