import Image from "next/image";
import background from "../../assets/background.png";
import Link from "next/link";

export default function Panel() {
  return (
    <>
      <div className="w-screen h-full bg-yellow sm:flex">
        <figure className="w-full sm:w-5/12 md:w-6/12">
          <Image
            src={background}
            alt="Background"
            className="sm:h-full bg-cover "
          />
        </figure>
        <section className="w-full sm:w-6/12 h-60 lg:min-h-full flex justify-center items-center mx-auto my-auto">
          <div className="w-10/12 flex flex-col gap-3 min-[445px]:w-[370px] lg:w-10/12 lg:gap-6">
            <h3 className="lg:hidden text-xl text-[#1E1E1E]">
              Desperte para um futuro melhor com a{" "}
              <strong>Electric Power</strong>
            </h3>
            <h3 className="hidden lg:block text-[#1E1E1E] text-3xl">
              Desperte para um <br />
              futuro melhor com <br /> a <strong>Electric Power</strong>
            </h3>
            <p className="text-xs lg:text-sm lg:w-[400px]">
              Transforme sua relação com a energia elétrica e descubra como a
              energia solar pode trazer economia e sustentabilidade para o seu
              dia a dia
            </p>
            <Link
              href=""
              className="w-max px-7 py-3 bg-white rounded-full text-center font-bold text-gray"
            >
              Solicitar orçamento
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
