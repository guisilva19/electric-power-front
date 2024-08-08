"use client";
import { useState } from "react";

const SelectWithLigacao = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customInput, setCustomInput] = useState("");

  const handleOptionChange = (event: any) => {
    const value = event.target.value;
    setSelectedOption(value);
    if (value !== "outro ") {
      setCustomInput("");
    }
  };

  const handleCustomInputChange = (event: any) => {
    setCustomInput(event.target.value);
  };

  const options = [{ id: "6" }, { id: "10" }, { id: "16" }, { id: "25" }, { id: "outro " }];

  return (
    <fieldset className="flex flex-col gap-4 p-4 rounded-md mt-2 lg:mt-4 w-full">
      <legend className="text-sm lg:text-base">Cabo do padrão (medidor)</legend>
      {options.map((option) => (
        <div key={option.id} className="flex items-center">
          <input
            type="radio"
            id={option.id}
            name="cabo"
            value={option.id}
            checked={selectedOption === option.id}
            onChange={handleOptionChange}
            className="form-radio"
          />
          <label htmlFor={option.id} className="pl-2 text-xs lg:text-sm">
            {option.id !== "outro " ? option.id + "mm²" : option.id}
          </label>
        </div>
      ))}
      {selectedOption === "outro " && (
        <div className="">
          <input
            type="number"
            id="cabo"
            name="cabo"
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

export default SelectWithLigacao;
