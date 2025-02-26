import Image from "next/image";
// import Demo from "../components/Demo";
import HomePage from "@/components/portfolio/HomePage";
import AboutPage from "@/components/portfolio/AboutPage";
import SkillsPage from "@/components/portfolio/SkillsPage";


export default function Home() {

  return (
    <>
      <HomePage />
      <AboutPage />
      <SkillsPage />
    </>
  );
}
