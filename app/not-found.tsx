"use client";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <main>
      <section className="flex w-full justify-center">
        <div className="mx-5 flex w-full max-w-screen-xl flex-col items-center  gap-8 py-10 text-center md:mx-20 md:gap-24 md:py-28">
          <h1 className="max-w-[50rem] text-2xl font-bold  text-black md:text-6xl">
            Opps.. Parece que essa página não existe!
          </h1>
          <h1 className="text-secondaryColor max-w-[50rem] text-2xl  font-bold md:text-6xl">
            4 0 4
          </h1>
          <Button onClick={() => router.push("/")}>Ir para o início</Button>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
