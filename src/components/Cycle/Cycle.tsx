import Sun from "../../assets/sun.svg";
import SunAndCloud from "../../assets/sun-and-cloud.svg";
import CloudAndMoon from "../../assets/cloud-and-moon.svg";
import Image from "next/image";

export default function Cycle() {
  return (
    <>
      <div className="w-screen pt-14 pb-20 flex flex-col items-center gap-14">
        <section className="flex flex-col items-center">
          <h2 className="font-bold text-xl text-center md:text-3xl w-full px-2">
            Transforme cada momento do seu dia com energia solar!
          </h2>
          <span className="text-lg md:text-[28px]">Descubra como funciona o ciclo.</span>
        </section>

        <ul className="flex gap-8 xl:gap-14 flex-col lg:flex-row">
          <li className="bg-[#EFEFEF] w-[300px] sm:w-[350px] lg:w-[320px] xl:w-[380px] p-10 flex flex-col gap-5">
            <Image src={Sun} alt="Icone sol" />
            <h4 className="text-gray text-2xl font-bold">De manhã</h4>
            <p className="text-black">
              Desperte com energia! Nosso sistema entra em ação assim que o sol
              nasce, gerando eletricidade de forma sustentável e eficiente.
            </p>
          </li>

          <li className="bg-[#EFEFEF] w-[300px] sm:w-[350px] lg:w-[320px] xl:w-[380px] p-10 flex flex-col gap-5">
            <Image src={SunAndCloud} alt="Icone sol" />
            <h4 className="text-gray text-2xl font-bold">Durante o dia</h4>
            <p className="text-black">
              Ao longo do dia, você está no controle. Produza energia suficiente
              para cobrir suas necessidades e até mesmo acumule créditos extras
              para utilizar mais tarde.
            </p>
          </li>

          <li className="bg-[#EFEFEF] w-[300px] sm:w-[350px] lg:w-[320px] xl:w-[380px] p-10 flex flex-col gap-5">
            <Image src={CloudAndMoon} alt="Icone sol" />
            <h4 className="text-gray text-2xl font-bold">De noite</h4>
            <p className="text-black">
              Aproveite a tranquilidade da noite sabendo que, se gerou créditos
              durante o dia, pode usá-los agora. Equilibre seu consumo e até
              elimine sua conta de energia!
            </p>
          </li>
        </ul>
      </div>
    </>
  );
}
