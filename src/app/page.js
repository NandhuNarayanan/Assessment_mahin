import Image from "next/image";
import styles from "./page.module.css";
import Homes from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Who_we_are_image from "./components/who_We_ Are/WhoWeAre";
import OurMission from "./components/our_Mission/Our_Mission";
import Business from "./components/business/Business";
import Company from "./components/trusted_Company/trustedCompany";
import How_it_works from "./components/how_its_work/how_its_work";
import Service from "./components/services_we_provide/services_We_Provide";
import Ai from "./components/ai_development/ai_Development";
import Client from "./components/client_expectations/client_Expectations";

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <nav> */}
      <NavBar />
      {/* </nav> */}
      <main className={styles.main}>
        <div className={styles.ctas}>
          <Homes />
          <Who_we_are_image />
          <OurMission />
          <Business />
          <Company />
          <How_it_works />
          <Service />
          <Ai />
          <Client />
        </div>
      </main>
      {/* <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
    </div>
  );
}
