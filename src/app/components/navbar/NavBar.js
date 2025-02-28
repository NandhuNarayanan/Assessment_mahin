"use client";

import Image from "next/image";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Toggle from "../toggle/toggle";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  return (
    <div className={styles.NavBarmenu}>
      <div>
        <div onClick={() => router.push("/")}>
          <Image src="/logo.png" alt="Vercel Logo" width={150} height={130} />
        </div>
      </div>
      <div className={styles.menuList}>
        <ul className={styles.menuListName}>
          <li onClick={() => router.push("/")}>Home</li>
          <li>UI/UX</li>
          <li>Mobile App Development</li>
          <li onClick={() => router.push("/desktop3")}>
            Web DevelopmentWeb Development
          </li>
          <li onClick={() => router.push("/desktop2")}>Case Study</li>
        </ul>
      </div>
      <div className={styles.menuicon} id="menu">
        <button className={styles.menuOpen} onClick={() => setOpen(!open)}>
          <Image src="/hamb.png" alt="Vercel Logo" width={50} height={50} />
        </button>
        <button className={styles.menuButton}>Contact</button>
      </div>
      {open && <Toggle setOpen={setOpen} />}
    </div>
  );
}
