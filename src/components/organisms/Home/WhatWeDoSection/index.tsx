import Image from 'next/image'
import React from 'react'
import WhatWeDoImage from '@public/assets/images/activities_3.jpeg'
import { FEATURES } from '@/constants'
import { FeatureList } from '@/components/molecules'
import { HrText } from '@/components/atoms'

export function WhatWeDoSection() {
  return (
    <section id="oque-fazemos" className="bg-primary-500 px-4  py-20  md:px-8">
      <div className="flexColStart gap-8  lg:container   lg:gap-16">
        <div className="flexColStart lg:flexBetween  gap-8 lg:gap-24 ">
          <div className="flexColStart flex-1 text-white">
            <HrText variant="white" text="O que fazemos" />
            <div className="flexColStart gap-8 lg:ml-[calc(72px_+_1rem)]">
              <div>
                <h3
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out-sine"
                  data-aos-duration="500"
                  data-aos-delay="300"
                  className="h3-bold mb-">
                  Nossas iniciativas
                </h3>
                <p
                  data-aos="fade-in"
                  data-aos-easing="ease-in-out-sine"
                  data-aos-duration="500"
                  data-aos-delay="400"
                  data-aos-offset="0">
                  Exploramos caminhos para enriquecer a vida das crianças e
                  jovens do Arará com educação, saúde e lazer, promovendo um
                  futuro mais brilhante.
                </p>
              </div>

              <ul className="flexColStart gap-6 border-l-2 border-gray-100 pl-6">
                {FEATURES.map((feature, index) => (
                  <div
                    key={feature.title}
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-delay={index * 200}
                    data-eos-duration="500"
                    data-aos-offset="0">
                    <FeatureList
                      title={feature.title}
                      icon={feature.icon}
                      description={feature.description}
                    />
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="flexCenter lg:flexEnd  flex-1 ">
            <Image
              data-aos="fade-in"
              data-aos-easing="ease-in"
              data-aos-duration="500"
              data-aos-offset="0"
              className="rounded-3xl"
              placeholder="blur"
              width={480}
              alt="kids playing"
              src={WhatWeDoImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
