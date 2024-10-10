import Image from 'next/image'
import React from 'react'
import ArarasLogo from '@public/assets/logo.png'

export function Footer() {
  return (
    <footer
      id="contato"
      className="w-full bg-primary-700 px-4 py-10 text-white md:px-8 ">
      <div className="mx-auto flex max-w-screen-xl flex-col justify-center gap-8  lg:flex-row  lg:justify-between lg:gap-12">
        <Image
          alt="araras-logo-footer"
          width={115}
          height={117}
          src={ArarasLogo}
        />

        <div className="items-start justify-between space-y-6 sm:flex md:mt-0 md:gap-12 md:space-y-0">
          <div className="w-full">
            <h3 className="font-semibold">Localização:</h3>
            <p>
              Av. Carlos Mattoso Corrêa, 405 - Benfica, Rio de Janeiro - RJ,
              20930-491 Favela do Arará, Benfica
            </p>
          </div>
          <div className="w-full">
            <h3 className="font-semibold">Email:</h3>
            <a href="mailto:proj.araras@gmail.com" className="hover:underline">
              proj.araras@gmail.com
            </a>
          </div>
          <div className="w-full">
            <h3 className="font-semibold">Contatos:</h3>
            <p>
              <a href="tel:+5521997720213" className="hover:underline">
                +55 21 99772-0213
              </a>{' '}
              - Sabrina Mendes (Presidenta)
            </p>
            <p>
              <a href="tel:+5521981676299" className="hover:underline">
                +55 21 98167-6299
              </a>{' '}
              - Lohayne Carvalho (Diretora)
            </p>
          </div>
        </div>
      </div>
      <hr className="-mx-20 my-8 h-0.5 border bg-neutral-50  opacity-50" />
      <div className=" items-center justify-center  sm:flex">
        &copy; 2024 Associação Araras. Todos os direitos reservados.
      </div>
    </footer>
  )
}
