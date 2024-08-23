"use client";
import { Input } from "@nextui-org/react";
import { Dispatch, SetStateAction, useState } from "react";

export default function FormWithMagnification({
  hasInstalled,
  setHasInstalled,
}: {
  hasInstalled: boolean | null;
  setHasInstalled: Dispatch<SetStateAction<boolean | null>>;
}) {
  const [receiveCredit, setReceiveCredit] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="pl-3 text-sm w-10/12">
            Quantidade de módulos anteriormente homologados
          </label>
          <Input type="number" className="w-full" id="email" />
        </fieldset>

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="telefone" className="pl-3 text-sm w-10/12">
            Modelo dos módulos anteriormente homologados
          </label>
          <Input type="text" className="w-full" id="telefone" />
        </fieldset>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="pl-3 text-sm w-10/12">
            Quantidade de inversores anteriormente homologados
          </label>
          <Input type="number" className="w-full" id="email" />
        </fieldset>

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="telefone" className="pl-3 text-sm w-10/12">
            Modelo dos inversores anteriormente homologados
          </label>
          <Input type="text" className="w-full" id="telefone" />
        </fieldset>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="pl-3 text-sm w-10/12">
            Quantidade de módulos fotovoltaicos inseridos
          </label>
          <Input type="number" className="w-full" id="email" />
        </fieldset>

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="telefone" className="pl-3 text-sm w-10/12">
            Modelo dos módulos fotovoltaicos inseridos
          </label>
          <Input type="text" className="w-full" id="telefone" />
        </fieldset>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="email" className="pl-3 text-sm w-10/12">
            Quantidade de inversores inseridos
          </label>
          <Input type="number" className="w-full" id="email" />
        </fieldset>

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="telefone" className="pl-3 text-sm w-8/12">
            Modelo dos inversores inseridos
          </label>
          <Input type="text" className="w-full" id="telefone" />
        </fieldset>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
        <fieldset className="flex gap-4 w-full">
          <legend className="pl-3 pb-2 text-sm">
            Serão cadastradas contas que iram receber créditos
          </legend>
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="yes"
              name="ampliacao"
              value="yes"
              className="form-radio"
              onChange={(e) => {
                setReceiveCredit(e.target.value === "no" ? false : true);
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
              value="no"
              className="form-radio"
              onChange={(e) => {
                setReceiveCredit(e.target.value === "no" ? false : true);
              }}
            />
            <label htmlFor="no" className="pl-2 text-xs lg:text-sm">
              Não
            </label>
          </div>
        </fieldset>

        <fieldset className="flex gap-4 w-full">
          <legend className="pl-3 pb-2 text-sm">
            O projeto já foi instalado
          </legend>
          <div className="flex items-center pl-3">
            <input
              type="radio"
              id="yes-installed"
              name="ampliacao"
              value="yes"
              className="form-radio"
              defaultChecked={hasInstalled === true ? true : false}
              onChange={(e) => {
                setHasInstalled(e.target.value === "yes" ? true : false);
              }}
            />
            <label htmlFor="yes-installed" className="pl-2 text-xs lg:text-sm">
              Sim
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="not-installed"
              name="ampliacao"
              value="no"
              className="form-radio"
              defaultChecked={hasInstalled === false ? true : false}
              onChange={(e) => {
                setHasInstalled(e.target.value === "yes" ? true : false);
              }}
            />
            <label htmlFor="not-installed" className="pl-2 text-xs lg:text-sm">
              Não
            </label>
          </div>
        </fieldset>
      </div>
      {receiveCredit && (
        <>
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="pl-3 text-sm">
              Conta contrato a receber créditos 01
            </label>
            <Input type="text" className="w-full" id="email" />
          </fieldset>

          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="telefone" className="pl-3 text-sm flex-col">
              Media consumo conta contrato 01 (Obs: valor referente a kWh)
            </label>
            <Input type="number" className="w-full" id="telefone" />
          </fieldset>

          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="email" className="pl-3 text-sm">
              Conta contrato a receber créditos 02
            </label>
            <Input type="text" className="w-full" id="email" />
          </fieldset>

          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="telefone" className="pl-3 w-10/12 text-sm flex-col">
              Media consumo conta contrato 02 (Obs: valor referente a kWh)
            </label>
            <Input type="number" className="w-full" id="telefone" />
          </fieldset>
        </>
      )}
    </>
  );
}