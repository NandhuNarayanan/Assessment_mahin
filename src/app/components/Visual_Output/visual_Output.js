import Image from "next/image";
import React from "react";
import styles from "./Visual_Output.module.css";

export default function visual_Output() {
  return (
    <div className={styles.visual_OutputContainer}>
      <div className={styles.visual_OutputTitle}>
        <div className={styles.visual_OutputTitleText}>Visual Output</div>
        <div className={styles.visual_OutputText}>
          This AI is your go-to platform for intelligent and innovative AI
          solutions. Whether you are looking to automate workflows, gain
          actionable insights, or enhance user experiences, AI offers a
          hassle-free and scalable way to meet your business needs with
          cutting-edge technology.
        </div>
      </div>
      <div className={styles.visual_OutputImage}>
        <Image
          src="/future_ai.png"
          alt="Vercel Logo"
          className={styles.visualImage}
          width={1290}
          height={828}
        ></Image>
      </div>
      <div className={styles.visual_OutputImage}>
        <div>
          <Image
            src="/adv_ai.png"
            alt="Vercel Logo"
            className={styles.visualImage}
            width={620}
            height={757}
          ></Image>
        </div>
        <div>
          <Image
            src="/vr_ai.png"
            alt="Vercel Logo"
            className={styles.visualImage}
            width={620}
            height={757}
          ></Image>
        </div>
      </div>
      <div className={styles.visual_OutputImage}>
        <Image
          src="/ai_head.png"
          alt="Vercel Logo"
          className={styles.visualImage}
          width={1290}
          height={828}
        ></Image>
      </div>
    </div>
  );
}
