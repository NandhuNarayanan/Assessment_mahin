import Image from "next/image";
import React from "react";
import styles from "./Our_mission.module.css";

export default function OurMission() {
  return (
    <div className={styles.WhoWeAreContainer}>
      <div className={styles.WhoWeAreArea}>
        <div className={styles.WhoWeAreTextarea}>
          <div>
            <h2>Our Mission</h2>
          </div>
          <div className={styles.WhoWeAreText}>
            <p>
              Our mission is to empower businesses of all sizes with
              cutting-edge AI technology that revolutionizes communication and
              drives growth.
            </p>
          </div>
          <div className={styles.WhoWeAreButton}>
            <button className={styles.WhoWeAreButton}>Craft your App With Us!</button>
          </div>
        </div>
        <div className={styles.WhoWeAreImagearea}>
          <Image
            src="/our_mission_image.png"
            alt="Vercel Logo"
            width={577}
            height={433}
            className={styles.WhoWeAreImage}
          />
        </div>
      </div>
    </div>
  );
}
