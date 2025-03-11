import Image from "next/image";



// import Demo from "../components/Demo";
import HomePage from "@/components/portfolio/HomePage";
import AboutPage from "@/components/portfolio/AboutPage";
import SkillsPage from "@/components/portfolio/SkillsPage";
import ProjectPage from "@/components/portfolio/ProjectPage";
import ContactPage from "@/components/portfolio/ContactPage";
// import AlertMessage from "@/components/AlertMessage";





export default function Home() {

  return (
    <>
      {/* <AlertMessage /> */}
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
}
