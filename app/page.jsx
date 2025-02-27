import Image from "next/image";
// import Demo from "../components/Demo";
import HomePage from "@/components/portfolio/HomePage";
import AboutPage from "@/components/portfolio/AboutPage";
import SkillsPage from "@/components/portfolio/SkillsPage";
import ProjectPage from "@/components/portfolio/ProjectPage";
import ContactPage from "@/components/portfolio/ContactPage";
import ModalAlert from "@/components/ModalAlert";


export default function Home() {

  return (
    <>
      <ModalAlert />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
}
