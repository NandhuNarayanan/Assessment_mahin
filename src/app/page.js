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
import Frequently_asked_question from "./components/frequently_asked_question/frequently_Asked_Question";
import LetsCollaborate from "./components/let’s_collaborate/let’s_Collaborate";
import Office from "./components/our_offices/our_Offices";
import Footer from "./components/footer/footer";

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
          <Frequently_asked_question />
          <LetsCollaborate />
          <Office />
        </div>
      </main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}
