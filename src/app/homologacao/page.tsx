"use client";
import Image from "next/image";
import background from "@/assets/background-homologacao.png";
import SubFooter from "@/components/SubFooter/SubFooter";
import { useState } from "react";
import Steps from "./components/Steps";
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import FormThree from "./components/FormThree";
import FormFour from "./components/FormFour";

export default function Homologacao() {
  const [step, setStep] = useState(3);

  return (
    <>
      <main className="flex flex-col w-screen h-max items-center">
        <div className="w-screen h-48">
          <Image
            src={background}
            alt=""
            className="w-screen h-full object-cover object-center"
          />
        </div>
        <div className="w-full lg:w-7/12 xl:w-8/12 flex flex-col justify-center items-center gap-10 py-10">
          <section className="w-[320px] xs:w-[400px] lg:w-7/12">
            <h2 className="text-2xl text-center">
              Preencha os dados para gerar sua <strong>Homologação</strong>
            </h2>
          </section>

          <Steps step={step} />

          {step === 1 && <FormOne setStep={setStep} />}
          {step === 2 && <FormTwo setStep={setStep} />}

          {step === 3 && <FormThree setStep={setStep} />}
          {step === 4 && <FormFour setStep={setStep} />}
        </div>
      </main>
      <SubFooter />
    </>
  );
}
