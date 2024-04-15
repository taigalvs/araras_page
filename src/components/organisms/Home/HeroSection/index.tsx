import Image from 'next/image'
import React from 'react'

import HeroImage from 'araras/public/assets/images/hero-image.png'
import { Button } from '@/components/atoms'
import { TbPlayerPlayFilled } from 'react-icons/tb'

export function HeroSection() {
  return (
    <section className="bg-black pt-14">
      <div className="max-container lg:flex lg:gap-20">
        <div className="flexCenter lg:flexStart flex-1 flex-col gap-8 pb-14 lg:items-start  lg:gap-16">
          <h1 className="h1-bold text-white">
            Transformar através
            <br /> da
            <span className="text-primary">
              {' '}
              educação e<br /> acolhimento
            </span>
          </h1>

          <div className="flexCenter lg:flexStart  gap-6">
            <Button>O que fazemos</Button>
            <Button className="gap-2 text-white" variant="ghost">
              <span className="rounded-full bg-white p-2">
                <TbPlayerPlayFilled color="#1E1E1E" />
              </span>
              Veja o video
            </Button>
          </div>
          <div className="flexColCenter lg:flexStart  w-full  gap-5 lg:mt-44">
            <p className="text-white">230 crianças sob nossos cuidados</p>
            <hr className="w-1/6 border-white" />
            <p className="text-white">500 doações coletadas</p>
          </div>
        </div>
        <div className="flexCenter lg:flexEnd flex-1  lg:items-end ">
          <Image
            placeholder="blur"
            width={480}
            alt="kids playing"
            src={HeroImage}
          />
        </div>
      </div>
    </section>
  )
}
