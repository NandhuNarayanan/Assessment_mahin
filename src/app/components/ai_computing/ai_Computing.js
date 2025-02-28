import Image from "next/image";
import React from "react";
import styles from "./Ai_computing.module.css";

export default function ai_Computing() {
  return (
    <div className={styles.ai_ComputingContainer}>
      <div>
        <Image
          src="/alComputing.png"
          alt="Vercel Logo"
          className={styles.ai_ComputingImage}
          width={684}
          height={684}
        ></Image>
      </div>
      <div>
        <Image
          src="/AiSearch.png"
          alt="Vercel Logo"
          className={styles.ai_ComputingImage}
          width={640}
          height={643}
        ></Image>
      </div>
    </div>
  );
}
