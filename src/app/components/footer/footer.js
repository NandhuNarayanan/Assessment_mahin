import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";
export default function footer() {
  return (
    <div className={styles.footerContainer}>
      <div>
        <Image
          src="/Logo.png"
          alt="Vercel Logo"
          width={100}
          height={100}
        ></Image>
      </div>
      <div className={styles.contact}>
        <div>Contact</div>
        <div className={styles.address}>
          Office number 309, Ambadeep building- 3rd floor, Kg marg Connaugt
          Place, Delhi 110001, India
        </div>
        <div>Hello@webfolio.com</div>
        <div className={styles.phone}>+2 456 (343) 24 45</div>
      </div>
      <div>
        <div>Useful Links</div>
        <div>
          <ul className={styles.usefulLinks}>
            <li>About</li>
            <li>Services</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className={styles.newsletterArea}>
        <div>Newsletter</div>
        <div className={styles.newsletter}>
          <input type="email" placeholder="your email" />
        </div>
        <div className={styles.socialIcons}>
          <div>
            <Image
              src="/facebook.svg"
              alt="Vercel Logo"
              width={40}
              height={40}
            />
          </div>
          <div>
            <Image src="/web.svg" alt="Vercel Logo" width={40} height={40} />
          </div>
          <div>
            <Image
              src="/linkedin.svg"
              alt="Vercel Logo"
              width={40}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/instagram.svg"
              alt="Vercel Logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/footer_color.png"
          alt="Vercel Logo"
          width={350}
          height={250}
          className={styles.colorBackground}
        />
      </div>
    </div>
  );
}
