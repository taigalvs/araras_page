import Image from 'next/image'
import AboutImgDivider from '@public/assets/images/about-page-divider.webp'

export function MoreAboutSection() {
  return (
    <section className="relative bg-primary-500 px-4 py-20 md:px-8">
      <div className="flexColStart container  gap-8 lg:gap-16">
        <Image
          data-aos="fade-in"
          data-aos-easing="ease-in"
          data-aos-duration="500"
          className="-mt-80 hidden rounded-3xl lg:block"
          placeholder="blur"
          alt="araras team"
          src={AboutImgDivider}
        />
        <div className="flexColStart lg:flexBetween mx-auto max-w-[1088px] items-start gap-8 text-white ">
          <div className="flexColStart w-full gap-4">
            <p
              data-aos="fade-right"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration="500"
              className="font-bold uppercase tracking-wide">
              Nossa missão
            </p>
            <h3
              data-aos="fade-in"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration="500"
              data-aos-delay="300"
              className="h3-bold">
              Criar um futuro promissor.
            </h3>
            <p
              data-aos="fade-in"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration="500"
              data-aos-delay="400"
              className="p-regular-16">
              Nossa missão é transformar a realidade das crianças e jovens do
              Arará por meio da educação, do suporte e do cuidado. Estamos
              comprometidos em ofertar um ambiente seguro e estimulante, onde
              cada um pode aprender, crescer e explorar seu potencial. Nosso
              trabalho é orientado pela crença de que através de oportunidades,
              a realidade cotidiana das nossas ararinhas podem ser transformadas
              por meio de de programas educacionais, atividades de
              desenvolvimento e conhecimento cultural, nos esforçamos para abrir
              portas para um futuro melhor para as crianças e jovens do Arará.
            </p>
          </div>
          <div className="flexColStart w-full gap-4">
            <p
              data-aos="fade-left"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration="500"
              className="font-bold uppercase tracking-wide">
              Nossa visão
            </p>
            <h3
              data-aos="fade-in"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration="500"
              data-aos-delay="300"
              className="h3-bold">
              Fornecer educação e apoio.
            </h3>
            <p
              data-aos="fade-in"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration="500"
              data-aos-delay="400"
              className="p-regular-16">
              Vislumbramos um futuro onde cada criança e cada jovem do Arará
              terão a oportunidade de atingir seu pleno potencial. Sonhamos com
              um mundo onde a educação, o bem-estar e o desenvolvimento pessoal
              dos jovens não sejam limitados por suas origens socioeconômicas.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
