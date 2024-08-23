"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Input, Select, SelectItem, DatePicker } from "@nextui-org/react";
import SelectWithDisjuntor from "./SelectDisjuntor";
import SelectWithLigacao from "./SelectLigacao";

export default function FormThree({
  setStep,
  hasInstalled,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  hasInstalled: boolean | null;
}) {
  const [barramento, setBarramento] = useState<boolean | null>(null);
  const [transformer, setTransformer] = useState<boolean | null>(null);

  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <>
      <form className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 lg:gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
          {!hasInstalled && (
            <fieldset className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="pl-3 text-sm">
                Data prevista para instalação
              </label>
              <DatePicker className="w-full" isRequired />
            </fieldset>
          )}
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="pl-3 text-sm">
              Quantidade de medidores
            </label>
            <Input type="number" className="w-full" id="email" />
          </fieldset>
        </div>

        <div className="flex flex-col lg:flex-row lg:h-14 lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
          <fieldset className="flex gap-4 w-full">
            <legend className="pl-3 pb-2 text-sm">
              Existe quadro de barramento?
            </legend>
            <div className="flex items-center pl-3">
              <input
                type="radio"
                id="yes-medidor"
                name="medidor"
                value="yes"
                className="form-radio"
                onChange={(e) => {
                  setBarramento(e.target.value === "no" ? false : true);
                }}
              />
              <label htmlFor="yes-medidor" className="pl-2 text-xs lg:text-sm">
                Sim
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="no-medidor"
                name="medidor"
                value="no"
                className="form-radio"
                onChange={(e) => {
                  setBarramento(e.target.value === "no" ? false : true);
                }}
              />
              <label htmlFor="no-medidor" className="pl-2 text-xs lg:text-sm">
                Não
              </label>
            </div>
          </fieldset>

          {barramento && (
            <fieldset className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="pl-3 text-sm">
                Qual o disjuntor do barramento?
              </label>
              <Input type="text" className="w-full" id="email" />
            </fieldset>
          )}
        </div>

        <div className="flex flex-col lg:h-14 lg:flex-row lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
          <fieldset className="flex gap-4 w-full">
            <legend className="pl-3 pb-2 text-sm">
              Existe transformador próprio?
            </legend>
            <div className="flex items-center pl-3">
              <input
                type="radio"
                id="yes-tranformer"
                name="tranformer"
                value="yes"
                className="form-radio"
                onChange={(e) => {
                  setTransformer(e.target.value === "no" ? false : true);
                }}
              />
              <label
                htmlFor="yes-tranformer"
                className="pl-2 text-xs lg:text-sm"
              >
                Sim
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="no-tranformer"
                name="tranformer"
                value="no"
                className="form-radio"
                onChange={(e) => {
                  setTransformer(e.target.value === "no" ? false : true);
                }}
              />
              <label
                htmlFor="no-tranformer"
                className="pl-2 text-xs lg:text-sm"
              >
                Não
              </label>
            </div>
          </fieldset>

          {transformer && (
            <fieldset className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="pl-3 text-sm">
                Qual a potência do transformador?
              </label>
              <Input type="number" className="w-full" id="email" />
            </fieldset>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
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

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 ">
          <SelectWithDisjuntor />
          <SelectWithLigacao />
        </div>

        <div className="w-full flex justify-between">
          <button
            type="button"
            className="w-max h-[52px] rounded-3xl bg-white border-2 border-green-water text-green-water px-8 py-3 font-semibold mt-6"
            onClick={() => setStep((prev) => (prev -= 1))}
          >
            Voltar
          </button>
          <button
            type="button"
            className="w-max h-[52px] rounded-3xl bg-green-water text-white px-8 py-3 font-semibold mt-6"
            onClick={() => setStep((prev) => (prev += 1))}
          >
            Proximo
          </button>
        </div>
      </form>
    </>
  );
}
