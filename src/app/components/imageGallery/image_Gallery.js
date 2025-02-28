import React from "react";
import styles from "./Image_Gallery.module.css";
import Image from "next/image";

export default function image_Gallery() {
  return (
    <div className={styles.imageGalleryContainer}>
      <div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/aiImage.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Brainvoy - AI integrated Platform</span>
            <span>AI, SaaS</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai7.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Recharge IV</span>
            <span>Ecommerce</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai8.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Recharge IV</span>
            <span>Ecommerce</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai9.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>LayerPixel_Brand Identity & Website</span>
            <span>AR/VR</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai10.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>TrainmateAI- Fitness App</span>
            <span>AR/VR</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai11.png"
              alt="Vercel Logo"
              width={520}
              height={731}
              className={styles.galleryimage}
            />
          </div>
          <div className={styles.textArea}>
            <span>Nuport Website</span>
            <span>Ecommerce</span>
          </div>
        </div>
      </div>
      <div className={styles.imageGalleryArea}>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai1.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Crio-Credit Loan App</span>
            <span>Mobile App UX Design</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai2.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Team 12- Sports Website</span>
            <span>Mobile App UI/UX Design</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai3.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Mobile App UI/UX Design</span>
            <span>AI, SaaS</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai4.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Onelink - NFT Buy and Sell Platform</span>
            <span>Web design • Branding</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai5.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Kidie - Clothing Store</span>
            <span>Personal Care / Shopping</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <div>
            <Image
              src="/ai6.png"
              alt="Vercel Logo"
              width={520}
              height={731}
            />
          </div>
          <div className={styles.textArea}>
            <span>Realestate Borkrage app</span>
            <span>AR/VR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
