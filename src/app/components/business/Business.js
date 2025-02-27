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
              <div className={styles.Box1title}>Scalable Solutions</div>
              <div className={styles.Box1text}>
                Designed for businesses of all sizes, from startups to
                enterprises.
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
              <div className={styles.Box1title}>Cost-Effective</div>
              <div className={styles.Box1text}>
                Reduce operational costs while increasing efficiency
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
              <div className={styles.Box1title}>Real-Time Analytics</div>
              <div className={styles.Box1text}>
                Track performance with comprehensive dashboards.
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
              <div className={styles.Box1title}>Customizable AI</div>
              <div className={styles.Box1text}>
                Tailored solutions to meet your unique needs for Industries We
                Serve
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
              <div className={styles.Box1title}>Data-Driven Insights</div>
              <div className={styles.Box1text}>
                achieving the best possible return on investment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
