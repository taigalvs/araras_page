"use client";
import { FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import React from "react";
import ArarasLogo from "../public/assets/logo_outlined.svg";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="md:px-18 mx-auto w-full  bg-black px-12 py-6 text-white md:px-20">
      <div className="flex flex-col justify-between gap-12 md:flex-row">
        <div className="flex justify-center">
          <Image
            alt="araras-logo-footer"
            width={115}
            height={117}
            src={ArarasLogo}
          />
        </div>

        <div className="mt-10 items-center justify-between space-y-6 sm:flex md:mt-0 md:gap-12 md:space-y-0">
          {FOOTER_LINKS.map((item, idx) => (
            <ul className="min-w-fit space-y-4" key={idx}>
              <h4 className="font-bold text-white">{item.label}</h4>
              {item.items.map((el, idx) => (
                <li key={idx}>
                  <a
                    href={el.href}
                    className="text-sm hover:text-primary-500 hover:underline"
                  >
                    {el.name}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <form className="max-w-lg" onSubmit={(e) => e.preventDefault()}>
          <label className="block pb-2 pt-4 text-4xl font-bold leading-snug">
            Se inscreva para receber as últimas atualizações
          </label>
          <div className="flex max-w-sm items-center rounded-md border ">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full bg-transparent p-4 text-lightGray outline-none"
            />
            <Button
              className="bg-white text-black hover:bg-slate-200"
              size="lg"
            >
              Inscreva-se
            </Button>
          </div>
        </form>
      </div>
      <hr className="-mx-20 my-8 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
      <div className=" items-center justify-center  sm:flex">
        &copy; 2024 Instituto Araras. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
