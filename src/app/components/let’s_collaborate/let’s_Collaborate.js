import React from "react";
import styles from "./Let’s_Collaborate.module.css";

export default function letsCollaborate() {
  return (
    <div className={styles.container}>
      <video className={styles.background} autoPlay loop muted playsInline>
        <source src="/collab_video.mp4" type="video/mp4" />
      </video>
      <div className={styles.contentArea}>
        <h1>
          Let’s
          <br />
          Collaborate
        </h1>
      </div>
      <div className={styles.formArea}>
        <div className={styles.form}>
          <div className={styles.name}>
            <span>Full Name</span>
            <input type="text" placeholder="John M" />
          </div>
          <div className={styles.company_Email}>
            <div className={styles.company}>
              <span>Company name</span>
              <input type="text" placeholder="Ex. Tesla Inc" />
            </div>
            <div className={styles.email}>
              <span>Email*</span>
              <input type="email" placeholder="you@example.com" />
            </div>
          </div>
          <div className={styles.company_Email}>
            <div className={styles.company}>
              <span>Project budget*</span>
              <input type="text" placeholder="Select Your Range" />
            </div>
            <div className={styles.email}>
              <span>How did you find us*</span>
              <input type="email" placeholder="Google" />
            </div>
          </div>
          <div className={styles.name}>
            <span>Project details*</span>
            <input type="text" placeholder="Tell us more about your idea" />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
