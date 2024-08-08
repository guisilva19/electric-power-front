"use client";
import Image from "next/image";
import background from "@/assets/background-homologacao.png";
import SubFooter from "@/components/SubFooter/SubFooter";
import { Dispatch, SetStateAction, useState } from "react";
import Steps from "./components/Steps";
import SelectWithLigacao from "./components/SelectLigacao";
import { Input, Select, SelectItem } from "@nextui-org/react";
import SelectWithDisjuntor from "./components/SelectDisjuntor";

export default function Homologacao() {
  const [step, setStep] = useState(1);

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
        </div>
      </main>
      <SubFooter />
    </>
  );
}

const FormOne = ({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <>
      <form className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 LG:GAP-4">
        <span className="text-sm text-center">
          Obs: Insira as informações do <strong>titular da conta</strong>
        </span>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="nome" className="pl-3 text-sm lg:text-base">
            Nome Completo
          </label>
          <Input type="text" className="w-full" id="nome" />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="telefone" className="pl-3 text-sm lg:text-base">
            Telefone
          </label>
          <Input type="text" className="w-full" id="telefone" />
        </fieldset>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="numero" className="pl-3 text-sm lg:text-base">
            Número da conta contrato
          </label>
          <Input type="text" className="w-full" id="numero" />
        </fieldset>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="pl-3 text-sm lg:text-base">
              E-mail
            </label>
            <Input type="text" className="w-full" id="email" />
          </fieldset>

          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="telefone" className="pl-3 text-sm lg:text-base">
              Telefone
            </label>
            <Input type="text" className="w-full" id="telefone" />
          </fieldset>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-2 lg:mt-4">
          <Select label="Tipo de ligação" className="w-full h-12">
            {["MONOFÁSICA", "BIFÁSICA", "TRIFÁSICA"].map((item, index) => (
              <SelectItem className="" key={index}>
                {item}
              </SelectItem>
            ))}
          </Select>

          <Select label="Tensão de fornecimento" className="w-full">
            {["220/380", "127/220"].map((item, index) => (
              <SelectItem key={index}>{item}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mt-2 lg:mt-4">
          <SelectWithDisjuntor />
          <SelectWithLigacao />
        </div>

        <fieldset className="flex gap-4">
          <legend className="pl-3 pb-2 text-sm lg:text-base">
            É amplicação de projeto existente?
          </legend>
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="yes"
              name="ampliacao"
              value="yes"
              className="form-radio"
            />
            <label htmlFor="yes" className="pl-2 text-xs lg:text-sm">
              Sim
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="127/220"
              name="ampliacao"
              value="127/220"
              className="form-radio"
            />
            <label htmlFor="127/220" className="pl-2 text-xs lg:text-sm">
              Não
            </label>
          </div>
        </fieldset>

        <div className="w-full flex justify-between">
          <button
            type="button"
            onClick={() => setStep((prev) => (prev -= 1))}
            className="w-max rounded-3xl bg-white border-2 border-green-water text-green-w px-8 py-3 font-semibold mt-6"
          >
            Voltar
          </button>
          <button
            type="button"
            className="w-max rounded-3xl bg-green-water text-white px-8 py-3 font-semibold mt-6"
            onClick={() => setStep((prev) => (prev += 1))}
          >
            Proximo
          </button>
        </div>
      </form>
    </>
  );
};
