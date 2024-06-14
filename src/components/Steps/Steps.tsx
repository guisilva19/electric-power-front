import Image from "next/image";
import Background from "../../assets/background-solar.png";
import Avaliacao from "../../assets/avaliacao.svg";
import Projeto from "../../assets/projeto.svg";
import Instalacao from "../../assets/instalacao.svg";
import Homologacao from "../../assets/homologacao.svg";
import { Divider } from "@nextui-org/react";

export default function Steps() {
  return (
    <>
      <section className="w-screen bg-green-water py-14 flex flex-col items-center">
        <Divider className="bg-white w-10 h-1 rounded-full mb-5" />
        <h1 className="w-max text-white text-center text-xl md:text-2xl mb-14">
          Confira as <strong>etapas</strong> de um projeto
        </h1>

        <ul className="flex flex-col gap-14 lg:gap-20 lg:flex-row">
          <li className="flex flex-col gap-5 items-center w-36">
            <Image src={Avaliacao} alt="Avaliação e Planejamento" />
            <Divider className="bg-white w-10 h-1 rounded-full" />
            <h4 className="text-white text-lg text-center">
              Avaliação e <br />
              Planejamento
            </h4>
          </li>
          <li className="flex flex-col gap-5 items-center w-36">
            <Image src={Projeto} alt="Avaliação e Planejamento" />
            <Divider className="bg-white w-10 h-1 rounded-full" />
            <h4 className="text-white text-lg text-center">Projeto</h4>
          </li>
          <li className="flex flex-col gap-5 items-center w-36">
            <Image src={Instalacao} alt="Avaliação e Planejamento" />
            <Divider className="bg-white w-10 h-1 rounded-full" />
            <h4 className="text-white text-lg text-center">Instalação</h4>
          </li>
          <li className="flex flex-col gap-5 items-center w-36">
            <Image src={Avaliacao} alt="Avaliação e Planejamento" />
            <Divider className="bg-white w-10 h-1 rounded-full" />
            <h4 className="text-white text-lg text-center">
              Homologação <br />e Regularização
            </h4>
          </li>
        </ul>
      </section>
      {/* <figure className="h-60">
        <Image src={Background} alt="Background" />
      </figure> */}
    </>
  );
}
