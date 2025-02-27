import React from "react";
import styles from "./How_its_work.module.css";

export default function how_its_work() {
  return (
    <div>
      <div className={styles.how_its_work_container}>
        <div className={styles.how_its_work_area}>
          <div className={styles.how_its_work_Imagearea} />
          <div className={styles.how_its_work_Title}>How It Works?</div>
          <div className={styles.how_its_work_Contentarea}>
            <div>
              <video
                className={styles.how_its_work_Video}
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/ai_video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className={styles.how_its_work_Textarea}>
              <div className={styles.how_its_work_title}>
                Seamlessly Integrate AI Into Your <br /> Workflow
              </div>
              <div className={styles.how_its_work_Listarea}>
                <ul className={styles.how_its_work_List}>
                  <li>Step 1: Connect your system with our AI platform.</li>
                  <li>
                    Step 2: Customize scripts and workflows to suit your goals.
                  </li>
                  <li>
                    Step 3: Let our AI agents handle the rest while you monitor
                    <br/> results in real-time.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
