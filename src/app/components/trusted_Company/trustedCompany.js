import Image from 'next/image'
import React from 'react'
import styles from "./trustedCompany.module.css"

export default function trustedCompany() {
  return (
    <div className={styles.trustedCompanyContainer}>
        <div className={styles.trustedCompanyGlobe}>
        Trusted by companies in 100+ countries around the globe.
        </div>
        <div className={styles.trustedCompanyLogos}>
            <div>
            <Image
            src="/Walmart.svg"
            alt="Vercel Logo"
            width={106}
            height={32}
            className={styles.WhoWeAreImage}
          />
            </div>
            <div>
            <Image
            src="/Amazon.svg"
            alt="Vercel Logo"
            width={106}
            height={32}
            className={styles.WhoWeAreImage}
          />
            </div>
            <div>
            <Image
            src="/AliExpress.svg"
            alt="Vercel Logo"
            width={106}
            height={32}
            className={styles.WhoWeAreImage}
          />
            </div>
            <div>
            <Image
            src="/eBay.svg"
            alt="Vercel Logo"
            width={106}
            height={32}
            className={styles.WhoWeAreImage}
          />
            </div>
            <div>
            <Image
            src="/Apple.svg"
            alt="Vercel Logo"
            width={106}
            height={32}
            className={styles.WhoWeAreImage}
          />
            </div>
            <div>
            <Image
            src="Samsung.svg"
            alt="Vercel Logo"
            width={106}
            height={32}
            className={styles.WhoWeAreImage}
          />
            </div>
            <div>
            <Image
            src="/Nike.svg"
            alt="Vercel Logo"
            width={106}
            height={32}
            className={styles.WhoWeAreImage}
          />
            </div>
            <div>
            <Image
            src="/Etsy.svg"
            alt="Vercel Logo"
            width={106}
            height={32}
            className={styles.WhoWeAreImage}
          />
            </div>
        </div>
    </div>
  )
}
