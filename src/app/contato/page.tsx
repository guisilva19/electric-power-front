"use client";
import Image from "next/image";
import background from "@/assets/background-contato.svg";
import { Input } from "@nextui-org/react";

export default function Contato() {
  return (
    <>
      <main className="flex w-screen h-[90vh]">
        <div className="w-5/12 h-[90vh] flex flex-col justify-center items-center gap-10">
          <section className="w-7/12">
            <h2 className="text-2xl">
              Entre em <strong>contato</strong> conosco!
            </h2>
          </section>
          <form className="w-7/12 h-[600px] flex flex-col gap-4">
            <fieldset className="flex flex-col gap-2">
              <label htmlFor="nome" className="pl-3">
                Nome Completo
              </label>
              <input
                type="text"
                className="full h-12 border-2 border-[#AEAAAA] px-3"
                id="nome"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label htmlFor="email" className="pl-3">
                Seu email
              </label>
              <input
                type="text"
                className="full h-12 border-2 border-[#AEAAAA] px-3"
                id="email"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label htmlFor="telephone" className="pl-3">
                Seu telefone
              </label>
              <input
                type="text"
                className="full h-12 border-2 border-[#AEAAAA] px-3"
                id="telephone"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <label htmlFor="message" className="pl-3">
                Descrição
              </label>
              <textarea
                id="message"
                className="full h-28 border-2 border-[#AEAAAA] resize-none px-3 py-2"
              />
            </fieldset>

            <button className="w-max rounded-3xl bg-green-water text-white px-8 py-3 font-semibold mt-6">
              Enviar
            </button>
          </form>
        </div>
        <div className="w-7/12 h-[90vh]">
          <Image
            src={background}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </main>
    </>
  );
}
