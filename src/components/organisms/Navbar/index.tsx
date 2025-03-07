'use client'

import { DONATE_UNICO_URL, NAV_LINKS } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'
import ArarasLogo from '@public/assets/logo.png'
import { Button, Sheet } from '@/components/atoms'
import { FaArrowRight } from 'react-icons/fa6'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { Slot } from '@radix-ui/react-slot'
import { AnimatedMenuButton } from './AnimatedMenuButton'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const isMobile = useMediaQuery('(max-width: 768px)')

  const MenuWrapper = isMobile ? Sheet.Content : Slot

  return (
    <nav className="relative z-10 py-2">
      <Sheet.Root open={isOpen} onOpenChange={setIsOpen}>
        <div className="container items-center md:flex">
          <div className="flex items-center justify-between py-3 md:block md:pb-2">
            <a href="/#">
              <Image
                src={ArarasLogo}
                width={80}
                height={80}
                alt="araras-logo"
              />
            </a>
            <div className="md:hidden">
              <Sheet.Trigger asChild>
                <AnimatedMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
              </Sheet.Trigger>
            </div>
          </div>

          <MenuWrapper side="left">
            <div
              className={`md:flex md:w-full md:justify-end ${isMobile && !isOpen && 'hidden'}`}>
              <ul className="mt-8 space-y-8 md:mt-0 md:flex md:items-center md:space-x-6 md:space-y-0 md:justify-self-end">
                {NAV_LINKS.map((item, index) => {
                  return (
                    <li
                      data-aos="fade-down"
                      data-aos-easing="linear"
                      data-aos-delay={index * 100}
                      data-eos-duration="500"
                      key={item.key}
                      className="font-medium  hover:text-primary-500 md:text-white">
                      <a href={item.href}>{item.label}</a>
                    </li>
                  )
                })}
                <div data-aos="fade-down" data-aos-delay="600">
                  <Button
                    variant="expandIcon"
                    Icon={FaArrowRight}
                    iconPlacement="right"
                    size="lg"
                    onClick={() => window.open(DONATE_UNICO_URL, '_blank')}>
                    Doar!
                  </Button>
                </div>
              </ul>
            </div>
          </MenuWrapper>
        </div>
      </Sheet.Root>
    </nav>
  )
}

export default Navbar
