import React from 'react'
import { HrText } from '@/components/atoms'

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="flexColCenter lg:flexColStart container gap-8 px-4 py-20 md:px-8 lg:gap-16 lg:pb-80">
      <div className="flexColStart flex-1 ">
        <HrText text="Sobre a Associação Araras" />
        <div className="flexColCenter lg:flexBetween items-start gap-2 lg:ml-[calc(72px_+_1rem)]">
          <h3
            data-aos="fade-right"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="500"
            className="h3-bold w-full text-primary-700">
            Oferecemos educação e apoio para crianças da nossa favela.
          </h3>
          <p
            data-aos="fade-left"
            data-aos-easing="ease-in-out-sine"
            data-aos-duration="500"
            className="p-regular-16 w-full">
            <span className="font-bold">
              Nós somos uma organização não governamental e atuamos inteiramente
              por meio de voluntários.
            </span>{' '}
            Nosso foco principal é impulsionar melhorias sociais na Favela do
            Arará, promovendo o aprimoramento educacional, cultural e
            comunitário.
            <br />
            <br />
            Além disso, somos comprometidos em apoiar crianças e jovens locais,
            buscando ofertar oportunidades que fortaleçam suas perspectivas
            futuras e contribuam para o desenvolvimento da favela em sua
            totalidade, através da consolidação de ações comunitárias.
          </p>
        </div>
      </div>
    </section>
  )
}
