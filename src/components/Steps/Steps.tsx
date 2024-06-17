import Image from "next/image";
import Background from "../../assets/background-solar.jpg";
import Avaliacao from "../../assets/avaliacao.svg";
import Projeto from "../../assets/projeto.svg";
import Instalacao from "../../assets/instalacao.svg";
import Homologacao from "../../assets/homologacao.svg";
import { Divider } from "@nextui-org/react";
import Link from "next/link";

export default function Steps() {
  return (
    <>
      <div className="relative">
        <section className="w-screen bg-green-water pt-14 pb-36 flex flex-col items-center">
          <Divider className="bg-white w-10 h-1 rounded-full mb-5" />
          <h1 className="w-max text-white text-center text-xl md:text-2xl mb-14">
            Confira as <strong>etapas</strong> de um projeto
          </h1>

          <ul className="flex flex-col gap-14 lg:gap-20 lg:flex-row">
            <li className="flex flex-col gap-5 items-center w-36">
              <Image src={Avaliacao} alt="Avaliação e Planejamento" />
              <Divider className="bg-gray w-10 h-1 rounded-full" />
              <h4 className="text-gray text-lg text-center">
                Avaliação e <br />
                Planejamento
              </h4>
            </li>
            <li className="flex flex-col gap-5 items-center w-36">
              <Image src={Projeto} alt="Avaliação e Planejamento" />
              <Divider className="bg-gray w-10 h-1 rounded-full" />
              <h4 className="text-gray text-lg text-center">Projeto</h4>
            </li>
            <li className="flex flex-col gap-5 items-center w-36">
              <Image src={Instalacao} alt="Avaliação e Planejamento" />
              <Divider className="bg-gray w-10 h-1 rounded-full" />
              <h4 className="text-gray text-lg text-center">Instalação</h4>
            </li>
            <li className="flex flex-col gap-5 items-center w-36">
              <Image src={Homologacao} alt="Avaliação e Planejamento" />
              <Divider className="bg-gray w-10 h-1 rounded-full" />
              <h4 className="text-gray text-lg text-center">
                Homologação <br />e Regularização
              </h4>
            </li>
          </ul>
        </section>

        <div className="flex lg:hidden w-screen h-[400px] bg-gray justify-center items-center rounded-sm">
          <div className="w-10/12 sm:w-8/12 flex flex-col items-start gap-4">
            <h2 className="text-white text-xl font-bold">
              Instalar um sistema de 
              energia solar é um
              ótimo investimento
            </h2>
            <p className="text-white text-sm sm:w-[532px]">
              Sua conta de luz ficará imune à inflação energética, e a
              valorização do seu imóvel é imediata. Instale agora e parcele em{" "}
              <br />
              <strong>até 120 meses!</strong>
            </p>
            <Link
              href=""
              className="bg-yellow px-6 py-3 rounded-full font-bold text-gray"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex absolute w-[750px] h-[500px] bg-gray top-[410px] left-32 justify-center items-center rounded-sm">
          <div className="w-8/12 flex flex-col items-start gap-8">
            <h2 className="text-white text-4xl font-bold">
              Instalar um sistema de <br />
              energia solar é um <br />
              ótimo investimento
            </h2>
            <p className="text-white text-base">
              Sua conta de luz ficará imune à inflação energética, e <br />a
              valorização do seu imóvel é imediata. Instale agora <br />e
              parcele em <strong>até 120 meses!</strong>
            </p>
            <Link
              href=""
              className="bg-yellow px-6 py-3 rounded-full font-bold text-gray"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>

        <figure className="w-screen">
          <Image src={Background} alt="Background" className="" />
        </figure>
      </div>
    </>
  );
}
