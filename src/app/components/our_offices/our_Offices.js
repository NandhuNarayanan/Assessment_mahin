import React from "react";
import styles from "./Our_Offices.module.css";
import Image from "next/image";

export default function our_Offices() {
  return (
    <div className={styles.services_We_ProvideContainer}>
      <div className={styles.services_We_ProvideTitleArea}>
        <h3 className={styles.services_We_ProvideTitle}>Our Offices</h3>
      </div>
      <div className={styles.BusinessBoxArea}>
        <div className={styles.BusinessBox1}>
          <div className={styles.Box1image}>
            <Image
              src="/builing1.jpg"
              alt="Vercel Logo"
              width={378}
              height={252}
              className={styles.image}
            />
          </div>
          <div className={styles.Box1text}>
            Intelligent AI agents to answer customer queries 24/7. Seamless
            escalation to human agents when necessary.
          </div>
        </div>
        <div className={styles.BusinessBox1}>
          <div className={styles.Box1image}>
            <Image
              src="/builing2.jpg"
              alt="Vercel Logo"
              width={378}
              height={252}
              className={styles.image}
            />
          </div>
          <div className={styles.Box1text}>
            Personalize each call with dynamic scripting, adjust calls based on
            real-time customer responses, and ensure compliance with industry
            regulations.
          </div>
        </div>
        <div className={styles.BusinessBox1}>
          <div className={styles.Box1image}>
            <Image
              src="/builing1.jpg"
              alt="Vercel Logo"
              width={378}
              height={252}
              className={styles.image}
            />
          </div>
          <div className={styles.Box1text}>
            AI-driven calling campaigns to qualify and convert leads faster
            Smart scripts tailored to your business objectives.
          </div>
        </div>
        <div className={styles.BusinessBox1}>
          <div className={styles.Box1image}>
            <Image
              src="/builing2.jpg"
              alt="Vercel Logo"
              width={378}
              height={252}
              className={styles.image}
            />
          </div>
          <div className={styles.Box1text}>
            Gather insights through automated calls. Real - time analysis and
            reporting.
          </div>
        </div>
        <div className={styles.BusinessBox1}>
          <div className={styles.Box1image}>
            <Image
              src="/builing1.jpg"
              alt="Vercel Logo"
              width={378}
              height={252}
              className={styles.image}
            />
          </div>
          <div className={styles.Box1text}>
            AI agents to book, reschedule, and send reminders, ensuring
            efficiency.
          </div>
        </div>
      </div>
    </div>
  );
}
