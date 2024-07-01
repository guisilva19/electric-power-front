import Link from "next/link";

export default function SubFooter() {
  return (
    <>
      <div className="w-screen h-60 bg-green-water">
        <section className="flex flex-col gap-4">
          <h2>Economize com energia solar!</h2>
          <p>
            Descubra como nossos sistemas solares podem reduzir seus custos e
            contribuir para um futuro sustentável. Aproveite a energia limpa e
            eficiente hoje mesmo.
          </p>
        </section>
        <Link
          href="#"
          className="text-sm px-5 py-2 bg-gray flex items-center text-center rounded-full font-semibold"
        >
          Solicitar orçamento
        </Link>
      </div>
    </>
  );
}
