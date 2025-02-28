"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Input, Select, SelectItem, DatePicker } from "@nextui-org/react";
import SelectWithDisjuntor from "./SelectDisjuntor";
import { useGlobalContext } from "@/context/context";
import SelectCable from "./SelectLigacao";
import { toast } from "sonner";

export default function FormThree({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const {
    hasInstalled,
    handleSubmitThree,
    registerFormThree,
    errorsThree,
    setCabo,
    setDisjuntor,
    setTensao,
    setTransformer,
    setLigacao,
    cabo,
    disjuntor,
    tensao,
    transformer,
    ligacao,
  } = useGlobalContext();

  const nextStep = async (data: any) => {
    if (cabo && ligacao && tensao && disjuntor) {
      setStep((prev) => (prev += 1));
    } else {
      toast.error("Insira todas as informações");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmitThree(nextStep)}
        className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 lg:gap-4"
      >
        <div className="flex flex-collg:flex-row lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
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
            <Input
              type="number"
              className="w-full"
              id="email"
              errorMessage={errorsThree?.quantidade_medidores?.message}
              isInvalid={errorsThree.quantidade_medidores ? true : false}
              {...registerFormThree("quantidade_medidores")}
            />
          </fieldset>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="pl-3 text-sm pr-14">
              Distância média entre inversor e quadro de distribuição (m)
            </label>
            <Input
              type="number"
              className="w-full"
              id="email"
              errorMessage={
                errorsThree?.distancia_entre_inversor_e_distribuicao?.message
              }
              isInvalid={
                errorsThree.distancia_entre_inversor_e_distribuicao
                  ? true
                  : false
              }
              {...registerFormThree("distancia_entre_inversor_e_distribuicao")}
            />
          </fieldset>

          <fieldset className="flex gap-4 w-full">
            <legend className="pl-3 pb-2 text-sm">
              Existe transformador próprio?
            </legend>
            <div className="flex items-center pl-3">
              <input
                type="radio"
                id="yes-tranformer"
                name="transformer"
                value="yes"
                className="form-radio"
                checked={transformer === true}
                onChange={() => {
                  setTransformer(true);
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
                name="transformer"
                value="no"
                className="form-radio"
                checked={transformer === false}
                onChange={() => {
                  setTransformer(false);
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
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
          <Select
            label="Tipo de ligação"
            className="w-full h-12"
            onChange={(event) => setLigacao(event.target.value)}
          >
            {["MONOFÁSICA", "BIFÁSICA", "TRIFÁSICA"].map((item) => (
              <SelectItem key={item}>{item}</SelectItem>
            ))}
          </Select>

          <Select
            label="Tensão de fornecimento"
            className="w-full"
            onChange={(event) => setTensao(event.target.value)}
          >
            {["220/380", "127/220"].map((item) => (
              <SelectItem key={item}>{item}</SelectItem>
            ))}
          </Select>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 ">
          <SelectWithDisjuntor setValue={setDisjuntor} />
          <SelectCable setValue={setCabo} />
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
            type="submit"
            className="w-max h-[52px] rounded-3xl bg-green-water text-white px-8 py-3 font-semibold mt-6"
          >
            Proximo
          </button>
        </div>
      </form>
    </>
  );
}
