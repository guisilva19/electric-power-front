"use client";
import { Dispatch, SetStateAction } from "react";
import FormNotMagnification from "./FormNotMagnification";
import FormWithMagnification from "./FormWithMagnification";
import { useGlobalContext } from "@/context/context";

export default function FormTwo({
  setStep,
}: {
  setStep: Dispatch<SetStateAction<number>>;
}) {
  const { magnification, handleSubmitTwo, handleSubmitTwoMag } =
    useGlobalContext();

  const nextStep = (data: any) => {
    setStep((prev) => (prev += 1));
  };


  return (
    <>
      <form
        onSubmit={
          !magnification
            ? handleSubmitTwo(nextStep)
            : handleSubmitTwoMag(nextStep)
        }
        className="w-[320px] xs:w-[400px] lg:w-7/12 flex flex-col gap-2 lg:gap-4"
      >
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
