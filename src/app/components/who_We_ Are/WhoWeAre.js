import Image from "next/image";
import React from "react";
import styles from "./Who_We_Are.module.css";

export default function WhoWeAre() {
  return (
    <div className={styles.WhoWeAreContainer}>
      <div className={styles.WhoWeAreArea}>
        <div className={styles.WhoWeAreImagearea}>
          <Image
            src="/Who_we_are_image.jpg"
            alt="Vercel Logo"
            width={590}
            height={420}
            className={styles.WhoWeAreImage}
          />
        </div>
        <div className={styles.WhoWeAreTextarea}>
          <div>
            <h2>Who We Are?</h2>
          </div>
          <div className={styles.WhoWeAreText}>
            <p>
              At Boostmysites we harness the power of advanced AI technology to
              deliver seamless, human-like calling experiences. From customer
              support to lead generation, our AI solutions are designed to
              enhance communication efficiency while driving results for
              businesses of all sizes.
            </p>
          </div>
          <div className={styles.WhoWeAreButton}>
            <button className={styles.WhoWeAreButton}>Free Quotation</button>
          </div>
        </div>
      </div>
    </div>
  );
}
