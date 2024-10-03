"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FileUpload } from "@/components/File/File";
import { toast } from "sonner";
import { useGlobalContext } from "@/context/context";
import { CiCircleCheck } from "react-icons/ci";

export default function FormFour({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const { handleHomologation } = useGlobalContext();

  const [result, setResult] = useState<any>();
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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

  const finish = async (event: React.FormEvent) => {
    event.preventDefault();

    if (
      equipmentsMain.length > 0 &&
      equipments.length > 0 &&
      accountFile.length > 0 &&
      document.length > 0
    ) {
      toast.promise(
        (async () => {
          setLoading(true);
          const result = await handleHomologation([
            ...document,
            ...accountFile,
            ...equipments,
            ...equipmentsMain,
          ]);

          if (!result.error) {
            setResult(result);
            setSuccess(true);
            window.open(result?.link_payment, "_blank");
          }

          setLoading(false);
          return;
        })(),
        {
          loading: "Processando informações...",
          success: "Informações processadas com sucesso!",
          error: "Erro ao processar informações, tente novamente.",
        }
      );
    } else {
      toast.error("Preencha todos os documentos");
    }
  };

  return (
    <>
      {!success ? (
        <>
          {loading ? (
            <div className="w-14 h-14 rounded-full border-2 border-green-water border-t-transparent animate-spin" />
          ) : (
            <form
              onSubmit={finish}
              className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 lg:gap-4"
            >
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
                  type="submit"
                  className="w-max h-[52px] rounded-3xl bg-green-water text-white px-8 py-3 font-semibold mt-6"
                >
                  Proximo
                </button>
              </div>
            </form>
          )}
        </>
      ) : (
        <div className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col items-center h-96">
          <CiCircleCheck color="#01ff16" size={60} />
          <h5 className="font-semibold text-base lg:text-xl text-center text-nowrap">
            Informações cadastradas com sucesso!
          </h5>
          <span className="text-center text-sm lg:text-xl">
            Para finalizar o processo {"\n"} faça o pagamento{" "}
            <a
              href={result?.link_payment}
              target="_blank"
              className="font-semibold underline"
            >
              Clicando aqui!
            </a>
          </span>
        </div>
      )}
    </>
  );
}
