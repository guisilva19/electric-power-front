import SubFooter from "@/components/SubFooter/SubFooter";
import projetoUm from "@/assets/projeto1.svg";
import projetoDois from "@/assets/projeto2.svg";
import projetoTres from "@/assets/projeto3.svg";
import projetoQuatro from "@/assets/projeto4.svg";
import projetoCinco from "@/assets/projeto5.svg";
import projetoSeis from "@/assets/projeto6.svg";
import CardProject from "@/components/CardProject/CardProject";

export default function Projetos() {
  return (
    <>
      <main className="w-screen flex flex-col items-center py-12 gap-7 lg:gap-12 mb-20">
        <div className="w-11/12 flex sm:justify-center lg:justify-start xl:w-[1200px] lg:mt-8">
          <h2 className="text-2xl font-bold lg:text-4xl">Projetos e Instalações</h2>
        </div>
        <ul className="w-screen sm:w-11/12 flex flex-wrap justify-center lg:justify-between gap-8 xl:w-[1200px]">
          {data.map((item, index) => (
            <CardProject item={item} key={index} />
          ))}
        </ul>
      </main>
      <SubFooter />
    </>
  );
}

const data = [
  {
    title: "Projeto Um",
    description: "Guanambi / BA - 46,2Kwp",
    src: projetoUm,
  },
  {
    title: "Projeto Dois",
    description: "Caetité / BA - 46,2Kwp",
    src: projetoDois,
  },
  {
    title: "Projeto Tres",
    description: "Guanambi / BA - 46,2Kwp",
    src: projetoTres,
  },
  {
    title: "Projeto Quatro",
    description: "Caetité / BA - 46,2Kwp",
    src: projetoQuatro,
  },
  {
    title: "Projeto Cinco",
    description: "Guanambi / BA - 46,2Kwp",
    src: projetoCinco,
  },
  {
    title: "Projeto Seis",
    description: "Caetité / BA - 46,2Kwp",
    src: projetoSeis,
  },
];
