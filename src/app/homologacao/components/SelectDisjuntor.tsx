"use client";
import { Dispatch, SetStateAction, useState } from "react";

const SelectWithDisjuntor = ({
  setValue,
}: {
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customInput, setCustomInput] = useState("");

  const handleOptionChange = (event: any) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value !== "outro") {
      setValue(value);
      setCustomInput("");
    }
  };

  const handleCustomInputChange = (event: any) => {
    setCustomInput(event.target.value);
    setValue(event.target.value);
  };

  const options = [
    { id: "50" },
    { id: "63" },
    { id: "70" },
    { id: "100" },
    { id: "outro" },
  ];

  return (
    <fieldset className="flex flex-col gap-4 p-4 rounded-md mt-2 lg:mt-4 w-full">
      <legend className="text-sm">Disjuntor do padrão (medidor)</legend>
      {options.map((option) => (
        <div key={option.id} className="flex items-center">
          <input
            type="radio"
            id={option.id}
            name="disjuntor"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <label htmlFor={option.id} className="pl-2 text-xs lg:text-sm">
            {option.id !== "outro" ? option.id + "A" : option.id}
          </label>
        </div>
      ))}
      {selectedOption === "outro" && (
        <div className="">
          <input
            type="number"
            id="disjuntor"
            name="disjuntor"
            value={customInput}
            onChange={handleCustomInputChange}
            placeholder="Digite sua opção"
            className="border border-gray-300 p-2 rounded-md w-full"
          />
        </div>
      )}
    </fieldset>
  );
};

export default SelectWithDisjuntor;
