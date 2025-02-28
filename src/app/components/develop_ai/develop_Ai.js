import React from "react";
import styles from "./Develop_ai.module.css";

export default function develop_Ai() {
  return (
    <div className={styles.develop_ai_container}>
      <div className={styles.develop_ai_AREAcontainer}>
        <div>
          <h2 className={styles.develop_ai_heading}>AI-Development</h2>
        </div>
        <div className={styles.develop_ai_listcontainer}>
          <div className={styles.develop_ai_list}>
            <span className={styles.develop_ai_client}>Client</span>
            <span className={styles.develop_ai_name}>Nancy jhosep</span>
          </div>
          <div className={styles.develop_ai_list}>
            <span className={styles.develop_ai_client}>Category</span>
            <span className={styles.develop_ai_name}>Credit Loan</span>
          </div>
          <div className={styles.develop_ai_list}>
            <span className={styles.develop_ai_client}>Category</span>
            <span className={styles.develop_ai_name}>Visit Website</span>
          </div>
          <div className={styles.develop_ai_list}>
            <span className={styles.develop_ai_client}>Timelines </span>
            <span className={styles.develop_ai_name}>3 Months</span>
          </div>
          <div className={styles.develop_ai_list}>
            <span className={styles.develop_ai_client}>
              Service we provided
            </span>
            <span>
              <ul className={styles.develop_ai_name}>
                <li>Framework</li>
                <li>UI Design</li>
                <li>Development</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
