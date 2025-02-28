import React from "react";
import styles from "./Project_Idea.module.css";
import Image from "next/image";

export default function project_Idea() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <Image src="/aiBackpic.png" alt="Vercel Logo" width={500} height={500} className={styles.backgroundimage} />
      </div>
      <div className={styles.contentArea}>
        <h1>
          Have a Project
          <br />
          Idea?
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
