"use client";
import { Dispatch, SetStateAction } from "react";
import FormNotMagnification from "./FormNotMagnification";
import FormWithMagnification from "./FormWithMagnification";

export default function FormTwo({
  magnification,
  setStep,
}: {
  magnification: boolean | null;
  setStep: Dispatch<SetStateAction<number>>;
}) {
  return (
    <>
      <form className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 lg:gap-4">
        {magnification ? <FormWithMagnification /> : <FormNotMagnification />}
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
            // onClick={() => setStep((prev) => (prev += 1))}
          >
            Proximo
          </button>
        </div>
      </form>
    </>
  );
}
