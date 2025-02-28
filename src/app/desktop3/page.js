import React from "react";
import NavBar from "../components/navbar/NavBar";
import styles from "./page.module.css";
import Develop_Ai from "../components/develop_ai/develop_Ai";
import AboutTheProject from "../components/about_the_project/about_the_project";
import OurSolutions from "../components/our_solutions/our_Solutions";
import View_Review from "../components/view_review/view_review";
import Data_collection from "../components/Data_colllection/data_collection";
import Ai_Computing from "../components/ai_computing/ai_Computing";
import VisualOut from "../components/Visual_Output/visual_Output";
import EMarker from "../components/e_market/e_Market";

export default function page() {
  return (
    <>
      <NavBar />
      <div className={styles.aiImageScreen}>
        <img className={styles.aiImage} src="/ai.png" alt="" />
      </div>
      <Develop_Ai />
      <AboutTheProject />
      <OurSolutions />
      <View_Review />
      <Data_collection />
      <Ai_Computing />
      <VisualOut />
      <EMarker />
    </>
  );
}
