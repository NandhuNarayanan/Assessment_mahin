import React from "react";
import styles from "./View_review.module.css";
import Image from "next/image";

export default function view_review() {
  return (
    <>
      <div className={styles.view_Container}>
        <div className={styles.view_ReviewContainer}>
          <div className={styles.aboutMain}>
            <div className={styles.container}>
              <div className={styles.header}>
                <h2>
                  <Image
                    src="/comma.svg"
                    alt="Vercel Logo"
                    width={60}
                    height={60}
                  ></Image>
                </h2>
              </div>
              <div className={styles.content}>
                <div className={styles.context}>
                  Our AI development solutions deliver custom models and
                  advanced capabilities like machine learning, NLP, and computer
                  vision to streamline workflows and enhance decision-making. We
                  prioritize scalability with flexible architectures, real-time
                  processing, and robust security measures. By integrating
                  explainable AI and user-friendly interfaces, we ensure
                  transparency, trust, and accessibility. From design to
                  deployment, our end-to-end services empower businesses with
                  intelligent, secure, and scalable AI technologies.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.aboutMain}>
            <div className={styles.containerCeo}>
              <div className={styles.ceosection}>
                <h2>
                  <Image
                    src="/ceo.png"
                    alt="Vercel Logo"
                    width={60}
                    height={60}
                  ></Image>
                </h2>
                <span className={styles.ceoName}>
                  <span>Loredan Stefan</span>
                  <span>CEO, and Founder, Onelink</span>
                </span>
              </div>
              <div className={styles.ceosection}>
                <div className={styles.context}>View review on clutch</div>
                <div>
                  <Image
                    src="/Container.png"
                    alt="Vercel Logo"
                    width={24}
                    height={24}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
