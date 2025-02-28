import React from "react";
import styles from "./Toggle.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function toggle({ setOpen }) {
  const router = useRouter();
  return (
    <div className={styles.menuContainer}>
      <button className={styles.menuClose} onClick={() => setOpen(!open)}>
        <Image src="/delete.png" alt="Vercel Logo" width={50} height={50} />
      </button>

      <div className={styles.menuList}>
        <ul className={styles.menuListName}>
          <li onClick={() => router.push("/")}>Home</li>
          <li>UI/UX</li>
          <li>Mobile App Development</li>
          <li onClick={() => router.push("/desktop3")}>
            Web DevelopmentWeb Development
          </li>
          <li onClick={() => router.push("/desktop2")}>Case Study</li>
          <button className={styles.menuButton}>Contact</button>
        </ul>
      </div>
    </div>
  );
}
