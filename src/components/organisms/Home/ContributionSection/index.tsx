/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'

import { Button, HrText } from '@/components/atoms'
import { FaArrowRight } from 'react-icons/fa6'
import { DONATE_URL } from '@/constants'

export function ContributionSection() {
  return (
    <section className="flexColCenter lg:flexColStart container px-4 py-20 pb-8 md:px-8 ">
      <div className="lexColStart">
        <HrText text="COMO CONTRIBUIR" />
        <div className="flexColStart lg:flexBetween items-start gap-8 lg:ml-[calc(72px_+_1rem)] lg:gap-16">
          <div
            data-aos="fade-up-left"
            data-aos-easing="ease-in-out-cubic"
            data-aos-duration="500"
            data-aos-delay="200"
            data-aos-offset="0"
            className="flex h-[264px] w-full flex-col  gap-4 lg:items-start">
            <p className="font-medium">Doação mensal</p>
            <p className="p-regular-16">
              Ser um doador mensal possibilita fazer a diferença de diversas
              formas como o apoio a continuação de oficinas e atividades
              educacionais. Seja um doador mensal e contribua com a
              transformação social!
            </p>
            <Button
              onClick={() => window.open(DONATE_URL, '_blank')}
              className="mt-auto font-normal"
              variant="expandIcon"
              Icon={FaArrowRight}
              iconPlacement="right">
              DOAR COM PAYPAL
            </Button>
          </div>
          <hr className="block w-full border-b-0 border-primary-700 lg:hidden " />
          <div
            data-aos="fade-up-left"
            data-aos-easing="ease-in-out-cubic"
            data-aos-duration="500"
            data-aos-delay="400"
            data-aos-offset="0"
            className="flex h-[264px] w-full flex-col   gap-4 ">
            <p className="font-medium">Doação única</p>
            <p className="p-regular-16">
              Um único gesto pode transformar uma vida! Doe e nos ajude a
              impulsionar o futuro das crianças e jovens da Favela do Arará.
            </p>
            <Button
              onClick={() => window.open(DONATE_URL, '_blank')}
              className="mt-auto font-normal"
              variant="expandIcon"
              Icon={FaArrowRight}
              iconPlacement="right">
              DOAR COM PAYPAL
            </Button>
          </div>
          <hr className="block w-full border-b-0 border-primary-700 lg:hidden " />
          <div
            data-aos="fade-up-left"
            data-aos-easing="ease-in-out-cubic"
            data-aos-duration="500"
            data-aos-delay="600"
            data-aos-offset="0"
            className="flex h-[264px] w-full flex-col  gap-4 ">
            <p className="font-medium">Seja um agente de transformação</p>
            <p className="p-regular-16">
              Quer abraçar o projeto e fazer parte do nosso time? Nos ajude a
              mudar a realidade da nossa comunidade, tornando-a mais justa,
              inspiradora e sustentável.
            </p>
            <Button
              className="mt-auto font-normal"
              variant="expandIcon"
              Icon={FaArrowRight}
              iconPlacement="right">
              FAÇA PARTE
            </Button>
          </div>
        </div>
      </div>
      <hr className="my-10 w-full border-b-0 border-gray-200" />
      <div className=" flexColStart">
        <HrText text="Transparência" />
        <div className=" flexColStart gap-4 lg:ml-[calc(72px_+_1rem)]">
          <h3
            data-aos="fade-in"
            data-aos-easing="ease-in-out-cubic"
            data-aos-duration="500"
            data-aos-delay="200"
            className="h3-bold  lg:min-w-[636px]">
            Como utilizamos sua doação
          </h3>
          <p
            data-aos="fade-in"
            data-aos-easing="ease-in-out-cubic"
            data-aos-duration="500"
            data-aos-delay="300"
            className="p-regular-16">
            Assim como o lar em que vivemos, o espaço aonde funcionam as aulas e
            encontros do Instituto Araras precisa de manutenção física para
            caber todo nosso trabalho e afeto. Neste sentido, sua contribuição é
            fundamental para que possamos fazer reparos estruturais, comprarmos
            produtos de limpeza, afim de conservar nossos 3 andares limpos para
            receber as pessoas que têm centralidade no nosso trabalho: as
            crianças e os jovens da Favela do Arará.
            <br />
            <br />
            Outra destinação da sua contribuição para o nosso Instituto, é a
            compra de materiais didáticos para as "araras" (jovens) e
            "ararinhas" (crianças). Como somos uma organização sem fins
            lucrativos (ONG) e totalmente gratuita, a compra e utilização de
            cadernos, lápis, borrachas, lápis de cor, giz de quadro etc. se
            sustenta apenas com a sua contribuição.
            <br />
            <br />
            Sendo a alegria e a partilha de felicidade uns dos nossos pilares,
            entendemos que festa e evento seja a manifestação que melhor as
            representa. Assim, parte do valor (e outros tipos de doação)
            arrecadados é destinada às nossas festas, como por exemplo, a maior
            festa de páscoa que fizemos no ano de 2023, na qual arrecadamos mais
            de 1000 caixas de bombom e conseguimos proporcionar alegria e
            compartilhar a felicidade com toda a favela.
            <br />
            <br />
          </p>
        </div>
      </div>
    </section>
  )
}
