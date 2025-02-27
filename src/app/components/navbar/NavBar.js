import Image from "next/image";
import React from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.NavBarmenu}>
      <div>
        <div>
          <Image src="/logo.png" alt="Vercel Logo" width={150} height={130} />
        </div>
      </div>
      <div className={styles.menuList}>
        <ul className={styles.menuListName}>
          <li>Home</li>
          <li>UI/UX</li>
          <li>Mobile App Development</li>
          <li>Web DevelopmentWeb Development</li>
          <li>Case Study</li>
        </ul>
      </div>
      <div>
        <button className={styles.menuButton}>Contact</button>
      </div>
    </div>
  );
}
