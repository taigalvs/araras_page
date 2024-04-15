import Image from "next/image";
import React, { FC } from "react";

import ProjectsImage from "@/public/assets/images/activities_3.jpg";

import { FEATURES, PROJECTS } from "@/constants";
import FeatureItem from "@/components/ui/feature-item";
import { Button } from "@/components/ui/button";

interface ProjectsSectionProps {}

const ProjectsSection: FC<ProjectsSectionProps> = ({}) => {
  return (
    <section className="max-container flexColCenter lg:flexColStart gap-8  py-20   lg:gap-16">
      <div className="flexColCenter lg:flexColStart  gap-8  lg:gap-24 ">
        <div className="flexColCenter lg:flexColStart flex-1 sm:text-center lg:text-left">
          <div className="flexColCenter lg:flexStart mb-6 flex-col-reverse gap-4 lg:flex-row">
            <hr className="w-[72px] border-b-2 border-secondary" />
            <h3 className="font-bold uppercase tracking-wide text-secondary">
              nossos projetos
            </h3>
          </div>

          <div className="flexColCenter lg:flexColStart gap-16 ">
            <h2 className="h2-bold max-w-[654px] text-secondary lg:ml-[calc(72px_+_1rem)]">
              Estamos criando um lugar onde crianças da comunidade possam
              prosperar
            </h2>

            <ul className="flexColCenter lg:flexStart gap-6">
              {PROJECTS.map((item, idx) => (
                <li
                  key={idx}
                  style={{ backgroundImage: `url(${item.image})` }}
                  className={`h-[422px] w-[412px] rounded-3xl bg-cover bg-center`}
                >
                  <div className="flexColCenter lg:flexColStart h-full  w-full rounded-3xl bg-black bg-opacity-60 px-12 pb-12 pt-20 lg:justify-start">
                    <div>
                      <h4 className="h5-bold mb-4 text-white">{item.title}</h4>
                      <p className="p-regular-16 text-white">
                        {item.description}
                      </p>
                    </div>
                    <Button variant="secondary" className="mt-auto">
                      Saiba mais
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
