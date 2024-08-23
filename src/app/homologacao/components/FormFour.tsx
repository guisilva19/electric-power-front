"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { FileUpload } from "@/components/File/File";

export default function FormFour({
  setStep,
  hasInstalled,
}: {
  setStep: Dispatch<SetStateAction<number>>;
  hasInstalled: boolean | null;
}) {
  const [files, setFiles] = useState<File[]>([]);
  const handleFileUpload = (files: File[]) => {
    setFiles(files);
    console.log(files);
  };

  return (
    <>
      <form className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 lg:gap-4">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-4 mt-2 lg:mt-4">
          <FileUpload onChange={handleFileUpload} />
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
