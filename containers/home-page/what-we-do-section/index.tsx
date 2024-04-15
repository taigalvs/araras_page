import Image from "next/image";
import React, { FC } from "react";

import WhatWeDoImage from "@/public/assets/images/activities_3.jpg";
import { Button } from "@/components/ui/button";
import { SUPPORTERS_URL, FEATURES } from "@/constants";
import FeatureItem from "@/components/ui/feature-item";

interface WhatWeDoSectionProps {}

const WhatWeDoSection: FC<WhatWeDoSectionProps> = ({}) => {
  return (
    <section className="bg-primary-200 py-20">
      <div className="max-container flexColCenter lg:flexColStart  gap-8   lg:gap-16">
        <div className="flexColCenter lg:flexBetween  gap-8  lg:gap-24 ">
          <div className="flexColCenter lg:flexColStart flex-1 sm:text-center lg:text-left">
            <div className="flexColCenter lg:flexStart mb-6 flex-col-reverse gap-4 lg:flex-row">
              <hr className="w-[72px] border-b-2 border-secondary" />
              <h3 className="font-bold uppercase tracking-wide text-secondary">
                O que fazemos
              </h3>
            </div>

            <div className="flexColCenter lg:flexColStart gap-8 lg:ml-[calc(72px_+_1rem)]">
              <div>
                <h2 className="h2-bold mb-4 text-secondary">
                  Nossas iniciativas para as crianças
                </h2>
                <p>
                  Exploramos caminhos para enriquecer a vida das crianças com
                  educação, saúde e lazer, promovendo um futuro mais brilhante.
                </p>
              </div>

              <ul className="flexColCenter lg:flexColStart gap-6 border-l-2 border-gray-100 pl-6">
                {FEATURES.map((feature) => (
                  <FeatureItem
                    key={feature.title}
                    title={feature.title}
                    icon={feature.icon}
                    description={feature.description}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="flexCenter lg:flexEnd  flex-1 ">
            <Image
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
  );
};

export default WhatWeDoSection;
