import Image from "next/image";
import React, { FC } from "react";

import AboutImage from "@/public/assets/images/about-section-image.jpg";
import { Button } from "@/components/ui/button";
import { SUPPORTERS_URL } from "@/constants";

interface AboutSectionProps {}

const AboutSection: FC<AboutSectionProps> = ({}) => {
  return (
    <section className="max-container flexColCenter lg:flexColStart  gap-8  py-20 lg:gap-16">
      <div className="flexColCenter lg:flexBetween  gap-8  lg:gap-20 ">
        <div className="flexColCenter lg:flexColStart flex-1 sm:text-center lg:text-left">
          <div className="flexColCenter lg:flexStart mb-6 flex-col-reverse gap-4 lg:flex-row">
            <hr className="w-[72px] border-b-2 border-secondary" />
            <h3 className="font-bold uppercase tracking-wide text-secondary">
              Saiba mais sobre nós
            </h3>
          </div>

          <div className="flexColCenter lg:flexColStart gap-8 lg:ml-[calc(72px_+_1rem)]">
            <h2 className="h2-bold text-secondary">
              Oferecemos educação e apoio para crianças da nossa comunidade
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
              <br />
              <br />
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
              commodo diam libero vitae erat. Aenean faucibus nibh et justo
              cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
              tristique posuere.
            </p>
            <Button className="mt-4">Saiba mais</Button>
          </div>
        </div>
        <div className="flexCenter lg:flexEnd  flex-1 ">
          <Image
            className="rounded-3xl"
            placeholder="blur"
            width={480}
            alt="kids playing"
            src={AboutImage}
          />
        </div>
      </div>
      <div className="flexColCenter lg:flexColStart w-full gap-8 ">
        <div className="flexColCenter lg:flexStart w-full flex-nowrap gap-6">
          <h3 className="min-w-max font-medium uppercase tracking-wide text-secondary">
            NOSSOS APOIADORES
          </h3>
          <hr className="w-full border-b-0 border-gray-200 " />
        </div>
        <div>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
            {SUPPORTERS_URL.map((url) => (
              <li key={url}>
                <Image
                  width={140}
                  height={28}
                  alt="supporter logo"
                  src={url}
                  className="grayscale filter hover:grayscale-0"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
