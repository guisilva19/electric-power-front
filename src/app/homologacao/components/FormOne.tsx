"use client";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { Dispatch, SetStateAction } from "react";
import SelectWithDisjuntor from "./SelectDisjuntor";
import SelectWithLigacao from "./SelectLigacao";
import { toast } from "sonner";

export default function FormOne({
  setStep,
  magnification,
  setMagnification,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  magnification: boolean | null;
  setMagnification: Dispatch<SetStateAction<boolean | null>>;
}) {
  return (
    <>
      <form className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 lg:gap-4">
        <span className="text-sm text-center">
          Obs: Insira as informações do <strong>titular da conta</strong>
        </span>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="nome" className="pl-3 text-sm">
            Nome Completo
          </label>
          <Input type="text" className="w-full" id="nome" />
        </fieldset>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="pl-3 text-sm">
              E-mail
            </label>
            <Input type="text" className="w-full" id="email" />
          </fieldset>

          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="telefone" className="pl-3 text-sm">
              Telefone
            </label>
            <Input type="text" className="w-full" id="telefone" />
          </fieldset>
        </div>

        <fieldset className="flex flex-col gap-2">
          <label htmlFor="numero" className="pl-3 text-sm">
            Número da conta contrato do local de instalação (Geradora)
          </label>
          <Input type="text" className="w-full" id="numero" />
        </fieldset>

        <fieldset className="flex gap-4">
          <legend className="pl-3 pb-2 text-sm">
            É amplicação de projeto existente?
          </legend>
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="yes"
              name="ampliacao"
              value="yes"
              className="form-radio"
              defaultChecked={magnification === true ? true : false}
              onChange={(e) => {
                setMagnification(e.target.value === "no" ? false : true);
              }}
            />
            <label htmlFor="yes" className="pl-2 text-xs lg:text-sm">
              Sim
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="no"
              name="ampliacao"
              defaultChecked={magnification === false ? true : false}
              value="no"
              className="form-radio"
              onChange={(e) => {
                setMagnification(e.target.value === "no" ? false : true);
              }}
            />
            <label htmlFor="no" className="pl-2 text-xs lg:text-sm">
              Não
            </label>
          </div>
        </fieldset>

        <div className="w-full flex justify-between">
          <button />
          <button
            type="button"
            className="w-max h-[52px] rounded-3xl bg-green-water text-white px-8 py-3 font-semibold mt-6"
            onClick={() => {
              if (magnification !== null) {
                setStep((prev) => (prev += 1));
              } else {
                toast.error(
                  "Selecione uma das opções para amplicação de projeto existente"
                );
              }
            }}
          >
            Proximo
          </button>
        </div>
      </form>
    </>
  );
}
