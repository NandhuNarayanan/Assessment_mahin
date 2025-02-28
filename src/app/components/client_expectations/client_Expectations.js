import Image from "next/image";
import React from "react";
import styles from "./Client_Expectations.module.css";

export default function () {
  return (
    <div className={styles.client_ExpectationsContainer}>
      <div>
        <h3 className={styles.client_ExpectationsTitle}>
          Some works that exceed our clients expectations!
        </h3>
      </div>
      <div className={styles.client_ExpectationsImagearea}>
        <img
          src="/Frame1.png"
          alt="Vercel Logo"
          className={styles.client_ExpectationsImage}
        />
      </div>
      <div className={styles.client_ExpectationsImagearea}>
        <img
          src="/Frame1.png"
          alt="Vercel Logo"
          className={styles.client_ExpectationsImage}
        />
      </div>
    </div>
  );
}
