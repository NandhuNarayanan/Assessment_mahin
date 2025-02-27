import React from "react";
import styles from "./Services_We_Provide.module.css";
import Image from "next/image";

export default function services_We_Provide() {
  return (
    <div className={styles.services_We_ProvideContainer}>
      <div>
        <h3 className={styles.services_We_ProvideTitle}>Services We Provide</h3>
      </div>
      <div className={styles.BusinessBoxArea}>
        <div className={styles.BusinessBox1}>
          <div>
            <Image
              src="/Ai_Icon.svg"
              alt="Vercel Logo"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.Box1title}>
            Inbound <br /> Call Handling
          </div>
          <div className={styles.Box1text}>
            Intelligent AI agents to answer customer queries 24/7. Seamless
            escalation to human agents when necessary.
          </div>
        </div>
        <div className={styles.BusinessBox1}>
          <div>
            <Image
              src="/Ai_Icon.svg"
              alt="Vercel Logo"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.Box1title}>
            AI-Powered <br /> Outbound Calls
          </div>
          <div className={styles.Box1text}>
            Personalize each call with dynamic scripting, adjust calls based on
            real-time customer responses, and ensure compliance with industry
            regulations.
          </div>
        </div>
        <div className={styles.BusinessBox1}>
          <div>
            <Image
              src="/Ai_Icon.svg"
              alt="Vercel Logo"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.Box1title}>
            Lead <br /> Generation
          </div>
          <div className={styles.Box1text}>
            AI-driven calling campaigns to qualify and convert leads faster
            Smart scripts tailored to your business objectives.
          </div>
        </div>
      </div>
      <div className={styles.BusinessBoxArea2}>
        <div className={styles.BusinessBox2}>
          <div>
            <Image
              src="/Ai_Icon.svg"
              alt="Vercel Logo"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.Box1title}>
            Surveys and <br /> Feedback Collection
          </div>
          <div className={styles.Box1text}>
            Gather insights through automated calls. Real - time analysis and
            reporting.
          </div>
        </div>
        <div className={styles.BusinessBox2}>
          <div>
            <Image
              src="/Ai_Icon.svg"
              alt="Vercel Logo"
              width={45}
              height={45}
            />
          </div>
          <div className={styles.Box1title}>
            Appointment Scheduling
            <br /> and Reminders
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
