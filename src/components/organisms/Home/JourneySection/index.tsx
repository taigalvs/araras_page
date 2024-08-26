import Image from 'next/image'
import Volunteers from '@public/assets/images/volunteers_3.png'
import { HrText } from '@/components/atoms'

export function JourneySection() {
  return (
    <section className="flexColStart container gap-8 px-4 py-20 md:px-8 lg:gap-16">
      <div className="flexColStart lg:flexBetween gap-8 rounded-3xl bg-primary-500 p-12 lg:gap-20 ">
        <div className="flexColStart flex-1">
          <HrText variant="white" text="Nossa jornada" />
          <div className="flexColStart gap-4 lg:ml-[calc(72px_+_1rem)]">
            <h3
              data-aos="fade-in"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration="500"
              className="h3-bold text-white">
              Nos nossos 4 anos de existência, transformando a realidade das
              crianças e jovens do Arará
            </h3>
            <p
              data-aos="fade-in"
              data-aos-easing="ease-in-out-sine"
              data-aos-duration="500"
              data-aos-offset="0"
              className="p-regular-16 text-white">
              Nosso sonho começou no final de 2020, durante a flexibilização da
              pandemia. Entre máscaras, álcool em gel e muitos cuidados,
              construímos nossa casinha com o apoio de voluntários,
              principalmente dos crias do Arará.
              <br />
              <br />
              Aos poucos o Instituto foi tomando forma e se reformulando a cada
              ano, conforme os desafios que foram surgindo como saída de um
              grande número de voluntários, falta de verba fixa, manutenção do
              espaço, entre outros. Com muita garra, dedicação e perseverança,
              enfrentamos todos esses e, hoje, acolhemos, através da cultura e
              educação, aproximadamente 90 crianças e jovens da Favela do Arará.
              <br />
              <br />
              Nessa trajetória, portanto, vivenciamos juntos muitas
              aprendizagens, sorrisos e, principalmente, o olhar brilhante das
              “primeiras vezes”: o primeiro bolo de aniversário, a primeira
              visita ao museu, o primeiro campeonato de futebol… E assim,
              somamos forças para que esse trabalho não pare. Contamos com sua
              ajuda!
            </p>
          </div>
        </div>
        <div className="flexCenter lg:flexEnd flex-1 ">
          <Image
            data-aos="fade-up-left"
            data-aos-easing="ease-in"
            data-aos-duration="500"
            data-aos-offset="0"
            className="rounded-3xl"
            placeholder="blur"
            width={612}
            alt="kids playing"
            src={Volunteers}
          />
        </div>
      </div>
    </section>
  )
}
