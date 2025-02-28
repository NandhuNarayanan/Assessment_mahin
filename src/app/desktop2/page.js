import React from "react";
import NavBar from "../components/navbar/NavBar";
import Case_study from "../components/case_study/Case_study";
import Image_Gallery from "../components/imageGallery/image_Gallery";
import ProjectIdea from "../components/project_Idea/project_Idea";
import Office from "../components/our_offices/our_Offices";
import Footer from "../components/footer/footer";

export default function page() {
  return (
    <>
      <NavBar />
      <Case_study />
      <Image_Gallery />
      <ProjectIdea />
      <Office />
      <Footer />
    </>
  );
}
