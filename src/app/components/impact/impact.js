import React from "react";
import styles from "./Impact.module.css";
import Image from "next/image";

export default function impact() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.background}>
          <Image src="/silver.png" alt="Vercel Logo" width={500} height={500} />
        </div>
        <div className={styles.contentArea}>
          <h1>
            <div className={styles.impact}> Impact </div>
            
            <div className={styles.create}> We Created</div>
          </h1>
        </div>
      </div>
    </div>
  );
}
