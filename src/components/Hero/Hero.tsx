"use client";
import Image from "next/image";
import Background from "@/assets/background-hero.svg";
import Home from "@/assets/home.svg";
import HomeWhite from "@/assets/home-white.svg";
import Building from "@/assets/building.svg";
import BuildingWhite from "@/assets/building-white.svg";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";
import { citys } from "./data";

export default function Hero() {
  const [locale, setLocale] = useState<string>("");
  const [value, setValue] = useState<string>("R$ 0,00");

  const formatToBRL = (valueInput: any) => {
    const formattedValue = valueInput.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    console.log(formattedValue);
    setValue(formattedValue);
  };

  const formatCurrency = (text: string) => {
    let cleaned = text.replace(/\D/g, "");

    // Adiciona zeros à esquerda se houver menos de 3 dígitos
    // Isso garante que os centavos sejam tratados corretamente
    while (cleaned.length < 3) {
      cleaned = "0" + cleaned;
    }

    let integerPart = cleaned.slice(0, -2);
    let decimalPart = cleaned.slice(-2);

    integerPart = parseInt(integerPart).toLocaleString("pt-BR");

    let formatted = integerPart + "," + decimalPart;

    if (formatted !== "0,00") {
      formatted = "R$ " + formatted;
    }

    return formatted;
  };

  const handleValueChange = (text: string) => {
    const numericText = text.replace(/\s?R\$\s?/, "");
    setValue(formatCurrency(numericText));
  };

  return (
    <>
      <main className="w-screen relative" id="solicitar-orcamento">
        <figure className="w-screen">
          <div className="flex mdx:hidden w-screen bg-gradient-to-b from-[#2a1b3354] to-[#2A1B33] top-0 h-full z-20 absolute" />
          <div className="hidden mdx:flex w-screen bg-gradient-to-b from-transparent to-[#2A1B33] top-0 h-full z-20 absolute" />
          <Image
            src={Background}
            alt="Background"
            className="w-screen h-[1150px] mdx:h-[900px] object-cover object-center z-50"
          />
        </figure>

        <div className="w-screen h-full flex flex-col mdx:flex-row justify-center items-center gap-10 md:gap-20 mdx:gap-8 lg:gap-14 xl:gap-40 absolute top-0 z-50">
          <section className="flex flex-col text-white gap-4 xs:gap-6 lg:gap-10 w-[95%] xs:w-[450px] mdx:w-[510px] lx:w-[570px]">
            <h3 className="text-3xl lg:text-4xl lx:text-5xl font-bold">
              Deixe que o sol pague <br />a sua conta de energia!
            </h3>
            <ul className="flex flex-col gap-2 xs:gap-5">
              <li className="w-full flex items-center gap-3">
                <div className="w-3 h-3 bg-green-water rounded-sm" />
                <p className="text-[13px] lg:text-base lx:text-lg font-light mdx:font-extralight">
                  Descubra o poder da{" "}
                  <strong className="font-bold">energia solar</strong> para
                  reduzir seus <br />
                  <strong className="font-bold">custos energéticos</strong>
                </p>
              </li>
              <li className="w-full flex items-center gap-3">
                <div className="w-3 h-3 bg-green-water rounded-sm" />
                <p className="text-[13px] lg:text-base lx:text-lg font-light mdx:font-extralight">
                  Com nossos{" "}
                  <strong className="font-bold">sistemas inovadores</strong>,
                  você pode gerar <br />
                  <strong className="font-bold">
                    eletricidade limpa
                  </strong> e{" "}
                  <strong className="font-bold">economizar dinheiro</strong> ao
                  mesmo tempo
                </p>
              </li>
              <li className="w-full flex items-center gap-3">
                <div className="w-3 h-3 bg-green-water rounded-sm" />
                <p className="text-[13px] lg:text-base lx:text-lg font-light mdx:font-extralight">
                  Dê um passo em direção a um{" "}
                  <strong className="font-bold">futuro mais sustentável</strong>
                  <br /> e <strong className="font-bold">econômico</strong> hoje
                  mesmo
                </p>
              </li>
            </ul>
          </section>

          <section className="w-11/12 xxs:w-[400px] lg:w-[440px] h-[700px] bg-white rounded-md flex flex-col items-center py-8 gap-5">
            <h3 className="text-green-water font-bold text-xl">
              Solicitar orçamento
            </h3>
            <form className="w-11/12 lg:w-[85%] flex flex-col gap-5">
              <fieldset className="flex flex-col gap-2">
                <label className="flex gap-1 font-bold text-sm lg:text-base">
                  Quero economizar para:
                  <mark className="text-green-water bg-transparent">*</mark>
                </label>
                <div className="flex justify-between lg:gap-0 gap-2">
                  <button
                    type="button"
                    onClick={() => setLocale("Empresa")}
                    className={`flex items-center justify-center gap-2 text-xs lg:text-sm font-bold border rounded-sm w-6/12 lg:w-[180px] h-12 ${
                      locale === "Empresa"
                        ? "bg-green-water text-white border-green-water"
                        : "bg-white text-black border border-[#858585]"
                    }`}
                  >
                    <Image
                      src={locale === "Empresa" ? BuildingWhite : Building}
                      alt="Predio"
                    />
                    Minha empresa
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale("Casa")}
                    className={`flex items-center justify-center gap-2 text-xs lg:text-sm font-bold border rounded-sm w-6/12 lg:w-[180px] h-12 ${
                      locale === "Casa"
                        ? "bg-green-water text-white border-green-water"
                        : "bg-white text-black border border-[#858585]"
                    }`}
                  >
                    <Image
                      src={locale === "Casa" ? HomeWhite : Home}
                      alt="Casa"
                    />
                    Minha casa
                  </button>
                </div>
              </fieldset>

              <div className="flex w-full gap-2">
                <fieldset className="w-6/12">
                  <label className="flex gap-1 font-bold text-sm lg:text-base">
                    Cidade:
                  </label>
                  <Select
                    className="h-9 lg:h-8"
                    size="sm"
                    items={citys}
                    label=""
                    placeholder=""
                    variant="underlined"
                  >
                    {(city) => (
                      <SelectItem key={city.value}>{city.name}</SelectItem>
                    )}
                  </Select>
                </fieldset>

                <fieldset className="w-6/12 h-10 flex flex-col justify-between">
                  <label className="flex gap-1 font-bold text-sm lg:text-base">
                    Endereço:
                    <mark className="text-green-water bg-transparent">*</mark>
                  </label>
                  <Input variant="underlined" size="sm" className="h-4" />
                </fieldset>
              </div>

              <fieldset className="w-full h-10 flex flex-col justify-between">
                <label className="flex gap-1 font-bold text-sm lg:text-base">
                  Nome completo:
                  <mark className="text-green-water bg-transparent">*</mark>
                </label>
                <Input variant="underlined" size="sm" className="h-4" />
              </fieldset>

              <fieldset className="w-full h-10 flex flex-col justify-between mt-3">
                <label className="flex gap-1 font-bold text-sm lg:text-base">
                  Seu melhor e-mail:
                  <mark className="text-green-water bg-transparent">*</mark>
                </label>
                <Input variant="underlined" size="sm" className="h-4" />
              </fieldset>

              <fieldset className="w-full h-10 flex flex-col justify-between mt-3">
                <label className="flex gap-1 font-bold text-sm lg:text-base">
                  Seu Whatsapp:
                  <mark className="text-green-water bg-transparent">*</mark>
                </label>
                <Input variant="underlined" size="sm" className="h-4" />
              </fieldset>

              <fieldset className="flex flex-col gap-2 mt-3">
                <label className="flex gap-1 font-bold text-sm lg:text-base">
                  Qual o valor da sua conta de luz por mês?
                </label>
                <input
                  type=""
                  className="w-full h-12 bg-gray/20 outline-none flex text-center font-bold rounded-sm"
                  value={value}
                  onChange={(e) => handleValueChange(e.target.value)}
                />
                <span className="text-xs">
                  Ao continuar você concorda em receber contato da Electric
                  Power e com os{" "}
                  <strong className="text-green-water">
                    Termos e Condições
                  </strong>
                </span>
              </fieldset>

              <button className="w-full h-12 rounded-3xl bg-yellow text-white font-bold">
                Solicitar orçamento
              </button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
