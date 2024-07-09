import Link from "next/link";

export default function SubFooter() {
  return (
    <>
      <div className="w-screen h-60 md:h-52 md:px-5 bg-green-water flex flex-col md:flex-row md:items-center lg:justify-center md:gap-10 text-white">
        <section className="flex flex-col gap-3 px-5 md:px-0 py-5 lg:w-[680px]">
          <h2 className="text-xl font-bold lg:text-3xl">Economize com energia solar!</h2>
          <p className="text-sm">
            Descubra como nossos sistemas solares podem reduzir seus custos e
            contribuir para um futuro sustentável. Aproveite a energia limpa e
            eficiente hoje mesmo.
          </p>
        </section>
        <Link
          href="/#solicitar-orcamento"
          className="w-44 h-max mx-5 md:mx-0 text-sm px-8 py-3 bg-gray flex items-center text-center text-nowrap justify-center rounded-full font-semibold"
        >
          Solicitar orçamento
        </Link>
      </div>
    </>
  );
}
