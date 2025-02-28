"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./frequently_Asked_Question.module.css";

export default function FrequentlyAskedQuestion() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  return (
    <>
      <div className={styles.frequently_Asked_Question}>
        <div className={styles.frequently_Asked_QuestionContainer}>
          <div className={styles.frequently_Asked_QuestionHeader}>
            Frequently <br /> Asked Question
          </div>
          <div
            className={styles.frequently_Asked_QuestionTitle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span>What is AI development?</span>
            {isOpen ? (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow}
              />
            ) : (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow2}
              />
            )}
          </div>
          {isOpen && (
            <div className={styles.frequently_Asked_qnsAnswer}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                iaculis tempus eros non vestibulum.
              </span>
            </div>
          )}
          <div
            className={styles.frequently_Asked_QuestionTitle}
            onClick={() => setIsOpen1(!isOpen1)}
          >
            <span>How long does it take to design an app?</span>
            {isOpen1 ? (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow}
              />
            ) : (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow2}
              />
            )}
          </div>
          {isOpen1 && (
            <div className={styles.frequently_Asked_qnsAnswer}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                iaculis tempus eros non vestibulum.
              </span>
            </div>
          )}
          <div
            className={styles.frequently_Asked_QuestionTitle}
            onClick={() => setIsOpen2(!isOpen2)}
          >
            <span>
              What should I expect if I hire your company for Website design
              services?
            </span>
            {isOpen2 ? (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow}
              />
            ) : (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow2}
              />
            )}
          </div>
          {isOpen2 && (
            <div className={styles.frequently_Asked_qnsAnswer}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                iaculis tempus eros non vestibulum.
              </span>
            </div>
          )}
          <div
            className={styles.frequently_Asked_QuestionTitle}
            onClick={() => setIsOpen3(!isOpen3)}
          >
            <span>
              What are the steps involved in your Website design and AI
              development?
            </span>
            {isOpen3 ? (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow}
              />
            ) : (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow2}
              />
            )}
          </div>
          {isOpen3 && (
            <div className={styles.frequently_Asked_qnsAnswer}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                iaculis tempus eros non vestibulum.
              </span>
            </div>
          )}
          <div
            className={styles.frequently_Asked_QuestionTitle}
            onClick={() => setIsOpen4(!isOpen4)}
          >
            <span>
              Why is BoostmySites Different From Others in Website Develop
              Design?
            </span>
            {isOpen4 ? (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow}
              />
            ) : (
              <Image
                src="/Arrow.svg"
                alt="Vercel Logo"
                width={44}
                height={44}
                className={styles.Arrow2}
              />
            )}
          </div>
          {isOpen4 && (
            <div className={styles.frequently_Asked_qnsAnswer}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                iaculis tempus eros non vestibulum.
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
