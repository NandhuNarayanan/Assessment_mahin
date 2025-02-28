import React from "react";
import styles from "./Ai_Development.module.css";

export default function ai_Development() {
  return (
    <div className={styles.ai_development_container}>
      <div className={styles.ai_development_headingarea}>
        <h2 className={styles.ai_development_heading}>
          Numbers that define our AI <br /> Development capabilities!
        </h2>
      </div>
      <div className={styles.ai_development_boxcontainer}>
        <div className={styles.ai_development_boxarea}>
          <div className={styles.ai_development_box1}>
            <div>
              <h3>17%</h3>
              <span>Numbers that define our AI Development capabilities!</span>
            </div>
          </div>
          <div className={styles.ai_development_box2}>
            <div>
              <h3>6K+</h3>
              <span>Happy Clients </span>
            </div>
          </div>
        </div>
        <div className={styles.ai_development_boxarea}>
          <div className={styles.ai_development_box3}>
            <div>
              <h3>+31%</h3>
              <span>
                client conversion increased after giving a design upgrade!
              </span>
            </div>
          </div>
          <div className={styles.ai_development_box4}>
            <div>
              <h5>
                Realestate Brokrage - <br />
                Seamless Operations
              </h5>
              <div className={styles.ai_development_button}>
                Get Quotation Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
