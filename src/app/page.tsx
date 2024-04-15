import { Home as CHome } from '@/components/organisms'

export default function Home() {
  return (
    <>
      <CHome.HeroSection />
      <CHome.AboutSection />
      <CHome.WhatWeDoSection />
      <CHome.ProjectsSection />
    </>
  )
}
