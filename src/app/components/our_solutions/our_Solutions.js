import React from "react";
import styles from "./Our_Solutions.module.css";
import Image from "next/image";

export default function our_Solutions() {
  return (
    <>
      <div className={styles.aboutMain}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Problems</h2>
          </div>
          <div className={styles.content}>
            <div className={styles.context}>
              In AI development, we addressed key challenges to deliver
              seamless, efficient, and reliable solutions. Performance
              optimization was a top priority, ensuring AI models process data
              quickly and deliver real-time responses. To handle vast and
              complex datasets securely, we implemented advanced data pipelines
              and compliance-ready frameworks. Simplifying the user experience
              was critical, so we designed intuitive interfaces with explainable
              AI to make insights accessible and actionable. Scalability was
              built into the architecture using cloud technologies and
              microservices, enabling the system to grow with increasing user
              demands. Robust security measures, including encryption and
              adversarial defenses, safeguarded user data and maintained trust,
              while privacy-preserving techniques ensured compliance with global
              data regulations. This holistic approach guarantees transparency,
              reliability, and growth-readiness for all AI solutions.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutMain}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Our Solutions</h2>
          </div>
          <div className={styles.content}>
            <div className={styles.context}>
              Our AI development solutions deliver custom models and advanced
              capabilities like machine learning, NLP, and computer vision to
              streamline workflows and enhance decision-making. We prioritize
              scalability with flexible architectures, real-time processing, and
              robust security measures. By integrating explainable AI and
              user-friendly interfaces, we ensure transparency, trust, and
              accessibility. From design to deployment, our end-to-end services
              empower businesses with intelligent, secure, and scalable AI
              technologies.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutMainPic}>
        <div>
        <Image
          src="/webTabs.png"
          alt="Vercel Logo"
          width={850}
          height={600}
          className={styles.webTabsImage}
        ></Image>
        </div>
        <div>
        <Image
          src="/aiBrain.png"
          alt="Vercel Logo"
          width={850}
          height={600}
          className={styles.webTabsImage}
        ></Image>
        </div>
      </div>
    </>
  );
}
