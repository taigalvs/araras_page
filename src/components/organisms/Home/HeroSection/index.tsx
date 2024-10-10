'use client'

import React from 'react'
import Image1 from '@public/assets/images/grid-1.png'
import Image2 from '@public/assets/images/grid-2.png'
import Image3 from '@public/assets/images/grid-3.png'
import Image4 from '@public/assets/images/grid-4.png'
import Image5 from '@public/assets/images/grid-5.png'
import Image6 from '@public/assets/images/grid-6.png'
import Image7 from '@public/assets/images/grid-7.png'
import Image8 from '@public/assets/images/grid-8.png'
import Image9 from '@public/assets/images/grid-9.png'

import { Button, ImagesParallax, TypeWriter } from '@/components/atoms'
import { DONATE_URL } from '@/constants'
import { FaArrowRight } from 'react-icons/fa6'

export function HeroSection() {
  return (
    <section
      id="#"
      className="relative flex h-[calc(100vh-120px)] max-h-[735px] min-h-fit items-center ">
      <div className="absolute inset-0 top-[-120px] overflow-hidden bg-hero bg-cover bg-center bg-no-repeat" />
      <div className="absolute inset-0 top-[-109px] min-h-fit bg-black bg-opacity-30 backdrop-blur-[2px]" />
      <div className="container gap-8 lg:flex">
        <div className="flexColStart flex-1 gap-10 pb-8">
          <div>
            <h1 className="h1-bold animate-moveUp text-white">
              Transformar através
              <br />
              <span className="text-primary">
                <TypeWriter
                  text={[
                    'da educação',
                    'do acolhimento',
                    'da inclusão',
                    'da cultura e arte',
                    'da sustentabilidade',
                    'da saúde comunitária',
                  ]}
                />
              </span>
            </h1>
            <p className="p-regular-16 mt-2 animate-moveUp text-white">
              Nossa missão é fortalecer a Favela do Arará através de iniciativas
              educativas e de desenvolvimento social. Voluntários apaixonados
              trabalham oferecendo uma base sólida que inspire e eleve nossos
              jovens.
            </p>
          </div>

          <div className="flexColCenter md:flexColStart w-auto animate-moveUp gap-2 text-center md:text-left ">
            <p className="text-sm text-white">
              mais de <span className="!font-semibold">100 crianças</span> e
              jovens sob nossos cuidados
            </p>
            <hr className="w-full border-white" />
            <p className="text-sm text-white">
              mais de <span className="!font-semibold">30 eventos</span>{' '}
              realizados
            </p>
          </div>
          <Button
            onClick={() => window.open(DONATE_URL, '_blank')}
            className="font-normal"
            variant="expandIcon"
            Icon={FaArrowRight}
            iconPlacement="right">
            Seja um doador!
          </Button>
        </div>
        <div className="hidden h-full max-h-[735px]   overflow-hidden  rounded-t-2xl lg:block">
          <ImagesParallax
            images={[
              Image5.src,
              Image1.src,
              Image4.src,
              Image3.src,
              Image2.src,
              Image6.src,
              Image7.src,
              Image8.src,
              Image9.src,
            ]}
          />
        </div>
      </div>
    </section>
  )
}
