'use client'

import { Home as CHome } from '@/components/organisms'
import { Button } from '../components/atoms'
import { DONATE_UNICO_URL } from '@/constants'
import { FaArrowRight } from 'react-icons/fa6'

export default function HomePage() {
  return (
    <>
      <CHome.HeroSection />
      <CHome.AboutSection />
      <CHome.MoreAboutSection />
      <CHome.ContributionSection />
      <CHome.WhatWeDoSection />
      <CHome.JourneySection />

      <div className="flex w-full justify-center bg-primary-500 py-6">
        <Button
          onClick={() => window.open(DONATE_UNICO_URL, '_blank')}
          className="font-normal"
          variant="expandIcon"
          Icon={FaArrowRight}
          iconPlacement="right"
          unstyled
          size="lg">
          <p
            className="text-white"
            data-aos="fade-in"
            data-aos-easing="ease-in-out-cubic"
            data-aos-duration="500">
            Participe dessa história, faça uma doação.
          </p>
        </Button>
      </div>
    </>
  )
}
