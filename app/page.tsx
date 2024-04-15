import AboutSection from "@/containers/home-page/about-section";
import HeroSection from "@/containers/home-page/hero-section";
import ProjectsSection from "@/containers/home-page/projects-section";
import WhatWeDoSection from "@/containers/home-page/what-we-do-section";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <ProjectsSection />
    </>
  );
}
