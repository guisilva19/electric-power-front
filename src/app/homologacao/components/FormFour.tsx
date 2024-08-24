"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FileUpload } from "@/components/File/File";

export default function FormFour({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const [document, setDocument] = useState<File[]>([]);
  const handleFileUploadDocuments = (file: File[]) => {
    setDocument(file);
  };

  const [accountFile, setAccountFile] = useState<File[]>([]);
  const handleFileUploadAccount = (file: File[]) => {
    setAccountFile(file);
  };

  const [equipments, setEquipments] = useState<File[]>([]);
  const handleFileUploadEquipment = (file: File[]) => {
    setEquipments(file);
  };

  const [equipmentsMain, setEquipmentsMain] = useState<File[]>([]);
  const handleFileUploadEquipmentMain = (file: File[]) => {
    setEquipmentsMain(file);
  };

  return (
    <>
      <form className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 lg:gap-4">
        <span className="text-sm text-center">
          <strong>Obs: Anexe o máximo de fotos possível</strong>
        </span>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="nome" className="pl-3 text-sm">
              <p>
                Foto do documento de identidade (ou cnh)
                <strong className="text-red-500">*</strong>
              </p>
            </label>
            <FileUpload
              onChange={handleFileUploadDocuments}
              setFiles={setDocument}
              files={document}
            />
          </fieldset>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="nome" className="pl-3 text-sm">
              <p>
                Foto da conta contrato do local de instalação
                <strong className="text-red-500">*</strong>
              </p>
            </label>
            <FileUpload
              onChange={handleFileUploadAccount}
              setFiles={setAccountFile}
              files={accountFile}
            />
          </fieldset>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="nome" className="pl-3 text-sm">
              <p>
                Fotos dos inversores e medidores
                <strong className="text-red-500">*</strong>
              </p>
            </label>
            <FileUpload
              onChange={handleFileUploadEquipment}
              setFiles={setEquipments}
              files={equipments}
            />
          </fieldset>
        </div>

        <div className="flex flex-col lg:flex-row gap-2 lg:gap-4">
          <fieldset className="flex flex-col gap-2 w-full">
            <label htmlFor="nome" className="pl-3 text-sm">
              <p>
                Fotos do transformador e disjuntor
                <strong className="text-red-500">*</strong>
              </p>
            </label>
            <FileUpload
              onChange={handleFileUploadEquipmentMain}
              setFiles={setEquipmentsMain}
              files={equipmentsMain}
            />
          </fieldset>
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
            Enviar
          </button>
        </div>
      </form>
    </>
  );
}
