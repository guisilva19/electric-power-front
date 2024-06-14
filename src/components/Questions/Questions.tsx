"use client";
import { useState } from "react";
import { questions } from "./data";
import { IoIosArrowForward } from "react-icons/io";

export default function Questions() {
  return (
    <>
      <div className="flex flex-col items-center w-screen h-full py-16 gap-7 relative">
        <div className="w-11/12 z-10">
          <h1 className="text-center text-xl md:text-2xl">
            <strong>Alguma pergunta?</strong> Estamos aqui para te ajudar!
          </h1>
        </div>
        <ul className="flex flex-col w-11/12 justify-center lg:w-[938px] gap-4 z-10">
          {questions.map((question, index) => (
            <ComponentQuestion
              key={index}
              title={question.title}
              description={question.description}
            />
          ))}
        </ul>
        <div className="absolute  bg-gradient-to-b from-[#c3e4ff] to-[#fff] w-screen h-40 z-0 top-0" />
      </div>
    </>
  );
}

function ComponentQuestion({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  const [isView, setIsView] = useState<boolean>(false);

  return (
    <>
      <div className="w-full flex flex-col">
        <div
          onClick={() => setIsView(!isView)}
          className={`flex justify-between items-center px-5 py-4 text-white font-medium text-xs sm:text-sm md:text-base gap-2  ${
            isView ? "bg-green-water" : "bg-gray"
          }`}
        >
          <h1 className="w-11/12">{title}</h1>
          <div className="w-[20px]">
            <IoIosArrowForward
              size={20}
              className={`${isView ? "rotate-90" : "rotate-0"}`}
            />
          </div>
        </div>
        {isView && (
          <p className="bg-[#EBE9E9] px-5 font-normal text-xs sm:text-sm md:text-base py-3">
            {description}
          </p>
        )}
      </div>
    </>
  );
}
