"use client";
import { useGlobalContext } from "@/context/context";
import { Input } from "@nextui-org/react";
import { useState } from "react";

export default function FormWithMagnification() {
  const { hasInstalled, setHasInstalled, registerFormTwoMag, errorsTwoMag } =
    useGlobalContext();
  const [receiveCredit, setReceiveCredit] = useState<boolean>(false);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="1" className="pl-3 text-sm w-10/12">
            Quantidade de módulos anteriormente homologados
          </label>
          <Input
            type="number"
            className="w-full"
            id="1"
            errorMessage={errorsTwoMag?.quantidade_modulos_homologados?.message}
            isInvalid={
              errorsTwoMag.quantidade_modulos_homologados ? true : false
            }
            {...registerFormTwoMag("quantidade_modulos_homologados")}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="2" className="pl-3 text-sm w-10/12">
            Modelo dos módulos anteriormente homologados
          </label>
          <Input
            type="text"
            className="w-full"
            id="2"
            errorMessage={errorsTwoMag?.modelo_do_modulo_homologado?.message}
            isInvalid={errorsTwoMag.modelo_do_modulo_homologado ? true : false}
            {...registerFormTwoMag("modelo_do_modulo_homologado")}
          />
        </fieldset>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="3" className="pl-3 text-sm w-10/12">
            Quantidade de inversores anteriormente homologados
          </label>
          <Input
            type="number"
            className="w-full"
            id="3"
            errorMessage={
              errorsTwoMag?.quantidade_inversores_homologados?.message
            }
            isInvalid={
              errorsTwoMag.quantidade_inversores_homologados ? true : false
            }
            {...registerFormTwoMag("quantidade_inversores_homologados")}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="4" className="pl-3 text-sm w-10/12">
            Modelo dos inversores anteriormente homologados
          </label>
          <Input
            type="text"
            className="w-full"
            id="4"
            errorMessage={errorsTwoMag?.modelo_do_inversor_homologado?.message}
            isInvalid={
              errorsTwoMag.modelo_do_inversor_homologado ? true : false
            }
            {...registerFormTwoMag("modelo_do_inversor_homologado")}
          />
        </fieldset>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="5" className="pl-3 text-sm w-10/12">
            Quantidade de módulos fotovoltaicos inseridos
          </label>
          <Input
            type="number"
            className="w-full"
            id="5"
            errorMessage={errorsTwoMag?.quantidade_modulos_inseridos?.message}
            isInvalid={errorsTwoMag.quantidade_modulos_inseridos ? true : false}
            {...registerFormTwoMag("quantidade_modulos_inseridos")}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="6" className="pl-3 text-sm w-10/12">
            Modelo dos módulos fotovoltaicos inseridos
          </label>
          <Input
            type="text"
            className="w-full"
            id="6"
            errorMessage={errorsTwoMag?.modelo_do_modulo_inserido?.message}
            isInvalid={errorsTwoMag.modelo_do_modulo_inserido ? true : false}
            {...registerFormTwoMag("modelo_do_modulo_inserido")}
          />
        </fieldset>
      </div>

      <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="7" className="pl-3 text-sm w-10/12">
            Quantidade de inversores inseridos
          </label>
          <Input
            type="number"
            className="w-full"
            id="7"
            errorMessage={
              errorsTwoMag?.quantidade_inversores_inseridos?.message
            }
            isInvalid={
              errorsTwoMag.quantidade_inversores_inseridos ? true : false
            }
            {...registerFormTwoMag("quantidade_inversores_inseridos")}
          />
        </fieldset>

        <fieldset className="flex flex-col gap-2 w-full">
          <label htmlFor="8" className="pl-3 text-sm w-10/12">
            Modelo dos inversores inseridos
          </label>
          <Input
            type="text"
            className="w-full"
            id="8"
            errorMessage={errorsTwoMag?.modelo_do_inversor_inserido?.message}
            isInvalid={errorsTwoMag.modelo_do_inversor_inserido ? true : false}
            {...registerFormTwoMag("modelo_do_inversor_inserido")}
          />
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
              name="credit"
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
              name="credit"
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
              name="installed"
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
              name="installed"
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
            <label htmlFor="9" className="pl-3 text-sm">
              Conta contrato a receber créditos 01
            </label>
            <Input type="text" className="w-full" id="9" />
          </fieldset>

          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="10" className="pl-3 text-sm flex-col">
              Media consumo conta contrato 01 (Obs: valor referente a kWh)
            </label>
            <Input type="number" className="w-full" id="10" />
          </fieldset>

          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="11" className="pl-3 text-sm">
              Conta contrato a receber créditos 02
            </label>
            <Input type="text" className="w-full" id="11" />
          </fieldset>

          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="12" className="pl-3 w-10/12 text-sm flex-col">
              Media consumo conta contrato 02 (Obs: valor referente a kWh)
            </label>
            <Input type="number" className="w-full" id="12" />
          </fieldset>
        </>
      )}
    </>
  );
}
