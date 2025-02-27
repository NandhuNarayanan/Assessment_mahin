import React from "react";
import styles from "./Business.module.css";
import Image from "next/image";

export default function Business() {
  return (
    <div>
      <div className={styles.BusinessContainer}>
        <div className={styles.BusinessTitle}>
          <h3>Why Businesses Trust Boostmysites</h3>
        </div>
        <div className={styles.BusinessBox}>
          <div className={styles.BusinessBoxArea}>
            <div className={styles.BusinessBox1}>
              <div>
                <Image
                  src="/Like.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                />
              </div>
              <div className={styles.Box1title}>Human-Like Conversations</div>
              <div className={styles.Box1text}>
                NLP ensures smooth, natural interactions.
              </div>
            </div>
            <div className={styles.BusinessBox1}>
              <div>
                <Image
                  src="/ticket.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                />
              </div>
              <div className={styles.Box1title}>Human-Like Conversations</div>
              <div className={styles.Box1text}>
                NLP ensures smooth, natural interactions.
              </div>
            </div>
            <div className={styles.BusinessBox1}>
              <div>
                <Image
                  src="/mail.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                />
              </div>
              <div className={styles.Box1title}>Human-Like Conversations</div>
              <div className={styles.Box1text}>
                NLP ensures smooth, natural interactions.
              </div>
            </div>
            <div className={styles.BusinessBox1}>
              <div>
                <Image
                  src="/percentage.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                />
              </div>
              <div className={styles.Box1title}>Human-Like Conversations</div>
              <div className={styles.Box1text}>
                NLP ensures smooth, natural interactions.
              </div>
            </div>
            <div className={styles.BusinessBox1}>
              <div>
                <Image
                  src="/mike.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                />
              </div>
              <div className={styles.Box1title}>Human-Like Conversations</div>
              <div className={styles.Box1text}>
                NLP ensures smooth, natural interactions.
              </div>
            </div>
            <div className={styles.BusinessBox1}>
              <div>
                <Image
                  src="/bullets.png"
                  alt="Vercel Logo"
                  width={45}
                  height={45}
                />
              </div>
              <div className={styles.Box1title}>Human-Like Conversations</div>
              <div className={styles.Box1text}>
                NLP ensures smooth, natural interactions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
