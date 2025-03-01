import React from "react";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <video className={styles.background} autoPlay loop muted playsInline>
        <source src="/video-assessment.mp4" type="video/mp4" />
      </video>
      <div className={styles.contentArea}>
        <h1 className={styles.Header}>
          Revolutionizing <br /> Communication with AI- <br />
          Powered Calling Solutions
        </h1>
        <span className={styles.Headersub}>
          Boost customer engagement, streamline operations, and save time <br />{" "}
          with intelligent AI calling services tailored for your business needs.
        </span>
        <div className={styles.buttons}>
          <button className={styles.primaryButtons}>Get Started Today</button>
          <button className={styles.secondaryButtons}>Request a Demo</button>
        </div>
      </div>
    </div>
  );
}
