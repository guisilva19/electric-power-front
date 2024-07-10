import SubFooter from "@/components/SubFooter/SubFooter";
import bombeamento from "@/assets/bombeamento-solar.svg";
import homologacao from "@/assets/homologacao-image.svg";
import paineis from "@/assets/paineis.svg";
import Image from "next/image";

export default function Services() {
  return (
    <>
      <main className="w-screen h-max flex flex-col items-center gap-8 lg:gap-12 pt-12 lg:pt-16 pb-20 lg:pb-28">
        <div className="w-11/12 flex sm:justify-center lg:justify-start xl:w-[1200px] lg:mt-8">
          <h2 className="text-2xl lg:text-4xl text-center ">
            <strong>Energize suas operações</strong> com soluções{" "}
            <strong>eficientes e sustentáveis.</strong>
          </h2>
        </div>

        <ul className="flex flex-wrap gap-10 justify-center xl:gap-14">
          {data.map((item, index) => (
            <li key={index} className="w-[350px] flex flex-col bg-slate-200">
              <div className="w-full h-52">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-5 py-7">
                <h3 className="text-green-water font-bold text-xl">{item.title}</h3>
                <p className="font-medium">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <SubFooter />
    </>
  );
}

const data = [
  {
    title: "Bombeamento Solar",
    description:
      "O bombeamento solar é uma solução eficiente e sustentável para a captação e distribuição de água. Utilizando a energia solar como fonte de alimentação, esse sistema é uma alternativa ambientalmente amigável para áreas remotas ou com acesso limitado à eletricidade tradicional. Seja para irrigação agrícola, abastecimento de água potável em comunidades rurais ou circulação de água em edifícios, o bombeamento solar é uma solução confiável e econômica.",
    image: bombeamento,
  },
  {
    title: "Homologação",
    description:
      "A homologação é essencial para garantir que os sistemas de energia solar atendam às regulamentações locais e nacionais. Envolve a obtenção de licenças, autorizações e certificações necessárias para a instalação e operação de sistemas fotovoltaicos. Nossa equipe especializada cuida de todos os aspectos burocráticos, assegurando que seu projeto solar esteja em conformidade com os requisitos legais e facilitando a implementação do sistema sem contratempos.",
    image: homologacao,
  },
  {
    title: "Instalação de Painéis Solares Residenciais e Empresariais",
    description:
      "Os painéis solares fotovoltaicos são uma solução sustentável e econômica para gerar energia limpa em residências e empresas. Nossa equipe de especialistas projeta e instala sistemas personalizados, cuidando de todas as etapas, desde a avaliação até a conexão à rede elétrica. Garantimos o máximo desempenho e economia, ajudando você a fazer a transição para uma fonte de energia mais sustentável.",
    image: paineis,
  },
];
