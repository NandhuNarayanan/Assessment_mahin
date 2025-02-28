import Image from "next/image";
import React from "react";
import styles from "./frequently_Asked_Question.module.css";

export default function frequently_Asked_Question() {
  return (
    <div className={styles.frequently_Asked_Question}>
      <div className={styles.frequently_Asked_QuestionContainer}>
        <div className={styles.frequently_Asked_QuestionHeader}>
          Frequently <br /> Asked Question
        </div>
        <div className={styles.frequently_Asked_QuestionTitle}>
          <span>What is AI development?</span>
          <Image src="/Arrow.svg" alt="Vercel Logo" width={44} height={44} />
        </div>
        <div className={styles.frequently_Asked_QuestionTitle}>
          <span>How long does it take to design an app?</span>
          <Image src="/Arrow.svg" alt="Vercel Logo" width={44} height={44} />
        </div>
        <div className={styles.frequently_Asked_QuestionTitle}>
          <span>
            What should I expect if I hire your company for Website design
            services?
          </span>
          <Image src="/Arrow.svg" alt="Vercel Logo" width={44} height={44} />
        </div>
        <div className={styles.frequently_Asked_QuestionTitle}>
          <span>
            What are the steps involved in your Website design and AI
            development?
          </span>
          <Image src="/Arrow.svg" alt="Vercel Logo" width={44} height={44} />
        </div>
        <div className={styles.frequently_Asked_QuestionTitle}>
          <span>
            Why is BoostmySites Different From Others in Website Develop Design?
          </span>
          <Image src="/Arrow.svg" alt="Vercel Logo" width={44} height={44} className={styles.Arrow} />
        </div>
      </div>
    </div>
  );
}
